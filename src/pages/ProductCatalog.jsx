import React, { useState, useCallback } from 'react';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
import { ProductCard } from '../components/ProductCard';
import { CATEGORIES } from '../data/productsGenerator';
import { Loader2, CheckCircle2, ShieldCheck, Search, Filter } from 'lucide-react';

const PAGE_SIZE = 20;

export default function ProductCatalog({ allProducts = [], onAddToCart, getItemQuantity }) {
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  // Filter products by category and search
  const filteredProducts = allProducts.filter((p) => {
    const matchesCat = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch = !searchQuery || p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.brand.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  // Current visible slice for infinite scroll
  const visibleProducts = filteredProducts.slice(0, page * PAGE_SIZE);
  const hasMore = visibleProducts.length < filteredProducts.length;

  // Infinite Scroll Callback
  const handleLoadMore = useCallback(() => {
    if (isLoadingMore || !hasMore) return;

    setIsLoadingMore(true);
    setTimeout(() => {
      setPage((prev) => prev + 1);
      setIsLoadingMore(false);
    }, 350);
  }, [isLoadingMore, hasMore]);

  // Connect native IntersectionObserver API hook to sentinel node
  const sentinelRef = useInfiniteScroll(handleLoadMore, hasMore, isLoadingMore);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
        <div>
          <div className="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-blue-600" /> Official Hardware &amp; Devices Catalog
          </div>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">
            Explore All Products ({filteredProducts.length.toLocaleString()} Items)
          </h1>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setPage(1);
            }}
            placeholder="Search catalog products..."
            className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-blue-600"
          />
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto custom-scrollbar pb-2">
        <button
          onClick={() => {
            setSelectedCategory('All');
            setPage(1);
          }}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex-shrink-0 ${
            selectedCategory === 'All'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
          }`}
        >
          All Categories ({allProducts.length})
        </button>

        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              setSelectedCategory(cat.name);
              setPage(1);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex-shrink-0 ${
              selectedCategory === cat.name
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {visibleProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
            qtyInCart={getItemQuantity ? getItemQuantity(product.id) : 0}
          />
        ))}
      </div>

      {/* Sentinel & Loading Status */}
      <div ref={sentinelRef} className="py-8 text-center space-y-3">
        {isLoadingMore && (
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 text-xs font-bold shadow-sm">
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Loading additional items...</span>
          </div>
        )}

        {!hasMore && visibleProducts.length > 0 && (
          <div className="text-xs text-slate-500 flex items-center justify-center gap-1">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>End of product catalog reached ({visibleProducts.length} items loaded)</span>
          </div>
        )}

        <div className="text-[11px] text-slate-400">
          Displaying {visibleProducts.length} of {filteredProducts.length} items
        </div>
      </div>
    </div>
  );
}
