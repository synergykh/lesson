import React, { useState, useEffect, Suspense, lazy } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import HomePage from "./pages/HomePage";

const DocsPage = lazy(() => import("./components/docs/DocsPage"));

function parseHash(hash) {
  const cleanHash = hash.replace(/^#\/?/, "");
  if (!cleanHash) {
    return { page: "home" };
  }

  const parts = cleanHash.split("/");

  // Support #/docs/:courseId/:lessonNum and #/docs/:courseId
  if (parts[0] === "docs" && parts[1]) {
    const courseId = parts[1];
    const lessonNum = parts[2] ? parseInt(parts[2], 10) : 1;
    return {
      page: "docs",
      courseId,
      lessonNum: isNaN(lessonNum) ? 1 : lessonNum,
    };
  }

  // Backward compatibility: #/course/:courseId/:slideNum
  if (parts[0] === "course" && parts[1]) {
    const courseId = parts[1];
    const slideNum = parts[2] ? parseInt(parts[2], 10) : 1;
    return {
      page: "docs",
      courseId,
      lessonNum: isNaN(slideNum) ? 1 : slideNum,
    };
  }

  return { page: "home" };
}

export default function App() {
  const [route, setRoute] = useState(() => parseHash(window.location.hash));

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(parseHash(window.location.hash));
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <ThemeProvider>
      <LanguageProvider>
        {route.page === "docs" ? (
          <Suspense
            fallback={
              <div className="flex items-center justify-center h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100">
                <div className="text-center flex flex-col items-center gap-2">
                  <div className="w-8 h-8 border-2 border-orange-500 border-t-transparent rounded-full animate-spin" />
                  <span className="text-xs font-semibold">
                    Loading documentation...
                  </span>
                </div>
              </div>
            }
          >
            <DocsPage
              key={`${route.courseId}-${route.lessonNum}`}
              courseId={route.courseId}
              lessonNum={route.lessonNum}
            />
          </Suspense>
        ) : (
          <HomePage />
        )}
      </LanguageProvider>
    </ThemeProvider>
  );
}
