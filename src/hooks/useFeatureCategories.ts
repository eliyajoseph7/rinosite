import { useState, useEffect } from 'react';
import type { FeatureCategory } from '../services/api';
import { apiService } from '../services/api';

interface UseFeatureCategoriesReturn {
  data: FeatureCategory[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export const useFeatureCategories = (): UseFeatureCategoriesReturn => {
  const [data, setData] = useState<FeatureCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await apiService.getFeatureCategories();
      // Handle wrapped response from API
      const featureCategories = (response as any)?.data || response;
      setData(featureCategories);
    } catch (err) {
      console.error('Failed to fetch feature categories:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch feature categories');
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
