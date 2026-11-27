/* VBSPU Campus — blog category filters + glass article reader */
(function () {
  'use strict';

  const IMG = 'assets/images/campus/';
  const articles = {
    gate: {
      title: 'The arches that welcome you',
      category: 'Architecture',
      reading: '6 min read',
      author: 'Raj Gautam',
      date: 'Campus Journal · Issue 01',
      hero: IMG + 'vbspu-campus-gate.jpg',
      heroAlt: 'Main entrance and administrative building of VBSPU',
      body: [
        { type: 'lead', text: 'Every campus has a threshold. At VBSPU, the main gate is more than a way in — it is the first sentence of the story students go on to write for themselves.' },
        { type: 'p', text: 'The approaching road opens onto warm sandstone tones and a rhythm of arches that feels both institutional and deeply local. In the early morning the entrance is a flurry of bicycles, hostel groups and the first cups of tea. By afternoon it settles into a quiet watchfulness, holding the comings and goings of a university that has grown around it since 1987.' },
        { type: 'h3', text: 'Built to be lived in' },
        { type: 'p', text: 'Heritage-inspired architecture is easy to admire from a distance, but its real value is how it shapes daily life. Covered walkways offer shade in the Uttar Pradesh summer. courtyards become informal classrooms. The administrative building behind the gate keeps the practical machinery of a large university running — admissions, examinations and the many small conversations that keep student life moving.' },
        { type: 'quote', text: 'A gate is a promise: whatever is beyond it belongs to you for a while.' },
        { type: 'img', src: IMG + 'vbspu-main-building.jpg', alt: 'University building seen from the campus', caption: 'The main building, photographed from inside the campus.' },
        { type: 'p', text: 'Look closely and you will notice the blend of styles that defines so much of eastern Uttar Pradesh's institutional architecture: the arch, the dome, the practical modern block. It is not a museum piece. It is a working, breathing campus — and that is what makes it worth photographing, walking through and remembering.' }
      ]
    },
    library: {
      title: 'A quiet afternoon at Vivekananda Central Library',
      category: 'Student Life',
      reading: '5 min read',
      author: 'Raj Gautam',
      date: 'Campus Journal · Issue 02',
      hero: IMG + 'vbspu-central-library-1.jpg',
      heroAlt: 'Reading space inside Vivekananda Central Library',
      body: [
        { type: 'lead', text: 'Established in 1999 and housed in its present three-storey building since 2004, the Vivekananda Central Library is the university's quiet engine room.' },
        { type: 'p', text: 'The library was inaugurated by the then Vice-President of India, Bhairon Singh Shekhawat, and later recognised as a “Centre of Excellence” by the Government of Uttar Pradesh in 2016. But the statistics matter less than the atmosphere: the soft scrape of a chair, the turn of a page, the low conversation near the issue counter.' },
        { type: 'h3', text: 'Where analog meets digital' },
        { type: 'p', text: 'SOUL software manages circulation, cataloguing and OPAC/Web OPAC, while Wi-Fi extends access beyond closing hours. More than 150 people can sit and work here at a time. For a BCA student, it is often the place where a semester project finally makes sense — somewhere between a textbook, a search result and a stubborn debugging session.' },
        { type: 'img', src: IMG + 'vbspu-central-library-3.jpg', alt: 'Bookshelves at the central library', caption: 'Stacks and study corners inside the central library.' },
        { type: 'quote', text: 'The best libraries do not just hold books. They hold the attention of everyone who enters.' },
        { type: 'p', text: 'If you visit VBSPU, spend an hour here. Arrive without a plan, pick a table by the window and watch the campus slow down around you.' }
      ]
    },
    stadium: {
      title: 'Where the campus finds its rhythm',
      category: 'Student Life',
      reading: '7 min read',
      author: 'Raj Gautam',
      date: 'Campus Journal · Issue 03',
      hero: IMG + 'vbspu-eklavya-stadium.jpg',
      heroAlt: 'Eklavya Stadium at VBSPU Jaunpur',
      body: [
        { type: 'lead', text: 'Eklavya Stadium is where the university's energy changes tempo. Classes end, the ground fills, and the campus starts cheering.' },
        { type: 'p', text: 'From the Jaunpur Premier League T-20 final to inter-university kabaddi competitions, the sports complex plays host to moments that are kept in phone galleries long after results are forgotten. On ordinary days it belongs to the runners doing laps, the cricketers claiming the pitch and the spectators who arrive with nowhere else to be.' },
        { type: 'h3', text: 'More than a scoreboard' },
        { type: 'p', text: 'Sport at VBSPU works the way campus life should: it mixes people who would never meet in a lecture hall. Departments become teams, hostels become rival camps, and a good catch is celebrated with the same seriousness as a good grade.' },
        { type: 'img', src: IMG + 'vbspu-cricket-final.jpg', alt: 'Cricket tournament final held at the university', caption: 'A T-20 final brings the whole campus to the ground.' },
        { type: 'p', text: 'The name Eklavya feels apt — a nod to practice, patience and quiet mastery. Whether you are playing or watching, the ground has a way of teaching the same lesson.' }
      ]
    },
    convocation: {
      title: 'Convocation day: a sea of degrees and dreams',
      category: 'Events',
      reading: '4 min read',
      author: 'Raj Gautam',
      date: 'Campus Journal · Issue 04',
      hero: IMG + 'vbspu-convocation.jpg',
      heroAlt: 'Convocation ceremony at Veer Bahadur Singh Purvanchal University',
      body: [
        { type: 'lead', text: 'Convocation turns the campus into a stage. Years of assignments, exams and late-night study sessions compress into a single afternoon of robes, applause and photographs.' },
        { type: 'p', text: 'The university's convocations mark the close of one chapter and the opening of another. Families travel to Jaunpur, departments line up together, and the corridors fill with the particular mixture of pride and nervousness that only a graduation day can produce.' },
        { type: 'img', src: IMG + 'vbspu-auditorium.jpg', alt: 'VBSPU auditorium', caption: 'Campus venues come alive during the university's major ceremonies.' },
        { type: 'h3', text: 'The people behind the ceremony' },
        { type: 'p', text: 'It is easy to focus on the stage, but convocation is equally a story of teachers, lab assistants, library staff and classmates. Graduates often carry their names forward with them — not only the degree, but the people who made the years bearable.' },
        { type: 'quote', text: 'A graduation photograph is small proof that a very large journey happened here.' }
      ]
    },
    architecture: {
      title: 'Buildings that shape the way we learn',
      category: 'Architecture',
      reading: '6 min read',
      author: 'Raj Gautam',
      date: 'Campus Journal · Issue 05',
      hero: IMG + 'vbspu-campus-about.jpg',
      heroAlt: 'Academic building on the VBSPU campus',
      body: [
        { type: 'lead', text: 'A university is often remembered through its people, but it is understood through its spaces. At VBSPU, the academic blocks, research institutes and open courtyards describe how the campus thinks.' },
        { type: 'p', text: 'The Department of Computer Applications and the other teaching blocks sit among greener pathways and older institutional structures. lecture rooms, laboratories and departmental offices coexist with informal gathering points — a stair landing, a shaded verandah, a patch of lawn between two buildings.' },
        { type: 'h3', text: 'A campus of layers' },
        { type: 'p', text: 'Different decades leave different marks. Heritage-inspired facades sit beside functional modern additions; the research institute speaks of the university's expanding ambitions; the auditorium and specialist blocks host the cultural and technical life of the institution. Together they create a place that feels accumulated rather than designed all at once.' },
        { type: 'img', src: IMG + 'vbspu-research-institute.jpg', alt: 'Research institute building at VBSPU', caption: 'One of the campus buildings devoted to research and advanced study.' },
        { type: 'p', text: 'For students, these buildings become a map of memory: the lab where a first program ran, the corridor where a friendship started, the block where final-year presentations were delivered.' }
      ]
    },
    heritage: {
      title: 'Jaunpur, just beyond the campus gate',
      category: 'Heritage',
      reading: '8 min read',
      author: 'Raj Gautam',
      date: 'Campus Journal · Issue 06',
      hero: IMG + 'jaunpur-heritage-sign.jpg',
      heroAlt: 'Heritage sign in the city of Jaunpur',
      body: [
        { type: 'lead', text: 'VBSPU sits roughly eleven kilometres from historic Jaunpur — close enough for an afternoon trip, far enough for the campus to have its own unhurried rhythm.' },
        { type: 'p', text: 'Jaunpur is a city of old bridges, mosques, markets and river light. Its Sharqi architectural heritage gives the region a distinctive visual language, one that quietly echoes in the arches and proportions of newer institutional buildings nearby. A weekend here is not an escape from campus life; it is a way to understand the place that shaped it.' },
        { type: 'h3', text: 'Take the long way back' },
        { type: 'p', text: 'Students often know the route to the city only through buses, shared rides and the occasional planned outing. Go with a little time to spare: walk the old lanes, notice the craftsmanship, then return to the campus as evening settles over the hostels and the lights come on in the academic blocks.' },
        { type: 'quote', text: 'To know the university fully, know the city that holds it.' },
        { type: 'p', text: 'This is the heritage that frames a VBSPU education — not as a footnote, but as a daily backdrop.' }
      ]
    }
  };

  const modal = document.getElementById('article-modal');
  const content = document.getElementById('article-content');
  const emptyState = document.getElementById('blog-empty');
  const cards = Array.from(document.querySelectorAll('.blog-card'));
  const chips = Array.from(document.querySelectorAll('.filter-chip'));
  let activeCategory = 'all';
  let lastFocused = null;

  function esc(value) {
    return String(value).replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
  }

  function blockToHtml(block) {
    switch (block.type) {
      case 'lead': return `<p class="article__lead">${esc(block.text)}</p>`;
      case 'h3': return `<h3>${esc(block.text)}</h3>`;
      case 'quote': return `<blockquote>“${esc(block.text)}”</blockquote>`;
      case 'img': return `<figure><img src="${esc(block.src)}" alt="${esc(block.alt)}" loading="lazy"><figcaption>${esc(block.caption)}</figcaption></figure>`;
      default: return `<p>${esc(block.text)}</p>`;
    }
  }

  function render(article) {
    content.innerHTML = `
      <div class="article__top">
        <span class="article__category">${esc(article.category)}</span>
        <span>${esc(article.date)}</span>
      </div>
      <h2 id="article-title">${esc(article.title)}</h2>
      <div class="article__byline">
        <span class="article__avatar" aria-hidden="true">RG</span>
        <span>By <strong>${esc(article.author)}</strong></span>
        <span aria-hidden="true">·</span>
        <span>${esc(article.reading)}</span>
      </div>
      <img class="article__hero" src="${esc(article.hero)}" alt="${esc(article.heroAlt)}">
      <div class="article__body">${article.body.map(blockToHtml).join('')}</div>
      <div class="article__end">End of story · VBSPU Campus Journal</div>`;
  }

  function openArticle(id) {
    const article = articles[id];
    if (!article || !modal) return;
    render(article);
    lastFocused = document.activeElement;
    modal.hidden = false;
    document.body.classList.add('modal-open');
    const dialog = modal.querySelector('.modal__dialog');
    dialog.scrollTop = 0;
    dialog.focus();
  }

  function closeArticle() {
    if (!modal || modal.hidden) return;
    modal.hidden = true;
    document.body.classList.remove('modal-open');
    if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
  }

  document.querySelectorAll('[data-article]').forEach((button) => {
    button.addEventListener('click', () => openArticle(button.dataset.article));
  });

  if (modal) {
    modal.querySelectorAll('[data-close-modal]').forEach((el) => el.addEventListener('click', closeArticle));
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeArticle();
  });

  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      activeCategory = chip.dataset.filter;
      chips.forEach((other) => {
        const selected = other === chip;
        other.classList.toggle('is-active', selected);
        other.setAttribute('aria-pressed', String(selected));
      });
      if (window.VBSPU) window.VBSPU.runFilters();
    });
  });

  function filterCards(query) {
    const term = (query || '').toLowerCase();
    let visible = 0;
    cards.forEach((card) => {
      const categoryOk = activeCategory === 'all' || card.dataset.category === activeCategory;
      const text = (card.textContent + ' ' + card.dataset.category).toLowerCase();
      const searchOk = !term || text.includes(term);
      card.hidden = !(categoryOk && searchOk);
      if (!card.hidden) visible += 1;
    });
    if (emptyState) emptyState.hidden = visible > 0;
  }

  if (window.VBSPU) window.VBSPU.registerFilter(filterCards);
  else filterCards('');

  /* Allow screenshot automation to open the reader directly. */
  const shot = new URLSearchParams(window.location.search).get('shot');
  if (shot === 'blog') openArticle('gate');
})();
