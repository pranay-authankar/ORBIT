import React from 'react';
import {
    Users,
    BookOpen,
    Clock,
    Activity,
    AlertCircle,
    CheckCircle,
    DollarSign,
    Shield,
    Award,
    Calendar,
    Layout,
    Sparkles
} from 'lucide-react';

// --- MOCK DATA ---
const PARENT_PROFILE = {
    parentName: "Robert Johnson",
    childName: "Alex Johnson",
    childClass: "Class 10-A",
    childRoll: "12",
    childId: "STU-2025-001",
    attendance: 94
};

const CHILD_HOMEWORK = [
    { id: 1, subject: "Math", task: "Algebra Exercises 4.1", due: "Today", status: "Pending", urgent: true },
    { id: 2, subject: "English", task: "Hamlet Essay Draft", due: "Tomorrow", status: "Pending", urgent: false },
    { id: 3, subject: "Science", task: "Physics Lab Report", due: "Friday", status: "In Progress", urgent: false },
];

const LATEST_RESULT = {
    exam: "Mid-Term Exam",
    score: "88.5%",
    grade: "A",
    rank: "Top 10%",
    totalMarks: 442,
    maxMarks: 500
};

const FEE_INFO = {
    status: "Pending",
    amount: 12500,
    nextDue: "31 Oct 2025",
    paidPercent: 75
};

const CHILD_SCHEDULE = [
    { id: 1, subject: "Math", time: "08:30 AM", teacher: "Mr. Anderson", status: "Completed" },
    { id: 2, subject: "Physics", time: "10:30 AM", teacher: "Mrs. Sharma", status: "Ongoing" },
    { id: 3, subject: "History", time: "01:00 PM", teacher: "Mr. Brown", status: "Upcoming" },
];

const SYLLABUS_PROGRESS = [
    { subject: "Mathematics", progress: 75, color: "bg-blue-500" },
    { subject: "Physics", progress: 60, color: "bg-indigo-500" },
    { subject: "English", progress: 90, color: "bg-green-500" },
];

const RECENT_ACTIVITY = [
    { id: 1, text: "Submitted Physics Lab Report", time: "2 hours ago", icon: CheckCircle, color: "text-green-500" },
    { id: 2, text: "Asked doubt in Math: 'Quadratic Equations'", time: "Yesterday", icon: AlertCircle, color: "text-orange-500" },
    { id: 3, text: "Attendance marked absent", time: "24 Oct", icon: Clock, color: "text-red-500" },
];

const UPCOMING_EXAMS = [
    { id: 1, subject: "Math", name: "Unit Test 3", date: "Nov 10", days: 12 },
    { id: 2, subject: "Physics", name: "Unit Test 3", date: "Nov 12", days: 14 },
];

// --- END MOCK DATA ---


const ParentDashboard: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto space-y-8 pb-12 animate-fade-in-up">

            {/* 1. PARENT & CHILD PROFILE CARD */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-80 h-80 bg-green-50 rounded-full -mr-32 -mt-32 z-0 opacity-60 transition-transform duration-700 group-hover:scale-110"></div>
                <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8">
                    {/* Child Profile Photo */}
                    <div className="relative group/photo">
                        <div className="h-28 w-28 rounded-2xl bg-gradient-to-br from-green-400 to-teal-500 p-1 shadow-lg shrink-0 transform rotate-2 group-hover/photo:rotate-0 transition-all duration-300">
                            <div className="h-full w-full rounded-xl bg-white flex items-center justify-center overflow-hidden">
                                <Users className="h-12 w-12 text-gray-300" />
                            </div>
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-white px-2 py-1 rounded-full shadow-sm border border-green-100 flex items-center gap-1">
                            <Shield className="h-3 w-3 text-green-600" />
                            <span className="text-[10px] font-bold text-green-700 uppercase tracking-wide">Verified</span>
                        </div>
                    </div>

                    {/* Info */}
                    <div className="flex-1 w-full text-center md:text-left">
                        <div className="flex flex-col md:flex-row justify-between items-start">
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900">{PARENT_PROFILE.parentName}</h1>
                                <p className="text-gray-500 text-sm mb-4">Parent of <span className="font-bold text-gray-900 text-lg ml-1">{PARENT_PROFILE.childName}</span></p>

                                <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-2">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                        {PARENT_PROFILE.childClass}
                                    </span>
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                        Roll: {PARENT_PROFILE.childRoll}
                                    </span>
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 font-mono">
                                        {PARENT_PROFILE.childId}
                                    </span>
                                </div>
                            </div>

                            <div className="mt-6 md:mt-0 w-full md:w-auto bg-white/60 p-4 rounded-xl border border-gray-100 backdrop-blur-sm">
                                <div className="flex justify-between items-end mb-2 gap-8">
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Attendance</p>
                                    <p className="text-2xl font-extrabold text-green-600">{PARENT_PROFILE.attendance}%</p>
                                </div>
                                <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                                    <div className="h-full bg-green-500 rounded-full" style={{ width: `${PARENT_PROFILE.attendance}%` }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* DASHBOARD GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* COLUMN 1: Academic Overview */}
                <div className="lg:col-span-2 space-y-6">

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Result Card */}
                        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all group">
                            <div className="flex justify-between items-start mb-2">
                                <div className="p-2 bg-yellow-50 rounded-lg group-hover:bg-yellow-100 transition-colors">
                                    <Award className="h-6 w-6 text-yellow-600" />
                                </div>
                                <span className="text-xs font-bold bg-green-100 text-green-700 px-2 py-1 rounded-full">{LATEST_RESULT.grade} Grade</span>
                            </div>
                            <h3 className="text-gray-500 text-sm font-medium">Latest Score ({LATEST_RESULT.exam})</h3>
                            <div className="flex items-end gap-2 mt-1">
                                <p className="text-2xl font-bold text-gray-900">{LATEST_RESULT.score}</p>
                                <p className="text-xs text-gray-400 mb-1">{LATEST_RESULT.rank}</p>
                            </div>
                        </div>

                        {/* Fee Card */}
                        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all group">
                            <div className="flex justify-between items-start mb-2">
                                <div className="p-2 bg-red-50 rounded-lg group-hover:bg-red-100 transition-colors">
                                    <DollarSign className="h-6 w-6 text-red-600" />
                                </div>
                                <span className={`text-xs font-bold px-2 py-1 rounded-full ${FEE_INFO.status === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{FEE_INFO.status}</span>
                            </div>
                            <h3 className="text-gray-500 text-sm font-medium">Fees Due</h3>
                            <div className="mt-1">
                                <p className="text-2xl font-bold text-gray-900">₹{FEE_INFO.amount.toLocaleString()}</p>
                                <div className="w-full bg-gray-100 h-1.5 rounded-full mt-2 overflow-hidden">
                                    <div className="h-full bg-green-500 rounded-full" style={{ width: `${FEE_INFO.paidPercent}%` }}></div>
                                </div>
                                <p className="text-[10px] text-gray-400 mt-1 text-right">Due by {FEE_INFO.nextDue}</p>
                            </div>
                        </div>
                    </div>

                    {/* Homework Monitor */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300">
                        <div className="px-6 py-4 border-b border-gray-50 bg-gray-50/50 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <BookOpen className="h-5 w-5 text-blue-600" />
                                <h3 className="font-bold text-gray-900">Homework Monitor</h3>
                            </div>
                            <span className="text-xs font-medium text-gray-500">3 Pending</span>
                        </div>
                        <div className="divide-y divide-gray-50">
                            {CHILD_HOMEWORK.length > 0 ? (
                                CHILD_HOMEWORK.map((hw) => (
                                    <div key={hw.id} className="p-4 hover:bg-blue-50/20 transition-colors flex justify-between items-center group">
                                        <div className="flex items-start gap-3">
                                            <div className="mt-1">
                                                <div className={`h-2 w-2 rounded-full ${hw.urgent ? 'bg-red-500 animate-pulse' : 'bg-gray-300'}`}></div>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-800 text-sm group-hover:text-blue-600 transition-colors">{hw.task}</h4>
                                                <p className="text-xs text-gray-500">{hw.subject} • Due: <span className="font-medium">{hw.due}</span></p>
                                            </div>
                                        </div>
                                        <span className={`text-xs px-2 py-1 rounded border font-medium ${hw.status === 'Done' ? 'bg-green-50 border-green-100 text-green-700' :
                                            'bg-gray-50 border-gray-100 text-gray-600'
                                            }`}>
                                            {hw.status}
                                        </span>
                                    </div>
                                ))
                            ) : (
                                <div className="p-6 text-center text-gray-500 text-sm">No pending homework.</div>
                            )}
                        </div>
                    </div>

                    {/* Today's Schedule */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300">
                        <div className="px-6 py-4 border-b border-gray-50 bg-gray-50/50 flex items-center gap-2">
                            <Clock className="h-5 w-5 text-indigo-600" />
                            <h3 className="font-bold text-gray-900">Child's Schedule Today</h3>
                        </div>
                        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                            {CHILD_SCHEDULE.map((cls) => (
                                <div key={cls.id} className={`p-3 rounded-lg border ${cls.status === 'Ongoing' ? 'bg-indigo-50 border-indigo-200' : 'bg-white border-gray-100'}`}>
                                    <p className="text-xs text-gray-500 mb-1">{cls.time}</p>
                                    <p className="font-bold text-gray-800 text-sm">{cls.subject}</p>
                                    <div className="flex justify-between items-center mt-2">
                                        <p className="text-[10px] text-gray-400">{cls.teacher}</p>
                                        {cls.status === 'Ongoing' && <span className="text-[10px] font-bold text-indigo-600 flex items-center gap-1"><span className="w-1.5 h-1.5 bg-indigo-600 rounded-full animate-pulse"></span> Live</span>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* COLUMN 2: Activity & Insights */}
                <div className="space-y-6">

                    {/* GEMINI AI SUMMARY */}
                    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl shadow-sm border border-indigo-100 p-6 relative overflow-hidden transition-all hover:shadow-md">
                        <div className="absolute top-0 right-0 p-3 opacity-10">
                            <Sparkles className="h-24 w-24 text-indigo-600" />
                        </div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-3">
                                <div className="bg-white p-1.5 rounded-lg shadow-sm border border-indigo-100">
                                    <Sparkles className="h-4 w-4 text-indigo-600" />
                                </div>
                                <h3 className="font-bold text-indigo-900 text-sm flex items-center gap-2">
                                    Gemini Performance Analysis
                                    <span className="bg-white/60 px-1.5 py-0.5 rounded text-[10px] font-bold text-indigo-500 border border-indigo-100/50">BETA</span>
                                </h3>
                            </div>

                            <p className="text-indigo-900/80 text-sm leading-relaxed mb-4">
                                <span className="font-bold">{PARENT_PROFILE.childName}</span> is showing excellent progress in <span className="font-bold text-green-600">Science</span>. However, consistency in <span className="font-bold text-orange-500">History</span> homework needs attention. Overall engagement is up by 15% this week!
                            </p>

                            <button className="w-full bg-white text-indigo-600 text-xs font-bold py-2.5 rounded-lg border border-indigo-100 hover:bg-indigo-50 transition-colors shadow-sm flex items-center justify-center gap-2">
                                <Sparkles className="h-3 w-3" />
                                Ask Gemini for Detailed Insight
                            </button>
                        </div>
                    </div>

                    {/* Syllabus Progress */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300">
                        <div className="px-6 py-4 border-b border-gray-50 bg-gray-50/50 flex items-center gap-2">
                            <Layout className="h-5 w-5 text-purple-600" />
                            <h3 className="font-bold text-gray-900">Syllabus Tracker</h3>
                        </div>
                        <div className="p-6 space-y-4">
                            {SYLLABUS_PROGRESS.map((item, idx) => (
                                <div key={idx}>
                                    <div className="flex justify-between text-xs mb-1">
                                        <span className="font-medium text-gray-600">{item.subject}</span>
                                        <span className="font-bold text-gray-500">{item.progress}%</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                                        <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.progress}%` }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Recent Activity */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300">
                        <div className="px-6 py-4 border-b border-gray-50 bg-gray-50/50 flex items-center gap-2">
                            <Activity className="h-5 w-5 text-teal-600" />
                            <h3 className="font-bold text-gray-900">Recent Activity</h3>
                        </div>
                        <div className="p-6 relative">
                            <div className="absolute left-9 top-6 bottom-6 w-0.5 bg-gray-100"></div>
                            <div className="space-y-6 relative z-10">
                                {RECENT_ACTIVITY.map((act) => (
                                    <div key={act.id} className="flex gap-4 group">
                                        <div className={`h-8 w-8 rounded-full bg-white border border-gray-200 flex items-center justify-center shrink-0 shadow-sm ${act.color} group-hover:scale-110 transition-transform`}>
                                            <act.icon className="h-4 w-4" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-800 leading-snug group-hover:text-teal-700 transition-colors">{act.text}</p>
                                            <p className="text-xs text-gray-400 mt-1">{act.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Upcoming Exams */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300">
                        <div className="px-6 py-4 border-b border-gray-50 bg-gray-50/50 flex items-center gap-2">
                            <Calendar className="h-5 w-5 text-red-500" />
                            <h3 className="font-bold text-gray-900">Exam Alerts</h3>
                        </div>
                        <div className="p-4 space-y-3">
                            {UPCOMING_EXAMS.map((exam) => (
                                <div key={exam.id} className="flex items-center gap-3 bg-red-50/60 p-3 rounded-lg border border-red-100">
                                    <div className="text-center bg-white px-2 py-1.5 rounded shadow-sm border border-red-100 min-w-[3.5rem]">
                                        <span className="block text-[10px] font-bold text-red-400 uppercase tracking-widest">{exam.date.split(' ')[0]}</span>
                                        <span className="block text-xl font-bold text-red-600 leading-none mt-0.5">{exam.date.split(' ')[1]}</span>
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-bold text-gray-800 text-sm">{exam.subject}</p>
                                        <p className="text-xs text-red-500 font-medium">{exam.name} • {exam.days} days left</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>

            <div className="mt-8 text-center">
                <p className="text-xs text-gray-400 uppercase tracking-widest font-medium">ORBIT Digital Ecosystem • Parent Portal</p>
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

export default ParentDashboard;
