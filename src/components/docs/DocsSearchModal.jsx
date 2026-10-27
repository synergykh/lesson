import React, { useState, useEffect, useRef } from "react";
import {
  Search,
  X,
  ChevronRight,
  FileText,
} from "lucide-react";
import { SEARCH_INDEX, DOCS_NAVIGATION } from "../../data/docsNavigation";
import { useLanguage } from "../../context/LanguageContext";
import { CourseIcon } from "../CourseIcons";

export default function DocsSearchModal({ isOpen, onClose }) {
  const { lang, t } = useLanguage();
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const cleanQuery = query.toLowerCase().trim();

  const filteredResults = React.useMemo(() => {
    if (!cleanQuery) return [];
    return SEARCH_INDEX.filter((item) => {
      const titleEn = (item.title?.en || "").toLowerCase();
      const titleKm = (item.title?.km || "").toLowerCase();
      const subEn = (item.subtitle?.en || "").toLowerCase();
      const subKm = (item.subtitle?.km || "").toLowerCase();
      const courseEn = (item.courseTitle?.en || "").toLowerCase();
      const courseKm = (item.courseTitle?.km || "").toLowerCase();
      const secEn = (item.sectionTitle?.en || "").toLowerCase();
      const secKm = (item.sectionTitle?.km || "").toLowerCase();
      const mod = (item.module || "").toLowerCase();
      const num = String(item.number);

      return (
        titleEn.includes(cleanQuery) ||
        titleKm.includes(cleanQuery) ||
        subEn.includes(cleanQuery) ||
        subKm.includes(cleanQuery) ||
        courseEn.includes(cleanQuery) ||
        courseKm.includes(cleanQuery) ||
        secEn.includes(cleanQuery) ||
        secKm.includes(cleanQuery) ||
        mod.includes(cleanQuery) ||
        num === cleanQuery
      );
    }).slice(0, 15);
  }, [cleanQuery]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [filteredResults]);

  // Keyboard navigation inside search results
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < filteredResults.length - 1 ? prev + 1 : 0,
        );
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev > 0 ? prev - 1 : filteredResults.length - 1,
        );
      } else if (e.key === "Enter" && filteredResults.length > 0) {
        e.preventDefault();
        const selected = filteredResults[selectedIndex];
        if (selected) {
          window.location.hash = selected.href;
          onClose();
        }
      } else if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredResults, selectedIndex, onClose]);

  // Scroll active item into view
  useEffect(() => {
    if (listRef.current) {
      const activeEl = listRef.current.querySelector('[data-selected="true"]');
      if (activeEl) {
        activeEl.scrollIntoView({ block: "nearest" });
      }
    }
  }, [selectedIndex]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-200 dark:border-slate-800">
          <Search className="w-4 h-4 text-slate-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t(
              "ui_search_placeholder",
              "Search documentation lessons, topics, commands...",
            )}
            className="flex-1 bg-transparent text-sm text-slate-900 dark:text-white placeholder-slate-400 outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-0.5 rounded"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
          <kbd className="hidden sm:inline-block text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-500">
            Esc
          </kbd>
        </div>

        {/* Results / Empty View */}
        <div ref={listRef} className="overflow-y-auto flex-1 p-2">
          {cleanQuery && filteredResults.length > 0 ? (
            <div className="flex flex-col gap-1">
              {filteredResults.map((item, idx) => {
                const isSelected = selectedIndex === idx;
                const title = item.title?.[lang] || item.title?.en;
                const courseTitle =
                  item.courseTitle?.[lang] || item.courseTitle?.en;
                const secTitle =
                  item.sectionTitle?.[lang] || item.sectionTitle?.en;

                return (
                  <a
                    key={`${item.courseId}-${item.number}`}
                    href={item.href}
                    data-selected={isSelected}
                    onClick={onClose}
                    className={`flex items-center justify-between p-3 rounded transition-colors text-left border ${
                      isSelected
                        ? "bg-orange-500/10 border-orange-500/40 text-slate-900 dark:text-white"
                        : "border-transparent hover:bg-slate-100 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-300"
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-7 h-7 rounded flex items-center justify-center bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shrink-0">
                        <CourseIcon id={item.courseId} className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                      </div>
                      <div className="flex flex-col min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-xs truncate">
                            {title}
                          </span>
                          <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 border border-slate-200 dark:border-slate-700 shrink-0">
                            #{item.number}
                          </span>
                        </div>
                        <div className="text-[11px] text-slate-400 truncate">
                          {courseTitle} &bull; {secTitle}
                        </div>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 shrink-0 ml-2" />
                  </a>
                );
              })}
            </div>
          ) : cleanQuery && filteredResults.length === 0 ? (
            <div className="py-12 text-center text-xs text-slate-500 dark:text-slate-400">
              <p className="font-medium">
                {t(
                  "ui_search_no_results",
                  "No documentation lessons found matching your query.",
                )}
              </p>
              <p className="text-[11px] text-slate-400 mt-1">
                {t("ui_search_hint_examples", "Try searching for keywords like “git status”, “app router”, “postgres”, or “tailwind”.")}
              </p>
            </div>
          ) : (
            <div className="p-3">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-2 mb-2">
                {t("docs_curriculum_modules", "Curriculum Modules")}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {DOCS_NAVIGATION.map((course) => {
                  const cTitle = course.title?.[lang] || course.title?.en;

                  return (
                    <a
                      key={course.id}
                      href={`#/docs/${course.id}/1`}
                      onClick={onClose}
                      className="flex items-center gap-2.5 p-2.5 rounded border border-slate-200 dark:border-slate-800 hover:border-orange-500/50 bg-slate-50 dark:bg-slate-800/40 text-xs transition-colors"
                    >
                      <CourseIcon id={course.id} className="w-4 h-4 text-orange-500 shrink-0" />
                      <div className="flex flex-col min-w-0">
                        <span className="font-semibold text-slate-900 dark:text-white truncate">
                          {cTitle}
                        </span>
                        <span className="text-[10px] text-slate-400">
                          {course.totalLessons} {t("ui_slides", "lessons")}{" "}
                          &bull; {course.module}
                        </span>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Footer shortcuts hint */}
        <div className="px-4 py-2 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 flex items-center justify-between text-[11px] text-slate-400">
          <div className="flex items-center gap-2">
            <span>
              {t("ui_nav_hint", "Navigate:")}{" "}
              <kbd className="px-1 rounded bg-slate-200 dark:bg-slate-800">
                ↑
              </kbd>{" "}
              <kbd className="px-1 rounded bg-slate-200 dark:bg-slate-800">
                ↓
              </kbd>
            </span>
            <span>
              {t("ui_select_hint", "Select:")}{" "}
              <kbd className="px-1 rounded bg-slate-200 dark:bg-slate-800">
                ↵
              </kbd>
            </span>
          </div>
          <span>{t("ui_total_lessons", "Total: 448 Lessons")}</span>
        </div>
      </div>
    </div>
  );
}
