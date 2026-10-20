const totalSlides = 85;
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
  { id: 1, s: "01", cat: "INTRODUCTION", title: "Cloudflare: Zero to Production Masterclass", kw: "intro cloudflare edge cdn dns waf workers r2 production setup overview" },
  { id: 2, s: "01", cat: "CLOUD BASICS", title: "What is Cloud Computing?", kw: "cloud hosting vps bare metal edge latency serverless network distributed" },
  { id: 3, s: "01", cat: "CLOUD BASICS", title: "Hosting Evolution: Dedicated to Edge", kw: "dedicated vps managed platforms serverless edge compute infrastructure" },
  { id: 4, s: "01", cat: "CLOUD BASICS", title: "Why Cloudflare Operates Differently", kw: "global connectivity cloud vps comparison reverse proxy anycast network" },
  { id: 5, s: "01", cat: "ABOUT CLOUDFLARE", title: "What is Cloudflare?", kw: "platform definition edge reverse proxy ddos waf ssl cdn workers" },
  { id: 6, s: "01", cat: "ABOUT CLOUDFLARE", title: "Beyond Just 'Hosting'", kw: "ecosystem networking security cdn compute storage full platform" },
  { id: 7, s: "01", cat: "ABOUT CLOUDFLARE", title: "Global Anycast Edge Network", kw: "anycast 330 data centers latency pop routing ddos absorption global" },
  { id: 8, s: "02", cat: "ACCOUNT", title: "Creating Your Cloudflare Account", kw: "signup register verification email dashboard setup onboarding" },
  { id: 9, s: "02", cat: "ACCOUNT", title: "Account Security: 2FA & Scoped Tokens", kw: "security 2fa hardware key totp api tokens least privilege rbac" },
  { id: 10, s: "02", cat: "ACCOUNT", title: "Accounts, Organizations & Zones", kw: "account zone scope domain management hierarchy organization" },
  { id: 11, s: "02", cat: "DOMAINS", title: "Understanding Domains & DNS", kw: "domain apex root subdomain tld icann fqdn hierarchy" },
  { id: 12, s: "02", cat: "DOMAINS", title: "Registrar vs DNS Provider vs Web Host", kw: "registrar nameserver dns host difference comparison namecheap godaddy" },
  { id: 13, s: "02", cat: "DOMAINS", title: "Domain Scenarios: Third-Party vs Registrar", kw: "scenario registrar cloudflare registrar external transfer nameservers" },
  { id: 14, s: "02", cat: "DOMAINS", title: "Adding an Existing Domain to Cloudflare", kw: "onboarding add domain workflow scan records apex zone assignment" },
  { id: 15, s: "02", cat: "SAFETY", title: "CRITICAL: Review Existing DNS First", kw: "safety warning email broken review existing records a mx txt outage" },
  { id: 16, s: "03", cat: "NAMESERVERS", title: "Nameservers Explained", kw: "nameserver authoritative recursive resolver delegation whois ns" },
  { id: 17, s: "03", cat: "DNS", title: "How DNS Resolution Works Step-by-Step", kw: "dns resolution query flow root tld authoritative cache anycast" },
  { id: 18, s: "03", cat: "DNS", title: "Core DNS Records: A, AAAA & CNAME", kw: "a record aaaa ipv4 ipv6 cname alias canonical flattening" },
  { id: 19, s: "03", cat: "DNS", title: "Service DNS Records: MX, TXT, NS, CAA & SRV", kw: "mx email txt verification spf dkim caa ssl cert srv record" },
  { id: 20, s: "03", cat: "INTERACTIVE", title: "INTERACTIVE: Simulated DNS Editor", kw: "simulator sandbox interactive dns add record test query resolve" },
  { id: 21, s: "04", cat: "PROXY", title: "Proxy Status: Proxied vs DNS Only", kw: "proxy status orange cloud grey cloud bypass cdn security waf" },
  { id: 22, s: "04", cat: "PROXY", title: "When to Proxy vs When NOT to Proxy", kw: "when to proxy http https ssh ftp email raw tcp spectrum" },
  { id: 23, s: "04", cat: "REVERSE PROXY", title: "Understanding Reverse Proxies", kw: "reverse proxy architecture terminate connection shield origin ip" },
  { id: 24, s: "04", cat: "REVERSE PROXY", title: "Reverse Proxy Inspection & Headers", kw: "cf-connecting-ip x-forwarded-for headers rewriting tls termination" },
  { id: 25, s: "05", cat: "CDN", title: "What is a Content Delivery Network (CDN)?", kw: "cdn static assets edge locations cache latency bandwidth delivery" },
  { id: 26, s: "05", cat: "CDN", title: "CDN Cache Hit vs Cache Miss Anatomy", kw: "cache hit miss cambodia edge origin roundtrip response time" },
  { id: 27, s: "05", cat: "CACHING", title: "The Three Levels of Caching", kw: "caching browser edge origin multi tier stale revalidate" },
  { id: 28, s: "05", cat: "CACHING", title: "Cache-Control Headers & Edge TTL", kw: "cache control headers max age s-maxage public private ttl" },
  { id: 29, s: "05", cat: "CACHING", title: "Cache Invalidation: Purging Strategies", kw: "purge cache purge everything single file tag prefix instant invalidate" },
  { id: 30, s: "05", cat: "CACHING", title: "Caching Dynamic vs Static Content", kw: "dynamic static authenticated cookies session leak security api cache" },
  { id: 31, s: "06", cat: "SSL / TLS", title: "SSL / TLS Encryption Fundamentals", kw: "ssl tls https handshake asymmetric symmetric certificates encryption" },
  { id: 32, s: "06", cat: "SSL / TLS", title: "The Security Illusion: Edge vs Origin", kw: "security illusion edge encryption origin unencrypted mitm sniffing" },
  { id: 33, s: "06", cat: "SSL / TLS", title: "Cloudflare SSL / TLS Modes Explained", kw: "ssl modes off flexible full full strict comparison diagram" },
  { id: 34, s: "06", cat: "SSL / TLS", title: "Why Flexible SSL is Dangerous", kw: "flexible ssl danger mitm redirect loop port 80 443 plain text" },
  { id: 35, s: "06", cat: "SSL / TLS", title: "Cloudflare Origin CA Certificates", kw: "origin ca certificates free 15 year install nginx apache caddy" },
  { id: 36, s: "06", cat: "SSL / TLS", title: "Domain + HTTPS Production Workflow", kw: "domain https workflow universal ssl auto renew zero downtime" },
  { id: 37, s: "07", cat: "SECURITY", title: "DDoS Protection at Edge Scale", kw: "ddos volumetric l7 syn flood udp attack mitigation edge scrubbing" },
  { id: 38, s: "07", cat: "SECURITY", title: "Web Application Firewall (WAF)", kw: "waf managed rules custom rules owasp sqli xss attack prevention" },
  { id: 39, s: "07", cat: "SECURITY", title: "WAF Rule Actions & Threat Detection", kw: "waf actions allow challenge managed challenge turnstile block" },
  { id: 40, s: "07", cat: "SECURITY", title: "Rate Limiting for Critical Endpoints", kw: "rate limiting api login brute force attack defense search endpoint" },
  { id: 41, s: "07", cat: "SECURITY", title: "Bot Management & Automated Traffic", kw: "bot protection scrapers crawlers good bots bad bots verified" },
  { id: 42, s: "08", cat: "RULES", title: "The Cloudflare Rules Architecture", kw: "rules engine redirect transform cache configuration rules" },
  { id: 43, s: "08", cat: "RULES", title: "Canonical Redirects: HTTP/HTTPS & Apex/WWW", kw: "redirects http to https apex to www 301 permanent 302 temporary" },
  { id: 44, s: "08", cat: "ARCHITECTURE", title: "Custom Domain Architecture", kw: "multi subdomains apex www app api admin cdn zone architecture" },
  { id: 45, s: "09", cat: "FULLSTACK", title: "Cloudflare + Vercel Architecture", kw: "cloudflare vercel nextjs neon postgresql integration dns setup" },
  { id: 46, s: "09", cat: "FULLSTACK", title: "Cloudflare + Self-Hosted VPS Architecture", kw: "vps ubuntu nginx docker postgresql origin firewall authenticated pull" },
  { id: 47, s: "10", cat: "WORKERS", title: "Introduction to Cloudflare Workers", kw: "workers edge serverless v8 isolates 0ms cold start microservices" },
  { id: 48, s: "10", cat: "WORKERS", title: "Anatomy of a Cloudflare Worker", kw: "worker anatomy fetch handler request response context execution" },
  { id: 49, s: "10", cat: "WORKERS", title: "Creating Your First Worker", kw: "create worker dashboard wrangler quickstart deploy hello world" },
  { id: 50, s: "10", cat: "WORKERS", title: "Worker Routes & Custom Hostnames", kw: "worker routes path matching api.example.com proxy intercept" },
  { id: 51, s: "10", cat: "WORKERS", title: "Building an Edge API with Workers", kw: "edge api json response cors headers methods error handling" },
  { id: 52, s: "10", cat: "WORKERS", title: "Secrets, Env Variables & Bindings", kw: "secrets env vars bindings security leak prevention serverless keys" },
  { id: 53, s: "11", cat: "STORAGE", title: "Cloudflare R2 Object Storage", kw: "r2 object storage s3 compatible zero egress bandwidth buckets" },
  { id: 54, s: "11", cat: "STORAGE", title: "Practical R2: TaskFlow Avatar Storage", kw: "taskflow avatar upload r2 signed url bucket permissions api" },
  { id: 55, s: "11", cat: "STORAGE", title: "Cloudflare KV: Global Key-Value Store", kw: "kv key value low latency eventual consistency cache config" },
  { id: 56, s: "11", cat: "STORAGE", title: "Cloudflare Durable Objects", kw: "durable objects stateful coordination websockets real time chat room" },
  { id: 57, s: "11", cat: "STORAGE", title: "Cloudflare Queues: Background Jobs", kw: "queues async background processing batching dead letter worker" },
  { id: 58, s: "12", cat: "ZERO TRUST", title: "Cloudflare Zero Trust Architecture", kw: "zero trust security perimeter identity authentication no vpn" },
  { id: 59, s: "12", cat: "ZERO TRUST", title: "Cloudflare Access for Private Apps", kw: "cloudflare access sso idp google github internal admin dashboard" },
  { id: 60, s: "12", cat: "ZERO TRUST", title: "Cloudflare Tunnel (cloudflared)", kw: "cloudflared tunnel secure connection no open ports outbound only" },
  { id: 61, s: "12", cat: "ZERO TRUST", title: "Practical Tunnel: Exposing Localhost", kw: "tunnel demo localhost 3000 expose public hostname cloudflared command" },
  { id: 62, s: "13", cat: "DEVELOPER", title: "Cloudflare API & Scoped Tokens", kw: "api automation rest tokens bearer authentication least privilege" },
  { id: 63, s: "13", cat: "DEVELOPER", title: "Wrangler CLI Development Workflow", kw: "wrangler cli dev deploy tail logs config wrangler jsonc" },
  { id: 64, s: "13", cat: "DEVELOPER", title: "Git Integration & CI/CD Pipelines", kw: "github ci cd automated deployment pull request preview builds" },
  { id: 65, s: "14", cat: "PAGES", title: "Cloudflare Pages Platform", kw: "cloudflare pages jamstack hosting static fullstack web apps" },
  { id: 66, s: "14", cat: "PAGES", title: "Pages vs Vercel vs Traditional VPS", kw: "comparison pages vercel vps strengths trade-offs selection" },
  { id: 67, s: "14", cat: "PAGES", title: "Deploying a Static Web App to Pages", kw: "static deploy html css js github repo pages build settings" },
  { id: 68, s: "14", cat: "PAGES", title: "Next.js on Cloudflare: Real-World Guide", kw: "nextjs cloudflare opennext static export edge compatibility" },
  { id: 69, s: "15", cat: "CRITICAL SAFETY", title: "Email DNS: MX, SPF, DKIM & DMARC", kw: "email dns safety mx spf dkim dmarc broken email mail outage" },
  { id: 70, s: "15", cat: "CRITICAL SAFETY", title: "Pre-Migration DNS Safety Checklist", kw: "pre migration checklist export backup audit nameservers verify" },
  { id: 71, s: "15", cat: "CRITICAL SAFETY", title: "DNSSEC: Security & Migration Gotchas", kw: "dnssec ds record signature validation registrar migration failure" },
  { id: 72, s: "16", cat: "ORIGIN SECURITY", title: "Defense in Depth Security Model", kw: "defense in depth layers perimeter dns ddos waf rate limit origin" },
  { id: 73, s: "16", cat: "ORIGIN SECURITY", title: "Origin Server Hardening", kw: "origin hardening ufw iptables cloudflare ip list authenticated pull" },
  { id: 74, s: "16", cat: "OBSERVABILITY", title: "Observability, Logs & Analytics", kw: "analytics metrics http logs security events wrangler tail monitoring" },
  { id: 75, s: "17", cat: "TROUBLESHOOTING", title: "Troubleshooting: DNS Failures", kw: "troubleshoot dns dig nslookup whois propagation failure diagnose" },
  { id: 76, s: "17", cat: "TROUBLESHOOTING", title: "Troubleshooting: SSL & Redirect Loops", kw: "troubleshoot ssl err_too_many_redirects loop cert pending mixed content" },
  { id: 77, s: "17", cat: "TROUBLESHOOTING", title: "Troubleshooting: 502 & 504 Errors", kw: "troubleshoot 502 504 bad gateway timeout origin down firewall blocked" },
  { id: 78, s: "17", cat: "INTERACTIVE", title: "INTERACTIVE: Diagnostic Simulator", kw: "simulator troubleshooting interactive diagnostic scenario practice" },
  { id: 79, s: "18", cat: "PERFORMANCE", title: "Performance Optimization at the Edge", kw: "performance brotli http3 quic early hints compression latency" },
  { id: 80, s: "18", cat: "COST & PLANS", title: "Cloudflare Plans & Cost Awareness", kw: "pricing free pro business enterprise worker limits r2 pricing" },
  { id: 81, s: "19", cat: "PROJECT", title: "TaskFlow Cloud Master Architecture", kw: "project taskflow nextjs neon cloudflare fullstack production demo" },
  { id: 82, s: "20", cat: "CHECKLIST", title: "INTERACTIVE: Production Launch Checklist", kw: "checklist 20 points production launch verification localstorage" },
  { id: 83, s: "20", cat: "INTERACTIVE", title: "INTERACTIVE: Architecture Explorer", kw: "architecture explorer interactive layers visual flow cloudflare" },
  { id: 84, s: "20", cat: "MISTAKES", title: "Top 10 Costly Cloudflare Mistakes", kw: "mistakes pitfalls orange clouding mx flexible ssl exposed ip leaks" },
  { id: 85, s: "20", cat: "SUMMARY", title: "The Master Cloudflare Cheat Sheet", kw: "cheat sheet reference commands mental model summary congratulations" }
];

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('presentation_lang', lang);
  document.documentElement.setAttribute('lang', lang);

  if (lang === 'km') {
    document.body.classList.add('lang-km');
  } else {
    document.body.classList.remove('lang-km');
  }

  const langFlagEn = document.querySelectorAll('.lang-flag-en');
  const langFlagKm = document.querySelectorAll('.lang-flag-km');
  if (lang === 'km') {
    langFlagEn.forEach(el => el.style.display = 'none');
    langFlagKm.forEach(el => el.style.display = 'block');
  } else {
    langFlagEn.forEach(el => el.style.display = 'block');
    langFlagKm.forEach(el => el.style.display = 'none');
  }

  const dict = cloudflareTranslations[lang] || cloudflareTranslations.en;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  const currentSlide = document.getElementById(`slide-${currentSlideIndex + 1}`);
  if (currentSlide && currentPartBadge) {
    const partKey = currentSlide.getAttribute('data-part-key');
    if (partKey && dict[partKey]) {
      currentPartBadge.textContent = dict[partKey];
    } else {
      currentPartBadge.textContent = currentSlide.getAttribute('data-part') || 'MODULE 09';
    }
  }

  updateSearchPlaceholder();
}

function updateSearchPlaceholder() {
  if (searchInput) {
    searchInput.placeholder = currentLang === 'km' 
      ? 'ស្វែងរក Cloudflare, DNS, SSL, Workers, R2, WAF (Ctrl + K)...' 
      : 'Search Cloudflare, DNS, SSL, Workers, R2, WAF (Ctrl + K)...';
  }
}

function setTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('presentation_theme', theme);

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

  const themeToggleBtns = document.querySelectorAll('#btn-theme-toggle');
  themeToggleBtns.forEach(btn => {
    btn.setAttribute('title', theme === 'dark' ? 'Toggle Light / Dark Mode (T)' : 'Toggle Light / Dark Mode (T)');
    btn.setAttribute('aria-label', theme === 'dark' ? 'Theme: Dark' : 'Theme: Light');
  });
}

let lastThemeToggle = 0;
function toggleTheme() {
  const now = Date.now();
  if (now - lastThemeToggle < 150) return;
  lastThemeToggle = now;
  setTheme(currentTheme === 'dark' ? 'light' : 'dark');
}

window.setTheme = setTheme;
window.toggleTheme = toggleTheme;

let lastLangToggle = 0;
function toggleLanguage() {
  const now = Date.now();
  if (now - lastLangToggle < 150) return;
  lastLangToggle = now;
  setLanguage(currentLang === 'en' ? 'km' : 'en');
}

window.setLanguage = setLanguage;
window.toggleLanguage = toggleLanguage;

function updateSlideView(index) {
  if (index < 0) index = 0;
  if (index >= totalSlides) index = totalSlides - 1;

  currentSlideIndex = index;
  const slideNum = index + 1;

  document.querySelectorAll('.slide-item').forEach(el => {
    el.classList.remove('active');
  });

  const activeSlide = document.getElementById(`slide-${slideNum}`);
  if (activeSlide) {
    activeSlide.classList.add('active');
    
    const partKey = activeSlide.getAttribute('data-part-key');
    const dict = cloudflareTranslations[currentLang] || cloudflareTranslations.en;
    if (currentPartBadge) {
      if (partKey && dict[partKey]) {
        currentPartBadge.textContent = dict[partKey];
      } else {
        currentPartBadge.textContent = activeSlide.getAttribute('data-part') || 'MODULE 09';
      }
    }
  }

  if (currentSlideLabel) currentSlideLabel.textContent = slideNum;
  if (slideJumpSelect) slideJumpSelect.value = index;

  if (progressFill) {
    const percent = Math.round((slideNum / totalSlides) * 100);
    progressFill.style.width = `${percent}%`;
  }

  if (btnPrev) btnPrev.disabled = index === 0;
  if (btnNext) btnNext.disabled = index === totalSlides - 1;

  document.querySelectorAll('.overview-card').forEach((card, idx) => {
    if (idx === index) {
      card.classList.add('current');
    } else {
      card.classList.remove('current');
    }
  });

  history.replaceState(null, '', `#slide-${slideNum}`);
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

function openModal(modal) {
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(modal) {
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function closeAllModals() {
  document.querySelectorAll('.modal-backdrop').forEach(modal => {
    modal.classList.remove('open');
  });
  document.body.style.overflow = '';
}

function populateJumpSelect() {
  if (!slideJumpSelect) return;
  slideJumpSelect.innerHTML = '';
  for (let i = 0; i < totalSlides; i++) {
    const opt = document.createElement('option');
    opt.value = i;
    const num = String(i + 1).padStart(2, '0');
    const item = searchData[i];
    opt.textContent = `${num}. ${item ? item.title : `Slide ${num}`}`;
    slideJumpSelect.appendChild(opt);
  }

  slideJumpSelect.addEventListener('change', (e) => {
    updateSlideView(parseInt(e.target.value, 10));
  });
}

function populateOverviewGrid() {
  if (!overviewGrid) return;
  overviewGrid.innerHTML = '';

  searchData.forEach((item, idx) => {
    const card = document.createElement('div');
    card.className = `overview-card ${idx === currentSlideIndex ? 'current' : ''}`;
    
    const numSpan = document.createElement('span');
    numSpan.className = 'overview-card-num';
    numSpan.textContent = `SLIDE ${String(idx + 1).padStart(2, '0')}`;

    const titleSpan = document.createElement('span');
    titleSpan.className = 'overview-card-title';
    titleSpan.textContent = item.title;

    card.appendChild(numSpan);
    card.appendChild(titleSpan);

    card.addEventListener('click', () => {
      updateSlideView(idx);
      closeModal(overviewModal);
    });

    overviewGrid.appendChild(card);
  });
}

function setupSearch() {
  if (!searchInput || !searchResults) return;

  function renderSearchResults(query) {
    searchResults.innerHTML = '';
    const q = query.trim().toLowerCase();

    if (!q) {
      searchResults.innerHTML = '<div style="padding:16px;text-align:center;color:#94a3b8;font-size:13px;">Type to search all 85 Cloudflare slides by title, commands, or concepts.</div>';
      return;
    }

    const matches = searchData.filter(item => {
      const titleMatch = item.title.toLowerCase().includes(q);
      const catMatch = item.cat.toLowerCase().includes(q);
      const kwMatch = item.kw.toLowerCase().includes(q);
      return titleMatch || catMatch || kwMatch;
    });

    if (matches.length === 0) {
      searchResults.innerHTML = '<div style="padding:16px;text-align:center;color:#94a3b8;font-size:13px;">No matching slides found. Try searching: dns, proxy, waf, workers, r2, tunnel, ssl</div>';
      return;
    }

    matches.forEach(item => {
      const resItem = document.createElement('div');
      resItem.className = 'search-item';
      resItem.innerHTML = `
        <div style="display:flex; flex-direction:column; gap:2px;">
          <div style="display:flex; align-items:center; gap:6px;">
            <span class="search-badge">Slide ${item.s}</span>
            <span class="search-item-cat">${item.cat}</span>
          </div>
          <span class="search-item-title">${item.title}</span>
        </div>
        <span class="search-item-action">Jump →</span>
      `;
      resItem.addEventListener('click', () => {
        updateSlideView(item.id - 1);
        closeModal(searchModal);
      });
      searchResults.appendChild(resItem);
    });
  }

  searchInput.addEventListener('input', (e) => {
    renderSearchResults(e.target.value);
  });

  renderSearchResults('');
}

function setupCopyButtons() {
  document.querySelectorAll('.btn-copy').forEach(btn => {
    btn.addEventListener('click', () => {
      const codeEl = btn.closest('.terminal-window, .code-block-wrapper, .info-card')?.querySelector('.term-cmd, code, pre, .terminal-body');
      const textToCopy = codeEl ? codeEl.innerText.trim() : btn.getAttribute('data-copy');
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          const originalText = btn.textContent;
          btn.textContent = 'Copied!';
          setTimeout(() => {
            btn.textContent = originalText;
          }, 1800);
        });
      }
    });
  });
}

function initDnsSimulator() {
  const typeSelect = document.getElementById('sim-dns-type');
  const nameInput = document.getElementById('sim-dns-name');
  const targetInput = document.getElementById('sim-dns-target');
  const ttlSelect = document.getElementById('sim-dns-ttl');
  const proxyCheckbox = document.getElementById('sim-dns-proxy');
  const proxyLabel = document.getElementById('sim-proxy-status-label');
  const cloudIcon = document.getElementById('sim-proxy-cloud-icon');
  const btnAddRecord = document.getElementById('sim-btn-add-dns');
  const tableBody = document.getElementById('sim-dns-table-body');
  const testInput = document.getElementById('sim-query-input');
  const btnRunQuery = document.getElementById('sim-btn-run-query');
  const queryResult = document.getElementById('sim-query-output');

  let simulatedRecords = [
    { type: "A", name: "@", target: "198.51.100.24", ttl: "Auto", proxied: true },
    { type: "CNAME", name: "www", target: "taskflow.com", ttl: "Auto", proxied: true },
    { type: "MX", name: "@", target: "mail.protonmail.ch", ttl: "Auto", proxied: false },
    { type: "TXT", name: "@", target: "v=spf1 include:_spf.protonmail.ch ~all", ttl: "Auto", proxied: false }
  ];

  function renderTable() {
    if (!tableBody) return;
    tableBody.innerHTML = '';
    simulatedRecords.forEach((rec, idx) => {
      const tr = document.createElement('tr');
      tr.className = 'border-b border-slate-800 text-xs font-mono';
      tr.innerHTML = `
        <td class="p-2 text-blue-400 font-bold">${rec.type}</td>
        <td class="p-2 text-white font-bold">${rec.name}</td>
        <td class="p-2 text-slate-300 truncate max-w-[200px]" title="${rec.target}">${rec.target}</td>
        <td class="p-2 text-slate-400">${rec.ttl}</td>
        <td class="p-2">
          ${rec.proxied 
            ? '<span class="inline-flex items-center gap-1 px-1.5 py-0.5 bg-orange-500/15 text-orange-400 border border-orange-500/30 font-bold text-[10px]">☁ Proxied</span>' 
            : '<span class="inline-flex items-center gap-1 px-1.5 py-0.5 bg-slate-700/50 text-slate-400 border border-slate-600 font-bold text-[10px]">☁ DNS Only</span>'}
        </td>
        <td class="p-2 text-right">
          <button class="text-red-400 hover:text-red-300 font-sans cursor-pointer text-xs" data-del-idx="${idx}">Delete</button>
        </td>
      `;
      tableBody.appendChild(tr);
    });

    tableBody.querySelectorAll('[data-del-idx]').forEach(delBtn => {
      delBtn.addEventListener('click', (e) => {
        const i = parseInt(e.target.getAttribute('data-del-idx'), 10);
        simulatedRecords.splice(i, 1);
        renderTable();
      });
    });
  }

  if (proxyCheckbox) {
    proxyCheckbox.addEventListener('change', () => {
      if (proxyCheckbox.checked) {
        if (proxyLabel) {
          proxyLabel.textContent = 'Proxied (CDN + WAF + DDoS Active)';
          proxyLabel.className = 'text-orange-400 font-bold text-xs';
        }
        if (cloudIcon) cloudIcon.style.color = '#f97316';
      } else {
        if (proxyLabel) {
          proxyLabel.textContent = 'DNS Only (Direct Origin Exposure)';
          proxyLabel.className = 'text-slate-400 font-bold text-xs';
        }
        if (cloudIcon) cloudIcon.style.color = '#94a3b8';
      }
    });
  }

  if (btnAddRecord) {
    btnAddRecord.addEventListener('click', () => {
      const t = typeSelect ? typeSelect.value : 'A';
      const n = (nameInput && nameInput.value.trim()) || '@';
      const val = (targetInput && targetInput.value.trim()) || '198.51.100.24';
      const ttl = ttlSelect ? ttlSelect.value : 'Auto';
      const p = proxyCheckbox ? proxyCheckbox.checked : false;

      if (t === 'MX' && p) {
        alert("Warning: MX records for mail servers must NOT be proxied! Automatically setting to DNS Only.");
      }

      simulatedRecords.push({
        type: t,
        name: n,
        target: val,
        ttl: ttl,
        proxied: t === 'MX' ? false : p
      });

      renderTable();
      if (nameInput) nameInput.value = '';
      if (targetInput) targetInput.value = '';
    });
  }

  if (btnRunQuery) {
    btnRunQuery.addEventListener('click', () => {
      const q = (testInput && testInput.value.trim().toLowerCase()) || 'taskflow.com';
      if (!queryResult) return;

      queryResult.innerHTML = '<span class="text-blue-400">Sending DNS query to Cloudflare Anycast Resolver (1.1.1.1)...</span>';

      setTimeout(() => {
        let matchingRecord = null;
        if (q === 'taskflow.com' || q === '@') {
          matchingRecord = simulatedRecords.find(r => r.name === '@' && (r.type === 'A' || r.type === 'CNAME'));
        } else if (q.startsWith('www.')) {
          matchingRecord = simulatedRecords.find(r => r.name === 'www');
        } else {
          matchingRecord = simulatedRecords.find(r => r.name === q);
        }

        if (matchingRecord) {
          if (matchingRecord.proxied) {
            queryResult.innerHTML = `
              <div class="text-green-400 font-bold">✓ DNS RESOLVED (Proxied Traffic)</div>
              <div class="text-slate-200 mt-1">Client Resolver returned Cloudflare Anycast IPs: <span class="text-orange-400 font-bold">104.21.72.18, 172.67.142.9</span></div>
              <div class="text-slate-400 text-[11px] mt-1">🛡️ Protected: Public traffic terminates at Cloudflare Global Edge. Features active: WAF, DDoS Protection, SSL/TLS, and CDN Caching. Origin target (<span class="text-slate-300 font-mono">${matchingRecord.target}</span>) is strictly hidden from visitors.</div>
            `;
          } else {
            queryResult.innerHTML = `
              <div class="text-amber-400 font-bold">✓ DNS RESOLVED (DNS Only - Bypass)</div>
              <div class="text-slate-200 mt-1">Client Resolver returned Real Origin Target: <span class="text-amber-300 font-bold">${matchingRecord.target}</span></div>
              <div class="text-slate-400 text-[11px] mt-1">⚠️ Direct Exposure: Cloudflare CDN and WAF are NOT active. Traffic bypasses Cloudflare edge and connects directly to the server. Real IP is visible via public dig queries.</div>
            `;
          }
        } else {
          queryResult.innerHTML = `
            <div class="text-red-400 font-bold">✗ NXDOMAIN / RECORD NOT FOUND</div>
            <div class="text-slate-300 mt-1">No matching DNS record found for host: <span class="text-white font-mono">${q}</span></div>
            <div class="text-slate-400 text-[11px] mt-1">Add an A or CNAME record above for this hostname to resolve properly.</div>
          `;
        }
      }, 400);
    });
  }

  renderTable();
}

function initTroubleshootingSimulator() {
  const scenarioBtns = document.querySelectorAll('.scenario-nav-btn');
  const scenarioTitle = document.getElementById('trouble-scenario-title');
  const scenarioDesc = document.getElementById('trouble-scenario-desc');
  const scenarioOptions = document.getElementById('trouble-options-container');
  const feedbackPanel = document.getElementById('trouble-feedback-panel');

  const troubleScenarios = [
    {
      id: "loop",
      navLabel: "1. Redirect Loop",
      title: "ERR_TOO_MANY_REDIRECTS on HTTPS",
      desc: "After adding your domain and turning on Cloudflare proxying, visitors receive ERR_TOO_MANY_REDIRECTS in their browser when loading https://taskflow.com. Your origin server runs Nginx with an HTTP to HTTPS redirect rule.",
      options: [
        {
          text: "Set Cloudflare SSL/TLS mode to 'Flexible'",
          correct: false,
          feedback: "❌ INCORRECT: 'Flexible' is the exact cause of this loop! Cloudflare connects to your origin on HTTP (port 80). Your Nginx server redirects HTTP back to HTTPS (port 443). Cloudflare receives this and loops infinitely."
        },
        {
          text: "Switch SSL/TLS mode to 'Full (Strict)' and ensure origin has an SSL certificate",
          correct: true,
          feedback: "✓ CORRECT! In Full (Strict) mode, Cloudflare connects to your origin over HTTPS (port 443) with certificate verification. Nginx sees the incoming HTTPS request and serves the page directly without redirecting."
        },
        {
          text: "Turn off Cloudflare proxy and expose the server IP directly",
          correct: false,
          feedback: "❌ DANGEROUS: Turning off proxying disables CDN, DDoS protection, and WAF, exposing your server directly without fixing the underlying SSL mode mismatch."
        }
      ]
    },
    {
      id: "email",
      navLabel: "2. Broken Email",
      title: "Website Works, But Corporate Email Stopped Working",
      desc: "You updated your domain's nameservers to Cloudflare. The website loads blazing fast, but every employee in the company suddenly cannot send or receive emails via Google Workspace or Microsoft 365.",
      options: [
        {
          text: "Proxy the MX record through Cloudflare (turn on Orange Cloud)",
          correct: false,
          feedback: "❌ INCORRECT: Cloudflare's HTTP proxy only handles HTTP/HTTPS web traffic. Orange-clouding an MX record or mail host breaks SMTP email transmission completely."
        },
        {
          text: "Audit DNS records and restore missing MX and TXT (SPF/DKIM/DMARC) records",
          correct: true,
          feedback: "✓ CORRECT! Automatic DNS scans frequently miss third-party email routing and authentication records. Adding the MX records and TXT verification records (set to DNS Only) immediately restores mail delivery."
        },
        {
          text: "Revert nameservers permanently back to the registrar and abandon Cloudflare",
          correct: false,
          feedback: "❌ UNNECESSARY: You can easily keep Cloudflare for both web proxying and DNS while keeping email records set to 'DNS Only'."
        }
      ]
    },
    {
      id: "502",
      navLabel: "3. 502 Bad Gateway",
      title: "Cloudflare 502 Bad Gateway / 504 Gateway Timeout",
      desc: "Visitors randomly encounter Cloudflare-branded 502 Bad Gateway or 504 Gateway Timeout error screens. Cloudflare's edge is online, but reports it cannot establish an upstream connection.",
      options: [
        {
          text: "Purge Cloudflare CDN Cache completely",
          correct: false,
          feedback: "❌ INCORRECT: 502/504 errors are origin connection failures, not stale cache issues. Purging cache will just force more requests to the failing origin."
        },
        {
          text: "Verify origin web server (Nginx/Node.js) is running and firewall allows Cloudflare IPs",
          correct: true,
          feedback: "✓ CORRECT! A 502/504 error means Cloudflare reached the origin, but the origin process crashed, timed out, or the origin firewall (UFW/security group) blocked Cloudflare's IP range."
        },
        {
          text: "Change Cloudflare DNS TTL to 1 minute",
          correct: false,
          feedback: "❌ IRRELEVANT: Proxied records have their TTL managed automatically by Cloudflare. TTL does not fix origin server crashes or dropped TCP connections."
        }
      ]
    },
    {
      id: "origin-leak",
      navLabel: "4. Leaked Origin IP",
      title: "Attacker Bypassing WAF by Hitting Origin IP Directly",
      desc: "You configured strict Cloudflare WAF rules to block malicious bots. However, the attacker discovered your real origin IP address from old DNS records and is sending floods directly to your VPS, bypassing Cloudflare entirely.",
      options: [
        {
          text: "Configure Origin Firewall (UFW) to ONLY allow Cloudflare IP ranges & enable Authenticated Origin Pulls",
          correct: true,
          feedback: "✓ CORRECT! True defense in depth requires locking down the origin server so that it drops all direct incoming traffic on ports 80/443 that doesn't originate from Cloudflare's published IP ranges or authenticated client certificates."
        },
        {
          text: "Add another WAF rule in the Cloudflare dashboard",
          correct: false,
          feedback: "❌ INEFFECTIVE: The attacker is hitting your origin server IP directly! Cloudflare WAF rules never execute because the traffic is bypassing Cloudflare's edge entirely."
        },
        {
          text: "Enable Under Attack Mode in Cloudflare",
          correct: false,
          feedback: "❌ INEFFECTIVE: Under Attack Mode only presents challenges to visitors arriving through Cloudflare. Direct-to-origin attacks do not pass through Cloudflare."
        }
      ]
    }
  ];

  function loadScenario(index) {
    scenarioBtns.forEach((btn, i) => {
      if (i === index) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    const scen = troubleScenarios[index] || troubleScenarios[0];
    if (scenarioTitle) scenarioTitle.textContent = scen.title;
    if (scenarioDesc) scenarioDesc.textContent = scen.desc;
    if (feedbackPanel) {
      feedbackPanel.style.display = 'none';
      feedbackPanel.innerHTML = '';
    }

    if (scenarioOptions) {
      scenarioOptions.innerHTML = '';
      scen.options.forEach((opt) => {
        const btn = document.createElement('button');
        btn.className = 'scenario-option-btn w-full text-left p-3 bg-slate-800 border border-slate-700 hover:border-blue-500 text-xs text-slate-200 transition-colors cursor-pointer flex items-center justify-between';
        btn.innerHTML = `<span>${opt.text}</span> <span class="font-mono text-blue-400 font-bold ml-2">Select →</span>`;
        
        btn.addEventListener('click', () => {
          scenarioOptions.querySelectorAll('.scenario-option-btn').forEach(b => {
            b.classList.remove('selected-correct', 'selected-wrong');
          });

          if (opt.correct) {
            btn.classList.add('selected-correct');
            if (feedbackPanel) {
              feedbackPanel.style.display = 'block';
              feedbackPanel.className = 'p-3 bg-green-500/15 border border-green-500/30 text-green-300 text-xs leading-relaxed font-sans';
              feedbackPanel.innerHTML = opt.feedback;
            }
          } else {
            btn.classList.add('selected-wrong');
            if (feedbackPanel) {
              feedbackPanel.style.display = 'block';
              feedbackPanel.className = 'p-3 bg-red-500/15 border border-red-500/30 text-red-300 text-xs leading-relaxed font-sans';
              feedbackPanel.innerHTML = opt.feedback;
            }
          }
        });

        scenarioOptions.appendChild(btn);
      });
    }
  }

  scenarioBtns.forEach((btn, i) => {
    btn.addEventListener('click', () => loadScenario(i));
  });

  loadScenario(0);
}

function initArchitectureExplorer() {
  const layerBtns = document.querySelectorAll('.arch-layer-btn');
  const layerTitle = document.getElementById('arch-detail-title');
  const layerBadge = document.getElementById('arch-detail-badge');
  const layerDesc = document.getElementById('arch-detail-desc');
  const layerFlow = document.getElementById('arch-detail-flow');
  const layerKeySettings = document.getElementById('arch-detail-settings');

  const archLayers = {
    dns: {
      badge: "EDGE ENTRY POINT",
      title: "Authoritative Anycast DNS",
      desc: "The entry door to your entire online presence. Cloudflare Anycast responds from 330+ cities worldwide in under 12ms. Proxied records resolve to Cloudflare edge IPs.",
      flow: "Client Resolver → Anycast 1.1.1.1 / 1.0.0.1 → Proxied Virtual IP",
      settings: "Automatic TTL, CNAME flattening, DNSSEC signing, multi-record health checks."
    },
    cdn: {
      badge: "CONTENT ACCELERATION",
      title: "Global CDN & Edge Caching",
      desc: "Caches static assets (JS, CSS, images, fonts, HTML) directly at the edge closest to visitors. Slashes origin bandwidth by 70–95% and cuts response times to milliseconds.",
      flow: "Browser Request → Cloudflare Edge Cache (Hit: 12ms) or Origin Fetch (Miss)",
      settings: "Cache-Control: public, max-age=31536000, immutable; stale-while-revalidate; Instant cache purge via API."
    },
    waf: {
      badge: "PERIMETER SHIELD",
      title: "Web Application Firewall (WAF) & DDoS",
      desc: "Inspects incoming HTTP/S payloads in real-time. Automatically mitigates volumetric L3/L4 attacks and filters Layer 7 OWASP threats, SQL injection, XSS, and bad bot scrapers.",
      flow: "Payload Inspection → OWASP Managed Rules → Rate Limiting → Cloudflare Turnstile Challenge",
      settings: "Managed Core Rulesets, Custom Expression Rules, Rate Limiting (e.g. 10 req/10s on /login)."
    },
    workers: {
      badge: "EDGE SERVERLESS COMPUTE",
      title: "Cloudflare Workers & Edge APIs",
      desc: "Executes lightweight JavaScript/TypeScript code directly at edge data centers with 0ms cold starts. Powers edge microservices, authentication gateways, and API routing.",
      flow: "Incoming Request → Worker Fetch Handler → Response Synthesis / Origin Manipulation",
      settings: "wrangler.jsonc bindings, V8 Isolates execution, KV/R2 bindings, scoped secrets."
    },
    r2: {
      badge: "ZERO-EGRESS STORAGE",
      title: "Cloudflare R2 Object Storage",
      desc: "S3-compatible distributed object storage designed for user uploads, avatars, assets, and backups with ZERO bandwidth egress fees.",
      flow: "App / Worker → S3 AWS SDK or Native Worker Binding → Private R2 Bucket",
      settings: "Bucket CORS policy, pre-signed upload URLs, private-by-default access control."
    },
    tunnel: {
      badge: "ZERO TRUST CONNECTIVITY",
      title: "Cloudflare Tunnel (cloudflared)",
      desc: "Establishes secure, outbound-only encrypted tunnels between your private origin infrastructure and Cloudflare. Eliminates open inbound ports on firewalls.",
      flow: "Private Server (cloudflared) ⇄ Outbound Tunnel ⇄ Cloudflare Edge ⇄ Public Visitor",
      settings: "Zero inbound firewall ports open, Cloudflare Access SSO policies, private DNS routing."
    }
  };

  layerBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      layerBtns.forEach(b => b.classList.remove('btn-primary-action'));
      btn.classList.add('btn-primary-action');

      const k = btn.getAttribute('data-layer') || 'dns';
      const data = archLayers[k] || archLayers.dns;

      if (layerBadge) layerBadge.textContent = data.badge;
      if (layerTitle) layerTitle.textContent = data.title;
      if (layerDesc) layerDesc.textContent = data.desc;
      if (layerFlow) layerFlow.textContent = data.flow;
      if (layerKeySettings) layerKeySettings.textContent = data.settings;
    });
  });
}

function initChecklist() {
  const checklistStorageKey = 'cloudflare_production_checklist_state';
  const checkboxes = document.querySelectorAll('.prod-check-item');
  const countLabel = document.getElementById('check-count-label');
  const progressBar = document.getElementById('check-progress-bar');
  const resetBtn = document.getElementById('btn-reset-checklist');

  let savedState = {};
  try {
    const raw = localStorage.getItem(checklistStorageKey);
    if (raw) savedState = JSON.parse(raw);
  } catch (err) {
    savedState = {};
  }

  checkboxes.forEach(cb => {
    const key = cb.getAttribute('data-check-key');
    if (key && savedState[key]) {
      cb.checked = true;
    }
  });

  function updateChecklistProgress() {
    let checkedCount = 0;
    checkboxes.forEach(cb => {
      if (cb.checked) checkedCount++;
    });

    if (countLabel) {
      const pct = Math.round((checkedCount / (checkboxes.length || 1)) * 100);
      countLabel.textContent = `${checkedCount} of ${checkboxes.length} Checked (${pct}%)`;
    }

    if (progressBar) {
      const pct = Math.round((checkedCount / (checkboxes.length || 1)) * 100);
      progressBar.style.width = `${pct}%`;
    }
  }

  checkboxes.forEach(cb => {
    cb.addEventListener('change', () => {
      const key = cb.getAttribute('data-check-key');
      if (key) {
        savedState[key] = cb.checked;
        localStorage.setItem(checklistStorageKey, JSON.stringify(savedState));
      }
      updateChecklistProgress();
    });
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      savedState = {};
      localStorage.removeItem(checklistStorageKey);
      checkboxes.forEach(cb => cb.checked = false);
      updateChecklistProgress();
    });
  }

  updateChecklistProgress();
}

function setupKeyboardListeners() {
  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') {
      if (e.key === 'Escape') {
        closeAllModals();
        e.target.blur();
      }
      return;
    }

    if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K')) {
      e.preventDefault();
      if (searchModal) {
        if (searchModal.classList.contains('open')) {
          closeModal(searchModal);
        } else {
          openModal(searchModal);
          setTimeout(() => searchInput?.focus(), 100);
        }
      }
      return;
    }

    switch (e.key) {
      case 'ArrowRight':
      case 'Space':
      case 'l':
      case 'L':
      case 'PageDown':
        e.preventDefault();
        nextSlide();
        break;

      case 'ArrowLeft':
      case 'Backspace':
      case 'h':
      case 'H':
      case 'PageUp':
        e.preventDefault();
        prevSlide();
        break;

      case 'Home':
        e.preventDefault();
        updateSlideView(0);
        break;

      case 'End':
        e.preventDefault();
        updateSlideView(totalSlides - 1);
        break;

      case 'o':
      case 'O':
      case 'g':
      case 'G':
        e.preventDefault();
        if (overviewModal) {
          overviewModal.classList.contains('open') ? closeModal(overviewModal) : openModal(overviewModal);
        }
        break;

      case '?':
        e.preventDefault();
        if (shortcutsModal) {
          shortcutsModal.classList.contains('open') ? closeModal(shortcutsModal) : openModal(shortcutsModal);
        }
        break;

      case 't':
      case 'T':
        e.preventDefault();
        toggleTheme();
        break;

      case 'f':
      case 'F':
        e.preventDefault();
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen().catch(() => {});
        } else {
          document.exitFullscreen().catch(() => {});
        }
        break;

      case 'Escape':
        closeAllModals();
        break;
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  if (totalSlidesLabel) totalSlidesLabel.textContent = totalSlides;

  populateJumpSelect();
  populateOverviewGrid();
  setupSearch();
  setupCopyButtons();
  initDnsSimulator();
  initTroubleshootingSimulator();
  initArchitectureExplorer();
  initChecklist();
  setupKeyboardListeners();

  if (btnPrev) btnPrev.addEventListener('click', prevSlide);
  if (btnNext) btnNext.addEventListener('click', nextSlide);

  const btnOverview = document.getElementById('btn-overview');
  if (btnOverview) {
    btnOverview.addEventListener('click', () => openModal(overviewModal));
  }

  const btnShortcuts = document.getElementById('btn-shortcuts');
  if (btnShortcuts) {
    btnShortcuts.addEventListener('click', () => openModal(shortcutsModal));
  }

  const btnFullscreen = document.getElementById('btn-fullscreen');
  if (btnFullscreen) {
    btnFullscreen.addEventListener('click', () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
      } else {
        document.exitFullscreen().catch(() => {});
      }
    });
  }

  const btnStartCourse = document.getElementById('btn-start-course');
  if (btnStartCourse) {
    btnStartCourse.addEventListener('click', () => updateSlideView(1));
  }

  if (btnLangToggle) {
    btnLangToggle.addEventListener('click', toggleLanguage);
  }

  if (btnThemeToggle) {
    btnThemeToggle.addEventListener('click', toggleTheme);
  }

  document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', closeAllModals);
  });

  document.querySelectorAll('.modal-backdrop').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeAllModals();
    });
  });

  setTheme(currentTheme);
  setLanguage(currentLang);

  const hash = window.location.hash;
  if (hash && hash.startsWith('#slide-')) {
    const slideNumber = parseInt(hash.replace('#slide-', ''), 10);
    if (!isNaN(slideNumber) && slideNumber >= 1 && slideNumber <= totalSlides) {
      updateSlideView(slideNumber - 1);
    } else {
      updateSlideView(0);
    }
  } else {
    updateSlideView(0);
  }
});
