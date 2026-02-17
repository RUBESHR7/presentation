import React from 'react';
import { motion } from 'framer-motion';
import { Headphones, RefreshCw, GraduationCap, Users } from 'lucide-react';

const SupportSection = () => {
    const features = [
        {
            icon: Headphones,
            title: 'Technical Monitoring',
            description: '24/7 system monitoring with proactive issue resolution'
        },
        {
            icon: RefreshCw,
            title: 'Continuous Updates',
            description: 'Regular feature updates and security patches at no extra cost'
        },
        {
            icon: GraduationCap,
            title: 'Training for Teachers',
            description: 'Comprehensive training sessions for all staff members'
        },
        {
            icon: Users,
            title: 'Dedicated Support Team',
            description: 'Direct access to our support team via phone, email, and chat'
        }
    ];

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
                        Ongoing <span className="gradient-text">Support & Maintenance</span>
                    </h2>
                    <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        We're with you every step of the way
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="glass-card p-8 rounded-2xl hover-lift flex items-start space-x-6"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center flex-shrink-0">
                                <feature.icon size={32} className="text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="grid md:grid-cols-3 gap-8"
                >
                    <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                        <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                        <p className="text-gray-700 font-semibold">System Monitoring</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                        <div className="text-4xl font-bold text-green-600 mb-2">&lt;2hrs</div>
                        <p className="text-gray-700 font-semibold">Response Time</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                        <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
                        <p className="text-gray-700 font-semibold">Satisfaction Rate</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default SupportSection;
