import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Laptop, Smartphone } from 'lucide-react';

const HeroSection = () => {
    return (
        <div className="section min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 pt-24 lg:pt-32 flex items-center">
            <div className="max-w-7xl mx-auto px-6 w-full">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center lg:text-left"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-block mb-6"
                        >
                            <span className="bg-blue-100 text-blue-800 px-6 py-2 rounded-full text-sm font-semibold">
                                Digital Transformation Proposal
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
                        >
                            Digital Transformation for{' '}
                            <span className="gradient-text block lg:inline">Shanthinikethan Matriculation Higher Secondary School</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                        >
                            Building a Smart Digital Ecosystem for Students, Teachers & Parents
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
                        >
                            <button
                                onClick={() => document.getElementById('ecosystem').scrollIntoView({ behavior: 'smooth' })}
                                className="btn-primary flex items-center justify-center space-x-2 w-full sm:w-auto"
                            >
                                <span>Explore the Complete System</span>
                                <ArrowRight size={20} />
                            </button>
                            <button
                                onClick={() => document.getElementById('website').scrollIntoView({ behavior: 'smooth' })}
                                className="px-8 py-4 bg-white border-2 border-blue-600 text-blue-600 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all w-full sm:w-auto"
                            >
                                View Demos
                            </button>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="grid grid-cols-3 gap-6 border-t border-gray-200 pt-8 lg:border-none lg:pt-0"
                        >
                            <div>
                                <div className="text-2xl lg:text-3xl font-bold text-blue-600">2</div>
                                <div className="text-xs lg:text-sm text-gray-600">Platforms</div>
                            </div>
                            <div>
                                <div className="text-2xl lg:text-3xl font-bold text-blue-600">100%</div>
                                <div className="text-xs lg:text-sm text-gray-600">Digital</div>
                            </div>
                            <div>
                                <div className="text-2xl lg:text-3xl font-bold text-blue-600">24/7</div>
                                <div className="text-xs lg:text-sm text-gray-600">Access</div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Device Mockups */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative mt-12 lg:mt-0 max-w-lg mx-auto lg:max-w-none w-full"
                    >
                        {/* Laptop Mockup */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="relative z-10"
                        >
                            <div className="laptop-frame bg-gray-900 rounded-xl p-2 sm:p-4 shadow-2xl">
                                <div className="bg-white rounded-lg overflow-hidden aspect-video relative">
                                    <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-4 sm:p-8 h-full flex items-center justify-center">
                                        <div className="text-center text-white">
                                            <Laptop size={48} className="mx-auto mb-2 sm:mb-4 w-12 h-12 sm:w-16 sm:h-16" />
                                            <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">School Website</h3>
                                            <p className="text-blue-100 text-sm sm:text-base">Modern & Professional</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="h-4 sm:h-6 bg-gray-800 rounded-b-lg mt-1"></div>
                            </div>
                        </motion.div>

                        {/* Mobile Mockup */}
                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -right-4 -bottom-12 sm:right-0 sm:bottom-0 z-20 w-32 sm:w-48"
                        >
                            <div className="phone-frame bg-gray-900 rounded-[2rem] p-2 sm:p-3 shadow-2xl">
                                <div className="bg-white rounded-[1.5rem] overflow-hidden aspect-[9/19]">
                                    <div className="bg-gradient-to-br from-green-500 to-green-700 p-4 h-full flex items-center justify-center">
                                        <div className="text-center text-white">
                                            <Smartphone size={32} className="mx-auto mb-2 sm:mb-3 w-8 h-8 sm:w-12 sm:h-12" />
                                            <h4 className="text-sm sm:text-lg font-bold mb-1">Mobile App</h4>
                                            <p className="text-[10px] sm:text-xs text-green-100">iOS & Android</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-green-200 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
