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

  /* ---------------- Motion layer ---------------- */
  document.documentElement.classList.add('js');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const revealTargets = document.querySelectorAll('.section__head, .glass-card, .gallery-item');
  if (revealTargets.length) {
    revealTargets.forEach((element, index) => {
      element.setAttribute('data-reveal', element.classList.contains('gallery-item') ? 'scale' : '');
      element.style.setProperty('--reveal-delay', `${(index % 4) * 75}ms`);
    });

    if (!('IntersectionObserver' in window) || reduceMotion) {
      revealTargets.forEach((element) => element.classList.add('is-visible'));
    } else {
      const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          if (entry.target.classList.contains('section__head')) {
            const accent = entry.target.querySelector('.section__title em');
            if (accent) accent.classList.add('is-sheen');
          }
          observer.unobserve(entry.target);
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
      revealTargets.forEach((element) => revealObserver.observe(element));
    }
  }

  if (!reduceMotion && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    document.querySelectorAll('[data-tilt]').forEach((card) => {
      card.addEventListener('pointermove', (event) => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        card.classList.add('is-tilting');
        card.style.transform = `perspective(900px) rotateX(${(-y * 4.5).toFixed(2)}deg) rotateY(${(x * 4.5).toFixed(2)}deg) translateY(-4px)`;
      });
      card.addEventListener('pointerleave', () => {
        card.classList.remove('is-tilting');
        card.style.transform = '';
      });
    });
  }

  const heroBg = document.getElementById('hero-bg');
  if (heroBg && !reduceMotion) {
    let ticking = false;
    const updateParallax = () => {
      const distance = Math.min(window.scrollY, window.innerHeight);
      heroBg.style.setProperty('--parallax', `${(distance * 0.12).toFixed(1)}px`);
      ticking = false;
    };
    window.addEventListener('scroll', () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateParallax);
    }, { passive: true });
  }

  /* Screenshot automation: ?shot=hero|landmarks|blog|gallery|lightbox */
  const shot = new URLSearchParams(window.location.search).get('shot');
  if (shot === 'landmarks' || shot === 'gallery') {
    window.addEventListener('load', () => {
      window.requestAnimationFrame(() => {
        const target = document.getElementById(shot);
        if (target) target.scrollIntoView({ behavior: 'instant', block: 'start' });
      });
    });
  }
})();
