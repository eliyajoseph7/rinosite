import { useState, useEffect } from 'react';
import type { PricingPlan } from '../services/api';
import { apiService } from '../services/api';

interface UsePricingPlansReturn {
  data: PricingPlan[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export const usePricingPlans = (): UsePricingPlansReturn => {
  const [data, setData] = useState<PricingPlan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await apiService.getPricingPlans();
      // Handle wrapped response from API
      const pricingPlans = (response as any)?.data || response;
      setData(pricingPlans);
    } catch (err) {
      console.error('Failed to fetch pricing plans:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch pricing plans');
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
