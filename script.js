document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navWrapper = document.getElementById('nav-wrapper');
  const closeNav = document.getElementById('close-nav');
  const dropdownParents = document.querySelectorAll('.has-dropdown > a');

  // Toggle menu open/close
  hamburger.addEventListener('click', () => {
    navWrapper.classList.add('active');
    hamburger.setAttribute('aria-expanded', 'true');
  });

  closeNav.addEventListener('click', () => {
    navWrapper.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
  });

  // Dropdown toggles on mobile
  dropdownParents.forEach(parent => {
    parent.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const li = parent.parentElement;
        const dropdown = parent.nextElementSibling;

        li.classList.toggle('open');
        dropdown.classList.toggle('open');
      }
    });
  });

  // Reset when resizing back to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      navWrapper.classList.remove('active');
      document.querySelectorAll('.dropdown.open').forEach(d => d.classList.remove('open'));
      document.querySelectorAll('.has-dropdown.open').forEach(li => li.classList.remove('open'));
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
});
