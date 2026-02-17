import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

const ClosingSection = () => {
    return (
        <div className="section bg-gradient-to-br from-blue-900 via-blue-800 to-green-700 text-white">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                        Let’s Build a Smarter<br />Digital Future Together
                    </h2>
                    <p className="text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-12">
                        Ready to transform your school?
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 mb-16">
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="bg-white text-blue-900 px-10 py-5 rounded-xl font-bold text-xl hover:bg-blue-50 transition-all shadow-2xl flex items-center space-x-3"
                        >
                            <span>Start Transformation</span>
                            <ArrowRight size={24} />
                        </button>
                    </div>
                </motion.div>

                {/* Contact Information */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white/10 backdrop-blur-md p-12 rounded-3xl mb-16"
                >
                    <h3 className="text-3xl font-bold mb-8 text-center">Get in Touch with Creatzion Technology</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                <Mail size={24} />
                            </div>
                            <div>
                                <p className="font-semibold mb-1">Email Us</p>
                                <p className="text-blue-100">contact@creatzion.tech</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                <Phone size={24} />
                            </div>
                            <div>
                                <p className="font-semibold mb-1">Call Us</p>
                                <p className="text-blue-100">+91 98765 43210</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <p className="font-semibold mb-1">Visit Us</p>
                                <p className="text-blue-100">Mumbai, India</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center border-t border-white/20 pt-8"
                >
                    <div className="flex items-center justify-center space-x-3 mb-4">
                        <div className="bg-white p-2 rounded-xl">
                            <img
                                src="/images/logo.png"
                                alt="Creatzion Technology Logo"
                                className="h-10 w-auto"
                            />
                        </div>
                    </div>
                    <p className="text-blue-200 mb-2">Transforming Education Through Technology</p>
                    <p className="text-sm text-blue-300">© 2026 Creatzion Technology. All rights reserved.</p>
                </motion.div>
            </div>
        </div>
    );
};

export default ClosingSection;
