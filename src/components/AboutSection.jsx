import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Lightbulb, Shield } from 'lucide-react';

const AboutSection = () => {
    const features = [
        {
            icon: Users,
            title: 'Dedicated Team',
            description: '5-6 member expert development team'
        },
        {
            icon: Target,
            title: 'Focused Mission',
            description: 'Modernizing schools across India'
        },
        {
            icon: Lightbulb,
            title: 'Innovation First',
            description: 'Cutting-edge education technology'
        },
        {
            icon: Shield,
            title: 'Our Vision',
            description: 'Simple, Secure & Scalable systems'
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
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                        About <span className="gradient-text">Creatzion Technology</span>
                    </h2>
                    <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Professional IT Solutions & Software Development Company
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="glass-card p-8 rounded-2xl hover-lift text-center"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <feature.icon size={32} className="text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="glass-card p-6 md:p-12 rounded-3xl text-center relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-green-500/10"></div>
                    <div className="relative z-10">
                        <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Commitment</h3>
                        <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
                            We are dedicated to transforming the educational landscape in India by providing
                            schools with modern, efficient, and user-friendly digital solutions. Our mission is
                            to bridge the gap between traditional education and technology, creating seamless
                            experiences for students, teachers, and parents.
                        </p>

                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default AboutSection;
