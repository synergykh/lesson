const totalSlides = 72;
let currentSlideIndex = 0;
let currentLang = localStorage.getItem('presentation_lang') || 'en';
let currentTheme = localStorage.getItem('presentation_theme') || 'dark';

const currentSlideLabel = document.getElementById('current-slide-num');
const totalSlidesLabel = document.getElementById('total-slides-num');
const progressFill = document.getElementById('progress-bar-fill');
const currentPartBadge = document.getElementById('current-part-badge');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const overviewModal = document.getElementById('overview-modal');
const shortcutsModal = document.getElementById('shortcuts-modal');
const searchModal = document.getElementById('search-modal');
const overviewGrid = document.getElementById('overview-grid');
const slideJumpSelect = document.getElementById('slide-jump-select');
const btnLangToggle = document.getElementById('btn-lang-toggle');
const btnThemeToggle = document.getElementById('btn-theme-toggle');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

const searchData = [
  { id: 1, s: "01", cat: "INTRODUCTION", title: "PostgreSQL & Neon Database", kw: "intro fullstack overview browser nextjs postgresql neon" },
  { id: 2, s: "01", cat: "INTRODUCTION", title: "What is a Database?", kw: "persistence disk memory acid filesystem concurrent" },
  { id: 3, s: "01", cat: "INTRODUCTION", title: "SQL vs NoSQL: Why PostgreSQL?", kw: "sql nosql jsonb relational document acid comparison" },
  { id: 4, s: "02", cat: "FUNDAMENTALS", title: "Database Mental Model & Hierarchy", kw: "hierarchy server cluster schema public table column row" },
  { id: 5, s: "02", cat: "FUNDAMENTALS", title: "Relational Architecture in Action", kw: "users posts comments foreign keys primary keys erd" },
  { id: 6, s: "03", cat: "INSTALLATION", title: "Installing PostgreSQL Locally", kw: "apt install postgresql-contrib ubuntu linux port 5432" },
  { id: 7, s: "03", cat: "INSTALLATION", title: "PostgreSQL Service Management", kw: "systemctl status start enable systemd daemon" },
  { id: 8, s: "04", cat: "PSQL CLI", title: "The psql Interactive Terminal", kw: "psql cli client interactive terminal postgres superuser" },
  { id: 9, s: "04", cat: "PSQL CLI", title: "psql Connection Parameters", kw: "-h -p -U -d host port user database connection uri" },
  { id: 10, s: "05", cat: "PSQL COMMANDS", title: "Essential psql Meta-Commands", kw: "\\l \\c \\dt \\d \\du \\dn \\q meta commands backslash" },
  { id: 11, s: "05", cat: "PSQL COMMANDS", title: "System & Environment Inspection", kw: "SELECT version current_database \\timing \\x auto" },
  { id: 12, s: "05", cat: "PSQL COMMANDS", title: "Interactive psql Terminal Simulation", kw: "simulation terminal interactive runner live execute" },
  { id: 13, s: "06", cat: "DATABASES", title: "Creating & Dropping Databases", kw: "CREATE DATABASE DROP DATABASE caution warning backup" },
  { id: 14, s: "07", cat: "SQL FUNDAMENTALS", title: "DDL: Creating Tables with Constraints", kw: "CREATE TABLE primary key unique not null constraints ddl" },
  { id: 15, s: "07", cat: "SQL FUNDAMENTALS", title: "DML: Inserting & Querying Records", kw: "INSERT INTO SELECT WHERE RETURNING dml projection filter" },
  { id: 16, s: "07", cat: "SQL FUNDAMENTALS", title: "DML: Updating & Deleting Records", kw: "UPDATE SET DELETE WHERE danger soft-delete is_deleted" },
  { id: 17, s: "08", cat: "DATA TYPES", title: "Core PostgreSQL Data Types", kw: "integer bigint numeric text varchar boolean date types" },
  { id: 18, s: "08", cat: "DATA TYPES", title: "Timestamps: TIMESTAMP vs TIMESTAMPTZ", kw: "timestamptz timestamp timezone utc timezone-aware now" },
  { id: 19, s: "08", cat: "DATA TYPES", title: "JSONB: Semi-Structured Power", kw: "jsonb json -> ->> operators gin index documents" },
  { id: 20, s: "09", cat: "PRIMARY KEYS", title: "Primary Keys: BIGSERIAL vs UUID", kw: "bigserial uuid auto-increment enumeration security attack" },
  { id: 21, s: "09", cat: "PRIMARY KEYS", title: "Generating UUIDs & Tradeoffs", kw: "gen_random_uuid uuidv4 b-tree fragmentation random index" },
  { id: 22, s: "10", cat: "RELATIONSHIPS", title: "Database Relationships & Cardinality", kw: "1:1 1:N N:M junction table post_tags foreign keys" },
  { id: 23, s: "10", cat: "RELATIONSHIPS", title: "Foreign Keys & Referential Integrity", kw: "REFERENCES on delete cascade set null restrict integrity" },
  { id: 24, s: "11", cat: "SQL JOINS", title: "Visualizing SQL Joins", kw: "INNER JOIN LEFT JOIN RIGHT JOIN FULL JOIN venn diagram" },
  { id: 25, s: "11", cat: "SQL JOINS", title: "Practical Multi-Table Queries", kw: "join query group by count aggregation users posts comments" },
  { id: 26, s: "12", cat: "INDEXES", title: "What is a Database Index?", kw: "index b-tree create index lookup scan write overhead" },
  { id: 27, s: "12", cat: "INDEXES", title: "EXPLAIN & EXPLAIN ANALYZE", kw: "explain analyze query plan seq scan index scan cost" },
  { id: 28, s: "13", cat: "TRANSACTIONS", title: "Transactions & ACID Guarantees", kw: "acid atomicity consistency isolation durability wal" },
  { id: 29, s: "13", cat: "TRANSACTIONS", title: "Transaction Workflow in Action", kw: "BEGIN COMMIT ROLLBACK bank transfer accounts" },
  { id: 30, s: "14", cat: "DATABASE DESIGN", title: "Database Normalization (1NF to 3NF)", kw: "normalization 1nf 2nf 3nf redundancy bad vs good schema" },
  { id: 31, s: "14", cat: "DATABASE DESIGN", title: "Production Schema Conventions", kw: "snake_case plural tables singular keys created_at updated_at" },
  { id: 32, s: "15", cat: "MIGRATIONS", title: "What are Database Migrations?", kw: "migrations schema changes version control git rollback" },
  { id: 33, s: "15", cat: "MIGRATIONS", title: "Writing Safe Production Migrations", kw: "ALTER TABLE add column backwards compatibility locks" },
  { id: 34, s: "16", cat: "BACKUPS", title: "PostgreSQL Backups: pg_dump & Restore", kw: "pg_dump psql pg_restore backup.sql dump restore" },
  { id: 35, s: "16", cat: "BACKUPS", title: "Disaster Recovery Best Practices", kw: "disaster recovery unverified backups automated s3 drills" },
  { id: 36, s: "17", cat: "PERMISSIONS", title: "PostgreSQL Roles & Permissions", kw: "CREATE USER roles GRANT REVOKE least privilege superuser" },
  { id: 37, s: "18", cat: "NEON SERVERLESS", title: "Neon: Serverless PostgreSQL Platform", kw: "neon serverless cloud compute storage separation" },
  { id: 38, s: "18", cat: "NEON SERVERLESS", title: "Traditional Postgres vs Neon Architecture", kw: "architecture pageserver cloud wal kubernetes s3 vs disk" },
  { id: 39, s: "18", cat: "NEON SERVERLESS", title: "Neon Core Features", kw: "scale-to-zero autoscaling cold start ~500ms cost zero" },
  { id: 40, s: "19", cat: "NEON CONSOLE", title: "Creating a Neon Project", kw: "neon account project region console create database" },
  { id: 41, s: "20", cat: "CONNECTION STRING", title: "Deconstructing the Connection String", kw: "connection string postgresql:// host pooler sslmode=require" },
  { id: 42, s: "21", cat: "NEON BRANCHING", title: "Instant Database Branching", kw: "branching copy-on-write production staging dev feature" },
  { id: 43, s: "21", cat: "NEON BRANCHING", title: "Branching Development Lifecycle", kw: "lifecycle test migration validate merge branch deploy" },
  { id: 44, s: "22", cat: "GITHUB INTEGRATION", title: "Neon + GitHub Pull Request Workflow", kw: "github actions pull request pr preview database ephemeral" },
  { id: 45, s: "23", cat: "NEXT.JS INTEGRATION", title: "Neon + Next.js App Router Architecture", kw: "next.js app router server components server actions zero-bundle" },
  { id: 46, s: "23", cat: "NEXT.JS INTEGRATION", title: "Server vs Client Security Boundary", kw: "DATABASE_URL NEXT_PUBLIC_ leak secret browser security" },
  { id: 47, s: "24", cat: "DATABASE CLIENTS", title: "Database Access Ecosystem", kw: "raw sql query builder orm postgres.js drizzle prisma" },
  { id: 48, s: "25", cat: "DRIZZLE ORM", title: "Drizzle ORM Schema with Neon", kw: "drizzle pgTable typescript type-safe schema relations" },
  { id: 49, s: "25", cat: "DRIZZLE ORM", title: "Querying with Drizzle & Neon Serverless", kw: "@neondatabase/serverless http websockets db.select" },
  { id: 50, s: "26", cat: "PRISMA ORM", title: "Prisma ORM Integration with Neon", kw: "prisma schema.prisma prisma client prisma db push" },
  { id: 51, s: "26", cat: "PRISMA ORM", title: "ORM Tradeoff Comparison Matrix", kw: "comparison raw sql drizzle prisma cold starts type-safety" },
  { id: 52, s: "27", cat: "CONNECTION POOLING", title: "The Serverless Connection Exhaustion Problem", kw: "serverless 500 connections pgbouncer exhaustion crash" },
  { id: 53, s: "27", cat: "CONNECTION POOLING", title: "Neon Connection Pooling (PgBouncer)", kw: "pgbouncer pooling -pooler endpoint multiplexing scale" },
  { id: 54, s: "28", cat: "ENVIRONMENT VARIABLES", title: "Secret Management & Environment Variables", kw: ".env.local vercel secrets production .gitignore" },
  { id: 55, s: "29", cat: "DATABASE SECURITY", title: "Preventing SQL Injection Attacks", kw: "sql injection parameterized queries $1 $2 prepared statements" },
  { id: 56, s: "29", cat: "DATABASE SECURITY", title: "Passwords, TLS/SSL & Access Control", kw: "passwords argon2id bcrypt hash tls sslmode=require security" },
  { id: 57, s: "30", cat: "PERFORMANCE", title: "Database Performance Optimization Checklist", kw: "checklist index fk n+1 select * caching redis pooling" },
  { id: 58, s: "30", cat: "PERFORMANCE", title: "Debugging Slow Queries with EXPLAIN ANALYZE", kw: "debugging slow query buffers seq scan bottleneck" },
  { id: 59, s: "31", cat: "PAGINATION", title: "Pagination: The LIMIT / OFFSET Problem", kw: "pagination limit offset performance penalty 100000 rows" },
  { id: 60, s: "31", cat: "PAGINATION", title: "Keyset (Cursor-Based) Pagination", kw: "keyset cursor-based pagination id > $last_id o(1)" },
  { id: 61, s: "32", cat: "REAL PROJECT", title: "Real Project: TaskFlow Architecture", kw: "taskflow real project erd users projects tasks comments" },
  { id: 62, s: "33", cat: "BUILD TASKFLOW", title: "TaskFlow DDL: Tables & Custom Types", kw: "taskflow ddl create type enum users projects schema" },
  { id: 63, s: "33", cat: "BUILD TASKFLOW", title: "TaskFlow DDL: Tasks & Comments Schema", kw: "taskflow tasks comments foreign keys cascade composite index" },
  { id: 64, s: "34", cat: "TASKFLOW CRUD", title: "TaskFlow CRUD: Create & Read Operations", kw: "taskflow insert returning select join dashboard queries" },
  { id: 65, s: "34", cat: "TASKFLOW CRUD", title: "TaskFlow CRUD: Update & Delete Operations", kw: "taskflow update status delete cascade soft-delete" },
  { id: 66, s: "35", cat: "PRODUCTION DEPLOY", title: "Complete Production Fullstack Architecture", kw: "github vercel next.js neon production edge serverless" },
  { id: 67, s: "36", cat: "COMPARISON", title: "Local PostgreSQL vs Neon Comparison", kw: "local vs neon matrix offline scaling branching managed" },
  { id: 68, s: "37", cat: "COMMON MISTAKES", title: "Top 12 Beginner & Production Mistakes", kw: "mistakes superuser select * exposed url missing indexes" },
  { id: 69, s: "38", cat: "DEBUGGING", title: "Database Troubleshooting Runbook", kw: "runbook troubleshooting pg_isready connection logs ssl" },
  { id: 70, s: "39", cat: "CHEAT SHEET", title: "PostgreSQL Cheat Sheet: CLI & Schema DDL", kw: "cheat sheet psql \\l \\c \\dt \\d create table index" },
  { id: 71, s: "39", cat: "CHEAT SHEET", title: "PostgreSQL & Neon Cheat Sheet: DML & Cloud", kw: "cheat sheet select insert update delete join transaction neon" },
  { id: 72, s: "40", cat: "COURSE MASTERY", title: "PostgreSQL & Neon Mastery Complete!", kw: "summary checklist completion certificate fullstack developer" }
];

function setTheme(theme) {
  if (theme !== 'light' && theme !== 'dark') theme = 'dark';
  currentTheme = theme;
  localStorage.setItem('presentation_theme', theme);
  document.documentElement.setAttribute('data-theme', theme);
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  const sunIcons = document.querySelectorAll('#theme-icon-sun');
  const moonIcons = document.querySelectorAll('#theme-icon-moon');
  if (theme === 'light') {
    sunIcons.forEach(el => { el.style.display = 'block'; });
    moonIcons.forEach(el => { el.style.display = 'none'; });
  } else {
    sunIcons.forEach(el => { el.style.display = 'none'; });
    moonIcons.forEach(el => { el.style.display = 'block'; });
  }
}

let lastPostgresThemeToggle = 0;
function toggleTheme() {
  const now = Date.now();
  if (now - lastPostgresThemeToggle < 150) return;
  lastPostgresThemeToggle = now;
  setTheme(currentTheme === 'dark' ? 'light' : 'dark');
}

window.setTheme = setTheme;
window.toggleTheme = toggleTheme;

let lastPostgresLangToggle = 0;
function toggleLanguage() {
  const now = Date.now();
  if (now - lastPostgresLangToggle < 150) return;
  lastPostgresLangToggle = now;
  setLanguage(currentLang === 'en' ? 'km' : 'en');
}

window.setLanguage = setLanguage;
window.toggleLanguage = toggleLanguage;

function setLanguage(lang) {
  if (lang !== 'en' && lang !== 'km') lang = 'en';
  currentLang = lang;
  localStorage.setItem('presentation_lang', lang);
  document.documentElement.setAttribute('lang', lang);
  if (lang === 'km') {
    document.body.classList.add('lang-km');
  } else {
    document.body.classList.remove('lang-km');
  }

  const enFlags = document.querySelectorAll('.lang-flag-en');
  const kmFlags = document.querySelectorAll('.lang-flag-km');
  if (lang === 'km') {
    enFlags.forEach(el => { el.style.display = 'none'; });
    kmFlags.forEach(el => { el.style.display = 'block'; });
  } else {
    enFlags.forEach(el => { el.style.display = 'block'; });
    kmFlags.forEach(el => { el.style.display = 'none'; });
  }

  const langLabel = document.getElementById('lang-label-text');
  if (langLabel) {
    langLabel.textContent = lang === 'km' ? 'ខ្មែរ' : 'EN';
  }

  applyTranslations(lang);
  populateSlideSelect();
  renderOverviewGrid();
  updateSlideView(currentSlideIndex, false);
}

function toggleLanguage() {
  setLanguage(currentLang === 'en' ? 'km' : 'en');
}

function applyTranslations(lang) {
  if (typeof postgresTranslations === 'undefined') return;
  const dict = postgresTranslations[lang] || postgresTranslations.en;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  for (let i = 1; i <= totalSlides; i++) {
    const slide = document.getElementById('slide-' + i);
    if (!slide) continue;

    const catEl = slide.querySelector('.slide-meta-label');
    if (catEl && dict['s' + i + '_cat']) {
      catEl.textContent = dict['s' + i + '_cat'];
    }

    const titleEl = slide.querySelector('.slide-title');
    if (titleEl && dict['s' + i + '_title']) {
      titleEl.innerHTML = dict['s' + i + '_title'];
    }

    const subEl = slide.querySelector('.slide-subtitle');
    if (subEl && dict['s' + i + '_sub']) {
      subEl.innerHTML = dict['s' + i + '_sub'];
    }
  }
}

function populateSlideSelect() {
  if (!slideJumpSelect) return;
  slideJumpSelect.innerHTML = '';
  const dict = typeof postgresTranslations !== 'undefined' ? (postgresTranslations[currentLang] || postgresTranslations.en) : {};

  for (let i = 1; i <= totalSlides; i++) {
    const opt = document.createElement('option');
    opt.value = i - 1;
    const titleKey = 's' + i + '_title';
    let titleText = dict[titleKey] || ('Slide ' + i);
    titleText = titleText.replace(/<[^>]*>?/gm, '');
    opt.textContent = `${i}. ${titleText}`;
    if (i - 1 === currentSlideIndex) opt.selected = true;
    slideJumpSelect.appendChild(opt);
  }
}

function renderOverviewGrid() {
  if (!overviewGrid) return;
  overviewGrid.innerHTML = '';
  const dict = typeof postgresTranslations !== 'undefined' ? (postgresTranslations[currentLang] || postgresTranslations.en) : {};

  for (let i = 1; i <= totalSlides; i++) {
    const card = document.createElement('div');
    card.className = 'overview-card' + (i - 1 === currentSlideIndex ? ' active' : '');
    const titleKey = 's' + i + '_title';
    const catKey = 's' + i + '_cat';
    let titleText = dict[titleKey] || ('Slide ' + i);
    titleText = titleText.replace(/<[^>]*>?/gm, '');
    const catText = dict[catKey] || 'SECTION';

    card.innerHTML = `
      <div class="ov-header">
        <span class="ov-num">${i < 10 ? '0' + i : i}</span>
        <span class="ov-cat">${catText}</span>
      </div>
      <div class="ov-title">${titleText}</div>
    `;

    card.addEventListener('click', () => {
      goToSlide(i - 1);
      closeModal(overviewModal);
    });

    overviewGrid.appendChild(card);
  }
}

function updateSlideView(index, smooth = false) {
  if (index < 0) index = 0;
  if (index >= totalSlides) index = totalSlides - 1;
  currentSlideIndex = index;

  const slides = document.querySelectorAll('.slide-item');
  slides.forEach((s, idx) => {
    if (idx === currentSlideIndex) {
      s.classList.add('active');
    } else {
      s.classList.remove('active');
    }
  });

  if (currentSlideLabel) currentSlideLabel.textContent = currentSlideIndex + 1;
  if (totalSlidesLabel) totalSlidesLabel.textContent = totalSlides;
  if (progressFill) {
    const pct = ((currentSlideIndex + 1) / totalSlides) * 100;
    progressFill.style.width = pct + '%';
  }

  const activeSlide = document.getElementById('slide-' + (currentSlideIndex + 1));
  if (activeSlide && currentPartBadge) {
    const part = activeSlide.getAttribute('data-part') || 'MODULE 06';
    currentPartBadge.textContent = part;
  }

  if (slideJumpSelect) {
    slideJumpSelect.value = currentSlideIndex;
  }

  if (btnPrev) btnPrev.disabled = currentSlideIndex === 0;
  if (btnNext) btnNext.disabled = currentSlideIndex === totalSlides - 1;

  if (window.location.hash !== '#slide-' + (currentSlideIndex + 1)) {
    history.replaceState(null, '', '#slide-' + (currentSlideIndex + 1));
  }

  const viewport = document.querySelector('.slide-viewport');
  if (viewport) viewport.scrollTop = 0;
}

function nextSlide() {
  if (currentSlideIndex < totalSlides - 1) {
    updateSlideView(currentSlideIndex + 1);
  }
}

function prevSlide() {
  if (currentSlideIndex > 0) {
    updateSlideView(currentSlideIndex - 1);
  }
}

function goToSlide(index) {
  updateSlideView(index);
}

function toggleModal(modal) {
  if (!modal) return;
  if (modal.classList.contains('open')) {
    closeModal(modal);
  } else {
    openModal(modal);
  }
}

function openModal(modal) {
  if (!modal) return;
  closeModal(overviewModal);
  closeModal(shortcutsModal);
  closeModal(searchModal);
  modal.classList.add('open');

  if (modal === searchModal && searchInput) {
    searchInput.value = '';
    renderSearchResults('');
    setTimeout(() => searchInput.focus(), 60);
  }
}

function closeModal(modal) {
  if (!modal) return;
  modal.classList.remove('open');
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    }
  }
}

function renderSearchResults(query) {
  if (!searchResults) return;
  searchResults.innerHTML = '';
  const q = query.trim().toLowerCase();
  const dict = typeof postgresTranslations !== 'undefined' ? (postgresTranslations[currentLang] || postgresTranslations.en) : {};

  const matches = searchData.filter(item => {
    if (!q) return true;
    const titleKey = 's' + item.id + '_title';
    const subKey = 's' + item.id + '_sub';
    const transTitle = (dict[titleKey] || '').toLowerCase();
    const transSub = (dict[subKey] || '').toLowerCase();
    const enTitle = item.title.toLowerCase();
    const kw = item.kw.toLowerCase();
    const cat = item.cat.toLowerCase();

    return enTitle.includes(q) || transTitle.includes(q) || transSub.includes(q) || kw.includes(q) || cat.includes(q) || String(item.id) === q;
  });

  if (matches.length === 0) {
    const noResText = dict.ui_search_no_results || 'No slides found matching your query.';
    searchResults.innerHTML = `<div class="search-empty">${noResText}</div>`;
    return;
  }

  matches.forEach((item, idx) => {
    const row = document.createElement('div');
    row.className = 'search-item' + (idx === 0 ? ' selected' : '');
    const titleKey = 's' + item.id + '_title';
    let titleText = dict[titleKey] || item.title;
    titleText = titleText.replace(/<[^>]*>?/gm, '');

    row.innerHTML = `
      <div class="search-item-left">
        <span class="search-badge">${item.id < 10 ? '0' + item.id : item.id}</span>
        <div>
          <div class="search-item-title">${titleText}</div>
          <div class="search-item-cat">${item.cat}</div>
        </div>
      </div>
      <div class="search-item-action">Jump →</div>
    `;

    row.addEventListener('click', () => {
      goToSlide(item.id - 1);
      closeModal(searchModal);
    });

    searchResults.appendChild(row);
  });
}

function initSearch() {
  if (!searchInput) return;
  searchInput.addEventListener('input', (e) => {
    renderSearchResults(e.target.value);
  });

  searchInput.addEventListener('keydown', (e) => {
    const items = searchResults.querySelectorAll('.search-item');
    if (!items.length) return;
    let selectedIdx = Array.from(items).findIndex(el => el.classList.contains('selected'));

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (selectedIdx < items.length - 1) {
        if (selectedIdx >= 0) items[selectedIdx].classList.remove('selected');
        items[selectedIdx + 1].classList.add('selected');
        items[selectedIdx + 1].scrollIntoView({ block: 'nearest' });
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (selectedIdx > 0) {
        items[selectedIdx].classList.remove('selected');
        items[selectedIdx - 1].classList.add('selected');
        items[selectedIdx - 1].scrollIntoView({ block: 'nearest' });
      }
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedIdx >= 0 && items[selectedIdx]) {
        items[selectedIdx].click();
      }
    }
  });
}

function initCopyButtons() {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-copy') || e.target.closest('.copy-btn');
    if (!btn) return;
    e.preventDefault();

    let codeText = '';
    const codeBox = btn.closest('.code-box') || btn.closest('.terminal-window') || btn.closest('.terminal-mockup');
    if (codeBox) {
      const codeEl = codeBox.querySelector('code') || codeBox.querySelector('.terminal-body') || codeBox.querySelector('.term-body');
      if (codeEl) {
        codeText = codeEl.innerText.trim();
      }
    }

    if (!codeText) {
      codeText = btn.getAttribute('data-code') || '';
    }

    if (codeText) {
      navigator.clipboard.writeText(codeText).then(() => {
        const origHtml = btn.innerHTML;
        const dict = typeof postgresTranslations !== 'undefined' ? (postgresTranslations[currentLang] || postgresTranslations.en) : {};
        const copiedMsg = dict.ui_copied || 'Copied!';
        btn.innerHTML = `<svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor" style="display:inline-block;vertical-align:-1px;margin-right:2px;"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z"/></svg>${copiedMsg}`;
        btn.classList.add('copied');
        setTimeout(() => {
          btn.innerHTML = origHtml;
          btn.classList.remove('copied');
        }, 2000);
      }).catch(() => {});
    }
  });
}

const psqlSimOutputs = {
  '\\l': `                                  List of databases
   Name    |  Owner   | Encoding | Collate |  Ctype  |   Access privileges   
-----------+----------+----------+---------+---------+-----------------------
 myapp     | postgres | UTF8     | C.UTF-8 | C.UTF-8 | 
 postgres  | postgres | UTF8     | C.UTF-8 | C.UTF-8 | 
 template0 | postgres | UTF8     | C.UTF-8 | C.UTF-8 | =c/postgres          +
           |          |          |         |         | postgres=CTc/postgres
 template1 | postgres | UTF8     | C.UTF-8 | C.UTF-8 | =c/postgres          +
           |          |          |         |         | postgres=CTc/postgres
(4 rows)`,

  '\\c myapp': `You are now connected to database "myapp" as user "postgres".
myapp=# `,

  '\\dt': `             List of relations
 Schema |   Name   | Type  |  Owner   
--------+----------+-------+----------
 public | comments | table | postgres
 public | projects | table | postgres
 public | tasks    | table | postgres
 public | users    | table | postgres
(4 rows)`,

  '\\d users': `                                     Table "public.users"
   Column   |           Type           | Collation | Nullable |              Default              
------------+--------------------------+-----------+----------+-----------------------------------
 id         | uuid                     |           | not null | gen_random_uuid()
 name       | text                     |           | not null | 
 email      | text                     |           | not null | 
 created_at | timestamp with time zone |           | not null | now()
Indexes:
    "users_pkey" PRIMARY KEY, btree (id)
    "users_email_key" UNIQUE CONSTRAINT, btree (email)
Referenced by:
    TABLE "projects" CONSTRAINT "projects_owner_id_fkey" FOREIGN KEY (owner_id) REFERENCES users(id) ON DELETE CASCADE
    TABLE "tasks" CONSTRAINT "tasks_assigned_to_fkey" FOREIGN KEY (assigned_to) REFERENCES users(id) ON DELETE SET NULL`,

  'SELECT version();': `                                                 version                                                 
---------------------------------------------------------------------------------------------------------
 PostgreSQL 16.2 (Ubuntu 16.2-1.pgdg22.04+1) on x86_64-pc-linux-gnu, compiled by gcc (Ubuntu 11.4.0)
(1 row)`,

  'SELECT current_database();': ` current_database 
------------------
 myapp
(1 row)`
};

function initTerminalSimulator() {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.term-sim-btn');
    if (!btn) return;
    const cmd = btn.getAttribute('data-cmd');
    if (!cmd) return;

    const termWindow = btn.closest('.terminal-sim-panel') || document.querySelector('.terminal-sim-panel');
    if (!termWindow) return;

    termWindow.querySelectorAll('.term-sim-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const outputEl = termWindow.querySelector('.sim-output');
    const promptCmd = termWindow.querySelector('.sim-cmd-text');
    if (promptCmd) promptCmd.textContent = cmd;
    if (outputEl && psqlSimOutputs[cmd]) {
      outputEl.textContent = psqlSimOutputs[cmd];
    }
  });
}

function handleHashChange() {
  const hash = window.location.hash;
  if (!hash) return;
  const match = hash.match(/slide-(\d+)/);
  if (match) {
    const idx = parseInt(match[1], 10) - 1;
    if (idx >= 0 && idx < totalSlides) {
      goToSlide(idx);
    }
  }
}

document.addEventListener('keydown', (e) => {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') {
    if (e.key === 'Escape') {
      if (searchModal) closeModal(searchModal);
      if (overviewModal) closeModal(overviewModal);
      if (shortcutsModal) closeModal(shortcutsModal);
      e.target.blur();
    }
    return;
  }

  if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K')) {
    e.preventDefault();
    toggleModal(searchModal);
    return;
  }

  if (searchModal && searchModal.classList.contains('open')) {
    if (e.key === 'Escape') {
      closeModal(searchModal);
      e.preventDefault();
    }
    return;
  }

  if (overviewModal && overviewModal.classList.contains('open')) {
    if (e.key === 'Escape' || e.key === 'o' || e.key === 'O' || e.key === 'g' || e.key === 'G') {
      closeModal(overviewModal);
      e.preventDefault();
    }
    return;
  }

  if (shortcutsModal && shortcutsModal.classList.contains('open')) {
    if (e.key === 'Escape' || e.key === '?') {
      closeModal(shortcutsModal);
      e.preventDefault();
    }
    return;
  }

  switch (e.key) {
    case 'ArrowRight':
    case 'Space':
    case 'PageDown':
    case 'l':
    case 'L':
    case 'j':
    case 'J':
      e.preventDefault();
      nextSlide();
      break;

    case 'ArrowLeft':
    case 'PageUp':
    case 'Backspace':
    case 'h':
    case 'k':
    case 'p':
      e.preventDefault();
      prevSlide();
      break;

    case 'Home':
      e.preventDefault();
      goToSlide(0);
      break;

    case 'End':
      e.preventDefault();
      goToSlide(totalSlides - 1);
      break;

    case 'f':
    case 'F':
      e.preventDefault();
      toggleFullscreen();
      break;

    case 't':
    case 'T':
      e.preventDefault();
      toggleTheme();
      break;

    case 'o':
    case 'O':
    case 'g':
    case 'G':
      e.preventDefault();
      toggleModal(overviewModal);
      break;

    case '?':
      e.preventDefault();
      toggleModal(shortcutsModal);
      break;

    case 'Escape':
      if (searchModal) closeModal(searchModal);
      if (overviewModal) closeModal(overviewModal);
      if (shortcutsModal) closeModal(shortcutsModal);
      break;
  }
});

function initPresentationApp() {
  if (btnPrev) btnPrev.addEventListener('click', prevSlide);
  if (btnNext) btnNext.addEventListener('click', nextSlide);

  const langToggleBtns = document.querySelectorAll('#btn-lang-toggle');
  langToggleBtns.forEach(btn => {
    btn.onclick = (e) => {
      if (e) e.preventDefault();
      toggleLanguage();
    };
  });

  const themeToggleBtns = document.querySelectorAll('#btn-theme-toggle');
  themeToggleBtns.forEach(btn => {
    btn.onclick = (e) => {
      if (e) e.preventDefault();
      toggleTheme();
    };
  });
  setTheme(currentTheme);

  if (slideJumpSelect) {
    slideJumpSelect.addEventListener('change', (e) => {
      goToSlide(parseInt(e.target.value, 10));
    });
  }

  const btnOverview = document.getElementById('btn-overview');
  if (btnOverview) {
    btnOverview.addEventListener('click', () => toggleModal(overviewModal));
  }

  const btnShortcuts = document.getElementById('btn-shortcuts');
  if (btnShortcuts) {
    btnShortcuts.addEventListener('click', () => toggleModal(shortcutsModal));
  }

  const btnSearch = document.getElementById('btn-search');
  if (btnSearch) {
    btnSearch.addEventListener('click', () => toggleModal(searchModal));
  }

  const btnFullscreen = document.getElementById('btn-fullscreen');
  if (btnFullscreen) {
    btnFullscreen.addEventListener('click', toggleFullscreen);
  }

  const closeBtns = document.querySelectorAll('.modal-close');
  closeBtns.forEach(b => {
    b.addEventListener('click', () => {
      if (overviewModal) closeModal(overviewModal);
      if (shortcutsModal) closeModal(shortcutsModal);
      if (searchModal) closeModal(searchModal);
    });
  });

  [overviewModal, shortcutsModal, searchModal].forEach(m => {
    if (m) {
      m.addEventListener('click', (e) => {
        if (e.target === m) {
          closeModal(m);
        }
      });
    }
  });

  const startBtns = document.querySelectorAll('.btn-start-course');
  startBtns.forEach(btn => {
    btn.addEventListener('click', nextSlide);
  });

  initCopyButtons();
  initTerminalSimulator();
  initSearch();

  setLanguage(currentLang);

  window.addEventListener('hashchange', handleHashChange);
  if (window.location.hash) {
    handleHashChange();
  } else {
    updateSlideView(0, false);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPresentationApp);
} else {
  initPresentationApp();
}
