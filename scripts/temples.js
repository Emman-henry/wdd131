const navToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
  if (navMenu.style.display === 'none' || navMenu.style.display === '') {
    navMenu.style.display = 'block';
    navToggle.textContent = '✕ ';  // Show X to close nav
    navToggle.setAttribute('aria-label', 'Close navigation menu');
  } else {
    navMenu.style.display = 'none';
    navToggle.textContent = '☰';  // Show Home to open nav
    navToggle.setAttribute('aria-label', 'Open navigation menu');
  }
});
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
