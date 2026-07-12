// Hamburger menu toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('nav-toggle-btn');
  var nav = document.querySelector('.main-nav');
  var header = document.querySelector('.site-header');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('nav-open');
    toggle.classList.toggle('nav-toggle-active', isOpen);
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close menu when a nav link is tapped
  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('nav-open');
      toggle.classList.remove('nav-toggle-active');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
});