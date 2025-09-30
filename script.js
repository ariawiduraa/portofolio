document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navbar scroll effect
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
    
    // Initialize all portfolio carousels
    document.querySelectorAll('.portfolio-card').forEach(card => {
        card.setAttribute('data-current-index', '0');
    });
});

// CTA button scroll
function scrollToContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

// Certificate toggle
function toggleCertificates() {
    const btn = document.querySelector('.show-more-btn');
    const isExpanded = btn.classList.toggle('expanded');
    
    document.querySelectorAll('.additional-certificate').forEach((cert, index) => {
        setTimeout(() => {
            cert.classList.toggle('show', isExpanded);
        }, index * (isExpanded ? 100 : 50));
    });
    
    btn.querySelector('.btn-text').textContent = isExpanded ? 'Show Less Certificates' : 'Show More Certificates';
    btn.querySelector('.btn-icon').className = isExpanded ? 'btn-icon fas fa-chevron-up' : 'btn-icon fas fa-chevron-down';
}

// Dynamic image carousel for portfolio
function changeImage(button, direction) {
    const card = button.closest('.portfolio-card');
    const images = JSON.parse(card.getAttribute('data-images'));
    let currentIndex = parseInt(card.getAttribute('data-current-index'));
    
    currentIndex = (currentIndex + direction + images.length) % images.length;
    
    const imageElement = card.querySelector('.project-image');
    imageElement.style.opacity = '0';
    
    setTimeout(() => {
        imageElement.src = images[currentIndex];
        imageElement.style.opacity = '1';
    }, 300); // Wait for fade out transition
    
    card.setAttribute('data-current-index', currentIndex);
}
