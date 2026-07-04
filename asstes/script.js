// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  var scrim = document.querySelector('.nav-scrim');

  function closeNav(){
    links && links.classList.remove('open');
    scrim && scrim.classList.remove('open');
  }
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
      scrim && scrim.classList.toggle('open');
    });
  }
  if (scrim) scrim.addEventListener('click', closeNav);
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    a.addEventListener('click', closeNav);
  });

  // Contact form (static demo — no backend wired up)
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var note = document.getElementById('form-success');
      if (note) {
        note.style.display = 'flex';
        form.reset();
        note.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  }

  // Product category quick-nav active state on scroll
  var catLinks = document.querySelectorAll('.cat-nav a');
  var cats = document.querySelectorAll('.product-cat');
  if (catLinks.length && cats.length) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          catLinks.forEach(function (l) { l.classList.remove('active'); });
          var match = document.querySelector('.cat-nav a[href="#' + entry.target.id + '"]');
          if (match) match.classList.add('active');
        }
      });
    }, { rootMargin: '-160px 0px -70% 0px' });
    cats.forEach(function (c) { obs.observe(c); });
  }
});
