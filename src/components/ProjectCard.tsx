'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Project } from '../types';

const TAG_COLORS: Record<string, string> = {
    teal:   'bg-[#e6faf7] text-[#2aaa94]',
    coral:  'bg-[#fff1ee] text-[#d9603d]',
    blue:   'bg-[#e8f0fe] text-[#2563eb]',
    purple: 'bg-[#f3e8ff] text-[#7c3aed]',
    green:  'bg-[#e6faf0] text-[#16a34a]',
};

const PAGE_SIZE = 3;

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row group">
        {/* Image */}
        <div className="md:w-52 w-full h-44 md:h-auto flex-shrink-0 bg-gray-50 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col justify-between flex-1">
            <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-sm text-gray-500 mb-4 leading-relaxed">{project.description}</p>
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
                    href={`/projecten/${project.id}`}
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
                    style={{ background: '#4DD9C0' }}
                >
                    Bekijk <span className="text-base">→</span>
                </Link>
            </div>
        </div>
    </div>
);

export const ProjectGrid: React.FC<{ projects: Project[] }> = ({ projects }) => {
    const totalPages = Math.ceil(projects.length / PAGE_SIZE);
    const [page, setPage] = useState(0);
    const showPagination = projects.length > PAGE_SIZE;
    const visible = projects.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

    return (
        <section id="projecten" className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                {/* Heading */}
                <div className="text-center mb-12">
                    <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#4DD9C0' }}>
                        Portfolio
                    </span>
                    <h2 className="text-4xl font-extrabold text-gray-900 mt-2 mb-3">Recente projecten</h2>
                    <p className="text-gray-400">Bekijk mijn projecten uit de hele opleiding</p>
                </div>

                {/* Cards */}
                <div className="flex flex-col gap-6">
                    {visible.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                {/* Pagination — only when > 3 projects */}
                {showPagination && (
                    <div className="flex items-center justify-center gap-4 mt-10">
                        <button
                            onClick={() => setPage((p) => Math.max(0, p - 1))}
                            disabled={page === 0}
                            className="w-9 h-9 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-600 hover:border-[#4DD9C0] hover:text-[#4DD9C0] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                            aria-label="Vorige pagina"
                        >
                            ‹
                        </button>

                        {Array.from({ length: totalPages }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setPage(i)}
                                className="w-2.5 h-2.5 rounded-full transition-all"
                                style={i === page
                                    ? { background: '#FF7F65', transform: 'scale(1.3)' }
                                    : { background: '#d1d5db' }
                                }
                                aria-label={`Pagina ${i + 1}`}
                            />
                        ))}

                        <button
                            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
                            disabled={page === totalPages - 1}
                            className="w-9 h-9 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-600 hover:border-[#4DD9C0] hover:text-[#4DD9C0] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                            aria-label="Volgende pagina"
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