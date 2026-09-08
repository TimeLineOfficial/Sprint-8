import React from 'react';
import { Link } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { CATEGORIES } from '../data/productsGenerator';
import { 
  ArrowRight, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Smartphone, 
  Laptop, 
  Tv, 
  Shirt, 
  Headphones, 
  Activity,
  Award,
  CheckCircle2
} from 'lucide-react';

const CATEGORY_ICONS = {
  mobiles: Smartphone,
  laptops: Laptop,
  appliances: Tv,
  fashion: Shirt,
  audio: Headphones,
  sports: Activity
};

export default function Home({ products = [], onAddToCart, getItemQuantity }) {
  const featured = products.slice(0, 8);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8">
      {/* Category Quick Scroll Bar */}
      <section className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-3 sm:p-4 shadow-sm">
        <div className="flex items-center justify-between mb-2 sm:mb-3">
          <div className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            Explore Product Categories
          </div>
          <span className="text-[10px] text-blue-600 dark:text-blue-400 font-semibold sm:hidden">Swipe &rarr;</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto custom-scrollbar pb-1 snap-x snap-mandatory">
          {CATEGORIES.map((cat) => {
            const IconComp = CATEGORY_ICONS[cat.id] || Smartphone;
            return (
              <Link
                key={cat.id}
                to="/catalog"
                className="group flex flex-col items-center justify-center min-w-[85px] sm:min-w-[120px] p-2.5 sm:p-3 rounded-xl sm:rounded-2xl border border-slate-100 dark:border-slate-700/60 hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-slate-700/50 transition-all text-center space-y-1.5 sm:space-y-2 flex-shrink-0 snap-start active:scale-95"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-blue-100 dark:bg-slate-700 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <IconComp className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="font-bold text-[11px] sm:text-xs text-slate-800 dark:text-slate-200 leading-tight">
                  {cat.name.split(' ')[0]}
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Guarantees Bar */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-3 sm:p-4 flex items-center space-x-3 shadow-sm">
          <Truck className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400 flex-shrink-0" />
          <div>
            <div className="font-bold text-slate-900 dark:text-white text-xs">Express Worldwide Shipping</div>
            <div className="text-slate-500 text-[10px] sm:text-[11px]">24-Hour dispatch on verified hardware</div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-3 sm:p-4 flex items-center space-x-3 shadow-sm">
          <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
          <div>
            <div className="font-bold text-slate-900 dark:text-white text-xs">100% Brand Authenticity</div>
            <div className="text-slate-500 text-[10px] sm:text-[11px]">Official manufacturer warranty included</div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-3 sm:p-4 flex items-center space-x-3 shadow-sm">
          <RotateCcw className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600 dark:text-amber-400 flex-shrink-0" />
          <div>
            <div className="font-bold text-slate-900 dark:text-white text-xs">7-Day Easy Replacement</div>
            <div className="text-slate-500 text-[10px] sm:text-[11px]">Hassle-free return policy</div>
          </div>
        </div>
      </section>

      {/* Featured Products Grid Header */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              Featured Corporate Hardware &amp; Devices
            </h2>
            <p className="text-xs text-slate-500">Certified electronics with official brand coverage</p>
          </div>
          <Link
            to="/catalog"
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm active:scale-95"
          >
            <span>Explore All 5,000 Products</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Featured Products Grid - 2 columns on Mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {featured.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              qtyInCart={getItemQuantity ? getItemQuantity(product.id) : 0}
            />
          ))}
        </div>
      </section>

      {/* Corporate Platform Reliability Footer Card */}
      <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-3 border border-slate-800 shadow-lg">
        <div className="flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
          <CheckCircle2 className="w-4 h-4" /> Enterprise Grade Platform Reliability
        </div>
        <h3 className="text-xl sm:text-2xl font-bold">High-Volume Product Distribution Infrastructure</h3>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
          Engineered to support 5,000 active hardware catalog SKUs with 24/7 continuous availability, high-speed response times, and seamless order authorization.
        </p>
      </section>
    </div>
  );
}
