import React from 'react';
import { motion } from 'framer-motion';
import { Check, AlertCircle } from 'lucide-react';

const FeatureComparison = () => {
    const modules = [
        'Professional Website',
        'Teacher Mobile App',
        'Parent Mobile App',
        'Student Panel',
        'Attendance System',
        'Online Fee Payment',
        'Admin Analytics Dashboard',
        'Homework & File Sharing',
        'Push Notifications',
        'Leave Management',
        'Custom Branding',
        'Local Customization',
        'Direct Support'
    ];

    return (
        <div className="section bg-white py-20">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Feature & Module Comparison
                    </h2>
                    <p className="text-xl text-gray-600">
                        All-inclusive excellence vs. fragmented solution
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Creatzion Column */}
                    <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-500 rounded-3xl p-8 shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Check size={120} className="text-blue-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center border-b border-blue-200 pb-4">
                            Creatzion All-Inclusive
                        </h3>
                        <div className="space-y-4">
                            {modules.map((mod, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className="flex items-center space-x-3"
                                >
                                    <div className="bg-green-100 p-1 rounded-full text-green-600">
                                        <Check size={16} strokeWidth={3} />
                                    </div>
                                    <span className="font-semibold text-gray-800">{mod}</span>
                                </motion.div>
                            ))}
                        </div>
                        <div className="mt-8 pt-6 border-t border-blue-200 text-center">
                            <span className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold text-sm">
                                EVERYTHING INCLUDED
                            </span>
                        </div>
                    </div>

                    {/* Competitor Column */}
                    <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 relative">
                        <h3 className="text-2xl font-bold text-gray-500 mb-6 text-center border-b border-gray-200 pb-4">
                            Typical Market Equivalent
                        </h3>
                        <div className="space-y-4 opacity-75">
                            {modules.map((mod, i) => (
                                <div key={i} className="flex items-center space-x-3">
                                    <div className="bg-gray-200 p-1 rounded-full text-gray-500">
                                        <AlertCircle size={16} />
                                    </div>
                                    <span className="text-gray-500">{mod}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                            <p className="text-orange-500 font-semibold italic text-sm">
                                "Available but often as paid add-on or bundled in higher-tier plans."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureComparison;
