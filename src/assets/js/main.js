const navToggle = document.querySelector('[data-nav-toggle]');
const mobileMenu = document.querySelector('[data-mobile-menu]');

if (navToggle && mobileMenu) {
  navToggle.addEventListener('click', () => {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isExpanded));
    mobileMenu.classList.toggle('hidden');
  });
}

const yearTarget = document.querySelector('[data-current-year]');
if (yearTarget) {
  yearTarget.textContent = new Date().getFullYear();
}
