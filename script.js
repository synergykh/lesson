const slideElements = document.querySelectorAll('.slide-item');
const totalSlides = slideElements.length;
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
const overviewGrid = document.getElementById('overview-grid');
const slideJumpSelect = document.getElementById('slide-jump-select');
const btnLangEn = document.getElementById('lang-btn-en');
const btnLangKm = document.getElementById('lang-btn-km');
const btnThemeToggle = document.getElementById('btn-theme-toggle');
const themeIconSun = document.getElementById('theme-icon-sun');
const themeIconMoon = document.getElementById('theme-icon-moon');

function setTheme(theme) {
  if (theme !== 'light' && theme !== 'dark') theme = 'dark';
  currentTheme = theme;
  localStorage.setItem('presentation_theme', theme);
  document.documentElement.setAttribute('data-theme', theme);

  if (themeIconSun && themeIconMoon) {
    if (theme === 'light') {
      themeIconSun.style.display = 'block';
      themeIconMoon.style.display = 'none';
    } else {
      themeIconSun.style.display = 'none';
      themeIconMoon.style.display = 'block';
    }
  }
}

function toggleTheme() {
  setTheme(currentTheme === 'dark' ? 'light' : 'dark');
}

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

  if (btnLangEn) btnLangEn.classList.toggle('active', lang === 'en');
  if (btnLangKm) btnLangKm.classList.toggle('active', lang === 'km');

  applyTranslations(lang);
  populateSlideSelect();
  updateSlideView(currentSlideIndex, false);
}

function applyTranslations(lang) {
  if (typeof translations === 'undefined') return;
  const dict = translations[lang] || translations.en;

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

    const titleEl = slide.querySelector('.slide-title');
    if (titleEl && dict['s' + i + '_title']) {
      titleEl.innerHTML = dict['s' + i + '_title'];
    }

    const subEl = slide.querySelector('.slide-subtitle');
    if (subEl && dict['s' + i + '_sub']) {
      subEl.innerHTML = dict['s' + i + '_sub'];
    }
  }

  const s1 = document.getElementById('slide-1');
  if (s1) {
    const h1 = s1.querySelector('.title-main-h1');
    if (h1 && dict.s1_title) h1.innerHTML = dict.s1_title;
    const tag = s1.querySelector('.title-tagline');
    if (tag && dict.s1_tagline) tag.textContent = dict.s1_tagline;
    const callout = s1.querySelector('.alert-callout div');
    if (callout && dict.s1_callout) callout.textContent = dict.s1_callout;
    const startBtn = document.getElementById('btn-start-course');
    if (startBtn && dict.ui_start_course) startBtn.textContent = dict.ui_start_course;
    const n1 = s1.querySelector('.local-node .node-text-title');
    if (n1 && dict.s1_node1_title) n1.textContent = dict.s1_node1_title;
    const n1s = s1.querySelector('.local-node .node-text-sub');
    if (n1s && dict.s1_node1_sub) n1s.textContent = dict.s1_node1_sub;
    const n2 = s1.querySelector('.git-node .node-text-title');
    if (n2 && dict.s1_node2_title) n2.textContent = dict.s1_node2_title;
    const n2s = s1.querySelector('.git-node .node-text-sub');
    if (n2s && dict.s1_node2_sub) n2s.textContent = dict.s1_node2_sub;
    const n3 = s1.querySelector('.github-node .node-text-title');
    if (n3 && dict.s1_node3_title) n3.textContent = dict.s1_node3_title;
    const n3s = s1.querySelector('.github-node .node-text-sub');
    if (n3s && dict.s1_node3_sub) n3s.textContent = dict.s1_node3_sub;
  }

  const s2 = document.getElementById('slide-2');
  if (s2) {
    const cards = s2.querySelectorAll('.info-card');
    if (cards[0]) {
      const h4 = cards[0].querySelector('h4');
      if (h4) h4.lastChild.textContent = ' ' + (dict.s2_card1_title || '');
      const p = cards[0].querySelector('p');
      if (p) p.textContent = dict.s2_card1_p || '';
    }
    if (cards[1]) {
      const h4 = cards[1].querySelector('h4');
      if (h4) h4.lastChild.textContent = ' ' + (dict.s2_card2_title || '');
      const p = cards[1].querySelector('p');
      if (p) p.textContent = dict.s2_card2_p || '';
    }
    const termTitle = s2.querySelector('.terminal-title');
    if (termTitle && dict.s2_diag_title) termTitle.textContent = dict.s2_diag_title;
  }

  const s3 = document.getElementById('slide-3');
  if (s3) {
    const cards = s3.querySelectorAll('.info-card');
    if (cards[0]) {
      const h4 = cards[0].querySelector('h4');
      if (h4) h4.textContent = dict.s3_without_title || '';
    }
    if (cards[1]) {
      const h4 = cards[1].querySelector('h4');
      if (h4) h4.textContent = dict.s3_with_title || '';
      const tipDiv = s3.querySelector('.alert-callout.tip div');
      if (tipDiv) tipDiv.textContent = dict.s3_tip || '';
    }
  }

  const s4 = document.getElementById('slide-4');
  if (s4) {
    const ths = s4.querySelectorAll('th');
    if (ths[0]) ths[0].textContent = dict.s4_th_term || '';
    if (ths[1]) ths[1].textContent = dict.s4_th_meaning || '';
    if (ths[2]) ths[2].textContent = dict.s4_th_context || '';
    const tds = s4.querySelectorAll('td');
    if (tds[1]) tds[1].textContent = dict.s4_t_repo_m || '';
    if (tds[4]) tds[4].textContent = dict.s4_t_commit_m || '';
    if (tds[7]) tds[7].textContent = dict.s4_t_branch_m || '';
    if (tds[10]) tds[10].textContent = dict.s4_t_remote_m || '';
    if (tds[13]) tds[13].textContent = dict.s4_t_origin_m || '';
    if (tds[16]) tds[16].textContent = dict.s4_t_push_m || '';
    if (tds[19]) tds[19].textContent = dict.s4_t_pull_m || '';
    if (tds[22]) tds[22].textContent = dict.s4_t_clone_m || '';
    if (tds[25]) tds[25].textContent = dict.s4_t_stage_m || '';
  }

  const s5 = document.getElementById('slide-5');
  if (s5) {
    const tip = s5.querySelector('.alert-callout.tip div');
    if (tip) tip.textContent = dict.s5_tip || '';
    const notH4 = s5.querySelector('.info-card h4');
    if (notH4) notH4.textContent = dict.s5_not_title || '';
    const notP = s5.querySelector('.info-card p');
    if (notP) notP.textContent = dict.s5_not_p || '';
  }

  const s6 = document.getElementById('slide-6');
  if (s6) {
    const whyH4 = s6.querySelector('.info-card h4');
    if (whyH4) whyH4.textContent = dict.s6_why_title || '';
    const whyP = s6.querySelector('.info-card p');
    if (whyP) whyP.textContent = dict.s6_why_p || '';
    const warn = s6.querySelector('.alert-callout.warning div');
    if (warn) warn.innerHTML = dict.s6_warn || '';
  }

  const s7 = document.getElementById('slide-7');
  if (s7) {
    const cards = s7.querySelectorAll('.info-card');
    if (cards[0] && cards[0].querySelector('h4')) cards[0].querySelector('h4').textContent = dict.s7_res_title || '';
    if (cards[1] && cards[1].querySelector('h4')) cards[1].querySelector('h4').textContent = dict.s7_what_title || '';
  }

  const s8 = document.getElementById('slide-8');
  if (s8) {
    const h4 = s8.querySelector('.info-card h4');
    if (h4) h4.textContent = dict.s8_hidden_title || '';
    const warn = s8.querySelector('.alert-callout.warning div');
    if (warn) warn.textContent = dict.s8_hidden_warn || '';
  }

  const s9 = document.getElementById('slide-9');
  if (s9) {
    const h4 = s9.querySelector('.info-card h4');
    if (h4) h4.textContent = dict.s9_untracked_title || '';
    const ps = s9.querySelectorAll('.info-card p');
    if (ps[0]) ps[0].textContent = dict.s9_untracked_p1 || '';
    if (ps[1]) ps[1].textContent = dict.s9_untracked_p2 || '';
    const tip = s9.querySelector('.alert-callout.info div');
    if (tip) tip.textContent = dict.s9_tip || '';
  }

  const s10 = document.getElementById('slide-10');
  if (s10) {
    const h4 = s10.querySelector('.info-card h4');
    if (h4) h4.textContent = dict.s10_why_title || '';
    const p = s10.querySelector('.info-card p');
    if (p) p.textContent = dict.s10_why_p || '';
  }

  const s11 = document.getElementById('slide-11');
  if (s11) {
    const h4 = s11.querySelector('.info-card h4');
    if (h4) h4.textContent = dict.s11_green_title || '';
    const ps = s11.querySelectorAll('.info-card p');
    if (ps[0]) ps[0].textContent = dict.s11_green_p1 || '';
    if (ps[1]) ps[1].textContent = dict.s11_green_p2 || '';
    const tip = s11.querySelector('.alert-callout.tip div');
    if (tip) tip.textContent = dict.s11_tip || '';
  }

  const s12 = document.getElementById('slide-12');
  if (s12) {
    const tip = s12.querySelector('.alert-callout.tip div');
    if (tip) tip.textContent = dict.s12_tip || '';
    const h4 = s12.querySelector('.info-card h4');
    if (h4) h4.textContent = dict.s12_pipeline_title || '';
  }

  const s13 = document.getElementById('slide-13');
  if (s13) {
    const h4 = s13.querySelector('.info-card h4');
    if (h4) h4.textContent = dict.s13_hash_title || '';
    const ps = s13.querySelectorAll('.info-card p');
    if (ps[0]) ps[0].textContent = dict.s13_hash_p1 || '';
    if (ps[1]) ps[1].textContent = dict.s13_hash_p2 || '';
  }

  const s14 = document.getElementById('slide-14');
  if (s14) {
    const cards = s14.querySelectorAll('.info-card');
    if (cards[0]) {
      const h4 = cards[0].querySelector('h4');
      if (h4) h4.textContent = dict.s14_start_title || '';
      const p = cards[0].querySelector('p');
      if (p) p.textContent = dict.s14_start_p || '';
    }
    const tip = s14.querySelector('.alert-callout.tip div');
    if (tip) tip.textContent = dict.s14_tip || '';
    if (cards[1]) {
      const h4 = cards[1].querySelector('h4');
      if (h4) h4.textContent = dict.s14_platform_title || '';
      const p = cards[1].querySelector('p');
      if (p) p.textContent = dict.s14_platform_p || '';
    }
  }

  const s15 = document.getElementById('slide-15');
  if (s15) {
    const cards = s15.querySelectorAll('.info-card');
    if (cards[0] && cards[0].querySelector('h4')) cards[0].querySelector('h4').textContent = dict.s15_steps_title || '';
    const warn = s15.querySelector('.alert-callout.danger div');
    if (warn) warn.innerHTML = dict.s15_tip_warn || '';
    if (cards[1]) {
      const h4 = cards[1].querySelector('h4');
      if (h4) h4.textContent = dict.s15_blank_title || '';
      const p = cards[1].querySelector('p');
      if (p) p.textContent = dict.s15_blank_p || '';
    }
  }

  const s16 = document.getElementById('slide-16');
  if (s16) {
    const h4 = s16.querySelector('.info-card h4');
    if (h4) h4.textContent = dict.s16_cmd_title || '';
    const tip = s16.querySelector('.alert-callout.info div');
    if (tip) tip.textContent = dict.s16_tip || '';
  }

  const s17 = document.getElementById('slide-17');
  if (s17) {
    const cards = s17.querySelectorAll('.info-card');
    if (cards[0] && cards[0].querySelector('h4')) cards[0].querySelector('h4').textContent = dict.s17_https_title || '';
    if (cards[1] && cards[1].querySelector('h4')) cards[1].querySelector('h4').textContent = dict.s17_ssh_title || '';
  }

  const s18 = document.getElementById('slide-18');
  if (s18) {
    const tip = s18.querySelector('.alert-callout.info div');
    if (tip) tip.textContent = dict.s18_tip || '';
    const h4 = s18.querySelector('.info-card h4');
    if (h4) h4.textContent = dict.s18_why_title || '';
    const p = s18.querySelector('.info-card p');
    if (p) p.textContent = dict.s18_why_p || '';
  }

  const s19 = document.getElementById('slide-19');
  if (s19) {
    const h4 = s19.querySelector('.info-card h4');
    if (h4) h4.textContent = dict.s19_breakdown_title || '';
  }

  const s20 = document.getElementById('slide-20');
  if (s20) {
    const h4 = s20.querySelector('.info-card h4');
    if (h4) h4.textContent = dict.s20_verify_title || '';
  }

  const s21 = document.getElementById('slide-21');
  if (s21) {
    const h4 = s21.querySelector('.info-card h4');
    if (h4) h4.textContent = dict.s21_why_title || '';
    const p = s21.querySelector('.info-card p');
    if (p) p.textContent = dict.s21_why_p || '';
    const tip = s21.querySelector('.alert-callout.tip div');
    if (tip) tip.textContent = dict.s21_tip || '';
  }

  const s23 = document.getElementById('slide-23');
  if (s23) {
    const h4 = s23.querySelector('.info-card h4');
    if (h4) h4.textContent = dict.s23_what_title || '';
    const p = s23.querySelector('.info-card p');
    if (p) p.textContent = dict.s23_what_p || '';
  }

  const s24 = document.getElementById('slide-24');
  if (s24) {
    const h4 = s24.querySelector('.info-card h4');
    if (h4) h4.textContent = dict.s24_push_vs_pull || '';
    const tip = s24.querySelector('.alert-callout.tip div');
    if (tip) tip.textContent = dict.s24_tip || '';
  }

  const s25 = document.getElementById('slide-25');
  if (s25) {
    const tip = s25.querySelector('.alert-callout.info div');
    if (tip) tip.textContent = dict.s25_tip || '';
    const h4 = s25.querySelector('.info-card h4');
    if (h4) h4.textContent = dict.s25_why_title || '';
  }

  const s26 = document.getElementById('slide-26');
  if (s26) {
    const h4 = s26.querySelector('.info-card h4');
    if (h4) h4.textContent = dict.s26_older_title || '';
    const p = s26.querySelector('.info-card p');
    if (p) p.textContent = dict.s26_older_p || '';
  }

  const s27 = document.getElementById('slide-27');
  if (s27) {
    const ths = s27.querySelectorAll('th');
    if (ths[0]) ths[0].textContent = dict.s27_th_cmd || '';
    if (ths[1]) ths[1].textContent = dict.s27_th_purp || '';
    if (ths[2]) ths[2].textContent = dict.s27_th_where || '';
  }

  const s28 = document.getElementById('slide-28');
  if (s28) {
    const warn = s28.querySelector('.alert-callout.warning div');
    if (warn) warn.textContent = dict.s28_warn || '';
  }

  const s29 = document.getElementById('slide-29');
  if (s29) {
    const h4 = s29.querySelector('.info-card h4');
    if (h4) h4.textContent = dict.s29_why_title || '';
    const p = s29.querySelector('.info-card p');
    if (p) p.textContent = dict.s29_why_p || '';
  }

  const s30 = document.getElementById('slide-30');
  if (s30) {
    const danger = s30.querySelector('.alert-callout.danger div');
    if (danger) danger.innerHTML = dict.s30_danger || '';
    const h4 = s30.querySelector('.info-card h4');
    if (h4) h4.textContent = dict.s30_causes_title || '';
  }

  const s31 = document.getElementById('slide-31');
  if (s31) {
    const h4 = s31.querySelector('.info-card h4');
    if (h4) h4.textContent = dict.s31_why_title || '';
    const p = s31.querySelector('.info-card p');
    if (p) p.textContent = dict.s31_why_p || '';
    const danger = s31.querySelector('.alert-callout.danger div');
    if (danger) danger.innerHTML = dict.s31_danger || '';
  }

  const s32 = document.getElementById('slide-32');
  if (s32) {
    const h4 = s32.querySelector('.info-card h4');
    if (h4) h4.textContent = dict.s32_why_title || '';
    const p = s32.querySelector('.info-card p');
    if (p) p.textContent = dict.s32_why_p || '';
  }

  const s33 = document.getElementById('slide-33');
  if (s33) {
    const h4 = s33.querySelector('.info-card h4');
    if (h4) h4.textContent = dict.s33_done_title || '';
  }

  const s34 = document.getElementById('slide-34');
  if (s34) {
    const h4 = s34.querySelector('.info-card h4');
    if (h4) h4.textContent = dict.s34_why_title || '';
    const p = s34.querySelector('.info-card p');
    if (p) p.textContent = dict.s34_why_p || '';
  }

  const s35 = document.getElementById('slide-35');
  if (s35) {
    const h4 = s35.querySelector('.info-card h4');
    if (h4) h4.textContent = dict.s35_task_title || '';
    const p = s35.querySelector('.info-card p');
    if (p) p.textContent = dict.s35_task_p || '';
  }

  const s36 = document.getElementById('slide-36');
  if (s36) {
    const h4 = s36.querySelector('.info-card h4');
    if (h4) h4.textContent = dict.s36_chal_title || '';
  }

  const s37 = document.getElementById('slide-37');
  if (s37) {
    const cards = s37.querySelectorAll('.info-card');
    if (cards[0] && cards[0].querySelector('p')) cards[0].querySelector('p').textContent = dict.s37_git_p || '';
    if (cards[1] && cards[1].querySelector('p')) cards[1].querySelector('p').textContent = dict.s37_gh_p || '';
    const quote = s37.querySelector('.quote-banner');
    if (quote) quote.textContent = dict.s37_quote || '';
    if (cards[2] && cards[2].querySelector('h4')) cards[2].querySelector('h4').textContent = dict.s37_core_title || '';
  }

  const s38 = document.getElementById('slide-38');
  if (s38) {
    const h3 = s38.querySelector('h3');
    if (h3) h3.textContent = dict.s38_congrats || '';
    const p = s38.querySelector('p');
    if (p) p.textContent = dict.s38_congrats_p || '';
    const h4 = s38.querySelector('.info-card h4');
    if (h4) h4.textContent = dict.s38_next_title || '';
    const thanks = s38.querySelector('.hero-visual-box div:nth-child(3)');
    if (thanks) thanks.textContent = dict.s38_thanks || '';
  }

  const overviewTitle = document.querySelector('#overview-modal .modal-title');
  if (overviewTitle && dict.ui_overview_title) overviewTitle.textContent = dict.ui_overview_title;

  const shortcutsTitle = document.querySelector('#shortcuts-modal .modal-title');
  if (shortcutsTitle && dict.ui_shortcuts_title) shortcutsTitle.textContent = dict.ui_shortcuts_title;

  const prevBtnSpan = btnPrev ? btnPrev.querySelector('span') : null;
  if (prevBtnSpan && dict.ui_prev) prevBtnSpan.textContent = dict.ui_prev;

  const nextBtnSpan = btnNext ? btnNext.querySelector('span') : null;
  if (nextBtnSpan && dict.ui_next) nextBtnSpan.textContent = dict.ui_next;
}

function populateSlideSelect() {
  if (!slideJumpSelect) return;
  const dict = (typeof translations !== 'undefined') ? (translations[currentLang] || translations.en) : null;
  slideJumpSelect.innerHTML = '';
  slideElements.forEach((slide, idx) => {
    const opt = document.createElement('option');
    opt.value = idx;
    let titleText = '';
    if (dict && dict['s' + (idx + 1) + '_title']) {
      titleText = dict['s' + (idx + 1) + '_title'].replace(/<[^>]+>/g, '').replace('&amp;', '&');
    } else {
      const titleEl = slide.querySelector('.slide-title');
      titleText = titleEl ? titleEl.textContent : (slide.querySelector('.title-main-h1') ? 'Git & GitHub' : `Slide ${idx + 1}`);
    }
    opt.textContent = `${idx + 1}. ${titleText}`;
    slideJumpSelect.appendChild(opt);
  });
  slideJumpSelect.value = String(currentSlideIndex);
}

function updateSlideView(index, pushHash = true) {
  if (totalSlides === 0) return;
  if (index < 0) index = 0;
  if (index >= totalSlides) index = totalSlides - 1;
  currentSlideIndex = index;

  slideElements.forEach((el, i) => {
    if (i === currentSlideIndex) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });

  const activeSlide = slideElements[currentSlideIndex];
  if (activeSlide) {
    const partKey = activeSlide.getAttribute('data-part-key');
    const dict = (typeof translations !== 'undefined') ? (translations[currentLang] || translations.en) : null;
    const partName = (dict && partKey && dict[partKey]) ? dict[partKey] : (activeSlide.getAttribute('data-part') || 'Git & GitHub');
    if (currentPartBadge) {
      currentPartBadge.textContent = partName;
    }
  }

  if (currentSlideLabel) {
    currentSlideLabel.textContent = String(currentSlideIndex + 1);
  }
  if (totalSlidesLabel) {
    totalSlidesLabel.textContent = String(totalSlides);
  }

  if (slideJumpSelect) {
    slideJumpSelect.value = String(currentSlideIndex);
  }

  if (progressFill) {
    const pct = ((currentSlideIndex + 1) / totalSlides) * 100;
    progressFill.style.width = pct + '%';
  }

  if (btnPrev) btnPrev.disabled = currentSlideIndex === 0;
  if (btnNext) btnNext.disabled = currentSlideIndex === totalSlides - 1;

  if (pushHash) {
    window.location.hash = '#' + (currentSlideIndex + 1);
  }

  updateOverviewActiveState();
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

function buildOverviewGrid() {
  if (!overviewGrid) return;
  overviewGrid.innerHTML = '';
  const dict = (typeof translations !== 'undefined') ? (translations[currentLang] || translations.en) : null;

  slideElements.forEach((slide, idx) => {
    const card = document.createElement('div');
    card.className = 'overview-card';
    if (idx === currentSlideIndex) {
      card.classList.add('current');
    }

    let titleText = '';
    if (dict && dict['s' + (idx + 1) + '_title']) {
      titleText = dict['s' + (idx + 1) + '_title'].replace(/<[^>]+>/g, '').replace('&amp;', '&');
    } else {
      const titleEl = slide.querySelector('.slide-title');
      titleText = titleEl ? titleEl.textContent : `Slide ${idx + 1}`;
    }

    const partKey = slide.getAttribute('data-part-key');
    const partText = (dict && partKey && dict[partKey]) ? dict[partKey] : (slide.getAttribute('data-part') || '');

    card.innerHTML = `
      <span class="overview-card-num">#${idx + 1}</span>
      <span class="overview-card-title">${titleText}</span>
      <span class="overview-card-part">${partText}</span>
    `;

    card.addEventListener('click', () => {
      goToSlide(idx);
      closeModal(overviewModal);
    });

    overviewGrid.appendChild(card);
  });
}

function updateOverviewActiveState() {
  if (!overviewGrid) return;
  const cards = overviewGrid.querySelectorAll('.overview-card');
  cards.forEach((c, idx) => {
    if (idx === currentSlideIndex) {
      c.classList.add('current');
    } else {
      c.classList.remove('current');
    }
  });
}

function openModal(modal) {
  if (modal === overviewModal) {
    buildOverviewGrid();
  }
  modal.classList.add('open');
}

function closeModal(modal) {
  modal.classList.remove('open');
}

function toggleModal(modal) {
  if (modal.classList.contains('open')) {
    closeModal(modal);
  } else {
    openModal(modal);
  }
}

function toggleFullscreen() {
  const container = document.getElementById('app-container');
  if (!document.fullscreenElement) {
    if (container && container.requestFullscreen) {
      container.requestFullscreen().catch(() => {});
    } else if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen().catch(() => {});
    }
    document.body.classList.add('fullscreen-active');
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    }
    document.body.classList.remove('fullscreen-active');
  }
}

function initCopyButtons() {
  const copyButtons = document.querySelectorAll('.copy-btn');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetText = btn.getAttribute('data-copy');
      if (targetText) {
        navigator.clipboard.writeText(targetText).then(() => {
          const dict = (typeof translations !== 'undefined') ? (translations[currentLang] || translations.en) : null;
          const copiedText = (dict && dict.ui_copied) ? dict.ui_copied : 'Copied!';
          const original = btn.innerHTML;
          btn.classList.add('copied');
          btn.textContent = copiedText;
          setTimeout(() => {
            btn.classList.remove('copied');
            btn.innerHTML = original;
          }, 1500);
        });
      }
    });
  });
}

function handleHashChange() {
  if (totalSlides === 0) return;
  const hash = window.location.hash.replace('#', '');
  const num = parseInt(hash, 10);
  if (!isNaN(num) && num >= 1 && num <= totalSlides) {
    updateSlideView(num - 1, false);
  }
}

let touchStartX = 0;
let touchEndX = 0;

function setupTouchNavigation() {
  const viewport = document.querySelector('.slide-viewport');
  if (!viewport) return;

  viewport.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  viewport.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchEndX - touchStartX;
    if (Math.abs(diff) > 50) {
      if (diff < 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  }, { passive: true });
}

document.addEventListener('keydown', (e) => {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') {
    return;
  }

  if (totalSlides === 0) {
    if (e.key === 't' || e.key === 'T') {
      e.preventDefault();
      toggleTheme();
    } else if (e.key === '1') {
      window.location.href = 'git.html';
    } else if (e.key === '2') {
      window.location.href = 'github.html';
    } else if (e.key === '3') {
      window.location.href = 'nextjs.html';
    } else if (e.key === '4') {
      window.location.href = 'tailwindcss.html';
    } else if (e.key === '5') {
      window.location.href = 'shadcn.html';
    }
    return;
  }

  if (overviewModal && overviewModal.classList.contains('open')) {
    if (e.key === 'Escape' || e.key === 'o' || e.key === 'O' || e.key === 'g' || e.key === 'G') {
      closeModal(overviewModal);
      e.preventDefault();
      return;
    }
  }

  if (shortcutsModal && shortcutsModal.classList.contains('open')) {
    if (e.key === 'Escape' || e.key === '?') {
      closeModal(shortcutsModal);
      e.preventDefault();
      return;
    }
  }

  switch (e.key) {
    case 'ArrowRight':
    case 'ArrowDown':
    case 'PageDown':
    case ' ':
    case 'l':
    case 'j':
    case 'n':
      e.preventDefault();
      nextSlide();
      break;

    case 'ArrowLeft':
    case 'ArrowUp':
    case 'PageUp':
    case 'Backspace':
    case 'k':
    case 'p':
      e.preventDefault();
      prevSlide();
      break;

    case 'h':
    case 'H':
      e.preventDefault();
      window.location.href = 'index.html';
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
      if (overviewModal) closeModal(overviewModal);
      if (shortcutsModal) closeModal(shortcutsModal);
      break;
  }
});

document.addEventListener('DOMContentLoaded', () => {
  if (btnPrev) btnPrev.addEventListener('click', prevSlide);
  if (btnNext) btnNext.addEventListener('click', nextSlide);

  if (btnLangEn) {
    btnLangEn.addEventListener('click', () => setLanguage('en'));
  }
  if (btnLangKm) {
    btnLangKm.addEventListener('click', () => setLanguage('km'));
  }

  if (btnThemeToggle) {
    btnThemeToggle.addEventListener('click', toggleTheme);
  }
  setTheme(currentTheme);

  document.addEventListener('fullscreenchange', () => {
    if (document.fullscreenElement) {
      document.body.classList.add('fullscreen-active');
    } else {
      document.body.classList.remove('fullscreen-active');
    }
  });

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

  const btnFullscreen = document.getElementById('btn-fullscreen');
  if (btnFullscreen) {
    btnFullscreen.addEventListener('click', toggleFullscreen);
  }

  const btnPrint = document.getElementById('btn-print');
  if (btnPrint) {
    btnPrint.addEventListener('click', () => window.print());
  }

  const closeBtns = document.querySelectorAll('.modal-close');
  closeBtns.forEach(b => {
    b.addEventListener('click', () => {
      if (overviewModal) closeModal(overviewModal);
      if (shortcutsModal) closeModal(shortcutsModal);
    });
  });

  [overviewModal, shortcutsModal].forEach(m => {
    if (m) {
      m.addEventListener('click', (e) => {
        if (e.target === m) {
          closeModal(m);
        }
      });
    }
  });

  const startBtn = document.getElementById('btn-start-course');
  if (startBtn) {
    startBtn.addEventListener('click', nextSlide);
  }

  initCopyButtons();
  setupTouchNavigation();

  setLanguage(currentLang);

  window.addEventListener('hashchange', handleHashChange);
  if (window.location.hash) {
    handleHashChange();
  } else {
    updateSlideView(0, false);
  }
});
