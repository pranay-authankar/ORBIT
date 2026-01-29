import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal, Shield, Sparkles, User, Award, Home, PlusSquare, Image, FileText, CheckCircle } from 'lucide-react';

const TeacherSocialMedia: React.FC = () => {
    const [activeTab, setActiveTab] = useState('home');
    const [likedPosts, setLikedPosts] = useState<number[]>([]);
    const [showSuccess, setShowSuccess] = useState(false);

    const toggleLike = (id: number) => {
        if (likedPosts.includes(id)) {
            setLikedPosts(likedPosts.filter(postId => postId !== id));
        } else {
            setLikedPosts([...likedPosts, id]);
        }
    };

    const handlePost = () => {
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
    };

    const posts = [
        {
            id: 1,
            author: "School Admin",
            role: "Admin",
            avatarColor: "bg-blue-600",
            icon: Shield,
            time: "1 hour ago",
            image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1000",
            caption: "🔔 Annual Staff Meeting Reminder: All teaching staff are requested to assemble in the main conference room at 2:00 PM today.",
            likes: 45,
            comments: 3,
            isStudent: false
        },
        {
            id: 2,
            author: "Alex Morgan",
            role: "Student • Grade 11-B",
            avatarColor: "bg-green-600",
            icon: User,
            time: "3 hours ago",
            image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=1000",
            caption: "Just finished our group project for history class! Thanks to everyone who helped out. 📚🌍 #History #Teamwork",
            likes: 128,
            comments: 24,
            isStudent: true
        },
        {
            id: 3,
            author: "Science Dept",
            role: "Department",
            avatarColor: "bg-purple-600",
            icon: Award,
            time: "5 hours ago",
            image: "https://images.unsplash.com/photo-1564325724739-bae0bd08762c?auto=format&fit=crop&q=80&w=1000",
            caption: "Congratulations to the Robotics Club for winning first place in the Regional Championship! 🤖🏆",
            likes: 210,
            comments: 15,
            isStudent: false
        }
    ];

    return (
        <div className="max-w-4xl mx-auto pb-8">
            <div className="flex gap-8 items-start">
                {/* Main Content Column */}
                <div className="flex-1 space-y-6">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-2">
                        <h1 className="text-2xl font-bold text-gray-900">
                            {activeTab === 'home' && 'School Feed'}
                            {activeTab === 'create' && 'Create a Post'}
                            {activeTab === 'profile' && 'My Profile'}
                        </h1>
                        <div className="flex items-center gap-2 text-sm text-gray-500 bg-gray-100 px-3 py-1.5 rounded-full">
                            <Sparkles className="h-4 w-4 text-purple-600" />
                            <span>AI Moderation Active</span>
                        </div>
                    </div>

                    {/* VIEW: HOME FEED */}
                    {activeTab === 'home' && (
                        <>
                            <div className="space-y-6">
                                {posts.map((post) => (
                                    <div key={post.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                                        {/* Post Header */}
                                        <div className="p-4 flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className={`h-10 w-10 rounded-full ${post.avatarColor} flex items-center justify-center text-white`}>
                                                    <post.icon className="h-5 w-5" />
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold text-sm text-gray-900">{post.author}</h3>
                                                    <p className="text-xs text-gray-500">{post.role} • {post.time}</p>
                                                </div>
                                            </div>
                                            <button className="text-gray-400 hover:text-gray-600">
                                                <MoreHorizontal className="h-5 w-5" />
                                            </button>
                                        </div>

                                        {/* Post Image */}
                                        <div className="aspect-video bg-gray-100 relative overflow-hidden">
                                            <img
                                                src={post.image}
                                                alt="Post content"
                                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                            />
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="p-4 flex items-center justify-between">
                                            <div className="flex items-center gap-4">
                                                <button
                                                    onClick={() => toggleLike(post.id)}
                                                    className={`flex items-center gap-1.5 transition-colors ${likedPosts.includes(post.id) ? 'text-red-500' : 'text-gray-600 hover:text-red-500'}`}
                                                >
                                                    <Heart className={`h-6 w-6 ${likedPosts.includes(post.id) ? 'fill-current' : ''}`} />
                                                    <span className="text-sm font-medium">{likedPosts.includes(post.id) ? post.likes + 1 : post.likes}</span>
                                                </button>
                                                <button className="flex items-center gap-1.5 text-gray-600 hover:text-blue-500 transition-colors">
                                                    <MessageCircle className="h-6 w-6" />
                                                    <span className="text-sm font-medium">{post.comments}</span>
                                                </button>
                                                <button className="text-gray-600 hover:text-green-500 transition-colors">
                                                    <Share2 className="h-6 w-6" />
                                                </button>
                                            </div>
                                            <button className="text-gray-600 hover:text-yellow-500 transition-colors">
                                                <Bookmark className="h-6 w-6" />
                                            </button>
                                        </div>

                                        {/* Caption & Verification */}
                                        <div className="px-4 pb-4">
                                            <p className="text-sm text-gray-800 leading-relaxed">
                                                <span className="font-semibold mr-2">{post.author}</span>
                                                {post.caption}
                                            </p>

                                            {/* Gemini Verification Label for Student Posts */}
                                            {post.isStudent && (
                                                <div className="mt-3 flex items-center gap-1.5 text-xs text-gray-400 font-medium select-none">
                                                    <Sparkles className="h-3 w-3 text-gray-400" />
                                                    Safe post · Verified by Gemini
                                                </div>
                                            )}

                                            <button className="text-xs text-gray-400 mt-2 hover:text-gray-600">View all {post.comments} comments</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="text-center text-sm text-gray-400 py-4">
                                <p>You've reached the end of the feed 🎉</p>
                            </div>
                        </>
                    )}

                    {/* VIEW: CREATE POST */}
                    {activeTab === 'create' && (
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-6 relative">
                            {showSuccess && (
                                <div className="absolute inset-x-6 top-6 z-10 bg-green-50 text-green-700 px-4 py-3 rounded-lg border border-green-200 flex items-center gap-2 animate-in fade-in slide-in-from-top-4 duration-300">
                                    <CheckCircle className="h-5 w-5" />
                                    <span className="text-sm font-medium">Post submitted for review and will be visible after approval.</span>
                                </div>
                            )}

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                    <textarea
                                        rows={6}
                                        placeholder="Write something to share with students..."
                                        className="w-full rounded-lg border-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 resize-none p-3 text-sm"
                                    ></textarea>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Attachments</label>
                                    <div className="flex gap-4">
                                        <button className="flex flex-col items-center justify-center h-24 w-24 border-2 border-dashed border-gray-200 rounded-lg text-gray-400 hover:border-gray-300 hover:bg-gray-50 transition-colors">
                                            <Image className="h-6 w-6 mb-1" />
                                            <span className="text-xs">Photo</span>
                                        </button>
                                        <button className="flex flex-col items-center justify-center h-24 w-24 border-2 border-dashed border-gray-200 rounded-lg text-gray-400 hover:border-gray-300 hover:bg-gray-50 transition-colors">
                                            <FileText className="h-6 w-6 mb-1" />
                                            <span className="text-xs">File</span>
                                        </button>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 pt-2">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="guidelines"
                                            name="guidelines"
                                            type="checkbox"
                                            defaultChecked
                                            className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                        />
                                    </div>
                                    <div className="text-sm">
                                        <label htmlFor="guidelines" className="font-medium text-gray-700">Content Guidelines</label>
                                        <p className="text-gray-500">This post follows school content guidelines and is appropriate for all students.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="border-t border-gray-100 pt-6">
                                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                                    <span className="text-xs text-gray-400 flex items-center gap-1.5">
                                        <Shield className="h-3.5 w-3.5" />
                                        All posts are reviewed by AI safety systems before appearing.
                                    </span>
                                    <button
                                        onClick={handlePost}
                                        className="w-full sm:w-auto bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors shadow-sm shadow-indigo-200"
                                    >
                                        Post
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* VIEW: PROFILE */}
                    {/* VIEW: PROFILE */}
                    {activeTab === 'profile' && (
                        <div className="space-y-6">
                            {/* Profile Header */}
                            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                                    <div className="h-24 w-24 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white shadow-md">
                                        <span className="text-3xl font-bold">SW</span>
                                    </div>
                                    <div className="flex-1 text-center md:text-left space-y-4">
                                        <div>
                                            <div className="flex items-center justify-center md:justify-start gap-2">
                                                <h2 className="text-xl font-bold text-gray-900">Ms. Sarah Wilson</h2>
                                                <Shield className="h-4 w-4 text-purple-600" />
                                            </div>
                                            <p className="text-gray-500 text-sm">Mathematics Teacher • Lincoln High School</p>
                                        </div>

                                        <div className="flex justify-center md:justify-start gap-8">
                                            <div className="text-center">
                                                <div className="font-bold text-gray-900">42</div>
                                                <div className="text-xs text-gray-500">Posts</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="font-bold text-gray-900">850</div>
                                                <div className="text-xs text-gray-500">Followers</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="font-bold text-gray-900">12</div>
                                                <div className="text-xs text-gray-500">Following</div>
                                            </div>
                                        </div>

                                        <div className="max-w-md">
                                            <p className="text-sm text-gray-600 leading-relaxed">
                                                Passionate about making math fun and accessible for everyone! 📐✏️<br />
                                                Advisor for the Math Olympiad Club.<br />
                                                "Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding."
                                            </p>
                                        </div>

                                        <div className="flex gap-3 justify-center md:justify-start pt-2">
                                            <button className="bg-white border border-gray-300 text-gray-700 px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                                                Edit Profile
                                            </button>
                                            <button className="bg-indigo-50 text-indigo-700 border border-indigo-100 px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-indigo-100 transition-colors">
                                                View My Posts
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Photo Grid */}
                            <div className="grid grid-cols-3 gap-1 md:gap-4">
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                                    <div key={item} className="aspect-square bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 relative group cursor-pointer hover:shadow-md transition-all">
                                        <img
                                            src={`https://images.unsplash.com/photo-${[
                                                '1509062522246-3755977927d7', // School
                                                '1448932223164-3425a1775f96', // Math
                                                '1427504746402-47f8768fb99f', // Nature
                                                '1577896851239-ee1af04a1dd6', // Classroom
                                                '1503676260728-1c00da094a0b', // Education
                                                '1454165804606-c3d57bc86b40', // Studying
                                                '1596495577886-d920f12a7236', // Books
                                                '1518133910546-d4cфаc0b896b', // Art
                                                '1509062522246-3755977927d7'  // Repeat School
                                            ][item - 1]}?auto=format&fit=crop&q=80&w=400`}
                                            alt="Post thumbnail"
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold gap-2">
                                            <Heart className="h-4 w-4 fill-white" />
                                            <span>{Math.floor(Math.random() * 50) + 20}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="text-center py-6 border-t border-gray-100">
                                <div className="flex items-center justify-center gap-2 text-gray-400 mb-1">
                                    <Shield className="h-3 w-3" />
                                    <span className="text-xs font-medium uppercase tracking-wider">Private Network</span>
                                </div>
                                <p className="text-xs text-gray-400 max-w-md mx-auto">
                                    Teacher profiles are visible only within the school network. All posts follow school content guidelines.
                                </p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Right Sidebar Navigation */}
                <div className="w-64 shrink-0 hidden lg:block sticky top-6">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-2 space-y-1">
                        {[
                            { id: 'home', label: 'Home', icon: Home },
                            { id: 'create', label: 'Create Post', icon: PlusSquare },
                            { id: 'profile', label: 'Profile', icon: User },
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${activeTab === tab.id
                                    ? 'bg-indigo-50 text-indigo-700 shadow-sm'
                                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                    }`}
                            >
                                <tab.icon className={`h-5 w-5 ${activeTab === tab.id ? 'fill-current' : ''}`} />
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    <div className="mt-6 p-4 bg-purple-50 rounded-xl border border-purple-100">
                        <div className="flex items-center gap-2 text-purple-800 font-medium mb-1">
                            <Shield className="h-4 w-4" />
                            <span className="text-xs uppercase tracking-wider">Mod Tools</span>
                        </div>
                        <p className="text-xs text-purple-600/80 leading-relaxed">
                            You have teacher privileges. Posts are pre-screened by Gemini but you can manually review flagged content.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeacherSocialMedia;
