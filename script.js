/* ============================================== */
/* SCRIPT.JS (VERSI FINAL & LENGKAP)      */
/* ============================================== */

// Menjalankan semua script setelah seluruh halaman HTML selesai dimuat
document.addEventListener('DOMContentLoaded', () => {

    // --- LOGIKA UNTUK MENU HAMBURGER MOBILE ---
    const hamburgerButton = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('nav-menu');

    if (hamburgerButton && mobileMenu) {
        hamburgerButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('show');
        });

        mobileMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('show');
            });
        });
    }

    // --- EFEK NAVBAR BERUBAH STYLE SAAT SCROLL ---
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.style.backgroundColor = 'rgba(29, 78, 216, 0.95)'; // Warna lebih gelap dengan blur
                navbar.style.backdropFilter = 'blur(10px)';
            } else {
                navbar.style.backgroundColor = ''; // Kembali ke style asli dari CSS
                navbar.style.backdropFilter = 'none';
            }
        });
    }

    // --- EFEK ANIMASI KARTU MUNCUL SAAT SCROLL ---
    const cardsToAnimate = document.querySelectorAll('.portfolio-card, .certificate-card, .timeline-content');
    
    const animateOnScroll = () => {
        cardsToAnimate.forEach(card => {
            if (card.getBoundingClientRect().top < window.innerHeight - 100) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Panggil sekali saat load
});

// --- FUNGSI GLOBAL (DI LUAR DOMContentLoaded) ---

function toggleCertificates() {
    const btn = document.querySelector('.show-more-btn');
    const isExpanded = btn.classList.toggle('expanded');
    
    document.querySelectorAll('.additional-certificate').forEach((cert, index) => {
        if (isExpanded) {
            cert.style.display = 'block';
        } else {
            cert.style.display = 'none';
        }
    });

    btn.querySelector('.btn-text').textContent = isExpanded ? 'Show Less' : 'Show More Certificates';
    const icon = btn.querySelector('.btn-icon');
    icon.classList.toggle('fa-chevron-down', !isExpanded);
    icon.classList.toggle('fa-chevron-up', isExpanded);
}

function changeImage(button, direction) {
    const imageContainer = button.closest('.card-image').querySelector('.project-image-container');
    const images = imageContainer.querySelectorAll('.project-image');
    let currentIndex = 0;

    images.forEach((img, index) => {
        if (img.style.display !== 'none') {
            currentIndex = index;
        }
    });

    images[currentIndex].style.display = 'none';
    let nextIndex = (currentIndex + direction + images.length) % images.length;
    images[nextIndex].style.display = 'block';
}
