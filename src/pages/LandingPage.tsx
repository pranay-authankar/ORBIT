import React, { useEffect, useState } from 'react';
import {
    Globe,
    Shield,
    Users,
    Lock,
    Heart,
    MessageCircle,
    Sparkles,
    Brain,
    LayoutDashboard,
    ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen flex flex-col font-sans text-gray-900 overflow-x-hidden">

            {/* --- NAVIGATION --- */}
            <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="bg-blue-600 p-2 rounded-xl shadow-lg shadow-blue-600/20">
                            <Globe className="h-6 w-6 text-white" />
                        </div>
                        <span className={`text-xl font-bold tracking-tight transition-colors ${scrolled ? 'text-gray-900' : 'text-gray-900'}`}>
                            ORBIT
                        </span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link to="/login" className="text-gray-600 hover:text-blue-600 font-medium px-4 py-2 transition-colors">
                            Login
                        </Link>
                        <Link to="/register" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-600/40 transform hover:-translate-y-0.5">
                            Get Started
                        </Link>
                    </div>
                </div>
            </nav>

            <main className="flex-grow">

                {/* --- HERO SECTION --- */}
                <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                    {/* Background Elements */}
                    <div className="absolute inset-0 z-0">
                        <div className="absolute top-0 right-0 w-[60%] h-[80%] bg-gradient-to-bl from-blue-50 to-white rounded-bl-full opacity-60"></div>
                        <div className="absolute bottom-0 left-0 w-[40%] h-[60%] bg-gradient-to-tr from-indigo-50 to-white rounded-tr-full opacity-60"></div>
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-sm font-bold tracking-wide uppercase mb-6 animate-fade-in">
                            The Future of Education
                        </span>
                        <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight animate-fade-in-up">
                            Welcome to Your School <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                                Digital Ecosystem
                            </span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-xl text-gray-500 mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                            Safe. Engaging. Unified. <br />
                            Experience a secure platform that connects students, teachers, and parents without the noise.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                            <Link to="/register" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 rounded-full font-bold shadow-xl shadow-blue-600/30 hover:shadow-2xl hover:shadow-blue-600/40 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                                Join Us Today
                                <ArrowRight className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                </section>


                {/* --- PROBLEM STATEMENT --- */}
                <section className="py-24 bg-white relative">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Current Challenges</h2>
                            <p className="text-lg text-gray-500">Why traditional methods and public apps are failing schools.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            {[
                                {
                                    icon: Lock,
                                    color: "text-red-500",
                                    bg: "bg-red-50",
                                    title: "Privacy Risks",
                                    desc: "Teachers forced to share personal phone numbers on WhatsApp groups."
                                },
                                {
                                    icon: MessageCircle,
                                    color: "text-orange-500",
                                    bg: "bg-orange-50",
                                    title: "Unsafe Communication",
                                    desc: "Students exposed to unmoderated chats and bullying on public social media."
                                },
                                {
                                    icon: LayoutDashboard,
                                    color: "text-gray-500",
                                    bg: "bg-gray-50",
                                    title: "Disconnected Tools",
                                    desc: "Fragments of information scattered across emails, apps, and paper notes."
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="flex flex-col items-center text-center p-8 rounded-2xl hover:bg-gray-50 transition-colors duration-300">
                                    <div className={`h-16 w-16 ${item.bg} rounded-2xl flex items-center justify-center mb-6 shadow-sm transform transition-transform hover:scale-110`}>
                                        <item.icon className={`h-8 w-8 ${item.color}`} />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                    <p className="text-gray-500 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>


                {/* --- OUR SOLUTION --- */}
                <section className="py-24 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <span className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-2 block">Our Solution</span>
                            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">A Unified Digital Campus</h2>
                            <p className="text-xl text-gray-500 max-w-2xl mx-auto">Everything a modern school needs, built into one secure platform.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Card 1 */}
                            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 group">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-600 transition-colors duration-300">
                                        <Shield className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors" />
                                    </div>
                                    <ArrowRight className="h-5 w-5 text-gray-300 group-hover:text-blue-600 transition-colors" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Safe School Groups</h3>
                                <p className="text-gray-500 mb-4">
                                    Internal chat system with role-based access. Zero phone number sharing. Complete privacy for teachers and safety for students.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 group">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="p-3 bg-purple-100 rounded-lg group-hover:bg-purple-600 transition-colors duration-300">
                                        <Heart className="h-8 w-8 text-purple-600 group-hover:text-white transition-colors" />
                                    </div>
                                    <ArrowRight className="h-5 w-5 text-gray-300 group-hover:text-purple-600 transition-colors" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Private Social Feed</h3>
                                <p className="text-gray-500 mb-4">
                                    An Instagram-like feed for school events and achievements, strictly moderated and visible only to the school community.
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 group">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="p-3 bg-indigo-100 rounded-lg group-hover:bg-indigo-600 transition-colors duration-300">
                                        <Sparkles className="h-8 w-8 text-indigo-600 group-hover:text-white transition-colors" />
                                    </div>
                                    <ArrowRight className="h-5 w-5 text-gray-300 group-hover:text-indigo-600 transition-colors" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">AI Doubt Solver</h3>
                                <p className="text-gray-500 mb-4">
                                    Gemini-powered AI tutor that helps students with academic questions 24/7 in a safe, educational context.
                                </p>
                            </div>

                            {/* Card 4 */}
                            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 group">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="p-3 bg-green-100 rounded-lg group-hover:bg-green-600 transition-colors duration-300">
                                        <LayoutDashboard className="h-8 w-8 text-green-600 group-hover:text-white transition-colors" />
                                    </div>
                                    <ArrowRight className="h-5 w-5 text-gray-300 group-hover:text-green-600 transition-colors" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">Unified Dashboard</h3>
                                <p className="text-gray-500 mb-4">
                                    Dedicated, beautiful dashboards for Students, Teachers, and Parents to track progress, fees, and schedules.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>


                {/* --- FUTURE VISION --- */}
                <section className="py-24 bg-white overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="lg:w-1/2">
                                <span className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-2 block">Our Vision</span>
                                <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Empowering the Next Generation</h2>
                                <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                                    We see a future where technology bridges the gap between home and school without compromising safety. From AI-assisted personalized learning to inter-school collaborative projects, we are building the infrastructure for tomorrow's education.
                                </p>

                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                                            <Brain className="h-5 w-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">AI-Driven Insights</h4>
                                            <p className="text-sm text-gray-500">Personalized performance analytics for every student.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                                            <Users className="h-5 w-5 text-purple-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Community First</h4>
                                            <p className="text-sm text-gray-500">Building strong, safe digital communities for schools.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:w-1/2 relative">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-100 to-indigo-50 rounded-full opacity-50 blur-3xl z-0"></div>
                                <div className="relative z-10 grid grid-cols-2 gap-4">
                                    <div className="bg-white p-6 rounded-2xl shadow-xl transform translate-y-8">
                                        <div className="text-4xl font-extrabold text-blue-600 mb-2">100%</div>
                                        <div className="text-sm font-semibold text-gray-600">Secure Data Privacy</div>
                                    </div>
                                    <div className="bg-white p-6 rounded-2xl shadow-xl">
                                        <div className="text-4xl font-extrabold text-indigo-600 mb-2">24/7</div>
                                        <div className="text-sm font-semibold text-gray-600">AI Learning Support</div>
                                    </div>
                                    <div className="bg-white p-6 rounded-2xl shadow-xl transform translate-y-8">
                                        <div className="text-4xl font-extrabold text-purple-600 mb-2">3+</div>
                                        <div className="text-sm font-semibold text-gray-600">Roles Integrated</div>
                                    </div>
                                    <div className="bg-white p-6 rounded-2xl shadow-xl">
                                        <div className="text-4xl font-extrabold text-green-600 mb-2">Zero</div>
                                        <div className="text-sm font-semibold text-gray-600">External Ads</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* --- CALL TO ACTION --- */}
                <section className="py-24 bg-blue-900 relative overflow-hidden">
                    <div className="absolute inset-0">
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-800/50 transform skew-x-12"></div>
                    </div>
                    <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                        <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your School?</h2>
                        <p className="text-blue-100 text-xl mb-10">
                            Join thousands of students, teachers, and parents in the safest digital ecosystem designed for education.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link to="/register" className="bg-white text-blue-900 border-2 border-transparent hover:border-blue-200 text-lg px-8 py-4 rounded-full font-bold shadow-xl transition-all transform hover:-translate-y-1">
                                Create an Account
                            </Link>
                            <Link to="/login" className="bg-transparent border-2 border-blue-400 text-white hover:bg-blue-800 text-lg px-8 py-4 rounded-full font-bold transition-all">
                                Login Existing User
                            </Link>
                        </div>
                    </div>
                </section>

            </main>

            {/* --- FOOTER --- */}
            <footer className="bg-gray-50 border-t border-gray-200 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                        <Globe className="h-6 w-6 text-gray-400" />
                        <span className="text-lg font-bold text-gray-700">ORBIT</span>
                    </div>
                    <div className="text-sm text-gray-500">
                        &copy; {new Date().getFullYear()} ORBIT Digital Ecosystem. All rights reserved.
                    </div>
                    <div className="flex gap-6">
                        <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">Privacy</a>
                        <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">Terms</a>
                        <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">Support</a>
                    </div>
                </div>
            </footer>

            {/* Custom Animation Styles Inline */}
            < style > {`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translate3d(0, 40px, 0);
                    }
                    to {
                        opacity: 1;
                        transform: translate3d(0, 0, 0);
                    }
                }
                .animate-fade-in-up {
                    animation: fadeInUp 0.8s ease-out forwards;
                }
                .animate-fade-in {
                    animation: fadeInUp 0.8s ease-out forwards;
                    opacity: 0; 
                }
            `}</style >
        </div >
    );
};

export default LandingPage;
