document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navWrapper = document.getElementById('nav-wrapper');
  
    // Toggle whole navbar (top-bar + nav) on hamburger click
    hamburger.addEventListener('click', () => {
      navWrapper.classList.toggle('active');
    });
  
    // Dropdown toggles for mobile - open submenu when parent clicked
    const dropdownParents = document.querySelectorAll('.has-dropdown > a');
  
    dropdownParents.forEach(parent => {
      parent.addEventListener('click', (e) => {
        // Prevent default link behavior on small screens only
        if(window.innerWidth <= 768) {
          e.preventDefault();
          const dropdown = parent.nextElementSibling;
          dropdown.classList.toggle('open');
        }
      });
    });
  
    // Optional: Close dropdown if window resizes larger than mobile width
    window.addEventListener('resize', () => {
      if(window.innerWidth > 768) {
        // Remove active nav wrapper and open dropdowns
        navWrapper.classList.remove('active');
        document.querySelectorAll('.dropdown.open').forEach(dropdown => {
          dropdown.classList.remove('open');
        });
      }
    });
  });
  