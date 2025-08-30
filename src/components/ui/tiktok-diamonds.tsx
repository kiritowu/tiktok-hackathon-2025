"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './card';
import { Button } from './button';
import { 
  Gem, 
  TrendingUp, 
  Info, 
  X,
  CheckCircle,
  AlertTriangle,
  Star,
  Zap
} from 'lucide-react';

interface TikTokDiamondsProps {
  currentDiamonds: number;
  monthlyEarnings: number;
  authenticityScore: number;
  tvsScore: number;
}

export function TikTokDiamonds({ 
  currentDiamonds, 
  monthlyEarnings, 
  authenticityScore, 
  tvsScore 
}: TikTokDiamondsProps) {
  const [showExplanation, setShowExplanation] = useState(false);

  const getDiamondMultiplier = () => {
    if (authenticityScore >= 90) return 2.0;
    if (authenticityScore >= 80) return 1.5;
    if (authenticityScore >= 70) return 1.2;
    return 1.0;
  };

  const getEarningsProjection = () => {
    const multiplier = getDiamondMultiplier();
    return monthlyEarnings * multiplier;
  };

  const getAuthenticityTier = () => {
    if (authenticityScore >= 90) return { name: 'Elite Creator', color: 'text-purple-600', bg: 'bg-purple-50' };
    if (authenticityScore >= 80) return { name: 'Authentic Creator', color: 'text-blue-600', bg: 'bg-blue-50' };
    if (authenticityScore >= 70) return { name: 'Growing Creator', color: 'text-green-600', bg: 'bg-green-50' };
    return { name: 'Emerging Creator', color: 'text-orange-600', bg: 'bg-orange-50' };
  };

  const tier = getAuthenticityTier();
  const multiplier = getDiamondMultiplier();
  const projectedEarnings = getEarningsProjection();

  return (
    <>
      <Card className="border-0 shadow-sm bg-gradient-to-br from-purple-50 to-pink-50">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Gem className="w-5 h-5 text-purple-600" />
            TikTok Diamonds
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Current Diamonds */}
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-1">
              {currentDiamonds.toLocaleString()}
            </div>
            <p className="text-sm text-gray-600">Current Diamonds</p>
          </div>

          {/* Monthly Earnings */}
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 mb-1">
              ${monthlyEarnings.toLocaleString()}
            </div>
            <p className="text-sm text-gray-600">Monthly Earnings</p>
          </div>

          {/* Authenticity Multiplier */}
          <div className={`text-center p-3 rounded-xl ${tier.bg}`}>
            <div className="text-sm font-medium text-gray-600 mb-1">Authenticity Multiplier</div>
            <div className="text-xl font-bold text-purple-600 mb-1">
              {multiplier}x
            </div>
            <div className={`text-sm font-medium ${tier.color}`}>
              {tier.name}
            </div>
          </div>

          {/* Projected Earnings */}
          <div className="text-center p-3 bg-white rounded-xl border border-purple-200">
            <div className="text-sm font-medium text-gray-600 mb-1">Projected Earnings</div>
            <div className="text-xl font-bold text-green-600 mb-1">
              ${projectedEarnings.toLocaleString()}
            </div>
            <p className="text-xs text-gray-500">With authenticity bonus</p>
          </div>

          {/* Learn More Button */}
          <Button 
            onClick={() => setShowExplanation(true)}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white"
          >
            <Info className="w-4 h-4 mr-2" />
            How Diamonds Are Calculated
          </Button>
        </CardContent>
      </Card>

      {/* Explanation Modal */}
      {showExplanation && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-md max-h-[90vh] overflow-y-auto">
            <CardHeader className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Gem className="w-5 h-5 text-purple-600" />
                Diamond Calculation
              </CardTitle>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setShowExplanation(false)}
              >
                <X className="w-4 h-4" />
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-sm text-gray-600">
                TikTok Diamonds are calculated based on your content's authenticity and engagement quality, not just views.
              </div>

              {/* Formula */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-sm font-medium text-gray-700 mb-2">Formula:</div>
                <div className="text-lg font-mono text-purple-600">
                  Diamonds = Base Earnings × Authenticity Multiplier
                </div>
              </div>

              {/* Multiplier Tiers */}
              <div className="space-y-3">
                <div className="text-sm font-medium text-gray-700">Multiplier Tiers:</div>
                
                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-purple-600" />
                    <span className="text-sm font-medium">Elite Creator</span>
                  </div>
                  <div className="text-sm font-bold text-purple-600">2.0x</div>
                </div>

                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-medium">Authentic Creator</span>
                  </div>
                  <div className="text-sm font-bold text-blue-600">1.5x</div>
                </div>

                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium">Growing Creator</span>
                  </div>
                  <div className="text-sm font-bold text-green-600">1.2x</div>
                </div>

                <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-orange-600" />
                    <span className="text-sm font-medium">Emerging Creator</span>
                  </div>
                  <div className="text-sm font-bold text-orange-600">1.0x</div>
                </div>
              </div>

              {/* Your Current Status */}
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="text-sm font-medium text-gray-700 mb-2">Your Current Status:</div>
                <div className="flex items-center justify-between">
                  <span className={`text-sm font-medium ${tier.color}`}>
                    {tier.name}
                  </span>
                  <span className="text-sm font-bold text-purple-600">
                    {multiplier}x Multiplier
                  </span>
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Authenticity Score: {authenticityScore}/100
                </div>
              </div>

              {/* Tips */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-sm font-medium text-blue-700 mb-2 flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Tips to Increase Diamonds:
                </div>
                <ul className="text-xs text-blue-600 space-y-1">
                  <li>• Use original audio instead of trending sounds</li>
                  <li>• Minimize beauty filters and effects</li>
                  <li>• Create educational or meaningful content</li>
                  <li>• Engage genuinely with your community</li>
                  <li>• Avoid clickbait and misleading titles</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}
