// Helper to translate Git and GitHub slides based on card/element selectors
export function applyGitSlideTranslations(container, slideNum, t, lang) {
  if (!container) return;

  // Slide 1 Welcome
  if (slideNum === 1) {
    const callout = container.querySelector(".alert-callout div");
    if (callout) {
      const trans = t("s1_callout");
      if (trans) callout.textContent = trans;
    }
    const startBtn = container.querySelector(".btn-start-course, .btn-cta-primary");
    if (startBtn) {
      const trans = t("ui_start_course", "Start Course");
      if (trans) {
        const textNode = Array.from(startBtn.childNodes).find(n => n.nodeType === Node.TEXT_NODE);
        if (textNode) textNode.textContent = trans + " ";
      }
    }
    const n1Title = container.querySelector(".local-node .node-text-title");
    if (n1Title) n1Title.textContent = t("s1_node1_title", n1Title.textContent);
    const n1Sub = container.querySelector(".local-node .node-text-sub");
    if (n1Sub) n1Sub.textContent = t("s1_node1_sub", n1Sub.textContent);

    const n2Title = container.querySelector(".git-node .node-text-title");
    if (n2Title) n2Title.textContent = t("s1_node2_title", n2Title.textContent);
    const n2Sub = container.querySelector(".git-node .node-text-sub");
    if (n2Sub) n2Sub.textContent = t("s1_node2_sub", n2Sub.textContent);

    const n3Title = container.querySelector(".github-node .node-text-title");
    if (n3Title) n3Title.textContent = t("s1_node3_title", n3Title.textContent);
    const n3Sub = container.querySelector(".github-node .node-text-sub");
    if (n3Sub) n3Sub.textContent = t("s1_node3_sub", n3Sub.textContent);
  }

  // Slide 2
  if (slideNum === 2) {
    const cards = container.querySelectorAll(".info-card");
    if (cards[0]) {
      const h4 = cards[0].querySelector("h4");
      if (h4) h4.textContent = t("s2_card1_title", h4.textContent);
      const p = cards[0].querySelector("p");
      if (p) p.textContent = t("s2_card1_p", p.textContent);
    }
    if (cards[1]) {
      const h4 = cards[1].querySelector("h4");
      if (h4) h4.textContent = t("s2_card2_title", h4.textContent);
      const p = cards[1].querySelector("p");
      if (p) p.textContent = t("s2_card2_p", p.textContent);
    }
    const termTitle = container.querySelector(".terminal-title");
    if (termTitle) termTitle.textContent = t("s2_diag_title", termTitle.textContent);
  }

  // Slide 3
  if (slideNum === 3) {
    const cards = container.querySelectorAll(".info-card");
    if (cards[0]) {
      const h4 = cards[0].querySelector("h4");
      if (h4) h4.textContent = t("s3_without_title", h4.textContent);
    }
    if (cards[1]) {
      const h4 = cards[1].querySelector("h4");
      if (h4) h4.textContent = t("s3_with_title", h4.textContent);
    }
    const tip = container.querySelector(".alert-callout.tip div");
    if (tip) tip.textContent = t("s3_tip", tip.textContent);
  }

  // Slide 4
  if (slideNum === 4) {
    const ths = container.querySelectorAll("th");
    if (ths[0]) ths[0].textContent = t("s4_th_term", ths[0].textContent);
    if (ths[1]) ths[1].textContent = t("s4_th_meaning", ths[1].textContent);
    if (ths[2]) ths[2].textContent = t("s4_th_context", ths[2].textContent);

    const tds = container.querySelectorAll("td");
    if (tds[1]) tds[1].textContent = t("s4_t_repo_m", tds[1].textContent);
    if (tds[4]) tds[4].textContent = t("s4_t_commit_m", tds[4].textContent);
    if (tds[7]) tds[7].textContent = t("s4_t_branch_m", tds[7].textContent);
    if (tds[10]) tds[10].textContent = t("s4_t_remote_m", tds[10].textContent);
    if (tds[13]) tds[13].textContent = t("s4_t_origin_m", tds[13].textContent);
    if (tds[16]) tds[16].textContent = t("s4_t_push_m", tds[16].textContent);
    if (tds[19]) tds[19].textContent = t("s4_t_pull_m", tds[19].textContent);
    if (tds[22]) tds[22].textContent = t("s4_t_clone_m", tds[22].textContent);
    if (tds[25]) tds[25].textContent = t("s4_t_stage_m", tds[25].textContent);
  }

  // Slide 5
  if (slideNum === 5) {
    const tip = container.querySelector(".alert-callout.tip div");
    if (tip) tip.textContent = t("s5_tip", tip.textContent);
    const notH4 = container.querySelector(".info-card h4");
    if (notH4) notH4.textContent = t("s5_not_title", notH4.textContent);
    const notP = container.querySelector(".info-card p");
    if (notP) notP.textContent = t("s5_not_p", notP.textContent);
  }

  // Slide 6
  if (slideNum === 6) {
    const whyH4 = container.querySelector(".info-card h4");
    if (whyH4) whyH4.textContent = t("s6_why_title", whyH4.textContent);
    const whyP = container.querySelector(".info-card p");
    if (whyP) whyP.textContent = t("s6_why_p", whyP.textContent);
    const warn = container.querySelector(".alert-callout.warning div");
    if (warn) warn.innerHTML = t("s6_warn", warn.innerHTML);
  }

  // Slide 7
  if (slideNum === 7) {
    const cards = container.querySelectorAll(".info-card");
    if (cards[0] && cards[0].querySelector("h4")) {
      cards[0].querySelector("h4").textContent = t("s7_res_title", cards[0].querySelector("h4").textContent);
    }
    if (cards[1] && cards[1].querySelector("h4")) {
      cards[1].querySelector("h4").textContent = t("s7_what_title", cards[1].querySelector("h4").textContent);
    }
  }

  // Slide 8
  if (slideNum === 8) {
    const h4 = container.querySelector(".info-card h4");
    if (h4) h4.textContent = t("s8_hidden_title", h4.textContent);
    const warn = container.querySelector(".alert-callout.warning div");
    if (warn) warn.textContent = t("s8_hidden_warn", warn.textContent);
  }

  // Slide 9
  if (slideNum === 9) {
    const h4 = container.querySelector(".info-card h4");
    if (h4) h4.textContent = t("s9_untracked_title", h4.textContent);
    const ps = container.querySelectorAll(".info-card p");
    if (ps[0]) ps[0].textContent = t("s9_untracked_p1", ps[0].textContent);
    if (ps[1]) ps[1].textContent = t("s9_untracked_p2", ps[1].textContent);
    const tip = container.querySelector(".alert-callout.info div");
    if (tip) tip.textContent = t("s9_tip", tip.textContent);
  }

  // Slide 10
  if (slideNum === 10) {
    const h4 = container.querySelector(".info-card h4");
    if (h4) h4.textContent = t("s10_why_title", h4.textContent);
    const p = container.querySelector(".info-card p");
    if (p) p.textContent = t("s10_why_p", p.textContent);
  }

  // Slide 11
  if (slideNum === 11) {
    const h4 = container.querySelector(".info-card h4");
    if (h4) h4.textContent = t("s11_green_title", h4.textContent);
    const ps = container.querySelectorAll(".info-card p");
    if (ps[0]) ps[0].textContent = t("s11_green_p1", ps[0].textContent);
    if (ps[1]) ps[1].textContent = t("s11_green_p2", ps[1].textContent);
    const tip = container.querySelector(".alert-callout.tip div");
    if (tip) tip.textContent = t("s11_tip", tip.textContent);
  }

  // Slide 12
  if (slideNum === 12) {
    const tip = container.querySelector(".alert-callout.tip div");
    if (tip) tip.textContent = t("s12_tip", tip.textContent);
    const h4 = container.querySelector(".info-card h4");
    if (h4) h4.textContent = t("s12_pipeline_title", h4.textContent);
  }

  // Slide 13
  if (slideNum === 13) {
    const h4 = container.querySelector(".info-card h4");
    if (h4) h4.textContent = t("s13_hash_title", h4.textContent);
    const ps = container.querySelectorAll(".info-card p");
    if (ps[0]) ps[0].textContent = t("s13_hash_p1", ps[0].textContent);
    if (ps[1]) ps[1].textContent = t("s13_hash_p2", ps[1].textContent);
  }

  // Slide 14
  if (slideNum === 14) {
    const cards = container.querySelectorAll(".info-card");
    if (cards[0]) {
      const h4 = cards[0].querySelector("h4");
      if (h4) h4.textContent = t("s14_start_title", h4.textContent);
      const p = cards[0].querySelector("p");
      if (p) p.textContent = t("s14_start_p", p.textContent);
    }
    const tip = container.querySelector(".alert-callout.tip div");
    if (tip) tip.textContent = t("s14_tip", tip.textContent);
    if (cards[1]) {
      const h4 = cards[1].querySelector("h4");
      if (h4) h4.textContent = t("s14_platform_title", h4.textContent);
      const p = cards[1].querySelector("p");
      if (p) p.textContent = t("s14_platform_p", p.textContent);
    }
  }

  // Slide 15
  if (slideNum === 15) {
    const cards = container.querySelectorAll(".info-card");
    if (cards[0] && cards[0].querySelector("h4")) {
      cards[0].querySelector("h4").textContent = t("s15_steps_title", cards[0].querySelector("h4").textContent);
    }
    const warn = container.querySelector(".alert-callout.danger div");
    if (warn) warn.innerHTML = t("s15_tip_warn", warn.innerHTML);
    if (cards[1]) {
      const h4 = cards[1].querySelector("h4");
      if (h4) h4.textContent = t("s15_blank_title", h4.textContent);
      const p = cards[1].querySelector("p");
      if (p) p.textContent = t("s15_blank_p", p.textContent);
    }
  }

  // Slide 16
  if (slideNum === 16) {
    const h4 = container.querySelector(".info-card h4");
    if (h4) h4.textContent = t("s16_cmd_title", h4.textContent);
    const tip = container.querySelector(".alert-callout.info div");
    if (tip) tip.textContent = t("s16_tip", tip.textContent);
  }

  // Slide 17
  if (slideNum === 17) {
    const cards = container.querySelectorAll(".info-card");
    if (cards[0] && cards[0].querySelector("h4")) {
      cards[0].querySelector("h4").textContent = t("s17_https_title", cards[0].querySelector("h4").textContent);
    }
    if (cards[1] && cards[1].querySelector("h4")) {
      cards[1].querySelector("h4").textContent = t("s17_ssh_title", cards[1].querySelector("h4").textContent);
    }
  }

  // Slide 18
  if (slideNum === 18) {
    const tip = container.querySelector(".alert-callout.info div");
    if (tip) tip.textContent = t("s18_tip", tip.textContent);
    const h4 = container.querySelector(".info-card h4");
    if (h4) h4.textContent = t("s18_why_title", h4.textContent);
    const p = container.querySelector(".info-card p");
    if (p) p.textContent = t("s18_why_p", p.textContent);
  }

  // Slide 19
  if (slideNum === 19) {
    const h4 = container.querySelector(".info-card h4");
    if (h4) h4.textContent = t("s19_breakdown_title", h4.textContent);
  }

  // Slide 20
  if (slideNum === 20) {
    const h4 = container.querySelector(".info-card h4");
    if (h4) h4.textContent = t("s20_verify_title", h4.textContent);
  }

  // Slide 21
  if (slideNum === 21) {
    const h4 = container.querySelector(".info-card h4");
    if (h4) h4.textContent = t("s21_why_title", h4.textContent);
    const p = container.querySelector(".info-card p");
    if (p) p.textContent = t("s21_why_p", p.textContent);
    const tip = container.querySelector(".alert-callout.tip div");
    if (tip) tip.textContent = t("s21_tip", tip.textContent);
  }

  // Slide 22 / 23
  if (slideNum === 22 || slideNum === 23) {
    const h4 = container.querySelector(".info-card h4");
    if (h4) h4.textContent = t(`s${slideNum}_what_title`, t(`s${slideNum}_title`, h4.textContent));
    const p = container.querySelector(".info-card p");
    if (p) p.textContent = t(`s${slideNum}_what_p`, t(`s${slideNum}_sub`, p.textContent));
  }
}
