
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

if (hamburger) {

  hamburger.addEventListener('click', () => {

    menuOpen = !menuOpen;

    mobileMenu.classList.toggle(
      'open',
      menuOpen
    );

    const spans = hamburger.querySelectorAll('span');

    if (menuOpen) {
      spans[0].style.transform =
      'translateY(7px) rotate(45deg)';

      spans[1].style.opacity='0';

      spans[2].style.transform=
      'translateY(-7px) rotate(-45deg)';

    } else {

      spans[0].style.transform='';
      spans[1].style.opacity='';
      spans[2].style.transform='';

    }

  });

}


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
// ===============================
// DOCES
// ===============================
document.querySelectorAll('#sweets, a[href="#docesGaleria"]').forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();

    const galeria = document.getElementById('docesGaleria');

    if (galeria) {
      galeria.classList.add('active');

      galeria.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});


// ===============================
// SALGADOS
// ===============================
document.querySelectorAll('#savory, a[href="#salgadosGaleria"]').forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();

    const galeria = document.getElementById('salgadosGaleria');

    if (galeria) {
      galeria.classList.add('active');

      galeria.scrollIntoView({
        behavior:'smooth',
        block:'start'
      });
    }
  });
});
// ===============================
// ESPECIAIS
// ===============================
document.querySelectorAll('#Especiais, a[href="#especiais"]').forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();

    const galeria = document.getElementById('especiais');

    if (galeria) {
      galeria.classList.add('active');

      galeria.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ===============================
// CARROSSEL DOCES
// ===============================
const setupCarousel = (
    viewportId,
    prevBtnId,
    nextBtnId
) => {

    const viewport=document.getElementById(viewportId);
    const prevBtn=document.getElementById(prevBtnId);
    const nextBtn=document.getElementById(nextBtnId);

    if(!viewport || !prevBtn || !nextBtn) return;

    const item=viewport.querySelector('.product-item-carousel');

    const scrollAmount=
      item ? item.offsetWidth+28 : 300;

    nextBtn.addEventListener('click',()=>{

        viewport.scrollBy({
            left:scrollAmount,
            behavior:'smooth'
        });

    });

    prevBtn.addEventListener('click',()=>{

        viewport.scrollBy({
            left:-scrollAmount,
            behavior:'smooth'
        });

    });

};


// ativa os dois
setupCarousel(
"carouselViewport",
"prevBtn",
"nextBtn"
);

setupCarousel(
"salgadosCarouselViewport",
"salgadosPrevBtn",
"salgadosNextBtn"
);

setupCarousel('paesViewport', 'paesPrev', 'paesNext');
setupCarousel('salgadinhosViewport', 'salgadinhosPrev', 'salgadinhosNext');
setupCarousel('pratosViewport', 'pratosPrev', 'pratosNext');
setupCarousel('bolachasViewport', 'bolachasPrev', 'bolachasNext');
setupCarousel('bolosViewport', 'bolosPrev', 'bolosNext');

document.querySelectorAll('#Especiais, a[href="#especiais"]').forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();

    const galeria = document.getElementById('especiais');

    if (galeria) {
      galeria.classList.add('active');

      galeria.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});