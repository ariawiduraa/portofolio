document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling
    document.querySelectorAll('.nav-link').forEach(link =>
      link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href'))
          ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      })
    );
  
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY > 50;
      navbar.style.backgroundColor = scrolled ? 'rgba(255,255,255,0.95)' : '#fff';
      navbar.style.backdropFilter = scrolled ? 'blur(10px)' : 'none';
    });
  
    // Animate cards
    const cards = document.querySelectorAll('.portfolio-card, .certificate-card, .timeline-content');
    const animateOnScroll = () => cards.forEach(c => {
      if (c.getBoundingClientRect().top < window.innerHeight - 100) {
        c.style.opacity = 1; c.style.transform = 'translateY(0)';
      }
    });
    cards.forEach(c => Object.assign(c.style, {
      opacity: 0, transform: 'translateY(30px)',
      transition: 'opacity .6s ease, transform .6s ease'
    }));
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
  });
  
  // Toggle certificates
  function toggleCertificates() {
    const btn = document.querySelector('.show-more-btn'),
          isExpanded = btn.classList.toggle('expanded');
    document.querySelectorAll('.additional-certificate')
      .forEach((c,i) => setTimeout(() => c.classList.toggle('show', isExpanded), i*(isExpanded?100:50)));
    btn.querySelector('.btn-text').textContent = isExpanded ? 'Show Less Certificates' : 'Show More Certificates';
    btn.querySelector('.btn-icon').textContent = isExpanded ? '▲' : '▼';
  }
  
  // Image carousel
  function changeImage(button, dir) {
    const imgs = button.closest('.portfolio-card').querySelectorAll('.project-image');
    let idx = [...imgs].findIndex(img => img.style.display !== 'none');
    imgs[idx < 0 ? 0 : idx].style.display = 'none';
    imgs[(idx + dir + imgs.length) % imgs.length].style.display = 'block';
  }
  
