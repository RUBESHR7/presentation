import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Database, Key, Cloud, RefreshCw } from 'lucide-react';

const SecuritySection = () => {
    const features = [
        {
            icon: Cloud,
            title: 'Secure Cloud Hosting',
            description: 'Enterprise-grade cloud infrastructure with 99.9% uptime guarantee'
        },
        {
            icon: Lock,
            title: 'Encrypted Login',
            description: 'Multi-factor authentication and encrypted password storage'
        },
        {
            icon: Database,
            title: 'Daily Backups',
            description: 'Automated daily backups with disaster recovery protocols'
        },
        {
            icon: Key,
            title: 'Role-based Access',
            description: 'Granular permissions for different user types and roles'
        },
        {
            icon: Shield,
            title: 'Data Protection',
            description: 'GDPR compliant with end-to-end data encryption'
        },
        {
            icon: RefreshCw,
            title: 'Scalable Infrastructure',
            description: 'Auto-scaling to handle growing student database'
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
                        Data Protection & <span className="gradient-text">Security</span>
                    </h2>
                    <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Your data security is our top priority
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="glass-card p-8 rounded-2xl hover-lift"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mb-6">
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
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="bg-gradient-to-br from-blue-600 to-blue-900 p-12 rounded-3xl text-white text-center"
                >
                    <Shield size={64} className="mx-auto mb-6" />
                    <h3 className="text-3xl font-bold mb-4">Bank-Level Security</h3>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                        We use the same security standards as leading financial institutions to protect your school's sensitive data.
                        All communications are encrypted, and our systems undergo regular security audits.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default SecuritySection;
