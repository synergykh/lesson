import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CourseIcon } from '../components/CourseIcons';
import { courses } from '../data/coursesIndex';
import { useLanguage } from '../context/LanguageContext';

export default function HomePage() {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Lessons', count: courses.length },
    { id: 'foundations', label: 'Foundations', count: courses.filter(c => c.category === 'foundations').length },
    { id: 'frontend', label: 'Frontend', count: courses.filter(c => c.category === 'frontend').length },
    { id: 'backend', label: 'Backend', count: courses.filter(c => c.category === 'backend').length },
    { id: 'devops', label: 'DevOps & Cloud', count: courses.filter(c => c.category === 'devops').length },
    { id: 'ai', label: 'AI & Engineering', count: courses.filter(c => c.category === 'ai').length }
  ];

  const filteredCourses = courses.filter(c => {
    const matchesCategory = selectedCategory === 'all' || c.category === selectedCategory;
    const query = searchQuery.toLowerCase().trim();
    if (!query) return matchesCategory;

    const matchesQuery =
      c.title.toLowerCase().includes(query) ||
      c.desc.toLowerCase().includes(query) ||
      c.module.toLowerCase().includes(query) ||
      c.tags.some(tag => tag.toLowerCase().includes(query));

    return matchesCategory && matchesQuery;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col">
      <Navbar />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-5 flex flex-col gap-4">
        {/* Hero Section */}
        <div className="bg-slate-900 border border-slate-800 p-5 flex flex-col gap-3 shadow-xl">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono font-bold tracking-wider uppercase px-2 py-0.5 bg-blue-500/10 text-blue-400 border border-blue-500/30">
              {t('home_badge', 'MODERN DEVELOPER ROADMAP')}
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-white m-0 leading-tight">
            {t('home_title', 'Fullstack Developer Curriculum')}
          </h1>
          <p className="text-sm text-slate-400 max-w-4xl leading-relaxed m-0">
            {t(
              'home_sub',
              '9 practical, presentation-driven lessons designed to take you from your very first line of local Git version control all the way to building and deploying production-ready web apps with Next.js, Tailwind CSS, Shadcn UI, PostgreSQL with Neon Database, Vercel, Cloudflare, and AI Prompt Engineering.'
            )}
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 border-t border-slate-800/80">
            <div className="bg-slate-950 border border-slate-800 p-3 text-center">
              <span className="text-lg font-mono font-bold text-blue-400">9</span>
              <p className="text-xs text-slate-400 m-0">{t('home_stat_1_lbl', 'Mastery Lessons')}</p>
            </div>
            <div className="bg-slate-950 border border-slate-800 p-3 text-center">
              <span className="text-lg font-mono font-bold text-blue-400">424</span>
              <p className="text-xs text-slate-400 m-0">{t('home_stat_2_lbl', 'Interactive Slides')}</p>
            </div>
            <div className="bg-slate-950 border border-slate-800 p-3 text-center">
              <span className="text-lg font-mono font-bold text-blue-400">100%</span>
              <p className="text-xs text-slate-400 m-0">{t('home_stat_3_lbl', 'Real Code & Terminal')}</p>
            </div>
            <div className="bg-slate-950 border border-slate-800 p-3 text-center">
              <span className="text-lg font-mono font-bold text-blue-400">EN / KM</span>
              <p className="text-xs text-slate-400 m-0">{t('home_stat_4_lbl', 'Bilingual Support')}</p>
            </div>
          </div>
        </div>

        {/* Quick Roadmap Strip */}
        <div className="flex items-center justify-start sm:justify-center flex-wrap gap-2 p-3 bg-slate-900 border border-slate-800 overflow-x-auto">
          {courses.map((course, idx) => (
            <React.Fragment key={course.id}>
              <a
                href={`#/course/${course.id}`}
                className="flex items-center gap-1.5 px-3 py-1 bg-slate-800 hover:bg-blue-500/10 border border-slate-700 hover:border-blue-500 text-xs font-bold text-slate-200 hover:text-blue-400 transition-colors whitespace-nowrap"
              >
                <span>{`0${idx + 1}. ${course.id.charAt(0).toUpperCase() + course.id.slice(1)}`}</span>
              </a>
              {idx < courses.length - 1 && (
                <svg
                  className="w-3 h-3 text-slate-600 select-none shrink-0"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.22 3.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 0 1 0-1.06z"
                  />
                </svg>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Controls: Search & Category Filter */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 bg-slate-900 border border-slate-800 p-3">
          {/* Search Bar */}
          <div className="relative flex-1">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500"
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search courses, commands, topics (e.g. git commit, neon, server components)..."
              className="w-full pl-9 pr-3 py-1.5 bg-slate-950 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>

          {/* Categories */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`text-xs px-2.5 py-1 font-semibold transition-colors cursor-pointer border ${
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white border-blue-500'
                    : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {cat.label} ({cat.count})
              </button>
            ))}
          </div>
        </div>

        {/* Course Cards Grid */}
        {filteredCourses.length === 0 ? (
          <div className="p-8 text-center bg-slate-900 border border-slate-800 text-slate-400 text-sm">
            No courses match your search "{searchQuery}".
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCourses.map((c) => (
              <a
                key={c.id}
                href={`#/course/${c.id}`}
                className="bg-slate-900 border border-slate-800 p-4 flex flex-col justify-between gap-3 hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/15 transition-all duration-150 no-underline group"
              >
                <div className="flex flex-col gap-3">
                  {/* Module & Level Badge */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold px-2 py-0.5 bg-blue-500/10 text-blue-400 border border-blue-500/30 font-mono">
                      {c.module}
                    </span>
                    <span className="text-xs font-semibold px-2 py-0.5 bg-slate-800 text-slate-400 border border-slate-700">
                      {c.level}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-11 h-11 flex items-center justify-center shrink-0 border ${c.iconBg} ${c.iconColor}`}
                    >
                      <CourseIcon id={c.id} className="w-6 h-6" />
                    </div>
                    <h2 className="text-base font-bold text-white m-0 leading-snug group-hover:text-blue-400 transition-colors">
                      {c.title}
                    </h2>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-400 leading-relaxed m-0 line-clamp-3">
                    {c.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {c.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-1.5 py-0.5 bg-slate-950 border border-slate-800 text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 mt-1">
                  <span className="text-xs text-slate-500 font-semibold">{c.meta}</span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-600 group-hover:bg-blue-500 text-white font-bold text-xs transition-transform group-hover:translate-x-0.5">
                    <span>{t('ui_launch_lesson', 'Start Lesson')}</span>
                    <svg className="w-3 h-3" viewBox="0 0 16 16" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M6.22 3.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 0 1 0-1.06z"
                      />
                    </svg>
                  </span>
                </div>
              </a>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
