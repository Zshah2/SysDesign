document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navWrapper = document.getElementById('nav-wrapper');

  // Toggle whole navbar (top-bar + nav) on hamburger click
  hamburger.addEventListener('click', () => {
    navWrapper.classList.toggle('active');
    hamburger.setAttribute(
      'aria-expanded',
      navWrapper.classList.contains('active') ? 'true' : 'false'
    );
  });

  // Dropdown toggles for mobile - open submenu when parent clicked
  const dropdownParents = document.querySelectorAll('.has-dropdown > a');

  dropdownParents.forEach(parent => {
    parent.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const li = parent.parentElement; // the <li> that has .has-dropdown
        li.classList.toggle('active');

        // Update aria-expanded for accessibility
        const expanded = li.classList.contains('active');
        parent.setAttribute('aria-expanded', expanded);
      }
    });
  });

  // Optional: Close menus when resizing to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      navWrapper.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
      document.querySelectorAll('.has-dropdown.active').forEach(li => {
        li.classList.remove('active');
        li.querySelector('a').setAttribute('aria-expanded', 'false');
      });
    }
  });
});
