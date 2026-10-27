import React, { useState, useEffect, useRef } from "react";
import {
  ChevronDown,
  ChevronRight,
  GitBranch,
  FolderGit2,
  Globe,
  Palette,
  Layers,
  Database,
  Triangle,
  Cloud,
  Sparkles,
  FileText,
  X,
  BookOpen,
} from "lucide-react";
import { DOCS_NAVIGATION } from "../../data/docsNavigation";
import { useLanguage } from "../../context/LanguageContext";

const ICON_MAP = {
  GitBranch,
  FolderGit2,
  Globe,
  Palette,
  Layers,
  Database,
  Triangle,
  Cloud,
  Sparkles,
};

export default function DocsSidebar({
  currentCourseId,
  currentLessonNum,
  mobileOpen = false,
  onCloseMobile,
  desktopCollapsed = false,
}) {
  const { lang, t } = useLanguage();
  const [expandedSections, setExpandedSections] = useState({});
  const [expandedCourses, setExpandedCourses] = useState({ [currentCourseId]: true });
  const activeItemRef = useRef(null);

  // Auto-expand active course and section when route changes
  useEffect(() => {
    setExpandedCourses((prev) => ({ ...prev, [currentCourseId]: true }));

    const activeCourse = DOCS_NAVIGATION.find((c) => c.id === currentCourseId);
    if (activeCourse) {
      activeCourse.sections.forEach((sec) => {
        const hasActiveLesson = sec.lessons.some((l) => l.number === currentLessonNum);
        if (hasActiveLesson) {
          setExpandedSections((prev) => ({ ...prev, [sec.id]: true }));
        }
      });
    }
  }, [currentCourseId, currentLessonNum]);

  // Scroll active item into view on load
  useEffect(() => {
    if (activeItemRef.current) {
      activeItemRef.current.scrollIntoView({ block: "nearest" });
    }
  }, [currentCourseId, currentLessonNum, mobileOpen]);

  const toggleCourse = (courseId) => {
    setExpandedCourses((prev) => ({
      ...prev,
      [courseId]: !prev[courseId],
    }));
  };

  const toggleSection = (sectionId) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const handleLessonClick = (href) => {
    window.location.hash = href;
    if (onCloseMobile) {
      onCloseMobile();
    }
  };

  // Content tree renderer
  const renderSidebarContent = () => (
    <div className="flex flex-col gap-2 p-3 text-xs">
      <div className="flex items-center justify-between px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-400">
        <span>{t("docs_curriculum_navigation", "Curriculum Navigation")}</span>
        <span className="text-[10px] text-slate-500 font-mono">{t("docs_9_modules", "9 Modules")}</span>
      </div>

      <div className="flex flex-col gap-1">
        {DOCS_NAVIGATION.map((course) => {
          const isCurrentCourse = course.id === currentCourseId;
          const isCourseExpanded = !!expandedCourses[course.id];
          const IconComponent = ICON_MAP[course.icon] || FileText;
          const courseTitle = course.title?.[lang] || course.title?.en;

          return (
            <div key={course.id} className="flex flex-col">
              {/* Course Group Header */}
              <button
                type="button"
                onClick={() => toggleCourse(course.id)}
                className={`flex items-center justify-between px-2.5 py-2 rounded text-left transition-colors font-medium ${
                  isCurrentCourse
                    ? "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white"
                    : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50"
                }`}
              >
                <div className="flex items-center gap-2 min-w-0">
                  <IconComponent className="w-4 h-4 text-orange-500 shrink-0" />
                  <span className="truncate text-xs font-semibold">
                    {courseTitle}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 shrink-0 ml-2">
                  <span className="text-[10px] text-slate-400 font-mono hidden sm:inline">
                    {course.totalLessons}
                  </span>
                  {isCourseExpanded ? (
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                  ) : (
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  )}
                </div>
              </button>

              {/* Course Sections & Lessons (when course is expanded) */}
              {isCourseExpanded && (
                <div className="flex flex-col gap-1 pl-3 my-1 border-l border-slate-200 dark:border-slate-800 ml-3">
                  {course.sections.map((section) => {
                    const isSectionExpanded = expandedSections[section.id] !== false; // default open
                    const secTitle = section.title?.[lang] || section.title?.en;

                    return (
                      <div key={section.id} className="flex flex-col">
                        {/* Section toggle button */}
                        <button
                          type="button"
                          onClick={() => toggleSection(section.id)}
                          className="flex items-center justify-between py-1.5 px-2 rounded text-[11px] font-bold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition-colors uppercase tracking-wider text-left"
                        >
                          <span className="truncate pr-1">{secTitle}</span>
                          {isSectionExpanded ? (
                            <ChevronDown className="w-3 h-3 text-slate-400 shrink-0" />
                          ) : (
                            <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
                          )}
                        </button>

                        {/* Section Lessons */}
                        {isSectionExpanded && (
                          <div className="flex flex-col gap-0.5 pl-1">
                            {section.lessons.map((lesson) => {
                              const isActive =
                                isCurrentCourse && lesson.number === currentLessonNum;
                              const lessonTitle = lesson.title?.[lang] || lesson.title?.en;

                              return (
                                <a
                                  key={lesson.id}
                                  ref={isActive ? activeItemRef : null}
                                  href={lesson.href}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    handleLessonClick(lesson.href);
                                  }}
                                  className={`flex items-center gap-2 py-1.5 px-2.5 rounded text-xs transition-colors ${
                                    isActive
                                      ? "bg-orange-500/15 text-orange-600 dark:text-orange-400 font-bold border-l-2 border-orange-500"
                                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/40"
                                  }`}
                                >
                                  <span className="font-mono text-[10px] text-slate-400 w-4 shrink-0">
                                    {String(lesson.number).padStart(2, "0")}
                                  </span>
                                  <span className="truncate flex-1">
                                    {lessonTitle}
                                  </span>
                                </a>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <>
      {/* 1. Desktop Collapsed Slim Sidebar */}
      {desktopCollapsed && (
        <aside className="hidden lg:flex w-14 shrink-0 border-r border-slate-200 dark:border-slate-800 h-[calc(100vh-3.5rem)] sticky top-14 flex-col items-center py-3 gap-2 overflow-y-auto bg-white dark:bg-slate-900 z-30">
          {DOCS_NAVIGATION.map((course) => {
            const isCurrent = course.id === currentCourseId;
            const IconComponent = ICON_MAP[course.icon] || FileText;
            const courseTitle = course.title?.[lang] || course.title?.en;

            return (
              <a
                key={course.id}
                href={`#/docs/${course.id}/1`}
                className={`p-2.5 rounded transition-colors relative group ${
                  isCurrent
                    ? "bg-orange-500/15 text-orange-600 dark:text-orange-400"
                    : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
                title={courseTitle}
              >
                <IconComponent className="w-5 h-5" />
                <span className="sr-only">{courseTitle}</span>
              </a>
            );
          })}
        </aside>
      )}

      {/* 2. Desktop Standard Expanded Sidebar */}
      {!desktopCollapsed && (
        <aside className="hidden lg:block w-72 shrink-0 border-r border-slate-200 dark:border-slate-800 h-[calc(100vh-3.5rem)] sticky top-14 overflow-y-auto bg-white dark:bg-slate-900 z-30">
          {renderSidebarContent()}
        </aside>
      )}

      {/* 3. Mobile Overlay Drawer */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 flex lg:hidden bg-black/60 backdrop-blur-sm"
          onClick={onCloseMobile}
        >
          <div
            className="w-80 max-w-[85vw] h-full bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile drawer header */}
            <div className="flex items-center justify-between p-3.5 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-orange-500" />
                <span className="font-bold text-xs text-slate-900 dark:text-white">
                  {t("docs_curriculum_index", "Curriculum Index")}
                </span>
              </div>
              <button
                type="button"
                onClick={onCloseMobile}
                className="p-1 rounded text-slate-400 hover:text-slate-600 dark:hover:text-white"
                aria-label={t("ui_close", "Close navigation")}
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile drawer scrollable body */}
            <div className="flex-1 overflow-y-auto">
              {renderSidebarContent()}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
