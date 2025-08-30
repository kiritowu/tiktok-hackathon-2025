'use client'

import { useState, useEffect } from 'react';
import { X, Gift, Send, Diamond, User } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Drawer } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

const GIFT_ITEMS = [
    { id: 1, name: "Rose", price: 1, icon: "🌹" },
    { id: 2, name: "Heart", price: 5, icon: "❤️" },
    { id: 3, name: "Crown", price: 100, icon: "👑" },
    { id: 4, name: "Diamond", price: 500, icon: "💎" },
];

export default function Livestream() {
    const router = useRouter();
    const [viewerCount, setViewerCount] = useState(1234);
    const [isStreaming, setIsStreaming] = useState(true);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    // Mock viewer count changes
    useEffect(() => {
        const interval = setInterval(() => {
            setViewerCount(prev => prev + Math.floor(Math.random() * 10) - 4);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    useEffect(()=>{
        console.log(isDrawerOpen)
    }, [isDrawerOpen]);

    return (
        <div className="h-screen w-full bg-black text-white flex flex-col overflow-hidden">
            {/* Top Bar */}
            <div className="flex justify-between items-center p-4 bg-black/50 absolute top-0 w-full z-10">
                <div className="flex items-center gap-4">
                    {/* Streaming Indicator */}
                    <div className="flex items-center gap-2">
                        <div className={`h-2 w-2 rounded-full ${isStreaming ? 'animate-pulse bg-red-500' : 'bg-gray-500'}`} />
                        <span className="text-sm">LIVE</span>
                    </div>
                    {/* Viewer Count */}
                    <div className="flex items-center gap-2">
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map((_, i) => (
                                <div key={i} className="h-6 w-6 rounded-full bg-gray-400 border border-black" />
                            ))}
                        </div>
                        <span>{viewerCount.toLocaleString()}</span>
                    </div>
                </div>
                {/* Close Button */}
                <Button 
                    variant="ghost" 
                    size="icon"
                    className="hover:bg-white/20 text-white rounded-full"
                >
                    <X size={36} />
                </Button>
            </div>

            {/* Creator Button */}
            <div className="absolute top-20 left-4 z-10">
                <Button
                    variant="secondary"
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm"
                    onClick={() => router.push('/creator/dashboard')}
                >
                    <User size={20} />
                    <span>Creator Panel</span>
                </Button>
            </div>

            {/* Video Feed */}
            <div className="flex-1 bg-gray-900">
                <video 
                    className="h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    src="/mock-video.mp4" // Add your video source here
                />
            </div>

            {/* Footer */}
            <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black to-transparent">
                <div className="flex gap-2 items-center">
                    {/* Comment Input */}
                    <div className="flex-1 bg-white/20 rounded-full px-4 py-2">
                        <input 
                            type="text"
                            placeholder="Add comment..."
                            className="bg-transparent w-full outline-none"
                        />
                    </div>
                    {/* Gift Button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="hover:bg-white/20 text-white rounded-full"
                        onClick={() => setIsDrawerOpen(true)}
                    >
                        <Gift size={36} />
                    </Button>
                    {/* Send Button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="hover:bg-white/20 text-white rounded-full"
                    >
                        <Send size={36} />
                    </Button>
                </div>
            </div>

            {/* Gift Drawer */}
            {/* <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
                <div className="px-4 py-8">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-semibold">Send a Gift</h2>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsDrawerOpen(false)}
                        >
                            <X size={24} />
                        </Button>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {GIFT_ITEMS.map((gift) => (
                            <Button
                                key={gift.id}
                                variant="secondary"
                                className="flex flex-col items-center p-4 h-auto"
                                onClick={() => {
                                    console.log(`Selected gift: ${gift.name}`);
                                }}
                            >
                                <span className="text-3xl mb-2">{gift.icon}</span>
                                <span className="text-sm">{gift.name}</span>
                                <div className="flex items-center gap-1 mt-2">
                                    <Diamond size={16} className="text-blue-400" />
                                    <span className="text-sm">{gift.price}</span>
                                </div>
                            </Button>
                        ))}
                    </div>
                </div>
            </Drawer> */}
        </div>
    );
}
