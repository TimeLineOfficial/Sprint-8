import React from 'react';
import { useOfflineQueue } from '../hooks/useOfflineQueue';
import { WifiOff, RefreshCw, CheckCircle2, Database } from 'lucide-react';

export const OfflineBanner = () => {
  const { isOnline, queuedCount, isSyncing } = useOfflineQueue();

  if (isOnline && queuedCount === 0 && !isSyncing) {
    return null; // Clean state when fully online
  }

  return (
    <div className={`w-full text-xs font-semibold py-2 px-4 flex items-center justify-between transition-colors ${
      !isOnline
        ? 'bg-amber-500 text-slate-950 dark:bg-amber-600 dark:text-white'
        : 'bg-emerald-600 text-white'
    }`}>
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {!isOnline ? (
            <>
              <WifiOff className="w-4 h-4 animate-bounce" />
              <span>Offline Mode Active • Serving Cache-First Assets from PWA Service Worker</span>
            </>
          ) : (
            <>
              <CheckCircle2 className="w-4 h-4" />
              <span>Back Online • Connection Restored</span>
            </>
          )}
        </div>

        {queuedCount > 0 && (
          <div className="flex items-center space-x-2 text-[11px] font-mono">
            <Database className="w-3.5 h-3.5" />
            <span>IndexedDB Queue: {queuedCount} pending mutation(s)</span>
            {isSyncing && <RefreshCw className="w-3.5 h-3.5 animate-spin" />}
          </div>
        )}
      </div>
    </div>
  );
};
