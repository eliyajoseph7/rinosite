import { useState, useEffect } from 'react';
import type { FAQ } from '../services/api';
import { apiService } from '../services/api';

interface UseFAQsReturn {
  data: FAQ[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export const useFAQs = (): UseFAQsReturn => {
  const [data, setData] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await apiService.getFAQs();
      // Handle wrapped response from API
      const faqs = (response as any)?.data || response;
      setData(faqs);
    } catch (err) {
      console.error('Failed to fetch FAQs:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch FAQs');
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
