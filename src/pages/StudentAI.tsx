import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, User, Bot, AlertCircle } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini API
// NOTE: Ideally this should be in an environment variable `VITE_GEMINI_API_KEY`
// For now, we will try to use the environment variable, and fallback to a prompt if missing.
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const StudentAI: React.FC = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<{ role: 'user' | 'model'; text: string }[]>([
        { role: 'model', text: "Hello! I'm your AI Tutor. I can help you with your school subjects. What would you like to learn today?" }
    ]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim()) return;

        if (!API_KEY) {
            setError("Configuration Error: API Key is missing. Please ask your administrator to configure VITE_GEMINI_API_KEY.");
            return;
        }

        const userMessage = input;
        setInput('');
        setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
        setIsLoading(true);
        setError(null);

        try {
            const genAI = new GoogleGenerativeAI(API_KEY);
            const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

            const chat = model.startChat({
                history: [
                    {
                        role: "user",
                        parts: [{ text: "You are a helpful and safe school tutor AI for students. Keep your answers clear, concise, and academically focused. Do not answer questions that are inappropriate for a school setting. If asked about non-academic topics, nicely steer the conversation back to learning." }],
                    },
                    {
                        role: "model",
                        parts: [{ text: "Understood. I am ready to help students with their academic questions safely and clearly." }],
                    },
                ],
            });

            const result = await chat.sendMessage(userMessage);
            const response = result.response;
            const text = response.text();

            setMessages(prev => [...prev, { role: 'model', text: text }]);
        } catch (err: any) {
            console.error("Gemini API Error:", err);
            setError(`Connection failed: ${err.message || "Unknown error"}`);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="flex h-[calc(100vh-2rem)] flex-col bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden max-w-4xl mx-auto">
            {/* Header */}
            <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between shadow-sm z-10">
                <div className="flex items-center gap-3">
                    <div className="bg-indigo-100 p-2 rounded-lg">
                        <Sparkles className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div>
                        <h1 className="text-lg font-bold text-gray-900">AI Doubt Solver</h1>
                        <p className="text-xs text-gray-500 flex items-center gap-1">
                            <Bot className="h-3 w-3" /> Powered by Google Gemini
                        </p>
                    </div>
                </div>
                <div className="text-xs text-gray-400 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
                    School Safe Mode Active
                </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        {msg.role === 'model' && (
                            <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center shrink-0 border border-indigo-200">
                                <Sparkles className="h-4 w-4 text-indigo-600" />
                            </div>
                        )}

                        <div
                            className={`max-w-[80%] p-4 rounded-2xl shadow-sm ${msg.role === 'user'
                                ? 'bg-blue-600 text-white rounded-tr-none'
                                : 'bg-white text-gray-800 border border-gray-200 rounded-tl-none'
                                }`}
                        >
                            <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                        </div>

                        {msg.role === 'user' && (
                            <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0 border border-blue-200">
                                <User className="h-4 w-4 text-blue-600" />
                            </div>
                        )}
                    </div>
                ))}

                {isLoading && (
                    <div className="flex gap-3 justify-start">
                        <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center shrink-0 border border-indigo-200">
                            <Sparkles className="h-4 w-4 text-indigo-600 animate-pulse" />
                        </div>
                        <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-gray-200 shadow-sm flex items-center gap-2">
                            <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                            <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                            <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                        </div>
                    </div>
                )}

                {error && (
                    <div className="flex justify-center">
                        <div className="bg-red-50 text-red-600 text-sm px-4 py-2 rounded-lg border border-red-100 flex items-center gap-2 shadow-sm">
                            <AlertCircle className="h-4 w-4" />
                            {error}
                        </div>
                    </div>
                )}

                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-200">
                <div className="relative flex items-end gap-2 bg-gray-50 p-2 rounded-xl border border-gray-200 focus-within:ring-2 focus-within:ring-indigo-100 focus-within:border-indigo-300 transition-all">
                    <textarea
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyPress}
                        placeholder="Ask a question about your homework..."
                        className="w-full bg-transparent border-none focus:ring-0 resize-none max-h-32 text-sm text-gray-800 placeholder-gray-400 py-2.5 px-2"
                        rows={1}
                        style={{ minHeight: '44px' }}
                    />
                    <button
                        onClick={handleSend}
                        disabled={!input.trim() || isLoading}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white p-2.5 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed mb-0.5"
                    >
                        <Send className="h-4 w-4" />
                    </button>
                </div>
                <p className="text-center text-[10px] text-gray-400 mt-2">
                    Answers are AI-generated by Gemini and optimized for school safety. Always verify important information.
                </p>
            </div>
        </div>
    );
};

export default StudentAI;
