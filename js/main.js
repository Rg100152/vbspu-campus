/* VBSPU Campus — navigation, search and shared UI state */
(function () {
  'use strict';

  const header = document.getElementById('site-header');
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('primary-nav');
  const searchToggle = document.getElementById('search-toggle');
  const searchPanel = document.getElementById('search-panel');
  const searchInput = document.getElementById('site-search');
  const searchClear = document.getElementById('search-clear');
  const searchHint = document.getElementById('search-hint');

  /* Shared filter registry: blog and gallery modules plug into quick search. */
  const VBSPU = {
    query: '',
    filters: new Set(),
    registerFilter(fn) {
      this.filters.add(fn);
      fn(this.query);
    },
    runFilters() {
      this.filters.forEach((fn) => fn(this.query));
    }
  };
  window.VBSPU = VBSPU;

  function closeMenu() {
    navLinks.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Open navigation menu');
  }

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const open = !navLinks.classList.contains('is-open');
      navLinks.classList.toggle('is-open', open);
      navToggle.setAttribute('aria-expanded', String(open));
      navToggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    });
    navLinks.addEventListener('click', (event) => {
      if (event.target.closest('a')) closeMenu();
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });
  }

  if (searchToggle && searchPanel && searchInput) {
    searchToggle.addEventListener('click', () => {
      const open = searchPanel.hidden;
      searchPanel.hidden = !open;
      searchToggle.setAttribute('aria-expanded', String(open));
      if (open) searchInput.focus();
    });

    function applySearch() {
      VBSPU.query = searchInput.value.trim().toLowerCase();
      if (searchHint) {
        searchHint.textContent = VBSPU.query
          ? `Showing content matching “${searchInput.value.trim()}”.`
          : 'Filtering campus cards and stories as you type.';
      }
      VBSPU.runFilters();
    }

    searchInput.addEventListener('input', applySearch);
    searchClear.addEventListener('click', () => {
      searchInput.value = '';
      applySearch();
      searchInput.focus();
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && !searchPanel.hidden) {
        searchPanel.hidden = true;
        searchToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* Header shadow + active link tracking */
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 30);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  const links = Array.from(document.querySelectorAll('.nav-link'));
  const sections = links
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if ('IntersectionObserver' in window && sections.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => {
          link.classList.toggle('is-active', link.getAttribute('href') === '#' + entry.target.id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    sections.forEach((section) => observer.observe(section));
  }

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
