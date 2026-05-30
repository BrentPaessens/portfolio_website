'use client';
import React from 'react';
import { Project, getProjectDescription, getProjectStatus } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
                        >
                            {/* Status Badge */}
                            <div className="relative h-32 bg-gradient-to-br from-orange-100 to-orange-50 flex items-center justify-center overflow-hidden">
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
                            <div className="p-6 flex flex-col h-full">
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#FF7F65] transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                                        {getProjectDescription(project, language as 'nl' | 'en')}
                                    </p>

                                    {/* Tags */}
                                    {project.tags && project.tags.length > 0 && (
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tags.map((tag, i) => {
                                                const colors: Record<string, string> = {
                                                    teal: 'bg-[#e6faf7] text-[#2aaa94]',
                                                    coral: 'bg-[#fff1ee] text-[#d9603d]',
                                                    blue: 'bg-[#e8f0fe] text-[#2563eb]',
                                                    purple: 'bg-[#f3e8ff] text-[#7c3aed]',
                                                    green: 'bg-[#e6faf0] text-[#16a34a]',
                                                };
                                                return (
                                                    <span
                                                        key={tag}
                                                        className={`text-xs font-semibold px-3 py-1 rounded-full ${
                                                            colors[project.tagColors?.[i] as keyof typeof colors] ?? colors.teal
                                                        }`}
                                                    >
                                                        {tag}
                                                    </span>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>

                                {/* Start Date */}
                                {project.startDate && (
                                    <div className="pt-4 border-t border-gray-100">
                                        <p className="text-xs text-gray-400 font-semibold uppercase tracking-widest">
                                            Start: <span className="text-[#FF7F65]">{project.startDate}</span>
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UpcomingProjectsSection;
