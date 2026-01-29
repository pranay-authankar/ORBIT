import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Bell, Calendar, MapPin, ExternalLink } from 'lucide-react';

// Demo Data for Carousel
const CAROUSEL_ITEMS = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=1200&auto=format&fit=crop',
        title: 'Annual Science Fair 2026',
        caption: 'Innovation at its peak! Students showcasing their brilliant projects.'
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1200&auto=format&fit=crop',
        title: 'Graduation Ceremony',
        caption: 'Celebrating our Class of 2025. We are so proud of you!'
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1511632765486-a019809dd84e?q=80&w=1200&auto=format&fit=crop',
        title: 'Sports Day Finals',
        caption: 'Red House takes the trophy in a thrilling football final.'
    },
    {
        id: 4,
        image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop',
        title: 'Back to School',
        caption: 'Welcome back students! Lets make this academic year count.'
    }
];

// Demo Data for Notices
const NOTICES = [
    {
        id: 1,
        title: 'Mid-Term Exam Schedule Released',
        date: 'Oct 24, 2025',
        snippet: 'The final schedule for the upcoming Mid-Term examinations has been published. Please check the academic portal for details.',
        important: true
    },
    {
        id: 2,
        title: 'Parent-Teacher Meeting',
        date: 'Oct 28, 2025',
        snippet: 'The semester PTM is scheduled for next Saturday. Slots are available for booking from tomorrow morning.',
        important: false
    },
    {
        id: 3,
        title: 'Library Renovation',
        date: 'Oct 30, 2025',
        snippet: 'The main library will be closed for renovation works from Nov 1st to Nov 5th. Digital resources remain accessible.',
        important: false
    },
    {
        id: 4,
        title: 'Winter Uniform Mandatory',
        date: 'Nov 01, 2025',
        snippet: 'All students are requested to switch to the winter uniform starting next Monday. Blazers are compulsory.',
        important: false
    },
    {
        id: 5,
        title: 'Charity Drive Success',
        date: 'Nov 05, 2025',
        snippet: 'Thank you for your generous donations! We collected over 500kg of food for the local shelter.',
        important: false
    },
    {
        id: 6,
        title: 'Inter-School Debate',
        date: 'Nov 10, 2025',
        snippet: 'Our team has qualified for the district finals! Join us in the auditorium to support them.',
        important: false
    }
];

const SchoolHomePage: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto-advance carousel
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % CAROUSEL_ITEMS.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % CAROUSEL_ITEMS.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + CAROUSEL_ITEMS.length) % CAROUSEL_ITEMS.length);
    };

    return (
        <div className="space-y-8 max-w-5xl mx-auto pb-12">

            {/* 1. HERO CAROUSEL SECTION */}
            <section className="relative group rounded-2xl overflow-hidden shadow-lg bg-gray-900 aspect-[2/1] md:aspect-[21/9]">
                {/* Images */}
                <div className="absolute inset-0 transition-transform duration-700 ease-in-out flex" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    {CAROUSEL_ITEMS.map((item) => (
                        <div key={item.id} className="min-w-full h-full relative">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover opacity-80"
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                            {/* Caption Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 md:pb-10 text-white">
                                <h2 className="text-2xl md:text-4xl font-bold mb-2 drop-shadow-md">{item.title}</h2>
                                <p className="text-sm md:text-lg text-gray-200 max-w-2xl drop-shadow-sm line-clamp-2">{item.caption}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Buttons */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
                >
                    <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
                >
                    <ChevronRight className="h-6 w-6" />
                </button>

                {/* Dots Indicators */}
                <div className="absolute bottom-4 right-6 flex gap-2">
                    {CAROUSEL_ITEMS.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`h-2 rounded-full transition-all ${index === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'}`}
                        />
                    ))}
                </div>
            </section>

            {/* 2. RECENT NOTICES SECTION */}
            <section className="grid grid-cols-1 md:grid-cols-4 gap-6">

                {/* School Highlights / Quick Stats (Optional Left Column - keeping it simple for now as Notices takes prominence) */}
                <div className="md:col-span-1 space-y-4">
                    <div className="bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl p-6 text-white shadow-md">
                        <Calendar className="h-8 w-8 mb-4 opacity-80" />
                        <h3 className="text-lg font-bold mb-1">Upcoming Events</h3>
                        <p className="text-indigo-100 text-sm mb-4">Check out what's happening this month.</p>
                        <button className="text-xs bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1">
                            View Calendar <ExternalLink className="h-3 w-3" />
                        </button>
                    </div>

                    <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                        <MapPin className="h-8 w-8 text-orange-500 mb-4" />
                        <h3 className="text-lg font-bold text-gray-900 mb-1">Campus Map</h3>
                        <p className="text-gray-500 text-sm mb-4">Find your way around the new science block.</p>
                        <button className="text-xs text-orange-600 font-medium hover:text-orange-700">Explore Map</button>
                    </div>
                </div>

                {/* Announcements List (Main Area) */}
                <div className="md:col-span-3">
                    <div className="flex items-center justify-between mb-4 px-1">
                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                            <Bell className="h-5 w-5 text-blue-600" />
                            Notice Board
                        </h3>
                        <button className="text-sm text-blue-600 font-medium hover:underline">View All</button>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="max-h-[400px] overflow-y-auto divide-y divide-gray-50 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
                            {NOTICES.map((notice) => (
                                <div key={notice.id} className="p-5 hover:bg-gray-50 transition-colors group cursor-pointer">
                                    <div className="flex justify-between items-start gap-4 mb-2">
                                        <h4 className={`font-semibold text-gray-900 group-hover:text-blue-600 transition-colors ${notice.important ? 'text-red-700 flex items-center gap-2' : ''}`}>
                                            {notice.important && <span className="w-2 h-2 rounded-full bg-red-500 shrink-0 animate-pulse"></span>}
                                            {notice.title}
                                        </h4>
                                        <span className="text-xs font-medium text-gray-400 whitespace-nowrap bg-gray-50 px-2 py-1 rounded">{notice.date}</span>
                                    </div>
                                    <p className="text-sm text-gray-600 leading-relaxed">{notice.snippet}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default SchoolHomePage;
