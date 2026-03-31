/* ============================================
   THEME TOGGLE
   ============================================ */
const html = document.documentElement;
const themeBtn = document.getElementById('themeToggle');

// Restore saved preference
if (localStorage.getItem('theme') === 'light') {
  html.classList.add('light');
}

themeBtn.addEventListener('click', () => {
  html.classList.toggle('light');
  localStorage.setItem('theme', html.classList.contains('light') ? 'light' : 'dark');
});

/* ============================================
   NAVBAR SCROLL EFFECT
   ============================================ */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

/* ============================================
   MOBILE MENU
   ============================================ */
const menuBtn = document.getElementById('menuBtn');
const mobileNav = document.getElementById('mobileNav');
let mobileOpen = false;

menuBtn.addEventListener('click', () => {
  mobileOpen = !mobileOpen;
  mobileNav.classList.toggle('open', mobileOpen);
});

function closeMobile() {
  mobileOpen = false;
  mobileNav.classList.remove('open');
}

/* ============================================
   ROLE TYPEWRITER EFFECT
   ============================================ */
const roles = [
  'Software Engineer',
  'Data Scientist',
  'AI Builder',
  'Machine Learning Engineer',
  'Aspiring ML Engineer',
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;
const roleEl = document.getElementById('roleText');

function typeRole() {
  const current = roles[roleIndex];
  if (deleting) {
    roleEl.textContent = current.slice(0, charIndex--);
    if (charIndex < 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeRole, 500);
      return;
    }
    setTimeout(typeRole, 60);
  } else {
    roleEl.textContent = current.slice(0, charIndex++);
    if (charIndex > current.length) {
      deleting = true;
      setTimeout(typeRole, 2000);
      return;
    }
    setTimeout(typeRole, 100);
  }
}

setTimeout(typeRole, 800);

/* ============================================
   SCROLL FADE-IN ANIMATIONS
   ============================================ */
const animTargets = document.querySelectorAll(
  '.section__header, .about__text, .about__card, .skill-card, .project-card, .timeline__item, .cert-card, .contact__text, .contact__cta'
);

animTargets.forEach(el => el.classList.add('fade-in'));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, 80);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

animTargets.forEach(el => observer.observe(el));

/* ============================================
   STAGGERED ANIMATION FOR GRIDS
   ============================================ */
const gridItems = document.querySelectorAll('.skills__grid .skill-card, .projects__grid .project-card');
gridItems.forEach((el, i) => {
  el.style.transitionDelay = `${(i % 3) * 80}ms`;
});

/* ============================================
   ACTIVE NAV LINK ON SCROLL
   ============================================ */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) {
      current = sec.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.style.color = link.getAttribute('href') === `#${current}`
      ? 'var(--clr-accent-light)'
      : '';
  });
});
