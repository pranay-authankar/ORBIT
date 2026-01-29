import React, { useState, useEffect, useRef } from 'react';
import {
    Search,
    MoreVertical,
    Paperclip,
    Send,
    CheckCheck,
    Phone,
    Video,
    ArrowLeft,
    Smile,
    Image as ImageIcon,
    MoreHorizontal,
    Clock
} from 'lucide-react';

// --- MOCK DATA ---
const GROUPS = [
    {
        id: 0,
        name: "Class 10-A",
        avatar: "10A",
        color: "bg-blue-100 text-blue-700",
        lastMessage: "Homework submission reminder: Math Ex 4.1 due tomorrow!",
        time: "10:30 AM",
        unread: 3,
        type: 'class',
        online: "32 participants"
    },
    {
        id: 1,
        name: "Mathematics Doubt Corner",
        avatar: "MA",
        color: "bg-green-100 text-green-700",
        lastMessage: "Mr. Anderson: Yes, use the formula on page 42.",
        time: "Yesterday",
        unread: 0,
        type: 'subject',
        online: "Mr. Anderson, You, +15 others"
    },
    {
        id: 2,
        name: "Science Club",
        avatar: "SC",
        color: "bg-purple-100 text-purple-700",
        lastMessage: "Meeting tomorrow at 2 PM in the Lab.",
        time: "Yesterday",
        unread: 5,
        type: 'club',
        online: "12 online"
    },
    {
        id: 3,
        name: "School Announcements",
        avatar: "📢",
        color: "bg-orange-100 text-orange-700",
        lastMessage: " Annual Sports Day registration is now OPEN!",
        time: "Tue",
        unread: 1,
        type: 'announcement',
        online: "Admin only"
    },
];

const INITIAL_MESSAGES = [
    { id: 1, sender: "Mr. Anderson (Teacher)", text: "Good morning class! ☀️ Just a reminder that the Algebra assignment is due tomorrow.", time: "09:00 AM", isMe: false, type: 'text' },
    { id: 2, sender: "You", text: "Sir, for Q5, do we need to draw the graph?", time: "09:05 AM", isMe: true, type: 'text', status: 'read' },
    { id: 3, sender: "Mr. Anderson (Teacher)", text: "Yes, sketch it roughly. No need for graph paper.", time: "09:10 AM", isMe: false, type: 'text' },
    { id: 4, sender: "Sarah Lee", text: "Thanks, I was confused about that too!", time: "09:12 AM", isMe: false, type: 'text' },
    { id: 5, sender: "You", text: "Got it. Submitting it by evening. 👍", time: "09:15 AM", isMe: true, type: 'text', status: 'delivered' },
];

const SchoolGroups: React.FC = () => {
    const [selectedGroupId, setSelectedGroupId] = useState<number>(0);
    const [mobileChatOpen, setMobileChatOpen] = useState(false);
    const [messageInput, setMessageInput] = useState("");
    const [messages, setMessages] = useState(INITIAL_MESSAGES);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const activeGroup = GROUPS.find(g => g.id === selectedGroupId) || GROUPS[0];

    // Scroll to bottom on new message
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSendMessage = (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        if (!messageInput.trim()) return;

        const newMessage = {
            id: messages.length + 1,
            sender: "You",
            text: messageInput,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            isMe: true,
            type: 'text',
            status: 'sent'
        };

        setMessages([...messages, newMessage]);
        setMessageInput("");
    };

    const handleGroupClick = (id: number) => {
        setSelectedGroupId(id);
        setMobileChatOpen(true);
    };

    return (
        <div className="h-[calc(100vh-2rem)] md:h-[calc(100vh-6rem)] bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden flex animate-fade-in-up">

            {/* LEFT PANEL: GROUPS LIST */}
            <div className={`w-full md:w-96 border-r border-gray-200 flex flex-col bg-white ${mobileChatOpen ? 'hidden md:flex' : 'flex'}`}>
                {/* Header */}
                <div className="p-4 border-b border-gray-200 bg-gray-50/50 flex justify-between items-center sticky top-0 z-10 backdrop-blur-sm">
                    <h2 className="text-xl font-bold text-gray-800">Messages</h2>
                    <div className="flex gap-2">
                        <button className="p-2 text-gray-600 hover:bg-gray-200 rounded-full transition-colors">
                            <MoreHorizontal className="h-5 w-5" />
                        </button>
                    </div>
                </div>

                {/* Search */}
                <div className="p-4 pb-2">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search chats..."
                            className="w-full pl-10 pr-4 py-2.5 bg-gray-100 border-transparent focus:bg-white focus:border-blue-500 focus:ring-0 rounded-xl text-sm transition-all"
                        />
                        <Search className="h-4 w-4 text-gray-400 absolute left-3.5 top-3" />
                    </div>
                </div>

                {/* List */}
                <div className="flex-1 overflow-y-auto p-2 space-y-1">
                    {GROUPS.map((group) => (
                        <div
                            key={group.id}
                            onClick={() => handleGroupClick(group.id)}
                            className={`p-3 rounded-xl cursor-pointer transition-all duration-200 group relative ${selectedGroupId === group.id ? 'bg-blue-50' : 'hover:bg-gray-50'}`}
                        >
                            <div className="flex gap-4">
                                <div className={`h-12 w-12 rounded-full flex items-center justify-center font-bold text-lg shrink-0 ${group.color}`}>
                                    {group.avatar}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-baseline mb-1">
                                        <h3 className={`font-bold text-sm truncate ${selectedGroupId === group.id ? 'text-blue-900' : 'text-gray-900'}`}>{group.name}</h3>
                                        <span className={`text-[10px] ${group.unread > 0 ? 'text-green-600 font-bold' : 'text-gray-400'}`}>{group.time}</span>
                                    </div>
                                    <p className={`text-xs truncate ${group.unread > 0 ? 'text-gray-900 font-bold' : 'text-gray-500'}`}>
                                        {group.lastMessage}
                                    </p>
                                </div>
                            </div>
                            {group.unread > 0 && (
                                <div className="absolute right-3 bottom-3 bg-green-500 text-white text-[10px] font-bold h-5 min-w-[20px] px-1.5 flex items-center justify-center rounded-full shadow-sm ring-2 ring-white">
                                    {group.unread}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* RIGHT PANEL: CHAT AREA */}
            <div className={`flex-1 flex flex-col bg-[#e5ddd5] relative ${!mobileChatOpen ? 'hidden md:flex' : 'flex'}`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: 'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")' }}></div>

                {/* Chat Header */}
                <div className="h-16 bg-white/95 backdrop-blur-sm border-b border-gray-200 flex items-center justify-between px-4 sticky top-0 z-20 shadow-sm">
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setMobileChatOpen(false)}
                            className="md:hidden p-2 -ml-2 text-gray-600 hover:bg-gray-100 rounded-full"
                        >
                            <ArrowLeft className="h-5 w-5" />
                        </button>
                        <div className={`h-10 w-10 rounded-full flex items-center justify-center font-bold text-sm ${activeGroup.color}`}>
                            {activeGroup.avatar}
                        </div>
                        <div className="cursor-pointer">
                            <h3 className="font-bold text-gray-900 leading-tight">{activeGroup.name}</h3>
                            <p className="text-xs text-blue-600 font-medium truncate max-w-[150px] md:max-w-none">{activeGroup.online}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-1">
                        <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors hidden sm:block">
                            <Video className="h-5 w-5" />
                        </button>
                        <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors hidden sm:block">
                            <Phone className="h-5 w-5" />
                        </button>
                        <button className="p-2 text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-full transition-colors">
                            <MoreVertical className="h-5 w-5" />
                        </button>
                    </div>
                </div>

                {/* Messages List */}
                <div className="flex-1 overflow-y-auto p-4 space-y-2 relative z-10 custom-scrollbar-y">
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-2 text-xs text-center text-yellow-800 mb-4 shadow-sm mx-auto max-w-sm">
                        🔒 Messages are end-to-end encrypted. No one outside of this chat, not even ORBIT, can read or listen to them.
                    </div>

                    <div className="flex justify-center my-6">
                        <span className="bg-white/80 backdrop-blur border border-gray-200 text-gray-500 text-[10px] font-bold px-3 py-1 rounded-full shadow-sm">Today</span>
                    </div>

                    {messages.map((msg) => (
                        <div key={msg.id} className={`flex w-full ${msg.isMe ? 'justify-end' : 'justify-start'} group mb-1`}>
                            <div className={`max-w-[85%] md:max-w-[65%] rounded-2xl px-4 py-2 shadow-sm text-sm relative
                                ${msg.isMe
                                    ? 'bg-[#d9fdd3] text-gray-900 rounded-tr-none hover:shadow-md transition-shadow'
                                    : 'bg-white text-gray-900 rounded-tl-none hover:shadow-md transition-shadow'
                                }
                            `}>
                                {!msg.isMe && (
                                    <p className={`text-[10px] font-bold mb-1 ${msg.sender.includes("Teacher") ? 'text-orange-600' : 'text-blue-600'
                                        }`}>
                                        {msg.sender}
                                    </p>
                                )}
                                <p className="leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                                <div className="flex items-center justify-end gap-1 mt-1 opacity-70">
                                    <span className="text-[10px] font-medium">{msg.time}</span>
                                    {msg.isMe && (
                                        <CheckCheck className={`h-3 w-3 ${msg.status === 'read' ? 'text-blue-500' : 'text-gray-500'}`} />
                                    )}
                                </div>
                                <div className="absolute top-0 right-0 -mr-2 -mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button className="bg-white rounded-full p-1 shadow border border-gray-100 hover:bg-gray-50">
                                        <MoreHorizontal className="h-3 w-3 text-gray-500" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="bg-white p-3 md:p-4 z-20">
                    <form
                        onSubmit={handleSendMessage}
                        className="flex items-end gap-2 bg-gray-50 border border-gray-200 rounded-2xl p-2 focus-within:ring-2 focus-within:ring-blue-100 focus-within:border-blue-400 transition-all shadow-sm"
                    >
                        <button type="button" className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-200 rounded-full transition-colors shrink-0">
                            <Smile className="h-6 w-6" />
                        </button>
                        <button type="button" className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-200 rounded-full transition-colors shrink-0 hidden sm:block">
                            <ImageIcon className="h-6 w-6" />
                        </button>
                        <button type="button" className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-200 rounded-full transition-colors shrink-0">
                            <Paperclip className="h-5 w-5" />
                        </button>

                        <input
                            type="text"
                            value={messageInput}
                            onChange={(e) => setMessageInput(e.target.value)}
                            placeholder="Type a message..."
                            className="flex-1 bg-transparent border-none focus:ring-0 text-gray-800 placeholder-gray-400 min-h-[44px] max-h-32 py-3 resize-none"
                        />

                        {messageInput.trim() ? (
                            <button type="submit" className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 active:scale-95 transition-all shadow-md shrink-0">
                                <Send className="h-5 w-5 ml-0.5" />
                            </button>
                        ) : (
                            <button type="button" className="p-3 bg-gray-200 text-gray-500 rounded-full cursor-not-allowed shrink-0">
                                <Clock className="h-5 w-5" /> {/* Mic icon placehoder essentially */}
                            </button>
                        )}
                    </form>
                    <p className="text-[10px] text-center text-gray-400 mt-2">
                        Enter to send, Shift + Enter for new line.
                    </p>
                </div>
            </div>

            <style>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation: fadeInUp 0.4s ease-out forwards;
                }
                .custom-scrollbar-y::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar-y::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar-y::-webkit-scrollbar-thumb {
                    background-color: rgba(0, 0, 0, 0.1);
                    border-radius: 20px;
                }
            `}</style>
        </div>
    );
};

export default SchoolGroups;
