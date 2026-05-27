import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { LanguageProvider } from '../context/LanguageContext';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Brent Paessens – Portfolio',
    description: 'Een verzameling van projecten en ervaringen uit mijn reis als developer',
};

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="nl">
            <body className="flex flex-col min-h-screen">
                <LanguageProvider>
                    <Header />
                    <main className="flex-grow">{children}</main>
                    <Footer />
                    <ScrollToTop />
                </LanguageProvider>
            </body>
        </html>
    );
};

export default Layout;