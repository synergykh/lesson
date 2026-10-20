import React, { useState, useEffect, Suspense } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import HomePage from './pages/HomePage';
import { COURSE_COMPONENTS } from './courses';

function parseHash(hash) {
  const cleanHash = hash.replace(/^#\/?/, '');
  if (!cleanHash) {
    return { page: 'home' };
  }

  const parts = cleanHash.split('/');
  if (parts[0] === 'course' && parts[1]) {
    const courseId = parts[1];
    const slideNum = parts[2] ? parseInt(parts[2], 10) : 1;
    return {
      page: 'course',
      courseId,
      slideNum: isNaN(slideNum) ? 1 : slideNum
    };
  }

  return { page: 'home' };
}

export default function App() {
  const [route, setRoute] = useState(() => parseHash(window.location.hash));

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(parseHash(window.location.hash));
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const CourseComponent = route.page === 'course' ? COURSE_COMPONENTS[route.courseId] : null;

  return (
    <ThemeProvider>
      <LanguageProvider>
        {route.page === 'course' && CourseComponent ? (
          <Suspense
            fallback={
              <div className="flex items-center justify-center h-screen bg-slate-900 text-slate-300">
                <div className="text-center flex flex-col items-center gap-2">
                  <div className="w-8 h-8 border-2 border-orange-500 border-t-transparent rounded-full animate-spin" />
                  <span className="text-xs font-semibold">Loading lesson...</span>
                </div>
              </div>
            }
          >
            <CourseComponent
              key={`${route.courseId}-${route.slideNum}`}
              initialSlide={route.slideNum}
            />
          </Suspense>
        ) : (
          <HomePage />
        )}
      </LanguageProvider>
    </ThemeProvider>
  );
}
