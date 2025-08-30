export interface TVSData {
  // Raw metrics
  views: number;
  likes: number;
  comments: number;
  shares: number;
  watchTime: number; // in seconds
  videoLength: number; // in seconds
  stitches: number;
  duets: number;
  remixes: number;
  
  // Calculated scores
  engagement: number;
  watchTimeFactor: number;
  rippleEffect: number;
  sentiment: number;
  authenticityScore: number;
  diversityScore: number;
  socialGoodScore: number;
  
  // Final TVS
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
}

export interface AuthenticityFactors {
  audio: {
    originalAudio: boolean;
    musicDetection: string;
    voiceClarity: string;
    backgroundNoise: string;
    audioQuality: string;
    duration: string;
    score: number;
  };
  filter: {
    filterCount: number;
    filterTypes: string[];
    naturalLighting: boolean;
    beautyFilters: number;
    colorEnhancement: boolean;
    saturation: string;
    brightness: string;
    score: number;
  };
  content: {
    originality: string;
    duplicateCheck: string;
    contentQuality: string;
    educationalValue: number;
    creativityScore: number;
    contentLength: string;
    category: string;
    score: number;
  };
}

export class TVSCalculator {
  private static readonly WEIGHTS = {
    engagement: 0.25,
    watchTime: 0.20,
    rippleEffect: 0.20,
    sentiment: 0.15,
    authenticity: 0.20,
  };

  static calculateTVS(rawData: Partial<TVSData>): TVSData {
    const data = this.normalizeData(rawData);
    
    // Calculate individual components
    const engagement = this.calculateEngagement(data);
    const watchTimeFactor = this.calculateWatchTimeFactor(data);
    const rippleEffect = this.calculateRippleEffect(data);
    const sentiment = this.calculateSentiment(data);
    const authenticityScore = this.calculateAuthenticityScore(data);
    const diversityScore = this.calculateDiversityScore(data);
    const socialGoodScore = this.calculateSocialGoodScore(data);

    // Calculate TVS using the formula
    const tvs = this.calculateFinalTVS({
      engagement,
      watchTimeFactor,
      rippleEffect,
      sentiment,
      authenticityScore,
      diversityScore,
      socialGoodScore,
    });

    return {
      ...data,
      engagement,
      watchTimeFactor,
      rippleEffect,
      sentiment,
      authenticityScore,
      diversityScore,
      socialGoodScore,
      tvs,
      tvsBreakdown: this.calculateTVSBreakdown({
        engagement,
        watchTimeFactor,
        rippleEffect,
        sentiment,
        authenticityScore,
        diversityScore,
        socialGoodScore,
      }),
    };
  }

  private static normalizeData(data: Partial<TVSData>): TVSData {
    return {
      views: data.views || 0,
      likes: data.likes || 0,
      comments: data.comments || 0,
      shares: data.shares || 0,
      watchTime: data.watchTime || 0,
      videoLength: data.videoLength || 1,
      stitches: data.stitches || 0,
      duets: data.duets || 0,
      remixes: data.remixes || 0,
      engagement: 0,
      watchTimeFactor: 0,
      rippleEffect: 0,
      sentiment: 0,
      authenticityScore: 0,
      diversityScore: 0,
      socialGoodScore: 0,
      tvs: 0,
      tvsBreakdown: {
        engagementComponent: 0,
        watchTimeComponent: 0,
        rippleComponent: 0,
        sentimentComponent: 0,
        authenticityBonus: 0,
        diversityBonus: 0,
        socialGoodBonus: 0,
      },
    };
  }

  private static calculateEngagement(data: TVSData): number {
    if (data.views === 0) return 0;
    
    // Weighted engagement: likes (40%), comments (35%), shares (25%)
    const weightedEngagement = 
      (data.likes * 0.4) + 
      (data.comments * 0.35) + 
      (data.shares * 0.25);
    
    // Normalize to 0-100 scale with more realistic scaling
    const engagementRate = (weightedEngagement / data.views) * 100;
    return Math.min(100, Math.max(0, engagementRate * 10)); // Scale up for better visibility
  }

  private static calculateWatchTimeFactor(data: TVSData): number {
    if (data.videoLength === 0) return 0;
    
    // Calculate completion rate
    const completionRate = data.watchTime / data.videoLength;
    
    // Weight completion rate heavily (70%) and raw watch time (30%)
    const completionScore = completionRate * 70;
    const watchTimeScore = Math.min(30, (data.watchTime / 60) * 10); // Cap at 30
    
    return Math.min(100, completionScore + watchTimeScore);
  }

  private static calculateRippleEffect(data: TVSData): number {
    // Weight different types of derivative content
    const weightedRipple = 
      (data.stitches * 0.4) + 
      (data.duets * 0.35) + 
      (data.remixes * 0.25);
    
    // Normalize to 0-100 scale with diminishing returns
    return Math.min(100, Math.log10(weightedRipple + 1) * 20);
  }

  private static calculateSentiment(data: TVSData): number {
    // This would typically come from NLP analysis of comments
    // For now, we'll use a placeholder calculation based on engagement quality
    const positiveRatio = 0.7; // Assume 70% positive comments
    return positiveRatio * 100;
  }

  private static calculateAuthenticityScore(data: TVSData): number {
    // This would be calculated from the AuthenticityFactors
    // For now, return a placeholder score
    return 85; // Placeholder
  }

  private static calculateDiversityScore(data: TVSData): number {
    // This would analyze user demographics and geographic diversity
    // For now, return a placeholder score
    return 75; // Placeholder
  }

  private static calculateSocialGoodScore(data: TVSData): number {
    // This would analyze content for educational value, positive impact
    // For now, return a placeholder score
    return 80; // Placeholder
  }

  private static calculateFinalTVS(components: {
    engagement: number;
    watchTimeFactor: number;
    rippleEffect: number;
    sentiment: number;
    authenticityScore: number;
    diversityScore: number;
    socialGoodScore: number;
  }): number {
    // Main TVS formula: TVS = (E × W) + (R × S) + A + D + SG
    const engagementComponent = components.engagement * components.watchTimeFactor * 0.01;
    const rippleComponent = components.rippleEffect * components.sentiment * 0.01;
    const authenticityBonus = components.authenticityScore * 0.5;
    const diversityBonus = components.diversityScore * 0.3;
    const socialGoodBonus = components.socialGoodScore * 0.4;

    const tvs = engagementComponent + rippleComponent + authenticityBonus + diversityBonus + socialGoodBonus;
    
    // Normalize to 0-100 scale
    return Math.min(100, Math.max(0, tvs));
  }

  private static calculateTVSBreakdown(components: {
    engagement: number;
    watchTimeFactor: number;
    rippleEffect: number;
    sentiment: number;
    authenticityScore: number;
    diversityScore: number;
    socialGoodScore: number;
  }) {
    const engagementComponent = components.engagement * components.watchTimeFactor * 0.01;
    const rippleComponent = components.rippleEffect * components.sentiment * 0.01;
    const authenticityBonus = components.authenticityScore * 0.5;
    const diversityBonus = components.diversityScore * 0.3;
    const socialGoodBonus = components.socialGoodScore * 0.4;

    return {
      engagementComponent: Math.round(engagementComponent * 100) / 100,
      watchTimeComponent: Math.round(components.watchTimeFactor * 100) / 100,
      rippleComponent: Math.round(rippleComponent * 100) / 100,
      sentimentComponent: Math.round(components.sentiment * 100) / 100,
      authenticityBonus: Math.round(authenticityBonus * 100) / 100,
      diversityBonus: Math.round(diversityBonus * 100) / 100,
      socialGoodBonus: Math.round(socialGoodBonus * 100) / 100,
    };
  }

  static calculateAuthenticityFactors(audioData: any, filterData: any, contentData: any): AuthenticityFactors {
    const audioScore = this.calculateAudioScore(audioData);
    const filterScore = this.calculateFilterScore(filterData);
    const contentScore = this.calculateContentScore(contentData);

    return {
      audio: {
        ...audioData,
        score: audioScore,
      },
      filter: {
        ...filterData,
        score: filterScore,
      },
      content: {
        ...contentData,
        score: contentScore,
      },
    };
  }

  private static calculateAudioScore(audioData: any): number {
    let score = 50; // Base score

    // Original audio bonus
    if (audioData.originalAudio) score += 25;
    
    // Voice clarity scoring
    if (audioData.voiceClarity === 'High quality') score += 15;
    else if (audioData.voiceClarity === 'Medium quality') score += 10;
    else if (audioData.voiceClarity === 'Low quality') score += 5;
    
    // Background noise scoring
    if (audioData.backgroundNoise === 'Minimal') score += 10;
    else if (audioData.backgroundNoise === 'Moderate') score += 5;
    else if (audioData.backgroundNoise === 'High') score -= 5;
    
    // Audio quality bonus
    if (audioData.audioQuality && audioData.audioQuality.includes('HD')) score += 5;
    if (audioData.audioQuality && audioData.audioQuality.includes('320kbps')) score += 3;

    return Math.min(100, Math.max(0, score));
  }

  private static calculateFilterScore(filterData: any): number {
    let score = 100; // Start with perfect score

    // Deduct points for excessive filters
    score -= filterData.filterCount * 3; // Less harsh penalty
    score -= filterData.beautyFilters * 5; // Reduced penalty for beauty filters
    
    // Natural lighting bonus/penalty
    if (!filterData.naturalLighting) score -= 10;
    else score += 5;
    
    // Color enhancement penalty
    if (filterData.colorEnhancement) score -= 5;
    
    // Saturation and brightness penalties
    if (filterData.saturation === 'High') score -= 8;
    else if (filterData.saturation === 'Medium') score -= 3;
    
    if (filterData.brightness === 'Highly enhanced') score -= 10;
    else if (filterData.brightness === 'Slightly enhanced') score -= 5;

    return Math.max(0, score);
  }

  private static calculateContentScore(contentData: any): number {
    let score = 50; // Base score

    // Originality bonus
    if (contentData.originality === 'High') score += 20;
    else if (contentData.originality === 'Medium') score += 10;
    else if (contentData.originality === 'Low') score += 5;
    
    // Duplicate check bonus
    if (contentData.duplicateCheck === 'No duplicates found') score += 15;
    else if (contentData.duplicateCheck === 'Minor similarities') score += 8;
    else if (contentData.duplicateCheck === 'Potential duplicates') score -= 10;
    
    // Content quality bonus
    if (contentData.contentQuality === 'Educational value') score += 10;
    else if (contentData.contentQuality === 'Entertainment') score += 5;
    else if (contentData.contentQuality === 'Low value') score -= 5;
    
    // Educational and creativity scores
    score += contentData.educationalValue * 1.5;
    score += contentData.creativityScore * 1.5;
    
    // Content length bonus (optimal length)
    if (contentData.contentLength) {
      const duration = parseInt(contentData.contentLength);
      if (duration >= 15 && duration <= 60) score += 5; // Optimal TikTok length
      else if (duration > 60) score += 2; // Longer content
      else score += 1; // Short content
    }
    
    // Category bonus
    if (contentData.category === 'Educational') score += 5;
    else if (contentData.category === 'Creative') score += 3;

    return Math.min(100, Math.max(0, score));
  }

  // Generate sample data for demonstration
  static generateSampleData(): TVSData {
    return this.calculateTVS({
      views: 2500000,
      likes: 125000,
      comments: 8500,
      shares: 3200,
      watchTime: 45,
      videoLength: 60,
      stitches: 156,
      duets: 89,
      remixes: 45,
    });
  }

  // Generate sample authenticity factors
  static generateSampleAuthenticityFactors(): AuthenticityFactors {
    return {
      audio: {
        originalAudio: true,
        musicDetection: "Original composition",
        voiceClarity: "High quality",
        backgroundNoise: "Minimal",
        audioQuality: "HD (320kbps)",
        duration: "45 seconds",
        score: 92,
      },
      filter: {
        filterCount: 3,
        filterTypes: ["Beauty", "Color", "Lighting"],
        naturalLighting: false,
        beautyFilters: 2,
        colorEnhancement: true,
        saturation: "Medium",
        brightness: "Slightly enhanced",
        score: 78,
      },
      content: {
        originality: "High",
        duplicateCheck: "No duplicates found",
        contentQuality: "Educational value",
        educationalValue: 8,
        creativityScore: 7,
        contentLength: "45 seconds",
        category: "Educational",
        score: 85,
      },
    };
  }
}
