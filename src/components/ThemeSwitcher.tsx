'use client';
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export const ThemeSwitcher: React.FC = () => {
    const context = useContext(ThemeContext);
    
    // Se o contexto não estiver disponível, não renderiza
    if (!context) {
        return null;
    }

    const { theme, toggleTheme } = context;

    return (
        <button
            onClick={toggleTheme}
            className="relative inline-flex items-center gap-2 px-3 py-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors hover:bg-gray-300 dark:hover:bg-gray-600"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
            {/* Sun icon (light mode) */}
            {theme === 'light' ? (
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="5" />
                    <path d="M12 1v6m0 6v6M1 12h6m6 0h6M4.22 4.22l4.24 4.24m5.08 0l4.24-4.24M4.22 19.78l4.24-4.24m5.08 0l4.24 4.24" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
            ) : (
                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
            )}
            <span className="text-sm font-medium text-gray-900 dark:text-white">
                {theme === 'light' ? 'Light' : 'Dark'}
            </span>
        </button>
    );
};
