import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Users, Upload, MessageSquare, CheckCircle, XCircle, FileText, Send } from 'lucide-react';

const TeacherAppPrototype = () => {
    const [activeScreen, setActiveScreen] = useState('dashboard');
    const [attendance, setAttendance] = useState({
        'John Doe': true,
        'Jane Smith': true,
        'Mike Johnson': false,
        'Sarah Williams': true,
        'Tom Brown': true
    });

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
                        Teacher <span className="gradient-text">App Prototype</span>
                    </h2>
                    <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Empowering teachers with digital tools for efficient classroom management
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
                                <div className="bg-gradient-to-r from-blue-900 to-blue-700 px-6 py-3 text-white flex justify-between items-center">
                                    <span className="text-sm font-semibold">9:41 AM</span>
                                    <span className="text-sm">Teacher App</span>
                                    <span className="text-sm">●●●</span>
                                </div>

                                {/* App Content */}
                                <div className="h-full overflow-y-auto pb-20">
                                    {/* Dashboard Screen */}
                                    {activeScreen === 'dashboard' && (
                                        <div className="p-6">
                                            <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome, Mrs. Sharma</h1>
                                            <p className="text-gray-600 mb-6">Class 10-A, Mathematics</p>

                                            {/* Quick Stats */}
                                            <div className="grid grid-cols-2 gap-4 mb-6">
                                                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl">
                                                    <div className="text-2xl font-bold text-blue-600">5</div>
                                                    <div className="text-sm text-gray-700">Classes Today</div>
                                                </div>
                                                <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl">
                                                    <div className="text-2xl font-bold text-green-600">42</div>
                                                    <div className="text-sm text-gray-700">Students</div>
                                                </div>
                                            </div>

                                            {/* Today's Classes */}
                                            <h2 className="text-lg font-bold text-gray-900 mb-4">Today's Schedule</h2>
                                            <div className="space-y-3 mb-6">
                                                {[
                                                    { time: '9:00 AM', class: 'Class 10-A', subject: 'Mathematics' },
                                                    { time: '11:00 AM', class: 'Class 10-B', subject: 'Mathematics' },
                                                    { time: '2:00 PM', class: 'Class 9-A', subject: 'Mathematics' }
                                                ].map((item, i) => (
                                                    <div key={i} className="bg-white border-2 border-gray-200 p-4 rounded-xl">
                                                        <div className="flex justify-between items-center">
                                                            <div>
                                                                <div className="font-semibold text-gray-900">{item.class}</div>
                                                                <div className="text-sm text-gray-600">{item.subject}</div>
                                                            </div>
                                                            <div className="text-blue-600 font-semibold">{item.time}</div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Quick Actions */}
                                            <h2 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h2>
                                            <div className="grid grid-cols-2 gap-4">
                                                <button
                                                    onClick={() => setActiveScreen('attendance')}
                                                    className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-4 rounded-xl font-semibold hover:shadow-lg transition-all"
                                                >
                                                    <Users className="mx-auto mb-2" size={24} />
                                                    Attendance
                                                </button>
                                                <button
                                                    onClick={() => setActiveScreen('upload')}
                                                    className="bg-gradient-to-br from-green-600 to-green-800 text-white p-4 rounded-xl font-semibold hover:shadow-lg transition-all"
                                                >
                                                    <Upload className="mx-auto mb-2" size={24} />
                                                    Upload Notes
                                                </button>
                                            </div>
                                        </div>
                                    )}

                                    {/* Attendance Screen */}
                                    {activeScreen === 'attendance' && (
                                        <div className="p-6">
                                            <div className="flex items-center justify-between mb-6">
                                                <h1 className="text-2xl font-bold text-gray-900">Mark Attendance</h1>
                                                <button
                                                    onClick={() => setActiveScreen('dashboard')}
                                                    className="text-blue-600 font-semibold"
                                                >
                                                    ← Back
                                                </button>
                                            </div>

                                            <div className="bg-blue-50 p-4 rounded-xl mb-6">
                                                <div className="font-semibold text-gray-900">Class 10-A</div>
                                                <div className="text-sm text-gray-600">Mathematics - Period 1</div>
                                                <div className="text-sm text-gray-600 mt-1">Date: Feb 11, 2026</div>
                                            </div>

                                            <h2 className="text-lg font-bold text-gray-900 mb-4">Student List</h2>
                                            <div className="space-y-3">
                                                {Object.entries(attendance).map(([student, present]) => (
                                                    <div key={student} className="bg-white border-2 border-gray-200 p-4 rounded-xl">
                                                        <div className="flex justify-between items-center">
                                                            <span className="font-semibold text-gray-900">{student}</span>
                                                            <div className="flex space-x-2">
                                                                <button
                                                                    onClick={() => setAttendance({ ...attendance, [student]: true })}
                                                                    className={`px-4 py-2 rounded-lg font-semibold transition-all ${present
                                                                            ? 'bg-green-600 text-white'
                                                                            : 'bg-gray-200 text-gray-600'
                                                                        }`}
                                                                >
                                                                    <CheckCircle size={18} className="inline mr-1" />
                                                                    Present
                                                                </button>
                                                                <button
                                                                    onClick={() => setAttendance({ ...attendance, [student]: false })}
                                                                    className={`px-4 py-2 rounded-lg font-semibold transition-all ${!present
                                                                            ? 'bg-red-600 text-white'
                                                                            : 'bg-gray-200 text-gray-600'
                                                                        }`}
                                                                >
                                                                    <XCircle size={18} className="inline mr-1" />
                                                                    Absent
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            <button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all">
                                                Save Attendance
                                            </button>
                                        </div>
                                    )}

                                    {/* Upload Notes Screen */}
                                    {activeScreen === 'upload' && (
                                        <div className="p-6">
                                            <div className="flex items-center justify-between mb-6">
                                                <h1 className="text-2xl font-bold text-gray-900">Upload Notes</h1>
                                                <button
                                                    onClick={() => setActiveScreen('dashboard')}
                                                    className="text-blue-600 font-semibold"
                                                >
                                                    ← Back
                                                </button>
                                            </div>

                                            <div className="space-y-4">
                                                <div>
                                                    <label className="block text-sm font-semibold text-gray-900 mb-2">Select Class</label>
                                                    <select className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-600 focus:outline-none">
                                                        <option>Class 10-A</option>
                                                        <option>Class 10-B</option>
                                                        <option>Class 9-A</option>
                                                    </select>
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-semibold text-gray-900 mb-2">Subject</label>
                                                    <select className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-600 focus:outline-none">
                                                        <option>Mathematics</option>
                                                        <option>Science</option>
                                                        <option>English</option>
                                                    </select>
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-semibold text-gray-900 mb-2">Title</label>
                                                    <input
                                                        type="text"
                                                        placeholder="e.g., Chapter 5 - Trigonometry"
                                                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-600 focus:outline-none"
                                                    />
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-semibold text-gray-900 mb-2">Upload File</label>
                                                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-600 transition-all cursor-pointer">
                                                        <FileText size={48} className="mx-auto text-gray-400 mb-3" />
                                                        <p className="text-gray-600 font-semibold">Click to upload PDF or Image</p>
                                                        <p className="text-sm text-gray-500 mt-1">Max size: 10MB</p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-semibold text-gray-900 mb-2">Homework (Optional)</label>
                                                    <textarea
                                                        placeholder="Describe homework assignment..."
                                                        rows="3"
                                                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-600 focus:outline-none"
                                                    ></textarea>
                                                </div>

                                                <button className="w-full bg-gradient-to-r from-green-600 to-green-800 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-2">
                                                    <Upload size={20} />
                                                    <span>Upload & Share</span>
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Bottom Navigation */}
                                <div className="absolute bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 px-6 py-4 flex justify-around">
                                    <button
                                        onClick={() => setActiveScreen('dashboard')}
                                        className={`flex flex-col items-center ${activeScreen === 'dashboard' ? 'text-blue-600' : 'text-gray-400'}`}
                                    >
                                        <Home size={24} />
                                        <span className="text-xs mt-1">Home</span>
                                    </button>
                                    <button
                                        onClick={() => setActiveScreen('attendance')}
                                        className={`flex flex-col items-center ${activeScreen === 'attendance' ? 'text-blue-600' : 'text-gray-400'}`}
                                    >
                                        <Users size={24} />
                                        <span className="text-xs mt-1">Attendance</span>
                                    </button>
                                    <button
                                        onClick={() => setActiveScreen('upload')}
                                        className={`flex flex-col items-center ${activeScreen === 'upload' ? 'text-blue-600' : 'text-gray-400'}`}
                                    >
                                        <Upload size={24} />
                                        <span className="text-xs mt-1">Upload</span>
                                    </button>
                                    <button className="flex flex-col items-center text-gray-400">
                                        <MessageSquare size={24} />
                                        <span className="text-xs mt-1">Chat</span>
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

export default TeacherAppPrototype;
