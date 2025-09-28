// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Add click event listeners to all nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the target section ID
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Smooth scroll to the target section
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Function to scroll to contact section (called by CTA button)
function scrollToContact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}


// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.backgroundColor = '#fff';
        navbar.style.backdropFilter = 'none';
    }
});

// Add animation on scroll for portfolio cards
function animateOnScroll() {
    const cards = document.querySelectorAll('.portfolio-card');
    
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (cardTop < windowHeight - 100) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
}

// Initialize card animations
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.portfolio-card');
    
    // Set initial state for animation
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Add scroll listener for animations
    window.addEventListener('scroll', animateOnScroll);
    
    // Trigger initial animation check
    animateOnScroll();
});

// Add hover effect for CTA button
document.addEventListener('DOMContentLoaded', function() {
    const ctaButton = document.querySelector('.cta-button');
    
    if (ctaButton) {
        ctaButton.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.05)';
        });
        
        ctaButton.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    }
});

// Mobile menu toggle (for future enhancement)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Allow Enter key to trigger CTA button
    if (e.key === 'Enter' && e.target.classList.contains('cta-button')) {
        scrollToContact();
    }
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Certificate Show More/Show Less functionality
let certificatesExpanded = false;

function toggleCertificates() {
    const additionalCertificates = document.querySelectorAll('.additional-certificate');
    const showMoreBtn = document.querySelector('.show-more-btn');
    const btnText = showMoreBtn.querySelector('.btn-text');
    const btnIcon = showMoreBtn.querySelector('.btn-icon');
    
    if (!certificatesExpanded) {
        // Show additional certificates
        additionalCertificates.forEach((cert, index) => {
            setTimeout(() => {
                cert.classList.add('show');
            }, index * 100); // Staggered animation
        });
        
        btnText.textContent = 'Show Less Certificates';
        btnIcon.textContent = '▲';
        showMoreBtn.classList.add('expanded');
        certificatesExpanded = true;
    } else {
        // Hide additional certificates
        additionalCertificates.forEach((cert, index) => {
            setTimeout(() => {
                cert.classList.remove('show');
            }, index * 50); // Faster hide animation
        });
        
        btnText.textContent = 'Show More Certificates';
        btnIcon.textContent = '▼';
        showMoreBtn.classList.remove('expanded');
        certificatesExpanded = false;
    }
}

// Smooth scroll to certificates section when clicking certificate links
document.addEventListener('DOMContentLoaded', function() {
    const certificateLinks = document.querySelectorAll('.certificate-link');
    
    certificateLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Add a small delay to allow the link to open
            setTimeout(() => {
                // Optional: You can add analytics tracking here
                console.log('Certificate viewed:', this.href);
            }, 100);
        });
    });
});

// Image carousel functionality for portfolio projects
const projectImages = {
    'project1': [
        'project1logo.png',
        'project1.png',
        'project1-2.png',
        'project1-3.png',
        'project1-4.png',
        'project1-5.png',
        'project1-6.png'
    ],
    'project2': [
        'project2.png',
        'project2-2.png',
    ],
    'project3': [
        'project3.jpg',
        'project3-2.jpg',
        'project3-3.jpg'
    ]
};

let currentImageIndex = {
    'project1': 0,
    'project2': 0,
    'project3': 0
};

function changeImage(button, direction) {
    // Find the project card containing this button
    const portfolioCard = button.closest('.portfolio-card');
    const projectImage = portfolioCard.querySelector('.project-image');
    const projectContainer = portfolioCard.querySelector('.project-image-container');
    
    // Determine which project this is based on the image src
    let projectKey = 'project1'; // default
    if (projectImage.src.includes('project2')) projectKey = 'project2';
    else if (projectImage.src.includes('project3')) projectKey = 'project3';
    
    // Update image index
    currentImageIndex[projectKey] += direction;
    
    // Handle wrapping around
    const images = projectImages[projectKey];
    if (currentImageIndex[projectKey] >= images.length) {
        currentImageIndex[projectKey] = 0;
    } else if (currentImageIndex[projectKey] < 0) {
        currentImageIndex[projectKey] = images.length - 1;
    }
    
    // Update image source
    const newImageSrc = images[currentImageIndex[projectKey]];
    projectImage.src = newImageSrc;
    
    // Add fade effect
    projectImage.style.opacity = '0';
    setTimeout(() => {
        projectImage.style.opacity = '1';
    }, 150);
}

// Initialize project images on page load
document.addEventListener('DOMContentLoaded', function() {
    const projectImages = document.querySelectorAll('.project-image');
    
    projectImages.forEach((img, index) => {
        // Set initial image source
        const projectKey = `project${index + 1}`;
        if (projectImages[projectKey] && projectImages[projectKey].length > 0) {
            img.src = projectImages[projectKey][0];
        }
        
        // Add error handling for missing images
        img.addEventListener('error', function() {
            this.style.display = 'none';
            const placeholder = this.nextElementSibling;
            if (placeholder) {
                placeholder.style.display = 'flex';
            }
        });
    });
});
