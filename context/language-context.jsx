
'use client';
// i18n language hook for SAPAR Landing Page
import { useTranslation } from 'react-i18next';

// Define supported languages metadata
export const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧', label: 'English', script: null },
  { code: 'ru', name: 'Русский', flag: '🇷🇺', label: 'Russian', script: null },
  { code: 'oz', name: "Oʻzbek", flag: '🇺🇿', label: 'Uzbek', script: 'Latin' },
  { code: 'uz', name: "Ўzbek", flag: '🇺🇿', label: 'Uzbek', script: 'Cyrillic' },
];

export const defaultLanguage = 'uz';

export function useLanguage() {
  const { i18n, t } = useTranslation();
  const setLanguage = (lang) => {
    if (!languages.find((l) => l.code === lang)) return;
    i18n.changeLanguage(lang);
    try {
      localStorage.setItem('sapar_lang', lang);
    } catch (e) { }
  };
  const language = i18n.language || defaultLanguage;
  const dictionary = {}; // optional direct dictionary access if needed
  return { language, setLanguage, languages, t, dictionary };
}
