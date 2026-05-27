import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import projects from '../../../data/projects.json';
import { Project } from '../../../types';
import { ImageCarousel } from '../../../components/ImageCarousel';

const TAG_COLORS: Record<string, string> = {
    teal:   'bg-[#e6faf7] text-[#2aaa94]',
    coral:  'bg-[#fff1ee] text-[#d9603d]',
    blue:   'bg-[#e8f0fe] text-[#2563eb]',
    purple: 'bg-[#f3e8ff] text-[#7c3aed]',
    green:  'bg-[#e6faf0] text-[#16a34a]',
};

interface Props {
    params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
    return (projects as Project[]).map((p) => ({ id: String(p.id) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const project = (projects as Project[]).find((p) => p.id === Number(id));
    if (!project) return { title: 'Project niet gevonden' };
    return {
        title: `${project.title} – Brent Paessens`,
        description: project.description,
    };
}

export default async function ProjectDetailPage({ params }: Props) {
    const { id } = await params;
    const project = (projects as Project[]).find((p) => p.id === Number(id));
    if (!project) notFound();

    return (
        <div className="min-h-screen">

            {/* ── Top bar ─────────────────────────────────── */}
            <div className="pt-24 pb-4 max-w-6xl mx-auto px-6">
                <Link
                    href="/#projecten"
                    className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#4DD9C0] transition-colors"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M15 19l-7-7 7-7" />
                    </svg>
                    Terug naar projecten
                </Link>
            </div>

            {/* ── Main grid ────────────────────────────────── */}
            <div className="max-w-6xl mx-auto px-6 pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                    {/* ── Left column (2/3) ───────────────── */}
                    <div className="lg:col-span-2 space-y-10">

                        {/* Header + image */}
                        <div>
                            <div className="flex flex-wrap items-center gap-3 mb-3">
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
                            <h1 className="text-3xl font-extrabold text-gray-900 mb-4">{project.title}</h1>

                            {/* Screenshot */}
                            <div className="w-full rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-gray-50 h-64 md:h-80 flex items-center justify-center">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>

                        {/* Over het project */}
                        <div>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">Over het project</h2>
                            <p className="text-sm text-gray-600 leading-relaxed">{project.longDescription}</p>
                        </div>

                        {/* Wat heb ik specifiek gedaan */}
                        {project.specifics && project.specifics.length > 0 && (
                            <div>
                                <h2 className="text-xl font-bold text-gray-900 mb-4">Wat heb ik specifiek gedaan</h2>
                                <ul className="space-y-3">
                                    {project.specifics.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                                            <span
                                                className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                                                style={{ background: '#FF7F65' }}
                                            />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Belangrijkste features */}
                        <div>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Belangrijkste features</h2>
                            <ul className="space-y-3">
                                {project.features.map((f, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                                        <span
                                            className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                                            style={{ background: '#4DD9C0' }}
                                        />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Technische implementatie */}
                        <div>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Technische implementatie</h2>
                            <div
                                className="rounded-2xl p-5 font-mono text-sm text-green-300 leading-relaxed"
                                style={{ background: '#1E2235' }}
                            >
                                <p className="text-gray-400 mb-2"># Tech stack</p>
                                {project.techStack.map((t, i) => (
                                    <p key={i}>
                                        <span style={{ color: '#4DD9C0' }}>import</span>{' '}
                                        <span className="text-white">{t.replace(/\s/g, '_')}</span>
                                    </p>
                                ))}
                            </div>
                        </div>

                        {/* Galerij - Carousel */}
                        {project.gallery && project.gallery.length > 0 && (
                            <ImageCarousel images={project.gallery} title={project.title} />
                        )}

                    </div>

                    {/* ── Right column (1/3) ──────────────── */}
                    <div className="space-y-6 md:sticky md:top-24 md:h-fit">

                        {/* Project info card */}
                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5">
                            <h3 className="font-bold text-gray-900">Project info</h3>

                            <div>
                                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-1">Status</p>
                                <span
                                    className="inline-flex items-center gap-1.5 text-sm font-semibold px-3 py-1 rounded-full"
                                    style={{ background: '#e6faf7', color: '#2aaa94' }}
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#4DD9C0]" />
                                    {project.status}
                                </span>
                            </div>

                            <div>
                                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-1">Datum</p>
                                <p className="text-sm text-gray-700">{project.date}</p>
                            </div>

                            <div>
                                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-1">Mijn Rol</p>
                                <p className="text-sm text-gray-700">{project.role}</p>
                            </div>

                            <div>
                                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-1">Team</p>
                                <p className="text-sm text-gray-700">{project.teamSize}</p>
                            </div>
                        </div>

                        {/* Tech stack */}
                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                            <h3 className="font-bold text-gray-900 mb-4">Tech stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((t) => (
                                    <span
                                        key={t}
                                        className="text-xs font-semibold px-3 py-1 rounded-full"
                                        style={{ background: '#e6faf7', color: '#2aaa94' }}
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* CTA buttons */}
                        {(project.link || project.github) && (
                            <div className="flex flex-col gap-3">
                                {project.link && (
                                    <button
                                        disabled
                                        className="w-full py-3 rounded-full text-center text-sm font-semibold text-white transition-opacity opacity-50 cursor-not-allowed"
                                        style={{ background: '#4DD9C0' }}
                                    >
                                        Bekijk Demo
                                    </button>
                                )}
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full py-3 rounded-full text-center text-sm font-semibold border-2 border-gray-200 text-gray-700 hover:border-[#4DD9C0] hover:text-[#4DD9C0] transition-colors"
                                    >
                                        Github Repository
                                    </a>
                                )}
                            </div>
                        )}

                    </div>
                </div>
            </div>

        </div>
    );
}
