"use client";

import { useState, useEffect } from 'react';
import translations from '../translations.json';

export type Locale = 'en' | 'no' | 'pl';

export function useTranslation() {
  const [locale, setLocale] = useState<Locale>('en');

  // Simple auto-detect based on browser language if possible
  useEffect(() => {
    const saved = localStorage.getItem('locale') as Locale;
    if (saved && translations[saved]) {
      setLocale(saved);
    } else {
      const browserLang = navigator.language.split('-')[0];
      if (browserLang === 'no' || browserLang === 'nb') setLocale('no');
      else if (browserLang === 'pl') setLocale('pl');
    }
  }, []);

  const t = (path: string) => {
    const keys = path.split('.');
    let current: any = translations[locale];
    
    for (const key of keys) {
      if (current && current[key]) {
        current = current[key];
      } else {
        return path;
      }
    }
    return current;
  };

  const changeLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    localStorage.setItem('locale', newLocale);
  };

  return { t, locale, changeLocale };
}
