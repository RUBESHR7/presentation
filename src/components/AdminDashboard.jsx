import React from 'react';
import { motion } from 'framer-motion';
import { Users, TrendingUp, DollarSign, Award, Settings, FileText } from 'lucide-react';

const AdminDashboard = () => {
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
                        Admin <span className="gradient-text">Control Panel</span>
                    </h2>
                    <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Comprehensive dashboard for complete school management
                    </p>
                </motion.div>

                {/* Desktop Dashboard Mockup */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="laptop-frame max-w-6xl mx-auto"
                >
                    <div className="bg-white rounded-lg overflow-hidden" style={{ height: '600px', overflowY: 'auto' }}>
                        {/* Dashboard Header */}
                        <div className="bg-gradient-to-r from-orange-600 to-orange-800 px-8 py-6 text-white">
                            <div className="flex justify-between items-center">
                                <div>
                                    <h1 className="text-3xl font-bold mb-1">Admin Dashboard</h1>
                                    <p className="text-orange-100">Welcome back, Principal Sharma</p>
                                </div>
                                <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-all">
                                    <Settings className="inline mr-2" size={20} />
                                    Settings
                                </button>
                            </div>
                        </div>

                        <div className="p-8">
                            {/* Key Metrics */}
                            <div className="grid md:grid-cols-4 gap-6 mb-8">
                                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border-2 border-blue-200">
                                    <div className="flex items-center justify-between mb-4">
                                        <Users className="text-blue-600" size={32} />
                                        <span className="text-green-600 text-sm font-semibold">+12%</span>
                                    </div>
                                    <div className="text-3xl font-bold text-blue-600 mb-1">2,847</div>
                                    <div className="text-sm text-gray-700">Total Students</div>
                                </div>

                                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl border-2 border-green-200">
                                    <div className="flex items-center justify-between mb-4">
                                        <TrendingUp className="text-green-600" size={32} />
                                        <span className="text-green-600 text-sm font-semibold">+5%</span>
                                    </div>
                                    <div className="text-3xl font-bold text-green-600 mb-1">94.2%</div>
                                    <div className="text-sm text-gray-700">Avg Attendance</div>
                                </div>

                                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl border-2 border-purple-200">
                                    <div className="flex items-center justify-between mb-4">
                                        <DollarSign className="text-purple-600" size={32} />
                                        <span className="text-green-600 text-sm font-semibold">+18%</span>
                                    </div>
                                    <div className="text-3xl font-bold text-purple-600 mb-1">₹45.2L</div>
                                    <div className="text-sm text-gray-700">Fee Collection</div>
                                </div>

                                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl border-2 border-orange-200">
                                    <div className="flex items-center justify-between mb-4">
                                        <Award className="text-orange-600" size={32} />
                                        <span className="text-green-600 text-sm font-semibold">+8%</span>
                                    </div>
                                    <div className="text-3xl font-bold text-orange-600 mb-1">87.5%</div>
                                    <div className="text-sm text-gray-700">Avg Performance</div>
                                </div>
                            </div>

                            {/* Charts Row */}
                            <div className="grid md:grid-cols-2 gap-8 mb-8">
                                {/* Attendance Chart */}
                                <div className="glass-card p-6 rounded-2xl">
                                    <h3 className="text-xl font-bold text-gray-900 mb-6">Monthly Attendance Trend</h3>
                                    <div className="space-y-4">
                                        {[
                                            { month: 'January', percentage: 92, color: 'bg-blue-600' },
                                            { month: 'February', percentage: 94, color: 'bg-green-600' },
                                            { month: 'March', percentage: 89, color: 'bg-yellow-600' },
                                            { month: 'April', percentage: 95, color: 'bg-green-600' },
                                            { month: 'May', percentage: 93, color: 'bg-blue-600' }
                                        ].map((item, i) => (
                                            <div key={i}>
                                                <div className="flex justify-between items-center mb-2">
                                                    <span className="text-sm font-semibold text-gray-700">{item.month}</span>
                                                    <span className="text-sm font-bold text-gray-900">{item.percentage}%</span>
                                                </div>
                                                <div className="w-full bg-gray-200 rounded-full h-3">
                                                    <div
                                                        className={`${item.color} h-3 rounded-full transition-all`}
                                                        style={{ width: `${item.percentage}%` }}
                                                    ></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Fee Collection Chart */}
                                <div className="glass-card p-6 rounded-2xl">
                                    <h3 className="text-xl font-bold text-gray-900 mb-6">Fee Collection Status</h3>
                                    <div className="space-y-4">
                                        {[
                                            { class: 'Class 1-5', collected: 85, total: 100, amount: '₹12.5L' },
                                            { class: 'Class 6-8', collected: 78, total: 100, amount: '₹10.2L' },
                                            { class: 'Class 9-10', collected: 92, total: 100, amount: '₹15.8L' },
                                            { class: 'Class 11-12', collected: 88, total: 100, amount: '₹6.7L' }
                                        ].map((item, i) => (
                                            <div key={i}>
                                                <div className="flex justify-between items-center mb-2">
                                                    <span className="text-sm font-semibold text-gray-700">{item.class}</span>
                                                    <span className="text-sm font-bold text-purple-600">{item.amount}</span>
                                                </div>
                                                <div className="w-full bg-gray-200 rounded-full h-3">
                                                    <div
                                                        className="bg-gradient-to-r from-purple-600 to-purple-800 h-3 rounded-full transition-all"
                                                        style={{ width: `${(item.collected / item.total) * 100}%` }}
                                                    ></div>
                                                </div>
                                                <div className="text-xs text-gray-600 mt-1">{item.collected}% collected</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Class Performance */}
                            <div className="glass-card p-6 rounded-2xl mb-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Class-wise Performance</h3>
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="border-b-2 border-gray-200">
                                                <th className="text-left py-3 px-4 font-semibold text-gray-700">Class</th>
                                                <th className="text-left py-3 px-4 font-semibold text-gray-700">Students</th>
                                                <th className="text-left py-3 px-4 font-semibold text-gray-700">Attendance</th>
                                                <th className="text-left py-3 px-4 font-semibold text-gray-700">Avg Grade</th>
                                                <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {[
                                                { class: 'Class 10-A', students: 42, attendance: '95%', grade: 'A+', status: 'Excellent' },
                                                { class: 'Class 10-B', students: 40, attendance: '92%', grade: 'A', status: 'Good' },
                                                { class: 'Class 9-A', students: 45, attendance: '94%', grade: 'A', status: 'Good' },
                                                { class: 'Class 9-B', students: 43, attendance: '89%', grade: 'B+', status: 'Average' }
                                            ].map((row, i) => (
                                                <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                                                    <td className="py-4 px-4 font-semibold text-gray-900">{row.class}</td>
                                                    <td className="py-4 px-4 text-gray-700">{row.students}</td>
                                                    <td className="py-4 px-4 text-gray-700">{row.attendance}</td>
                                                    <td className="py-4 px-4">
                                                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                                                            {row.grade}
                                                        </span>
                                                    </td>
                                                    <td className="py-4 px-4">
                                                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${row.status === 'Excellent' ? 'bg-green-100 text-green-800' :
                                                                row.status === 'Good' ? 'bg-blue-100 text-blue-800' :
                                                                    'bg-yellow-100 text-yellow-800'
                                                            }`}>
                                                            {row.status}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Quick Actions */}
                            <div className="grid md:grid-cols-3 gap-6">
                                <button className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-6 rounded-2xl font-semibold hover:shadow-lg transition-all text-left">
                                    <Users className="mb-3" size={32} />
                                    <div className="text-lg">User Management</div>
                                    <div className="text-sm text-blue-100 mt-1">Manage students, teachers & staff</div>
                                </button>
                                <button className="bg-gradient-to-br from-green-600 to-green-800 text-white p-6 rounded-2xl font-semibold hover:shadow-lg transition-all text-left">
                                    <FileText className="mb-3" size={32} />
                                    <div className="text-lg">Generate Reports</div>
                                    <div className="text-sm text-green-100 mt-1">Export attendance & fee reports</div>
                                </button>
                                <button className="bg-gradient-to-br from-purple-600 to-purple-800 text-white p-6 rounded-2xl font-semibold hover:shadow-lg transition-all text-left">
                                    <Settings className="mb-3" size={32} />
                                    <div className="text-lg">System Settings</div>
                                    <div className="text-sm text-purple-100 mt-1">Configure platform settings</div>
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default AdminDashboard;
