import React, { useState, useCallback } from 'react';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
import { ProductCard } from '../components/ProductCard';
import { CATEGORIES } from '../data/productsGenerator';
import { Loader2, CheckCircle2, ShieldCheck, Search, Filter, X, ChevronDown } from 'lucide-react';

const PAGE_SIZE = 20;

export default function ProductCatalog({ allProducts = [], onAddToCart, getItemQuantity }) {
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);

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
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-8 space-y-4 sm:space-y-6">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 bg-white dark:bg-slate-800 p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
        <div>
          <div className="text-[10px] sm:text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" /> Official Hardware &amp; Devices Catalog
          </div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
            Explore Products ({filteredProducts.length.toLocaleString()})
          </h1>
        </div>

        {/* Search Bar & Mobile Category Trigger */}
        <div className="flex items-center gap-2 w-full md:w-auto">
          <div className="relative flex-1 md:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setPage(1);
              }}
              placeholder="Search products &amp; brands..."
              className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl pl-9 pr-8 py-2.5 sm:py-2 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-blue-600"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Mobile Category Select Modal Trigger Button */}
          <button
            onClick={() => setIsCategoryModalOpen(true)}
            className="sm:hidden px-3 py-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 text-xs font-bold flex items-center gap-1.5 flex-shrink-0 active:scale-95"
          >
            <Filter className="w-3.5 h-3.5" />
            <span>Category</span>
            <ChevronDown className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Category Pills Header */}
      <div className="flex items-center gap-2 overflow-x-auto custom-scrollbar pb-2 snap-x snap-mandatory">
        <button
          onClick={() => {
            setSelectedCategory('All');
            setPage(1);
          }}
          className={`px-3.5 sm:px-4 py-2 sm:py-2 rounded-xl text-xs font-bold transition-all flex-shrink-0 snap-start active:scale-95 ${
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
            className={`px-3.5 sm:px-4 py-2 sm:py-2 rounded-xl text-xs font-bold transition-all flex-shrink-0 snap-start active:scale-95 ${
              selectedCategory === cat.name
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Mobile Category Modal / Drawer Sheet */}
      {isCategoryModalOpen && (
        <div className="sm:hidden fixed inset-0 z-50 flex items-end">
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setIsCategoryModalOpen(false)}
          />
          <div className="relative w-full bg-white dark:bg-slate-800 rounded-t-3xl p-5 shadow-2xl z-10 max-h-[80vh] overflow-y-auto space-y-4">
            <div className="flex items-center justify-between border-b pb-3 border-slate-200 dark:border-slate-700">
              <div className="font-extrabold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                <Filter className="w-4 h-4 text-blue-600" /> Select Product Category
              </div>
              <button
                onClick={() => setIsCategoryModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 gap-2">
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setPage(1);
                  setIsCategoryModalOpen(false);
                }}
                className={`w-full p-3 rounded-xl text-left font-bold text-xs flex items-center justify-between ${
                  selectedCategory === 'All'
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-50 dark:bg-slate-700/50 text-slate-800 dark:text-slate-200'
                }`}
              >
                <span>All Categories</span>
                <span>({allProducts.length})</span>
              </button>

              {CATEGORIES.map((cat) => {
                const count = allProducts.filter((p) => p.category === cat.name).length;
                const isSel = selectedCategory === cat.name;
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat.name);
                      setPage(1);
                      setIsCategoryModalOpen(false);
                    }}
                    className={`w-full p-3 rounded-xl text-left font-bold text-xs flex items-center justify-between ${
                      isSel
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-50 dark:bg-slate-700/50 text-slate-800 dark:text-slate-200'
                    }`}
                  >
                    <span>{cat.name}</span>
                    <span className={isSel ? 'text-white' : 'text-slate-400'}>({count})</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Product Grid - 2 columns on Mobile */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
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
