'use client';

import React, { useRef, useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../i18n/translations';
import projects from '../../data/projects.json';

/* ─── Custom Hook for Scroll Animation ─────────────────── */
const useInView = (ref: React.RefObject<HTMLDivElement | null>) => {
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref]);

    return isInView;
};

/* ─── Data ─────────────────────────────────────────────── */

const getSTATS = (t: any, projectCount: number) => [
    // { value: '0',  label: t.aboutMe.yearsExperience },
    { value: projectCount.toString(), label: t.aboutMe.projectsCompleted },
    { value: '5+',  label: t.aboutMe.technologies },
    { value: '4',   label: t.aboutMe.contributions },
];

const getSKILLS = (t: any) => [
    {
        category: t.aboutMe.frontend,
        icon: '🖥️',
        tags: ['React', 'VueJS', 'HTML/CSS', 'Laravel', 'TailwindCSS'],
        color: '#4DD9C0',
    },
    {
        category: t.aboutMe.backend,
        icon: '⚙️',
        tags: ['C#', '.NET', 'Python', 'Java', 'JavaScript'],
        color: '#4DD9C0',
    },
    {
        category: t.aboutMe.aiml,
        icon: '🤖',
        tags: ['Python', 'TensorFlow', 'PyTorch', 'Pandas', 'FastAPI'],
        color: '#FF7F65',
    },
    {
        category: t.aboutMe.database,
        icon: '🗄️',
        tags: ['MySQL', 'MongoDB', 'SQL Server', 'PostgreSQL'],
        color: '#4DD9C0',
    },
];

const getPASSIONS = (t: any) => [
    {
        title: t.aboutMe.mountainbikingTitle,
        icon: '🚵',
        description: t.aboutMe.mountainbikingDesc,
        tags: [t.aboutMe.nature, t.aboutMe.adventure],
    },
    {
        title: t.aboutMe.serverAdminTitle,
        icon: '🖧',
        description: t.aboutMe.serverAdminDesc,
        tags: [t.aboutMe.minecraft, t.aboutMe.serverAdmin],
    },
];

/* ─── Components ───────────────────────────────────────── */

const SkillCard: React.FC<{ category: string; icon: string; tags: string[]; color: string }> = ({ category, icon, tags, color }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref);

    return (
        <div
            ref={ref}
            className={`bg-white rounded-2xl border border-gray-100 shadow-sm p-6 transition-all duration-700 transform ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
            <div className="flex items-center gap-3 mb-4">
                <span
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-lg"
                    style={{ background: color + '22' }}
                >
                    {icon}
                </span>
                <h3 className="font-bold text-gray-900">{category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                    <span
                        key={tag}
                        className="text-xs font-semibold px-3 py-1 rounded-full"
                        style={{ background: color + '22', color: color === '#4DD9C0' ? '#2aaa94' : '#d9603d' }}
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
};

const PassionCard: React.FC<{ title: string; icon: string; description: string; tags: string[] }> = ({ title, icon, description, tags }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref);

    return (
        <div
            ref={ref}
            className={`bg-white rounded-2xl border border-gray-100 shadow-sm p-6 transition-all duration-700 transform ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
            {/* icon placeholder / image area */}
            <div
                className="w-full h-28 rounded-xl mb-5 flex items-center justify-center text-5xl"
                style={{ background: '#f0fdfb' }}
            >
                {icon}
            </div>
            <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">{description}</p>
            <div className="flex gap-2 flex-wrap">
                {tags.map((tag) => (
                    <span
                        key={tag}
                        className="text-xs font-semibold px-3 py-1 rounded-full"
                        style={{ background: '#4DD9C022', color: '#2aaa94' }}
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
};

/* ─── Page ───────────────────────────────────────────────── */

export default function OverMijPage() {
    const { language } = useLanguage();
    const t = translations[language];
    const projectCount = projects.length;
    const STATS = getSTATS(t, projectCount);
    const SKILLS = getSKILLS(t);
    const PASSIONS = getPASSIONS(t);
    return (
        <div>

            {/* ── Hero banner ─────────────────────────────── */}
            <section className="relative pt-32 pb-16 overflow-hidden">
                {/* blobs */}
                <div
                    className="blob-rotate absolute top-10 right-0 w-72 h-72 opacity-20 pointer-events-none"
                    style={{ background: '#4DD9C0', borderRadius: '60% 40% 70% 30% / 50% 60% 40% 50%' }}
                />
                <div
                    className="blob-rotate-reverse absolute bottom-0 left-0 w-56 h-56 opacity-15 pointer-events-none"
                    style={{ background: '#FF7F65', borderRadius: '40% 60% 30% 70% / 60% 40% 60% 40%' }}
                />
                <div className="max-w-6xl mx-auto px-6 text-center relative">
                    <h1 className="text-5xl font-extrabold text-gray-900 mt-2 mb-4">{t.aboutMe.title}</h1>
                    <p className="text-lg text-gray-500 max-w-xl mx-auto">
                        {t.aboutMe.description}
                    </p>
                </div>
            </section>

            {/* ── Profile card ────────────────────────────── */}
            <section className="max-w-6xl mx-auto px-6 py-12">
                <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
                    <div className="flex flex-col md:flex-row gap-10 items-start">

                        {/* Photo */}
                        <div className="flex-shrink-0 flex flex-col items-center gap-4">
                            <div
                                className="w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-lg"
                                style={{ background: '#4DD9C0' }}
                            >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src="/profile.jpg"
                                    alt="Brent Paessens"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="text-center">
                                <p className="font-bold text-gray-900 text-lg">Brent Paessens</p>
                                <p className="text-sm text-gray-500">{t.aboutMe.profileSubtitle}</p>
                            </div>
                        </div>

                        {/* Stats + CV button */}
                        <div className="flex-1">
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                                {STATS.map(({ value, label }) => (
                                    <div
                                        key={label}
                                        className="rounded-2xl p-4 text-center border border-gray-100 shadow-sm"
                                    >
                                        <p className="text-2xl font-extrabold" style={{ color: '#4DD9C0' }}>{value}</p>
                                        <p className="text-xs text-gray-500 mt-1 leading-tight">{label}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-3">
                                <a
                                    href="/CV.pdf"
                                    download
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
                                    style={{ background: '#4DD9C0' }}
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
                                    </svg>
                                    {t.aboutMe.downloadCV}
                                </a>
                                <a
                                    href="/CV.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all border-2"
                                    style={{ borderColor: '#4DD9C0', color: '#4DD9C0', background: 'transparent' }}
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    {t.aboutMe.viewCV}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Mijn verhaal ────────────────────────────── */}
            <section className="max-w-6xl mx-auto px-6 py-10">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-8">{t.aboutMe.myStory}</h2>
                <div className="grid md:grid-cols-2 gap-8 text-gray-600 text-sm leading-relaxed">
                    <p>{t.aboutMe.storyPart1}</p>
                    <p>{t.aboutMe.storyPart2}</p>
                    <p>{t.aboutMe.storyPart3}</p>
                </div>
            </section>

            {/* ── Technische vaardigheden ─────────────────── */}
            <section className="max-w-6xl mx-auto px-6 py-10">
                <div className="text-center mb-10">
                    <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#4DD9C0' }}>
                        {t.aboutMe.expertise}
                    </span>
                    <h2 className="text-3xl font-extrabold text-gray-900 mt-2">{t.aboutMe.technicalSkills}</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {SKILLS.map(({ category, icon, tags, color }) => (
                        <SkillCard key={category} category={category} icon={icon} tags={tags} color={color} />
                    ))}
                </div>
            </section>

            {/* ── Buiten werk / Passies ───────────────────── */}
            <section className="max-w-6xl mx-auto px-6 py-10 pb-20">
                <div className="text-center mb-10">
                    <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#4DD9C0' }}>
                        {t.aboutMe.outsideWork}
                    </span>
                    <h2 className="text-3xl font-extrabold text-gray-900 mt-2">{t.aboutMe.myPassions}</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {PASSIONS.map(({ title, icon, description, tags }) => (
                        <PassionCard key={title} title={title} icon={icon} description={description} tags={tags} />
                    ))}
                </div>
            </section>

        </div>
    );
}
