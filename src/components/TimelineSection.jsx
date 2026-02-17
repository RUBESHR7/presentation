import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle } from 'lucide-react';

const TimelineSection = () => {
    const phases = [
        {
            phase: 'Phase 1',
            title: 'Website + Basic App',
            duration: 'Month 1-2',
            items: [
                'School website development',
                'Mobile app foundation',
                'User authentication system',
                'Basic dashboard setup'
            ],
            color: 'blue'
        },
        {
            phase: 'Phase 2',
            title: 'Attendance + Fee System',
            duration: 'Month 3-4',
            items: [
                'Digital attendance module',
                'Online fee payment integration',
                'Parent notification system',
                'Receipt generation'
            ],
            color: 'green'
        },
        {
            phase: 'Phase 3',
            title: 'Advanced Features',
            duration: 'Month 5-6',
            items: [
                'Study material sharing',
                'Teacher-parent messaging',
                'Analytics dashboard',
                'Complete system integration'
            ],
            color: 'purple'
        }
    ];

    return (
        <div className="section bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl font-bold text-gray-900 mb-6">
                        Implementation <span className="gradient-text">Roadmap</span>
                    </h2>
                    <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Structured 6-month rollout plan for smooth transition
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Timeline Line */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 via-green-600 to-purple-600"></div>

                    {/* Timeline Items */}
                    <div className="space-y-16">
                        {phases.map((phase, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                            >
                                {/* Content Card */}
                                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                                    <div className="glass-card p-8 rounded-2xl hover-lift">
                                        <div className="flex items-center justify-between mb-4">
                                            <span className={`bg-${phase.color}-100 text-${phase.color}-800 px-4 py-2 rounded-full text-sm font-bold`}>
                                                {phase.phase}
                                            </span>
                                            <div className="flex items-center text-gray-600">
                                                <Calendar size={18} className="mr-2" />
                                                <span className="text-sm font-semibold">{phase.duration}</span>
                                            </div>
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{phase.title}</h3>
                                        <ul className="space-y-3">
                                            {phase.items.map((item, i) => (
                                                <li key={i} className="flex items-start">
                                                    <CheckCircle size={20} className={`text-${phase.color}-600 mr-3 mt-0.5 flex-shrink-0`} />
                                                    <span className="text-gray-700">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Timeline Dot */}
                                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                                    <div className={`w-8 h-8 bg-${phase.color}-600 rounded-full border-4 border-white shadow-lg`}></div>
                                </div>

                                {/* Spacer */}
                                <div className="hidden md:block w-5/12"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Summary */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 p-12 rounded-3xl text-white text-center"
                >
                    <h3 className="text-3xl font-bold mb-4">Complete Digital Transformation in 6 Months</h3>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                        Phased implementation ensures minimal disruption while delivering maximum value at each stage
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default TimelineSection;
