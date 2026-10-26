import React from "react";
import { ChevronRight, Home } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export default function DocsBreadcrumbs({ course, section, lesson }) {
  const { lang, t } = useLanguage();

  if (!course || !lesson) return null;

  const courseTitle = course.title?.[lang] || course.title?.en || course.title;
  const sectionTitle = section?.title?.[lang] || section?.title?.en || section?.part;
  const lessonTitle = lesson.title?.[lang] || lesson.title?.en || lesson.title;

  return (
    <nav aria-label="Breadcrumbs" className="flex items-center text-xs text-slate-500 dark:text-slate-400 gap-1.5 overflow-x-auto py-1">
      <a
        href="#/"
        className="flex items-center gap-1 hover:text-slate-900 dark:hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-orange-500 rounded px-1"
        title="Curriculum Hub"
      >
        <Home className="w-3.5 h-3.5" />
        <span className="sr-only sm:not-sr-only sm:inline-block">{t("ui_home", "Home")}</span>
      </a>

      <ChevronRight className="w-3 h-3 text-slate-400 dark:text-slate-600 shrink-0" />

      <a
        href={`#/docs/${course.id}/1`}
        className="hover:text-slate-900 dark:hover:text-white transition-colors truncate max-w-[160px] sm:max-w-none focus:outline-none focus:ring-1 focus:ring-orange-500 rounded px-1"
      >
        {courseTitle}
      </a>

      {sectionTitle && (
        <>
          <ChevronRight className="w-3 h-3 text-slate-400 dark:text-slate-600 shrink-0" />
          <span className="truncate max-w-[140px] sm:max-w-none hidden sm:inline text-slate-400 dark:text-slate-500">
            {sectionTitle}
          </span>
        </>
      )}

      <ChevronRight className="w-3 h-3 text-slate-400 dark:text-slate-600 shrink-0" />

      <span className="font-semibold text-slate-900 dark:text-slate-100 truncate max-w-[200px] sm:max-w-none" aria-current="page">
        {lessonTitle}
      </span>
    </nav>
  );
}
