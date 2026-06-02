'use client';
import React, { useRef, useState, useEffect } from 'react';
import { Project, getProjectDescription, getProjectStatus } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

// Custom hook for scroll animation
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

const TAG_COLORS: Record<string, string> = {
    teal:   'bg-[#e6faf7] text-[#2aaa94]',
    coral:  'bg-[#fff1ee] text-[#d9603d]',
    blue:   'bg-[#e8f0fe] text-[#2563eb]',
    purple: 'bg-[#f3e8ff] text-[#7c3aed]',
    green:  'bg-[#e6faf0] text-[#16a34a]',
};

const UpcomingProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    const { language } = useLanguage();
    const t = translations[language];
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref);

    return (
        <div
            ref={ref}
            className={`bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row group hover:shadow-md transition-all duration-700 transform ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
            {/* Status Badge / Image Area */}
            <div className="w-full md:w-80 h-64 md:h-72 flex-shrink-0 bg-gradient-to-br from-orange-100 to-orange-50 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 opacity-10">
                    <div
                        className="absolute top-2 right-2 w-24 h-24 rounded-full opacity-50"
                        style={{ background: '#FF7F65', borderRadius: '60% 40% 70% 30% / 50% 60% 40% 50%' }}
                    />
                </div>
                <div className="relative z-10 text-center">
                    <p className="text-xs font-semibold text-orange-600 uppercase tracking-widest">
                        {getProjectStatus(project, language as 'nl' | 'en') || t.upcoming.inPreparation}
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                        {getProjectDescription(project, language as 'nl' | 'en')}
                    </p>

                    {/* Tags */}
                    {project.tags && project.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, i) => (
                                <span
                                    key={tag}
                                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                                        TAG_COLORS[project.tagColors?.[i] as keyof typeof TAG_COLORS] ?? TAG_COLORS.teal
                                    }`}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                {/* Start Date */}
                {project.startDate && (
                    <div className="pt-4 border-t border-gray-100 mt-4">
                        <p className="text-xs text-gray-400 font-semibold uppercase tracking-widest">
                            Start: <span style={{ color: '#FF7F65' }}>{project.startDate}</span>
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

const UpcomingProjectsSection: React.FC<{ projects: Project[] }> = ({ projects }) => {
    const { language } = useLanguage();
    const t = translations[language];

    if (!projects || projects.length === 0) {
        return null;
    }

    return (
        <section id="upcoming" className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-6xl mx-auto px-6">
                {/* Heading */}
                <div className="text-center mb-12">
                    <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#FF7F65' }}>
                        {t.upcoming.label}
                    </span>
                    <h2 className="text-4xl font-extrabold text-gray-900 mt-2 mb-3">{t.upcoming.title}</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        {t.upcoming.description}
                    </p>
                </div>

                {/* Upcoming Projects Cards */}
                <div className="flex flex-col gap-6">
                    {projects.map((project) => (
                        <UpcomingProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UpcomingProjectsSection;
