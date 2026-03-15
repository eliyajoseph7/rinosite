import { useState, useEffect } from 'react';
import type { Video } from '../services/api';
import { apiService } from '../services/api';

interface UseVideosParams {
  group?: string;
  search?: string;
  page?: number;
  per_page?: number;
}

interface PaginationInfo {
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
  from: number | null;
  to: number | null;
  has_more_pages: boolean;
  next_page_url: string | null;
  prev_page_url: string | null;
}

interface UseVideosReturn {
  data: Video[];
  pagination: PaginationInfo | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
  loadMore: () => Promise<void>;
  goToPage: (page: number) => Promise<void>;
}

export const useVideos = (params: UseVideosParams = {}): UseVideosReturn => {
  const [data, setData] = useState<Video[]>([]);
  const [pagination, setPagination] = useState<PaginationInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (page: number = 1, append: boolean = false) => {
    try {
      if (!append) {
        setLoading(true);
      }
      setError(null);

      const response = await apiService.getVideos({ ...params, page, per_page: params.per_page || 12 });
      
      // Handle wrapped response from API
      const responseData = (response as any)?.data || response;
      const videos = responseData?.data || responseData;
      const paginationData = responseData?.pagination;

      if (append && pagination) {
        setData(prevData => [...prevData, ...videos]);
      } else {
        setData(videos);
      }
      
      setPagination(paginationData || null);
    } catch (err) {
      console.error('Failed to fetch videos:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch videos');
      if (!append) {
        setData([]);
        setPagination(null);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(1, false);
  }, [params.group, params.search, params.per_page]);

  const refetch = async () => {
    await fetchData(1, false);
  };

  const loadMore = async () => {
    if (pagination && pagination.has_more_pages) {
      await fetchData(pagination.current_page + 1, true);
    }
  };

  const goToPage = async (page: number) => {
    await fetchData(page, false);
  };

  return {
    data,
    pagination,
    loading,
    error,
    refetch,
    loadMore,
    goToPage,
  };
};
