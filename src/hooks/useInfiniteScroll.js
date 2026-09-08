import { useEffect, useRef, useCallback } from 'react';

/**
 * Custom hook implementing Native IntersectionObserver API for Infinite Scroll.
 * @param {Function} callback - Function triggered when user reaches bottom boundary sentinel.
 * @param {boolean} hasMore - Whether additional data pages exist.
 * @param {boolean} isLoading - Current loading state.
 */
export function useInfiniteScroll(callback, hasMore, isLoading) {
  const observerRef = useRef(null);

  const sentinelRef = useCallback(
    (node) => {
      if (isLoading) return;
      if (observerRef.current) observerRef.current.disconnect();

      observerRef.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasMore) {
            console.log('[IntersectionObserver] DOM boundary boundary reached! Fetching next page...');
            callback();
          }
        },
        {
          root: null,
          rootMargin: '200px', // Fetch 200px before reaching absolute bottom for seamless 60FPS feel
          threshold: 0.1
        }
      );

      if (node) observerRef.current.observe(node);
    },
    [callback, hasMore, isLoading]
  );

  useEffect(() => {
    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  return sentinelRef;
}
