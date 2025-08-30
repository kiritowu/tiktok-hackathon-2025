"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './card';
import { 
  TrendingUp, 
  Clock, 
  Share2, 
  Heart, 
  Shield, 
  Users, 
  Star,
  BarChart3
} from 'lucide-react';

interface TVSBreakdownProps {
  tvsData: {
    tvs: number;
    tvsBreakdown: {
      engagementComponent: number;
      watchTimeComponent: number;
      rippleComponent: number;
      sentimentComponent: number;
      authenticityBonus: number;
      diversityBonus: number;
      socialGoodBonus: number;
    };
    engagement: number;
    watchTimeFactor: number;
    rippleEffect: number;
    sentiment: number;
    authenticityScore: number;
    diversityScore: number;
    socialGoodScore: number;
  };
}

export function TVSBreakdown({ tvsData }: TVSBreakdownProps) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-blue-600';
    if (score >= 40) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBg = (score: number) => {
    if (score >= 80) return 'bg-green-50';
    if (score >= 60) return 'bg-blue-50';
    if (score >= 40) return 'bg-yellow-50';
    return 'bg-red-50';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 80) return 'Excellent';
    if (score >= 60) return 'Good';
    if (score >= 40) return 'Fair';
    return 'Needs Improvement';
  };

  return (
    <Card className="border-0 shadow-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <BarChart3 className="w-5 h-5 text-blue-600" />
          TVS Breakdown
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Main TVS Score */}
        <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl">
          <div className="text-5xl font-bold text-blue-600 mb-2">
            {tvsData.tvs.toFixed(1)}
          </div>
          <div className="text-lg font-medium text-gray-700 mb-2">TikTok Value Score</div>
          <div className="inline-block px-4 py-2 bg-blue-100 rounded-full">
            <span className="text-blue-700 font-medium text-sm">
              {getScoreLabel(tvsData.tvs)}
            </span>
          </div>
        </div>

        {/* Formula Display */}
        <div className="bg-gray-50 p-4 rounded-xl">
          <div className="text-sm font-medium text-gray-700 mb-2">TVS Formula:</div>
          <div className="text-lg font-mono text-gray-800 text-center">
            TVS = (E × W) + (R × S) + A + D + SG
          </div>
          <div className="text-xs text-gray-500 text-center mt-1">
            E=Engagement, W=Watch Time, R=Ripple, S=Sentiment, A=Authenticity, D=Diversity, SG=Social Good
          </div>
        </div>

        {/* Component Breakdown */}
        <div className="space-y-4">
          <div className="text-sm font-medium text-gray-700">Component Breakdown:</div>
          
          {/* Engagement Component */}
          <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-medium text-gray-900">Engagement × Watch Time</div>
                <div className="text-sm text-gray-600">
                  {tvsData.engagement.toFixed(1)} × {tvsData.watchTimeFactor.toFixed(1)}
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className={`font-bold ${getScoreColor(tvsData.tvsBreakdown.engagementComponent)}`}>
                {tvsData.tvsBreakdown.engagementComponent.toFixed(1)}
              </div>
              <div className="text-xs text-gray-500">Component</div>
            </div>
          </div>

          {/* Ripple Component */}
          <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <Share2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-medium text-gray-900">Ripple Effect × Sentiment</div>
                <div className="text-sm text-gray-600">
                  {tvsData.rippleEffect.toFixed(1)} × {tvsData.sentiment.toFixed(1)}
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className={`font-bold ${getScoreColor(tvsData.tvsBreakdown.rippleComponent)}`}>
                {tvsData.tvsBreakdown.rippleComponent.toFixed(1)}
              </div>
              <div className="text-xs text-gray-500">Component</div>
            </div>
          </div>

          {/* Authenticity Bonus */}
          <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-medium text-gray-900">Authenticity Bonus</div>
                <div className="text-sm text-gray-600">
                  Score: {tvsData.authenticityScore.toFixed(1)}/100
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className={`font-bold ${getScoreColor(tvsData.tvsBreakdown.authenticityBonus)}`}>
                +{tvsData.tvsBreakdown.authenticityBonus.toFixed(1)}
              </div>
              <div className="text-xs text-gray-500">Bonus</div>
            </div>
          </div>

          {/* Diversity Bonus */}
          <div className="flex items-center justify-between p-3 bg-indigo-50 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-medium text-gray-900">Diversity Bonus</div>
                <div className="text-sm text-gray-600">
                  Score: {tvsData.diversityScore.toFixed(1)}/100
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className={`font-bold ${getScoreColor(tvsData.tvsBreakdown.diversityBonus)}`}>
                +{tvsData.tvsBreakdown.diversityBonus.toFixed(1)}
              </div>
              <div className="text-xs text-gray-500">Bonus</div>
            </div>
          </div>

          {/* Social Good Bonus */}
          <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
                <Star className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-medium text-gray-900">Social Good Bonus</div>
                <div className="text-sm text-gray-600">
                  Score: {tvsData.socialGoodScore.toFixed(1)}/100
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className={`font-bold ${getScoreColor(tvsData.tvsBreakdown.socialGoodBonus)}`}>
                +{tvsData.tvsBreakdown.socialGoodBonus.toFixed(1)}
              </div>
              <div className="text-xs text-gray-500">Bonus</div>
            </div>
          </div>
        </div>

        {/* Individual Scores */}
        <div className="grid grid-cols-2 gap-4">
          <div className={`text-center p-4 rounded-xl ${getScoreBg(tvsData.engagement)}`}>
            <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <div className={`text-2xl font-bold ${getScoreColor(tvsData.engagement)}`}>
              {tvsData.engagement.toFixed(1)}
            </div>
            <div className="text-sm text-gray-600">Engagement</div>
          </div>

          <div className={`text-center p-4 rounded-xl ${getScoreBg(tvsData.watchTimeFactor)}`}>
            <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className={`text-2xl font-bold ${getScoreColor(tvsData.watchTimeFactor)}`}>
              {tvsData.watchTimeFactor.toFixed(1)}
            </div>
            <div className="text-sm text-gray-600">Watch Time</div>
          </div>

          <div className={`text-center p-4 rounded-xl ${getScoreBg(tvsData.rippleEffect)}`}>
            <Share2 className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <div className={`text-2xl font-bold ${getScoreColor(tvsData.rippleEffect)}`}>
              {tvsData.rippleEffect.toFixed(1)}
            </div>
            <div className="text-sm text-gray-600">Ripple Effect</div>
          </div>

          <div className={`text-center p-4 rounded-xl ${getScoreBg(tvsData.sentiment)}`}>
            <Heart className="w-8 h-8 text-red-600 mx-auto mb-2" />
            <div className={`text-2xl font-bold ${getScoreColor(tvsData.sentiment)}`}>
              {tvsData.sentiment.toFixed(1)}
            </div>
            <div className="text-sm text-gray-600">Sentiment</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
