'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSwitcher: React.FC = () => {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="flex items-center gap-2 ml-4">
            <button
                onClick={() => setLanguage('nl')}
                className={`px-3 py-1 rounded-full text-sm font-semibold transition-all ${
                    language === 'nl'
                        ? 'text-white'
                        : 'text-gray-600 hover:text-gray-900'
                }`}
                style={language === 'nl' ? { background: '#4DD9C0' } : {}}
            >
                NL
            </button>
            <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-full text-sm font-semibold transition-all ${
                    language === 'en'
                        ? 'text-white'
                        : 'text-gray-600 hover:text-gray-900'
                }`}
                style={language === 'en' ? { background: '#4DD9C0' } : {}}
            >
                EN
            </button>
        </div>
    );
};

export default LanguageSwitcher;
