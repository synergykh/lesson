import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full bg-slate-900 border-t border-slate-800 mt-auto py-8 text-center text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <img
            src="/images/synergy.png"
            alt="Synergy Logo"
            className="w-6 h-6 object-contain shrink-0"
          />
          <span className="font-bold text-slate-200">DevLessons</span>
          <span className="text-slate-600">•</span>
          <span>Fullstack Developer Mastery Curriculum</span>
        </div>

        <div className="flex items-center flex-wrap justify-center gap-4 text-slate-400">
          <span className="font-mono text-[11px] px-2 py-0.5 bg-slate-800 border border-slate-700">React + Vite</span>
          <span className="font-mono text-[11px] px-2 py-0.5 bg-slate-800 border border-slate-700">Tailwind CSS</span>
          <span className="font-mono text-[11px] px-2 py-0.5 bg-slate-800 border border-slate-700">Bilingual EN / KM</span>
        </div>

        <div>
          <span>© 2026 DevLessons. Built for developers worldwide.</span>
        </div>
      </div>
    </footer>
  );
}
