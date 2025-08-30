import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Video,
  Play,
  Users,
  Heart,
  MessageCircle,
  Share2,
  Home,
  BarChart3,
  Upload
} from 'lucide-react';

export default function Livestream() {
  return (
    <div className="min-h-screen bg-white">
      {/* Status Bar */}
      <div className="h-1 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500"></div>
      
      {/* Mobile Header */}
      <header className="bg-white border-b border-gray-100 px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-900">Livestream</h1>
          <Button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium">
            <Video className="w-4 h-4 mr-2" />
            Go Live
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="px-4 py-6 space-y-6">
        {/* Livestream Preview */}
        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="bg-gray-100 rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Video className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Start Your Livestream</h2>
              <p className="text-gray-600 mb-6">Connect with your audience in real-time</p>
              <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-xl text-lg font-semibold">
                <Play className="w-5 h-5 mr-2" />
                Begin Streaming
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Live Stats */}
        <div className="grid grid-cols-3 gap-4">
          <Card className="border-0 shadow-sm bg-blue-50">
            <CardContent className="p-4 text-center">
              <Users className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-blue-600">0</p>
              <p className="text-sm text-blue-600">Viewers</p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-sm bg-red-50">
            <CardContent className="p-4 text-center">
              <Heart className="w-8 h-8 text-red-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-red-600">0</p>
              <p className="text-sm text-red-600">Likes</p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-sm bg-green-50">
            <CardContent className="p-4 text-center">
              <MessageCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-green-600">0</p>
              <p className="text-sm text-green-600">Comments</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Button className="w-full justify-start bg-gray-50 hover:bg-gray-100 text-gray-700 border-0">
                <Share2 className="w-5 h-5 mr-3" />
                Share Stream
              </Button>
              <Button className="w-full justify-start bg-gray-50 hover:bg-gray-100 text-gray-700 border-0">
                <BarChart3 className="w-5 h-5 mr-3" />
                View Analytics
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100">
        <div className="flex items-center justify-around py-3">
          <a href="/" className="flex flex-col items-center text-gray-400">
            <Home className="w-6 h-6 mb-1" />
            <span className="text-xs">Home</span>
          </a>
          <a href="/creator/dashboard" className="flex flex-col items-center text-gray-400">
            <BarChart3 className="w-6 h-6 mb-1" />
            <span className="text-xs">Dashboard</span>
          </a>
          <a href="/creator/upload" className="flex flex-col items-center text-gray-400">
            <Upload className="w-6 h-6 mb-1" />
            <span className="text-xs">Upload</span>
          </a>
        </div>
      </nav>
    </div>
  );
}
