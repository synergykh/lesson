import React, { useState } from "react";
import { Search, ChevronRight, ArrowRight, X } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CourseIcon } from "../components/CourseIcons";
import { courses } from "../data/coursesIndex";
import { useLanguage } from "../context/LanguageContext";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../components/ui/card";

export default function HomePage() {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    {
      id: "all",
      label: t("ui_all_lessons", "All Lessons"),
      count: courses.length,
    },
    {
      id: "foundations",
      label: "Foundations",
      count: courses.filter((c) => c.category === "foundations").length,
    },
    {
      id: "frontend",
      label: "Frontend",
      count: courses.filter((c) => c.category === "frontend").length,
    },
    {
      id: "backend",
      label: "Backend",
      count: courses.filter((c) => c.category === "backend").length,
    },
    {
      id: "devops",
      label: "DevOps & Cloud",
      count: courses.filter((c) => c.category === "devops").length,
    },
    {
      id: "ai",
      label: "AI & Engineering",
      count: courses.filter((c) => c.category === "ai").length,
    },
  ];

  const filteredCourses = courses.filter((c) => {
    const matchesCategory =
      selectedCategory === "all" || c.category === selectedCategory;
    const query = searchQuery.toLowerCase().trim();
    if (!query) return matchesCategory;

    const matchesQuery =
      c.title.toLowerCase().includes(query) ||
      c.desc.toLowerCase().includes(query) ||
      c.module.toLowerCase().includes(query) ||
      c.tags.some((tag) => tag.toLowerCase().includes(query));

    return matchesCategory && matchesQuery;
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white flex flex-col">
      <Navbar />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-5 flex flex-col gap-2">
        {/* Hero Section */}
        <Card className="p-4 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <Badge variant="default">
              {t("home_badge", "MODERN DEVELOPER ROADMAP")}
            </Badge>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white m-0 leading-tight">
            {t("home_title", "Fullstack Developer Curriculum")}
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-7xl leading-relaxed m-0">
            {t(
              "home_sub",
              "9 practical, presentation-driven lessons designed to take you from your very first line of local Git version control all the way to building and deploying production-ready web apps with Next.js, Tailwind CSS, Shadcn UI, PostgreSQL with Neon Database, Vercel, Cloudflare, and AI Prompt Engineering.",
            )}
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 border-t border-slate-200 dark:border-slate-800">
            <div className="rounded bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3 text-center">
              <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                9
              </span>
              <p className="text-xs text-slate-500 dark:text-slate-400 m-0">
                {t("home_stat_1_lbl", "Mastery Lessons")}
              </p>
            </div>
            <div className="rounded bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3 text-center">
              <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                424
              </span>
              <p className="text-xs text-slate-500 dark:text-slate-400 m-0">
                {t("home_stat_2_lbl", "Interactive Slides")}
              </p>
            </div>
            <div className="rounded bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3 text-center">
              <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                100%
              </span>
              <p className="text-xs text-slate-500 dark:text-slate-400 m-0">
                {t("home_stat_3_lbl", "Real Code & Terminal")}
              </p>
            </div>
            <div className="rounded bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3 text-center">
              <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                EN / KM
              </span>
              <p className="text-xs text-slate-500 dark:text-slate-400 m-0">
                {t("home_stat_4_lbl", "Bilingual Support")}
              </p>
            </div>
          </div>
        </Card>

        {/* Quick Roadmap Strip */}
        <div className="flex items-center justify-start sm:justify-center flex-wrap gap-2 p-3 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-x-auto">
          {courses.map((course, idx) => (
            <React.Fragment key={course.id}>
              <Button variant="outline" size="sm" asChild>
                <a
                  href={`#/docs/${course.id}/1`}
                  className="no-underline whitespace-nowrap"
                >
                  {`0${idx + 1}. ${course.id.charAt(0).toUpperCase() + course.id.slice(1)}`}
                </a>
              </Button>
              {idx < courses.length - 1 && (
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600 select-none shrink-0" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Controls: Search & Category Filter */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3">
          {/* Search Bar */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
            <Input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t(
                "ui_search_placeholder",
                "Search courses, commands, topics (e.g. git commit, neon, server components)...",
              )}
              className="pl-9 pr-8"
            />
            {searchQuery && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSearchQuery("")}
                className="absolute right-1 top-1/2 -translate-y-1/2 h-6 w-6 p-0 text-slate-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </Button>
            )}
          </div>

          {/* Categories */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={selectedCategory === cat.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.label} ({cat.count})
              </Button>
            ))}
          </div>
        </div>

        {/* Course Cards Grid */}
        {filteredCourses.length === 0 ? (
          <Card className="p-4 text-center text-slate-400 text-sm">
            No courses match your search "{searchQuery}".
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {filteredCourses.map((c, idx) => {
              const lKey = c.lessonKey || `l${idx + 1}`;
              const localizedTitle = t(`${lKey}_title`, c.title);
              const localizedDesc = t(`${lKey}_desc`, c.desc);
              const localizedTag = t(`${lKey}_tag`, c.module);
              const localizedLevel = t(`${lKey}_level`, c.level);
              const localizedMeta = t(`${lKey}_meta`, c.meta);

              return (
                <Card
                  key={c.id}
                  className="flex flex-col justify-between hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/15 transition-all duration-150 group"
                >
                  <a
                    href={`#/docs/${c.id}/1`}
                    className="p-4 flex flex-col gap-3 no-underline"
                  >
                    {/* Module & Level Badge */}
                    <div className="flex items-center justify-between">
                      <Badge variant="default">{localizedTag}</Badge>
                      <Badge variant="secondary">{localizedLevel}</Badge>
                    </div>

                    {/* Icon & Title */}
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-11 h-11 flex items-center justify-center shrink-0 rounded border ${c.iconBg} ${c.iconColor}`}
                      >
                        <CourseIcon id={c.id} className="w-6 h-6" />
                      </div>
                      <CardTitle className="group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors">
                        {localizedTitle}
                      </CardTitle>
                    </div>

                    {/* Description */}
                    <CardDescription className="line-clamp-3">
                      {localizedDesc}
                    </CardDescription>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {c.tags.map((tag) => (
                        <Badge key={tag} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </a>

                  {/* Card Footer */}
                  <CardFooter className="flex items-center justify-between pt-3 border-t border-slate-200 dark:border-slate-800/80 mt-auto">
                    <span className="text-xs text-slate-500 font-semibold">
                      {localizedMeta}
                    </span>
                    <Button
                      size="sm"
                      className="gap-1.5 group-hover:translate-x-0.5 transition-transform"
                      asChild
                    >
                      <a
                        href={`#/docs/${c.id}/1`}
                        className="no-underline flex items-center gap-1.5"
                      >
                        <span>{t("ui_read_docs", "Read Docs")}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
