import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './card';
import { 
  CheckCircle, 
  BarChart3, 
  TrendingUp, 
  Users, 
  Heart, 
  MessageCircle, 
  Share2,
  Clock,
  Sparkles,
  AlertTriangle
} from 'lucide-react';

interface AuthenticityScoreProps {
  data: {
    overallScore: number;
    engagement: number;
    watchTimeFactor: number;
    rippleEffect: number;
    sentiment: number;
    authenticityBonus: number;
    tvs: number;
  };
  showDetails?: boolean;
}

export function AuthenticityScore({ data, showDetails = true }: AuthenticityScoreProps) {
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

  const getSentimentIcon = (sentiment: number) => {
    if (sentiment >= 80) return <Heart className="w-5 h-5 text-red-500" />;
    if (sentiment >= 60) return <MessageCircle className="w-5 h-5 text-blue-500" />;
    return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
  };

  return (
    <div className="space-y-6">
      {/* Main TVS Score */}
      <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-blue-900">TikTok Value Score (TVS)</CardTitle>
          <div className="text-6xl font-bold text-blue-600 mb-2">{data.tvs}</div>
          <div className="text-sm px-4 py-2 rounded-full inline-block bg-blue-100 text-blue-700">
            {getScoreLabel(data.tvs)}
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-center text-sm text-blue-700">
            <p>Composite metric combining engagement, authenticity, and community impact</p>
          </div>
        </CardContent>
      </Card>

      {showDetails && (
        <>
          {/* Authenticity Score */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                Authenticity Score
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className={`text-4xl font-bold ${getScoreColor(data.overallScore)} mb-2`}>
                  {data.overallScore}
                </div>
                <div className={`text-sm px-3 py-1 rounded-full inline-block ${getScoreBg(data.overallScore)} ${getScoreColor(data.overallScore)}`}>
                  {getScoreLabel(data.overallScore)}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Engagement Metrics */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-purple-500" />
                Engagement Metrics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-purple-50 rounded-lg">
                  <Heart className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                  <div className="text-lg font-bold text-purple-600">{data.engagement}%</div>
                  <div className="text-xs text-purple-600">Engagement Rate</div>
                </div>
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <Clock className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <div className="text-lg font-bold text-blue-600">{data.watchTimeFactor}</div>
                  <div className="text-xs text-blue-600">Watch Time Factor</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Impact Metrics */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-orange-500" />
                Impact Metrics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-orange-50 rounded-lg">
                  <Share2 className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                  <div className="text-lg font-bold text-orange-600">{data.rippleEffect}</div>
                  <div className="text-xs text-orange-600">Ripple Effect</div>
                </div>
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  {getSentimentIcon(data.sentiment)}
                  <div className="text-lg font-bold text-green-600 mt-2">{data.sentiment}%</div>
                  <div className="text-xs text-green-600">Positive Sentiment</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Formula Breakdown */}
          <Card className="bg-gray-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gray-700">
                <Sparkles className="w-5 h-5 text-gray-600" />
                TVS Formula
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-gray-600 space-y-2">
                <p><strong>TVS = (Engagement × WatchTimeFactor) + (RippleEffect × Sentiment) + AuthenticityBonus</strong></p>
                <div className="bg-white p-3 rounded-lg text-xs font-mono">
                  <div>Engagement: {data.engagement}%</div>
                  <div>WatchTimeFactor: {data.watchTimeFactor}</div>
                  <div>RippleEffect: {data.rippleEffect}</div>
                  <div>Sentiment: {data.sentiment}%</div>
                  <div>AuthenticityBonus: +{data.authenticityBonus}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}
