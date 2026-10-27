import React, { useState } from "react";
import {
  Menu,
  PanelLeftClose,
  PanelLeftOpen,
  Search,
  Sun,
  Moon,
  GitFork,
  ChevronDown,
  Layers,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import { DOCS_NAVIGATION } from "../../data/docsNavigation";
import { Button } from "../ui/button";

export default function DocsHeader({
  currentCourseId,
  currentLessonNum,
  onOpenSearch,
  onToggleMobileSidebar,
  desktopSidebarOpen,
  onToggleDesktopSidebar,
}) {
  const { lang, toggleLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [courseDropdownOpen, setCourseDropdownOpen] = useState(false);

  const currentCourse = DOCS_NAVIGATION.find((c) => c.id === currentCourseId) || DOCS_NAVIGATION[0];
  const courseTitle = currentCourse.title?.[lang] || currentCourse.title?.en;

  return (
    <header className="sticky top-0 z-40 w-full h-14 bg-white/95 dark:bg-slate-900/95 backdrop-blur border-b border-slate-200 dark:border-slate-800 px-4 flex items-center justify-between">
      {/* Left Area: Toggles & Brand */}
      <div className="flex items-center gap-3">
        {/* Mobile menu button */}
        <button
          type="button"
          onClick={onToggleMobileSidebar}
          className="lg:hidden p-2 rounded text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-1 focus:ring-orange-500"
          aria-label={t("ui_toggle_drawer", "Toggle navigation drawer")}
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Desktop sidebar toggle button */}
        <button
          type="button"
          onClick={onToggleDesktopSidebar}
          className="hidden lg:flex p-1.5 rounded text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-1 focus:ring-orange-500"
          title={desktopSidebarOpen ? `${t("docs_collapse_sidebar", "Collapse sidebar")} ([)` : `${t("docs_expand_sidebar", "Expand sidebar")} ([)`}
          aria-label={desktopSidebarOpen ? t("docs_collapse_sidebar", "Collapse sidebar") : t("docs_expand_sidebar", "Expand sidebar")}
        >
          {desktopSidebarOpen ? (
            <PanelLeftClose className="w-4 h-4" />
          ) : (
            <PanelLeftOpen className="w-4 h-4" />
          )}
        </button>

        {/* Brand logo & title */}
        <a
          href="#/"
          className="flex items-center gap-2.5 text-slate-900 dark:text-white no-underline hover:opacity-90 transition-opacity"
          title={t("ui_back_home", "Curriculum Hub")}
        >
          <img
            src="/images/synergy.png"
            alt="Synergy Logo"
            className="w-6 h-6 object-contain"
          />
          <span className="font-extrabold text-sm tracking-tight hidden sm:inline">
            SYNERGY{" "}
            <span className="text-orange-600 dark:text-orange-400 font-semibold text-xs ml-0.5 px-1.5 py-0.5 rounded bg-orange-500/10 border border-orange-500/30">
              DOCS
            </span>
          </span>
        </a>

        <div className="h-4 w-px bg-slate-200 dark:bg-slate-800 hidden md:block" />

        {/* Course Selector Dropdown */}
        <div className="relative hidden md:block">
          <button
            type="button"
            onClick={() => setCourseDropdownOpen((prev) => !prev)}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-colors max-w-[220px] truncate"
            title={t("docs_switch_module", "Switch module")}
          >
            <span className="text-orange-500 font-bold text-[10px] uppercase">
              {currentCourse.module}:
            </span>
            <span className="truncate">{courseTitle}</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0 ml-1" />
          </button>

          {courseDropdownOpen && (
            <>
              <div
                className="fixed inset-0 z-30"
                onClick={() => setCourseDropdownOpen(false)}
              />
              <div className="absolute left-0 mt-1 w-64 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl py-1 z-40">
                <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 dark:border-slate-800">
                  {t("docs_select_module", "Select Course Module")}
                </div>
                {DOCS_NAVIGATION.map((c) => {
                  const isCurrent = c.id === currentCourseId;
                  const cTitle = c.title?.[lang] || c.title?.en;

                  return (
                    <a
                      key={c.id}
                      href={`#/docs/${c.id}/1`}
                      onClick={() => setCourseDropdownOpen(false)}
                      className={`flex items-center justify-between px-3 py-2 text-xs transition-colors ${
                        isCurrent
                          ? "bg-orange-500/10 text-orange-600 dark:text-orange-400 font-semibold"
                          : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                      }`}
                    >
                      <div className="flex flex-col min-w-0 pr-2">
                        <span className="text-[10px] text-slate-400 font-mono">
                          {c.module}
                        </span>
                        <span className="truncate font-medium">{cTitle}</span>
                      </div>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-400 shrink-0">
                        {c.totalLessons}
                      </span>
                    </a>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Right Area: Search, Language, Theme, Repo */}
      <div className="flex items-center gap-2">
        {/* Global Search Button */}
        <button
          type="button"
          onClick={onOpenSearch}
          className="flex items-center gap-2 px-3 py-1.5 rounded text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-colors cursor-pointer"
          title={`${t("ui_search", "Search")} (Ctrl + K)`}
          aria-label={t("ui_search", "Search documentation")}
        >
          <Search className="w-3.5 h-3.5" />
          <span className="hidden sm:inline-block text-xs">
            {t("ui_search", "Search...")}
          </span>
          <kbd className="hidden md:inline-flex items-center px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-[10px] font-mono ml-1">
            ⌘K
          </kbd>
        </button>

        {/* Language Switcher */}
        <Button
          variant="outline"
          size="icon"
          onClick={toggleLang}
          className="h-8 w-8 rounded border-slate-200 dark:border-slate-800"
          title={t("ui_switch_language", "Switch Language (English / ភាសាខ្មែរ)")}
          aria-label={t("ui_switch_language", "Switch Language")}
        >
          {lang === "en" ? (
            <img
              src="/images/en.png"
              alt="English"
              className="w-4 h-3 object-cover rounded-[2px]"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.parentNode.innerText = "EN";
              }}
            />
          ) : (
            <img
              src="/images/km.png"
              alt="Khmer"
              className="w-4 h-3 object-cover rounded-[2px]"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.parentNode.innerText = "KM";
              }}
            />
          )}
        </Button>

        {/* Theme Toggle */}
        <Button
          variant="outline"
          size="icon"
          onClick={toggleTheme}
          className="h-8 w-8 rounded border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
          title={t("ui_theme_toggle", "Toggle Dark / Light theme (T)")}
          aria-label={t("ui_theme", "Toggle theme")}
        >
          {theme === "dark" ? (
            <Sun className="w-4 h-4 text-amber-400" />
          ) : (
            <Moon className="w-4 h-4 text-slate-700" />
          )}
        </Button>

        {/* GitHub link */}
        <a
          href="https://github.com/synergykh/lesson"
          target="_blank"
          rel="noopener noreferrer"
          className="p-1.5 rounded text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          title={t("ui_view_github", "View on GitHub")}
          aria-label={t("ui_view_github", "GitHub Repository")}
        >
          <GitFork className="w-4 h-4" />
        </a>
      </div>
    </header>
  );
}
