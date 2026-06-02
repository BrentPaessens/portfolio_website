'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { Project, getProjectDescription } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

const TAG_COLORS: Record<string, string> = {
    teal:   'bg-[#e6faf7] text-[#2aaa94]',
    coral:  'bg-[#fff1ee] text-[#d9603d]',
    blue:   'bg-[#e8f0fe] text-[#2563eb]',
    purple: 'bg-[#f3e8ff] text-[#7c3aed]',
    green:  'bg-[#e6faf0] text-[#16a34a]',
};

const PAGE_SIZE = 3;

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

const ProjectCard: React.FC<{ project: Project; currentPage?: number }> = ({ project, currentPage = 0 }) => {
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
            {/* Image */}
            <div className="w-full md:w-80 h-64 md:h-72 flex-shrink-0 bg-gray-50 overflow-hidden flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-500 mb-4 leading-relaxed">{getProjectDescription(project, language as 'nl' | 'en')}</p>
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                            <span
                                key={tag}
                                className={`text-xs font-semibold px-3 py-1 rounded-full ${
                                    TAG_COLORS[project.tagColors?.[i]] ?? TAG_COLORS.teal
                                }`}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={`/projecten/${project.id}?page=${currentPage}`}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
                        style={{ background: '#4DD9C0' }}
                    >
                        {t.projects.viewMore} <span className="text-base">→</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export const ProjectGrid: React.FC<{ projects: Project[] }> = ({ projects }) => {
    const { language } = useLanguage();
    const t = translations[language];
    const router = useRouter();
    const searchParams = useSearchParams();
    const [page, setPage] = useState(0);
    
    useEffect(() => {
        const pageParam = searchParams.get('page');
        if (pageParam) {
            setPage(parseInt(pageParam, 10));
        }
    }, [searchParams]);

    const totalPages = Math.ceil(projects.length / PAGE_SIZE);
    const showPagination = projects.length > PAGE_SIZE;
    const visible = projects.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

    const handlePageChange = (newPage: number) => {
        setPage(newPage);
        router.push(`?page=${newPage}`);
    };

    return (
        <section id="projecten" className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                {/* Heading */}
                <div className="text-center mb-12">
                    <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#4DD9C0' }}>
                        {t.projects.label}
                    </span>
                    <h2 className="text-4xl font-extrabold text-gray-900 mt-2 mb-3">{t.projects.title}</h2>
                    <p className="text-gray-400">{t.projects.description}</p>
                </div>

                {/* Cards */}
                <div className="flex flex-col gap-6">
                    {visible.map((project) => (
                        <ProjectCard key={project.id} project={project} currentPage={page} />
                    ))}
                </div>

                {/* Pagination — only when > 3 projects */}
                {showPagination && (
                    <div className="flex items-center justify-center gap-4 mt-10">
                        <button
                            onClick={() => handlePageChange(Math.max(0, page - 1))}
                            disabled={page === 0}
                            className="w-9 h-9 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-600 hover:border-[#4DD9C0] hover:text-[#4DD9C0] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                            aria-label={t.projects.previousPage}
                        >
                            ‹
                        </button>

                        {Array.from({ length: totalPages }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => handlePageChange(i)}
                                className="w-2.5 h-2.5 rounded-full transition-all"
                                style={i === page
                                    ? { background: '#FF7F65', transform: 'scale(1.3)' }
                                    : { background: '#d1d5db' }
                                }
                                aria-label={`Page ${i + 1}`}
                            />
                        ))}

                        <button
                            onClick={() => handlePageChange(Math.min(totalPages - 1, page + 1))}
                            disabled={page === totalPages - 1}
                            className="w-9 h-9 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-600 hover:border-[#4DD9C0] hover:text-[#4DD9C0] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                            aria-label={t.projects.nextPage}
                        >
                            ›
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProjectCard;