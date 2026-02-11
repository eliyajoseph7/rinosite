import { useState, useEffect } from 'react';
import type { VideoGroup } from '../services/api';
import { apiService } from '../services/api';

interface UseVideoGroupsReturn {
  data: VideoGroup[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export const useVideoGroups = (): UseVideoGroupsReturn => {
  const [data, setData] = useState<VideoGroup[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await apiService.getVideoGroups();
      // Handle wrapped response from API
      const groups = (response as any)?.data || response;
      setData(groups);
    } catch (err) {
      console.error('Failed to fetch video groups:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch video groups');
      setData([]);
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
