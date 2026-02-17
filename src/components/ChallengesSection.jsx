import React from 'react';
import { motion } from 'framer-motion';
import { FileText, MessageSquare, Clock, DollarSign, Database, WifiOff } from 'lucide-react';

const ChallengesSection = () => {
    const challenges = [
        {
            icon: FileText,
            title: 'Manual Attendance Registers',
            description: 'Time-consuming paper-based attendance tracking',
            color: 'from-red-500 to-red-600'
        },
        {
            icon: MessageSquare,
            title: 'Paper-based Circulars',
            description: 'Inefficient communication through physical notices',
            color: 'from-orange-500 to-orange-600'
        },
        {
            icon: Clock,
            title: 'Delayed Parent Communication',
            description: 'Slow information flow between school and parents',
            color: 'from-yellow-500 to-yellow-600'
        },
        {
            icon: DollarSign,
            title: 'Offline Fee Collection',
            description: 'Manual cash handling and receipt management',
            color: 'from-green-500 to-green-600'
        },
        {
            icon: Database,
            title: 'No Centralized Database',
            description: 'Scattered student information across registers',
            color: 'from-blue-500 to-blue-600'
        },
        {
            icon: WifiOff,
            title: 'No Real-time Updates',
            description: 'Parents unaware of daily school activities',
            color: 'from-purple-500 to-purple-600'
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
                        Current <span className="gradient-text">Challenges</span>
                    </h2>
                    <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Traditional systems creating inefficiencies in modern education
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {challenges.map((challenge, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="glass-card p-8 rounded-2xl hover-lift group"
                        >
                            <div className={`w-16 h-16 bg-gradient-to-br ${challenge.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <challenge.icon size={32} className="text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{challenge.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{challenge.description}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-block bg-gradient-to-r from-red-100 to-orange-100 px-8 py-6 rounded-2xl">
                        <p className="text-2xl font-bold text-gray-900 mb-2">
                            It's Time for a Digital Revolution
                        </p>
                        <p className="text-lg text-gray-700">
                            Transform these challenges into opportunities with our integrated solution
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ChallengesSection;
