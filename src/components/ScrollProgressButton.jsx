import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollProgressButton = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = `${totalScroll / windowHeight}`;

            setScrollProgress(scroll);

            if (totalScroll > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    // Circle config
    const radius = 20;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - scrollProgress * circumference;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="fixed bottom-8 right-8 z-50 cursor-pointer group"
                    onClick={scrollToTop}
                >
                    {/* Background Circle with Shadow */}
                    <div className="relative w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center transition-transform group-hover:-translate-y-1">
                        {/* Progress Ring SVG */}
                        <svg
                            className="absolute top-0 left-0 w-full h-full -rotate-90 transform"
                            width="56"
                            height="56"
                            viewBox="0 0 56 56"
                        >
                            {/* Track */}
                            <circle
                                cx="28"
                                cy="28"
                                r={radius}
                                fill="none"
                                stroke="#e5e7eb" // gray-200
                                strokeWidth="4"
                            />
                            {/* Progress Indicator */}
                            <circle
                                cx="28"
                                cy="28"
                                r={radius}
                                fill="none"
                                stroke="#2563eb" // blue-600
                                strokeWidth="4"
                                strokeDasharray={circumference}
                                strokeDashoffset={strokeDashoffset}
                                strokeLinecap="round"
                                className="transition-all duration-100 ease-out"
                            />
                        </svg>

                        {/* Arrow Icon */}
                        <ArrowUp className="text-gray-700 group-hover:text-blue-600 transition-colors" size={24} />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ScrollProgressButton;
