import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Over Mij – Brent Paessens',
    description: 'Student Applicatieontwikkeling met passie voor backend development en machine learning.',
};

/* ─── Data ─────────────────────────────────────────────── */

const STATS = [
    { value: '3+',  label: 'jaar ervaring' },
    { value: '10+', label: 'Projecten afgerond' },
    { value: '5+',  label: 'Technologieën' },
    { value: '8',   label: 'Bijdragen' },
];

const SKILLS = [
    {
        category: 'Frontend',
        icon: '🖥️',
        tags: ['React', 'VueJS', 'HTML/CSS', 'Nuxt', 'TailwindCSS'],
        color: '#4DD9C0',
    },
    {
        category: 'Backend',
        icon: '⚙️',
        tags: ['NodeJS', 'C#', '.NET', 'Python'],
        color: '#4DD9C0',
    },
    {
        category: 'AI/ML',
        icon: '🤖',
        tags: ['Python', 'TensorFlow', 'PyTorch', 'Pandas'],
        color: '#FF7F65',
    },
    {
        category: 'Database',
        icon: '🗄️',
        tags: ['MySQL', 'MongoDB', 'SQL Server'],
        color: '#4DD9C0',
    },
];

const PASSIONS = [
    {
        title: 'Mountainbiken',
        icon: '🚵',
        description:
            'In mijn vrije tijd ben ik graag mountainbiken. Het biedt mij de perfecte balans tussen buiten zijn en kilometers later kom je thuis als herboren.',
        tags: ['Natuur', 'Avontuur'],
    },
    {
        title: 'Server Administrator',
        icon: '🖧',
        description:
            'Ik beheer thuis een eigen server omgeving. Dit houdt mij technisch scherp en ik leer hierin effectieve, schaalbare en betrouwbare IT-infrastructuur op te zetten.',
        tags: ['Proxmox', 'Homelab'],
    },
];

/* ─── Page ───────────────────────────────────────────────── */

export default function OverMijPage() {
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
                    <h1 className="text-5xl font-extrabold text-gray-900 mt-2 mb-4">Over mij</h1>
                    <p className="text-lg text-gray-500 max-w-xl mx-auto">
                        Student Applicatieontwikkeling met passie voor<br />
                        backend development en machine learning
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
                                <p className="text-sm text-gray-500">Full-Stack developer &amp; ML Engineer</p>
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

                            <a
                                href="/cv.pdf"
                                download
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
                                style={{ background: '#4DD9C0' }}
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
                                </svg>
                                Download CV
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Mijn verhaal ────────────────────────────── */}
            <section className="max-w-6xl mx-auto px-6 py-10">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Mijn verhaal</h2>
                <div className="grid md:grid-cols-2 gap-8 text-gray-600 text-sm leading-relaxed">
                    <p>
                        Als student Applicatieontwikkeling aan Thomas More Geel ben ik gefascineerd door de mogelijkheden van technologie om complexe problemen op te lossen. Mijn reis in de wereld van programmeren begon enkele jaren geleden, en sindsdien heb ik een veelzijdige developer geworden.
                    </p>
                    <p>
                        Mijn expertise ligt voornamelijk in frontend development, waar ik complexe systemen ontwikkel en optimaliseer. Echter mijn interesse in machine learning en artificial intelligence. Ik heil het als een meerwaarde gezien wanneer een AI-gestuurde werkruimte.
                    </p>
                    <p>
                        Naast mijn opleiding ben ik goed in staat aan persoonlijke projecten te werken. Ik houd van het zoeken naar efficiënte, schaalbare oplossingen te bouwen en nieuwe technologieën en werkwijzen.
                    </p>
                    <p>
                        Naast programmeren ben ik ook actief als server administrator, waar ik leer over het beheer van servers en de infrastructuur, en ik heb een eigen homelab opgebouwd I-T-architectuur en systeemsoftware.
                    </p>
                </div>
            </section>

            {/* ── Technische vaardigheden ─────────────────── */}
            <section className="max-w-6xl mx-auto px-6 py-10">
                <div className="text-center mb-10">
                    <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#4DD9C0' }}>
                        Expertise
                    </span>
                    <h2 className="text-3xl font-extrabold text-gray-900 mt-2">Technische vaardigheden</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {SKILLS.map(({ category, icon, tags, color }) => (
                        <div
                            key={category}
                            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
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
                    ))}
                </div>
            </section>

            {/* ── Buiten werk / Passies ───────────────────── */}
            <section className="max-w-6xl mx-auto px-6 py-10 pb-20">
                <div className="text-center mb-10">
                    <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#4DD9C0' }}>
                        Buiten werk
                    </span>
                    <h2 className="text-3xl font-extrabold text-gray-900 mt-2">Mijn passies</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {PASSIONS.map(({ title, icon, description, tags }) => (
                        <div
                            key={title}
                            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
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
                    ))}
                </div>
            </section>

        </div>
    );
}
