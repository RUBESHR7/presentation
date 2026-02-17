import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Monitor, Cloud, ArrowRight } from 'lucide-react';

const EcosystemSection = () => {
    return (
        <div className="section section-alt">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl font-bold text-gray-900 mb-6">
                        Our Digital <span className="gradient-text">Ecosystem</span>
                    </h2>
                    <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        One Unified Platform Connecting School, Teachers, Students & Parents
                    </p>
                </motion.div>

                {/* Ecosystem Diagram */}
                <div className="relative max-w-6xl mx-auto mb-16">
                    {/* Top Row - Website and Mobile Apps */}
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        {/* Website */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <div className="glass-card p-8 rounded-2xl hover-lift text-center">
                                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                    <Globe size={40} className="text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">School Website</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Professional web presence with admissions, fee structure, and announcements
                                </p>
                                <button
                                    onClick={() => document.getElementById('website').scrollIntoView({ behavior: 'smooth' })}
                                    className="text-blue-600 font-semibold flex items-center justify-center space-x-2 mx-auto hover:text-blue-800 transition-colors"
                                >
                                    <span>View Demo</span>
                                    <ArrowRight size={18} />
                                </button>
                            </div>
                        </motion.div>

                        {/* Mobile App */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <div className="glass-card p-8 rounded-2xl hover-lift text-center">
                                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                    <Smartphone size={40} className="text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Mobile Apps</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Dedicated apps for teachers, parents, and students with real-time updates
                                </p>
                                <button
                                    onClick={() => document.getElementById('teacher-app').scrollIntoView({ behavior: 'smooth' })}
                                    className="text-blue-600 font-semibold flex items-center justify-center space-x-2 mx-auto hover:text-blue-800 transition-colors"
                                >
                                    <span>View Demo</span>
                                    <ArrowRight size={18} />
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Center Cloud */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex justify-center mb-16"
                    >
                        <div className="w-56 h-56 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-2xl animate-pulse-glow">
                            <div className="text-center text-white">
                                <Cloud size={72} className="mx-auto mb-3" />
                                <div className="font-bold text-xl">Secure Cloud</div>
                                <div className="text-sm text-blue-100">Infrastructure</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Bottom Row - Admin Dashboard */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="max-w-md mx-auto"
                    >
                        <div className="glass-card p-8 rounded-2xl hover-lift text-center">
                            <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Monitor size={40} className="text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Admin Dashboard</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Comprehensive control panel with analytics, reports, and management tools
                            </p>
                            <button
                                onClick={() => document.getElementById('admin').scrollIntoView({ behavior: 'smooth' })}
                                className="text-blue-600 font-semibold flex items-center justify-center space-x-2 mx-auto hover:text-blue-800 transition-colors"
                            >
                                <span>View Demo</span>
                                <ArrowRight size={18} />
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Features List */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-20 grid md:grid-cols-3 gap-6"
                >
                    <div className="bg-white p-6 rounded-xl shadow-md text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-2">Unified</div>
                        <p className="text-gray-600">Single integrated platform</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-2">Real-time</div>
                        <p className="text-gray-600">Instant updates & notifications</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-2">Secure</div>
                        <p className="text-gray-600">Cloud-based infrastructure</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default EcosystemSection;
