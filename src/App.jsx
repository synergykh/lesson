import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import HomePage from './pages/HomePage';
import SlideViewer from './pages/SlideViewer';

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

  return (
    <ThemeProvider>
      <LanguageProvider>
        {route.page === 'course' ? (
          <SlideViewer
            key={`${route.courseId}-${route.slideNum}`}
            courseId={route.courseId}
            initialSlide={route.slideNum}
          />
        ) : (
          <HomePage />
        )}
      </LanguageProvider>
    </ThemeProvider>
  );
}
