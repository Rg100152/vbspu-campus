/* VBSPU Campus — masonry gallery filters and fullscreen lightbox */
(function () {
  'use strict';

  const grid = document.getElementById('gallery-grid');
  const items = Array.from(document.querySelectorAll('.gallery-item'));
  const chips = Array.from(document.querySelectorAll('[data-gallery-filter]'));
  const emptyState = document.getElementById('gallery-empty');
  const lightbox = document.getElementById('lightbox');
  const dialog = lightbox && lightbox.querySelector('.lightbox__dialog');
  const image = document.getElementById('lightbox-image');
  const caption = document.getElementById('lightbox-caption');
  const prevButton = document.getElementById('lightbox-prev');
  const nextButton = document.getElementById('lightbox-next');
  let activeCategory = 'all';
  let visibleItems = items.slice();
  let currentIndex = 0;
  let lastFocused = null;

  function filterGallery(query) {
    const term = (query || '').toLowerCase();
    visibleItems = [];
    items.forEach((item) => {
      const categoryOk = activeCategory === 'all' || item.dataset.category === activeCategory;
      const text = (item.textContent + ' ' + item.dataset.category + ' ' + (item.dataset.caption || '')).toLowerCase();
      const searchOk = !term || text.includes(term);
      item.hidden = !(categoryOk && searchOk);
      if (!item.hidden) visibleItems.push(item);
    });
    if (emptyState) emptyState.hidden = visibleItems.length > 0;
  }

  function show(index) {
    if (!visibleItems.length) return;
    currentIndex = (index + visibleItems.length) % visibleItems.length;
    const item = visibleItems[currentIndex];
    const button = item.querySelector('[data-lightbox-src]');
    const thumb = item.querySelector('img');
    if (!button || !image) return;
    image.src = button.dataset.lightboxSrc;
    image.alt = thumb ? thumb.alt : (item.dataset.caption || 'VBSPU campus photograph');
    if (caption) caption.textContent = item.dataset.caption || '';
  }

  function open(index, trigger) {
    if (!lightbox || !visibleItems.length) return;
    lastFocused = trigger || document.activeElement;
    show(index);
    lightbox.hidden = false;
    document.body.classList.add('modal-open');
    if (dialog) dialog.focus();
  }

  function close() {
    if (!lightbox || lightbox.hidden) return;
    lightbox.hidden = true;
    document.body.classList.remove('modal-open');
    if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
  }

  items.forEach((item) => {
    const button = item.querySelector('[data-lightbox-src]');
    if (!button) return;
    button.addEventListener('click', () => open(visibleItems.indexOf(item), button));
  });

  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      activeCategory = chip.dataset.galleryFilter;
      chips.forEach((other) => {
        const selected = other === chip;
        other.classList.toggle('is-active', selected);
        other.setAttribute('aria-pressed', String(selected));
      });
      if (window.VBSPU) window.VBSPU.runFilters();
      else filterGallery('');
    });
  });

  if (prevButton) prevButton.addEventListener('click', () => show(currentIndex - 1));
  if (nextButton) nextButton.addEventListener('click', () => show(currentIndex + 1));
  if (lightbox) {
    lightbox.querySelectorAll('[data-close-lightbox]').forEach((el) => el.addEventListener('click', close));
  }

  document.addEventListener('keydown', (event) => {
    if (!lightbox || lightbox.hidden) return;
    if (event.key === 'Escape') close();
    if (event.key === 'ArrowRight') show(currentIndex + 1);
    if (event.key === 'ArrowLeft') show(currentIndex - 1);
  });

  if (window.VBSPU) window.VBSPU.registerFilter(filterGallery);
  else filterGallery('');

  if (grid && new URLSearchParams(window.location.search).get('shot') === 'lightbox') {
    window.addEventListener('load', () => open(0, null));
  }
})();
