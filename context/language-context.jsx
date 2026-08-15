'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { locales, languages, defaultLanguage } from '@/locales';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
    const [language, setLanguageState] = useState(defaultLanguage);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        try {
            const savedLang = localStorage.getItem('sapar_lang');
            if (savedLang && locales[savedLang]) {
                setLanguageState(savedLang);
                document.documentElement.lang = savedLang === 'oz' ? 'uz' : savedLang;
            }
        } catch (e) {
            // Ignore localStorage read errors
        }
    }, []);

    const setLanguage = (langCode) => {
        if (!locales[langCode]) return;
        setLanguageState(langCode);
        try {
            localStorage.setItem('sapar_lang', langCode);
            document.documentElement.lang = langCode === 'oz' ? 'uz' : langCode;
        } catch (e) {
            // Ignore localStorage write errors
        }
    };

    const dictionary = locales[language] || locales[defaultLanguage];

    // Helper to get nested translation strings by path e.g. "hero.titlePrefix"
    const t = (path, fallback = '') => {
        if (!path) return fallback;
        const keys = path.split('.');
        let current = dictionary;
        for (const key of keys) {
            if (current && typeof current === 'object' && key in current) {
                current = current[key];
            } else {
                // Fallback to default language dictionary
                let fallbackCurrent = locales[defaultLanguage];
                for (const fbKey of keys) {
                    if (fallbackCurrent && typeof fallbackCurrent === 'object' && fbKey in fallbackCurrent) {
                        fallbackCurrent = fallbackCurrent[fbKey];
                    } else {
                        return fallback || path;
                    }
                }
                return fallbackCurrent ?? (fallback || path);
            }
        }
        return current ?? (fallback || path);
    };

    return (
        <LanguageContext.Provider
            value={{
                language,
                setLanguage,
                dictionary,
                t,
                languages,
                mounted,
            }}
        >
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
