import { useState, useEffect } from 'react';
import type { Video } from '../services/api';
import { apiService } from '../services/api';

interface UseVideoReturn {
  data: {
    video: Video | null;
    relatedVideos: Video[];
    categoryName: string;
  };
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export const useVideo = (id: number): UseVideoReturn => {
  const [data, setData] = useState<{
    video: Video | null;
    relatedVideos: Video[];
    categoryName: string;
  }>({
    video: null,
    relatedVideos: [],
    categoryName: '',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await apiService.getVideo(id);
      // Handle wrapped response from API
      const videoData = (response as any)?.data || response;
      
      setData({
        video: videoData.video,
        relatedVideos: videoData.related_videos || [],
        categoryName: videoData.category_name || '',
      });
    } catch (err) {
      console.error('Failed to fetch video:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch video');
      setData({
        video: null,
        relatedVideos: [],
        categoryName: '',
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchData();
    }
  }, [id]);

  const refetch = async () => {
    await fetchData();
  };

  return {
    data,
    loading,
    error,
    refetch,
  };
};
