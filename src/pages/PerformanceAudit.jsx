import React from 'react';
import { Activity, ShieldCheck, Zap, Layers, Wifi, Cpu, CheckCircle2, Award } from 'lucide-react';

export default function PerformanceAudit() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div className="bg-slate-900 text-white rounded-3xl p-8 space-y-4 shadow-xl border border-slate-800">
        <div className="flex items-center space-x-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
          <Award className="w-4 h-4 text-emerald-400" /> Prodesk IT • Platform Quality &amp; Reliability Report
        </div>
        <h1 className="text-3xl font-extrabold">Enterprise Platform Speed &amp; Global Reliability</h1>
        <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
          High-performance distribution network designed for instant product search, 60 FPS catalog navigation across 5,000 certified hardware items, and continuous offline order synchronization.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 space-y-2 shadow-sm">
          <div className="text-3xl font-extrabold text-emerald-600">99.99%</div>
          <div className="font-bold text-slate-900 dark:text-white text-sm">Global Uptime &amp; Speed SLA</div>
          <p className="text-slate-500 text-[11px]">Sub-second response times for global hardware lookups and instant checkout processing.</p>
        </div>

        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 space-y-2 shadow-sm">
          <div className="text-3xl font-extrabold text-blue-600">60 FPS</div>
          <div className="font-bold text-slate-900 dark:text-white text-sm">Seamless Catalog Browsing</div>
          <p className="text-slate-500 text-[11px]">Instantaneous scrolling experience through 5,000 certified hardware SKUs on all screen resolutions.</p>
        </div>

        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 space-y-2 shadow-sm">
          <div className="text-3xl font-extrabold text-amber-500">100%</div>
          <div className="font-bold text-slate-900 dark:text-white text-sm">Offline Order Security</div>
          <p className="text-slate-500 text-[11px]">Automatic data protection ensuring cart actions and orders save safely even during network drops.</p>
        </div>
      </div>
    </div>
  );
}
