import React from 'react';
import { 
  Music, 
  Filter, 
  FileText, 
  TrendingUp, 
  Users, 
  Heart, 
  Sparkles,
  ArrowRight,
  CheckCircle,
  BarChart3,
  Play,
  Upload
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-6 border-b border-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            TikTok Authenticity Checker
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 text-gray-300 hover:text-white transition-colors">
            About
          </button>
          <button className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full hover:from-pink-600 hover:to-purple-600 transition-all">
            Get Started
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-6xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Beyond Likes & Views
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Discover your true TikTok Value Score with our revolutionary authenticity metrics. 
            Measure what really matters: originality, engagement quality, and community impact.
          </p>
          
          {/* Key Metrics Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Music className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Authenticity Score</h3>
              <p className="text-gray-400">Original audio, minimal filters, genuine content</p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Impact per Minute</h3>
              <p className="text-gray-400">Watch time × engagement ÷ video length</p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ripple Effect</h3>
              <p className="text-gray-400">Stitches, duets, and derivative content</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/creator/dashboard"
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full text-lg font-semibold hover:from-pink-600 hover:to-purple-600 transition-all transform hover:scale-105"
            >
              <Play className="w-5 h-5" />
              View Dashboard
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="/creator/upload"
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-gray-600 text-white rounded-full text-lg font-semibold hover:border-gray-400 hover:bg-gray-800/50 transition-all"
            >
              <Upload className="w-5 h-5" />
              Upload & Analyze
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-16">
            Why <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Authenticity</span> Matters
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Combat Fake Engagement</h4>
                  <p className="text-gray-400">Identify and avoid engagement farms that hurt your algorithm ranking</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Build Genuine Community</h4>
                  <p className="text-gray-400">Foster real connections with authentic content that resonates</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Algorithm Optimization</h4>
                  <p className="text-gray-400">Understand what TikTok's algorithm truly values</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800/30 rounded-2xl p-8 border border-gray-700">
              <h4 className="text-2xl font-bold mb-6 text-center">TVS Formula</h4>
              <div className="space-y-4">
                <div className="bg-gray-700/50 rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-2">TikTok Value Score</div>
                  <div className="text-3xl font-bold text-center bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                    TVS = (E × W) + (R × S) + A
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="bg-gray-700/30 rounded p-3">
                    <div className="font-semibold text-pink-400">E</div>
                    <div className="text-gray-400">Engagement Rate</div>
                  </div>
                  <div className="bg-gray-700/30 rounded p-3">
                    <div className="font-semibold text-blue-400">W</div>
                    <div className="text-gray-400">Watch Time Factor</div>
                  </div>
                  <div className="bg-gray-700/30 rounded p-3">
                    <div className="font-semibold text-purple-400">R</div>
                    <div className="text-gray-400">Ripple Effect</div>
                  </div>
                  <div className="bg-gray-700/30 rounded p-3">
                    <div className="font-semibold text-green-400">S</div>
                    <div className="text-gray-400">Sentiment</div>
                  </div>
                </div>
                
                <div className="bg-gray-700/30 rounded p-3">
                  <div className="font-semibold text-yellow-400">A</div>
                  <div className="text-gray-400">Authenticity Bonus</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-8">Ready to Get Started?</h3>
          <p className="text-xl text-gray-300 mb-12">
            Choose your path and start analyzing your content's authenticity today
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <a
              href="/creator/dashboard"
              className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-pink-500/50 hover:bg-gray-800/70 transition-all transform hover:scale-105"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-10 h-10 text-pink-400" />
              </div>
              <h4 className="text-2xl font-bold mb-4">Creator Dashboard</h4>
              <p className="text-gray-400 mb-6">
                View your overall authenticity performance, track progress, and get insights
              </p>
              <div className="flex items-center justify-center gap-2 text-pink-400 group-hover:text-pink-300 transition-colors">
                <span>Explore Dashboard</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
            
            <a
              href="/creator/upload"
              className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 hover:bg-gray-800/70 transition-all transform hover:scale-105"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Upload className="w-10 h-10 text-blue-400" />
              </div>
              <h4 className="text-2xl font-bold mb-4">Upload & Analyze</h4>
              <p className="text-gray-400 mb-6">
                Upload your videos and get instant authenticity analysis with detailed breakdowns
              </p>
              <div className="flex items-center justify-center gap-2 text-blue-400 group-hover:text-blue-300 transition-colors">
                <span>Start Analysis</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">TikTok Authenticity Checker</span>
          </div>
          <p className="text-gray-400 mb-6">
            Built for creators who value authenticity, engagement, and community impact
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
            <span>© 2025 TikTok Hackathon</span>
            <span>•</span>
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
