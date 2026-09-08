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
      <section className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 shadow-sm">
        <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-3">
          Explore Product Categories
        </div>
        <div className="flex items-center gap-3 overflow-x-auto custom-scrollbar pb-1">
          {CATEGORIES.map((cat) => {
            const IconComp = CATEGORY_ICONS[cat.id] || Smartphone;
            return (
              <Link
                key={cat.id}
                to="/catalog"
                className="group flex flex-col items-center justify-center min-w-[95px] sm:min-w-[120px] p-3 rounded-xl border border-slate-100 dark:border-slate-700/60 hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-slate-700/50 transition-all text-center space-y-2 flex-shrink-0"
              >
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-slate-700 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <IconComp className="w-5 h-5" />
                </div>
                <span className="font-semibold text-xs text-slate-800 dark:text-slate-200 leading-tight">
                  {cat.name.split(' ')[0]}
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Guarantees Bar */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 flex items-center space-x-3.5 shadow-sm">
          <Truck className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0" />
          <div>
            <div className="font-bold text-slate-900 dark:text-white text-xs">Express Worldwide Shipping</div>
            <div className="text-slate-500 text-[11px]">24-Hour dispatch on verified hardware</div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 flex items-center space-x-3.5 shadow-sm">
          <ShieldCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
          <div>
            <div className="font-bold text-slate-900 dark:text-white text-xs">100% Brand Authenticity</div>
            <div className="text-slate-500 text-[11px]">Official manufacturer warranty included</div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 flex items-center space-x-3.5 shadow-sm">
          <RotateCcw className="w-6 h-6 text-amber-600 dark:text-amber-400 flex-shrink-0" />
          <div>
            <div className="font-bold text-slate-900 dark:text-white text-xs">7-Day Easy Replacement</div>
            <div className="text-slate-500 text-[11px]">Hassle-free return policy</div>
          </div>
        </div>
      </section>

      {/* Featured Products Grid Header */}
      <section className="space-y-4">
        <div className="flex items-center justify-between bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Featured Corporate Hardware &amp; Devices
            </h2>
            <p className="text-xs text-slate-500">Certified electronics with official brand coverage</p>
          </div>
          <Link
            to="/catalog"
            className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-1.5 transition-colors"
          >
            <span>Explore All 5,000 Products</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Featured Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
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
