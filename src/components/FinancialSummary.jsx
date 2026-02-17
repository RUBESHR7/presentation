import React from 'react';
import { motion } from 'framer-motion';

const FinancialSummary = () => {
    return (
        <div className="section bg-white py-12 md:py-20">
            <div className="max-w-6xl mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        3-Year Financial Projection
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        A side-by-side view of accumulated costs over 36 months, demonstrating the long-term value of Creatzion.
                    </p>
                </motion.div>

                <div className="bg-white rounded-3xl shadow-xl p-6 md:p-12 border border-gray-200">
                    <div className="space-y-12">
                        {/* Scenario A: Traditional ERP */}
                        <div>
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-2 gap-1">
                                <h4 className="text-lg md:text-xl font-bold text-gray-500">Traditional ERP (Scenario A)</h4>
                                <span className="text-xl md:text-2xl font-bold text-gray-500">₹6,00,000+</span>
                            </div>
                            <div className="h-16 w-full bg-gray-100 rounded-full overflow-hidden relative flex items-center px-4">
                                <div
                                    className="absolute top-0 left-0 h-full bg-gray-400 rounded-full"
                                    style={{ width: '100%' }}
                                ></div>
                                <span className="relative z-10 text-white font-semibold flex flex-col sm:flex-row justify-center sm:justify-between w-full px-2 sm:px-4 text-xs sm:text-base text-center sm:text-left h-full sm:h-auto items-center py-1 sm:py-0">
                                    <span>High Setup + Implementation</span>
                                    <span className="hidden sm:inline">Recurring Annual Fees</span>
                                    <span className="hidden sm:inline">Hidden Costs</span>
                                </span>
                            </div>
                            <p className="text-sm text-gray-400 mt-2 text-right">Estimated Total Cost of Ownership</p>
                        </div>

                        {/* Scenario B: Creatzion */}
                        <div>
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-2 gap-1">
                                <h4 className="text-xl md:text-2xl font-bold text-blue-900">Creatzion Impact (Scenario B)</h4>
                                <span className="text-3xl md:text-4xl font-bold text-green-600">~ ₹3,50,000</span>
                            </div>
                            <div className="h-20 w-full bg-gray-100 rounded-full overflow-hidden relative flex items-center">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '58%' }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-600 to-green-500 rounded-full"
                                ></motion.div>
                                <span className="relative z-10 text-white font-bold text-sm md:text-lg px-4 md:px-8 drop-shadow-md whitespace-nowrap">
                                    Optimized Digital Investment
                                </span>
                            </div>
                            <p className="text-sm text-green-600 font-semibold mt-2 text-right">
                                Significant cost savings with superior value
                            </p>
                        </div>
                    </div>

                    <div className="mt-12 bg-blue-50 p-6 rounded-xl text-center">
                        <p className="text-blue-800 text-lg">
                            <span className="font-bold">Result:</span> Choosing Creatzion effectively pays for itself through efficiency gains and reduced overhead within the first 18 months.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FinancialSummary;
