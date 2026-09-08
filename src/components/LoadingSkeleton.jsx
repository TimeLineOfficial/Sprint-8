import React from 'react';
import { Loader2, Zap } from 'lucide-react';

export const LoadingSkeleton = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6 animate-pulse">
      <div className="bg-slate-200 dark:bg-slate-800 h-32 rounded-2xl w-full flex items-center justify-center space-x-2 text-slate-400">
        <Loader2 className="w-6 h-6 animate-spin text-blue-600" />
        <span className="text-xs font-mono font-bold uppercase tracking-wider">Loading Chunk via React.lazy() &amp; Suspense...</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
          <div key={n} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 space-y-3 shadow-sm">
            <div className="bg-slate-200 dark:bg-slate-700 aspect-square rounded-lg w-full" />
            <div className="bg-slate-200 dark:bg-slate-700 h-4 rounded w-3/4" />
            <div className="bg-slate-200 dark:bg-slate-700 h-3 rounded w-1/2" />
            <div className="flex justify-between items-center pt-2">
              <div className="bg-slate-200 dark:bg-slate-700 h-5 rounded w-1/3" />
              <div className="bg-slate-200 dark:bg-slate-700 h-8 rounded w-1/4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
