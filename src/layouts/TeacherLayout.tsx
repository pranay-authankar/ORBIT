import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, Instagram, Globe, User, Home } from 'lucide-react';
import { TEACHER_INFO } from '../data/teacherData';

const TeacherLayout: React.FC = () => {
    return (
        <div className="flex h-screen bg-gray-50 overflow-hidden">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col z-10 transition-transform duration-300">
                {/* Logo */}
                <div className="h-16 flex items-center px-6 border-b border-gray-200">
                    <div className="flex items-center gap-2">
                        <div className="bg-blue-600 p-1.5 rounded-lg">
                            <Globe className="h-6 w-6 text-white" />
                        </div>
                        <span className="text-xl font-bold text-gray-900">ORBIT</span>
                    </div>
                </div>

                {/* Navigation Items */}
                <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
                    <NavLink
                        to="/teacher"
                        end
                        className={({ isActive }) => `
                            w-full group flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors
                            ${isActive
                                ? 'bg-blue-50 text-blue-700'
                                : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'}
                        `}
                    >
                        <Home className="mr-3 h-5 w-5 text-current" />
                        Home
                    </NavLink>
                    <NavLink
                        to="/teacher/dashboard"
                        className={({ isActive }) => `
                            w-full group flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors
                            ${isActive
                                ? 'bg-blue-50 text-blue-700'
                                : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'}
                        `}
                    >
                        <LayoutDashboard className="mr-3 h-5 w-5 text-current" />
                        Dashboard
                    </NavLink>

                    {/* Placeholder links for now, as requested to match Student UI structure */}
                    <NavLink
                        to="/teacher/groups"
                        className={({ isActive }) => `
                            w-full group flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors
                            ${isActive
                                ? 'bg-blue-50 text-blue-700'
                                : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'}
                        `}
                    >
                        <Users className="mr-3 h-5 w-5 text-current" />
                        School Groups
                    </NavLink>
                    <NavLink
                        to="/teacher/social"
                        className={({ isActive }) => `
                            w-full group flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors
                            ${isActive
                                ? 'bg-blue-50 text-blue-700'
                                : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'}
                        `}
                    >
                        <Instagram className="mr-3 h-5 w-5 text-current" />
                        School Social Media
                    </NavLink>
                </nav>

                {/* User Profile (Bottom) */}
                <div className="border-t border-gray-200 p-4 bg-gray-50">
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center border-2 border-white shadow-sm">
                            <User className="h-6 w-6 text-purple-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">{TEACHER_INFO.name}</p>
                            <p className="text-xs text-gray-500 truncate">{TEACHER_INFO.subject}</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col min-w-0 overflow-y-auto p-4 sm:p-6 lg:p-8">
                <Outlet />
            </main>
        </div>
    );
};

export default TeacherLayout;
