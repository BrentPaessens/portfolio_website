'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

const ScrollToTop: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { language } = useLanguage();
    const t = translations[language];

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 w-12 h-12 rounded-full text-white transition-opacity hover:opacity-80 z-40"
                    style={{ background: '#4DD9C0' }}
                    aria-label={t.common.scrollToTop}
                >
                    <svg
                        className="w-6 h-6 mx-auto"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path d="M5 15l7-7 7 7" />
                    </svg>
                </button>
            )}
        </>
    );
};

export default ScrollToTop;
