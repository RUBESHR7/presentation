import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Bell, FileText, CreditCard, AlertCircle, CheckCircle, Calendar } from 'lucide-react';

const ParentAppPrototype = () => {
    const [activeScreen, setActiveScreen] = useState('dashboard');

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
                        Parent <span className="gradient-text">App Prototype</span>
                    </h2>
                    <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Keep parents connected and informed about their child's progress
                    </p>
                </motion.div>

                <div className="flex justify-center space-x-8">
                    {/* Phone Mockup */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="phone-frame w-80">
                            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl" style={{ height: '650px' }}>
                                {/* Status Bar */}
                                <div className="bg-gradient-to-r from-green-600 to-green-800 px-6 py-3 text-white flex justify-between items-center">
                                    <span className="text-sm font-semibold">9:41 AM</span>
                                    <span className="text-sm">Parent App</span>
                                    <span className="text-sm">●●●</span>
                                </div>

                                {/* App Content */}
                                <div className="h-full overflow-y-auto pb-20">
                                    {/* Dashboard Screen */}
                                    {activeScreen === 'dashboard' && (
                                        <div className="p-6">
                                            <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome, Mr. Kumar</h1>
                                            <p className="text-gray-600 mb-6">Parent of Rahul Kumar (Class 10-A)</p>

                                            {/* Student Card */}
                                            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl mb-6">
                                                <div className="flex items-center space-x-4 mb-4">
                                                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                                                        RK
                                                    </div>
                                                    <div>
                                                        <h3 className="text-xl font-bold text-gray-900">Rahul Kumar</h3>
                                                        <p className="text-gray-600">Class 10-A, Roll No: 15</p>
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="bg-white p-3 rounded-xl">
                                                        <div className="text-2xl font-bold text-green-600">94%</div>
                                                        <div className="text-xs text-gray-600">Attendance</div>
                                                    </div>
                                                    <div className="bg-white p-3 rounded-xl">
                                                        <div className="text-2xl font-bold text-blue-600">A+</div>
                                                        <div className="text-xs text-gray-600">Grade</div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Quick Stats */}
                                            <div className="grid grid-cols-2 gap-4 mb-6">
                                                <div className="bg-blue-50 p-4 rounded-xl">
                                                    <div className="text-2xl font-bold text-blue-600">₹0</div>
                                                    <div className="text-sm text-gray-700">Fee Due</div>
                                                    <CheckCircle className="text-green-600 mt-2" size={20} />
                                                </div>
                                                <div className="bg-orange-50 p-4 rounded-xl">
                                                    <div className="text-2xl font-bold text-orange-600">3</div>
                                                    <div className="text-sm text-gray-700">New Updates</div>
                                                    <Bell className="text-orange-600 mt-2" size={20} />
                                                </div>
                                            </div>

                                            {/* Recent Notifications */}
                                            <h2 className="text-lg font-bold text-gray-900 mb-4">Recent Notifications</h2>
                                            <div className="space-y-3">
                                                <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-lg">
                                                    <div className="flex items-start space-x-3">
                                                        <CheckCircle className="text-green-600 mt-1" size={20} />
                                                        <div>
                                                            <p className="font-semibold text-gray-900">Present Today</p>
                                                            <p className="text-sm text-gray-600">Your child attended all classes - Feb 11</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-lg">
                                                    <div className="flex items-start space-x-3">
                                                        <FileText className="text-blue-600 mt-1" size={20} />
                                                        <div>
                                                            <p className="font-semibold text-gray-900">New Study Material</p>
                                                            <p className="text-sm text-gray-600">Mathematics - Chapter 5 uploaded</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="bg-purple-50 border-l-4 border-purple-600 p-4 rounded-lg">
                                                    <div className="flex items-start space-x-3">
                                                        <Calendar className="text-purple-600 mt-1" size={20} />
                                                        <div>
                                                            <p className="font-semibold text-gray-900">Upcoming Event</p>
                                                            <p className="text-sm text-gray-600">Parent-Teacher Meeting - Feb 20</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Quick Actions */}
                                            <div className="grid grid-cols-2 gap-4 mt-6">
                                                <button
                                                    onClick={() => setActiveScreen('leave')}
                                                    className="bg-gradient-to-br from-orange-500 to-orange-700 text-white p-4 rounded-xl font-semibold hover:shadow-lg transition-all"
                                                >
                                                    <FileText className="mx-auto mb-2" size={24} />
                                                    Apply Leave
                                                </button>
                                                <button
                                                    onClick={() => setActiveScreen('payment')}
                                                    className="bg-gradient-to-br from-green-600 to-green-800 text-white p-4 rounded-xl font-semibold hover:shadow-lg transition-all"
                                                >
                                                    <CreditCard className="mx-auto mb-2" size={24} />
                                                    Pay Fees
                                                </button>
                                            </div>
                                        </div>
                                    )}

                                    {/* Leave Request Screen */}
                                    {activeScreen === 'leave' && (
                                        <div className="p-6">
                                            <div className="flex items-center justify-between mb-6">
                                                <h1 className="text-2xl font-bold text-gray-900">Apply Leave</h1>
                                                <button
                                                    onClick={() => setActiveScreen('dashboard')}
                                                    className="text-green-600 font-semibold"
                                                >
                                                    ← Back
                                                </button>
                                            </div>

                                            <div className="space-y-4">
                                                <div>
                                                    <label className="block text-sm font-semibold text-gray-900 mb-2">Student Name</label>
                                                    <input
                                                        type="text"
                                                        value="Rahul Kumar"
                                                        disabled
                                                        className="w-full px-4 py-3 bg-gray-100 border-2 border-gray-300 rounded-xl"
                                                    />
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-semibold text-gray-900 mb-2">Leave Type</label>
                                                    <select className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-green-600 focus:outline-none">
                                                        <option>Sick Leave</option>
                                                        <option>Family Function</option>
                                                        <option>Medical Appointment</option>
                                                        <option>Other</option>
                                                    </select>
                                                </div>

                                                <div className="grid grid-cols-2 gap-4">
                                                    <div>
                                                        <label className="block text-sm font-semibold text-gray-900 mb-2">From Date</label>
                                                        <input
                                                            type="date"
                                                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-green-600 focus:outline-none"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-semibold text-gray-900 mb-2">To Date</label>
                                                        <input
                                                            type="date"
                                                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-green-600 focus:outline-none"
                                                        />
                                                    </div>
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-semibold text-gray-900 mb-2">Reason</label>
                                                    <textarea
                                                        placeholder="Please describe the reason for leave..."
                                                        rows="4"
                                                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-green-600 focus:outline-none"
                                                    ></textarea>
                                                </div>

                                                <div className="bg-yellow-50 border-2 border-yellow-400 p-4 rounded-xl flex items-start space-x-3">
                                                    <AlertCircle className="text-yellow-600 mt-1" size={20} />
                                                    <p className="text-sm text-gray-700">
                                                        Leave request will be sent to the class teacher for approval
                                                    </p>
                                                </div>

                                                <button className="w-full bg-gradient-to-r from-green-600 to-green-800 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all">
                                                    Submit Leave Request
                                                </button>
                                            </div>
                                        </div>
                                    )}

                                    {/* Payment Screen */}
                                    {activeScreen === 'payment' && (
                                        <div className="p-6">
                                            <div className="flex items-center justify-between mb-6">
                                                <h1 className="text-2xl font-bold text-gray-900">Pay Fees</h1>
                                                <button
                                                    onClick={() => setActiveScreen('dashboard')}
                                                    className="text-green-600 font-semibold"
                                                >
                                                    ← Back
                                                </button>
                                            </div>

                                            {/* Fee Summary */}
                                            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl mb-6">
                                                <h3 className="text-lg font-bold text-gray-900 mb-4">Fee Summary</h3>
                                                <div className="space-y-2 mb-4">
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-700">Tuition Fee</span>
                                                        <span className="font-semibold text-gray-900">₹18,000</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-700">Transport Fee</span>
                                                        <span className="font-semibold text-gray-900">₹3,000</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-700">Activity Fee</span>
                                                        <span className="font-semibold text-gray-900">₹1,500</span>
                                                    </div>
                                                    <div className="border-t-2 border-blue-300 pt-2 mt-2 flex justify-between">
                                                        <span className="font-bold text-gray-900">Total Amount</span>
                                                        <span className="font-bold text-blue-600 text-xl">₹22,500</span>
                                                    </div>
                                                </div>
                                                <div className="bg-green-100 border-2 border-green-500 p-3 rounded-xl text-center">
                                                    <p className="text-sm font-semibold text-green-800">Term 3 - 2025-26</p>
                                                </div>
                                            </div>

                                            {/* Payment Methods */}
                                            <h3 className="text-lg font-bold text-gray-900 mb-4">Select Payment Method</h3>
                                            <div className="space-y-3 mb-6">
                                                <button className="w-full bg-white border-2 border-gray-300 p-4 rounded-xl hover:border-green-600 transition-all text-left">
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center space-x-3">
                                                            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center text-white font-bold">
                                                                UPI
                                                            </div>
                                                            <span className="font-semibold text-gray-900">UPI Payment</span>
                                                        </div>
                                                        <span className="text-gray-400">→</span>
                                                    </div>
                                                </button>
                                                <button className="w-full bg-white border-2 border-gray-300 p-4 rounded-xl hover:border-green-600 transition-all text-left">
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center space-x-3">
                                                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center text-white font-bold">
                                                                💳
                                                            </div>
                                                            <span className="font-semibold text-gray-900">Credit/Debit Card</span>
                                                        </div>
                                                        <span className="text-gray-400">→</span>
                                                    </div>
                                                </button>
                                                <button className="w-full bg-white border-2 border-gray-300 p-4 rounded-xl hover:border-green-600 transition-all text-left">
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center space-x-3">
                                                            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center text-white font-bold">
                                                                🏦
                                                            </div>
                                                            <span className="font-semibold text-gray-900">Net Banking</span>
                                                        </div>
                                                        <span className="text-gray-400">→</span>
                                                    </div>
                                                </button>
                                            </div>

                                            <div className="bg-green-50 border-2 border-green-500 p-4 rounded-xl flex items-start space-x-3 mb-6">
                                                <CheckCircle className="text-green-600 mt-1" size={20} />
                                                <div>
                                                    <p className="font-semibold text-gray-900">Secure Payment</p>
                                                    <p className="text-sm text-gray-600">All transactions are encrypted and secure</p>
                                                </div>
                                            </div>

                                            <button className="w-full bg-gradient-to-r from-green-600 to-green-800 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all">
                                                Proceed to Pay ₹22,500
                                            </button>
                                        </div>
                                    )}
                                </div>

                                {/* Bottom Navigation */}
                                <div className="absolute bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 px-6 py-4 flex justify-around">
                                    <button
                                        onClick={() => setActiveScreen('dashboard')}
                                        className={`flex flex-col items-center ${activeScreen === 'dashboard' ? 'text-green-600' : 'text-gray-400'}`}
                                    >
                                        <Home size={24} />
                                        <span className="text-xs mt-1">Home</span>
                                    </button>
                                    <button className="flex flex-col items-center text-gray-400">
                                        <Bell size={24} />
                                        <span className="text-xs mt-1">Alerts</span>
                                    </button>
                                    <button
                                        onClick={() => setActiveScreen('leave')}
                                        className={`flex flex-col items-center ${activeScreen === 'leave' ? 'text-green-600' : 'text-gray-400'}`}
                                    >
                                        <FileText size={24} />
                                        <span className="text-xs mt-1">Leave</span>
                                    </button>
                                    <button
                                        onClick={() => setActiveScreen('payment')}
                                        className={`flex flex-col items-center ${activeScreen === 'payment' ? 'text-green-600' : 'text-gray-400'}`}
                                    >
                                        <CreditCard size={24} />
                                        <span className="text-xs mt-1">Fees</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ParentAppPrototype;
