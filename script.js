// Minimal interactivity for the neuroman.tech landing page.
// No dependencies.

// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('nav-menu');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  menu.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    })
  );
}

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && reveals.length) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  reveals.forEach((el) => io.observe(el));
} else {
  reveals.forEach((el) => el.classList.add('visible'));
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());
