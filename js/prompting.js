const totalSlides = 75;
let currentSlideIndex = 0;
let currentLang = localStorage.getItem('prompting_pres_lang') || 'en';
let currentTheme = localStorage.getItem('prompting_pres_theme') || 'dark';

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
  { id: 1, cat: "SECTION 01", title: "What AI Is and How Language Models Work", kw: "llm tokens probability prediction text completion proposal" },
  { id: 2, cat: "SECTION 01", title: "Hallucinations & Failure Modes", kw: "hallucination false libraries invented syntax verification" },
  { id: 3, cat: "SECTION 01", title: "The Verification Protocol", kw: "human in the loop tests compiler linters logs evidence" },
  { id: 4, cat: "SECTION 02", title: "Vague Requests vs. Precise Specifications", kw: "weak prompt strong prompt make me a website requirements" },
  { id: 5, cat: "SECTION 02", title: "Weak vs. Strong Prompt Comparison", kw: "task management dashboard nextjs typescript neon postgres" },
  { id: 6, cat: "SECTION 02", title: "The Prompt Economy", kw: "token budgets signal to noise ratio conciseness hygiene" },
  { id: 7, cat: "SECTION 03", title: "The 7-Pillar Universal Prompt Formula", kw: "role goal context requirements constraints output verification" },
  { id: 8, cat: "SECTION 03", title: "Constraints, Output & Verification", kw: "boundaries negative constraints diff json checklist proof" },
  { id: 9, cat: "SECTION 03", title: "Formula in Action: Fullstack Optimization", kw: "dba slow queries neon nextjs explain analyze sql migration" },
  { id: 10, cat: "SECTION 04", title: "Context Density & Attention Allocation", kw: "context window token dilution attention economy relevance" },
  { id: 11, cat: "SECTION 04", title: "Context Pyramid: What to Include", kw: "tier tech stack schemas route handlers raw logs status codes" },
  { id: 12, cat: "SECTION 04", title: "The Minimal Sufficient Context Rule", kw: "avoid premature bloat ground truth stack traces" },
  { id: 13, cat: "SECTION 05", title: "Role Priming: Framing Perspectives", kw: "persona vocabulary standards edge case vigilance tone" },
  { id: 14, cat: "SECTION 05", title: "The Expert Personas Catalog", kw: "security auditor infrastructure dba frontend architect" },
  { id: 15, cat: "SECTION 05", title: "Role-Playing Does Not Guarantee Accuracy", kw: "confidence illusion cryptography boundaries acceptance tests" },
  { id: 16, cat: "SECTION 06", title: "Requirements vs. Constraints", kw: "functional requirements protective constraints what not to do" },
  { id: 17, cat: "SECTION 06", title: "Guardrails for Legacy & Production Systems", kw: "non destructive surgical edits backward compatibility" },
  { id: 18, cat: "SECTION 06", title: "Writing Strict Acceptance Criteria", kw: "definition of done pass fail self review trade offs" },
  { id: 19, cat: "SECTION 07", title: "Investigation First, Implementation Second", kw: "premature coding trap read only inspection mandate" },
  { id: 20, cat: "SECTION 07", title: "The 8-Point Codebase Inspection Prompt", kw: "architecture data flow dependencies risks verification" },
  { id: 21, cat: "SECTION 07", title: "Distinguishing Facts from Assumptions", kw: "file path line numbers citations unknowns missing context" },
  { id: 22, cat: "SECTION 07", title: "The Professional Engineering Workflow", kw: "understand inspect analyze plan implement verify 7 step" },
  { id: 23, cat: "SECTION 08", title: "Deconstructing Problems Methodically", kw: "symptom root cause dashboard slow 9 diagnostic questions" },
  { id: 24, cat: "SECTION 08", title: "The Scientific Method in Software", kw: "falsifiable hypothesis experiment verification smallest step" },
  { id: 25, cat: "SECTION 08", title: "Case Study: The Slow Dashboard", kw: "explain analyze missing index foreign key join latency drop" },
  { id: 26, cat: "SECTION 09", title: "Core Mental Models for Programmers", kw: "first principles deductive reasoning boundaries logic" },
  { id: 27, cat: "SECTION 09", title: "Case Analysis: 'Login Fails'", kw: "credentials pool exhausted jwt cors status codes binary search" },
  { id: 28, cat: "SECTION 09", title: "Cognitive Biases When Using AI", kw: "automation bias anchoring confirmation bias critical skepticism" },
  { id: 29, cat: "SECTION 10", title: "The Art of Task Decomposition", kw: "atomic chunks monolithic prompt break down 10 minutes" },
  { id: 30, cat: "SECTION 10", title: "Deconstruction Case: Enterprise POS System", kw: "pos retail dependencies inventory auth rbac checkout" },
  { id: 31, cat: "SECTION 10", title: "Sub-Task Prompting Workflow", kw: "contract first typescript schemas server crud ui tests" },
  { id: 32, cat: "SECTION 11", title: "Generating Incremental Implementation Plans", kw: "plan first protocol written approval architectural review" },
  { id: 33, cat: "SECTION 11", title: "Anatomy of an Actionable Plan", kw: "atomic steps rollback readiness migrations testing commands" },
  { id: 34, cat: "SECTION 11", title: "When to Plan vs. When to Code Directly", kw: "auth payments schemas migrations utility tweaks css" },
  { id: 35, cat: "SECTION 12", title: "Precision Code Generation", kw: "conventions typescript early returns zod validation" },
  { id: 36, cat: "SECTION 12", title: "Preventing Anti-Patterns & Bloat", kw: "no phantom packages no obvious comments clean code" },
  { id: 37, cat: "SECTION 12", title: "Complete Working Code Requirement", kw: "ban todo ban placeholders loading skeletons empty states" },
  { id: 38, cat: "SECTION 13", title: "UI Reproduction vs. Arbitrary Redesign", kw: "design system dark tokens zero border radius font scales" },
  { id: 39, cat: "SECTION 13", title: "Component-Driven Prompting", kw: "accessibility aria responsive 375px 768px 1280px matrix" },
  { id: 40, cat: "SECTION 13", title: "The 4 Levels of UI Requests", kw: "inspiration clone polish redesign visual drift" },
  { id: 41, cat: "SECTION 14", title: "Structured Debugging Protocols", kw: "expected actual full stack trace reproduction steps" },
  { id: 42, cat: "SECTION 14", title: "The 8-Step Debugging Cycle", kw: "observe reproduce hypothesize fix regression test" },
  { id: 43, cat: "SECTION 14", title: "Investigating Ephemeral & Race Condition Bugs", kw: "async timing deadlocks closures local vs cloud runtime" },
  { id: 44, cat: "SECTION 15", title: "Evidence-Based Security Reviews", kw: "read only audit owasp injection auth bypass sanitization" },
  { id: 45, cat: "SECTION 15", title: "Standard Security Finding Format", kw: "severity file line attack scenario remediation patch" },
  { id: 46, cat: "SECTION 15", title: "Multi-Tenant & Secret Isolation", kw: "idor tenant isolation database secrets leak prevention" },
  { id: 47, cat: "SECTION 16", title: "The Production Code Reviewer Persona", kw: "correctness safety performance maintainability diffs" },
  { id: 48, cat: "SECTION 16", title: "Reviewing Diffs Effectively", kw: "git diff uncommitted changes scope verification regressions" },
  { id: 49, cat: "SECTION 16", title: "Code Review vs. Code Rewriting", kw: "respect author architecture constructive code remediation" },
  { id: 50, cat: "SECTION 17", title: "Database Migrations & Data Safety", kw: "schema table locks downtime down migration rollback" },
  { id: 51, cat: "SECTION 17", title: "PostgreSQL & Neon Specific Considerations", kw: "connection pooling pgbouncer serverless branch sandbox" },
  { id: 52, cat: "SECTION 17", title: "Data Loss Prevention Checklist", kw: "drop truncate alter type expand contract verification queries" },
  { id: 53, cat: "SECTION 18", title: "From Chatbots to Autonomous Coding Agents", kw: "chat inline copilot repository agent tool access bash" },
  { id: 54, cat: "SECTION 18", title: "Agent Capabilities & Permission Boundaries", kw: "read write execute permissions tools safety guardrails" },
  { id: 55, cat: "SECTION 18", title: "Guiding Agents with Context Files", kw: "agents.md rules customization skills repo conventions" },
  { id: 56, cat: "SECTION 19", title: "The 10-Step Safe Agent Protocol", kw: "inception plan approve surgical test diff review commit" },
  { id: 57, cat: "SECTION 19", title: "Git as Your Safety Shield", kw: "never auto commit unstaged diff feature branch sandbox" },
  { id: 58, cat: "SECTION 19", title: "Red Lines for AI Agents", kw: "database reset git push main deploy cloud credentials" },
  { id: 59, cat: "SECTION 20", title: "Technical Decisions Have No Free Lunches", kw: "options analysis tradeoffs performance complexity cost" },
  { id: 60, cat: "SECTION 20", title: "Classical Software Dilemmas", kw: "monolith microservices sql nosql server client components" },
  { id: 61, cat: "SECTION 21", title: "The Verification Playbook", kw: "official docs type checker linter automated tests diffs" },
  { id: 62, cat: "SECTION 21", title: "Eloquence Is Not Evidence", kw: "smooth talker zero trust mindset test runner proof" },
  { id: 63, cat: "SECTION 22", title: "Forcing AI to Declare Uncertainty", kw: "facts inferences assumptions unknowns epistemic labels" },
  { id: 64, cat: "SECTION 22", title: "Navigating Evolving Library Ecosystems", kw: "version drift breaking changes release notes api reference" },
  { id: 65, cat: "SECTION 23", title: "The 10 Deadly Prompting Sins (Part 1)", kw: "extreme vagueness monolithic overload error messages" },
  { id: 66, cat: "SECTION 23", title: "The 10 Deadly Prompting Sins (Part 2)", kw: "coding before analyzing unstated constraints guardrails" },
  { id: 67, cat: "SECTION 23", title: "The 10 Deadly Prompting Sins (Part 3)", kw: "patching symptoms loop blind acceptance test before commit" },
  { id: 68, cat: "SECTION 24", title: "The Prompt Refinement Loop", kw: "dialogue calibration sequential turns tighten constraints" },
  { id: 69, cat: "SECTION 24", title: "A 3-Step Iteration Walkthrough", kw: "turn 1 turn 2 turn 3 drizzle orm zod validation test" },
  { id: 70, cat: "SECTION 25", title: "Case Study: TaskFlow SaaS Platform", kw: "nextjs neon drizzle vercel github actions 8 phases" },
  { id: 71, cat: "SECTION 25", title: "TaskFlow Phase Breakdown: What to Prompt", kw: "schema auth ui testing security audit deployment checklist" },
  { id: 72, cat: "SECTION 26", title: "Production-Grade Reusable Prompt Templates", kw: "prompt library copy templates audit bug security migration" },
  { id: 73, cat: "SECTION 27", title: "Interactive Universal Prompt Workshop", kw: "prompt builder generator task role tech stack copy reset" },
  { id: 74, cat: "SECTION 28", title: "Interactive Scenario & Troubleshooting Exercises", kw: "analysis workshop latency auth db layout deployment" },
  { id: 75, cat: "SECTION 29", title: "The Master Engineering Workflow & Architecture", kw: "understand analyze plan implement test review verify deliver" }
];

function setTheme(theme) {
  if (theme !== 'light' && theme !== 'dark') theme = 'dark';
  currentTheme = theme;
  localStorage.setItem('prompting_pres_theme', theme);
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

let lastThemeToggle = 0;
function toggleTheme() {
  const now = Date.now();
  if (now - lastThemeToggle < 150) return;
  lastThemeToggle = now;
  setTheme(currentTheme === 'dark' ? 'light' : 'dark');
}

let lastLangToggle = 0;
function toggleLanguage() {
  const now = Date.now();
  if (now - lastLangToggle < 150) return;
  lastLangToggle = now;
  setLanguage(currentLang === 'en' ? 'km' : 'en');
}

function setLanguage(lang) {
  if (lang !== 'en' && lang !== 'km') lang = 'en';
  currentLang = lang;
  localStorage.setItem('prompting_pres_lang', lang);

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

  const dict = (typeof promptingTranslations !== 'undefined' && promptingTranslations[lang]) ? promptingTranslations[lang] : {};
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) {
      el.setAttribute('placeholder', dict[key]);
    }
  });

  buildOverviewGrid();
  updateSlideView(currentSlideIndex, false);
}

function updateSlideView(index, updateHash = true) {
  const slides = document.querySelectorAll('.slide-item');
  if (!slides || slides.length === 0) return;

  if (index < 0) index = 0;
  if (index >= totalSlides) index = totalSlides - 1;
  currentSlideIndex = index;

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

  if (slideJumpSelect) {
    slideJumpSelect.value = currentSlideIndex;
  }

  const activeSlide = slides[currentSlideIndex];
  if (activeSlide && currentPartBadge) {
    const part = activeSlide.getAttribute('data-part') || 'COURSE';
    currentPartBadge.textContent = part;
  }

  if (btnPrev) btnPrev.disabled = currentSlideIndex === 0;
  if (btnNext) btnNext.disabled = currentSlideIndex === totalSlides - 1;

  if (updateHash) {
    if (window.location.hash !== '#slide-' + (currentSlideIndex + 1)) {
      history.replaceState(null, '', '#slide-' + (currentSlideIndex + 1));
    }
  }

  const activeCards = document.querySelectorAll('.overview-card');
  activeCards.forEach((c, idx) => {
    if (idx === currentSlideIndex) {
      c.classList.add('active');
    } else {
      c.classList.remove('active');
    }
  });
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

function openModal(modal) {
  if (!modal) return;
  modal.classList.add('open');
  if (modal === searchModal && searchInput) {
    setTimeout(() => {
      searchInput.value = '';
      renderSearchResults('');
      searchInput.focus();
    }, 50);
  }
}

function closeModal(modal) {
  if (!modal) return;
  modal.classList.remove('open');
}

function toggleModal(modal) {
  if (!modal) return;
  if (modal.classList.contains('open')) {
    closeModal(modal);
  } else {
    openModal(modal);
  }
}

function buildOverviewGrid() {
  if (!overviewGrid) return;
  overviewGrid.innerHTML = '';
  const dict = (typeof promptingTranslations !== 'undefined' && promptingTranslations[currentLang]) ? promptingTranslations[currentLang] : {};

  searchData.forEach((item, idx) => {
    const card = document.createElement('div');
    card.className = 'overview-card' + (idx === currentSlideIndex ? ' active' : '');
    const titleKey = 's' + item.id + '_head';
    const displayTitle = dict[titleKey] || item.title;

    card.innerHTML = `
      <div class="ov-header">
        <span class="ov-num">#${item.id < 10 ? '0' + item.id : item.id}</span>
        <span>${item.cat}</span>
      </div>
      <div class="ov-title">${displayTitle}</div>
    `;

    card.addEventListener('click', () => {
      goToSlide(idx);
      closeModal(overviewModal);
    });

    overviewGrid.appendChild(card);
  });
}

function initSearch() {
  if (!searchInput || !searchResults) return;

  searchInput.addEventListener('input', (e) => {
    renderSearchResults(e.target.value.trim().toLowerCase());
  });

  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal(searchModal);
      e.preventDefault();
    }
  });
}

function renderSearchResults(query) {
  if (!searchResults) return;
  searchResults.innerHTML = '';
  const dict = (typeof promptingTranslations !== 'undefined' && promptingTranslations[currentLang]) ? promptingTranslations[currentLang] : {};

  const matches = searchData.filter(item => {
    if (!query) return true;
    const titleKey = 's' + item.id + '_head';
    const title = (dict[titleKey] || item.title).toLowerCase();
    const cat = item.cat.toLowerCase();
    const kw = item.kw.toLowerCase();
    return title.includes(query) || cat.includes(query) || kw.includes(query);
  });

  if (matches.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'search-empty';
    empty.textContent = dict['ui_search_empty'] || 'No matching slides found.';
    searchResults.appendChild(empty);
    return;
  }

  matches.forEach(item => {
    const div = document.createElement('div');
    div.className = 'search-item';
    const titleKey = 's' + item.id + '_head';
    const displayTitle = dict[titleKey] || item.title;

    div.innerHTML = `
      <div class="search-item-left">
        <span class="search-badge">#${item.id < 10 ? '0' + item.id : item.id}</span>
        <div>
          <div class="search-item-title">${displayTitle}</div>
          <div class="search-item-cat">${item.cat}</div>
        </div>
      </div>
      <div class="search-item-action">Jump →</div>
    `;

    div.addEventListener('click', () => {
      goToSlide(item.id - 1);
      closeModal(searchModal);
    });

    searchResults.appendChild(div);
  });
}

function initCopyButtons() {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-copy');
    if (!btn) return;

    let textToCopy = '';
    const codeContainer = btn.closest('.terminal-window, .prompt-template-card, .code-editor-box, .builder-preview-box');
    if (codeContainer) {
      const codeEl = codeContainer.querySelector('pre, code, .terminal-body, .template-content, #builder-output-code');
      if (codeEl) {
        textToCopy = codeEl.innerText || codeEl.textContent;
      }
    }

    if (!textToCopy && btn.getAttribute('data-copy-target')) {
      const target = document.querySelector(btn.getAttribute('data-copy-target'));
      if (target) textToCopy = target.innerText || target.textContent;
    }

    if (textToCopy) {
      navigator.clipboard.writeText(textToCopy.trim()).then(() => {
        const origHtml = btn.innerHTML;
        btn.innerHTML = `<svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor" style="display:inline-block;vertical-align:-1px;margin-right:2px;"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z"/></svg>Copied!`;
        btn.classList.add('copied');
        setTimeout(() => {
          btn.innerHTML = origHtml;
          btn.classList.remove('copied');
        }, 1800);
      }).catch(() => {});
    }
  });
}

function initPromptBuilder() {
  const taskSelect = document.getElementById('builder-task-type');
  const roleSelect = document.getElementById('builder-role');
  const stackSelect = document.getElementById('builder-stack');
  const goalInput = document.getElementById('builder-goal');
  const reqsInput = document.getElementById('builder-reqs');
  const constrInput = document.getElementById('builder-constraints');
  const outputSelect = document.getElementById('builder-output-fmt');
  const verifSelect = document.getElementById('builder-verification');
  const outputCode = document.getElementById('builder-output-code');
  const btnReset = document.getElementById('builder-btn-reset');
  const btnCompare = document.getElementById('builder-btn-compare');
  const compareBox = document.getElementById('builder-compare-box');

  if (!taskSelect || !outputCode) return;

  function generatePrompt() {
    const task = taskSelect.value;
    const role = roleSelect ? roleSelect.value : 'Senior Full-Stack Engineer';
    const stack = stackSelect ? stackSelect.value : 'Next.js 15, TypeScript, Tailwind CSS, Neon PostgreSQL, Drizzle ORM';
    const goal = (goalInput && goalInput.value.trim()) ? goalInput.value.trim() : 'Implement paginated task list with status filter and user authorization';
    const reqs = (reqsInput && reqsInput.value.trim()) ? reqsInput.value.trim() : '- Validate query parameters with Zod\n- Enforce tenant user_id authorization\n- Include loading skeleton and empty state\n- Add automated unit test for filtering logic';
    const constr = (constrInput && constrInput.value.trim()) ? constrInput.value.trim() : '- Do not modify database schema\n- Do not introduce new npm packages\n- Preserve existing UI theme tokens and zero border-radius\n- Do not commit secrets';
    const outputFmt = outputSelect ? outputSelect.value : 'Unified diff with file paths, changed lines, and testing summary';
    const verif = verifSelect ? verifSelect.value : 'Run `pnpm test` and verify response status codes 200/400/401/403';

    let prompt = `ROLE:\nAct as a ${role}.\n\n`;
    prompt += `OBJECTIVE / GOAL:\n${goal}\n\n`;
    prompt += `CONTEXT & TECH STACK:\n${stack}\nTask Type: ${task}\n\n`;
    prompt += `FUNCTIONAL REQUIREMENTS:\n${reqs}\n\n`;
    prompt += `CONSTRAINTS (WHAT NOT TO DO):\n${constr}\n\n`;
    prompt += `OUTPUT FORMAT:\n${outputFmt}\n\n`;
    prompt += `VERIFICATION CRITERIA:\n${verif}\n\n`;
    prompt += `INSPECTION MANDATE:\nBefore generating code, inspect the existing files, confirm the current architecture, and highlight any assumptions.`;

    outputCode.textContent = prompt;
  }

  [taskSelect, roleSelect, stackSelect, outputSelect, verifSelect].forEach(el => {
    if (el) el.addEventListener('change', generatePrompt);
  });

  [goalInput, reqsInput, constrInput].forEach(el => {
    if (el) el.addEventListener('input', generatePrompt);
  });

  if (btnReset) {
    btnReset.addEventListener('click', () => {
      if (goalInput) goalInput.value = '';
      if (reqsInput) reqsInput.value = '';
      if (constrInput) constrInput.value = '';
      generatePrompt();
    });
  }

  if (btnCompare && compareBox) {
    btnCompare.addEventListener('click', () => {
      compareBox.classList.toggle('hidden');
    });
  }

  generatePrompt();
}

function initAnalysisWorkshop() {
  const scenarioBtns = document.querySelectorAll('.scenario-nav-btn');
  const scenarioCards = document.querySelectorAll('.scenario-card');
  const feedbackBoxes = document.querySelectorAll('.scenario-feedback');

  if (!scenarioBtns || scenarioBtns.length === 0) return;

  scenarioBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-scenario');
      scenarioBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      scenarioCards.forEach(card => {
        if (card.id === targetId) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  document.querySelectorAll('.scenario-option-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.scenario-card');
      if (!card) return;

      const isCorrect = btn.getAttribute('data-correct') === 'true';
      const feedback = card.querySelector('.scenario-feedback');
      const feedbackText = card.querySelector('.scenario-feedback-text');

      card.querySelectorAll('.scenario-option-btn').forEach(b => {
        b.classList.remove('selected-correct', 'selected-wrong');
      });

      if (isCorrect) {
        btn.classList.add('selected-correct');
        if (feedback) {
          feedback.className = 'scenario-feedback alert-callout tip mt-3';
          if (feedbackText) {
            feedbackText.innerHTML = `<strong>Correct Action:</strong> ${btn.getAttribute('data-explanation') || 'Gathering evidence and inspecting logs before taking action prevents catastrophic rewrites and targets the actual root cause.'}`;
          }
          feedback.classList.remove('hidden');
        }
      } else {
        btn.classList.add('selected-wrong');
        if (feedback) {
          feedback.className = 'scenario-feedback alert-callout danger mt-3';
          if (feedbackText) {
            feedbackText.innerHTML = `<strong>Flawed Action:</strong> ${btn.getAttribute('data-explanation') || 'This approach assumes a cause without evidence, introducing unnecessary complexity or risk.'}`;
          }
          feedback.classList.remove('hidden');
        }
      }
    });
  });
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
      e.preventDefault();
      nextSlide();
      break;

    case 'ArrowLeft':
    case 'PageUp':
    case 'Backspace':
    case 'h':
    case 'H':
      if (e.key === 'h' || e.key === 'H') {
        window.location.href = '../index.html';
      } else {
        e.preventDefault();
        prevSlide();
      }
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

  if (btnLangToggle) btnLangToggle.addEventListener('click', toggleLanguage);
  if (btnThemeToggle) btnThemeToggle.addEventListener('click', toggleTheme);
  setTheme(currentTheme);

  if (slideJumpSelect) {
    slideJumpSelect.innerHTML = '';
    for (let i = 0; i < totalSlides; i++) {
      const opt = document.createElement('option');
      opt.value = i;
      opt.textContent = `Slide ${i + 1} of ${totalSlides}`;
      slideJumpSelect.appendChild(opt);
    }
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
  initSearch();
  initPromptBuilder();
  initAnalysisWorkshop();

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
