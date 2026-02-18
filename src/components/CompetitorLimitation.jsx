import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Clock, Sliders, DollarSign, Monitor, Check } from 'lucide-react';

const CompetitorLimitation = () => {
    const limitations = [
        {
            icon: <Monitor size={24} />,
            text: "Complex interfaces with steep learning curves"
        },
        {
            icon: <Sliders size={24} />,
            text: "Overloaded features that schools rarely use"
        },
        {
            icon: <DollarSign size={24} />,
            text: "High yearly renewal and hidden costs"
        },
        {
            icon: <AlertTriangle size={24} />,
            text: "Limited flexibility for custom requirements"
        },
        {
            icon: <Clock size={24} />,
            text: "Long onboarding processes & remote-only support"
        }
    ];

    const advantages = [
        {
            icon: <Check size={24} />,
            text: "Simple, intuitive interfaces designed for all users"
        },
        {
            icon: <Check size={24} />,
            text: "Essential features focused on what schools actually need"
        },
        {
            icon: <Check size={24} />,
            text: "Transparent, one-time setup with low maintenance"
        },
        {
            icon: <Check size={24} />,
            text: "Fully customizable to match your unique workflow"
        },
        {
            icon: <Check size={24} />,
            text: "Rapid implementation with dedicated local support"
        }
    ];

    return (
        <div className="section bg-gray-50 py-16 border-y border-gray-200">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
                        Why Choose Creatzion Over Generic ERPs?
                    </h3>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Limitations Column */}
                        <div>
                            <h4 className="text-xl font-bold text-red-600 mb-6 flex items-center justify-center md:justify-start gap-2">
                                <AlertTriangle size={24} />
                                Generic ERP Limitations
                            </h4>
                            <div className="space-y-4">
                                {limitations.map((limit, index) => (
                                    <div key={index} className="flex items-start gap-4 text-left p-4 rounded-xl bg-white border border-red-100 shadow-sm">
                                        <div className="text-red-400 mt-1 flex-shrink-0">
                                            {limit.icon}
                                        </div>
                                        <span className="text-gray-600 font-medium text-sm">
                                            {limit.text}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Advantages Column */}
                        <div>
                            <h4 className="text-xl font-bold text-green-600 mb-6 flex items-center justify-center md:justify-start gap-2">
                                <Check size={24} />
                                The Creatzion Advantage
                            </h4>
                            <div className="space-y-4">
                                {advantages.map((adv, index) => (
                                    <div key={index} className="flex items-start gap-4 text-left p-4 rounded-xl bg-white border border-green-100 shadow-sm">
                                        <div className="text-green-500 mt-1 flex-shrink-0">
                                            {adv.icon}
                                        </div>
                                        <span className="text-gray-600 font-medium text-sm">
                                            {adv.text}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default CompetitorLimitation;
