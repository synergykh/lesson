import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 mt-auto py-8 text-center text-xs text-slate-500 dark:text-slate-400">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <img
            src="/images/synergy.png"
            alt="Synergy Logo"
            className="w-6 h-6 object-contain shrink-0"
          />
          <span className="font-bold text-slate-900 dark:text-slate-200">DevLessons</span>
          <span className="text-slate-400 dark:text-slate-600">•</span>
          <span>Fullstack Developer Mastery Curriculum</span>
        </div>

        <div className="flex items-center flex-wrap justify-center gap-4 text-slate-600 dark:text-slate-400">
          <span className="rounded text-[11px] px-2 py-0.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
            React + Vite
          </span>
          <span className="rounded text-[11px] px-2 py-0.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
            Tailwind CSS
          </span>
          <span className="rounded text-[11px] px-2 py-0.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
            Bilingual EN / KM
          </span>
        </div>

        <div>
          <span>© 2026 DevLessons. Built for developers worldwide.</span>
        </div>
      </div>
    </footer>
  );
}
