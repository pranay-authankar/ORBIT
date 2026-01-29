import React, { useState, useEffect } from 'react';
import { Globe, Lock, Mail, ArrowLeft, ChevronRight, AlertCircle, Loader2, GraduationCap, BookOpen, Users, CheckCircle } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';

type UserRole = 'student' | 'teacher' | 'parent';

const LoginPage: React.FC = () => {
    const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.state && location.state.message) {
            setSuccessMessage(location.state.message);
            // Clear state so message doesn't persist on refresh
            window.history.replaceState({}, document.title);
        }
    }, [location]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            await signInWithEmailAndPassword(auth, email, password);

            // Redirect based on selected role
            switch (selectedRole) {
                case 'student':
                    navigate('/student');
                    break;
                case 'teacher':
                    navigate('/teacher');
                    break;
                case 'parent':
                    navigate('/parent'); // Assuming /parent route exists or will exist logic
                    break;
                default:
                    navigate('/app'); // Fallback
            }
        } catch (err) {
            console.error('Login error:', err);
            setError('Failed to sign in. Please check your credentials.');
        } finally {
            setLoading(false);
        }
    };

    const handleRoleSelect = (role: UserRole) => {
        setSelectedRole(role);
        setError(null); // Clear any previous errors when switching
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <Link to="/" className="flex justify-center items-center gap-2 mb-6 group">
                    <div className="bg-blue-600 p-1.5 rounded-lg group-hover:bg-blue-700 transition-colors">
                        <Globe className="h-8 w-8 text-white" />
                    </div>
                    <span className="text-2xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                        ORBIT
                    </span>
                </Link>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    {selectedRole ? `Login as ${selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1)}` : 'Select your role'}
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    {selectedRole ? 'Enter your credentials to continue' : 'Choose your account type to sign in'}
                </p>

                {successMessage && (
                    <div className="mt-4 rounded-md bg-green-50 p-4 border border-green-200">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <CheckCircle className="h-5 w-5 text-green-400" aria-hidden="true" />
                            </div>
                            <div className="ml-3">
                                <h3 className="text-sm font-medium text-green-800">{successMessage}</h3>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow-xl sm:rounded-lg sm:px-10 border border-gray-100">
                    {!selectedRole ? (
                        // Role Selection Step
                        <div className="space-y-4">
                            <button
                                onClick={() => handleRoleSelect('student')}
                                className="w-full flex items-center p-4 border-2 border-gray-100 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all group"
                            >
                                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                                    <GraduationCap className="h-6 w-6 text-blue-600" />
                                </div>
                                <div className="ml-4 text-left">
                                    <h3 className="text-lg font-bold text-gray-900">Student</h3>
                                    <p className="text-sm text-gray-500">Access timetable and homework</p>
                                </div>
                                <ChevronRight className="ml-auto h-5 w-5 text-gray-400 group-hover:text-blue-500" />
                            </button>

                            <button
                                onClick={() => handleRoleSelect('teacher')}
                                className="w-full flex items-center p-4 border-2 border-gray-100 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all group"
                            >
                                <div className="h-12 w-12 bg-200 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                                    <BookOpen className="h-6 w-6 text-purple-600" />
                                </div>
                                <div className="ml-4 text-left">
                                    <h3 className="text-lg font-bold text-gray-900">Teacher</h3>
                                    <p className="text-sm text-gray-500">Manage classes and assignments</p>
                                </div>
                                <ChevronRight className="ml-auto h-5 w-5 text-gray-400 group-hover:text-blue-500" />
                            </button>

                            <button
                                onClick={() => handleRoleSelect('parent')}
                                className="w-full flex items-center p-4 border-2 border-gray-100 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all group"
                            >
                                <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                                    <Users className="h-6 w-6 text-green-600" />
                                </div>
                                <div className="ml-4 text-left">
                                    <h3 className="text-lg font-bold text-gray-900">Parent</h3>
                                    <p className="text-sm text-gray-500">View progress and updates</p>
                                </div>
                                <ChevronRight className="ml-auto h-5 w-5 text-gray-400 group-hover:text-blue-500" />
                            </button>
                        </div>
                    ) : (
                        // Login Form Step
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <button
                                type="button"
                                onClick={() => setSelectedRole(null)}
                                className="flex items-center text-sm text-gray-500 hover:text-gray-700 mb-4 transition-colors"
                            >
                                <ArrowLeft className="h-4 w-4 mr-1" />
                                Change Role
                            </button>

                            {error && (
                                <div className="rounded-md bg-red-50 p-4">
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <AlertCircle className="h-5 w-5 text-red-400" aria-hidden="true" />
                                        </div>
                                        <div className="ml-3">
                                            <h3 className="text-sm font-medium text-red-800">{error}</h3>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email address
                                </label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Mail className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-lg py-2.5 transition-colors"
                                        placeholder="you@school.edu"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Lock className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-lg py-2.5 transition-colors"
                                        placeholder="••••••••"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                    />
                                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                        Remember me
                                    </label>
                                </div>

                                <div className="text-sm">
                                    <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    disabled={loading || !email || !password}
                                    className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all transform hover:scale-[1.01] disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {loading ? (
                                        <Loader2 className="h-5 w-5 animate-spin" />
                                    ) : (
                                        <>
                                            Sign in as {selectedRole ? selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1) : ''}
                                            <ChevronRight className="ml-2 h-4 w-4" />
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    )}

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">
                                    Don't have an account?
                                </span>
                            </div>
                        </div>

                        <div className="mt-6 text-center">
                            <Link
                                to="/register"
                                className="text-blue-600 hover:text-blue-500 font-medium hover:underline"
                            >
                                Register as a new user
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-900 transition-colors text-sm font-medium">
                        <ArrowLeft className="h-4 w-4 mr-1" />
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
