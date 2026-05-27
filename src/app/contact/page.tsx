'use client';

import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../i18n/translations';

const PHONE = '+32 4xx xx xx xx'; // ← vervang met jouw nummer
const PHONE_HREF = 'tel:+324xxxxxxxx'; // ← vervang met jouw nummer

const getContactItems = (t: any) => [
    {
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        label: t.contact.email,
        value: 'brentpaessens@gmail.com',
        href: 'mailto:brentpaessens@gmail.com',
        cta: t.contact.sendEmail,
    },
    {
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
        ),
        label: t.contact.phone,
        value: PHONE,
        href: PHONE_HREF,
        cta: t.contact.callMe,
    },
    {
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        label: t.contact.location,
        value: t.footer.location,
        href: 'https://maps.google.com/?q=Zelem,Belgium',
        cta: t.contact.viewOnMap,
    },
];

const SOCIAL_LINKS = [
    {
        label: 'LinkedIn',
        description: 'Professionele updates en netwerken',
        href: 'https://www.linkedin.com/in/brent-paessens/',
        color: '#0A66C2',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
            </svg>
        ),
    },
    {
        label: 'Instagram',
        description: 'Persoonlijke momenten en projecten',
        href: 'https://instagram.com',
        color: '#E1306C',
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
        ),
    },
    {
        label: 'Github',
        description: 'Open source projecten en code',
        href: 'https://github.com/BrentPaessens',
        color: '#24292e',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
        ),
    },
];

export default function ContactPage() {
    const { language } = useLanguage();
    const t = translations[language];
    const CONTACT_ITEMS = getContactItems(t);
    return (
        <div>

            {/* ── Hero CTA banner ──────────────────────────── */}
            <section className="relative pt-32 pb-20 overflow-hidden">

                {/* Animated blobs */}
                <div
                    className="blob-rotate absolute top-8 right-[-60px] w-80 h-80 opacity-25 pointer-events-none"
                    style={{ background: '#4DD9C0', borderRadius: '60% 40% 70% 30% / 50% 60% 40% 50%' }}
                />
                <div
                    className="blob-rotate-reverse absolute bottom-[-20px] left-[-40px] w-64 h-64 opacity-20 pointer-events-none"
                    style={{ background: '#FF7F65', borderRadius: '40% 60% 30% 70% / 60% 40% 60% 40%' }}
                />
                <div
                    className="blob-rotate absolute top-1/2 left-1/4 w-40 h-40 opacity-10 pointer-events-none"
                    style={{ background: '#4DD9C0', borderRadius: '50% 50% 70% 30% / 40% 60% 40% 60%', animationDuration: '22s' }}
                />

                <div className="max-w-4xl mx-auto px-6 text-center relative">
                    {/* Availability badge */}
                    <span
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6"
                        style={{ background: '#4DD9C022', color: '#2aaa94', border: '1px solid #4DD9C030' }}
                    >
                        <span className="w-2 h-2 rounded-full bg-[#4DD9C0] animate-pulse inline-block" />
                        Beschikbaar voor nieuwe projecten
                    </span>

                    <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-5 leading-tight">
                        Laten we iets<br />
                        <span style={{ color: '#4DD9C0' }}>groots bouwen</span> samen
                    </h1>

                    <p className="text-gray-500 max-w-xl mx-auto text-lg leading-relaxed mb-10">
                        Heb je een project idee, zoek je een developer, of wil je gewoon eens babbelen over tech?
                        Ik reageer binnen 24 uur.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <a
                            href="mailto:brentpaessens@gmail.com"
                            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white text-sm shadow-lg hover:scale-105 transition-transform"
                            style={{ background: '#4DD9C0' }}
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Mail mij direct
                        </a>
                        <a
                            href="https://www.linkedin.com/in/brent-paessens/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-gray-700 text-sm border border-gray-200 bg-white hover:scale-105 transition-transform shadow-sm"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                                <circle cx="4" cy="4" r="2" />
                            </svg>
                            Connect op LinkedIn
                        </a>
                    </div>
                </div>
            </section>

            {/* ── Two-column section ──────────────────────── */}
            <section className="max-w-6xl mx-auto px-6 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* ── Left: Direct contact ────────────── */}
                    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
                        <div className="flex items-center gap-3 mb-2">
                            <span className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm" style={{ background: '#4DD9C0' }}>📬</span>
                            <h2 className="text-xl font-bold text-gray-900">Direct contact</h2>
                        </div>
                        <p className="text-sm text-gray-500 leading-relaxed mb-8">
                            Kies de manier die jou het beste uitkomt. Ik sta altijd open voor nieuwe
                            kansen en samenwerkingen.
                        </p>

                        <div className="flex flex-col gap-4">
                            {CONTACT_ITEMS.map(({ icon, label, value, href, cta }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target={href.startsWith('http') ? '_blank' : undefined}
                                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-[#4DD9C0]/10 border border-transparent hover:border-[#4DD9C0]/30 transition-all group"
                                >
                                    <span
                                        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 text-white"
                                        style={{ background: '#4DD9C0' }}
                                    >
                                        {icon}
                                    </span>
                                    <div className="flex-1">
                                        <p className="text-xs font-semibold text-gray-400 mb-0.5">{label}</p>
                                        <p className="text-sm font-medium text-gray-800">{value}</p>
                                    </div>
                                    <span className="text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: '#4DD9C0' }}>
                                        {cta}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* ── Right: Volg mij ─────────────────── */}
                    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
                        <div className="flex items-center gap-3 mb-2">
                            <span className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm" style={{ background: '#FF7F65' }}>🌐</span>
                            <h2 className="text-xl font-bold text-gray-900">Volg mij online</h2>
                        </div>
                        <p className="text-sm text-gray-500 leading-relaxed mb-8">
                            Blijf op de hoogte van mijn nieuwste projecten, updates en content via
                            deze platformen.
                        </p>

                        <div className="flex flex-col gap-4">
                            {SOCIAL_LINKS.map(({ label, description, href, icon, color }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-[#4DD9C0]/10 border border-transparent hover:border-[#4DD9C0]/30 transition-all group"
                                >
                                    <span
                                        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 text-white"
                                        style={{ background: color }}
                                    >
                                        {icon}
                                    </span>
                                    <div className="flex-1">
                                        <p className="text-sm font-semibold text-gray-800">{label}</p>
                                        <p className="text-xs text-gray-400 mt-0.5">{description}</p>
                                    </div>
                                    <span className="text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: '#4DD9C0' }}>
                                        Bekijk →
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>

                </div>

            </section>

        </div>
    );
}
