import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Clock, Sliders, DollarSign, Monitor } from 'lucide-react';

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

    return (
        <div className="section bg-gray-50 py-16 border-y border-gray-200">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h3 className="text-2xl font-bold text-gray-600 mb-8 uppercase tracking-wide">
                        Common Limitations in Generic ERP Platforms
                    </h3>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {limitations.map((limit, index) => (
                            <div key={index} className="flex items-start gap-4 text-left p-4 rounded-xl bg-white border border-gray-200 shadow-sm">
                                <div className="text-gray-400 mt-1 flex-shrink-0">
                                    {limit.icon}
                                </div>
                                <span className="text-gray-600 font-medium text-sm">
                                    {limit.text}
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default CompetitorLimitation;
