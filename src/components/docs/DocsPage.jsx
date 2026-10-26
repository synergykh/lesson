import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Link as LinkIcon,
  Check,
  ArrowRight,
  BookOpen,
  ChevronRight,
  Clock,
  Sparkles,
} from "lucide-react";
import {
  useLanguage,
  CourseLanguageContext,
} from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import { getLessonByRoute, DOCS_NAVIGATION } from "../../data/docsNavigation";
import { loadCourseSlides } from "../../courses/slidesRegistry";
import { applyGitSlideTranslations } from "../../courses/common/gitSlideTranslator";

import DocsHeader from "./DocsHeader";
import DocsSidebar from "./DocsSidebar";
import DocsBreadcrumbs from "./DocsBreadcrumbs";
import DocsPagination from "./DocsPagination";
import DocsTableOfContents from "./DocsTableOfContents";
import DocsSearchModal from "./DocsSearchModal";

export default function DocsPage({ courseId, lessonNum = 1 }) {
  const { lang, t } = useLanguage();
  const { theme } = useTheme();

  const [slides, setSlides] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [desktopCollapsed, setDesktopCollapsed] = useState(() => {
    return localStorage.getItem("docs_sidebar_collapsed") === "true";
  });

  const [headings, setHeadings] = useState([]);
  const [activeHeadingId, setActiveHeadingId] = useState("");
  const contentContainerRef = useRef(null);

  const validNum = parseInt(lessonNum, 10) || 1;
  const routeData = getLessonByRoute(courseId, validNum);

  // Toggle desktop sidebar collapse
  const handleToggleDesktopSidebar = () => {
    setDesktopCollapsed((prev) => {
      const next = !prev;
      localStorage.setItem("docs_sidebar_collapsed", String(next));
      return next;
    });
  };

  // Load course slides dynamically
  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setError(null);

    loadCourseSlides(courseId)
      .then((loadedSlides) => {
        if (isMounted) {
          setSlides(loadedSlides);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          console.error("Failed to load slides for", courseId, err);
          setError(err.message || "Failed to load course content.");
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [courseId]);

  // Extract headings from rendered DOM for Right Table of Contents
  const extractHeadings = useCallback(() => {
    if (!contentContainerRef.current) return;

    const headingEls = contentContainerRef.current.querySelectorAll(
      "h2, h3, h4, .slide-title, .title-main-h1",
    );

    const items = [];
    headingEls.forEach((el, index) => {
      let rawText = el.innerText || el.textContent || "";
      rawText = rawText.replace(/#$/, "").trim();
      if (!rawText) return;

      // Assign stable ID if not present
      let id = el.id;
      if (!id) {
        id = `heading-${index}-${rawText
          .toLowerCase()
          .replace(/[^\w\s-]/g, "")
          .replace(/\s+/g, "-")
          .slice(0, 30)}`;
        el.id = id;
      }

      // Add relative anchor link if not already present
      if (!el.querySelector(".anchor-link")) {
        el.classList.add("group", "relative");
        const anchor = document.createElement("a");
        anchor.href = `#${id}`;
        anchor.className =
          "anchor-link opacity-0 group-hover:opacity-100 transition-opacity ml-2 text-slate-400 hover:text-orange-500 inline-block text-sm no-underline select-none";
        anchor.innerHTML = "#";
        anchor.title = "Direct link to this heading";
        anchor.onclick = (e) => {
          e.preventDefault();
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          history.replaceState(null, "", `#${id}`);
        };
        el.appendChild(anchor);
      }

      const tagName = el.tagName.toLowerCase();
      const level =
        tagName === "h2" || el.classList.contains("slide-title")
          ? 2
          : tagName === "h3"
            ? 3
            : 4;
      items.push({ id, text: rawText, level });
    });

    setHeadings(items);
    if (items.length > 0) {
      setActiveHeadingId(items[0].id);
    }
  }, []);

  // Set up IntersectionObserver for active heading highlight
  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) {
          setActiveHeadingId(visible.target.id);
        }
      },
      {
        rootMargin: "0px 0px -70% 0px",
        threshold: 0.1,
      },
    );

    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  // Handle slide translations & copy buttons on content mount / update
  useEffect(() => {
    if (!contentContainerRef.current) return;

    const courseT = (key, fallback = "") => t(key, fallback, courseId);
    const container = contentContainerRef.current;

    // 1. Text elements with data-i18n
    const elements = container.querySelectorAll("[data-i18n]");
    elements.forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const translated = courseT(key);
      if (translated && translated !== key) {
        el.textContent = translated;
      }
    });

    // 2. HTML elements with data-i18n-html
    const htmlElements = container.querySelectorAll("[data-i18n-html]");
    htmlElements.forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      const translated = courseT(key);
      if (translated && translated !== key) {
        el.innerHTML = translated;
      }
    });

    // 3. Translate slide title & subtitle
    const slideNum = validNum;
    const titleEl = container.querySelector(".slide-title, .title-main-h1");
    if (titleEl) {
      const transTitle = courseT(
        `s${slideNum}_head`,
        courseT(`s${slideNum}_title`),
      );
      if (
        transTitle &&
        transTitle !== `s${slideNum}_title` &&
        transTitle !== `s${slideNum}_head`
      ) {
        titleEl.innerHTML = transTitle;
      }
    }

    const subEl = container.querySelector(".slide-subtitle, .title-tagline");
    if (subEl) {
      const transSub = courseT(
        `s${slideNum}_sub`,
        courseT(`s${slideNum}_desc`),
      );
      if (
        transSub &&
        transSub !== `s${slideNum}_sub` &&
        transSub !== `s${slideNum}_desc`
      ) {
        subEl.innerHTML = transSub;
      }
    }

    // 4. Run Git-specific element translation
    if (courseId === "git" || courseId === "github") {
      applyGitSlideTranslations(container, slideNum, courseT, lang);
    }

    // 5. Connect copy buttons
    const copyBtns = container.querySelectorAll(".btn-copy, .copy-btn");
    copyBtns.forEach((btn) => {
      btn.onclick = () => {
        const textToCopy =
          btn.getAttribute("data-copy") ||
          btn
            .closest(
              ".terminal-window, .terminal-mockup, .code-box, .terminal-body",
            )
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

    // Extract headings for Table of Contents after DOM updates
    const timer = setTimeout(extractHeadings, 100);
    return () => clearTimeout(timer);
  }, [slides, validNum, courseId, lang, extractHeadings, t]);

  // Global Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (["INPUT", "TEXTAREA", "SELECT"].includes(e.target.tagName)) return;

      // Ctrl+K / Cmd+K: Open Search
      if ((e.ctrlKey || e.metaKey) && (e.key === "k" || e.key === "K")) {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
        return;
      }

      // [: Toggle Sidebar
      if (e.key === "[") {
        e.preventDefault();
        handleToggleDesktopSidebar();
        return;
      }

      // Escape: Close modals
      if (e.key === "Escape") {
        setSearchOpen(false);
        setMobileSidebarOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // 404 Not Found state
  if (!routeData) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white flex flex-col items-center justify-center p-4">
        <div className="text-center max-w-md flex flex-col items-center gap-3">
          <span className="text-4xl font-extrabold text-orange-500">404</span>
          <h1 className="text-xl font-bold">Lesson Not Found</h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            The documentation page you requested does not exist or may have
            moved.
          </p>
          <a
            href="#/"
            className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded bg-orange-600 hover:bg-orange-500 text-white text-xs font-semibold transition-colors"
          >
            Return to Curriculum Hub
          </a>
        </div>
      </div>
    );
  }

  const { course, section, lesson, prevLesson, nextLesson } = routeData;
  const slideIndex = Math.max(0, validNum - 1);
  const currentSlide = slides ? slides[slideIndex] : null;
  const CurrentSlideComponent = currentSlide?.Component || null;

  return (
    <CourseLanguageContext.Provider value={{ courseId }}>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans antialiased">
        {/* Sticky Header */}
        <DocsHeader
          currentCourseId={courseId}
          currentLessonNum={validNum}
          onOpenSearch={() => setSearchOpen(true)}
          mobileSidebarOpen={mobileSidebarOpen}
          onToggleMobileSidebar={() => setMobileSidebarOpen((prev) => !prev)}
          desktopSidebarOpen={!desktopCollapsed}
          onToggleDesktopSidebar={handleToggleDesktopSidebar}
        />

        {/* Search Command Palette Dialog */}
        <DocsSearchModal
          isOpen={searchOpen}
          onClose={() => setSearchOpen(false)}
        />

        {/* Main Documentation Body: Sidebar + Content Canvas + Right TOC */}
        <div className="flex-1 w-full flex">
          {/* Left Dynamic Sidebar */}
          <DocsSidebar
            currentCourseId={courseId}
            currentLessonNum={validNum}
            mobileOpen={mobileSidebarOpen}
            onCloseMobile={() => setMobileSidebarOpen(false)}
            desktopCollapsed={desktopCollapsed}
          />

          {/* Central Documentation Reading Canvas */}
          <main className="flex-1 min-w-0 flex justify-center p-4">
            <div className="w-full max-w-7xl flex flex-col min-h-[calc(100vh-5.5rem)] justify-between gap-6 pb-2">
              <div className="flex flex-col gap-4 flex-1">
                {/* Breadcrumb location trail */}
                <DocsBreadcrumbs
                  course={course}
                  section={section}
                  lesson={lesson}
                />

                {/* Lesson Top Meta Tag */}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-b border-slate-200 dark:border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                      {course.module} &bull; LESSON{" "}
                      {String(validNum).padStart(2, "0")}
                    </span>
                    <span className="text-[11px] text-slate-400 font-semibold uppercase">
                      {section.title?.[lang] || section.title?.en}
                    </span>
                  </div>

                  <div className="text-[11px] text-slate-400 flex items-center gap-2">
                    <span>
                      {validNum} of {course.totalLessons}
                    </span>
                  </div>
                </div>

                {/* Lesson Content Area */}
                {loading ? (
                  <div className="flex flex-col items-center justify-center py-24 gap-3">
                    <div className="w-8 h-8 border-2 border-orange-500 border-t-transparent rounded-full animate-spin" />
                    <span className="text-xs font-semibold text-slate-400">
                      Loading lesson content...
                    </span>
                  </div>
                ) : error ? (
                  <div className="p-4 rounded border border-rose-500/30 bg-rose-500/10 text-rose-300 text-xs">
                    {error}
                  </div>
                ) : (
                  <article className="docs-article flex flex-col gap-4 w-full flex-1">
                    <div
                      ref={contentContainerRef}
                      className="docs-content flex flex-col gap-4 w-full flex-1"
                    >
                      {CurrentSlideComponent ? (
                        <CurrentSlideComponent
                          onStart={() =>
                            (window.location.hash = `#/docs/${courseId}/2`)
                          }
                          onRestart={() =>
                            (window.location.hash = `#/docs/${courseId}/1`)
                          }
                        />
                      ) : (
                        <div className="py-12 text-center text-slate-400 text-xs">
                          Lesson content is being rendered.
                        </div>
                      )}
                    </div>
                  </article>
                )}
              </div>

              {/* Bottom Pagination: Previous / Next Lesson */}
              <DocsPagination
                prevLesson={prevLesson}
                nextLesson={nextLesson}
                className="mt-auto"
              />
            </div>
          </main>

          {/* Right On-This-Page Table of Contents */}
          <DocsTableOfContents headings={headings} activeId={activeHeadingId} />
        </div>
      </div>
    </CourseLanguageContext.Provider>
  );
}
