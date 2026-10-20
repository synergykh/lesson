import React, { useEffect, useState, useRef } from 'react';
import { loadCourseData } from '../data/coursesIndex';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { CourseIcon } from '../components/CourseIcons';

export default function SlideViewer({ courseId, initialSlide = 1 }) {
  const { lang, toggleLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(initialSlide - 1);
  const [overviewOpen, setOverviewOpen] = useState(false);
  const [shortcutsOpen, setShortcutsOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const slideRef = useRef(null);
  const appContainerRef = useRef(null);

  // Load course data
  useEffect(() => {
    let mounted = true;
    setLoading(true);
    setError(null);

    loadCourseData(courseId)
      .then((data) => {
        if (!mounted) return;
        setCourseData(data);
        const validIndex = Math.max(0, Math.min(initialSlide - 1, data.slides.length - 1));
        setCurrentIndex(validIndex);
        setLoading(false);
      })
      .catch((err) => {
        if (!mounted) return;
        setError(err.message);
        setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, [courseId, initialSlide]);

  // Sync slide hash to URL
  useEffect(() => {
    if (courseData && courseData.slides[currentIndex]) {
      window.location.hash = `#/course/${courseId}/${currentIndex + 1}`;
    }
  }, [currentIndex, courseId, courseData]);

  // Handle i18n translation replacements inside the rendered slide HTML
  useEffect(() => {
    if (!slideRef.current || !courseData) return;

    const elements = slideRef.current.querySelectorAll('[data-i18n]');
    elements.forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const translated = t(key);
      if (translated && translated !== key) {
        el.innerHTML = translated;
      }
    });

    // Also handle copy buttons inside terminal/code blocks
    const copyBtns = slideRef.current.querySelectorAll('.btn-copy');
    copyBtns.forEach((btn) => {
      btn.onclick = () => {
        const terminalBody = btn.closest('.terminal-window')?.querySelector('.terminal-body');
        if (terminalBody) {
          navigator.clipboard.writeText(terminalBody.innerText).then(() => {
            const original = btn.innerText;
            btn.innerText = 'Copied!';
            setTimeout(() => {
              btn.innerText = original;
            }, 1800);
          });
        }
      };
    });

    // Also handle start-course button on slide 1
    const startBtn = slideRef.current.querySelector('#btn-start-course, .btn-start-course');
    if (startBtn) {
      startBtn.onclick = () => {
        setCurrentIndex(1);
      };
    }
  }, [lang, currentIndex, courseData, t]);

  // Keyboard navigation
  useEffect(() => {
    if (!courseData) return;
    const total = courseData.slides.length;

    const handleKeyDown = (e) => {
      // Don't trigger if inside an input or select
      if (['INPUT', 'SELECT', 'TEXTAREA'].includes(e.target.tagName)) return;

      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'l' || e.key === 'L') {
        e.preventDefault();
        setCurrentIndex((prev) => Math.min(prev + 1, total - 1));
      } else if (e.key === 'ArrowLeft' || e.key === 'Backspace' || e.key === 'h' || e.key === 'H') {
        e.preventDefault();
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === 'Home') {
        e.preventDefault();
        setCurrentIndex(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        setCurrentIndex(total - 1);
      } else if (e.key === 'o' || e.key === 'O' || e.key === 'g' || e.key === 'G') {
        e.preventDefault();
        setOverviewOpen((prev) => !prev);
      } else if (e.key === '?' || (e.key === '/' && e.shiftKey)) {
        e.preventDefault();
        setShortcutsOpen((prev) => !prev);
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        toggleFullscreenMode();
      } else if (e.key === 't' || e.key === 'T') {
        e.preventDefault();
        toggleTheme();
      } else if (e.key === 'Escape') {
        setOverviewOpen(false);
        setShortcutsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [courseData, toggleTheme]);

  const toggleFullscreenMode = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.().catch(() => {});
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const onFsChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', onFsChange);
    return () => document.removeEventListener('fullscreenchange', onFsChange);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-screen bg-slate-950 text-white flex flex-col items-center justify-center gap-3">
        <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent animate-spin"></div>
        <span className="font-mono text-xs text-slate-400">Loading lesson slides...</span>
      </div>
    );
  }

  if (error || !courseData) {
    return (
      <div className="h-screen w-screen bg-slate-950 text-white flex flex-col items-center justify-center gap-4 p-4 text-center">
        <h2 className="text-xl font-bold text-red-400">Error Loading Course</h2>
        <p className="text-sm text-slate-400">{error || 'Course not found'}</p>
        <a
          href="#/"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-colors"
        >
          Return to Curriculum Hub
        </a>
      </div>
    );
  }

  const slides = courseData.slides;
  const currentSlide = slides[currentIndex] || slides[0];
  const totalSlides = slides.length;
  const progressPercent = Math.round(((currentIndex + 1) / totalSlides) * 100);

  return (
    <div
      ref={appContainerRef}
      id="app-container"
      className="flex flex-col h-screen w-screen relative bg-slate-950 overflow-hidden"
    >
      {/* Top Navigation Bar */}
      <header className="top-bar flex items-center justify-between h-[54px] px-4 bg-slate-900 border-b border-slate-800 z-50 shrink-0">
        <div className="brand-section flex items-center gap-3">
          <a
            href="#/"
            className="brand-logo flex items-center gap-2 font-extrabold text-[15px] text-white hover:text-blue-400 transition-colors no-underline"
            title="Back to Curriculum Hub"
          >
            <div className="w-6 h-6 flex items-center justify-center text-blue-400">
              <CourseIcon id={courseId} className="w-5 h-5" />
            </div>
            <span className="hidden sm:inline">{courseData.title.split(':')[0]}</span>
          </a>
          <span
            id="current-part-badge"
            className="part-badge inline-flex items-center text-[11px] font-bold uppercase tracking-wider px-2 py-1 bg-blue-600/15 text-blue-400 border border-blue-500/30 font-mono"
          >
            {currentSlide.part || 'SECTION'}
          </span>
        </div>

        <div className="top-controls flex items-center gap-2">
          {/* Jump to Slide dropdown */}
          <div className="slide-counter-wrapper h-[34px] px-2.5 flex items-center gap-1.5 text-xs font-mono text-slate-300 bg-slate-950 border border-slate-800">
            <span>{t('ui_slide', 'Slide')}</span>
            <select
              value={currentIndex}
              onChange={(e) => setCurrentIndex(Number(e.target.value))}
              className="bg-transparent text-blue-400 font-mono text-xs font-bold cursor-pointer px-1 outline-none border-0 [&_option]:bg-slate-800 [&_option]:text-white"
              title="Jump to slide"
            >
              {slides.map((s, idx) => (
                <option key={s.id} value={idx}>
                  {idx + 1}
                </option>
              ))}
            </select>
            <span>
              {t('ui_of', 'of')} <span className="font-bold text-white">{totalSlides}</span>
            </span>
          </div>

          {/* Language Toggle */}
          <button
            onClick={toggleLang}
            className="btn-icon w-[34px] h-[34px] p-0 border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors flex items-center justify-center cursor-pointer shrink-0"
            title="Toggle Language (English / ភាសាខ្មែរ)"
            aria-label="Toggle Language"
          >
            {lang === 'en' ? (
              <img
                src="/images/en.png"
                alt="English"
                className="w-5 h-3.5 object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentNode.innerText = 'EN';
                }}
              />
            ) : (
              <img
                src="/images/km.png"
                alt="Khmer"
                className="w-5 h-3.5 object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentNode.innerText = 'KM';
                }}
              />
            )}
          </button>

          {/* Overview Grid button */}
          <button
            onClick={() => setOverviewOpen(true)}
            className="btn-icon w-[34px] h-[34px] p-0 border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors flex items-center justify-center cursor-pointer shrink-0"
            title="Slide Overview (O)"
            aria-label="Slide Overview (O)"
          >
            <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 16 16">
              <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 2.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z" />
            </svg>
          </button>

          {/* Shortcuts button */}
          <button
            onClick={() => setShortcutsOpen(true)}
            className="btn-icon w-[34px] h-[34px] p-0 border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors flex items-center justify-center cursor-pointer shrink-0"
            title="Keyboard Shortcuts (?)"
            aria-label="Keyboard Shortcuts (?)"
          >
            <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 16 16">
              <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 13a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm.75-2.25v-.5a1.75 1.75 0 1 0-3.5 0 .75.75 0 0 0 1.5 0 .25.25 0 0 1 .5 0v.5a.75.75 0 0 0 .75.75.75.75 0 0 0 .75-.75z" />
            </svg>
          </button>

          {/* Theme button */}
          <button
            onClick={toggleTheme}
            className="btn-icon w-[34px] h-[34px] p-0 border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors flex items-center justify-center cursor-pointer shrink-0"
            title="Toggle Light / Dark Mode (T)"
            aria-label="Toggle Light / Dark Mode"
          >
            {theme === 'dark' ? (
              <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 16 16">
                <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.79.79 0 0 1 .91.954 8 8 0 1 1-9.845-12.389A.8.8 0 0 1 6 .278z" />
              </svg>
            ) : (
              <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 16 16">
                <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
              </svg>
            )}
          </button>

          {/* Fullscreen button */}
          <button
            onClick={toggleFullscreenMode}
            className="btn-icon w-[34px] h-[34px] p-0 border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors flex items-center justify-center cursor-pointer shrink-0"
            title="Toggle Fullscreen (F)"
            aria-label="Toggle Fullscreen"
          >
            <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 16 16">
              <path d="M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 1 0V2h3.5a.5.5 0 0 0 0-1h-4zm10 0a.5.5 0 0 0 0 1H15v3.5a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-.5-.5h-4zM1 10.5a.5.5 0 0 0 0 1V15h3.5a.5.5 0 0 0 0-1H2v-3.5a.5.5 0 0 0-1 0zm14.5.5a.5.5 0 0 0-1 0V14h-3.5a.5.5 0 0 0 0 1H15a.5.5 0 0 0 .5-.5v-4z" />
            </svg>
          </button>
        </div>
      </header>

      {/* Main Slide Viewport (width 7xl, height 70% inner card) */}
      <main className="slide-viewport flex-1 h-[calc(100vh-104px)] flex items-center justify-center p-4 overflow-y-auto overflow-x-hidden relative">
        <div
          ref={slideRef}
          className="slides-container w-full max-w-7xl h-full mx-auto flex items-center justify-center"
          dangerouslySetInnerHTML={{ __html: currentSlide.html }}
        />
      </main>

      {/* Bottom Navigation Bar */}
      <footer className="bottom-bar flex items-center justify-between h-[50px] px-4 bg-slate-900 border-t border-slate-800 z-50 shrink-0 text-xs text-slate-400">
        <div className="progress-section flex items-center gap-3">
          <div className="progress-bar-wrap w-28 sm:w-36 h-2 bg-slate-800 border border-slate-700 overflow-hidden">
            <div
              className="progress-bar-fill h-full bg-blue-600 transition-all duration-200"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <span className="font-mono text-xs text-slate-300 font-bold hidden sm:inline">
            {progressPercent}%
          </span>
          <span className="text-slate-400 font-mono text-[11px] truncate max-w-[200px] hidden md:inline">
            {currentSlide.part}
          </span>
        </div>

        <div className="keyboard-hints hidden lg:flex items-center gap-2 text-slate-400 text-xs">
          <span>{t('ui_nav', 'Navigation')}:</span>
          <span>
            <kbd className="kbd px-1 py-0.5 bg-slate-800 border border-slate-700 text-slate-200 text-[11px] font-mono">
              ←
            </kbd>{' '}
            /{' '}
            <kbd className="kbd px-1 py-0.5 bg-slate-800 border border-slate-700 text-slate-200 text-[11px] font-mono">
              →
            </kbd>{' '}
            or{' '}
            <kbd className="kbd px-1.5 py-0.5 bg-slate-800 border border-slate-700 text-slate-200 text-[11px] font-mono">
              Space
            </kbd>
          </span>
          <span>
            <kbd className="kbd px-1.5 py-0.5 bg-slate-800 border border-slate-700 text-slate-200 text-[11px] font-mono">
              O
            </kbd>{' '}
            Overview
          </span>
          <span>
            <kbd className="kbd px-1.5 py-0.5 bg-slate-800 border border-slate-700 text-slate-200 text-[11px] font-mono">
              F
            </kbd>{' '}
            Fullscreen
          </span>
          <span>
            <kbd className="kbd px-1.5 py-0.5 bg-slate-800 border border-slate-700 text-slate-200 text-[11px] font-mono">
              T
            </kbd>{' '}
            Theme
          </span>
        </div>

        <div className="nav-buttons-group flex items-center gap-2">
          <button
            onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
            disabled={currentIndex === 0}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed border border-slate-700 hover:border-slate-600 text-white text-xs font-bold transition-colors cursor-pointer"
            title="Previous Slide (Left Arrow)"
          >
            <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
              <path d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
            </svg>
            <span>{t('ui_prev', 'Previous')}</span>
          </button>

          <button
            onClick={() => setCurrentIndex((prev) => Math.min(totalSlides - 1, prev + 1))}
            disabled={currentIndex === totalSlides - 1}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-600 hover:bg-blue-500 disabled:opacity-40 disabled:cursor-not-allowed text-white text-xs font-bold transition-colors cursor-pointer"
            title="Next Slide (Right Arrow or Space)"
          >
            <span>{t('ui_next', 'Next')}</span>
            <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
              <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </button>
        </div>
      </footer>

      {/* Slide Overview Modal */}
      {overviewOpen && (
        <div className="fixed inset-0 bg-slate-950/85 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="w-full max-w-[900px] max-h-[85vh] bg-slate-900 border border-slate-800 p-4 shadow-2xl flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="text-base font-extrabold text-white m-0">
                Slide Overview ({totalSlides} Slides)
              </div>
              <button
                onClick={() => setOverviewOpen(false)}
                className="bg-transparent border-0 text-slate-400 hover:text-white text-lg cursor-pointer px-1"
                title="Close (Esc)"
              >
                ✕
              </button>
            </div>
            <div className="overflow-y-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 p-1">
              {slides.map((s, idx) => (
                <div
                  key={s.id}
                  onClick={() => {
                    setCurrentIndex(idx);
                    setOverviewOpen(false);
                  }}
                  className={`p-2.5 border cursor-pointer flex flex-col gap-1 transition-colors ${
                    currentIndex === idx
                      ? 'border-blue-500 bg-blue-950/40'
                      : 'bg-slate-800 border-slate-700 hover:border-blue-500'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] font-bold text-blue-400">
                      #{idx + 1}
                    </span>
                    <span className="text-[10px] font-mono uppercase text-slate-400 truncate max-w-[120px]">
                      {s.part}
                    </span>
                  </div>
                  <div className="text-xs font-bold text-white line-clamp-2 leading-snug">
                    {s.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Shortcuts Modal */}
      {shortcutsOpen && (
        <div className="fixed inset-0 bg-slate-950/85 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="w-full max-w-[520px] max-h-[85vh] bg-slate-900 border border-slate-800 p-4 shadow-2xl flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="text-base font-extrabold text-white m-0">
                Keyboard Navigation &amp; Shortcuts
              </div>
              <button
                onClick={() => setShortcutsOpen(false)}
                className="bg-transparent border-0 text-slate-400 hover:text-white text-lg cursor-pointer px-1"
                title="Close (Esc)"
              >
                ✕
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="flex items-center justify-between p-2.5 bg-slate-800 border border-slate-700 text-slate-300">
                <span>Next Slide</span>
                <span className="font-mono text-slate-200 font-bold">→ / Space</span>
              </div>
              <div className="flex items-center justify-between p-2.5 bg-slate-800 border border-slate-700 text-slate-300">
                <span>Previous Slide</span>
                <span className="font-mono text-slate-200 font-bold">← / Backspace</span>
              </div>
              <div className="flex items-center justify-between p-2.5 bg-slate-800 border border-slate-700 text-slate-300">
                <span>First Slide</span>
                <span className="font-mono text-slate-200 font-bold">Home</span>
              </div>
              <div className="flex items-center justify-between p-2.5 bg-slate-800 border border-slate-700 text-slate-300">
                <span>Last Slide</span>
                <span className="font-mono text-slate-200 font-bold">End</span>
              </div>
              <div className="flex items-center justify-between p-2.5 bg-slate-800 border border-slate-700 text-slate-300">
                <span>Slide Overview</span>
                <span className="font-mono text-slate-200 font-bold">O / G</span>
              </div>
              <div className="flex items-center justify-between p-2.5 bg-slate-800 border border-slate-700 text-slate-300">
                <span>Fullscreen</span>
                <span className="font-mono text-slate-200 font-bold">F</span>
              </div>
              <div className="flex items-center justify-between p-2.5 bg-slate-800 border border-slate-700 text-slate-300">
                <span>Theme Toggle</span>
                <span className="font-mono text-slate-200 font-bold">T</span>
              </div>
              <div className="flex items-center justify-between p-2.5 bg-slate-800 border border-slate-700 text-slate-300">
                <span>Close Modal</span>
                <span className="font-mono text-slate-200 font-bold">Esc</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
