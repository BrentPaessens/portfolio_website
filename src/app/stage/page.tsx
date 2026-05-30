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
                            <span className="font-semibold">Stage | Vervio | 13 weken</span>
                        </p>
                    </div>
                    <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
                        Tijdens mijn stage van 13 weken bij Vervio heb ik mijn Python-kennis verder aangescherpt en voor het eerst echt diep gedoken in de wereld van ERP-systemen. Het was een intense maar enorm leerrijke periode waarin ik van begin tot einde verantwoordelijk was voor een eigen technisch project.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-6">
                {/* About Vervio */}
                <SectionCard icon="🏢" title="Over Vervio">
                    <div className="space-y-4">
                        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                            <p className="text-gray-700 mb-4">
                                Vervio is een Belgisch softwarebedrijf gespecialiseerd in <span className="font-semibold">Odoo-implementaties</span> voor kleine en middelgrote ondernemingen. Ze helpen bedrijven hun processen te digitaliseren en stroomlijnen van voorraadbeheer tot e-commerce met Odoo als centraal platform.
                            </p>
                        </div>
                        {/* Vervio Logo */}
                        <div className="flex items-center justify-center h-48 bg-white rounded-lg">
                            <img src="/assets/Vervio-Logo.png" alt="Vervio Logo" className="h-full object-contain" />
                        </div>
                    </div>
                </SectionCard>

                {/* The Project */}
                <SectionCard icon="🔗" title="Het Project">
                    <div className="space-y-4">
                        <div className="bg-blue-50 p-4 rounded border border-blue-200">
                            <p className="text-gray-800">
                                Mijn stageopdracht bestond uit het bouwen van een <span className="font-semibold">bidirectionele synchronisatieconnector</span> tussen <span className="font-semibold">Odoo</span> (ERP) en <span className="font-semibold">WooCommerce</span> (e-commerce), met een gedeeltelijke uitbreiding naar Shopify.
                            </p>
                        </div>
                        <div className="space-y-3">
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-2">🎯 De Werking:</h4>
                                <p className="text-gray-700">
                                    Odoo fungeert daarbij als de enige bron van waarheid: producten stromen vanuit Odoo naar de webshop, bestellingen komen automatisch terug als verkooporders in Odoo terecht.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 mb-2">🚀 Het Resultaat:</h4>
                                <p className="text-gray-700">
                                    Een volledig operationeel platform dat 24/7 draait op een Ubuntu-server, inclusief automatische deployments via GitHub Actions en een beveiligde HTTPS-verbinding.
                                </p>
                            </div>
                        </div>
                    </div>
                </SectionCard>

               

                {/* Key Achievements */}
                <SectionCard icon="⭐" title={t.stage.keyAchievements}>
                    <div className="space-y-4">
                        <div className="border-l-4 border-[#4DD9C0] pl-4 py-3">
                            <h3 className="font-semibold text-gray-900 mb-1">Volledig Werkende Synchronisatie-Connector</h3>
                            <p className="text-gray-700">
                                Ik heb een production-ready bidirectionele synchronisatieconnector gebouwd die 24/7 draait. Producten, voorraadbeheer en bestellingen synchroniseren naadloos tussen Odoo en WooCommerce volledig automated met proper error handling en retry-logica.
                            </p>
                        </div>

                        <div className="border-l-4 border-[#4DD9C0] pl-4 py-3">
                            <h3 className="font-semibold text-gray-900 mb-1">Infrastructure & Deployment</h3>
                            <p className="text-gray-700">
                                Ik heb alles zelf gedeployed: Ubuntu-server configuratie, Nginx setup, PostgreSQL-database beheer, en een volledige CI/CD-pipeline gebouwd in GitHub Actions. Dit was mijn eerste echte ervaring met production infrastructure,ik heb hiervan veel geleerd over beveiligde deployments en monitoring.
                            </p>
                        </div>

                        <div className="border-l-4 border-[#4DD9C0] pl-4 py-3">
                            <h3 className="font-semibold text-gray-900 mb-1">Communicatie met Stakeholders</h3>
                            <p className="text-gray-700">
                                Ik voerde wekelijkse feedbackmomenten met mijn stagebegeleider en leerde technische beslissingen helder uitleggen aan zowel technische als niet-technische stakeholders een vaardigheid die ik in geen enkel schoolproject zo scherp had kunnen ontwikkelen.
                            </p>
                        </div>

                        <div className="border-l-4 border-[#4DD9C0] pl-4 py-3">
                            <h3 className="font-semibold text-gray-900 mb-1">Grondige Documentatie</h3>
                            <p className="text-gray-700">
                                Ik documenteerde de volledige implementatie: API-endpoints, database schema's, deployment-instructies, en troubleshooting-guides. Dit stelde het team in staat om naadloos het project over te nemen na mijn stage.
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
                                <li><span className="font-semibold">Python:</span> Veel dieper inzicht in REST API design, async/await patterns, en data validation met Pydantic</li>
                                <li><span className="font-semibold">ERP-systemen:</span> Hoe Odoo werkt, hoe je met de JSON-RPC API communiceren, en hoe complexe bedrijfslogica in code vertaalt</li>
                                <li><span className="font-semibold">Infrastructure:</span> Linux-serverbeheer, Nginx, PostgreSQL, en containerisatie, mijn eerste echte DevOps-ervaring</li>
                                <li><span className="font-semibold">CI/CD:</span> GitHub Actions pipelines bouwen voor automatische testing en deployment</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-900 mb-2">Persoonlijke Groei</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li><span className="font-semibold">Zelfstandigheid:</span> Van begin tot einde verantwoordelijk zijn voor een project, je hebt geen safety net, je moet eigenaarschap tonen</li>
                                <li><span className="font-semibold">Communicatie:</span> Leren hoe je technische keuzes uitlegt aan non-technical stakeholders, feedback verwerken en itereren</li>
                                <li><span className="font-semibold">Geduld & Debugging:</span> Leren dat niet alles direct werkt, systematic problem-solving is key</li>
                                <li><span className="font-semibold">Time Management:</span> Balanceren tussen leren, bouwen, en documenteren</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-900 mb-2">Professionele Inzichten</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li><span className="font-semibold">Real-World Complexity:</span> Schoolprojecten zijn nettes dan real-world integraties; je moet pragmatisch keuzes maken</li>
                                <li><span className="font-semibold">Testing & Quality:</span> Hoeveel tijd je moet steken in testing om problemen in production te voorkomen</li>
                                <li><span className="font-semibold">Documentation Matters:</span> Goede docs zijn net zo belangrijk als goede code</li>
                                <li><span className="font-semibold">Teamwerk & Ownership:</span> In een professionele omgeving val je niet zonder vangnet, je leert sneller, maar je moet ook beter communiceren</li>
                            </ul>
                        </div>
                    </div>
                </SectionCard>

                {/* Skills & Technologies */}
                <SectionCard icon="🛠️" title="Vaardigheden & Technologieën">
                    <div className="space-y-4">
                        <p className="text-gray-700">
                            Een overzicht van de vaardigheden en technologieën die ik heb gebruikt en verder heb ontwikkeld tijdens mijn stage bij Vervio.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div className="bg-blue-50 p-4 rounded border border-blue-200">
                                <h3 className="font-semibold text-blue-900 mb-2">Backend & APIs</h3>
                                <ul className="text-sm text-blue-800 space-y-1">
                                    <li>• <span className="font-semibold">Python 3.9+</span> Diepgaand</li>
                                    <li>• <span className="font-semibold">Pydantic</span> Data validation</li>
                                    <li>• <span className="font-semibold">Odoo API</span></li>
                                </ul>
                            </div>

                            <div className="bg-purple-50 p-4 rounded border border-purple-200">
                                <h3 className="font-semibold text-purple-900 mb-2">Databases</h3>
                                <ul className="text-sm text-purple-800 space-y-1">
                                    <li>• <span className="font-semibold">PostgreSQL</span> Production database</li>
                                </ul>
                            </div>

                            <div className="bg-teal-50 p-4 rounded border border-teal-200">
                                <h3 className="font-semibold text-teal-900 mb-2">Infrastructure & DevOps</h3>
                                <ul className="text-sm text-teal-800 space-y-1">
                                    <li>• <span className="font-semibold">Linux / Ubuntu</span> Server management</li>
                                    <li>• <span className="font-semibold">Nginx</span> Web server & reverse proxy</li>
                                    <li>• <span className="font-semibold">GitHub Actions</span> CI/CD pipelines</li>
                                    <li>• <span className="font-semibold">HTTPS & SSL</span> Security</li>
                                </ul>
                            </div>

                            <div className="bg-orange-50 p-4 rounded border border-orange-200">
                                <h3 className="font-semibold text-orange-900 mb-2">Tools & Platforms</h3>
                                <ul className="text-sm text-orange-800 space-y-1">
                                    <li>• <span className="font-semibold">Git & GitHub</span> Version control</li>
                                    <li>• <span className="font-semibold">Odoo</span> ERP platform</li>
                                    <li>• <span className="font-semibold">WooCommerce / Shopify</span> e-commerce</li>
                                    <li>• <span className="font-semibold">Postman</span> API testing</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </SectionCard>

                {/* What's Next */}
                <SectionCard icon="🎓" title="En Nu?">
                    <div className="space-y-4">
                        <p className="text-gray-700">
                            Deze stage was intense en heeft mij enorm gegroeid. Ik sluit deze periode af met veel nieuwe inzichten en een grondige kennismaking met professionele softwareontwikkeling.
                        </p>

                        <div>
                            <h3 className="font-semibold text-gray-900 mb-2">🎯 Vervolgstappen</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Mijn focus verdiepen in <span className="font-semibold">backend development</span> en <span className="font-semibold">cloud architecture</span></li>
                                <li>Meer ervaring opdoen met <span className="font-semibold">DevOps</span> en containerisatie (Docker, Kubernetes)</li>
                                <li>Blijven leren over <span className="font-semibold">enterprise software</span> en hoe grote bedrijven IT-processen structureren</li>
                                <li>Mijn soft skills blijven verbeteren, vooral in <span className="font-semibold">technical leadership</span> en <span className="font-semibold">communication</span></li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-r from-[#4DD9C0]/10 to-[#FF7F65]/10 p-4 rounded border border-[#4DD9C0]/20">
                            <p className="text-gray-800">
                                🙏 <span className="font-semibold">Bedankingen:</span> Dank aan het team van Vervio voor het vertrouwen, de begeleiding, en de kans om aan een echt project te werken. Mijn stagebegeleider heeft me enorm geholpen groeien, van technische feedback tot carrière-advies. Deze ervaring zal me altijd bij blijven.
                            </p>
                        </div>
                    </div>
                </SectionCard>
            </div>
        </div>
    );
};

export default StagePage;   
