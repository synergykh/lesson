import React from "react";
import { AlignLeft, Hash } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export default function DocsTableOfContents({ headings = [], activeId = "" }) {
  const { t } = useLanguage();

  if (!headings || headings.length < 2) {
    return null;
  }

  const handleHeadingClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", `#${id}`);
    }
  };

  return (
    <aside className="hidden xl:block w-60 shrink-0 sticky top-20 self-start max-h-[calc(100vh-6rem)] overflow-y-auto pl-4 text-xs">
      <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-[11px] text-slate-800 dark:text-slate-200 mb-3">
        <AlignLeft className="w-3.5 h-3.5 text-orange-500" />
        <span>{t("docs_on_this_page", "On this page")}</span>
      </div>

      <nav aria-label={t("ui_table_of_contents", "Table of contents")} className="flex flex-col gap-1 border-l border-slate-200 dark:border-slate-800">
        {headings.map((h) => {
          const isActive = activeId === h.id;
          const isNested = h.level === 3 || h.level === 4;

          return (
            <a
              key={h.id}
              href={`#${h.id}`}
              onClick={(e) => handleHeadingClick(e, h.id)}
              className={`block transition-colors py-1 text-left -ml-px border-l-2 ${
                isNested ? "pl-5 text-[11px]" : "pl-3 text-xs"
              } ${
                isActive
                  ? "border-orange-500 text-orange-600 dark:text-orange-400 font-semibold"
                  : "border-transparent text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
              }`}
            >
              <span className="line-clamp-2">{h.text}</span>
            </a>
          );
        })}
      </nav>
    </aside>
  );
}
