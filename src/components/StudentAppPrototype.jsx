import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, BookOpen, Calendar, CreditCard, HelpCircle, User } from 'lucide-react';

const StudentAppPrototype = () => {
    const [activeScreen, setActiveScreen] = useState('dashboard');

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
                        Student <span className="gradient-text">App Prototype</span>
                    </h2>
                    <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Empowering students with easy access to learning resources
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
                                <div className="bg-gradient-to-r from-purple-600 to-purple-800 px-6 py-3 text-white flex justify-between items-center">
                                    <span className="text-sm font-semibold">9:41 AM</span>
                                    <span className="text-sm">Student App</span>
                                    <span className="text-sm">●●●</span>
                                </div>

                                {/* App Content */}
                                <div className="h-full overflow-y-auto pb-20">
                                    {/* Dashboard Screen */}
                                    {activeScreen === 'dashboard' && (
                                        <div className="p-6">
                                            <h1 className="text-2xl font-bold text-gray-900 mb-2">Hello, Rahul!</h1>
                                            <p className="text-gray-600 mb-6">Class 10-A, Roll No: 15</p>

                                            {/* Quick Stats */}
                                            <div className="grid grid-cols-2 gap-4 mb-6">
                                                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl">
                                                    <div className="text-2xl font-bold text-purple-600">94%</div>
                                                    <div className="text-sm text-gray-700">Attendance</div>
                                                </div>
                                                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl">
                                                    <div className="text-2xl font-bold text-blue-600">A+</div>
                                                    <div className="text-sm text-gray-700">Overall Grade</div>
                                                </div>
                                            </div>

                                            {/* Today's Schedule */}
                                            <h2 className="text-lg font-bold text-gray-900 mb-4">Today's Classes</h2>
                                            <div className="space-y-3 mb-6">
                                                {[
                                                    { time: '9:00 AM', subject: 'Mathematics', teacher: 'Mrs. Sharma', room: 'Room 201' },
                                                    { time: '10:00 AM', subject: 'Science', teacher: 'Mr. Patel', room: 'Lab 1' },
                                                    { time: '11:00 AM', subject: 'English', teacher: 'Ms. Singh', room: 'Room 105' }
                                                ].map((item, i) => (
                                                    <div key={i} className="bg-white border-2 border-gray-200 p-4 rounded-xl">
                                                        <div className="flex justify-between items-start">
                                                            <div>
                                                                <div className="font-bold text-gray-900">{item.subject}</div>
                                                                <div className="text-sm text-gray-600">{item.teacher}</div>
                                                                <div className="text-xs text-gray-500">{item.room}</div>
                                                            </div>
                                                            <div className="text-purple-600 font-semibold text-sm">{item.time}</div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Quick Actions */}
                                            <h2 className="text-lg font-bold text-gray-900 mb-4">Quick Access</h2>
                                            <div className="grid grid-cols-2 gap-4">
                                                <button
                                                    onClick={() => setActiveScreen('notes')}
                                                    className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-4 rounded-xl font-semibold hover:shadow-lg transition-all"
                                                >
                                                    <BookOpen className="mx-auto mb-2" size={24} />
                                                    Study Notes
                                                </button>
                                                <button
                                                    onClick={() => setActiveScreen('id')}
                                                    className="bg-gradient-to-br from-purple-600 to-purple-800 text-white p-4 rounded-xl font-semibold hover:shadow-lg transition-all"
                                                >
                                                    <CreditCard className="mx-auto mb-2" size={24} />
                                                    Digital ID
                                                </button>
                                            </div>
                                        </div>
                                    )}

                                    {/* Study Notes Screen */}
                                    {activeScreen === 'notes' && (
                                        <div className="p-6">
                                            <div className="flex items-center justify-between mb-6">
                                                <h1 className="text-2xl font-bold text-gray-900">Study Notes</h1>
                                                <button
                                                    onClick={() => setActiveScreen('dashboard')}
                                                    className="text-purple-600 font-semibold"
                                                >
                                                    ← Back
                                                </button>
                                            </div>

                                            {/* Filter Tabs */}
                                            <div className="flex space-x-2 mb-6 overflow-x-auto">
                                                {['All', 'Mathematics', 'Science', 'English', 'History'].map((subject) => (
                                                    <button
                                                        key={subject}
                                                        className="px-4 py-2 bg-purple-100 text-purple-800 rounded-lg font-semibold whitespace-nowrap hover:bg-purple-200 transition-all"
                                                    >
                                                        {subject}
                                                    </button>
                                                ))}
                                            </div>

                                            {/* Notes List */}
                                            <div className="space-y-4">
                                                {[
                                                    { subject: 'Mathematics', title: 'Chapter 5 - Trigonometry', date: 'Feb 10, 2026', teacher: 'Mrs. Sharma' },
                                                    { subject: 'Science', title: 'Chapter 8 - Chemical Reactions', date: 'Feb 9, 2026', teacher: 'Mr. Patel' },
                                                    { subject: 'English', title: 'Grammar - Tenses', date: 'Feb 8, 2026', teacher: 'Ms. Singh' },
                                                    { subject: 'Mathematics', title: 'Chapter 4 - Quadratic Equations', date: 'Feb 5, 2026', teacher: 'Mrs. Sharma' }
                                                ].map((note, i) => (
                                                    <div key={i} className="bg-white border-2 border-gray-200 p-4 rounded-xl hover:border-purple-600 transition-all cursor-pointer">
                                                        <div className="flex items-start justify-between">
                                                            <div className="flex-1">
                                                                <div className="flex items-center space-x-2 mb-2">
                                                                    <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded">
                                                                        {note.subject}
                                                                    </span>
                                                                </div>
                                                                <h3 className="font-bold text-gray-900 mb-1">{note.title}</h3>
                                                                <p className="text-sm text-gray-600">By {note.teacher}</p>
                                                                <p className="text-xs text-gray-500 mt-1">{note.date}</p>
                                                            </div>
                                                            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-purple-700 transition-all">
                                                                View
                                                            </button>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Homework Section */}
                                            <div className="mt-6 bg-orange-50 border-2 border-orange-400 p-4 rounded-xl">
                                                <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                                                    <Calendar className="mr-2 text-orange-600" size={20} />
                                                    Pending Homework
                                                </h3>
                                                <div className="space-y-2">
                                                    <div className="bg-white p-3 rounded-lg">
                                                        <p className="text-sm font-semibold text-gray-900">Mathematics - Exercise 5.2</p>
                                                        <p className="text-xs text-gray-600">Due: Feb 13, 2026</p>
                                                    </div>
                                                    <div className="bg-white p-3 rounded-lg">
                                                        <p className="text-sm font-semibold text-gray-900">Science - Lab Report</p>
                                                        <p className="text-xs text-gray-600">Due: Feb 15, 2026</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Digital ID Screen */}
                                    {activeScreen === 'id' && (
                                        <div className="p-6">
                                            <div className="flex items-center justify-between mb-6">
                                                <h1 className="text-2xl font-bold text-gray-900">Digital ID Card</h1>
                                                <button
                                                    onClick={() => setActiveScreen('dashboard')}
                                                    className="text-purple-600 font-semibold"
                                                >
                                                    ← Back
                                                </button>
                                            </div>

                                            {/* ID Card */}
                                            <div className="bg-gradient-to-br from-purple-600 to-purple-900 rounded-2xl p-6 text-white shadow-2xl mb-6">
                                                <div className="text-center mb-6">
                                                    <h2 className="text-xl font-bold mb-1">[School Name]</h2>
                                                    <p className="text-sm text-purple-200">Student Identity Card</p>
                                                </div>

                                                <div className="flex items-center space-x-4 mb-6">
                                                    <div className="w-24 h-24 bg-white rounded-xl flex items-center justify-center">
                                                        <User size={48} className="text-purple-600" />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-2xl font-bold mb-1">Rahul Kumar</h3>
                                                        <p className="text-purple-200">Class 10-A</p>
                                                        <p className="text-purple-200">Roll No: 15</p>
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-2 gap-4 mb-6">
                                                    <div>
                                                        <p className="text-xs text-purple-200">Date of Birth</p>
                                                        <p className="font-semibold">15/08/2010</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-xs text-purple-200">Blood Group</p>
                                                        <p className="font-semibold">O+</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-xs text-purple-200">Admission No</p>
                                                        <p className="font-semibold">2024/1015</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-xs text-purple-200">Valid Until</p>
                                                        <p className="font-semibold">March 2027</p>
                                                    </div>
                                                </div>

                                                {/* QR Code Placeholder */}
                                                <div className="bg-white rounded-xl p-4 flex items-center justify-center">
                                                    <div className="w-32 h-32 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center">
                                                        <span className="text-purple-800 font-bold text-xs">QR CODE</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Emergency Contact */}
                                            <div className="bg-red-50 border-2 border-red-400 p-4 rounded-xl">
                                                <h3 className="font-bold text-gray-900 mb-3">Emergency Contact</h3>
                                                <div className="space-y-2">
                                                    <div>
                                                        <p className="text-sm text-gray-600">Parent Name</p>
                                                        <p className="font-semibold text-gray-900">Mr. Rajesh Kumar</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-sm text-gray-600">Contact Number</p>
                                                        <p className="font-semibold text-gray-900">+91 98765 43210</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Bottom Navigation */}
                                <div className="absolute bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 px-6 py-4 flex justify-around">
                                    <button
                                        onClick={() => setActiveScreen('dashboard')}
                                        className={`flex flex-col items-center ${activeScreen === 'dashboard' ? 'text-purple-600' : 'text-gray-400'}`}
                                    >
                                        <Home size={24} />
                                        <span className="text-xs mt-1">Home</span>
                                    </button>
                                    <button
                                        onClick={() => setActiveScreen('notes')}
                                        className={`flex flex-col items-center ${activeScreen === 'notes' ? 'text-purple-600' : 'text-gray-400'}`}
                                    >
                                        <BookOpen size={24} />
                                        <span className="text-xs mt-1">Notes</span>
                                    </button>
                                    <button className="flex flex-col items-center text-gray-400">
                                        <Calendar size={24} />
                                        <span className="text-xs mt-1">Exams</span>
                                    </button>
                                    <button
                                        onClick={() => setActiveScreen('id')}
                                        className={`flex flex-col items-center ${activeScreen === 'id' ? 'text-purple-600' : 'text-gray-400'}`}
                                    >
                                        <CreditCard size={24} />
                                        <span className="text-xs mt-1">ID Card</span>
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

export default StudentAppPrototype;
