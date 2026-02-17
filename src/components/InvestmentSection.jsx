import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';

const InvestmentSection = () => {
    const plans = [
        {
            name: 'Investment Plan',
            subtitle: 'Setup + Monthly Subscription',
            price: '₹1,50,000',
            period: 'Setup Fee',
            monthly: '₹15,000/month',
            features: [
                'Complete platform development',
                'Website + Mobile Apps',
                'Admin Dashboard',
                'Payment Gateway Integration',
                'Staff Training (2 sessions)',
                'Monthly maintenance & updates',
                '24/7 Priority support',
                'Cloud hosting included',
                'Regular feature additions'
            ],
            popular: true
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
                        Investment for <span className="gradient-text">Digital Transformation</span>
                    </h2>
                    <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Comprehensive pricing designed for schools
                    </p>
                </motion.div>

                <div className="max-w-2xl mx-auto mb-16">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className={`relative glass-card p-8 rounded-3xl hover-lift ${plan.popular ? 'ring-4 ring-blue-600' : ''
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-2 rounded-full font-bold text-sm flex items-center space-x-2">
                                        <Star size={16} fill="white" />
                                        <span>RECOMMENDED</span>
                                    </div>
                                </div>
                            )}

                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                                <p className="text-gray-600 mb-6">{plan.subtitle}</p>
                                <div className="mb-4">
                                    <div className="text-5xl font-bold text-blue-600 mb-2">{plan.price}</div>
                                    <div className="text-gray-600 font-semibold">{plan.period}</div>
                                </div>
                                {plan.annual && (
                                    <div className="bg-green-50 border-2 border-green-500 rounded-xl p-4">
                                        <div className="text-2xl font-bold text-green-600">{plan.annual}</div>
                                        <div className="text-sm text-gray-700">Maintenance Fee</div>
                                    </div>
                                )}
                                {plan.monthly && (
                                    <div className="bg-blue-50 border-2 border-blue-500 rounded-xl p-4">
                                        <div className="text-2xl font-bold text-blue-600">{plan.monthly}</div>
                                        <div className="text-sm text-gray-700">Monthly Subscription</div>
                                    </div>
                                )}
                            </div>

                            <div className="space-y-4 mb-8">
                                {plan.features.map((feature, i) => (
                                    <div key={i} className="flex items-start">
                                        <Check size={20} className="text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <button className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${plan.popular
                                ? 'bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:shadow-xl'
                                : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                                }`}>
                                Choose {plan.name}
                            </button>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-500 p-12 rounded-3xl text-center"
                >
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Why This is an Investment, Not a Cost</h3>
                    <div className="grid md:grid-cols-3 gap-8 mt-8">
                        <div>
                            <div className="text-4xl font-bold text-green-600 mb-2">70%</div>
                            <p className="text-gray-700 font-semibold">Reduction in Administrative Time</p>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-blue-600 mb-2">3x</div>
                            <p className="text-gray-700 font-semibold">Faster Fee Collection</p>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-purple-600 mb-2">∞</div>
                            <p className="text-gray-700 font-semibold">Enhanced School Reputation</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default InvestmentSection;
