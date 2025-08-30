import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './card';
import { Button } from './button';
import { 
  Music, 
  Filter, 
  FileText, 
  CheckCircle, 
  AlertTriangle, 
  Sparkles,
  TrendingUp,
  Users,
  Clock,
  BarChart3,
  Mic,
  Volume2,
  Activity,
  Palette,
  Sun,
  Eye,
  Shield,
  Copy,
  Brain
} from 'lucide-react';

interface AnalysisData {
  audio: {
    score: number;
    originalAudio: boolean;
    musicDetection: string;
    voiceClarity: string;
    backgroundNoise: string;
    recommendations: string[];
  };
  filter: {
    score: number;
    filterCount: number;
    filterTypes: string[];
    naturalLighting: boolean;
    beautyFilters: number;
    colorEnhancement: boolean;
    recommendations: string[];
  };
  content: {
    score: number;
    originality: string;
    duplicateCheck: string;
    contentQuality: string;
    educationalValue: number;
    creativityScore: number;
    recommendations: string[];
  };
}

interface AnalysisTabsProps {
  data: AnalysisData;
  currentTab: 'audio' | 'filter' | 'content';
  onTabChange: (tab: 'audio' | 'filter' | 'content') => void;
}

export function AnalysisTabs({ data, currentTab, onTabChange }: AnalysisTabsProps) {
  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 80) return 'text-blue-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBg = (score: number) => {
    if (score >= 90) return 'bg-green-100';
    if (score >= 80) return 'bg-blue-100';
    if (score >= 70) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 90) return 'Excellent';
    if (score >= 80) return 'Good';
    if (score >= 70) return 'Fair';
    return 'Needs Improvement';
  };

  const renderAudioAnalysis = () => (
    <div className="space-y-6">
      {/* Score Display */}
      <div className="text-center">
        <div className={`text-6xl font-bold ${getScoreColor(data.audio.score)} mb-2`}>
          {data.audio.score}
        </div>
        <div className={`text-sm px-4 py-2 rounded-full inline-block ${getScoreBg(data.audio.score)} ${getScoreColor(data.audio.score)}`}>
          {getScoreLabel(data.audio.score)}
        </div>
      </div>

      {/* Audio Metrics */}
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center p-4 bg-green-50 rounded-lg">
          <Mic className="w-8 h-8 text-green-600 mx-auto mb-2" />
          <div className="text-lg font-bold text-green-600">
            {data.audio.originalAudio ? 'Original' : 'Not Original'}
          </div>
          <div className="text-xs text-green-600">Audio Source</div>
        </div>
        <div className="text-center p-4 bg-blue-50 rounded-lg">
          <Volume2 className="w-8 h-8 text-blue-600 mx-auto mb-2" />
          <div className="text-lg font-bold text-blue-600">{data.audio.voiceClarity}</div>
          <div className="text-xs text-blue-600">Voice Quality</div>
        </div>
      </div>

      {/* Detailed Analysis */}
      <div className="space-y-3">
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <span className="font-medium">Music Detection</span>
          <span className="text-sm text-gray-600">{data.audio.musicDetection}</span>
        </div>
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <span className="font-medium">Background Noise</span>
          <span className="text-sm text-gray-600">{data.audio.backgroundNoise}</span>
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-green-50 p-4 rounded-lg">
        <h4 className="font-medium text-green-900 mb-2 flex items-center gap-2">
          <Sparkles className="w-4 h-4" />
          Audio Recommendations
        </h4>
        <ul className="space-y-1">
          {data.audio.recommendations.map((rec, index) => (
            <li key={index} className="text-sm text-green-800 flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              {rec}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  const renderFilterAnalysis = () => (
    <div className="space-y-6">
      {/* Score Display */}
      <div className="text-center">
        <div className={`text-6xl font-bold ${getScoreColor(data.filter.score)} mb-2`}>
          {data.filter.score}
        </div>
        <div className={`text-sm px-4 py-2 rounded-full inline-block ${getScoreBg(data.filter.score)} ${getScoreColor(data.filter.score)}`}>
          {getScoreLabel(data.filter.score)}
        </div>
      </div>

      {/* Filter Metrics */}
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center p-4 bg-orange-50 rounded-lg">
          <Filter className="w-8 h-8 text-orange-600 mx-auto mb-2" />
          <div className="text-lg font-bold text-orange-600">{data.filter.filterCount}</div>
          <div className="text-xs text-orange-600">Total Filters</div>
        </div>
        <div className="text-center p-4 bg-yellow-50 rounded-lg">
          <Palette className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
          <div className="text-lg font-bold text-yellow-600">{data.filter.beautyFilters}</div>
          <div className="text-xs text-yellow-600">Beauty Filters</div>
        </div>
      </div>

      {/* Detailed Analysis */}
      <div className="space-y-3">
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <span className="font-medium">Filter Types</span>
          <span className="text-sm text-gray-600">{data.filter.filterTypes.join(', ')}</span>
        </div>
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <span className="font-medium">Natural Lighting</span>
          <span className="text-sm text-gray-600">
            {data.filter.naturalLighting ? 'Yes' : 'No'}
          </span>
        </div>
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <span className="font-medium">Color Enhancement</span>
          <span className="text-sm text-gray-600">
            {data.filter.colorEnhancement ? 'Applied' : 'None'}
          </span>
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-yellow-50 p-4 rounded-lg">
        <h4 className="font-medium text-yellow-900 mb-2 flex items-center gap-2">
          <Sparkles className="w-4 h-4" />
          Filter Recommendations
        </h4>
        <ul className="space-y-1">
          {data.filter.recommendations.map((rec, index) => (
            <li key={index} className="text-sm text-yellow-800 flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
              {rec}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  const renderContentAnalysis = () => (
    <div className="space-y-6">
      {/* Score Display */}
      <div className="text-center">
        <div className={`text-6xl font-bold ${getScoreColor(data.content.score)} mb-2`}>
          {data.content.score}
        </div>
        <div className={`text-sm px-4 py-2 rounded-full inline-block ${getScoreBg(data.content.score)} ${getScoreColor(data.content.score)}`}>
          {getScoreLabel(data.content.score)}
        </div>
      </div>

      {/* Content Metrics */}
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center p-4 bg-purple-50 rounded-lg">
          <Brain className="w-8 h-8 text-purple-600 mx-auto mb-2" />
          <div className="text-lg font-bold text-purple-600">{data.content.creativityScore}</div>
          <div className="text-xs text-purple-600">Creativity Score</div>
        </div>
        <div className="text-center p-4 bg-indigo-50 rounded-lg">
          <Shield className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
          <div className="text-lg font-bold text-indigo-600">{data.content.educationalValue}</div>
          <div className="text-xs text-indigo-600">Educational Value</div>
        </div>
      </div>

      {/* Detailed Analysis */}
      <div className="space-y-3">
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <span className="font-medium">Originality</span>
          <span className="text-sm text-gray-600">{data.content.originality}</span>
        </div>
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <span className="font-medium">Duplicate Check</span>
          <span className="text-sm text-gray-600">{data.content.duplicateCheck}</span>
        </div>
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <span className="font-medium">Content Quality</span>
          <span className="text-sm text-gray-600">{data.content.contentQuality}</span>
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-blue-50 p-4 rounded-lg">
        <h4 className="font-medium text-blue-900 mb-2 flex items-center gap-2">
          <Sparkles className="w-4 h-4" />
          Content Recommendations
        </h4>
        <ul className="space-y-1">
          {data.content.recommendations.map((rec, index) => (
            <li key={index} className="text-sm text-blue-800 flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
              {rec}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="flex gap-2">
        <Button
          variant={currentTab === 'audio' ? 'default' : 'outline'}
          onClick={() => onTabChange('audio')}
          className="flex-1"
        >
          <Music className="w-4 h-4 mr-2" />
          Audio Analysis
        </Button>
        <Button
          variant={currentTab === 'filter' ? 'default' : 'outline'}
          onClick={() => onTabChange('filter')}
          className="flex-1"
        >
          <Filter className="w-4 h-4 mr-2" />
          Filter Analysis
        </Button>
        <Button
          variant={currentTab === 'content' ? 'default' : 'outline'}
          onClick={() => onTabChange('content')}
          className="flex-1"
        >
          <FileText className="w-4 h-4 mr-2" />
          Content Analysis
        </Button>
      </div>

      {/* Tab Content */}
      <Card>
        <CardHeader>
          <CardTitle className="capitalize flex items-center gap-2">
            {currentTab === 'audio' && <Music className="w-5 h-5 text-green-500" />}
            {currentTab === 'filter' && <Filter className="w-5 h-5 text-orange-500" />}
            {currentTab === 'content' && <FileText className="w-5 h-5 text-blue-500" />}
            {currentTab} Analysis
          </CardTitle>
        </CardHeader>
        <CardContent>
          {currentTab === 'audio' && renderAudioAnalysis()}
          {currentTab === 'filter' && renderFilterAnalysis()}
          {currentTab === 'content' && renderContentAnalysis()}
        </CardContent>
      </Card>
    </div>
  );
}
