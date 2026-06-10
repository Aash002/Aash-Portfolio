const year = document.querySelector('[data-year]');
if (year) year.textContent = new Date().getFullYear();

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const reveals = document.querySelectorAll('.reveal');

if (!reduceMotion && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }
  }, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' });

  reveals.forEach((el, index) => {
    el.style.transitionDelay = `${Math.min(index * 28, 180)}ms`;
    observer.observe(el);
  });
} else {
  reveals.forEach((el) => el.classList.add('is-visible'));
}
