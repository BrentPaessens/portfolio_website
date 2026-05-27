'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

const Footer: React.FC = () => {
    const { language } = useLanguage();
    const t = translations[language];
    const year = new Date().getFullYear();

    const NAV_LINKS = [
        { label: t.nav.home,      href: '/' },
        { label: t.nav.about,     href: '/over-mij' },
        { label: t.nav.contact,   href: '/contact' },
    ];

    return (
        <footer style={{ background: '#1E2235' }} className="text-white pt-16 pb-6">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">

                    {/* Col 1 – Branding */}
                    <div className="md:col-span-1">
                        <Link href="/" className="mb-3 block">
                            <p className="text-base font-bold text-white">Brent Paessens</p>
                            <p className="text-sm font-semibold" style={{ color: '#4DD9C0' }}>{t.footer.branding}</p>
                        </Link>
                        <p className="text-sm text-white/50 leading-relaxed max-w-xs">
                            {t.footer.bio}
                        </p>
                        {/* Accent line */}
                        <div className="mt-5 w-10 h-1 rounded-full" style={{ background: '#4DD9C0' }} />
                    </div>

                    {/* Col 2 – Navigatie */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-white/70 mb-4">{t.footer.navigation}</h4>
                        <ul className="space-y-3">
                            {NAV_LINKS.map(({ label, href }) => (
                                <li key={label}>
                                    <Link
                                        href={href}
                                        className="text-sm text-white/60 hover:text-[#4DD9C0] transition-colors"
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 3 – Sociaal */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-white/70 mb-4">{t.footer.social}</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="https://www.linkedin.com/in/brent-paessens/" target="_blank" rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm text-white/60 hover:text-[#4DD9C0] transition-colors">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                                        <circle cx="4" cy="4" r="2"/>
                                    </svg>
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm text-white/60 hover:text-[#4DD9C0] transition-colors">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <rect x="2" y="2" width="20" height="20" rx="5"/>
                                        <circle cx="12" cy="12" r="4"/>
                                        <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
                                    </svg>
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/BrentPaessens" target="_blank" rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm text-white/60 hover:text-[#4DD9C0] transition-colors">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                                    </svg>
                                    Github
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Col 4 – Contact */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-white/70 mb-4">{t.footer.contact}</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2 text-sm text-white/60">
                                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#4DD9C0' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                </svg>
                                {t.footer.email}
                            </li>
                            <li className="flex items-start gap-2 text-sm text-white/60">
                                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#4DD9C0' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                </svg>
                                {t.footer.location}
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="text-center py-8">
                    <p className="text-sm text-white/40">
                        © {year} Brent Paessens. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;