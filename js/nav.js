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


// ── Tournament photo carousels ──────────────────────────────────────────────
document.querySelectorAll('.carousel').forEach(function (carousel) {
  var track = carousel.querySelector('.carousel-track');
  var imgs = carousel.querySelectorAll('.carousel-img');
  var dotsContainer = carousel.querySelector('.carousel-dots');
  var captionEl = carousel.querySelector('.carousel-caption');
  var total = imgs.length;
  if (total < 2) return; // single photo — no carousel needed

  var current = 0;

  // Build dots
  var dots = [];
  for (var i = 0; i < total; i++) {
    var dot = document.createElement('button');
    dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', 'Photo ' + (i + 1));
    dotsContainer.appendChild(dot);
    dots.push(dot);
    (function (idx) {
      dot.addEventListener('click', function () { goTo(idx); resetTimer(); });
    })(i);
  }

  function goTo(idx) {
    current = (idx + total) % total;
    track.style.transform = 'translateX(-' + (current * 100) + '%)';
    dots.forEach(function (d, i) {
      d.classList.toggle('active', i === current);
    });
    // Fade caption
    if (captionEl) {
      captionEl.classList.add('fading');
      setTimeout(function () {
        captionEl.textContent = imgs[current].dataset.caption || '';
        captionEl.classList.remove('fading');
      }, 300);
    }
  }

  // Auto-advance
  var delay = parseInt(carousel.dataset.autoplay) || 4000;
  var timer = setInterval(function () { goTo(current + 1); }, delay);

  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(function () { goTo(current + 1); }, delay);
  }
});