import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, TrendingUp, Award, Clock, Users, Zap } from 'lucide-react';

const BenefitsSection = () => {
    const benefits = [
        {
            icon: MessageCircle,
            title: 'Improved Parent Communication',
            description: 'Real-time updates keep parents informed about their child\'s activities',
            color: 'from-blue-500 to-blue-700'
        },
        {
            icon: TrendingUp,
            title: 'Faster Fee Collection',
            description: 'Online payments reduce collection time by 70% with instant confirmations',
            color: 'from-green-500 to-green-700'
        },
        {
            icon: Award,
            title: 'Modern School Image',
            description: 'Stand out as a tech-forward institution attracting quality admissions',
            color: 'from-purple-500 to-purple-700'
        },
        {
            icon: Clock,
            title: 'Reduced Manual Work',
            description: 'Automate attendance, circulars, and reports saving 15+ hours weekly',
            color: 'from-orange-500 to-orange-700'
        },
        {
            icon: Users,
            title: 'Competitive Admission Advantage',
            description: 'Digital infrastructure attracts parents seeking modern education',
            color: 'from-pink-500 to-pink-700'
        },
        {
            icon: Zap,
            title: 'Real-time Transparency',
            description: 'Complete visibility into student performance and school operations',
            color: 'from-yellow-500 to-yellow-700'
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
                        Benefits to <span className="gradient-text">Your School</span>
                    </h2>
                    <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Transform your school operations and enhance stakeholder satisfaction
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="glass-card p-8 rounded-2xl hover-lift group"
                        >
                            <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <benefit.icon size={32} className="text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-16 grid md:grid-cols-3 gap-8"
                >
                    <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                        <div className="text-4xl font-bold text-blue-600 mb-2">85%</div>
                        <p className="text-gray-700 font-semibold">Time Saved</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                        <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
                        <p className="text-gray-700 font-semibold">Parent Satisfaction</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                        <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
                        <p className="text-gray-700 font-semibold">Digital Transformation</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default BenefitsSection;
