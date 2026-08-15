import { Inter } from 'next/font/google';
import './globals.css';
import LenisScroll from '@/components/lenis-scroll';
import { LanguageProvider } from '@/context/language-context';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-sans',
});

export default function RootLayout({ children }) {
    return (
        <html lang='uz'>
            <LenisScroll />
            <body className="antialiased">
                <LanguageProvider>
                    {children}
                </LanguageProvider>
            </body>
        </html>
    );
}

