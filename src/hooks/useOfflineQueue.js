import { useState, useEffect } from 'react';
import { queueOfflineAction, getQueuedActions, clearQueuedActions } from '../utils/indexedDB';

export function useOfflineQueue() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [queuedCount, setQueuedCount] = useState(0);
  const [isSyncing, setIsSyncing] = useState(false);

  useEffect(() => {
    const handleOnline = async () => {
      setIsOnline(true);
      console.log('[Network] Back online! Flushing IndexedDB offline queue...');
      await syncOfflineQueue();
    };

    const handleOffline = () => {
      setIsOnline(false);
      console.log('[Network] Offline mode activated. Actions will queue in IndexedDB.');
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Initial check of queued items
    updateQueueCount();

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const updateQueueCount = async () => {
    try {
      const actions = await getQueuedActions();
      setQueuedCount(actions.length);
    } catch (e) {
      console.error('Failed to read IndexedDB queue', e);
    }
  };

  const addActionToQueue = async (actionType, payload) => {
    try {
      await queueOfflineAction(actionType, payload);
      await updateQueueCount();
    } catch (e) {
      console.error('Failed to queue offline action in IndexedDB', e);
    }
  };

  const syncOfflineQueue = async () => {
    try {
      const actions = await getQueuedActions();
      if (actions.length === 0) return;

      setIsSyncing(true);
      console.log(`[IndexedDB Sync] Processing ${actions.length} queued offline mutations...`);

      // Simulate sending queued items to backend
      await new Promise((resolve) => setTimeout(resolve, 1500));

      await clearQueuedActions();
      setQueuedCount(0);
      setIsSyncing(false);
      console.log('[IndexedDB Sync] Sync complete!');
    } catch (e) {
      console.error('Failed to sync offline queue', e);
      setIsSyncing(false);
    }
  };

  return {
    isOnline,
    queuedCount,
    isSyncing,
    addActionToQueue,
    syncOfflineQueue
  };
}
