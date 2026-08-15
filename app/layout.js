'use client';
import { Inter } from 'next/font/google';
import './globals.css';
import LenisScroll from '@/components/lenis-scroll';
import { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-sans',
});

export default function RootLayout({ children }) {
  // Sync HTML lang attribute with i18next language changes
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = i18n.language;
    }
  }, [i18n.language]);
    return (
        <html lang={i18n.language}>
            <LenisScroll />
            <body className="antialiased">
                <I18nextProvider i18n={i18n}>
                    {children}
                </I18nextProvider>
            </body>
        </html>
    );
}

