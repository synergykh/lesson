import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export default function DocsPagination({ prevLesson, nextLesson }) {
  const { lang, t } = useLanguage();

  if (!prevLesson && !nextLesson) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 mt-12 border-t border-slate-200 dark:border-slate-800">
      {prevLesson ? (
        <a
          href={prevLesson.href}
          className="group flex flex-col gap-1 p-4 rounded border border-slate-200 dark:border-slate-800 hover:border-orange-500/50 dark:hover:border-orange-500/50 bg-white dark:bg-slate-900/50 transition-all text-left"
        >
          <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 group-hover:text-orange-500 transition-colors">
            <ChevronLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
            <span>{t("ui_prev", "Previous")}</span>
          </div>
          <div className="font-semibold text-sm text-slate-900 dark:text-white line-clamp-1">
            {prevLesson.title?.[lang] || prevLesson.title?.en || prevLesson.title}
          </div>
          {prevLesson.subtitle?.[lang] && (
            <div className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">
              {prevLesson.subtitle[lang]}
            </div>
          )}
        </a>
      ) : (
        <div className="hidden sm:block" />
      )}

      {nextLesson && (
        <a
          href={nextLesson.href}
          className="group flex flex-col gap-1 p-4 rounded border border-slate-200 dark:border-slate-800 hover:border-orange-500/50 dark:hover:border-orange-500/50 bg-white dark:bg-slate-900/50 transition-all text-right sm:col-start-2"
        >
          <div className="flex items-center justify-end gap-1.5 text-xs text-slate-500 dark:text-slate-400 group-hover:text-orange-500 transition-colors">
            <span>{t("ui_next", "Next")}</span>
            <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </div>
          <div className="font-semibold text-sm text-slate-900 dark:text-white line-clamp-1">
            {nextLesson.title?.[lang] || nextLesson.title?.en || nextLesson.title}
          </div>
          {nextLesson.subtitle?.[lang] && (
            <div className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">
              {nextLesson.subtitle[lang]}
            </div>
          )}
        </a>
      )}
    </div>
  );
}
