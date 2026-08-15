'use client';

import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/context/language-context';
import { ChevronDown, Check, Globe } from 'lucide-react';

export default function LanguageSwitcher({ variant = 'desktop' }) {
    const { language, setLanguage, languages } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const currentLangObj = languages.find((l) => l.code === language) || languages[0];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    if (variant === 'mobile-inline') {
        return (
            <div className="flex items-center gap-1.5 p-1 bg-zinc-100 rounded-xl w-full justify-between">
                {languages.map((lang) => {
                    const isActive = language === lang.code;
                    return (
                        <button
                            key={lang.code}
                            onClick={() => setLanguage(lang.code)}
                            className={`flex-1 py-1.5 px-2 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                                isActive
                                    ? 'bg-[#0B2B33] text-white shadow-xs'
                                    : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/60'
                            }`}
                        >
                            <span>{lang.flag}</span>
                            <span>{lang.label}</span>
                        </button>
                    );
                })}
            </div>
        );
    }

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-haspopup="true"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-zinc-700 bg-zinc-50 hover:bg-zinc-100 border border-zinc-200/80 rounded-xl transition-all duration-200 cursor-pointer shadow-2xs hover:border-zinc-300"
            >
                <span className="text-sm">{currentLangObj.flag}</span>
                <span className="font-bold tracking-wide">{currentLangObj.label}</span>
                <ChevronDown
                    className={`size-3.5 text-zinc-400 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-zinc-700' : ''
                    }`}
                />
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-1.5 w-44 rounded-2xl bg-white p-1.5 shadow-xl border border-zinc-200 z-50 animate-in fade-in zoom-in-95 duration-150">
                    <div className="px-2.5 py-1 text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                        Tilni tanlang / Язык / Language
                    </div>
                    {languages.map((lang) => {
                        const isActive = language === lang.code;
                        return (
                            <button
                                key={lang.code}
                                onClick={() => {
                                    setLanguage(lang.code);
                                    setIsOpen(false);
                                }}
                                className={`w-full flex items-center justify-between px-2.5 py-2 text-xs font-medium rounded-xl transition-all ${
                                    isActive
                                        ? 'bg-[#EAF5F2] text-[#028090] font-bold'
                                        : 'text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900'
                                }`}
                            >
                                <div className="flex items-center gap-2">
                                    <span className="text-base">{lang.flag}</span>
                                    <span>{lang.name}</span>
                                </div>
                                {isActive && <Check className="size-4 text-[#028090] stroke-[2.5]" />}
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
