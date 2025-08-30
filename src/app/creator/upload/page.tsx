"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { TVSCalculator } from '@/lib/tvs-calculator';
import { 
  Play, 
  X,
  Video,
  Sparkles,
  TrendingUp,
  BarChart3,
  Home,
  Upload as UploadIcon,
  ChevronLeft,
  Music,
  Filter,
  FileText,
  AlertTriangle,
  CheckCircle,
  Clock,
  Zap
} from 'lucide-react';

export default function Upload() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [currentTab, setCurrentTab] = useState<'audio' | 'filter' | 'content'>('audio');
  const [dragActive, setDragActive] = useState(false);
  const [sampleContentType, setSampleContentType] = useState<'educational' | 'entertainment' | 'creative'>('educational');

  // Enhanced analysis results with more detailed metrics
  const analysisResults = {
    educational: {
      audio: {
        score: 92,
        originalAudio: true,
        musicDetection: "Original composition",
        voiceClarity: "High quality",
        backgroundNoise: "Minimal",
        audioQuality: "HD (320kbps)",
        duration: "45 seconds",
        recommendations: [
          "Excellent original audio! This boosts your authenticity score significantly.",
          "Consider adding subtle background music to enhance engagement",
          "Voice clarity is perfect for educational content",
          "Audio quality meets professional standards"
        ]
      },
      filter: {
        score: 78,
        filterCount: 3,
        filterTypes: ["Beauty", "Color", "Lighting"],
        naturalLighting: false,
        beautyFilters: 2,
        colorEnhancement: true,
        saturation: "Medium",
        brightness: "Slightly enhanced",
        recommendations: [
          "Reduce beauty filter usage for more authentic appearance",
          "Natural lighting would improve your authenticity score",
          "Consider using minimal color enhancement only",
          "Current filter usage is moderate - good balance"
        ]
      },
      content: {
        score: 85,
        originality: "High",
        duplicateCheck: "No duplicates found",
        contentQuality: "Educational value",
        educationalValue: 8,
        creativityScore: 7,
        contentLength: "45 seconds",
        category: "Educational",
        recommendations: [
          "Excellent original content! This is highly valuable for the algorithm",
          "Consider adding captions to improve accessibility",
          "Your educational value is above average - great for community building",
          "Content length is optimal for engagement"
        ]
      }
    },
    entertainment: {
      audio: {
        score: 75,
        originalAudio: false,
        musicDetection: "Popular song remix",
        voiceClarity: "Medium quality",
        backgroundNoise: "Moderate",
        audioQuality: "Standard (128kbps)",
        duration: "30 seconds",
        recommendations: [
          "Consider using original audio to improve authenticity score",
          "Voice clarity could be improved with better recording equipment",
          "Background noise reduction would enhance audio quality",
          "Higher audio quality would improve overall score"
        ]
      },
      filter: {
        score: 65,
        filterCount: 5,
        filterTypes: ["Beauty", "Color", "Lighting", "Effects", "Transitions"],
        naturalLighting: false,
        beautyFilters: 3,
        colorEnhancement: true,
        saturation: "High",
        brightness: "Highly enhanced",
        recommendations: [
          "Reduce filter usage for more authentic appearance",
          "Consider using natural lighting instead of artificial filters",
          "High saturation and brightness reduce authenticity",
          "Simplify your filter approach for better scores"
        ]
      },
      content: {
        score: 70,
        originality: "Medium",
        duplicateCheck: "Minor similarities",
        contentQuality: "Entertainment",
        educationalValue: 4,
        creativityScore: 6,
        contentLength: "30 seconds",
        category: "Entertainment",
        recommendations: [
          "Content has some originality but could be more unique",
          "Consider adding educational elements to increase value",
          "Creativity is good but could be enhanced",
          "Content length is appropriate for entertainment"
        ]
      }
    },
    creative: {
      audio: {
        score: 88,
        originalAudio: true,
        musicDetection: "Original composition",
        voiceClarity: "High quality",
        backgroundNoise: "Minimal",
        audioQuality: "HD (320kbps)",
        duration: "60 seconds",
        recommendations: [
          "Excellent original audio composition!",
          "Voice quality is professional grade",
          "Minimal background noise shows good recording setup",
          "Consider adding more dynamic audio elements"
        ]
      },
      filter: {
        score: 82,
        filterCount: 2,
        filterTypes: ["Color", "Lighting"],
        naturalLighting: true,
        beautyFilters: 0,
        colorEnhancement: false,
        saturation: "Natural",
        brightness: "Natural",
        recommendations: [
          "Great use of natural lighting - boosts authenticity!",
          "No beauty filters - excellent for authenticity",
          "Natural color settings are perfect",
          "Consider minimal artistic filters for creative enhancement"
        ]
      },
      content: {
        score: 90,
        originality: "High",
        duplicateCheck: "No duplicates found",
        contentQuality: "Creative value",
        educationalValue: 6,
        creativityScore: 9,
        contentLength: "60 seconds",
        category: "Creative",
        recommendations: [
          "Exceptional creativity and originality!",
          "No duplicate content detected - excellent",
          "High creativity score shows unique approach",
          "Longer content allows for more creative expression"
        ]
      }
    }
  };

  // Get current analysis results based on sample content type
  const currentAnalysisResults = analysisResults[sampleContentType];

  // Calculate TVS using the calculator with sample data
  const tvsData = TVSCalculator.generateSampleData();

  // Calculate authenticity factors using the enhanced calculator
  const authenticityFactors = TVSCalculator.calculateAuthenticityFactors(
    currentAnalysisResults.audio,
    currentAnalysisResults.filter,
    currentAnalysisResults.content
  );

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      setIsAnalyzing(true);
      // Simulate analysis
      setTimeout(() => {
        setIsAnalyzing(false);
        setAnalysisComplete(true);
      }, 3000);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith('video/')) {
        setUploadedFile(file);
        setIsAnalyzing(true);
        setTimeout(() => {
          setIsAnalyzing(false);
          setAnalysisComplete(true);
        }, 3000);
      }
    }
  };

  const handleAnalyze = () => {
    if (uploadedFile) {
      setIsAnalyzing(true);
      setTimeout(() => {
        setIsAnalyzing(false);
        setAnalysisComplete(true);
      }, 3000);
    }
  };

  const removeFile = () => {
    setUploadedFile(null);
    setAnalysisComplete(false);
    setIsAnalyzing(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Status Bar */}
      <div className="h-1 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500"></div>
      
      {/* Mobile Header - TikTok Style */}
      <header className="bg-white border-b border-gray-100 px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 text-gray-700">
            <ChevronLeft className="w-5 h-5" />
            <span className="text-sm font-semibold">BACK</span>
          </a>
          
          <h1 className="text-xl font-bold text-gray-900">Authenticity Checker</h1>
          
          <Button className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium">
            <span className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center text-gray-900 text-xs font-bold mr-2">P</span>
            POST
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="px-4 py-6 space-y-6">
        {/* File Upload Section */}
        {!uploadedFile && (
          <Card className="border-0 shadow-sm">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <UploadIcon className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Upload Your Video</h3>
                <p className="text-gray-600 mb-6">Get your TikTok Value Score and authenticity analysis</p>
                
                {/* Drag & Drop Zone */}
                <div
                  className={`border-2 border-dashed rounded-2xl p-8 transition-colors ${
                    dragActive 
                      ? 'border-blue-500 bg-blue-50' 
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  <div className="text-center">
                    <Video className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-2">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-sm text-gray-500">MP4, MOV, AVI up to 100MB</p>
                  </div>
                  
                  <Input
                    type="file"
                    accept="video/*"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                  />
                  <label htmlFor="file-upload">
                    <Button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold">
                      Choose Video File
                    </Button>
                  </label>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* File Preview & Analysis */}
        {uploadedFile && (
          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Video className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{uploadedFile.name}</h4>
                    <p className="text-sm text-gray-500">
                      {(uploadedFile.size / (1024 * 1024)).toFixed(2)} MB
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={removeFile}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
              
              {!analysisComplete && (
                <Button 
                  onClick={handleAnalyze}
                  disabled={isAnalyzing}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold"
                >
                  {isAnalyzing ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Zap className="w-5 h-5 mr-2" />
                      Start Authenticity Analysis
                    </>
                  )}
                </Button>
              )}
            </CardContent>
          </Card>
        )}

        {/* Authenticity Options */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Authenticity Components</h3>
          
          {/* Sample Content Type Selector */}
          <div className="mb-6">
            <p className="text-sm text-gray-600 mb-3">Try different content types to see how they score:</p>
            <div className="flex gap-2">
              <Button
                onClick={() => setSampleContentType('educational')}
                variant={sampleContentType === 'educational' ? 'default' : 'outline'}
                size="sm"
                className="text-xs"
              >
                📚 Educational
              </Button>
              <Button
                onClick={() => setSampleContentType('entertainment')}
                variant={sampleContentType === 'entertainment' ? 'default' : 'outline'}
                size="sm"
                className="text-xs"
              >
                🎭 Entertainment
              </Button>
              <Button
                onClick={() => setSampleContentType('creative')}
                variant={sampleContentType === 'creative' ? 'default' : 'outline'}
                size="sm"
                className="text-xs"
              >
                🎨 Creative
              </Button>
            </div>
          </div>
          
          {/* Authenticity Score Summary */}
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-4 mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-gray-900">Overall Authenticity Score</h4>
                <p className="text-sm text-gray-600">Based on {sampleContentType} content</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-blue-600">
                  {Math.round((authenticityFactors.audio.score + authenticityFactors.filter.score + authenticityFactors.content.score) / 3)}
                </div>
                <div className="text-sm text-blue-600 font-medium">/100</div>
              </div>
            </div>
            
            {/* Score Breakdown */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              <div className="text-center">
                <div className="text-lg font-semibold text-green-600">{authenticityFactors.audio.score}</div>
                <div className="text-xs text-gray-600">Audio</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-orange-600">{authenticityFactors.filter.score}</div>
                <div className="text-xs text-gray-600">Filter</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-blue-600">{authenticityFactors.content.score}</div>
                <div className="text-xs text-gray-600">Content</div>
              </div>
            </div>
          </div>
          
          <div className="flex gap-3">
            <Button 
              onClick={() => setCurrentTab('audio')}
              className={`flex-1 py-4 px-4 rounded-xl text-sm font-semibold ${
                currentTab === 'audio' 
                  ? 'bg-green-500 hover:bg-green-600 text-white' 
                  : 'bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-200 hover:border-gray-300'
              }`}
            >
              <Music className="w-5 h-5 mr-2" />
              Audio
            </Button>
            <Button 
              onClick={() => setCurrentTab('filter')}
              className={`flex-1 py-4 px-4 rounded-xl text-sm font-semibold ${
                currentTab === 'filter' 
                  ? 'bg-orange-500 hover:bg-orange-600 text-white' 
                  : 'bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-200 hover:border-gray-300'
              }`}
            >
              <Filter className="w-5 h-5 mr-2" />
              Filter
              <AlertTriangle className="w-4 h-4 text-yellow-500 absolute -top-2 -right-2" />
            </Button>
            <Button 
              onClick={() => setCurrentTab('content')}
              className={`flex-1 py-4 px-4 rounded-xl text-sm font-semibold ${
                currentTab === 'content' 
                  ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                  : 'bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-200 hover:border-gray-300'
              }`}
            >
              <FileText className="w-5 h-5 mr-2" />
              Content
              <AlertTriangle className="w-4 h-4 text-yellow-500 absolute -top-2 -right-2" />
            </Button>
          </div>
        </div>

        {/* Analysis Results */}
        {analysisComplete && (
          <div className="space-y-6">
            {/* TikTok Value Score */}
            <Card className="border-0 shadow-sm bg-gradient-to-br from-blue-50 to-blue-100">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">TikTok Value Score</h3>
                <div className="text-6xl font-bold text-blue-600 mb-4">
                  {tvsData.tvs}
                </div>
                <div className="inline-block px-6 py-3 bg-blue-500/10 rounded-full border border-blue-200/50">
                  <span className="text-blue-700 font-semibold text-lg">Excellent</span>
                </div>
                
                {/* Quick Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                    <div className="text-2xl font-bold text-emerald-600 mb-1">
                      {Math.round((authenticityFactors.audio.score + authenticityFactors.filter.score + authenticityFactors.content.score) / 3)}
                    </div>
                    <div className="text-sm text-emerald-600 font-medium">Authenticity</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                    <div className="text-2xl font-bold text-purple-600 mb-1">{tvsData.watchTimeFactor}</div>
                    <div className="text-sm text-purple-600 font-medium">IPM Score</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Detailed Analysis Tabs */}
            <Card className="border-0 shadow-sm">
              <CardContent className="p-8">
                {/* Tab Navigation */}
                <div className="flex gap-3 mb-8">
                  <Button
                    onClick={() => setCurrentTab('audio')}
                    className={`flex-1 py-4 px-4 text-sm font-semibold rounded-2xl ${
                      currentTab === 'audio' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Music className="w-5 h-5 mr-2" />
                    Audio
                  </Button>
                  <Button
                    onClick={() => setCurrentTab('filter')}
                    className={`flex-1 py-4 px-4 text-sm font-semibold rounded-2xl ${
                      currentTab === 'filter' 
                        ? 'bg-orange-500 text-white' 
                        : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Filter className="w-5 h-5 mr-2" />
                    Filter
                  </Button>
                  <Button
                    onClick={() => setCurrentTab('content')}
                    className={`flex-1 py-4 px-4 text-sm font-semibold rounded-2xl ${
                      currentTab === 'content' 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <FileText className="w-5 h-5 mr-2" />
                    Content
                  </Button>
                </div>

                {/* Tab Content */}
                <div className="text-center">
                  <div className="text-5xl font-bold text-green-600 mb-4">
                    {authenticityFactors[currentTab].score}
                  </div>
                  <div className="inline-block px-6 py-3 bg-green-500/10 rounded-full border border-green-200/50 mb-8">
                    <span className="text-green-700 font-semibold text-lg">
                      {authenticityFactors[currentTab].score >= 90 ? 'Excellent' : 
                       authenticityFactors[currentTab].score >= 80 ? 'Good' : 
                       authenticityFactors[currentTab].score >= 70 ? 'Fair' : 'Needs Improvement'}
                    </span>
                  </div>
                  
                  {/* Detailed Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {currentTab === 'audio' && (
                      <>
                        <div className="bg-gray-50 rounded-xl p-4 text-center">
                          <div className="text-lg font-semibold text-gray-900 mb-1">
                            {currentAnalysisResults.audio.originalAudio ? 'Original' : 'Not Original'}
                          </div>
                          <div className="text-sm text-gray-600">Audio Type</div>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-4 text-center">
                          <div className="text-lg font-semibold text-gray-900 mb-1">
                            {currentAnalysisResults.audio.voiceClarity}
                          </div>
                          <div className="text-sm text-gray-600">Voice Quality</div>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-4 text-center">
                          <div className="text-lg font-semibold text-gray-900 mb-1">
                            {currentAnalysisResults.audio.audioQuality}
                          </div>
                          <div className="text-sm text-gray-600">Audio Quality</div>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-4 text-center">
                          <div className="text-lg font-semibold text-gray-900 mb-1">
                            {currentAnalysisResults.audio.duration}
                          </div>
                          <div className="text-sm text-gray-600">Duration</div>
                        </div>
                      </>
                    )}
                    
                    {currentTab === 'filter' && (
                      <>
                        <div className="bg-gray-50 rounded-xl p-4 text-center">
                          <div className="text-lg font-semibold text-gray-900 mb-1">
                            {currentAnalysisResults.filter.filterCount}
                          </div>
                          <div className="text-sm text-gray-600">Filters Used</div>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-4 text-center">
                          <div className="text-lg font-semibold text-gray-900 mb-1">
                            {currentAnalysisResults.filter.beautyFilters}
                          </div>
                          <div className="text-sm text-gray-600">Beauty Filters</div>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-4 text-center">
                          <div className="text-lg font-semibold text-gray-900 mb-1">
                            {currentAnalysisResults.filter.saturation}
                          </div>
                          <div className="text-sm text-gray-600">Saturation</div>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-4 text-center">
                          <div className="text-lg font-semibold text-gray-900 mb-1">
                            {currentAnalysisResults.filter.brightness}
                          </div>
                          <div className="text-sm text-gray-600">Brightness</div>
                        </div>
                      </>
                    )}
                    
                    {currentTab === 'content' && (
                      <>
                        <div className="bg-gray-50 rounded-xl p-4 text-center">
                          <div className="text-lg font-semibold text-gray-900 mb-1">
                            {currentAnalysisResults.content.originality}
                          </div>
                          <div className="text-sm text-gray-600">Originality</div>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-4 text-center">
                          <div className="text-lg font-semibold text-gray-900 mb-1">
                            {currentAnalysisResults.content.educationalValue}/10
                          </div>
                          <div className="text-sm text-gray-600">Educational Value</div>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-4 text-center">
                          <div className="text-lg font-semibold text-gray-900 mb-1">
                            {currentAnalysisResults.content.creativityScore}/10
                          </div>
                          <div className="text-sm text-gray-600">Creativity</div>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-4 text-center">
                          <div className="text-lg font-semibold text-gray-900 mb-1">
                            {currentAnalysisResults.content.category}
                          </div>
                          <div className="text-sm text-gray-600">Category</div>
                        </div>
                      </>
                    )}
                  </div>
                  
                  {/* Recommendations */}
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center justify-center gap-2 text-lg">
                      <Sparkles className="w-5 h-5 text-yellow-500" />
                      Recommendations
                    </h4>
                    <ul className="space-y-3 text-left">
                      {currentAnalysisResults[currentTab].recommendations.map((rec, index) => (
                        <li key={index} className="text-gray-700 flex items-start gap-3 text-base">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2.5 flex-shrink-0"></span>
                          {rec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Analysis Loading State */}
        {!analysisComplete && uploadedFile && (
          <Card className="border-0 shadow-sm">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
              </div>
              <p className="text-gray-600 text-lg font-medium">Analyzing your content for authenticity...</p>
              <div className="mt-4 text-sm text-gray-500">
                <div className="flex items-center justify-center gap-2">
                  <Clock className="w-4 h-4" />
                  This usually takes 2-3 seconds
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Recent Content Section */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">RECENT</h2>
            <span className="text-gray-400">&gt;</span>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            {Array.from({ length: 9 }).map((_, index) => (
              <div key={index} className="aspect-square bg-gray-100 rounded-2xl flex items-center justify-center">
                <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center">
                  <Play className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
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
          <a href="/creator/upload" className="flex flex-col items-center text-gray-900">
            <div className="w-12 h-12 bg-gray-900 rounded-2xl flex items-center justify-center mb-1">
              <UploadIcon className="w-6 h-6 text-white" />
            </div>
            <span className="text-xs font-medium">Upload</span>
          </a>
        </div>
      </nav>
    </div>
  );
}
