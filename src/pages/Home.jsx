import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, ArrowRight, ShieldCheck, Cpu, Layers, Activity, Wifi } from 'lucide-react';

export default function Home({ products = [] }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Top Hero Banner */}
      <section className="bg-gradient-to-r from-blue-700 via-indigo-800 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl space-y-6">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider">
          <Zap className="w-4 h-4 fill-slate-950" />
          <span>Sprint 08 • Core Web Vitals &amp; Edge Optimization</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
          Ultra-Fast Edge Architecture &amp; <br className="hidden sm:inline" />
          <span className="text-amber-400">IntersectionObserver Infinite Scroll</span>
        </h1>

        <p className="text-sm sm:text-base text-blue-100 max-w-2xl leading-relaxed">
          Engineered for 60 FPS performance with <strong className="text-white">React.lazy() Code Splitting</strong>, native IntersectionObserver infinite scrolling for 5,000 products, and Cache-First PWA Service Worker offline sync.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
          <Link
            to="/catalog"
            className="px-6 py-3.5 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs uppercase hover:bg-amber-300 transition-all shadow-md flex items-center justify-center space-x-2 text-center"
          >
            <span>TEST INFINITE SCROLL CATALOG</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/performance-audit"
            className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase transition-all flex items-center justify-center space-x-2 text-center border border-white/20"
          >
            <span>VIEW WPO AUDIT METRICS</span>
            <Activity className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 3 Phase Core Web Vitals Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 space-y-3 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 flex items-center justify-center font-bold">
            <Layers className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-base text-slate-900 dark:text-white">Phase 1: React.lazy() &amp; CLS</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            Route components load on-demand using React.lazy() &amp; Suspense. Images use explicit aspect ratios to guarantee 0 cumulative layout shift.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 space-y-3 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center font-bold">
            <Activity className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-base text-slate-900 dark:text-white">Phase 2: Infinite Scroll Observer</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            Traditional pagination is discarded. Native IntersectionObserver API observes boundary sentinels to fetch 5,000 products seamlessly.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 space-y-3 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-600 flex items-center justify-center font-bold">
            <Wifi className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-base text-slate-900 dark:text-white">Phase 3: Service Worker &amp; IndexedDB</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            PWA Service Worker caches static assets Cache-First and APIs Network-First. Offline mutations are queued in IndexedDB for auto-sync.
          </p>
        </div>
      </section>
    </div>
  );
}
