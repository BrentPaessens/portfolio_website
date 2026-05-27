'use client';

import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../i18n/translations';
import { SectionCard } from '../../components/SectionCard';

const StagePage = () => {
    const { language } = useLanguage();
    const t = translations[language];
    return (
        <div className="min-h-screen pt-28 pb-16 bg-gradient-to-br from-gray-50 to-white">
            {/* Header Section */}
            <div className="max-w-4xl mx-auto px-6 mb-16">
                <div className="space-y-4">
                    <h1 className="text-5xl font-bold text-gray-900">{t.stage.title}</h1>
                    <p className="text-lg text-gray-600 max-w-2xl">
                        {t.stage.description}
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-6">
                {/* Introduction */}
                <SectionCard icon="🎯" title={t.stage.introduction}>
                    <p>
                        Welkom op mijn Stage-pagina! Hier vertel ik het volledige verhaal van mijn ervaringen tijdens deze bijzondere periode. 
                        Van de eerste dag tot de laatste hebben talrijke momenten voorbijgegaan die me hebben gevormd als developer en persoon.
                    </p>
                    <p>
                        Deze pagina geeft je inzicht in mijn verdere professionele pad, de projecten waaraan ik heb gewerkt, 
                        en de lessen die ik onderweg heb geleerd.
                    </p>
                </SectionCard>

                {/* My Journey */}
                <SectionCard icon="🚀" title={t.stage.myJourney}>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold text-[#4DD9C0] mb-2">Week 1-2: De Start</h3>
                            <p>
                                Vertel hier hoe je bent begonnen, wat je verwachtingen waren, en wat je in de eerste twee weken hebt gedaan. 
                                Je eerste indruk van het team, het bedrijf en de werksfeer kunnen hier mooi naar voren komen.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-[#4DD9C0] mb-2">Week 3-6: Het Inwerken</h3>
                            <p>
                                In deze fase krijg je meestal de eerste echte projecten. Beschrijf welke taken je hebt aangenomen, 
                                welke technologieën je hebt gebruikt, en hoe je je hebt aangepast aan het tempo en de cultuur van het bedrijf.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-[#4DD9C0] mb-2">Week 7-12: Groeien en Werken</h3>
                            <p>
                                Deze periode markeert de echte groei. Welke grotere projecten heb je geleid? Welke uitdagingen ben je tegengekomen 
                                en hoe heb je ze opgelost? Dit is een goed moment om je technische vaardigheden en probleemoplossing te tonen.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-[#4DD9C0] mb-2">Afsluiting: Het Einde en Reflectie</h3>
                            <p>
                                Hoe voelde het om af te sluiten? Wat neem je mee uit deze ervaring? Beschrijf je eindgesprek, je evaluatie, 
                                en wat je voor jezelf hebt bereikt.
                            </p>
                        </div>
                    </div>
                </SectionCard>

                {/* Key Achievements */}
                <SectionCard icon="⭐" title={t.stage.keyAchievements}>
                    <div className="space-y-4">
                        <div className="border-l-4 border-[#4DD9C0] pl-4 py-3">
                            <h3 className="font-semibold text-gray-900 mb-1">Highlight 1: [Projecttitel]</h3>
                            <p className="text-gray-700">
                                Beschrijf een belangrijk project: wat was het doel, welke rol speelde jij, en wat maakte het speciaal?
                            </p>
                        </div>

                        <div className="border-l-4 border-[#4DD9C0] pl-4 py-3">
                            <h3 className="font-semibold text-gray-900 mb-1">Highlight 2: [Persoonlijke Groei]</h3>
                            <p className="text-gray-700">
                                Welk moment markeerde een keerpunt in je groei? Misschien een techniek die je doorhad, of een moment waarop je iets ingewikkelds oploste.
                            </p>
                        </div>

                        <div className="border-l-4 border-[#4DD9C0] pl-4 py-3">
                            <h3 className="font-semibold text-gray-900 mb-1">Highlight 3: [Samenwerking & Impact]</h3>
                            <p className="text-gray-700">
                                Hoe heb je met je team samengewerkt? Wat was je impact op andere teamleden of projecten? Was er feedback die je kreeg?
                            </p>
                        </div>

                        <div className="border-l-4 border-[#4DD9C0] pl-4 py-3">
                            <h3 className="font-semibold text-gray-900 mb-1">Highlight 4: [Extra Achievements]</h3>
                            <p className="text-gray-700">
                                Was er iets waar je trots op bent? Een deadline gehaald, een bug opgelost, of extra werk aangeboden?
                            </p>
                        </div>
                    </div>
                </SectionCard>

                {/* Lessons Learned */}
                <SectionCard icon="💡" title={t.stage.lessonsLearned}>
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-2">Technische Inzichten</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Welke technologieën of frameworks heb je diepgaander leren begrijpen?</li>
                                <li>Welke best practices heb je opgenomen?</li>
                                <li>Wat zou je graag nog verder verkennen?</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-900 mb-2">Persoonlijke Groei</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Hoe ben je persoonlijk gegroeid?</li>
                                <li>Welke zachte vaardigheden heb je verbeterd (communicatie, teamwork, planning)?</li>
                                <li>Wat ben je over jezelf te weten gekomen?</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-900 mb-2">Professionele Inzichten</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Wat heb je over het professionele leven geleerd?</li>
                                <li>Welke uitdagingen heb je het meest waardevol gevonden?</li>
                                <li>Hoe wil je jezelf verder ontwikkelen?</li>
                            </ul>
                        </div>
                    </div>
                </SectionCard>

                {/* Challenges & Solutions */}
                <SectionCard icon="🔧" title={t.stage.challengesSolutions}>
                    <div className="space-y-4">
                        <p>
                            Niet alles verliep vlekkeloos – en dat is prima! Hier kun je beschrijven welke obstakels je tegenkwam en hoe je ze hebt aangepakt.
                        </p>

                        <div className="bg-gray-50 p-4 rounded border border-gray-200">
                            <h3 className="font-semibold text-gray-900 mb-2">Uitdaging 1: [Beschrijving]</h3>
                            <p className="text-gray-700 mb-3">
                                Wat was het probleem en waarom was het lastig?
                            </p>
                            <p className="text-gray-700">
                                <span className="font-semibold text-[#4DD9C0]">Oplossing:</span> Hoe heb je dit aangepakt? Welke hulp vroeg je, en wat heb je geleerd?
                            </p>
                        </div>

                        <div className="bg-gray-50 p-4 rounded border border-gray-200">
                            <h3 className="font-semibold text-gray-900 mb-2">Uitdaging 2: [Beschrijving]</h3>
                            <p className="text-gray-700 mb-3">
                                Wat was het probleem en waarom was het lastig?
                            </p>
                            <p className="text-gray-700">
                                <span className="font-semibold text-[#4DD9C0]">Oplossing:</span> Hoe heb je dit aangepakt? Welke hulp vroeg je, en wat heb je geleerd?
                            </p>
                        </div>
                    </div>
                </SectionCard>

                {/* Skills & Technologies */}
                <SectionCard icon="🛠️" title="Vaardigheden & Technologieën">
                    <div className="space-y-4">
                        <p>
                            Een overzicht van de vaardigheden die je heb gebruikt of verder heb ontwikkeld tijdens je stage.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div className="bg-blue-50 p-4 rounded border border-blue-200">
                                <h3 className="font-semibold text-blue-900 mb-2">Frontend</h3>
                                <p className="text-sm text-blue-800">
                                    Welke frontend-technologieën heb je gebruikt? (React, Vue, HTML/CSS, etc.)
                                </p>
                            </div>

                            <div className="bg-purple-50 p-4 rounded border border-purple-200">
                                <h3 className="font-semibold text-purple-900 mb-2">Backend</h3>
                                <p className="text-sm text-purple-800">
                                    Welke backend-technologieën heb je gebruikt? (Node.js, C#, Python, etc.)
                                </p>
                            </div>

                            <div className="bg-teal-50 p-4 rounded border border-teal-200">
                                <h3 className="font-semibold text-teal-900 mb-2">Databases</h3>
                                <p className="text-sm text-teal-800">
                                    Welke databases heb je mee gewerkt? (MySQL, MongoDB, SQL Server, etc.)
                                </p>
                            </div>

                            <div className="bg-orange-50 p-4 rounded border border-orange-200">
                                <h3 className="font-semibold text-orange-900 mb-2">Tools & Platforms</h3>
                                <p className="text-sm text-orange-800">
                                    Welke tools, frameworks, en platforms heb je geleerd? (Git, Docker, AWS, etc.)
                                </p>
                            </div>
                        </div>
                    </div>
                </SectionCard>

                {/* What's Next */}
                <SectionCard icon="🎓" title="En Nu?">
                    <div className="space-y-4">
                        <p>
                            Deze stage was slechts het begin. Hier kun je beschrijven wat je volgende stappen zijn.
                        </p>

                        <div>
                            <h3 className="font-semibold text-gray-900 mb-2">Vervolgstappen</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Wat zijn je doelen voor de toekomst?</li>
                                <li>Welke richting wil je op gaan in je carrière?</li>
                                <li>Welke vaardigheden wil je nog verder verdiepen?</li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-r from-[#4DD9C0]/10 to-[#FF7F65]/10 p-4 rounded border border-[#4DD9C0]/20">
                            <p className="text-gray-800">
                                💬 <span className="font-semibold">Bedankingen:</span> Wil je hier iemand bedanken? Je mentor, je team, je collega's? 
                                Dit is een mooi moment om je dankbaarheid uit te spreken.
                            </p>
                        </div>
                    </div>
                </SectionCard>
            </div>
        </div>
    );
};

export default StagePage;
