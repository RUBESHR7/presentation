import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, DollarSign, Mail, Phone, MapPin, Calendar, Award } from 'lucide-react';

const WebsitePrototype = () => {
    const [activeTab, setActiveTab] = useState('home');

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
                        School <span className="gradient-text">Website Prototype</span>
                    </h2>
                    <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Modern, professional web presence for your institution
                    </p>
                </motion.div>

                {/* Laptop Mockup */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-6xl mx-auto"
                >
                    <div className="laptop-frame">
                        {/* Browser Chrome */}
                        <div className="bg-gray-200 px-4 py-3 rounded-t-lg flex items-center space-x-2">
                            <div className="flex space-x-2">
                                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            </div>
                            <div className="flex-1 bg-white rounded px-4 py-1 text-sm text-gray-600">
                                www.yourschool.edu.in
                            </div>
                        </div>

                        {/* Website Content */}
                        <div className="bg-white rounded-b-lg overflow-hidden" style={{ height: '500px', overflowY: 'auto' }}>
                            {/* Navigation Tabs */}
                            <div className="bg-gradient-to-r from-blue-900 to-blue-700 px-6 py-4 flex space-x-6">
                                {['home', 'fees', 'contact'].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-4 py-2 rounded-lg font-semibold capitalize transition-all ${activeTab === tab
                                                ? 'bg-white text-blue-900'
                                                : 'text-white hover:bg-blue-800'
                                            }`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>

                            {/* Home Page */}
                            {activeTab === 'home' && (
                                <div className="p-8">
                                    {/* Hero Banner */}
                                    <div className="bg-gradient-to-r from-blue-600 to-green-500 rounded-2xl p-12 mb-8 text-white text-center">
                                        <h1 className="text-4xl font-bold mb-4">Welcome to [School Name]</h1>
                                        <p className="text-xl mb-6">Excellence in Education Since 1990</p>
                                        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all">
                                            Apply for Admission
                                        </button>
                                    </div>

                                    {/* Achievements */}
                                    <div className="mb-8">
                                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                            <Award className="mr-3 text-yellow-500" size={28} />
                                            School Achievements
                                        </h2>
                                        <div className="grid md:grid-cols-3 gap-6">
                                            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-xl">
                                                <div className="text-3xl font-bold text-yellow-600 mb-2">100%</div>
                                                <p className="text-gray-700">Board Exam Results</p>
                                            </div>
                                            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
                                                <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                                                <p className="text-gray-700">Awards & Recognition</p>
                                            </div>
                                            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                                                <div className="text-3xl font-bold text-blue-600 mb-2">2000+</div>
                                                <p className="text-gray-700">Happy Students</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Infrastructure Gallery */}
                                    <div className="mb-8">
                                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Infrastructure</h2>
                                        <div className="grid md:grid-cols-3 gap-4">
                                            {['Smart Classrooms', 'Science Labs', 'Sports Complex'].map((item, i) => (
                                                <div key={i} className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl h-48 flex items-center justify-center">
                                                    <span className="text-gray-700 font-semibold text-lg">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* News & Announcements */}
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                            <Calendar className="mr-3 text-blue-500" size={28} />
                                            Latest News
                                        </h2>
                                        <div className="space-y-4">
                                            {[
                                                'Annual Day Celebration - March 15, 2026',
                                                'Parent-Teacher Meeting - February 20, 2026',
                                                'New Session Admissions Open'
                                            ].map((news, i) => (
                                                <div key={i} className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                                                    <p className="text-gray-800">{news}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Fee Structure Page */}
                            {activeTab === 'fees' && (
                                <div className="p-8">
                                    <h1 className="text-3xl font-bold text-gray-900 mb-8">Fee Structure 2026-27</h1>

                                    <div className="space-y-6">
                                        {[
                                            { class: 'Class 1-5', annual: '₹45,000', term: '₹15,000' },
                                            { class: 'Class 6-8', annual: '₹55,000', term: '₹18,333' },
                                            { class: 'Class 9-10', annual: '₹65,000', term: '₹21,667' },
                                            { class: 'Class 11-12', annual: '₹75,000', term: '₹25,000' }
                                        ].map((fee, i) => (
                                            <div key={i} className="glass-card p-6 rounded-xl">
                                                <div className="flex justify-between items-center">
                                                    <div>
                                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{fee.class}</h3>
                                                        <p className="text-gray-600">Annual Fee: <span className="font-semibold text-blue-600">{fee.annual}</span></p>
                                                        <p className="text-gray-600">Per Term: <span className="font-semibold text-green-600">{fee.term}</span></p>
                                                    </div>
                                                    <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                                                        Pay Online
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-8 bg-green-50 border-2 border-green-500 rounded-xl p-6 text-center">
                                        <p className="text-lg text-gray-800 mb-4">
                                            <strong>Online Payment Available!</strong> Pay fees securely via UPI, Card, or Net Banking
                                        </p>
                                        <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all">
                                            Make Payment Now
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* Contact Page */}
                            {activeTab === 'contact' && (
                                <div className="p-8">
                                    <h1 className="text-3xl font-bold text-gray-900 mb-8">Contact Us</h1>

                                    <div className="grid md:grid-cols-2 gap-8">
                                        {/* Contact Info */}
                                        <div>
                                            <h2 className="text-xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                                            <div className="space-y-4">
                                                <div className="flex items-start space-x-4">
                                                    <MapPin className="text-blue-600 mt-1" size={24} />
                                                    <div>
                                                        <p className="font-semibold text-gray-900">Address</p>
                                                        <p className="text-gray-600">123 Education Street, City, State - 123456</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start space-x-4">
                                                    <Phone className="text-blue-600 mt-1" size={24} />
                                                    <div>
                                                        <p className="font-semibold text-gray-900">Phone</p>
                                                        <p className="text-gray-600">+91 98765 43210</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start space-x-4">
                                                    <Mail className="text-blue-600 mt-1" size={24} />
                                                    <div>
                                                        <p className="font-semibold text-gray-900">Email</p>
                                                        <p className="text-gray-600">info@yourschool.edu.in</p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Map Placeholder */}
                                            <div className="mt-6 bg-gradient-to-br from-blue-100 to-green-100 rounded-xl h-48 flex items-center justify-center">
                                                <MapPin size={48} className="text-blue-600" />
                                            </div>
                                        </div>

                                        {/* Admission Form */}
                                        <div>
                                            <h2 className="text-xl font-bold text-gray-900 mb-6">Admission Enquiry</h2>
                                            <form className="space-y-4">
                                                <input
                                                    type="text"
                                                    placeholder="Student Name"
                                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
                                                />
                                                <input
                                                    type="text"
                                                    placeholder="Parent Name"
                                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
                                                />
                                                <input
                                                    type="email"
                                                    placeholder="Email Address"
                                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
                                                />
                                                <input
                                                    type="tel"
                                                    placeholder="Phone Number"
                                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
                                                />
                                                <select className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none">
                                                    <option>Select Class</option>
                                                    <option>Class 1-5</option>
                                                    <option>Class 6-8</option>
                                                    <option>Class 9-10</option>
                                                    <option>Class 11-12</option>
                                                </select>
                                                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                                                    Submit Enquiry
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default WebsitePrototype;
