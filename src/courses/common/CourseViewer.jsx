import React, { useState, useEffect, useRef } from "react";
import { useLanguage, CourseLanguageContext } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Progress } from "../../components/ui/progress";
import { applyGitSlideTranslations } from "./gitSlideTranslator";

const LESSON_KEY_MAP = {
  git: "l1",
  github: "l2",
  nextjs: "l3",
  tailwindcss: "l4",
  shadcn: "l5",
  postgres: "l6",
  vercel: "l7",
  cloudflare: "l9",
  prompting: "l8",
};

const ACCENT_STYLES = {
  orange: {
    badge: "bg-orange-500/10 text-orange-400 border border-orange-500/30",
    selectText: "text-orange-400",
    progressIndicator: "bg-orange-500",
    nextBtn: "bg-orange-600 hover:bg-orange-500 text-white border-orange-500",
    overviewActive: "bg-orange-500/20 border-orange-500 text-white shadow-lg shadow-orange-500/10",
    overviewNum: "text-orange-400",
  },
  sky: {
    badge: "bg-sky-500/10 text-sky-400 border border-sky-500/30",
    selectText: "text-sky-400",
    progressIndicator: "bg-sky-500",
    nextBtn: "bg-sky-600 hover:bg-sky-500 text-white border-sky-500",
    overviewActive: "bg-sky-500/20 border-sky-500 text-white shadow-lg shadow-sky-500/10",
    overviewNum: "text-sky-400",
  },
  purple: {
    badge: "bg-purple-500/10 text-purple-400 border border-purple-500/30",
    selectText: "text-purple-400",
    progressIndicator: "bg-purple-500",
    nextBtn: "bg-purple-600 hover:bg-purple-500 text-white border-purple-500",
    overviewActive: "bg-purple-500/20 border-purple-500 text-white shadow-lg shadow-purple-500/10",
    overviewNum: "text-purple-400",
  },
  blue: {
    badge: "bg-blue-500/10 text-blue-400 border border-blue-500/30",
    selectText: "text-blue-400",
    progressIndicator: "bg-blue-500",
    nextBtn: "bg-blue-600 hover:bg-blue-500 text-white border-blue-500",
    overviewActive: "bg-blue-500/20 border-blue-500 text-white shadow-lg shadow-blue-500/10",
    overviewNum: "text-blue-400",
  },
  emerald: {
    badge: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30",
    selectText: "text-emerald-400",
    progressIndicator: "bg-emerald-500",
    nextBtn: "bg-emerald-600 hover:bg-emerald-500 text-white border-emerald-500",
    overviewActive: "bg-emerald-500/20 border-emerald-500 text-white shadow-lg shadow-emerald-500/10",
    overviewNum: "text-emerald-400",
  },
  indigo: {
    badge: "bg-indigo-500/10 text-indigo-400 border border-indigo-500/30",
    selectText: "text-indigo-400",
    progressIndicator: "bg-indigo-500",
    nextBtn: "bg-indigo-600 hover:bg-indigo-500 text-white border-indigo-500",
    overviewActive: "bg-indigo-500/20 border-indigo-500 text-white shadow-lg shadow-indigo-500/10",
    overviewNum: "text-indigo-400",
  },
  zinc: {
    badge: "bg-zinc-500/10 text-zinc-300 border border-zinc-500/30",
    selectText: "text-zinc-300",
    progressIndicator: "bg-zinc-400",
    nextBtn: "bg-zinc-700 hover:bg-zinc-600 text-white border-zinc-600",
    overviewActive: "bg-zinc-500/20 border-zinc-400 text-white shadow-lg shadow-zinc-500/10",
    overviewNum: "text-zinc-300",
  },
};

export default function CourseViewer({
  courseId,
  courseTitle,
  defaultPart = "MODULE",
  accent = "orange",
  slides = [],
  initialSlide = 1,
}) {
  const { lang, toggleLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const courseT = (key, fallback = "") => t(key, fallback, courseId);
  const lKey = LESSON_KEY_MAP[courseId];
  const displayCourseTitle = lKey ? t(`${lKey}_title`, courseTitle) : courseTitle;

  const totalSlides = slides.length;
  const validInitial = Math.max(0, Math.min(initialSlide - 1, totalSlides - 1));
  const [currentIndex, setCurrentIndex] = useState(validInitial);
  const [overviewOpen, setOverviewOpen] = useState(false);
  const [shortcutsOpen, setShortcutsOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const slideContainerRef = useRef(null);
  const colors = ACCENT_STYLES[accent] || ACCENT_STYLES.orange;

  const getSlideCleanTitle = (s, idx) => {
    const num = idx + 1;
    const titleVal = courseT(`s${num}_head`, courseT(`s${num}_title`, s.title));
    return (titleVal || s.title || "").replace(/<[^>]*>/g, " ").trim();
  };

  // Sync slide hash to URL
  useEffect(() => {
    window.location.hash = `#/course/${courseId}/${currentIndex + 1}`;
  }, [currentIndex, courseId]);

  // Handle i18n replacements inside rendered slide content
  useEffect(() => {
    if (!slideContainerRef.current) return;

    // Text elements with data-i18n
    const elements = slideContainerRef.current.querySelectorAll("[data-i18n]");
    elements.forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const translated = courseT(key);
      if (translated && translated !== key) {
        el.textContent = translated;
      }
    });

    // HTML elements with data-i18n-html
    const htmlElements = slideContainerRef.current.querySelectorAll("[data-i18n-html]");
    htmlElements.forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      const translated = courseT(key);
      if (translated && translated !== key) {
        el.innerHTML = translated;
      }
    });

    // Translate slide title and subtitle inside slide component if present
    const slideNum = currentIndex + 1;
    const titleEl = slideContainerRef.current.querySelector(".slide-title, .title-main-h1");
    if (titleEl) {
      const transTitle = courseT(`s${slideNum}_head`, courseT(`s${slideNum}_title`));
      if (transTitle && transTitle !== `s${slideNum}_title` && transTitle !== `s${slideNum}_head`) {
        titleEl.innerHTML = transTitle;
      }
    }

    const subEl = slideContainerRef.current.querySelector(".slide-subtitle, .title-tagline");
    if (subEl) {
      const transSub = courseT(`s${slideNum}_sub`, courseT(`s${slideNum}_desc`));
      if (transSub && transSub !== `s${slideNum}_sub` && transSub !== `s${slideNum}_desc`) {
        subEl.innerHTML = transSub;
      }
    }

    const metaEl = slideContainerRef.current.querySelector(".slide-meta-label");
    if (metaEl) {
      const transMeta = courseT(`s${slideNum}_cat`, courseT(`p${slideNum}_badge`));
      if (transMeta && transMeta !== `s${slideNum}_cat` && transMeta !== `p${slideNum}_badge`) {
        metaEl.textContent = transMeta;
      }
    }

    // Run Git-specific element translation
    if (courseId === "git" || courseId === "github") {
      applyGitSlideTranslations(slideContainerRef.current, slideNum, courseT, lang);
    }

    const copyBtns = slideContainerRef.current.querySelectorAll(".btn-copy, .copy-btn");
    copyBtns.forEach((btn) => {
      btn.onclick = () => {
        const textToCopy =
          btn.getAttribute("data-copy") ||
          btn.closest(".terminal-window, .terminal-mockup, .code-box")
            ?.querySelector(".terminal-body, pre, code")?.innerText ||
          "";
        if (textToCopy) {
          navigator.clipboard.writeText(textToCopy.trim()).then(() => {
            const original = btn.innerText;
            btn.innerText = t("ui_copied", "Copied!");
            setTimeout(() => {
              btn.innerText = original;
            }, 1800);
          });
        }
      };
    });
  }, [currentIndex, lang, courseId]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (["INPUT", "SELECT", "TEXTAREA"].includes(e.target.tagName)) return;

      if (e.key === "ArrowRight" || e.key === " " || e.key === "l" || e.key === "L") {
        e.preventDefault();
        setCurrentIndex((prev) => Math.min(prev + 1, totalSlides - 1));
      } else if (e.key === "ArrowLeft" || e.key === "h" || e.key === "H") {
        e.preventDefault();
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === "Home") {
        e.preventDefault();
        setCurrentIndex(0);
      } else if (e.key === "End") {
        e.preventDefault();
        setCurrentIndex(totalSlides - 1);
      } else if (e.key === "o" || e.key === "O") {
        e.preventDefault();
        setOverviewOpen((prev) => !prev);
      } else if (e.key === "?" || (e.shiftKey && e.key === "/")) {
        e.preventDefault();
        setShortcutsOpen((prev) => !prev);
      } else if (e.key === "f" || e.key === "F") {
        e.preventDefault();
        toggleFullscreenMode();
      } else if (e.key === "t" || e.key === "T") {
        e.preventDefault();
        toggleTheme();
      } else if (e.key === "Escape") {
        setOverviewOpen(false);
        setShortcutsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [totalSlides, toggleTheme]);

  const toggleFullscreenMode = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFsChange);
    return () => document.removeEventListener("fullscreenchange", handleFsChange);
  }, []);

  if (totalSlides === 0) {
    return (
      <div className="flex items-center justify-center h-screen bg-slate-900 text-white">
        <div className="text-center">
          <h2 className="text-xl font-bold mb-2">No slides found for {courseTitle}</h2>
          <a href="#/" className="text-orange-400 underline">Return Home</a>
        </div>
      </div>
    );
  }

  const currentSlide = slides[currentIndex] || slides[0];
  const CurrentSlideComponent = currentSlide.Component;
  const progressPercent = Math.round(((currentIndex + 1) / totalSlides) * 100);

  return (
    <CourseLanguageContext.Provider value={{ courseId }}>
      <div
        id="app-container"
        className="flex flex-col h-screen w-screen overflow-hidden bg-slate-900 text-white font-sans select-none"
      >
        {/* Top Header Bar */}
        <header className="top-bar flex items-center justify-between h-[54px] px-4 bg-slate-900 border-b border-slate-800 z-50 shrink-0">
          <div className="flex items-center gap-3">
            <a
              href="#/"
              className="flex items-center gap-2 text-white no-underline hover:opacity-85 transition-opacity"
              title="Return to Synergy Lessons"
            >
              <img
                src="/images/synergy.png"
                alt="Synergy Logo"
                className="w-7 h-7 object-contain"
              />
              <span className="font-extrabold text-sm tracking-tight hidden md:inline">
                SYNERGY
              </span>
            </a>

            <div className="h-4 w-px bg-slate-800 hidden sm:block" />

            <span className="course-title-text font-bold text-xs sm:text-sm text-slate-200 truncate max-w-[180px] sm:max-w-[260px] md:max-w-none">
              {displayCourseTitle}
            </span>

            <Badge
              variant="default"
              className={`hidden sm:inline-flex text-[11px] ${colors.badge}`}
            >
              {courseT(currentSlide.partKey || `part_${currentIndex + 1}`, currentSlide.part || defaultPart)}
            </Badge>
          </div>

          <div className="top-controls flex items-center gap-1.5">
            {/* Jump to Slide dropdown */}
            <div className="slide-counter-wrapper h-[34px] px-2.5 rounded-lg flex items-center gap-1.5 text-xs text-slate-300 bg-slate-900 border border-slate-800">
              <span>{t("ui_slide", "Slide")}</span>
              <select
                value={currentIndex}
                onChange={(e) => setCurrentIndex(Number(e.target.value))}
                className={`bg-transparent ${colors.selectText} text-xs font-bold cursor-pointer px-1 outline-none border-0 [&_option]:bg-slate-800 [&_option]:text-white`}
                title="Jump to slide"
              >
                {slides.map((s, idx) => (
                  <option key={s.id || idx} value={idx}>
                    {idx + 1} - {getSlideCleanTitle(s, idx)}
                  </option>
                ))}
              </select>
              <span>
                {t("ui_of", "of")}{" "}
                <span className="font-bold text-white">{totalSlides}</span>
              </span>
            </div>

          {/* Language Toggle */}
          <Button
            variant="outline"
            size="icon"
            onClick={toggleLang}
            title="Toggle Language (English / ភាសាខ្មែរ)"
            aria-label="Toggle Language"
          >
            {lang === "en" ? (
              <img
                src="/images/en.png"
                alt="English"
                className="w-5 h-3.5 object-cover"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentNode.innerText = "EN";
                }}
              />
            ) : (
              <img
                src="/images/km.png"
                alt="Khmer"
                className="w-5 h-3.5 object-cover"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentNode.innerText = "KM";
                }}
              />
            )}
          </Button>

          {/* Overview Grid button */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => setOverviewOpen(true)}
            title="Slide Overview (O)"
            aria-label="Slide Overview (O)"
          >
            <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 16 16">
              <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 2.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z" />
            </svg>
          </Button>

          {/* Shortcuts button */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => setShortcutsOpen(true)}
            title="Keyboard Shortcuts (?)"
            aria-label="Keyboard Shortcuts (?)"
          >
            <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 16 16">
              <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 13a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm.75-2.25v-.5a1.75 1.75 0 1 0-3.5 0 .75.75 0 0 0 1.5 0 .25.25 0 0 1 .5 0v.5a.75.75 0 0 0 .75.75.75.75 0 0 0 .75-.75z" />
            </svg>
          </Button>

          {/* Theme button */}
          <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            title="Toggle Light / Dark Mode (T)"
            aria-label="Toggle Light / Dark Mode"
          >
            {theme === "dark" ? (
              <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 16 16">
                <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.79.79 0 0 1 .91.954 8 8 0 1 1-9.845-12.389A.8.8 0 0 1 6 .278z" />
              </svg>
            ) : (
              <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 16 16">
                <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
              </svg>
            )}
          </Button>

          {/* Fullscreen button */}
          <Button
            variant="outline"
            size="icon"
            onClick={toggleFullscreenMode}
            title="Toggle Fullscreen (F)"
            aria-label="Toggle Fullscreen"
          >
            <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 16 16">
              <path d="M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 1 0V2h3.5a.5.5 0 0 0 0-1h-4zm10 0a.5.5 0 0 0 0 1H15v3.5a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-.5-.5h-4zM1 10.5a.5.5 0 0 0 0 1V15h3.5a.5.5 0 0 0 0-1H2v-3.5a.5.5 0 0 0-1 0zm14.5.5a.5.5 0 0 0-1 0V14h-3.5a.5.5 0 0 0 0 1H15a.5.5 0 0 0 .5-.5v-4z" />
            </svg>
          </Button>
        </div>
      </header>

      {/* Main Slide Viewport: Centers the 80% presentation card */}
      <main className="slide-viewport flex-1 h-[calc(100vh-104px)] flex items-center justify-center p-4 overflow-hidden relative">
        <div className="slides-container w-full max-w-7xl h-full mx-auto flex items-center justify-center">
          <section
            key={currentSlide.id}
            className="slide-item active w-full max-w-7xl h-full mx-auto flex flex-col justify-center items-center"
          >
            <div
              ref={slideContainerRef}
              className="slide-content-card w-full max-w-7xl h-[80%] min-h-[80%] bg-slate-900 border border-slate-800 p-6 flex flex-col justify-between gap-4 shadow-2xl overflow-y-auto rounded-xl"
            >
              {CurrentSlideComponent ? (
                <CurrentSlideComponent
                  onStart={() => setCurrentIndex(1)}
                  onRestart={() => setCurrentIndex(0)}
                />
              ) : (
                <div className="text-center text-slate-400 py-10">Slide content unavailable</div>
              )}
            </div>
          </section>
        </div>
      </main>

      {/* Bottom Navigation Bar */}
      <footer className="bottom-bar flex items-center justify-between h-[50px] px-4 bg-slate-900 border-t border-slate-800 z-50 shrink-0 text-xs text-slate-400">
        <div className="progress-section flex items-center gap-3">
          <Progress
            value={progressPercent}
            className="w-28 sm:w-36 h-2 bg-slate-800"
            indicatorClassName={colors.progressIndicator}
          />
          <span className="text-xs text-slate-300 font-bold hidden sm:inline">
            {progressPercent}%
          </span>
          <span className="text-slate-400 text-[11px] truncate max-w-[200px] hidden md:inline">
            {currentSlide.part || defaultPart}
          </span>
        </div>

        <div className="keyboard-hints hidden lg:flex items-center gap-2 text-slate-400 text-xs">
          <span>{t("ui_nav_hint", "Navigation:")}</span>
          <span>
            <kbd className="kbd px-1.5 py-0.5 bg-slate-800 border border-slate-700 text-slate-200 text-[11px]">
              ←
            </kbd>{" "}
            /{" "}
            <kbd className="kbd px-1.5 py-0.5 bg-slate-800 border border-slate-700 text-slate-200 text-[11px]">
              →
            </kbd>{" "}
            or{" "}
            <kbd className="kbd px-1.5 py-0.5 bg-slate-800 border border-slate-700 text-slate-200 text-[11px]">
              Space
            </kbd>
          </span>
          <span>
            <kbd className="kbd px-1.5 py-0.5 bg-slate-800 border border-slate-700 text-slate-200 text-[11px]">
              O
            </kbd>{" "}
            Overview
          </span>
          <span>
            <kbd className="kbd px-1.5 py-0.5 bg-slate-800 border border-slate-700 text-slate-200 text-[11px]">
              F
            </kbd>{" "}
            Fullscreen
          </span>
          <span>
            <kbd className="kbd px-1.5 py-0.5 bg-slate-800 border border-slate-700 text-slate-200 text-[11px]">
              T
            </kbd>{" "}
            Theme
          </span>
        </div>

        <div className="nav-buttons flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
            disabled={currentIndex === 0}
            className="h-8 px-3 text-xs flex items-center gap-1 bg-slate-800 hover:bg-slate-700 text-white border-slate-700 disabled:opacity-40"
            title="Previous Slide (Left Arrow or H)"
          >
            ← {t("ui_prev", "Prev")}
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              setCurrentIndex((prev) => Math.min(prev + 1, totalSlides - 1))
            }
            disabled={currentIndex === totalSlides - 1}
            className={`h-8 px-3 text-xs flex items-center gap-1 ${colors.nextBtn} disabled:opacity-40`}
            title="Next Slide (Right Arrow or Space)"
          >
            {t("ui_next", "Next")} →
          </Button>
        </div>
      </footer>

      {/* Slide Overview Grid Modal */}
      {overviewOpen && (
        <div
          className="overview-modal fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={() => setOverviewOpen(false)}
        >
          <div
            className="overview-content w-full max-w-5xl max-h-[85vh] bg-slate-900 border border-slate-800 rounded-lg p-5 flex flex-col gap-4 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="font-bold text-base text-white">
                  {t("ui_overview_title", `${displayCourseTitle} Slide Overview`)}
                </span>
                <span className="text-xs text-slate-400">
                  ({totalSlides} {t("ui_slides", "slides")})
                </span>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setOverviewOpen(false)}
                className="h-8 px-2.5 text-xs bg-slate-800 text-slate-200 border-slate-700"
              >
                {t("ui_close", "Close (Esc)")}
              </Button>
            </div>

            <div className="overview-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 overflow-y-auto p-1">
              {slides.map((slide, idx) => {
                const num = idx + 1;
                const slideTitle = getSlideCleanTitle(slide, idx);
                const slidePart = courseT(
                  slide.partKey || `part_${num}`,
                  slide.part || defaultPart
                );

                return (
                  <button
                    key={slide.id || idx}
                    type="button"
                    onClick={() => {
                      setCurrentIndex(idx);
                      setOverviewOpen(false);
                    }}
                    className={`p-3 rounded-lg border text-left flex flex-col gap-1.5 transition-all cursor-pointer ${
                      currentIndex === idx
                        ? colors.overviewActive
                        : "bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-900"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] ${colors.overviewNum} font-bold`}>
                        #{num}
                      </span>
                      <span className="text-[9px] text-slate-500 uppercase truncate max-w-[80px]">
                        {slidePart}
                      </span>
                    </div>
                    <div className="text-xs font-bold truncate text-white">
                      {slideTitle}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Keyboard Shortcuts Modal */}
      {shortcutsOpen && (
        <div
          className="shortcuts-modal fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={() => setShortcutsOpen(false)}
        >
          <div
            className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-lg p-5 flex flex-col gap-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="font-bold text-sm text-white">
                {t("ui_shortcuts_title", "Keyboard Navigation Shortcuts")}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShortcutsOpen(false)}
                className="h-8 px-2.5 text-xs bg-slate-800 text-slate-200 border-slate-700"
              >
                {t("ui_close", "Close (Esc)")}
              </Button>
            </div>
            <div className="flex flex-col gap-2 text-xs">
              <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                <span className="text-slate-300">{t("ui_next", "Next Slide")}</span>
                <span className="text-slate-400">Right Arrow / Space / L</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                <span className="text-slate-300">{t("ui_prev", "Previous Slide")}</span>
                <span className="text-slate-400">Left Arrow / H</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                <span className="text-slate-300">First / Last Slide</span>
                <span className="text-slate-400">Home / End</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                <span className="text-slate-300">Slide Overview Grid</span>
                <span className="text-slate-400">O</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                <span className="text-slate-300">Toggle Fullscreen</span>
                <span className="text-slate-400">F</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-slate-300">
                  Toggle Theme (Light / Dark)
                </span>
                <span className="text-slate-400">T</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    </CourseLanguageContext.Provider>
  );
}
