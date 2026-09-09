/* HISKI Jabar — perilaku umum situs publik */
(function () {
  'use strict';

  // Tandai menu aktif berdasarkan nama file
  var here = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('.site-nav a[href]').forEach(function (a) {
    var target = (a.getAttribute('href').split('/').pop() || '').toLowerCase();
    if (target && target === here) a.classList.add('active');
  });

  // Menu mobile
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('siteNav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Bayangan header saat digulir
  var header = document.querySelector('.site-header');
  if (header) {
    var onScroll = function () {
      header.classList.toggle('is-scrolled', window.scrollY > 8);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Tahun berjalan di footer
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // Animasi muncul saat digulir
  var items = document.querySelectorAll('.reveal');
  if (items.length) {
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
      items.forEach(function (el) { io.observe(el); });
    } else {
      items.forEach(function (el) { el.classList.add('in'); });
    }
  }

  // Form demo: tidak mengirim ke mana pun
  document.querySelectorAll('form[data-demo]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      window.HISKI.toast('Ini demo — data tidak dikirim ke server.');
      form.reset();
    });
  });

  // Toast sederhana
  window.HISKI = window.HISKI || {};
  window.HISKI.toast = function (msg) {
    var old = document.querySelector('.toast');
    if (old) old.remove();
    var t = document.createElement('div');
    t.className = 'toast';
    t.setAttribute('role', 'status');
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(function () { t.remove(); }, 2600);
  };
})();
