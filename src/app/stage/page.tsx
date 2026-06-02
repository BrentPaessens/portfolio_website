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
                <div className="space-y-6">
                    <div>
                        <h1 className="text-5xl font-bold text-gray-900">{t.stage.title}</h1>
                        <p className="text-lg text-gray-600 mt-4">
                            <span className="font-semibold">{t.stage.subtitle}</span>
                        </p>
                    </div>
                    <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
                        {t.stage.intro}
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-6">
                {/* About Vervio */}
                <SectionCard icon="🏢" title={t.stage.aboutVervio}>
                    <div className="space-y-4">
                        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                            <p className="text-gray-700 mb-4">
                                {t.stage.vervioDescription}
                            </p>
                        </div>
                        {/* Vervio Logo */}
                        <div className="flex items-center justify-center h-48 bg-white rounded-lg">
                            <img src="/assets/Vervio-Logo.png" alt="Vervio Logo" className="h-full object-contain" />
                        </div>
                    </div>
                </SectionCard>

                {/* The Project */}
                <SectionCard icon="🔗" title={t.stage.projectTitle}>
                    <div className="space-y-4">
                        <div className="bg-blue-50 p-4 rounded border border-blue-200">
                            <p className="text-gray-800">
                                {t.stage.projectIntro}
                            </p>
                        </div>
                        <div className="space-y-3">
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-2">🎯 {t.stage.howItWorks}</h4>
                                <p className="text-gray-700">
                                    {t.stage.howItWorksDesc}
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-2">🚀 {t.stage.result}</h4>
                                <p className="text-gray-700">
                                    {t.stage.resultDesc}
                                </p>
                            </div>
                        </div>
                    </div>
                </SectionCard>

               

                {/* Key Achievements */}
                <SectionCard icon="⭐" title={t.stage.keyAchievements}>
                    <div className="space-y-4">
                        <div className="border-l-4 border-[#4DD9C0] pl-4 py-3">
                            <h3 className="font-semibold text-gray-900 mb-1">{t.stage.achievement1Title}</h3>
                            <p className="text-gray-700">
                                {t.stage.achievement1Desc}
                            </p>
                        </div>

                        <div className="border-l-4 border-[#4DD9C0] pl-4 py-3">
                            <h3 className="font-semibold text-gray-900 mb-1">{t.stage.achievement2Title}</h3>
                            <p className="text-gray-700">
                                {t.stage.achievement2Desc}
                            </p>
                        </div>

                        <div className="border-l-4 border-[#4DD9C0] pl-4 py-3">
                            <h3 className="font-semibold text-gray-900 mb-1">{t.stage.achievement3Title}</h3>
                            <p className="text-gray-700">
                                {t.stage.achievement3Desc}
                            </p>
                        </div>

                        <div className="border-l-4 border-[#4DD9C0] pl-4 py-3">
                            <h3 className="font-semibold text-gray-900 mb-1">{t.stage.achievement4Title}</h3>
                            <p className="text-gray-700">
                                {t.stage.achievement4Desc}
                            </p>
                        </div>
                    </div>
                </SectionCard>

                {/* Lessons Learned */}
                <SectionCard icon="💡" title={t.stage.lessonsLearned}>
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-2">{t.stage.technicalInsights}</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>{t.stage.pythonLesson}</li>
                                <li>{t.stage.erpLesson}</li>
                                <li>{t.stage.infrastructureLesson}</li>
                                <li>{t.stage.cicdLesson}</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-900 mb-2">{t.stage.personalGrowth}</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>{t.stage.independenceLesson}</li>
                                <li>{t.stage.communicationLesson}</li>
                                <li>{t.stage.patienceLesson}</li>
                                <li>{t.stage.timeLesson}</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-900 mb-2">{t.stage.professionalInsights}</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>{t.stage.complexityLesson}</li>
                                <li>{t.stage.testingLesson}</li>
                                <li>{t.stage.docsLesson}</li>
                                <li>{t.stage.teamworkLesson}</li>
                            </ul>
                        </div>
                    </div>
                </SectionCard>

                {/* Skills & Technologies */}
                <SectionCard icon="🛠️" title={t.stage.skills}>
                    <div className="space-y-4">
                        <p className="text-gray-700">
                            {t.stage.skillsDescription}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div className="bg-blue-50 p-4 rounded border border-blue-200">
                                <h3 className="font-semibold text-blue-900 mb-2">{t.stage.backendAPIs}</h3>
                                <ul className="text-sm text-blue-800 space-y-1">
                                    <li>• <span className="font-semibold">Python 3.9+</span> {t.stage.pythonInDepth}</li>
                                    <li>• <span className="font-semibold">Pydantic</span> {t.stage.dataValidation}</li>
                                    <li>• <span className="font-semibold">Odoo API</span></li>
                                </ul>
                            </div>

                            <div className="bg-purple-50 p-4 rounded border border-purple-200">
                                <h3 className="font-semibold text-purple-900 mb-2">{t.stage.databases}</h3>
                                <ul className="text-sm text-purple-800 space-y-1">
                                    <li>• <span className="font-semibold">PostgreSQL</span> {t.stage.productionDatabase}</li>
                                </ul>
                            </div>

                            <div className="bg-teal-50 p-4 rounded border border-teal-200">
                                <h3 className="font-semibold text-teal-900 mb-2">{t.stage.infrastructure}</h3>
                                <ul className="text-sm text-teal-800 space-y-1">
                                    <li>• <span className="font-semibold">Linux / Ubuntu</span> {t.stage.serverManagement}</li>
                                    <li>• <span className="font-semibold">Nginx</span> {t.stage.webServer}</li>
                                    <li>• <span className="font-semibold">GitHub Actions</span> {t.stage.cicdPipelines}</li>
                                    <li>• <span className="font-semibold">HTTPS & SSL</span> {t.stage.security}</li>
                                </ul>
                            </div>

                            <div className="bg-orange-50 p-4 rounded border border-orange-200">
                                <h3 className="font-semibold text-orange-900 mb-2">{t.stage.tools}</h3>
                                <ul className="text-sm text-orange-800 space-y-1">
                                    <li>• <span className="font-semibold">Git & GitHub</span> {t.stage.versionControl}</li>
                                    <li>• <span className="font-semibold">Odoo</span> {t.stage.erpPlatform}</li>
                                    <li>• <span className="font-semibold">{t.stage.ecommerce}</span> e-commerce</li>
                                    <li>• <span className="font-semibold">Postman</span> {t.stage.apiTesting}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </SectionCard>

                {/* What's Next */}
                <SectionCard icon="🎓" title={t.stage.whatsNext}>
                    <div className="space-y-4">
                        <p className="text-gray-700">
                            {t.stage.nextIntro}
                        </p>

                        <div>
                            <h3 className="font-semibold text-gray-900 mb-2">🎯 {t.stage.nextSteps}</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>{t.stage.nextStep1}</li>
                                <li>{t.stage.nextStep2}</li>
                                <li>{t.stage.nextStep3}</li>
                                <li>{t.stage.nextStep4}</li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-r from-[#4DD9C0]/10 to-[#FF7F65]/10 p-4 rounded border border-[#4DD9C0]/20">
                            <p className="text-gray-800">
                                🙏 <span className="font-semibold">{t.stage.thanks}</span> {t.stage.thanksDesc}
                            </p>
                        </div>
                    </div>
                </SectionCard>
            </div>
        </div>
    );
};

export default StagePage;   
