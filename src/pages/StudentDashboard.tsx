import React from 'react';
import {
    BookOpen,
    Clock,
    Calendar,
    User,
    Award,
    CreditCard,
    CheckCircle,
    Activity,
    AlertCircle,
    Layout
} from 'lucide-react';

// --- MOCK DATA ---
const STUDENT_PROFILE = {
    name: "Alex Johnson",
    id: "STU-2025-001",
    class: "Class 10-A",
    rollNo: "12",
    dob: "15 Aug 2009",
    parentName: "Robert Johnson",
    attendance: 94
};

const TODAYS_CLASSES = [
    { id: 1, subject: "Mathematics", time: "08:30 AM", teacher: "Mr. Anderson", status: "Completed" },
    { id: 2, subject: "Physics", time: "10:30 AM", teacher: "Mrs. Sharma", status: "Ongoing" },
    { id: 3, subject: "History", time: "01:00 PM", teacher: "Mr. Brown", status: "Upcoming" },
    { id: 4, subject: "English", time: "02:30 PM", teacher: "Ms. Wilson", status: "Upcoming" },
];

const HOMEWORK_LIST = [
    { id: 1, subject: "Math", title: "Algebra Exercises 4.1", due: "Today", description: "Complete Q1-Q10 from page 42.", urgent: true },
    { id: 2, subject: "English", title: "Hamlet Essay", due: "Tomorrow", description: "Write a 500-word essay on the main theme.", urgent: false },
    { id: 3, subject: "Science", title: "Lab Report", due: "Friday", description: "Submit optics experiment findings.", urgent: false },
];

const EXAM_RESULTS = {
    exam: "Mid-Term Examination",
    percentage: 88.5,
    grade: "A",
    totalMarks: 442,
    maxMarks: 500
};

const FEE_DETAILS = {
    status: "Pending",
    amountDue: 12500,
    dueDate: "31 Oct 2025",
    paidPercentage: 75
};

const SYLLABUS_STATUS = [
    { subject: "Math", progress: 75, color: "bg-blue-500" },
    { subject: "Physics", progress: 60, color: "bg-indigo-500" },
    { subject: "English", progress: 90, color: "bg-green-500" },
    { subject: "History", progress: 45, color: "bg-orange-500" },
];

const RECENT_ACTIVITY = [
    { id: 1, type: "Homework", text: "Submitted Physics Lab Report", time: "2 hours ago" },
    { id: 2, type: "Doubt", text: "AI Doubt Solver: 'Quadratic Formula'", time: "Yesterday" },
    { id: 3, type: "Social", text: "Liked specific post in Art Club", time: "Yesterday" },
];

const UPCOMING_EXAMS = [
    { id: 1, subject: "Mathematics", name: "Unit Test 3", date: "Nov 10", daysLeft: 12 },
    { id: 2, subject: "Physics", name: "Unit Test 3", date: "Nov 12", daysLeft: 14 },
];

const StudentDashboard: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto space-y-8 pb-12 animate-fade-in-up">

            {/* 1. TOP SECTION - STUDENT INFO CARD */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 relative overflow-hidden group">
                {/* Decorative Background */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-blue-50 to-indigo-50 rounded-full -mr-24 -mt-24 transition-transform duration-700 group-hover:scale-110"></div>

                <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8">
                    {/* Profile Photo */}
                    <div className="relative group/photo">
                        <div className="h-32 w-32 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 p-1 shadow-lg transform transition-transform duration-300 group-hover/photo:scale-105">
                            <div className="h-full w-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                                <User className="h-16 w-16 text-gray-300" />
                            </div>
                        </div>
                        <div className="absolute bottom-1 right-2 bg-green-500 border-2 border-white rounded-full p-1.5 shadow-sm" title="Verified Student">
                            <CheckCircle className="h-4 w-4 text-white" />
                        </div>
                    </div>

                    {/* Student Details */}
                    <div className="flex-1 w-full text-center md:text-left">
                        <div className="flex flex-col md:flex-row justify-between items-start">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900 mb-1">{STUDENT_PROFILE.name}</h1>
                                <p className="text-gray-500 font-medium mb-4">{STUDENT_PROFILE.class} • Roll No: {STUDENT_PROFILE.rollNo}</p>

                                <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-sm text-gray-500">
                                    <span className="flex items-center gap-1.5">
                                        <User className="h-4 w-4 text-gray-400" />
                                        Parent: <span className="text-gray-900 font-medium">{STUDENT_PROFILE.parentName}</span>
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <CreditCard className="h-4 w-4 text-gray-400" />
                                        ID: <span className="text-gray-900 font-medium font-mono">{STUDENT_PROFILE.id}</span>
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <Calendar className="h-4 w-4 text-gray-400" />
                                        DOB: <span className="text-gray-900 font-medium">{STUDENT_PROFILE.dob}</span>
                                    </span>
                                </div>
                            </div>

                            {/* Attendance Meter */}
                            <div className="mt-6 md:mt-0 bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-gray-100 shadow-sm w-full md:w-auto min-w-[200px]">
                                <div className="flex justify-between items-end mb-2">
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Attendance</span>
                                    <span className="text-2xl font-bold text-indigo-600">{STUDENT_PROFILE.attendance}%</span>
                                </div>
                                <div className="h-2.5 w-full bg-gray-100 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-1000 ease-out"
                                        style={{ width: `${STUDENT_PROFILE.attendance}%` }}
                                    ></div>
                                </div>
                                <p className="text-xs text-gray-400 mt-2 text-right">Excellent! Keep it up.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. DASHBOARD SECTIONS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* A. HOMEWORK */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col">
                    <div className="p-5 border-b border-gray-50 flex justify-between items-center bg-gray-50/50">
                        <div className="flex items-center gap-2">
                            <BookOpen className="h-5 w-5 text-indigo-600" />
                            <h2 className="font-bold text-gray-900">Homework</h2>
                        </div>
                        <span className="bg-indigo-100 text-indigo-700 text-xs font-bold px-2.5 py-1 rounded-full">{HOMEWORK_LIST.length} Pending</span>
                    </div>
                    <div className="flex-1 divide-y divide-gray-50 overflow-y-auto max-h-[300px]">
                        {HOMEWORK_LIST.map((hw) => (
                            <div key={hw.id} className="p-4 hover:bg-indigo-50/30 transition-colors group cursor-pointer">
                                <div className="flex justify-between items-start mb-1">
                                    <span className="text-xs font-bold text-gray-500 bg-gray-100 px-2 py-0.5 rounded group-hover:bg-white transition-colors">{hw.subject}</span>
                                    {hw.urgent && (
                                        <span className="flex items-center gap-1 text-[10px] font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-full border border-red-100">
                                            <AlertCircle className="h-3 w-3" /> Due Today
                                        </span>
                                    )}
                                </div>
                                <h3 className="text-sm font-bold text-gray-900 mb-1 group-hover:text-indigo-600 transition-colors">{hw.title}</h3>
                                <p className="text-xs text-gray-500 line-clamp-2">{hw.description}</p>
                                <p className="text-xs text-gray-400 mt-2 font-medium">Due: {hw.due}</p>
                            </div>
                        ))}
                    </div>
                    <div className="p-3 border-t border-gray-50 bg-gray-50/50 text-center">
                        <button className="text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-colors uppercase tracking-wide">View All Assignments</button>
                    </div>
                </div>

                {/* B. RESULT */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300">
                    <div className="p-5 border-b border-gray-50 flex items-center gap-2 bg-gray-50/50">
                        <Award className="h-5 w-5 text-yellow-500" />
                        <h2 className="font-bold text-gray-900">Latest Result</h2>
                    </div>
                    <div className="p-6">
                        <div className="text-center mb-6">
                            <p className="text-sm text-gray-500 font-medium mb-1">{EXAM_RESULTS.exam}</p>
                            <div className="inline-block relative">
                                <h3 className="text-5xl font-extrabold text-gray-900 tracking-tight">{EXAM_RESULTS.percentage}<span className="text-2xl text-gray-400">%</span></h3>
                                <div className="absolute -top-2 -right-12 bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full transform rotate-12">
                                    Grade {EXAM_RESULTS.grade}
                                </div>
                            </div>
                            <p className="text-xs text-gray-400 mt-2 font-medium break-words">Total: {EXAM_RESULTS.totalMarks} / {EXAM_RESULTS.maxMarks}</p>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between text-xs font-medium text-gray-500 mb-1">
                                <span>Performance</span>
                                <span>Top 10%</span>
                            </div>
                            <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full bg-yellow-400 rounded-full" style={{ width: `${EXAM_RESULTS.percentage}%` }}></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* C. FEES */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300">
                    <div className="p-5 border-b border-gray-50 flex items-center gap-2 bg-gray-50/50">
                        <CreditCard className="h-5 w-5 text-green-600" />
                        <h2 className="font-bold text-gray-900">Fees Status</h2>
                    </div>
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">Total Due</p>
                                <p className="text-2xl font-bold text-gray-900">₹{FEE_DETAILS.amountDue.toLocaleString()}</p>
                            </div>
                            <div className={`px-3 py-1 rounded-full text-xs font-bold border ${FEE_DETAILS.status === 'Paid' ? 'bg-green-50 text-green-700 border-green-100' : 'bg-red-50 text-red-700 border-red-100'}`}>
                                {FEE_DETAILS.status}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between text-xs mb-1">
                                    <span className="font-medium text-gray-600">Annual Payment Progress</span>
                                    <span className="font-bold text-gray-900">{FEE_DETAILS.paidPercentage}%</span>
                                </div>
                                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                                    <div className={`h-full rounded-full transition-all duration-1000 ${FEE_DETAILS.paidPercentage === 100 ? 'bg-green-500' : 'bg-blue-500'}`} style={{ width: `${FEE_DETAILS.paidPercentage}%` }}></div>
                                </div>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-3 text-xs flex justify-between items-center">
                                <span className="text-gray-500">Next Due Date</span>
                                <span className="font-bold text-gray-900">{FEE_DETAILS.dueDate}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* D. SCHEDULE OF TODAY'S CLASS */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 lg:col-span-1">
                    <div className="p-5 border-b border-gray-50 flex justify-between items-center bg-gray-50/50">
                        <div className="flex items-center gap-2">
                            <Clock className="h-5 w-5 text-blue-500" />
                            <h2 className="font-bold text-gray-900">Today's Schedule</h2>
                        </div>
                        <span className="text-xs font-medium text-gray-500">{new Date().toLocaleDateString('en-US', { weekday: 'long' })}</span>
                    </div>
                    <div className="divide-y divide-gray-50">
                        {TODAYS_CLASSES.map((cls) => (
                            <div key={cls.id} className={`p-4 flex items-center justify-between hover:bg-gray-50 transition-colors ${cls.status === 'Ongoing' ? 'bg-blue-50/50 border-l-4 border-blue-500' : ''}`}>
                                <div>
                                    <div className="flex items-center gap-2 mb-0.5">
                                        <h3 className="text-sm font-bold text-gray-900">{cls.subject}</h3>
                                        {cls.status === 'Ongoing' && (
                                            <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-700 animate-pulse">LIVE</span>
                                        )}
                                    </div>
                                    <p className="text-xs text-gray-500">{cls.teacher}</p>
                                </div>
                                <div className="text-right">
                                    <span className="block text-sm font-bold text-gray-700">{cls.time}</span>
                                    <span className={`text-[10px] font-medium ${cls.status === 'Completed' ? 'text-green-600' :
                                        cls.status === 'Ongoing' ? 'text-blue-600' : 'text-gray-400'
                                        }`}>{cls.status}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* E. SYLLABUS */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300">
                    <div className="p-5 border-b border-gray-50 flex items-center gap-2 bg-gray-50/50">
                        <Layout className="h-5 w-5 text-purple-600" />
                        <h2 className="font-bold text-gray-900">Syllabus Tracker</h2>
                    </div>
                    <div className="p-6 space-y-5">
                        {SYLLABUS_STATUS.map((item, idx) => (
                            <div key={idx}>
                                <div className="flex justify-between items-end mb-1">
                                    <span className="text-xs font-bold text-gray-700">{item.subject}</span>
                                    <span className="text-xs font-medium text-gray-500">{item.progress}% Completed</span>
                                </div>
                                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                                    <div className={`h-full rounded-full transition-all duration-1000 ${item.color}`} style={{ width: `${item.progress}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* F. RECENT ACTIVITY & UPCOMING EXAMS (STACKED in one column) */}
                <div className="space-y-6">

                    {/* Recent Activity */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300">
                        <div className="p-5 border-b border-gray-50 flex items-center gap-2 bg-gray-50/50">
                            <Activity className="h-5 w-5 text-orange-500" />
                            <h2 className="font-bold text-gray-900">Recent Activity</h2>
                        </div>
                        <div className="p-4 space-y-4">
                            {RECENT_ACTIVITY.map((act) => (
                                <div key={act.id} className="flex gap-3 items-start group">
                                    <div className="mt-0.5 h-2 w-2 rounded-full bg-gray-300 group-hover:bg-orange-400 transition-colors"></div>
                                    <div>
                                        <p className="text-xs font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{act.text}</p>
                                        <p className="text-[10px] text-gray-500 mt-0.5">{act.time} • {act.type}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Upcoming Exams */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300">
                        <div className="p-5 border-b border-gray-50 flex items-center gap-2 bg-gray-50/50">
                            <Calendar className="h-5 w-5 text-red-500" />
                            <h2 className="font-bold text-gray-900">Upcoming Exams</h2>
                        </div>
                        <div className="p-4 space-y-3">
                            {UPCOMING_EXAMS.map((exam) => (
                                <div key={exam.id} className="bg-red-50 rounded-lg p-3 border border-red-100 flex items-center justify-between">
                                    <div>
                                        <h4 className="text-sm font-bold text-gray-900">{exam.subject}</h4>
                                        <p className="text-xs text-gray-600">{exam.name}</p>
                                    </div>
                                    <div className="text-right">
                                        <span className="block text-xs font-bold text-red-600">{exam.date}</span>
                                        <span className="text-[10px] font-medium text-red-400">{exam.daysLeft} days left</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>

            <div className="mt-8 text-center">
                <p className="text-xs text-gray-400 uppercase tracking-widest font-medium">ORBIT Digital Ecosystem • Student Portal</p>
            </div>

            <style>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation: fadeInUp 0.6s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default StudentDashboard;
