'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';
import LanguageSwitcher from './LanguageSwitcher';

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();
    const { language } = useLanguage();
    const t = translations[language];

    const NAV_LINKS = [
        { label: t.nav.home,      href: '/' },
        { label: t.nav.about,     href: '/over-mij' },
        { label: t.nav.projecten, href: '/#projecten' },
        { label: t.nav.stage,     href: '/stage' },
        { label: t.nav.contact,   href: '/contact' },
    ];

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled ? 'bg-white shadow-md' : 'bg-transparent'
            }`}
        >
            <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex flex-col leading-tight">
                    <span className="text-sm font-bold text-gray-900">Brent Paessens</span>
                    <span className="text-xs font-semibold" style={{ color: '#4DD9C0' }}>Portfolio</span>
                </Link>

                {/* Desktop nav */}
                <div className="hidden md:flex items-center space-x-8">
                    <ul className="flex items-center space-x-8">
                        {NAV_LINKS.map(({ label, href }) => {
                            const active = pathname === href || (href !== '/' && pathname.startsWith(href));
                            return (
                                <li key={label}>
                                    <Link
                                        href={href}
                                        className={`text-sm font-medium transition-colors ${
                                            active ? 'font-semibold' : 'text-gray-700 hover:text-[#4DD9C0]'
                                        }`}
                                        style={active ? { color: '#4DD9C0' } : {}}
                                    >
                                        {label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                    <LanguageSwitcher />
                </div>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden flex flex-col gap-1.5 p-2"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-6 h-0.5 bg-gray-900 transition-all ${ menuOpen ? 'rotate-45 translate-y-2' : '' }`} />
                    <span className={`block w-6 h-0.5 bg-gray-900 transition-all ${ menuOpen ? 'opacity-0' : '' }`} />
                    <span className={`block w-6 h-0.5 bg-gray-900 transition-all ${ menuOpen ? '-rotate-45 -translate-y-2' : '' }`} />
                </button>
            </nav>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
                    {NAV_LINKS.map(({ label, href }) => (
                        <Link
                            key={label}
                            href={href}
                            className="text-sm font-medium text-gray-700 hover:text-[#4DD9C0]"
                            onClick={() => setMenuOpen(false)}
                        >
                            {label}
                        </Link>
                    ))}
                    <div className="border-t border-gray-100 pt-4 mt-4">
                        <LanguageSwitcher />
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;