import { useState, useEffect } from 'react';
import type { VideoStats } from '../services/api';
import { apiService } from '../services/api';

interface UseVideoStatsReturn {
  data: VideoStats | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export const useVideoStats = (): UseVideoStatsReturn => {
  const [data, setData] = useState<VideoStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await apiService.getVideoStats();
      // Handle wrapped response from API
      const stats = (response as any)?.data || response;
      setData(stats);
    } catch (err) {
      console.error('Failed to fetch video stats:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch video stats');
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
