import React from 'react';
import {
    BookOpen,
    GraduationCap,
    CheckCircle,
    DollarSign,
    Calendar,
    Brain,
    FileText,
    TrendingUp,
    Briefcase,
    ShieldCheck
} from 'lucide-react';
import { TEACHER_INFO } from '../data/teacherData';

// Extended Mock Data for Enhanced Dashboard
const TEACHER_DETAILS = {
    id: "TCH-2025-042",
    qualification: "M.Sc. Physics, B.Ed",
    attendance: 96,
    verified: true
};

const CLASSES_TODAY = [
    { id: 1, name: "Grade 10-A", subject: "Physics", time: "08:30 AM", room: "101", task: "Chapter 4: Forces", status: "Done" },
    { id: 2, name: "Grade 11-B", subject: "Physics Lab", time: "10:30 AM", room: "Lab 2", task: "Optics Experiment", status: "Upcoming", urgent: true },
    { id: 3, name: "Grade 12-A", subject: "Advanced Physics", time: "01:00 PM", room: "204", task: "Themodynamics Review", status: "Upcoming" },
];

const SALARY_INFO = {
    base: 45000,
    incentives: 5000,
    bonus: 2500,
    total: 52500
};

const UPCOMING_TASKS = [
    { id: 1, task: "Submit Monthly Report", due: "Oct 30", priority: "High" },
    { id: 2, task: "Parent-Teacher Meeting", due: "Nov 02", priority: "Medium" },
    { id: 3, task: "Science Fair Prep", due: "Nov 05", priority: "Low" },
];

const SCHOOL_EVENTS = [
    { id: 1, name: "Annual Sports Day", date: "Nov 15", role: "Discipline Committee", type: "Sports", color: "bg-orange-100 text-orange-700" },
    { id: 2, name: "Science Exhibition", date: "Nov 22", role: "Judge", type: "Academic", color: "bg-blue-100 text-blue-700" },
];

const SYLLABUS_PROGRESS = [
    { class: "Grade 10", subject: "Physics", progress: 65, color: "bg-blue-500" },
    { class: "Grade 11", subject: "Physics", progress: 40, color: "bg-green-500" },
    { class: "Grade 12", subject: "Physics", progress: 85, color: "bg-purple-500" },
];

const TeacherDashboard: React.FC = () => {
    return (
        <div className="space-y-8 max-w-7xl mx-auto pb-12">

            {/* 1. TEACHER INFO CARD */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full -mr-20 -mt-20 z-0 opacity-50"></div>
                <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-6">
                    {/* Profile Photo */}
                    <div className="h-24 w-24 rounded-full bg-gradient-to-tr from-green-400 to-teal-500 p-1 shadow-lg shrink-0">
                        <div className="h-full w-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                            <GraduationCap className="h-12 w-12 text-gray-400" />
                        </div>
                    </div>

                    {/* Info */}
                    <div className="flex-1 text-center md:text-left space-y-3 w-full">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <div>
                                <div className="flex items-center justify-center md:justify-start gap-2">
                                    <h1 className="text-2xl font-bold text-gray-900">{TEACHER_INFO.name}</h1>
                                    {TEACHER_DETAILS.verified && (
                                        <div className="group relative">
                                            <ShieldCheck className="h-6 w-6 text-blue-500 cursor-help" />
                                            <span className="absolute bottom-full mb-2 hidden group-hover:block w-auto p-2 bg-gray-800 text-white text-xs rounded transition-opacity whitespace-nowrap">
                                                Verified by Administration
                                            </span>
                                        </div>
                                    )}
                                </div>
                                <p className="text-gray-500 font-medium">{TEACHER_DETAILS.qualification} • ID: {TEACHER_DETAILS.id}</p>
                            </div>
                            <div className="mt-4 md:mt-0">
                                <div className="text-right">
                                    <p className="text-sm text-gray-500 mb-1">Attendance</p>
                                    <div className="flex items-center gap-2">
                                        <div className="w-32 h-2 bg-gray-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-green-500 rounded-full" style={{ width: `${TEACHER_DETAILS.attendance}%` }}></div>
                                        </div>
                                        <span className="font-bold text-green-600">{TEACHER_DETAILS.attendance}%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* MAIN DASHBOARD GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* LEFT COLUMN (Classes & Salary) */}
                <div className="lg:col-span-2 space-y-8">

                    {/* 2. CLASSES THEY TEACH */}
                    <div>
                        <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <BookOpen className="h-5 w-5 text-blue-600" /> Today's Classes
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {CLASSES_TODAY.map((cls) => (
                                <div key={cls.id} className={`bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all ${cls.urgent ? 'ring-2 ring-orange-100' : ''}`}>
                                    <div className="flex justify-between items-start mb-3">
                                        <span className="text-xs font-bold text-gray-500 bg-gray-100 px-2 py-1 rounded">{cls.time}</span>
                                        {cls.urgent && <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse"></span>}
                                    </div>
                                    <h3 className="font-bold text-gray-900">{cls.name}</h3>
                                    <p className="text-sm text-gray-600 mb-2">{cls.subject}</p>
                                    <div className="text-xs text-gray-400 mb-3 flex items-center gap-1">
                                        <Briefcase className="h-3 w-3" /> {cls.task}
                                    </div>
                                    <div className="flex justify-between items-center text-xs">
                                        <span className="text-gray-400">Room {cls.room}</span>
                                        <span className={`px-2 py-0.5 rounded-full ${cls.status === 'Done' ? 'bg-green-50 text-green-600' : 'bg-blue-50 text-blue-600'}`}>
                                            {cls.status}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 3. HOMEWORK & EXAM CREATOR */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Homework Assignment */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <FileText className="h-5 w-5 text-purple-600" /> Assign Homework
                            </h3>
                            <div className="space-y-4">
                                <input type="text" placeholder="Subject / Class" className="w-full text-sm p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all" />
                                <input type="text" placeholder="Assignment Title" className="w-full text-sm p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all" />
                                <div className="flex gap-2">
                                    <input type="text" placeholder="Due Date" className="w-1/2 text-sm p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all" />
                                    <button className="flex-1 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 transition-colors">
                                        Assign
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* AI Exam Creator */}
                        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl shadow-sm border border-indigo-100 p-6 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-3 opacity-10">
                                <Brain className="h-24 w-24 text-indigo-900" />
                            </div>
                            <h3 className="font-bold text-indigo-900 mb-1 flex items-center gap-2 relative z-10">
                                <Brain className="h-5 w-5 text-indigo-600" /> AI Exam Creator
                            </h3>
                            <p className="text-xs text-indigo-600 mb-4 relative z-10">Powered by Gemini AI</p>

                            <div className="space-y-3 relative z-10">
                                <div className="bg-white/60 p-2 rounded-lg border border-indigo-100">
                                    <input type="text" placeholder="Topic (e.g. Thermodynamics)" className="w-full bg-transparent text-sm focus:outline-none text-indigo-900 placeholder-indigo-400" />
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-xs text-indigo-700 font-medium">Questions:</span>
                                    <div className="flex gap-1">
                                        {[5, 10, 20].map(n => (
                                            <button key={n} className="px-2 py-1 text-xs bg-white rounded border border-indigo-100 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors">
                                                {n}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <button className="w-full py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 shadow-sm">
                                    <Brain className="h-4 w-4" /> Generate Paper
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* 4. TEACHING PROGRESS */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                        <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <TrendingUp className="h-5 w-5 text-green-600" /> Syllabus Progress
                        </h3>
                        <div className="space-y-6">
                            {SYLLABUS_PROGRESS.map((item, idx) => (
                                <div key={idx} className="relative">
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="font-medium text-gray-700">{item.class} - {item.subject}</span>
                                        <span className="font-bold text-gray-500">{item.progress}%</span>
                                    </div>
                                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                                        <div className={`h-full ${item.color} rounded-full transition-all duration-1000`} style={{ width: `${item.progress}%` }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN (Salary, Tasks, Events) */}
                <div className="space-y-8">

                    {/* 5. SALARY SECTION */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="p-5 border-b border-gray-50 bg-gray-50/50 flex justify-between items-center">
                            <h3 className="font-bold text-gray-900 flex items-center gap-2">
                                <DollarSign className="h-5 w-5 text-green-600" /> Finance
                            </h3>
                            <span className="text-xs font-medium bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Paid</span>
                        </div>
                        <div className="p-6">
                            <div className="text-center mb-6">
                                <p className="text-sm text-gray-500 mb-1">Total Earned (Oct)</p>
                                <p className="text-4xl font-bold text-gray-900 tracking-tight">₹{SALARY_INFO.total.toLocaleString()}</p>
                            </div>
                            <div className="space-y-3">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">Base Salary</span>
                                    <span className="font-medium text-gray-900">₹{SALARY_INFO.base.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500 flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-blue-500"></div> Incentives</span>
                                    <span className="font-medium text-gray-900">+ ₹{SALARY_INFO.incentives.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500 flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-green-500"></div> Bonuses</span>
                                    <span className="font-medium text-gray-900">+ ₹{SALARY_INFO.bonus.toLocaleString()}</span>
                                </div>
                            </div>

                            {/* Visual Bar */}
                            <div className="flex h-2 w-full rounded-full overflow-hidden mt-6">
                                <div className="h-full bg-gray-800" style={{ width: '85%' }}></div>
                                <div className="h-full bg-blue-500" style={{ width: '10%' }}></div>
                                <div className="h-full bg-green-500" style={{ width: '5%' }}></div>
                            </div>
                        </div>
                    </div>

                    {/* 6. UPCOMING TASKS */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
                        <div className="p-5 border-b border-gray-50">
                            <h3 className="font-bold text-gray-900 flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-blue-600" /> Quick Tasks
                            </h3>
                        </div>
                        <div className="divide-y divide-gray-50">
                            {UPCOMING_TASKS.map((task) => (
                                <div key={task.id} className="p-4 hover:bg-gray-50 transition-colors flex items-center justify-between group">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-1.5 h-1.5 rounded-full ${task.priority === 'High' ? 'bg-red-500' : task.priority === 'Medium' ? 'bg-orange-500' : 'bg-blue-500'}`}></div>
                                        <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">{task.task}</span>
                                    </div>
                                    <span className="text-xs text-gray-400">{task.due}</span>
                                </div>
                            ))}
                        </div>
                        <button className="w-full py-3 text-xs font-bold text-gray-400 hover:text-gray-600 hover:bg-gray-50 transition-colors uppercase tracking-wide">
                            View All Tasks
                        </button>
                    </div>

                    {/* 7. SCHOOL EVENTS */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
                        <div className="p-5 border-b border-gray-50">
                            <h3 className="font-bold text-gray-900 flex items-center gap-2">
                                <Calendar className="h-5 w-5 text-orange-500" /> Upcoming Events
                            </h3>
                        </div>
                        <div className="p-5 space-y-4">
                            {SCHOOL_EVENTS.map((event) => (
                                <div key={event.id} className="flex gap-4 items-start">
                                    <div className="flex flex-col items-center bg-gray-50 px-2.5 py-1.5 rounded-lg border border-gray-100 min-w-[3.5rem]">
                                        <span className="text-xs font-bold text-gray-400 uppercase">{event.date.split(' ')[0]}</span>
                                        <span className="text-lg font-bold text-gray-900">{event.date.split(' ')[1]}</span>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-gray-900">{event.name}</h4>
                                        <p className="text-xs text-gray-500 mt-1">Role: <span className="font-medium text-gray-700">{event.role}</span></p>
                                        <span className={`inline-block mt-2 text-[10px] font-bold px-2 py-0.5 rounded-full ${event.type === 'Sports' ? 'bg-orange-100 text-orange-700' : 'bg-blue-100 text-blue-700'}`}>
                                            {event.type}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            <div className="mt-8 text-center">
                <p className="text-xs text-gray-400 uppercase tracking-widest">ORBIT Digital Ecosystem Demo • Teacher View</p>
            </div>
        </div>
    );
};

export default TeacherDashboard;
