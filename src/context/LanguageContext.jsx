import React, { createContext, useContext, useEffect, useState } from 'react';
import { translations, courseTranslations, commonTranslations } from '../data/translations';

const LanguageContext = createContext();
export const CourseLanguageContext = createContext({ courseId: null });

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('lang') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('lang', lang);
    if (lang === 'km') {
      document.body.classList.add('lang-km');
      document.documentElement.setAttribute('lang', 'km');
    } else {
      document.body.classList.remove('lang-km');
      document.documentElement.setAttribute('lang', 'en');
    }
  }, [lang]);

  const toggleLang = () => {
    setLang(prev => (prev === 'en' ? 'km' : 'en'));
  };

  const t = (key, fallback = '', courseId = null) => {
    if (!key) return fallback;

    // 1. Check course dictionary in current lang
    if (courseId && courseTranslations[courseId]) {
      const courseDict = courseTranslations[courseId][lang];
      if (courseDict && courseDict[key] !== undefined && courseDict[key] !== '') {
        return courseDict[key];
      }
    }

    // 2. Check common dictionary in current lang
    const commonDict = commonTranslations[lang];
    if (commonDict && commonDict[key] !== undefined && commonDict[key] !== '') {
      return commonDict[key];
    }

    // 3. Fallback search across course dictionaries in current lang
    if (!courseId) {
      for (const c of Object.values(courseTranslations)) {
        if (c[lang] && c[lang][key] !== undefined && c[lang][key] !== '') {
          return c[lang][key];
        }
      }
    }

    // 4. Fallback to course English
    if (courseId && courseTranslations[courseId]) {
      const courseEn = courseTranslations[courseId].en;
      if (courseEn && courseEn[key] !== undefined && courseEn[key] !== '') {
        return courseEn[key];
      }
    }

    // 5. Fallback to common English
    if (commonTranslations.en && commonTranslations.en[key] !== undefined && commonTranslations.en[key] !== '') {
      return commonTranslations.en[key];
    }

    // 6. Return fallback or key
    return fallback !== '' ? fallback : key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export function useCourseLanguage(overrideCourseId = null) {
  const { lang, setLang, toggleLang, t } = useLanguage();
  const courseContext = useContext(CourseLanguageContext);
  const activeCourseId = overrideCourseId || courseContext?.courseId;

  const boundT = (key, fallback = '') => t(key, fallback, activeCourseId);

  return { lang, setLang, toggleLang, t: boundT, courseId: activeCourseId };
}
