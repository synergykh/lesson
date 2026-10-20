const totalSlides = 72;
let currentSlideIndex = 0;
let currentLang = localStorage.getItem("presentation_lang") || "en";
let currentTheme = localStorage.getItem("presentation_theme") || "dark";

const currentSlideLabel = document.getElementById("current-slide-num");
const totalSlidesLabel = document.getElementById("total-slides-num");
const progressFill = document.getElementById("progress-bar-fill");
const currentPartBadge = document.getElementById("current-part-badge");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");
const overviewModal = document.getElementById("overview-modal");
const shortcutsModal = document.getElementById("shortcuts-modal");
const searchModal = document.getElementById("search-modal");
const overviewGrid = document.getElementById("overview-grid");
const slideJumpSelect = document.getElementById("slide-jump-select");
const btnLangToggle = document.getElementById("btn-lang-toggle");
const btnThemeToggle = document.getElementById("btn-theme-toggle");
const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");

const searchData = [
  {
    id: 1,
    s: "01",
    cat: "INTRODUCTION",
    title: "Vercel & Web Deployment Masterclass",
    kw: "intro deployment vercel fullstack nextjs production cloud",
  },
  {
    id: 2,
    s: "01",
    cat: "INTRODUCTION",
    title: "What is Deployment?",
    kw: "localhost 3000 hosting server global internet production definition",
  },
  {
    id: 3,
    s: "01",
    cat: "INTRODUCTION",
    title: "The Production Deployment Pipeline",
    kw: "pipeline developer git github vercel build domain visitors workflow",
  },
  {
    id: 4,
    s: "01",
    cat: "INTRODUCTION",
    title: "Static Websites vs Fullstack Applications",
    kw: "static ssg ssr serverless api dynamic client server execution",
  },
  {
    id: 5,
    s: "02",
    cat: "ABOUT VERCEL",
    title: "What is Vercel?",
    kw: "platform nextjs cloud architecture edge network automated hosting",
  },
  {
    id: 6,
    s: "02",
    cat: "ABOUT VERCEL",
    title: "Core Platform Capabilities",
    kw: "features git edge preview serverless functions speed analytics",
  },
  {
    id: 7,
    s: "02",
    cat: "ABOUT VERCEL",
    title: "What Happens During a Vercel Build?",
    kw: "build container isolation dependencies bundle optimization cache",
  },
  {
    id: 8,
    s: "02",
    cat: "ABOUT VERCEL",
    title: "Supported Frameworks on Vercel",
    kw: "frameworks astro remix sveltekit vite static html react",
  },
  {
    id: 9,
    s: "03",
    cat: "ACCOUNT",
    title: "Creating Your Vercel Account",
    kw: "signup register vercel.com github authentication oauth login",
  },
  {
    id: 10,
    s: "03",
    cat: "ACCOUNT",
    title: "Personal Account vs Team Workspace",
    kw: "hobby pro team organization collaboration permissions pricing",
  },
  {
    id: 11,
    s: "03",
    cat: "ACCOUNT",
    title: "Navigating the Vercel Dashboard",
    kw: "dashboard ui projects deployments settings analytics monitoring",
  },
  {
    id: 12,
    s: "04",
    cat: "PROJECT PREP",
    title: "Preparing a Next.js Project for Deployment",
    kw: "package.json scripts pnpm build dependencies node version",
  },
  {
    id: 13,
    s: "04",
    cat: "PROJECT PREP",
    title: "Local Build Verification",
    kw: "test pnpm build errors typecheck linting validation locally",
  },
  {
    id: 14,
    s: "04",
    cat: "PROJECT PREP",
    title: "Environment Variables Audit",
    kw: ".env.local gitignore secrets private keys leak prevention",
  },
  {
    id: 15,
    s: "04",
    cat: "PROJECT PREP",
    title: "Git Repository Health Check",
    kw: "git status branch main clean tree uncommitted changes",
  },
  {
    id: 16,
    s: "05",
    cat: "GITHUB",
    title: "Creating a GitHub Repository",
    kw: "github new repo public private origin remote creation",
  },
  {
    id: 17,
    s: "05",
    cat: "GITHUB",
    title: "Pushing Code to GitHub",
    kw: "git add commit remote push -u origin main command",
  },
  {
    id: 18,
    s: "05",
    cat: "GITHUB",
    title: "Verifying Repository on GitHub",
    kw: "verify commits inspect files branches audit secrets security",
  },
  {
    id: 19,
    s: "06",
    cat: "IMPORTING",
    title: "Importing a Project into Vercel",
    kw: "import add new project connect repository authorize app",
  },
  {
    id: 20,
    s: "06",
    cat: "IMPORTING",
    title: "Framework Detection & Root Directory",
    kw: "preset detect monorepo root subdirectory path settings",
  },
  {
    id: 21,
    s: "06",
    cat: "IMPORTING",
    title: "Build and Output Settings",
    kw: "override build command output directory install command package",
  },
  {
    id: 22,
    s: "06",
    cat: "IMPORTING",
    title: "Configuring Initial Environment Variables",
    kw: "initial env vars secrets paste database url deploy button",
  },
  {
    id: 23,
    s: "07",
    cat: "FIRST DEPLOY",
    title: "The First Deployment Lifecycle",
    kw: "lifecycle triggering queue install build upload edge live",
  },
  {
    id: 24,
    s: "07",
    cat: "FIRST DEPLOY",
    title: "Inspecting Live Build Logs",
    kw: "logs streaming terminal progress inspect debugging stdout stderr",
  },
  {
    id: 25,
    s: "07",
    cat: "FIRST DEPLOY",
    title: "Deployment URLs & Production Aliases",
    kw: "vercel.app url hash canonical domain preview live link",
  },
  {
    id: 26,
    s: "07",
    cat: "FIRST DEPLOY",
    title: "Post-Deployment Verification",
    kw: "health check client hydration console network api 200 ok",
  },
  {
    id: 27,
    s: "08",
    cat: "PREVIEW VS PROD",
    title: "Preview Deployments vs Production",
    kw: "preview staging isolation production difference release compare",
  },
  {
    id: 28,
    s: "08",
    cat: "PREVIEW VS PROD",
    title: "Git Branching Workflow for Vercel",
    kw: "gitflow feature branches pull requests main trunk staging",
  },
  {
    id: 29,
    s: "08",
    cat: "PREVIEW VS PROD",
    title: "Pull Request Previews & Team Feedback",
    kw: "pr bot comments visual feedback review url team testing",
  },
  {
    id: 30,
    s: "08",
    cat: "PREVIEW VS PROD",
    title: "Promoting Previews to Production",
    kw: "promote instant alias swap zero downtime instant cutover",
  },
  {
    id: 31,
    s: "09",
    cat: "AUTOMATION",
    title: "Automatic Deployments via Git Push",
    kw: "git push webhook automation trigger continuous delivery cd",
  },
  {
    id: 32,
    s: "09",
    cat: "AUTOMATION",
    title: "GitHub Commit Status Checks",
    kw: "github status checks green checkmark pr merge block",
  },
  {
    id: 33,
    s: "09",
    cat: "AUTOMATION",
    title: "Deploy Hooks for External Triggers",
    kw: "deploy hooks cms headless webhook trigger revalidate build",
  },
  {
    id: 34,
    s: "10",
    cat: "ENV VARIABLES",
    title: "Environment Variables Mental Model",
    kw: "env vars 12-factor config secrets 12 factor app",
  },
  {
    id: 35,
    s: "10",
    cat: "ENV VARIABLES",
    title: "Environment Scope: Dev, Preview, Production",
    kw: "scope environments separate databases isolation staging keys",
  },
  {
    id: 36,
    s: "10",
    cat: "ENV VARIABLES",
    title: "The NEXT_PUBLIC_* Security Boundary",
    kw: "next_public client server leak boundary expose credentials",
  },
  {
    id: 37,
    s: "10",
    cat: "ENV VARIABLES",
    title: "Managing Variables in Vercel Dashboard",
    kw: "dashboard add edit secret mask bulk raw editor copy",
  },
  {
    id: 38,
    s: "10",
    cat: "ENV VARIABLES",
    title: "The Redeployment Requirement",
    kw: "redeploy bake build time compile new deployment fresh build",
  },
  {
    id: 39,
    s: "11",
    cat: "NEXT.JS ON VERCEL",
    title: "Next.js App Router on Vercel",
    kw: "app router rsc server components edge nodejs runtime",
  },
  {
    id: 40,
    s: "11",
    cat: "NEXT.JS ON VERCEL",
    title: "Static vs Dynamic Rendering Modes",
    kw: "static dynamic ssg ssr force-dynamic revalidate cache",
  },
  {
    id: 41,
    s: "11",
    cat: "NEXT.JS ON VERCEL",
    title: "Server Actions & Route Handlers",
    kw: "server actions route handlers api mutation post endpoints",
  },
  {
    id: 42,
    s: "11",
    cat: "NEXT.JS ON VERCEL",
    title: "Image Optimization & Global Edge",
    kw: "next/image webp avif resize global cdn edge caching",
  },
  {
    id: 43,
    s: "12",
    cat: "NEON POSTGRESQL",
    title: "Fullstack Architecture: Vercel + Neon",
    kw: "neon postgresql database serverless fullstack connection",
  },
  {
    id: 44,
    s: "12",
    cat: "NEON POSTGRESQL",
    title: "Obtaining Neon Connection Strings",
    kw: "connection string pooled direct sslmode=require uri port 5432",
  },
  {
    id: 45,
    s: "12",
    cat: "NEON POSTGRESQL",
    title: "Configuring DATABASE_URL in Vercel",
    kw: "database_url env setting preview prod branching neon",
  },
  {
    id: 46,
    s: "12",
    cat: "NEON POSTGRESQL",
    title: "Database Migration Strategy",
    kw: "migrations prisma drizzle db push safety data backup",
  },
  {
    id: 47,
    s: "13",
    cat: "CUSTOM DOMAIN",
    title: "Custom Domain Mental Model",
    kw: "domains apex root subdomains dns registrar nameservers",
  },
  {
    id: 48,
    s: "13",
    cat: "CUSTOM DOMAIN",
    title: "DNS Record Types: A vs CNAME",
    kw: "dns records a record 76.76.21.21 cname cname.vercel-dns.com",
  },
  {
    id: 49,
    s: "13",
    cat: "CUSTOM DOMAIN",
    title: "Step-by-Step Registrar Configuration",
    kw: "namecheap cloudflare godaddy hostinger dns zone editor",
  },
  {
    id: 50,
    s: "13",
    cat: "CUSTOM DOMAIN",
    title: "Preserving Email DNS Records",
    kw: "email mx spf dkim dmarc record protection do not break",
  },
  {
    id: 51,
    s: "13",
    cat: "CUSTOM DOMAIN",
    title: "DNS Propagation & Automatic SSL",
    kw: "propagation 24h ssl tls certificate let's encrypt auto",
  },
  {
    id: 52,
    s: "14",
    cat: "HTTPS & SECURITY",
    title: "HTTPS & Transport Security",
    kw: "https tls hsts headers encryption ssl redirect port 443",
  },
  {
    id: 53,
    s: "14",
    cat: "HTTPS & SECURITY",
    title: "Application Hardening on Vercel",
    kw: "security csp rate limiting headers attack firewall ddos",
  },
  {
    id: 54,
    s: "14",
    cat: "HTTPS & SECURITY",
    title: "Secret Auditing & Remediation",
    kw: "leaked secrets git-secrets bfg rotation invalidation emergency",
  },
  {
    id: 55,
    s: "15",
    cat: "DEPLOYMENTS & ROLLBACK",
    title: "Immutable Deployments",
    kw: "immutable permanent hash versioning artifact state history",
  },
  {
    id: 56,
    s: "15",
    cat: "DEPLOYMENTS & ROLLBACK",
    title: "Instant Rollback Workflow",
    kw: "rollback emergency restore previous version instant traffic",
  },
  {
    id: 57,
    s: "15",
    cat: "DEPLOYMENTS & ROLLBACK",
    title: "The Code vs Database Rollback Discrepancy",
    kw: "database migration rollback trap schema incompatibility",
  },
  {
    id: 58,
    s: "16",
    cat: "TROUBLESHOOTING",
    title: "Build Logs vs Runtime Logs",
    kw: "compile errors runtime exceptions 500 serverless log stream",
  },
  {
    id: 59,
    s: "16",
    cat: "TROUBLESHOOTING",
    title: "Diagnosing Common Build Failures",
    kw: "build failed exit 1 typescript error missing dependency",
  },
  {
    id: 60,
    s: "16",
    cat: "TROUBLESHOOTING",
    title: "Diagnosing Runtime 500 Errors",
    kw: "500 internal server timeout function crash db connection",
  },
  {
    id: 61,
    s: "16",
    cat: "TROUBLESHOOTING",
    title: "The 5-Step Systematic Debugging Flow",
    kw: "debugging workflow reproduce isolate patch verify test",
  },
  {
    id: 62,
    s: "17",
    cat: "PERFORMANCE",
    title: "Build Performance & Turbopack",
    kw: "turbopack build cache speed bundle size reduction optimize",
  },
  {
    id: 63,
    s: "17",
    cat: "PERFORMANCE",
    title: "Serverless Optimization & Connection Pooling",
    kw: "connection pool cold start serverless driver latency",
  },
  {
    id: 64,
    s: "18",
    cat: "PLANS & COSTS",
    title: "Vercel Plan Limits & Cost Management",
    kw: "hobby pro limits bandwidth function execution spending alert",
  },
  {
    id: 65,
    s: "19",
    cat: "GUIDED PROJECT",
    title: "Guided Project: TaskFlow Architecture",
    kw: "taskflow architecture nextjs postgres neon vercel demo",
  },
  {
    id: 66,
    s: "19",
    cat: "GUIDED PROJECT",
    title: "Interactive Deployment Simulator",
    kw: "simulator interactive demo pipeline test deploy virtual",
  },
  {
    id: 67,
    s: "19",
    cat: "GUIDED PROJECT",
    title: "Interactive Domain & DNS Simulator",
    kw: "domain simulator dns sandbox apex cname test",
  },
  {
    id: 68,
    s: "20",
    cat: "CHECKLIST",
    title: "Interactive Production Checklist",
    kw: "checklist interactive localstorage audit verification pre-launch",
  },
  {
    id: 69,
    s: "21",
    cat: "MISTAKES",
    title: "Top 10 Costly Deployment Mistakes",
    kw: "mistakes errors wrong branch exposed secrets broken dns",
  },
  {
    id: 70,
    s: "21",
    cat: "MISTAKES",
    title: "Production Verification & Health Checks",
    kw: "health check smoke test e2e authentication database verification",
  },
  {
    id: 71,
    s: "22",
    cat: "CHEAT SHEET",
    title: "Vercel Deployment Cheat Sheet",
    kw: "cheat sheet reference commands dns records env vars cli",
  },
  {
    id: 72,
    s: "22",
    cat: "SUMMARY",
    title: "Course Summary & Master Architecture",
    kw: "summary congratulations masterclass complete review next steps",
  },
];

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("presentation_lang", lang);
  document.documentElement.setAttribute("lang", lang);

  if (lang === "km") {
    document.body.classList.add("lang-km");
  } else {
    document.body.classList.remove("lang-km");
  }

  const langFlagEn = document.querySelectorAll(".lang-flag-en");
  const langFlagKm = document.querySelectorAll(".lang-flag-km");
  if (lang === "km") {
    langFlagEn.forEach((el) => (el.style.display = "none"));
    langFlagKm.forEach((el) => (el.style.display = "block"));
  } else {
    langFlagEn.forEach((el) => (el.style.display = "block"));
    langFlagKm.forEach((el) => (el.style.display = "none"));
  }

  const dict = vercelTranslations[lang] || vercelTranslations.en;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  const currentSlide = document.getElementById(
    `slide-${currentSlideIndex + 1}`,
  );
  if (currentSlide && currentPartBadge) {
    const partKey = currentSlide.getAttribute("data-part-key");
    if (partKey && dict[partKey]) {
      currentPartBadge.textContent = dict[partKey];
    } else {
      currentPartBadge.textContent =
        currentSlide.getAttribute("data-part") || "MODULE 06";
    }
  }

  updateSearchPlaceholder();
}

function updateSearchPlaceholder() {
  if (searchInput) {
    searchInput.placeholder =
      currentLang === "km"
        ? "ស្វែងរកមេរៀន ពាក្យបញ្ជា ឬប្រធានបទ (Ctrl + K)..."
        : "Search deployment concepts, commands, topics (Ctrl + K)...";
  }
}

function setTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("presentation_theme", theme);

  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  const sunIcons = document.querySelectorAll("#theme-icon-sun");
  const moonIcons = document.querySelectorAll("#theme-icon-moon");
  if (theme === "light") {
    sunIcons.forEach((el) => {
      el.style.display = "block";
    });
    moonIcons.forEach((el) => {
      el.style.display = "none";
    });
  } else {
    sunIcons.forEach((el) => {
      el.style.display = "none";
    });
    moonIcons.forEach((el) => {
      el.style.display = "block";
    });
  }

  const themeToggleBtns = document.querySelectorAll("#btn-theme-toggle");
  themeToggleBtns.forEach((btn) => {
    btn.setAttribute(
      "title",
      theme === "dark"
        ? "Toggle Light / Dark Mode (T)"
        : "Toggle Light / Dark Mode (T)",
    );
    btn.setAttribute(
      "aria-label",
      theme === "dark" ? "Theme: Dark" : "Theme: Light",
    );
  });
}

let lastThemeToggle = 0;
function toggleTheme() {
  const now = Date.now();
  if (now - lastThemeToggle < 150) return;
  lastThemeToggle = now;
  setTheme(currentTheme === "dark" ? "light" : "dark");
}

window.setTheme = setTheme;
window.toggleTheme = toggleTheme;

let lastLangToggle = 0;
function toggleLanguage() {
  const now = Date.now();
  if (now - lastLangToggle < 150) return;
  lastLangToggle = now;
  setLanguage(currentLang === "en" ? "km" : "en");
}

window.setLanguage = setLanguage;
window.toggleLanguage = toggleLanguage;

function updateSlideView(index, smooth = false) {
  if (index < 0) index = 0;
  if (index >= totalSlides) index = totalSlides - 1;

  currentSlideIndex = index;
  const slideNum = index + 1;

  document.querySelectorAll(".slide-item").forEach((el) => {
    el.classList.remove("active");
  });

  const activeSlide = document.getElementById(`slide-${slideNum}`);
  if (activeSlide) {
    activeSlide.classList.add("active");

    const partKey = activeSlide.getAttribute("data-part-key");
    const dict = vercelTranslations[currentLang] || vercelTranslations.en;
    if (currentPartBadge) {
      if (partKey && dict[partKey]) {
        currentPartBadge.textContent = dict[partKey];
      } else {
        currentPartBadge.textContent =
          activeSlide.getAttribute("data-part") || "MODULE 06";
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

  document.querySelectorAll(".overview-card").forEach((card, idx) => {
    if (idx === index) {
      card.classList.add("current");
    } else {
      card.classList.remove("current");
    }
  });

  history.replaceState(null, "", `#slide-${slideNum}`);
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
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  }
}

function closeModal(modal) {
  if (modal) {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  }
}

function closeAllModals() {
  document.querySelectorAll(".modal-backdrop").forEach((modal) => {
    modal.classList.remove("open");
  });
  document.body.style.overflow = "";
}

function populateJumpSelect() {
  if (!slideJumpSelect) return;
  slideJumpSelect.innerHTML = "";
  for (let i = 0; i < totalSlides; i++) {
    const opt = document.createElement("option");
    opt.value = i;
    const num = String(i + 1).padStart(2, "0");
    const item = searchData[i];
    opt.textContent = `${num}. ${item ? item.title : `Slide ${num}`}`;
    slideJumpSelect.appendChild(opt);
  }

  slideJumpSelect.addEventListener("change", (e) => {
    updateSlideView(parseInt(e.target.value, 10));
  });
}

function populateOverviewGrid() {
  if (!overviewGrid) return;
  overviewGrid.innerHTML = "";

  searchData.forEach((item, idx) => {
    const card = document.createElement("div");
    card.className = `overview-card ${idx === currentSlideIndex ? "current" : ""}`;

    const numSpan = document.createElement("span");
    numSpan.className = "overview-card-num";
    numSpan.textContent = `SLIDE ${String(idx + 1).padStart(2, "0")}`;

    const titleSpan = document.createElement("span");
    titleSpan.className = "overview-card-title";
    titleSpan.textContent = item.title;

    card.appendChild(numSpan);
    card.appendChild(titleSpan);

    card.addEventListener("click", () => {
      updateSlideView(idx);
      closeModal(overviewModal);
    });

    overviewGrid.appendChild(card);
  });
}

function setupSearch() {
  if (!searchInput || !searchResults) return;

  function renderSearchResults(query) {
    searchResults.innerHTML = "";
    const q = query.trim().toLowerCase();

    if (!q) {
      searchResults.innerHTML =
        '<div style="padding:16px;text-align:center;color:var(--text-muted);font-size:13px;">Type to search all 72 deployment slides by title, commands, or concepts.</div>';
      return;
    }

    const matches = searchData.filter((item) => {
      const titleMatch = item.title.toLowerCase().includes(q);
      const catMatch = item.cat.toLowerCase().includes(q);
      const kwMatch = item.kw.toLowerCase().includes(q);
      return titleMatch || catMatch || kwMatch;
    });

    if (matches.length === 0) {
      searchResults.innerHTML =
        '<div style="padding:16px;text-align:center;color:var(--text-muted);font-size:13px;">No matching slides found. Try searching: build, env, domain, neon, rollback, nextjs</div>';
      return;
    }

    matches.forEach((item) => {
      const resItem = document.createElement("div");
      resItem.className = "overview-card";
      resItem.style.marginBottom = "8px";
      resItem.innerHTML = `
        <div style="display:flex;align-items:center;justify-content:space-between;">
          <span class="overview-card-num">SLIDE ${String(item.id).padStart(2, "0")} • ${item.cat}</span>
          <span style="font-size:11px;font-family:var(--);color:var(--accent-blue);">Jump →</span>
        </div>
        <div class="overview-card-title" style="margin-top:4px;">${item.title}</div>
      `;
      resItem.addEventListener("click", () => {
        updateSlideView(item.id - 1);
        closeModal(searchModal);
      });
      searchResults.appendChild(resItem);
    });
  }

  searchInput.addEventListener("input", (e) => {
    renderSearchResults(e.target.value);
  });
}

function initChecklist() {
  const checklistStorageKey = "vercel_prod_checklist_v1";
  let savedState = {};
  try {
    savedState = JSON.parse(localStorage.getItem(checklistStorageKey)) || {};
  } catch (e) {
    savedState = {};
  }

  const checkboxes = document.querySelectorAll(".checklist-checkbox");
  const countLabel = document.getElementById("checklist-count");
  const progressBar = document.getElementById("checklist-progress-bar");
  const resetBtn = document.getElementById("btn-reset-checklist");

  function updateChecklistProgress() {
    let checkedCount = 0;
    checkboxes.forEach((cb) => {
      const key = cb.getAttribute("data-check-key");
      if (savedState[key]) {
        cb.checked = true;
        checkedCount++;
      } else {
        cb.checked = false;
      }
    });

    if (countLabel) {
      countLabel.textContent = `${checkedCount} / ${checkboxes.length} Checked`;
    }
    if (progressBar) {
      const pct = Math.round((checkedCount / (checkboxes.length || 1)) * 100);
      progressBar.style.width = `${pct}%`;
    }
  }

  checkboxes.forEach((cb) => {
    cb.addEventListener("change", (e) => {
      const key = cb.getAttribute("data-check-key");
      savedState[key] = cb.checked;
      localStorage.setItem(checklistStorageKey, JSON.stringify(savedState));
      updateChecklistProgress();
    });
  });

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      savedState = {};
      localStorage.removeItem(checklistStorageKey);
      updateChecklistProgress();
    });
  }

  updateChecklistProgress();
}

function initDeploymentSimulator() {
  const stageBtns = document.querySelectorAll(".sim-stage-btn");
  const logTerminal = document.getElementById("sim-terminal-body");
  const simStatus = document.getElementById("sim-status-indicator");
  const simFailToggle = document.getElementById("sim-fail-toggle");

  const stageData = {
    connect: {
      status: "CONNECTED",
      color: "var(--accent-green)",
      logs: `[1/6] Connecting to GitHub Repository...
Authorized GitHub App: Vercel Production Runner
Target Repository: github.com/acme/taskflow (Private)
Default Production Branch: main
Commit: 8f2a1b9 ("feat: complete task CRUD with Neon database")
Repository webhook registered: push, pull_request`,
    },
    configure: {
      status: "CONFIGURED",
      color: "var(--accent-blue)",
      logs: `[2/6] Inspecting Project Settings...
Framework Preset detected: Next.js (App Router v15.x)
Root Directory: ./ (Root)
Build Command: next build (Default)
Output Directory: .next (Managed Edge Cache)
Node.js Version: 20.x LTS`,
    },
    env: {
      status: "ENV READY",
      color: "var(--accent-indigo)",
      logs: `[3/6] Loading Environment Variables (Production Scope)...
Loaded: DATABASE_URL = postgresql://neondb_owner:***@ep-mute-wave-123456.us-east-2.aws.neon.tech/neondb?sslmode=require
Loaded: NEXT_PUBLIC_APP_NAME = "TaskFlow Production"
Loaded: AUTH_SECRET = ******************************** (32-byte secret)
Zero client leaks detected: 1 public, 2 server-only variables.`,
    },
    build: {
      status: "BUILDING",
      color: "var(--accent-amber)",
      logs: `[4/6] Running Containerized Build...
$ pnpm install --frozen-lockfile
Dependencies resolved in 2.1s (using Vercel package cache)
$ next build
▲ Next.js 15.0.0
- Environments: .env.production
- Compiling / ...
- Generating static pages (6/6)
- Generating route handlers (3/3)
✓ Compiled successfully in 8.4s
Route (app)                              Size     First Load JS
┌ ○ /                                    5.2 kB         88.4 kB
├ ○ /dashboard                           8.1 kB         91.3 kB
└ ƒ /api/tasks                           142 B          83.3 kB
+ First Load JS shared by all            83.2 kB`,
    },
    deploy: {
      status: "DEPLOYED",
      color: "var(--accent-green)",
      logs: `[5/6] Uploading Serverless & Edge Artifacts...
Uploaded 14 Serverless Functions to AWS us-east-1 & eu-central-1
Uploaded static assets to 300+ Edge Network Point of Presence (PoP)
Created Immutable Deployment: dpl_8f2a1b9c4e3d2a1
Canonical Production Alias assigned: taskflow-prod.vercel.app`,
    },
    verify: {
      status: "VERIFIED",
      color: "var(--accent-emerald)",
      logs: `[6/6] Automated Edge Health Verification...
GET https://taskflow-prod.vercel.app/ -> HTTP 200 OK (38ms)
GET https://taskflow-prod.vercel.app/api/tasks -> HTTP 200 OK (Neon Pooled Query: 44ms)
SSL Certificate: Valid Let's Encrypt TLS 1.3 (Auto-Renewing)
Security Headers: HSTS Enabled, X-Content-Type-Options: nosniff
Ready for production traffic! 🚀`,
    },
  };

  const failureLog = `[4/6] Running Containerized Build...
$ next build
▲ Next.js 15.0.0
Type error: Type 'string | undefined' is not assignable to type 'string'.
  Type 'undefined' is not assignable to type 'string'.
  > 14 | const dbUrl: string = process.env.DATABASE_URL;
       |       ^^^^^
Error: Command "next build" exited with 1
Deployment failed! Read build logs above to fix the type assertion.`;

  function runStage(stageKey) {
    stageBtns.forEach((btn) => {
      if (btn.getAttribute("data-stage") === stageKey) {
        btn.classList.add("btn-primary-action");
      } else {
        btn.classList.remove("btn-primary-action");
      }
    });

    if (simFailToggle && simFailToggle.checked && stageKey === "build") {
      if (simStatus) {
        simStatus.textContent = "FAILED (Exit 1)";
        simStatus.style.color = "var(--accent-red)";
      }
      if (logTerminal) {
        logTerminal.textContent = failureLog;
      }
      return;
    }

    const data = stageData[stageKey] || stageData.connect;
    if (simStatus) {
      simStatus.textContent = data.status;
      simStatus.style.color = data.color;
    }
    if (logTerminal) {
      logTerminal.textContent = data.logs;
    }
  }

  stageBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      runStage(btn.getAttribute("data-stage"));
    });
  });

  if (simFailToggle) {
    simFailToggle.addEventListener("change", () => {
      const activeBtn = document.querySelector(
        ".sim-stage-btn.btn-primary-action",
      );
      if (activeBtn) runStage(activeBtn.getAttribute("data-stage"));
    });
  }

  runStage("connect");
}

function initDnsSimulator() {
  const domainInput = document.getElementById("dns-domain-input");
  const recordTypeSelect = document.getElementById("dns-record-type");
  const valType = document.getElementById("dns-val-type");
  const valName = document.getElementById("dns-val-name");
  const valTarget = document.getElementById("dns-val-target");
  const valStatus = document.getElementById("dns-val-status");
  const btnVerify = document.getElementById("btn-verify-dns");
  const verifyResult = document.getElementById("dns-verify-result");

  function updateDnsPreview() {
    const domain =
      (domainInput && domainInput.value.trim()) || "taskflow-app.com";
    const type = (recordTypeSelect && recordTypeSelect.value) || "apex";

    if (type === "apex") {
      if (valType) valType.textContent = "A";
      if (valName) valName.textContent = "@";
      if (valTarget) valTarget.textContent = "76.76.21.21";
    } else {
      if (valType) valType.textContent = "CNAME";
      if (valName) valName.textContent = "app";
      if (valTarget) valTarget.textContent = "cname.vercel-dns.com";
    }

    if (valStatus) {
      valStatus.textContent = "Configured (Awaiting verification)";
      valStatus.style.color = "var(--accent-amber)";
    }
  }

  if (domainInput) domainInput.addEventListener("input", updateDnsPreview);
  if (recordTypeSelect)
    recordTypeSelect.addEventListener("change", updateDnsPreview);

  if (btnVerify) {
    btnVerify.addEventListener("click", () => {
      if (verifyResult) {
        verifyResult.textContent = "Checking DNS propagation worldwide...";
        verifyResult.style.color = "var(--accent-blue)";
      }
      setTimeout(() => {
        if (verifyResult) {
          verifyResult.textContent =
            "✓ DNS Verified! Let's Encrypt TLS Certificate issued (HTTPS Active)";
          verifyResult.style.color = "var(--accent-green)";
        }
        if (valStatus) {
          valStatus.textContent = "Valid & Secure (Active)";
          valStatus.style.color = "var(--accent-green)";
        }
      }, 700);
    });
  }

  updateDnsPreview();
}

function setupCopyButtons() {
  document.querySelectorAll(".btn-copy").forEach((btn) => {
    btn.addEventListener("click", () => {
      const codeEl = btn
        .closest(".terminal-window, .code-block-wrapper, .info-card")
        ?.querySelector(".term-cmd, code, pre");
      const textToCopy = codeEl
        ? codeEl.textContent
        : btn.getAttribute("data-copy");
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          const originalText = btn.textContent;
          btn.textContent = "Copied!";
          setTimeout(() => {
            btn.textContent = originalText;
          }, 1800);
        });
      }
    });
  });
}

document.addEventListener("keydown", (e) => {
  if (
    e.target.tagName === "INPUT" ||
    e.target.tagName === "TEXTAREA" ||
    e.target.tagName === "SELECT"
  ) {
    if (e.key === "Escape") {
      closeAllModals();
      e.target.blur();
    }
    return;
  }

  if ((e.ctrlKey || e.metaKey) && (e.key === "k" || e.key === "K")) {
    e.preventDefault();
    if (searchModal) {
      if (searchModal.classList.contains("open")) {
        closeModal(searchModal);
      } else {
        openModal(searchModal);
        setTimeout(() => searchInput?.focus(), 100);
      }
    }
    return;
  }

  switch (e.key) {
    case "ArrowRight":
    case "Space":
    case "l":
    case "L":
      e.preventDefault();
      nextSlide();
      break;

    case "ArrowLeft":
    case "Backspace":
    case "h":
    case "H":
      e.preventDefault();
      prevSlide();
      break;

    case "Home":
      e.preventDefault();
      updateSlideView(0);
      break;

    case "End":
      e.preventDefault();
      updateSlideView(totalSlides - 1);
      break;

    case "o":
    case "O":
    case "g":
    case "G":
      e.preventDefault();
      if (overviewModal) {
        overviewModal.classList.contains("open")
          ? closeModal(overviewModal)
          : openModal(overviewModal);
      }
      break;

    case "?":
      e.preventDefault();
      if (shortcutsModal) {
        shortcutsModal.classList.contains("open")
          ? closeModal(shortcutsModal)
          : openModal(shortcutsModal);
      }
      break;

    case "t":
    case "T":
      e.preventDefault();
      toggleTheme();
      break;

    case "l":
    case "L":
      e.preventDefault();
      toggleLanguage();
      break;

    case "f":
    case "F":
      e.preventDefault();
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
      } else {
        document.exitFullscreen().catch(() => {});
      }
      break;

    case "Escape":
      closeAllModals();
      break;
  }
});

function initVercelApp() {
  if (btnPrev) btnPrev.addEventListener("click", prevSlide);
  if (btnNext) btnNext.addEventListener("click", nextSlide);

  const btnStartCourse = document.getElementById("btn-start-course");
  if (btnStartCourse) {
    btnStartCourse.addEventListener("click", () => updateSlideView(1));
  }

  const langToggleBtns = document.querySelectorAll("#btn-lang-toggle");
  langToggleBtns.forEach((btn) => {
    btn.onclick = (e) => {
      if (e) e.preventDefault();
      toggleLanguage();
    };
  });

  const themeToggleBtns = document.querySelectorAll("#btn-theme-toggle");
  themeToggleBtns.forEach((btn) => {
    btn.onclick = (e) => {
      if (e) e.preventDefault();
      toggleTheme();
    };
  });

  const btnOverview = document.getElementById("btn-overview");
  if (btnOverview) {
    btnOverview.addEventListener("click", () => openModal(overviewModal));
  }

  const btnShortcuts = document.getElementById("btn-shortcuts");
  if (btnShortcuts) {
    btnShortcuts.addEventListener("click", () => openModal(shortcutsModal));
  }

  const btnFullscreen = document.getElementById("btn-fullscreen");
  if (btnFullscreen) {
    btnFullscreen.addEventListener("click", () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
      } else {
        document.exitFullscreen().catch(() => {});
      }
    });
  }

  document.querySelectorAll(".modal-close").forEach((btn) => {
    btn.addEventListener("click", () => {
      closeModal(btn.closest(".modal-backdrop"));
    });
  });

  document.querySelectorAll(".modal-backdrop").forEach((backdrop) => {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) closeModal(backdrop);
    });
  });

  populateJumpSelect();
  populateOverviewGrid();
  setupSearch();
  setupCopyButtons();
  initChecklist();
  initDeploymentSimulator();
  initDnsSimulator();

  setTheme(currentTheme);
  setLanguage(currentLang);

  const hash = window.location.hash;
  if (hash && hash.startsWith("#slide-")) {
    const slideNumber = parseInt(hash.replace("#slide-", ""), 10);
    if (!isNaN(slideNumber) && slideNumber >= 1 && slideNumber <= totalSlides) {
      updateSlideView(slideNumber - 1, false);
    } else {
      updateSlideView(0, false);
    }
  } else {
    updateSlideView(0, false);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initVercelApp);
} else {
  initVercelApp();
}
