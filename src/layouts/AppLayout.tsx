import React, { useState } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import {
    LayoutDashboard,
    Bell,
    BookOpen,
    Settings,
    LogOut,
    Menu,
    X,
    Globe,
    User
} from 'lucide-react';

const AppLayout: React.FC = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const navigate = useNavigate();

    const navigation = [
        { name: 'Dashboard', href: '/app', icon: LayoutDashboard, exact: true },
        { name: 'Announcements', href: '/app/announcements', icon: Bell, exact: false },
        { name: 'Homework', href: '/app/homework', icon: BookOpen, exact: false },
        { name: 'Settings', href: '/app/settings', icon: Settings, exact: false },
    ];

    const handleLogout = () => {
        console.log('Logging out...');
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Mobile Sidebar Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75 md:hidden transition-opacity"
                    onClick={() => setSidebarOpen(false)}
                ></div>
            )}

            {/* Sidebar */}
            <div className={`
                fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out
                ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
                md:translate-x-0 md:static md:flex-shrink-0
            `}>
                <div className="flex flex-col h-full">
                    {/* Sidebar Header */}
                    <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200 bg-white">
                        <div className="flex items-center gap-2">
                            <div className="bg-blue-600 p-1.5 rounded-lg">
                                <Globe className="h-6 w-6 text-white" />
                            </div>
                            <span className="text-xl font-bold text-gray-900">ORBIT</span>
                        </div>
                        <button
                            className="md:hidden text-gray-500 hover:text-gray-700 focus:outline-none"
                            onClick={() => setSidebarOpen(false)}
                        >
                            <X className="h-6 w-6" />
                        </button>
                    </div>

                    {/* Navigation Items */}
                    <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
                        {navigation.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.href}
                                end={item.exact}
                                className={({ isActive }) => `
                                    group flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200
                                    ${isActive
                                        ? 'bg-blue-50 text-blue-700'
                                        : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'}
                                `}
                                onClick={() => setSidebarOpen(false)}
                            >
                                <item.icon className={`
                                    mr-3 h-5 w-5 flex-shrink-0 transition-colors
                                    ${location.pathname === item.href ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-500'}
                                `} />
                                {item.name}
                            </NavLink>
                        ))}
                    </div>

                    {/* User Profile / Logout (Bottom Sidebar) */}
                    <div className="border-t border-gray-200 p-4 bg-gray-50">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center border-2 border-white shadow-sm">
                                <User className="h-6 w-6 text-blue-600" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate">
                                    Demo User
                                </p>
                                <p className="text-xs text-gray-500 truncate">
                                    Student Account
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-red-600 bg-white hover:bg-red-50 border-gray-200 transition-colors"
                        >
                            <LogOut className="mr-2 h-4 w-4" />
                            Sign Out
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                {/* Topbar */}
                <header className="bg-white border-b border-gray-200 shadow-sm z-10">
                    <div className="px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                        <button
                            className="md:hidden px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                            onClick={() => setSidebarOpen(true)}
                        >
                            <Menu className="h-6 w-6" />
                        </button>

                        <div className="flex-1 flex justify-between items-center ml-4 md:ml-0">
                            <h1 className="text-xl font-semibold text-gray-800 hidden sm:block">
                                Dashboard
                            </h1>
                            <div className="flex items-center space-x-4 ml-auto">
                                <button className="p-2 text-gray-400 hover:text-gray-500 relative">
                                    <Bell className="h-6 w-6" />
                                    <span className="absolute top-1.5 right-1.5 block h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white"></span>
                                </button>
                                <div className="h-8 w-px bg-gray-200 mx-2"></div>
                                <div className="flex items-center gap-2">
                                    <span className="hidden md:inline-block text-sm font-medium text-gray-700">
                                        Academic Year 2025-26
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 overflow-y-auto bg-gray-50 p-4 sm:p-6 lg:p-8">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AppLayout;
