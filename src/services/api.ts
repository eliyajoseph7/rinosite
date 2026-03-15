// const API_BASE_URL = 'http://127.0.0.1:8001/api/v1';
const API_BASE_URL = 'https://rinoadmin.infonex.co.tz/api/v1';

// API Response Types
export interface HeroSection {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  cta_primary_text: string;
  cta_primary_link: string;
  cta_secondary_text: string;
  cta_secondary_link: string;
  trust_badge_text: string;
  is_active: boolean;
}

export interface Feature {
  id: number;
  icon: string;
  title: string;
  description: string;
  color?: string;
  bg_color?: string;
  gradient?: string;
  stats?: string;
  order: number;
  is_active: boolean;
}

export interface SubFeature {
  name: string;
  icon: string;
  description: string;
}

export interface FeatureCategory {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  gradient: string;
  bg: string;
  stats: string;
  features: SubFeature[];
  order: number;
  is_active: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
  stats: string;
  order: number;
  is_active: boolean;
}

export interface VideoTutorial {
  id: number;
  title: string;
  duration: string;
  thumbnail: string;
  level: string;
  icon: string;
  description: string;
  video_url: string;
  order: number;
  is_active: boolean;
}

export interface Benefit {
  id: number;
  text: string;
  icon: string;
  order: number;
  is_active: boolean;
}

export interface Metric {
  id: number;
  value: string;
  label: string;
  icon: string;
  order: number;
  is_active: boolean;
}

export interface PricingFeature {
  text: string;
  icon: string;
}

export interface PricingPlan {
  id: number;
  slug: string;
  name: string;
  tagline: string;
  monthlyPrice: number;
  annualPrice: number;
  description: string;
  popular: boolean;
  color: string;
  gradient: string;
  bg: string;
  features: PricingFeature[];
  notIncluded?: string[];
  order: number;
  is_active: boolean;
}

export interface DownloadPlatform {
  id: number;
  slug: string;
  platform: string;
  description: string;
  version: string;
  size: string;
  requirements: string;
  rating: number;
  reviews: string;
  color: string;
  gradient: string;
  bg: string;
  icon: string;
  storeLink: string;
  storeName: string;
  features: string[];
  deviceCount: string;
  order: number;
  is_active: boolean;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
  icon: string;
  category: string;
  order: number;
  is_active: boolean;
}

export interface VideoGroup {
  id: string;
  name: string;
  icon: string;
  color: string;
  gradient: string;
  description: string;
  count: number;
  bg: string;
}

export interface VideoCategory {
  id: number;
  name: string;
  slug: string;
  description: string;
  color: string;
  icon: string;
  sort_order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Video {
  id: number;
  title: string;
  description: string;
  duration: string;
  category: VideoCategory;
  group: string | null;
  video_group_id: string | null;
  thumbnail: string | null;
  icon: string;
  views: string;
  likes: string;
  formatted_likes: string;
  featured: boolean;
  rating: number;
  instructor: string;
  instructor_avatar: string;
  benefit?: string;
  video_url?: string;
  file_size?: string;
  features_covered?: string[];
  tags?: string[];
  published_at?: string;
}

export interface VideoStats {
  total_videos: number;
  total_views: string;
  total_likes: string;
  avg_rating: number;
  satisfaction: string;
}


// API Service Class
class ApiService {
  private async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${API_BASE_URL}${endpoint}`;
    
    try {
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          ...options?.headers,
        },
        ...options,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`API request failed for ${endpoint}:`, error);
      throw error;
    }
  }

  // Hero Section API
  async getHeroSection(): Promise<HeroSection> {
    return this.request<HeroSection>('/hero-section');
  }

  // Features API
  async getFeatures(): Promise<Feature[]> {
    return this.request<Feature[]>('/features');
  }

  // Feature Categories API (for features page)
  async getFeatureCategories(): Promise<FeatureCategory[]> {
    return this.request<FeatureCategory[]>('/features');
  }

  // Testimonials API
  async getTestimonials(): Promise<Testimonial[]> {
    return this.request<Testimonial[]>('/testimonials');
  }

  // Video Tutorials API
  async getVideoTutorials(): Promise<VideoTutorial[]> {
    return this.request<VideoTutorial[]>('/video-tutorials');
  }

  // Benefits API
  async getBenefits(): Promise<Benefit[]> {
    return this.request<Benefit[]>('/benefits');
  }

  // Metrics API
  async getMetrics(): Promise<Metric[]> {
    return this.request<Metric[]>('/metrics');
  }

  // Homepage Data (Combined API call)
  async getHomepageData(): Promise<{
    hero: HeroSection;
    features: Feature[];
    testimonials: Testimonial[];
    videos: VideoTutorial[];
    benefits: Benefit[];
    metrics: Metric[];
  }> {
    return this.request('/homepage');
  }

  // Pricing Plans API
  async getPricingPlans(): Promise<PricingPlan[]> {
    return this.request<PricingPlan[]>('/pricing');
  }

  // Download Platforms API
  async getDownloadPlatforms(): Promise<DownloadPlatform[]> {
    return this.request<DownloadPlatform[]>('/download-platforms');
  }

  // FAQ API
  async getFAQs(): Promise<FAQ[]> {
    return this.request<FAQ[]>('/faqs');
  }

  // Videos API
  async getVideos(params?: { category?: string; group?: string; search?: string; page?: number; per_page?: number }): Promise<Video[]> {
    const queryParams = new URLSearchParams();
    if (params?.category) queryParams.append('category', params.category);
    if (params?.group) queryParams.append('group', params.group);
    if (params?.search) queryParams.append('search', params.search);
    if (params?.page) queryParams.append('page', params.page.toString());
    if (params?.per_page) queryParams.append('per_page', params.per_page.toString());
    
    const queryString = queryParams.toString();
    return this.request<Video[]>(`/videos${queryString ? `?${queryString}` : ''}`);
  }

  async getVideo(id: number): Promise<{ video: Video; related_videos: Video[]; category_name: string }> {
    return this.request(`/videos/${id}`);
  }

  async getVideoGroups(): Promise<VideoGroup[]> {
    return this.request<VideoGroup[]>('/videos/groups');
  }

  async getVideoStats(): Promise<VideoStats> {
    return this.request<VideoStats>('/videos/stats');
  }

  async likeVideo(id: number): Promise<{ likes_count: number; formatted_likes: string }> {
    return this.request(`/videos/${id}/like`, { method: 'POST' });
  }
}

// Export singleton instance
export const apiService = new ApiService();
export default apiService;
