import { useState, useEffect } from 'react';
import { apiService } from '../services/api';
import type { HeroSection, Feature, Testimonial, VideoTutorial, Benefit, Metric } from '../services/api';

interface HomepageData {
  hero: HeroSection | null;
  features: Feature[];
  testimonials: Testimonial[];
  videos: VideoTutorial[];
  benefits: Benefit[];
  metrics: Metric[];
}

interface UseHomepageDataReturn {
  data: HomepageData;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export const useHomepageData = (): UseHomepageDataReturn => {
  const [data, setData] = useState<HomepageData>({
    hero: null,
    features: [],
    testimonials: [],
    videos: [],
    benefits: [],
    metrics: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Try to fetch combined homepage data first
      try {
        const homepageResponse = await apiService.getHomepageData();
        // Handle wrapped response from homepage endpoint
        const homepageData = (homepageResponse as any)?.data || homepageResponse;
        setData(homepageData);
      } catch (combinedError) {
        // Fallback to individual API calls if combined endpoint doesn't exist
        console.warn('Combined homepage API not available, falling back to individual calls');
        
        const [heroResponse, featuresResponse, testimonialsResponse, videosResponse, benefitsResponse, metricsResponse] = await Promise.all([
          apiService.getHeroSection().catch(() => null),
          apiService.getFeatures().catch(() => []),
          apiService.getTestimonials().catch(() => []),
          apiService.getVideoTutorials().catch(() => []),
          apiService.getBenefits().catch(() => []),
          apiService.getMetrics().catch(() => []),
        ]);

        // Handle wrapped responses from individual API endpoints
        const hero = (heroResponse as any)?.data || heroResponse;
        const features = (featuresResponse as any)?.data || featuresResponse;
        const testimonials = (testimonialsResponse as any)?.data || testimonialsResponse;
        const videos = (videosResponse as any)?.data || videosResponse;
        const benefits = (benefitsResponse as any)?.data || benefitsResponse;
        const metrics = (metricsResponse as any)?.data || metricsResponse;

        setData({
          hero,
          features,
          testimonials,
          videos,
          benefits,
          metrics,
        });
      }
    } catch (err) {
      console.error('Failed to fetch homepage data:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
    loading,
    error,
    refetch: fetchData,
  };
};

export default useHomepageData;
