import React from 'react';
import { motion } from 'framer-motion';
import { Server, Cloud, Shield, Database, Wrench, AlertCircle, Check } from 'lucide-react';

const HostingComparison = () => {
    return (
        <div className="section bg-slate-900 text-white py-20 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">
                        Hosting Options & Cost Transparency
                    </h2>
                    <p className="text-xl text-blue-200">
                        The hidden costs of self-hosting vs. our managed cloud solution
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Left Side: School Hosts Own Server */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="bg-gray-700 p-3 rounded-xl">
                                <Server size={32} className="text-gray-300" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-200">School Hosts Own Server</h3>
                        </div>

                        <ul className="space-y-4 mb-8 text-gray-300">
                            <li className="flex items-start gap-3">
                                <Wrench size={20} className="mt-1 text-red-400" />
                                <span>Dedicated IT staff required</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Database size={20} className="mt-1 text-red-400" />
                                <span>High server hardware cost</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Shield size={20} className="mt-1 text-red-400" />
                                <span>Maintenance & upgrades responsibility</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <AlertCircle size={20} className="mt-1 text-red-400" />
                                <span>Manual backup management</span>
                            </li>
                        </ul>

                        <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                            <h4 className="text-red-300 font-semibold mb-2">Estimated Hidden Costs</h4>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Infrastructure:</span>
                                    <span className="font-bold">₹1.5L – ₹3L (Initial)</span>
                                </div>
                                <div className="flex justify-between border-t border-red-500/20 pt-2">
                                    <span className="text-gray-400">Annual Maint.:</span>
                                    <span className="font-bold">₹50K – ₹1L / year</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Creatzion Managed Hosting */}
                    <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/30 backdrop-blur-sm border border-blue-400/50 rounded-3xl p-8 shadow-2xl shadow-blue-900/50">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="bg-blue-600 p-3 rounded-xl">
                                <Cloud size={32} className="text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Creatzion Managed Hosting</h3>
                        </div>

                        <ul className="space-y-4 mb-8 text-blue-100">
                            <li className="flex items-start gap-3">
                                <Check size={20} className="mt-1 text-green-400" />
                                <span>Secure cloud infrastructure</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check size={20} className="mt-1 text-green-400" />
                                <span>Automatic daily backups</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check size={20} className="mt-1 text-green-400" />
                                <span>24/7 Monitoring & Zero Maintenance</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check size={20} className="mt-1 text-green-400" />
                                <span>Fully Scalable System</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check size={20} className="mt-1 text-green-400" />
                                <span>No Hardware Investment Required</span>
                            </li>
                        </ul>

                        <div className="bg-blue-900/40 border border-blue-400/30 rounded-xl p-6">
                            <h4 className="text-blue-200 font-semibold mb-2">Clear & Predictable Costs</h4>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span className="text-blue-300">Monthly Est.:</span>
                                    <span className="font-bold text-white">₹8,000 – ₹12,000</span>
                                </div>
                                <div className="flex justify-between border-t border-blue-400/20 pt-2">
                                    <span className="text-blue-300">Annual Est.:</span>
                                    <span className="font-bold text-white">₹60K – ₹80K</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HostingComparison;
