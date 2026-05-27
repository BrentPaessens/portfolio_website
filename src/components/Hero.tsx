'use client';
import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

const Hero: React.FC = () => {
    const { language } = useLanguage();
    const t = translations[language];

    const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const element = document.querySelector('#projecten');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    return (
        <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-white">
            {/* Decorative blobs */}
            <div
                className="blob-rotate absolute top-16 right-0 w-80 h-80 opacity-20 pointer-events-none"
                style={{ background: '#4DD9C0', borderRadius: '60% 40% 70% 30% / 50% 60% 40% 50%' }}
            />
            <div
                className="blob-rotate-reverse absolute bottom-10 left-0 w-64 h-64 opacity-20 pointer-events-none"
                style={{ background: '#FF7F65', borderRadius: '40% 60% 30% 70% / 60% 40% 60% 40%' }}
            />

            <div className="max-w-6xl mx-auto px-6 w-full pt-24 pb-16">
                <div className="flex flex-col-reverse md:flex-row items-center gap-12">
                    {/* Text */}
                    <div className="flex-1">
                        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
                            {t.hero.welcome}<br />{t.hero.portfolio}
                        </h1>
                        <p className="text-lg text-gray-500 font-medium mb-2">{t.hero.subtitle}</p>
                        <p className="text-gray-400 mb-8 max-w-md">
                            {t.hero.description}
                        </p>
                        <div className="flex gap-4 flex-wrap">
                            <a
                                href="#projecten"
                                onClick={handleScrollToProjects}
                                className="px-8 py-4 rounded-full font-bold text-base text-white transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:-translate-y-1 shadow-lg cursor-pointer"
                                style={{ background: '#4DD9C0' }}
                            >
                                {t.hero.myWork}
                            </a>
                            <Link
                                href="/over-mij"
                                className="px-6 py-3 rounded-full font-semibold text-sm text-gray-800 border-2 border-gray-200 hover:border-[#4DD9C0] transition-colors"
                            >
                                {t.hero.aboutMe}
                            </Link>
                        </div>
                    </div>

                    {/* Photo */}
                    <div className="flex-shrink-0 relative">
                        <div
                            className="blob-rotate absolute -inset-4 rounded-2xl opacity-30"
                            style={{ background: '#4DD9C0', borderRadius: '60% 40% 70% 30% / 50% 60% 40% 50%' }}
                        />
                        <div className="relative w-60 h-72 md:w-72 md:h-80 rounded-2xl overflow-hidden border-4 border-white shadow-xl">
                            <img
                                src="/profile.jpg"
                                alt="Brent Paessens"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    const t = e.target as HTMLImageElement;
                                    t.style.display = 'none';
                                    t.parentElement!.style.background = '#4DD9C0';
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;