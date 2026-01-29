import React from 'react';
import { Shield, Sparkles, User, Award, Eye } from 'lucide-react';

const ParentSocialMedia: React.FC = () => {
    const posts = [
        {
            id: 1,
            author: "School Administration",
            role: "Admin",
            avatarColor: "bg-blue-600",
            icon: Shield,
            time: "2 hours ago",
            image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=1000",
            caption: "We are thrilled to announce that our school has been awarded the 'Green Campus' certification! 🌿🏆 Thank you to all the students and staff who contributed to our sustainability initiatives.",
            isStudent: false
        },
        {
            id: 2,
            author: "Alex Morgan",
            role: "Student • Grade 11-B",
            avatarColor: "bg-green-600",
            icon: User,
            time: "5 hours ago",
            image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1000",
            caption: "Working on our science fair project! Can't wait to show everyone what we've built. 🧪⚡ #ScienceFair #Innovation",
            isStudent: true
        },
        {
            id: 3,
            author: "Sports Department",
            role: "Department",
            avatarColor: "bg-orange-600",
            icon: Award,
            time: "Yesterday",
            image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=1000",
            caption: "Annual Sports Day preparation is in full swing! Students are practicing hard for the track and field events. 🏃‍♂️🏅",
            isStudent: false
        }
    ];

    return (
        <div className="max-w-xl mx-auto space-y-8 pb-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">School Feed</h1>
                    <p className="text-sm text-gray-500 mt-1">Updates from teachers and students</p>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500 bg-gray-100 px-3 py-1.5 rounded-full border border-gray-200">
                    <Eye className="h-3 w-3" />
                    <span>View Only</span>
                </div>
            </div>

            {/* Posts Feed */}
            <div className="space-y-6">
                {posts.map((post) => (
                    <div key={post.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group hover:border-teal-100 transition-colors">
                        {/* Post Header */}
                        <div className="p-4 flex items-center gap-3">
                            <div className={`h-10 w-10 rounded-full ${post.avatarColor} flex items-center justify-center text-white shadow-sm`}>
                                <post.icon className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-sm text-gray-900">{post.author}</h3>
                                <p className="text-xs text-gray-500">{post.role} • {post.time}</p>
                            </div>
                        </div>

                        {/* Post Image */}
                        <div className="aspect-video bg-gray-50 relative overflow-hidden">
                            <img
                                src={post.image}
                                alt="Post content"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Caption & Verification */}
                        <div className="p-5">
                            <p className="text-sm text-gray-800 leading-relaxed mb-4">
                                <span className="font-semibold mr-2">{post.author}</span>
                                {post.caption}
                            </p>

                            {/* Gemini Verification Label for Student Posts */}
                            {post.isStudent && (
                                <div className="flex items-center gap-1.5 text-xs text-gray-400 font-medium select-none bg-gray-50 px-2 py-1.5 rounded-md w-fit">
                                    <Sparkles className="h-3 w-3 text-teal-500" />
                                    <span>Safe post · Verified by Gemini</span>
                                </div>
                            )}

                            {/* Interaction Restrictions Note */}
                            {!post.isStudent && (
                                <div className="h-4"></div> // Spacer for alignment if needed, or remove
                            )}
                        </div>

                        <div className="px-5 py-3 bg-gray-50 border-t border-gray-100 flex justify-end">
                            <span className="text-[10px] text-gray-400 italic">Comments disabled for this post</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center text-sm text-gray-400 py-6">
                <p>You're all caught up! 🌟</p>
            </div>
        </div>
    );
};

export default ParentSocialMedia;
