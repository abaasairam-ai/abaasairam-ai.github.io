/* Screen switching for the demo pages.

   Each demo holds two or three <section class="screen" id="..."> blocks.
   Anything with data-go="<id>" switches to that screen — the sidebar links
   and the tab bar both use it. No framework, no build step.

   The demos are static rebuilds, so this navigates between prepared screens.
   It does not fetch anything, because there is nothing to fetch. */
(function () {
  'use strict';

  var screens = [].slice.call(document.querySelectorAll('.screen'));
  if (!screens.length) return;

  var triggers = [].slice.call(document.querySelectorAll('[data-go]'));

  function show(id, focus) {
    var found = false;
    screens.forEach(function (s) {
      var on = s.id === id;
      s.hidden = !on;
      if (on) found = true;
    });
    if (!found) return;

    triggers.forEach(function (t) {
      var on = t.getAttribute('data-go') === id;
      t.classList.toggle('on', on);
      if (t.hasAttribute('role') || t.classList.contains('tab')) {
        t.setAttribute('aria-selected', on ? 'true' : 'false');
      }
    });

    /* Update the header to match the screen being shown. */
    var target = document.getElementById(id);
    var title = target.getAttribute('data-title');
    var crumb = target.getAttribute('data-crumb');
    var h2 = document.querySelector('.top h2');
    var cr = document.querySelector('.top .crumb');
    if (title && h2) h2.textContent = title;
    if (crumb && cr) cr.textContent = crumb;

    if (history.replaceState) history.replaceState(null, '', '#' + id);
    if (focus) target.setAttribute('tabindex', '-1');
  }

  triggers.forEach(function (t) {
    t.addEventListener('click', function (e) {
      e.preventDefault();
      show(t.getAttribute('data-go'), true);
    });
    t.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        show(t.getAttribute('data-go'), true);
      }
    });
  });

  /* Deep links: /demos/recon-app.html#allocations opens that screen. */
  var initial = (location.hash || '').replace('#', '');
  var valid = screens.some(function (s) { return s.id === initial; });
  show(valid ? initial : screens[0].id, false);
})();
