import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang, t } = useLanguage();

  return (
    <nav className="w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <a
            href="#/"
            className="flex items-center gap-2.5 text-slate-900 dark:text-white font-extrabold text-base hover:text-blue-600 dark:hover:text-blue-400 transition-colors no-underline"
          >
            <img
              src="/images/synergy.png"
              alt="Synergy Logo"
              className="w-8 h-8 object-contain shrink-0"
            />
            <span>DevLessons</span>
          </a>
          <Badge variant="default" className="hidden sm:inline-flex">
            {t("home_badge", "FULLSTACK CURRICULUM")}
          </Badge>
        </div>

        <div className="flex items-center gap-1">
          {/* Language Toggle */}
          <Button
            variant="outline"
            size="icon"
            onClick={toggleLang}
            title="Toggle Language (English / ភាសាខ្មែរ)"
            aria-label="Toggle Language"
          >
            {lang === "en" ? (
              <img
                src="/images/en.png"
                alt="English"
                className="w-5 h-3.5 object-cover"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentNode.innerText = "EN";
                }}
              />
            ) : (
              <img
                src="/images/km.png"
                alt="Khmer"
                className="w-5 h-3.5 object-cover"
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
            title="Toggle Light / Dark Mode"
            aria-label="Toggle Light / Dark Mode"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </Button>
        </div>
      </div>
    </nav>
  );
}
