document.addEventListener('DOMContentLoaded', () => {

    // --- LOGIKA MENU HAMBURGER ---
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('show');
        });

        navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('show');
            });
        });
    }

    // --- EFEK ACTIVE LINK DI NAVIGASI SAAT SCROLL ---
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a.nav-link');

    const activateMenuLink = () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - 75) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', activateMenuLink);
    activateMenuLink();

    // --- ANIMASI KARTU SAAT SCROLL ---
    const cards = document.querySelectorAll('.portfolio-card, .certificate-card, .timeline-content');
    const animateOnScroll = () => {
        cards.forEach(c => {
            if (c.getBoundingClientRect().top < window.innerHeight - 100) {
                c.style.opacity = '1'; c.style.transform = 'translateY(0)';
            }
        });
    };
    cards.forEach(c => {
        c.style.opacity = '0';
        c.style.transform = 'translateY(30px)';
        c.style.transition = 'opacity .6s ease, transform .6s ease';
    });
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
});



// --- FUNGSI UNTUK TOMBOL "SHOW MORE" SERTIFIKAT ---
function toggleCertificates() {
    const btn = document.querySelector('.show-more-btn');
    const isExpanded = btn.classList.toggle('expanded');

    document.querySelectorAll('.additional-certificate')
        .forEach((c) => {
            c.classList.toggle('show', isExpanded);
        });

    // Mengubah teks tombol
    btn.querySelector('.btn-text').textContent = isExpanded ? 'Show Less Certificates' : 'Show More Certificates';

}


// --- FUNGSI UNTUK KARUSEL GAMBAR PORTFOLIO ---
function changeImage(button, dir) {
    const card = button.closest('.portfolio-card');
    if (!card) return;

    const imgs = card.querySelectorAll('.project-image');
    if (imgs.length === 0) return;

    let currentIndex = -1;
    imgs.forEach((img, i) => {
        if (img.style.display !== 'none') {
            currentIndex = i;
        }
    });

    if (currentIndex === -1) currentIndex = 0;

    imgs[currentIndex].style.display = 'none';
    const nextIndex = (currentIndex + dir + imgs.length) % imgs.length;
    imgs[nextIndex].style.display = 'block';
}
