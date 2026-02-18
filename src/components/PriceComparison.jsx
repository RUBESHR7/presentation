import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, HelpCircle, Info } from 'lucide-react';

const PriceComparison = () => {
    const comparisonData = [
        { feature: 'Setup Cost', creatzion: 'Affordable Setup', market: 'High (₹6L–₹9L)' },
        { feature: 'Annual Maintenance', creatzion: 'Flexible Pricing', market: 'Rigid Annual Contracts' },
        { feature: 'Monthly Subscription', creatzion: 'Transparent & Low', market: 'Often Hidden / High' },
        { feature: 'Per Student Cost', creatzion: 'Optimized', market: 'Higher Charges' },
        { feature: 'Customization', creatzion: 'Fully Customizable', market: 'Limited / None' },
        { feature: 'Local Support', creatzion: 'Direct Local Support', market: 'Centralized / Remote' },
    ];

    return (
        <div className="section bg-gradient-to-b from-white to-blue-50 py-20">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Transparent Investment Comparison
                    </h2>
                    <p className="text-xl text-gray-600">
                        See how Creatzion stacks up against typical ERP providers
                    </p>
                </motion.div>

                <div className="overflow-hidden rounded-3xl shadow-xl border border-blue-100 bg-white">
                    <div className="grid grid-cols-3 bg-blue-900 text-white p-6 font-bold text-lg">
                        <div className="pl-4">Comparison Point</div>
                        <div className="text-center bg-blue-800 rounded-lg py-1">Creatzion School System</div>
                        <div className="text-center text-blue-200">Typical Market ERP</div>
                    </div>

                    {comparisonData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`grid grid-cols-3 p-6 border-b border-gray-100 items-center ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                        >
                            <div className="font-semibold text-gray-700 pl-4">{item.feature}</div>
                            <div className="text-center font-bold text-green-600 flex justify-center items-center gap-2">
                                <Check size={20} />
                                {item.creatzion}
                            </div>
                            <div className="text-center text-gray-500 flex justify-center items-center gap-2">
                                {item.market}
                            </div>
                        </motion.div>
                    ))}
                    <div className="grid grid-cols-3 p-6 bg-blue-50">
                        <div className="font-bold text-gray-800 pl-4">Hidden Charges</div>
                        <div className="text-center font-bold text-green-600">None</div>
                        <div className="text-center text-red-500">Frequent Add-ons</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PriceComparison;
