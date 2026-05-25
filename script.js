
// --- Navbar scroll shadow ---
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// --- Hamburger / Mobile Menu ---
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
let menuOpen = false;

hamburger.addEventListener('click', () => {
  menuOpen = !menuOpen;
  mobileMenu.classList.toggle('open', menuOpen);

  // Animate hamburger to X
  const spans = hamburger.querySelectorAll('span');
  if (menuOpen) {
    spans[0].style.transform = 'translateY(7px) rotate(45deg)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
  } else {
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  }
});

// Close mobile menu when a link is clicked
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menuOpen = false;
    mobileMenu.classList.remove('open');
    const spans = hamburger.querySelectorAll('span');
    spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  });
});

// --- Scroll Reveal ---
const revealElements = document.querySelectorAll(
  '.card, .quality-left, .quality-right, .newsletter-box, .footer-grid > *'
);

revealElements.forEach((el, i) => {
  el.classList.add('reveal');
  // Stagger cards
  if (el.classList.contains('card')) {
    el.style.transitionDelay = `${i * 0.08}s`;
  }
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealElements.forEach(el => revealObserver.observe(el));

// --- Parallax on hero image ---
const heroImg = document.querySelector('.hero-img');
if (heroImg) {
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    heroImg.style.transform = `translateY(${scrollY * 0.35}px)`;
  }, { passive: true });
}


const newsletterForm = document.getElementById('newsletterForm');
const newsletterSuccess = document.getElementById('newsletterSuccess');

if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = newsletterForm.querySelector('input');
    if (input.value) {
      newsletterForm.style.opacity = '0';
      newsletterForm.style.transform = 'translateY(-10px)';
      newsletterForm.style.transition = 'all 0.4s ease';
      setTimeout(() => {
        newsletterForm.style.display = 'none';
        newsletterSuccess.classList.add('show');
      }, 400);
    }
  });
}

//  Smooth close mobile menu on outside click 
document.addEventListener('click', (e) => {
  if (menuOpen && !mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
    menuOpen = false;
    mobileMenu.classList.remove('open');
    const spans = hamburger.querySelectorAll('span');
    spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  }
});
// ==========================================================================
// ADICIONAR: CONTROLO ATIVO DO CARROSSEL DE DOCES
// ==========================================================================
document.querySelectorAll('a[href="#sweets"], #sweets').forEach(elemento => {
  elemento.addEventListener('click', (e) => {
    e.preventDefault();
    
    const galeria = document.getElementById('docesGaleria');
    if (galeria) {
      galeria.classList.add('active');
      
      // Desloca o ecrã de forma suave até ao carrossel
      galeria.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });
});

// Lógica de deslocamento (scroll) através dos botões/setas
const viewport = document.getElementById('carouselViewport');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

if (viewport && prevBtn && nextBtn) {
  // Define o quanto o carrossel avança a cada clique (largura do card + gap)
  const scrollAmount = 332; 

  nextBtn.addEventListener('click', () => {
    viewport.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });

  prevBtn.addEventListener('click', () => {
    viewport.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });
}


document.querySelectorAll('a[href="#savory"], #savory').forEach(elemento => {
  elemento.addEventListener('click', (e) => {
    e.preventDefault();
    
    const galeriaSalgados = document.getElementById('salgadosGaleria');
    if (galeriaSalgados) {
      galeriaSalgados.classList.add('active');
      
      // Desloca a tela suavemente até o carrossel de salgados
      galeriaSalgados.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });
});

// Lógica de deslocamento (scroll) do carrossel de salgados
const salgadosViewport = document.getElementById('salgadosCarouselViewport');
const salgadosPrevBtn = document.getElementById('salgadosPrevBtn');
const salgadosNextBtn = document.getElementById('salgadosNextBtn');

if (salgadosViewport && salgadosPrevBtn && salgadosNextBtn) {
  const scrollAmountSalgados = 332; // largura do card + gap

  salgadosNextBtn.addEventListener('click', () => {
    salgadosViewport.scrollBy({ left: scrollAmountSalgados, behavior: 'smooth' });
  });

  salgadosPrevBtn.addEventListener('click', () => {
    salgadosViewport.scrollBy({ left: -scrollAmountSalgados, behavior: 'smooth' });
  });
}