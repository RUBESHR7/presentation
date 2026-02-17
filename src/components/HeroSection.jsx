import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Laptop, Smartphone } from 'lucide-react';

const HeroSection = () => {
    return (
        <div className="section min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 pt-32">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
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
                            className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
                        >
                            Digital Transformation for{' '}
                            <span className="gradient-text">Shanthinikethan Matriculation Higher Secondary School</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-2xl text-gray-600 mb-8 leading-relaxed"
                        >
                            Building a Smart Digital Ecosystem for Students, Teachers & Parents
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-wrap gap-4"
                        >
                            <button
                                onClick={() => document.getElementById('ecosystem').scrollIntoView({ behavior: 'smooth' })}
                                className="btn-primary flex items-center space-x-2"
                            >
                                <span>Explore the Complete System</span>
                                <ArrowRight size={20} />
                            </button>
                            <button
                                onClick={() => document.getElementById('website').scrollIntoView({ behavior: 'smooth' })}
                                className="px-8 py-4 bg-white border-2 border-blue-600 text-blue-600 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all"
                            >
                                View Demos
                            </button>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="grid grid-cols-3 gap-6 mt-12"
                        >
                            <div>
                                <div className="text-3xl font-bold text-blue-600">2</div>
                                <div className="text-sm text-gray-600">Platforms</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-blue-600">100%</div>
                                <div className="text-sm text-gray-600">Digital</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-blue-600">24/7</div>
                                <div className="text-sm text-gray-600">Access</div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Device Mockups */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative"
                    >
                        {/* Laptop Mockup */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="relative z-10"
                        >
                            <div className="laptop-frame">
                                <div className="bg-white rounded-lg overflow-hidden aspect-video">
                                    <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 h-full flex items-center justify-center">
                                        <div className="text-center text-white">
                                            <Laptop size={64} className="mx-auto mb-4" />
                                            <h3 className="text-2xl font-bold mb-2">School Website</h3>
                                            <p className="text-blue-100">Modern & Professional</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="h-6 bg-gray-800 rounded-b-lg"></div>
                            </div>
                        </motion.div>

                        {/* Mobile Mockup */}
                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute right-0 bottom-0 z-20"
                        >
                            <div className="phone-frame w-48">
                                <div className="bg-white rounded-3xl overflow-hidden aspect-[9/19]">
                                    <div className="bg-gradient-to-br from-green-500 to-green-700 p-6 h-full flex items-center justify-center">
                                        <div className="text-center text-white">
                                            <Smartphone size={48} className="mx-auto mb-3" />
                                            <h4 className="text-lg font-bold mb-1">Mobile App</h4>
                                            <p className="text-xs text-green-100">iOS & Android</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-50"></div>
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-green-200 rounded-full blur-3xl opacity-50"></div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
