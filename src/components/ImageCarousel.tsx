'use client';
import React, { useState } from 'react';

interface ImageCarouselProps {
    images: string[];
    title: string;
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, title }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!images || images.length === 0) return null;

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    return (
        <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Project afbeeldingen</h2>
            <div className="relative">
                {/* Main Image */}
                <div className="w-full rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-gray-50 h-96 flex items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={images[currentIndex]}
                        alt={`${title} afbeelding ${currentIndex + 1}`}
                        className="w-full h-full object-contain p-4"
                    />
                </div>

                {/* Navigation Arrows */}
                {images.length > 1 && (
                    <>
                        <button
                            onClick={handlePrev}
                            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors"
                            aria-label="Vorige afbeelding"
                        >
                            <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button
                            onClick={handleNext}
                            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors"
                            aria-label="Volgende afbeelding"
                        >
                            <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </>
                )}

                {/* Dots Indicator */}
                <div className="flex justify-center gap-2 mt-4">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-colors ${
                                index === currentIndex ? 'bg-[#4DD9C0]' : 'bg-gray-300'
                            }`}
                            aria-label={`Ga naar afbeelding ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Counter */}
                <p className="text-center text-sm text-gray-500 mt-3">
                    {currentIndex + 1} van {images.length}
                </p>
            </div>
        </div>
    );
};
