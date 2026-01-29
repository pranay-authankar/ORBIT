import React from 'react';
import { BookOpen, Calendar, Award, Clock } from 'lucide-react';

const AppHome: React.FC = () => {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { label: 'Pending Homework', value: '4', icon: BookOpen, color: 'text-blue-600', bg: 'bg-blue-50' },
                    { label: 'Upcoming Exams', value: '2', icon: Calendar, color: 'text-purple-600', bg: 'bg-purple-50' },
                    { label: 'Attendance', value: '95%', icon: Clock, color: 'text-emerald-600', bg: 'bg-emerald-50' },
                    { label: 'Achievements', value: '12', icon: Award, color: 'text-amber-600', bg: 'bg-amber-50' },
                ].map((stat, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex items-center">
                        <div className={`p-4 rounded-lg ${stat.bg} mr-4`}>
                            <stat.icon className={`h-6 w-6 ${stat.color}`} />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Announcements</h3>
                    <div className="space-y-4">
                        {[1, 2, 3].map((_, i) => (
                            <div key={i} className="flex gap-4 p-4 rounded-lg bg-gray-50 border border-gray-100">
                                <div className="h-2 w-2 mt-2 rounded-full bg-blue-500 flex-shrink-0"></div>
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-900">School Sports Day Rescheduled</h4>
                                    <p className="text-xs text-gray-500 mt-1">Today, 10:00 AM • Admin Office</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Today's Schedule</h3>
                    <div className="space-y-4">
                        {[
                            { time: '09:00 AM', subject: 'Mathematics', room: 'Room 101' },
                            { time: '10:30 AM', subject: 'Science', room: 'Lab 2' },
                            { time: '12:00 PM', subject: 'English', room: 'Room 105' },
                        ].map((classItem, i) => (
                            <div key={i} className="flex items-center justify-between p-4 rounded-lg border border-gray-100 hover:border-blue-200 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="text-sm font-medium text-gray-500 w-16">{classItem.time}</div>
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-900">{classItem.subject}</h4>
                                        <p className="text-xs text-gray-500">{classItem.room}</p>
                                    </div>
                                </div>
                                <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700">
                                    On Time
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppHome;
