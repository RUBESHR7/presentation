import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, ArrowRight, CreditCard, Building2, Shield, FileCheck } from 'lucide-react';

const PaymentFlow = () => {
    const steps = [
        { icon: Smartphone, label: 'Parent Opens App', color: 'from-green-500 to-green-700' },
        { icon: CreditCard, label: 'Select Payment Method', color: 'from-blue-500 to-blue-700' },
        { icon: Shield, label: 'Secure Gateway', color: 'from-purple-500 to-purple-700' },
        { icon: Building2, label: 'School Bank Account', color: 'from-orange-500 to-orange-700' },
        { icon: FileCheck, label: 'Auto Receipt', color: 'from-pink-500 to-pink-700' }
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
                        Online <span className="gradient-text">Fee Payment System</span>
                    </h2>
                    <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Secure, fast, and convenient digital payment solution
                    </p>
                </motion.div>

                {/* Payment Flow Diagram */}
                <div className="max-w-5xl mx-auto mb-16">
                    <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
                        {steps.map((step, index) => (
                            <React.Fragment key={index}>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="flex flex-col items-center"
                                >
                                    <div className={`w-24 h-24 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-4 shadow-xl hover:scale-110 transition-transform`}>
                                        <step.icon size={40} className="text-white" />
                                    </div>
                                    <p className="text-center font-semibold text-gray-900 max-w-[120px]">{step.label}</p>
                                </motion.div>
                                {index < steps.length - 1 && (
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                                        className="hidden md:block"
                                    >
                                        <ArrowRight size={32} className="text-blue-600" />
                                    </motion.div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                {/* Payment Methods */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mb-16"
                >
                    <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Supported Payment Methods</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="glass-card p-8 rounded-2xl hover-lift text-center">
                            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <span className="text-white text-3xl font-bold">UPI</span>
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3">UPI Payment</h4>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Pay instantly using Google Pay, PhonePe, Paytm, or any UPI app
                            </p>
                            <div className="text-sm text-gray-500">Instant • Zero Fees</div>
                        </div>

                        <div className="glass-card p-8 rounded-2xl hover-lift text-center">
                            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <CreditCard size={40} className="text-white" />
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3">Cards</h4>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Credit & Debit cards from all major banks accepted
                            </p>
                            <div className="text-sm text-gray-500">Visa • Mastercard • RuPay</div>
                        </div>

                        <div className="glass-card p-8 rounded-2xl hover-lift text-center">
                            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Building2 size={40} className="text-white" />
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3">Net Banking</h4>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Direct bank transfer from 50+ banks
                            </p>
                            <div className="text-sm text-gray-500">Secure • Reliable</div>
                        </div>
                    </div>
                </motion.div>

                {/* Security Features */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="glass-card p-12 rounded-3xl"
                >
                    <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Payment Security Features</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: 'Encrypted Transactions', description: 'Bank-grade 256-bit SSL encryption' },
                            { title: 'Auto Receipt', description: 'Instant digital receipt generation' },
                            { title: 'Payment History', description: 'Complete transaction records' },
                            { title: 'Refund Support', description: 'Easy refund processing' }
                        ].map((feature, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl text-center">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Shield className="text-green-600" size={24} />
                                </div>
                                <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                                <p className="text-sm text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default PaymentFlow;
