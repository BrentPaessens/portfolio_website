import React from 'react';

interface SectionCardProps {
    icon?: string;
    title: string;
    children: React.ReactNode;
}

export const SectionCard: React.FC<SectionCardProps> = ({ icon, title, children }) => {
    return (
        <div className="mb-12 p-8 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-6">
                {icon && <span className="text-3xl">{icon}</span>}
                <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
            </div>
            <div className="text-gray-700 leading-relaxed space-y-4">
                {children}
            </div>
        </div>
    );
};
