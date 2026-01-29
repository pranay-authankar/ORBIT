import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal, Shield, Award, Calendar, Home, PlusSquare, User } from 'lucide-react';

const SchoolSocialMedia: React.FC = () => {
    const [activeTab, setActiveTab] = useState('home');
    const [likedPosts, setLikedPosts] = useState<number[]>([]);

    const toggleLike = (id: number) => {
        if (likedPosts.includes(id)) {
            setLikedPosts(likedPosts.filter(postId => postId !== id));
        } else {
            setLikedPosts([...likedPosts, id]);
        }
    };

    const posts = [
        {
            id: 1,
            author: "School Admin",
            role: "Admin",
            avatarColor: "bg-blue-600",
            icon: Shield,
            time: "2 hours ago",
            image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=1000",
            caption: "🏆 We are proud to announce that our school Football Team has won the Inter-School Championship! Congratulations to all the players and Coach Mike! ⚽🥇 #Champions #SchoolPride #Sports",
            likes: 245,
            comments: 18
        },
        {
            id: 2,
            author: "Science Department",
            role: "Department",
            avatarColor: "bg-purple-600",
            icon: Award,
            time: "5 hours ago",
            image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1000",
            caption: "🧪 The Annual Science Fair is coming up next week! Students are busy preparing their projects. Don't forget to submit your abstracts by Friday! 🔬🧬 #ScienceFair #Innovation",
            likes: 132,
            comments: 45
        },
        {
            id: 3,
            author: "Ms. Sarah Wilson",
            role: "English Teacher",
            avatarColor: "bg-pink-600",
            icon: Calendar,
            time: "Yesterday",
            image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1000",
            caption: "🎭 Drama Club auditions are happening this Friday in the Auditorium. We are looking for actors for 'Romeo and Juliet'. Everyone is welcome! 🎬 #DramaClub #Theater",
            likes: 89,
            comments: 12
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
                            {activeTab === 'create' && 'New Post'}
                            {activeTab === 'profile' && 'My Profile'}
                        </h1>
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

                                        {/* Caption */}
                                        <div className="px-4 pb-4">
                                            <p className="text-sm text-gray-800 leading-relaxed">
                                                <span className="font-semibold mr-2">{post.author}</span>
                                                {post.caption}
                                            </p>
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
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-6">
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Upload Photo</label>
                                    <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 flex flex-col items-center justify-center bg-gray-50 text-gray-400 hover:bg-gray-100 hover:border-gray-300 transition-colors cursor-pointer">
                                        <div className="bg-white p-3 rounded-full shadow-sm mb-2">
                                            <PlusSquare className="h-6 w-6 text-gray-400" />
                                        </div>
                                        <span className="text-sm font-medium">Drag and drop or click to upload</span>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Caption</label>
                                    <textarea
                                        rows={4}
                                        placeholder="Write a caption... (e.g., 'Had a great time at the Science Fair!')"
                                        className="w-full rounded-lg border-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 resize-none p-3 text-sm"
                                    ></textarea>
                                </div>
                            </div>

                            <div className="bg-blue-50 p-4 rounded-lg flex gap-3 text-blue-700 items-start">
                                <Shield className="h-5 w-5 shrink-0 mt-0.5" />
                                <div className="text-sm">
                                    <strong className="block font-medium mb-1">AI Safety Check</strong>
                                    Posts are checked by AI (Gemini) before being shared to ensure they follow school guidelines.
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <button disabled className="bg-gray-100 text-gray-400 px-6 py-2 rounded-lg font-medium cursor-not-allowed">
                                    Post
                                </button>
                            </div>
                        </div>
                    )}

                    {/* VIEW: PROFILE */}
                    {activeTab === 'profile' && (
                        <div className="space-y-6">
                            {/* Profile Header */}
                            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                                    <div className="h-24 w-24 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white shadow-md">
                                        <span className="text-3xl font-bold">JD</span>
                                    </div>
                                    <div className="flex-1 text-center md:text-left space-y-4">
                                        <div>
                                            <h2 className="text-xl font-bold text-gray-900">John Doe</h2>
                                            <p className="text-gray-500 text-sm">Grade 11-A • Science Club President</p>
                                        </div>
                                        <div className="flex justify-center md:justify-start gap-8">
                                            <div className="text-center">
                                                <div className="font-bold text-gray-900">24</div>
                                                <div className="text-xs text-gray-500">Posts</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="font-bold text-gray-900">185</div>
                                                <div className="text-xs text-gray-500">Followers</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="font-bold text-gray-900">142</div>
                                                <div className="text-xs text-gray-500">Following</div>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-600">
                                                📸 Photography enthusiast<br />
                                                ⚛️ Physics is cool<br />
                                                ⚽ School Football Team
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Photo Grid */}
                            <div className="grid grid-cols-3 gap-1 md:gap-4">
                                {[1, 2, 3, 4, 5, 6].map((item) => (
                                    <div key={item} className="aspect-square bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 relative group cursor-pointer">
                                        <img
                                            src={`https://images.unsplash.com/photo-${[
                                                '1509062522246-3755977927d7', // School hallway
                                                '1427504746402-47f8768fb99f', // Nature
                                                '1503676260728-1c00da094a0b', // Education
                                                '1571260899304-42d435829817', // Football
                                                '1454165804606-c3d57bc86b40', // Studying
                                                '1518133910546-d4cфаc0b896b'  // Art
                                            ][item - 1]}?auto=format&fit=crop&q=80&w=400`}
                                            alt="Post thumbnail"
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold gap-2">
                                            <Heart className="h-4 w-4 fill-white" />
                                            <span>{Math.floor(Math.random() * 50) + 10}</span>
                                        </div>
                                    </div>
                                ))}
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

                    <div className="mt-6 p-4 bg-indigo-50 rounded-xl border border-indigo-100">
                        <div className="flex items-center gap-2 text-indigo-800 font-medium mb-1">
                            <Shield className="h-4 w-4" />
                            <span className="text-xs uppercase tracking-wider">Safety First</span>
                        </div>
                        <p className="text-xs text-indigo-600/80 leading-relaxed">
                            All posts in this feed are moderated by AI and school administrators to ensure a safe environment.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SchoolSocialMedia;
