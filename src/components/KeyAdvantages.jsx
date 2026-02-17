import React from 'react';
import { motion } from 'framer-motion';
import { Code, Users, Award, Zap, Heart, Layout, GraduationCap } from 'lucide-react';

const KeyAdvantages = () => {
    const advantages = [
        {
            icon: <Layout size={32} />,
            title: "Fully Customized",
            desc: "Tailored specifically for your school's unique needs and culture."
        },
        {
            icon: <GraduationCap size={32} />,
            title: "Alumni-led Initiative",
            desc: "Built with a deep understanding of the school ecosystem."
        },
        {
            icon: <Code size={32} />,
            title: "Direct Developer Access",
            desc: "No middle layers or ticketing systems. Talk to the builders."
        },
        {
            icon: <Zap size={32} />,
            title: "Faster Implementation",
            desc: "Rapid deployment without multi-month waiting periods."
        },
        {
            icon: <Users size={32} />,
            title: "Personalized Training",
            desc: "Hands-on support to ensure your staff is comfortable."
        },
        {
            icon: <Award size={32} />,
            title: "Modern User Experience",
            desc: "Interfaces designed for humans, not just administrators."
        }
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
                        Why Choose Creatzion?
                    </h2>
                    <p className="text-xl text-gray-600">
                        Strategic advantages that drive real results
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {advantages.map((adv, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-blue-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-blue-100 group"
                        >
                            <div className="bg-white group-hover:bg-blue-600 group-hover:text-white text-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-sm transition-colors duration-300">
                                {adv.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{adv.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {adv.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default KeyAdvantages;
