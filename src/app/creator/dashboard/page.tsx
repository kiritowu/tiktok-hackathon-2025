import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TikTokDiamonds } from '@/components/ui/tiktok-diamonds';
import { TVSBreakdown } from '@/components/ui/tvs-breakdown';
import { TVSCalculator } from '@/lib/tvs-calculator';
import { 
  Music, 
  Filter, 
  FileText, 
  Play, 
  TrendingUp, 
  Users, 
  Heart, 
  MessageCircle, 
  Share2,
  AlertTriangle,
  CheckCircle,
  Clock,
  BarChart3,
  Home,
  Upload,
  Sparkles,
  ChevronLeft,
  MoreHorizontal,
  Menu,
  Bell,
  Settings,
  Camera,
  User,
  Plus
} from 'lucide-react';

export default function Dashboard() {
  // Mock data for demonstration
  const authenticityData = {
    overallScore: 87,
    audioScore: 92,
    filterScore: 78,
    contentScore: 85,
    recentVideos: [
      { id: 1, title: "Dance Challenge", score: 89, views: "2.1M", engagement: "12.4%" },
      { id: 2, title: "Cooking Tutorial", score: 76, views: "890K", engagement: "8.2%" },
      { id: 3, title: "Life Hack", score: 94, views: "1.5M", engagement: "15.7%" },
      { id: 4, title: "Comedy Skit", score: 82, views: "3.2M", engagement: "9.8%" },
      { id: 5, title: "Educational", score: 91, views: "1.8M", engagement: "18.3%" },
      { id: 6, title: "Trending", score: 68, views: "5.1M", engagement: "6.1%" },
      { id: 7, title: "Original Music", score: 96, views: "2.7M", engagement: "22.1%" },
      { id: 8, title: "Viral Moment", score: 71, views: "8.9M", engagement: "7.4%" },
      { id: 9, title: "Behind Scenes", score: 88, views: "1.2M", engagement: "14.6%" }
    ]
  };

  // TikTok Value Score data
  const tvsData = {
    overallScore: 87,
    engagement: 12.4,
    watchTimeFactor: 8.7,
    rippleEffect: 156,
    sentiment: 78,
    authenticityBonus: 15,
    tvs: 92
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-emerald-500';
    if (score >= 80) return 'text-blue-500';
    if (score >= 70) return 'text-amber-500';
    return 'text-red-500';
  };

  const getScoreBg = (score: number) => {
    if (score >= 90) return 'bg-emerald-500/10';
    if (score >= 80) return 'bg-blue-500/10';
    if (score >= 70) return 'bg-amber-500/10';
    return 'bg-red-500/10';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Status Bar */}
      <div className="h-1 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500"></div>
      
      {/* Mobile Header - TikTok Style */}
      <header className="bg-white border-b border-gray-100 px-4 py-4">
        <div className="flex items-center justify-between">
          <button className="p-2">
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
          
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-500">Creator</span>
            <div className="w-10 h-6 bg-gray-200 rounded-full p-0.5">
              <div className="w-5 h-5 bg-white rounded-full shadow-sm"></div>
            </div>
          </div>
          
          <button className="p-2">
            <Bell className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="px-4 py-6 space-y-6">
        {/* Streaming Info */}
        <div className="text-center">
          <p className="text-gray-600 text-sm">9 days of streaming</p>
        </div>

        {/* Account Selector */}
        <div className="flex items-center justify-between bg-gray-50 rounded-2xl p-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <Camera className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">pelican32</p>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <User className="w-4 h-4" />
                <span>12384</span>
                <ChevronLeft className="w-4 h-4 rotate-90" />
              </div>
            </div>
          </div>
          <Button className="w-10 h-10 bg-gray-900 rounded-full p-0">
            <Plus className="w-5 h-5 text-white" />
          </Button>
        </div>

        {/* Stats Section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Stats</h2>
            <select className="text-sm text-gray-600 bg-transparent border-none">
              <option>Monthly</option>
            </select>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {/* New Followers Card */}
            <Card className="border-0 shadow-sm bg-gradient-to-br from-blue-50 to-blue-100">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <MoreHorizontal className="w-5 h-5 text-gray-400" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-600">New Followers</p>
                  <p className="text-2xl font-bold text-gray-900">385</p>
                  <p className="text-sm text-green-600 font-medium">+12.5%</p>
                </div>
              </CardContent>
            </Card>

            {/* Revenue Card */}
            <Card className="border-0 shadow-sm bg-gradient-to-br from-green-50 to-green-100">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <MoreHorizontal className="w-5 h-5 text-gray-400" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-600">Revenue</p>
                  <p className="text-2xl font-bold text-gray-900">$1854</p>
                  <p className="text-sm text-red-600 font-medium">-1.6%</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* TikTok Diamonds Section */}
        <TikTokDiamonds 
          currentDiamonds={12500}
          monthlyEarnings={1854}
          authenticityScore={87}
          tvsScore={92}
        />

        {/* TVS Breakdown Section */}
        <TVSBreakdown 
          tvsData={TVSCalculator.calculateTVS({
            views: 2500000,
            likes: 125000,
            comments: 8500,
            shares: 3200,
            watchTime: 45,
            videoLength: 60,
            stitches: 156,
            duets: 89,
            remixes: 45,
          })}
        />

        {/* Authenticity Section */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Authenticity</h2>
          
          {/* Bar Chart */}
          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-end justify-between h-32 mb-4">
                {['Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'A'].map((month, index) => (
                  <div key={month} className="flex flex-col items-center gap-2">
                    <div className="flex flex-col gap-1">
                      <div 
                        className="w-6 bg-gray-900 rounded-t-sm"
                        style={{ height: `${Math.random() * 60 + 40}px` }}
                      ></div>
                      <div 
                        className="w-6 bg-gray-400 rounded-t-sm"
                        style={{ height: `${Math.random() * 40 + 20}px` }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-500">{month}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gray-900 rounded"></div>
                  <span className="text-gray-600">Authentic</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gray-400 rounded"></div>
                  <span className="text-gray-600">Views</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100">
        <div className="flex items-center justify-around py-3">
          <a href="/" className="flex flex-col items-center text-gray-400">
            <Home className="w-6 h-6 mb-1" />
            <span className="text-xs">Home</span>
          </a>
          <a href="/creator/dashboard" className="flex flex-col items-center text-gray-900">
            <div className="w-12 h-12 bg-gray-900 rounded-2xl flex items-center justify-center mb-1">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <span className="text-xs font-medium">Dashboard</span>
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
