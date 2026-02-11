import { useState, useEffect } from 'react';
import type { DownloadPlatform } from '../services/api';
import { apiService } from '../services/api';

interface UseDownloadPlatformsReturn {
  data: DownloadPlatform[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export const useDownloadPlatforms = (): UseDownloadPlatformsReturn => {
  const [data, setData] = useState<DownloadPlatform[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await apiService.getDownloadPlatforms();
      // Handle wrapped response from API
      const downloadPlatforms = (response as any)?.data || response;
      setData(downloadPlatforms);
    } catch (err) {
      console.error('Failed to fetch download platforms:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch download platforms');
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
