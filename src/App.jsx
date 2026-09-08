import React, { useState, useEffect, lazy, Suspense } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { OfflineBanner } from './components/OfflineBanner';
import { LoadingSkeleton } from './components/LoadingSkeleton';
import { generateProducts } from './data/productsGenerator';
import { useOfflineQueue } from './hooks/useOfflineQueue';

// Phase 1: React.lazy() & Suspense Route Level Code Splitting
const Home = lazy(() => import('./pages/Home'));
const ProductCatalog = lazy(() => import('./pages/ProductCatalog'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Checkout = lazy(() => import('./pages/Checkout'));
const PerformanceAudit = lazy(() => import('./pages/PerformanceAudit'));

const CART_STORAGE_KEY = 'SPRINT8_CART_ITEMS';
const THEME_KEY = 'SPRINT8_THEME_MODE';

export default function App() {
  const [allProducts] = useState(() => generateProducts(5000));
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem(THEME_KEY) || 'light';
    } catch {
      return 'light';
    }
  });

  const { isOnline, addActionToQueue } = useOfflineQueue();

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem(THEME_KEY, theme);
      const root = document.documentElement;
      root.classList.remove('dark', 'light');
      if (theme === 'dark') {
        root.classList.add('dark');
      } else {
        root.classList.add('light');
      }
    } catch (e) {
      console.error('Theme toggle error', e);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleAddToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((item) => item.product.id === product.id);
      if (existingIndex >= 0) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += quantity;
        return updated;
      }
      return [...prevCart, { product, quantity }];
    });

    if (!isOnline) {
      addActionToQueue('ADD_TO_CART', { product, quantity });
    }
  };

  const handleUpdateQty = (productId, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product.id === productId ? { ...item, quantity: newQty } : item
      )
    );
  };

  const handleRemoveItem = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const getItemQuantity = (productId) => {
    const found = cart.find((item) => item.product.id === productId);
    return found ? found.quantity : 0;
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-200">
        <OfflineBanner />

        <Navbar
          cartCount={totalCartCount}
          theme={theme}
          toggleTheme={toggleTheme}
          isOnline={isOnline}
        />

        <main className="flex-1">
          {/* Phase 1: Suspense Fallback for React.lazy Route Chunks */}
          <Suspense fallback={<LoadingSkeleton />}>
            <Routes>
              <Route path="/" element={<Home products={allProducts} />} />
              <Route
                path="/catalog"
                element={
                  <ProductCatalog
                    allProducts={allProducts}
                    onAddToCart={handleAddToCart}
                    getItemQuantity={getItemQuantity}
                  />
                }
              />
              <Route
                path="/product/:id"
                element={
                  <ProductDetail
                    allProducts={allProducts}
                    onAddToCart={handleAddToCart}
                    getItemQuantity={getItemQuantity}
                  />
                }
              />
              <Route
                path="/checkout"
                element={
                  <Checkout
                    cart={cart}
                    onUpdateQty={handleUpdateQty}
                    onRemoveItem={handleRemoveItem}
                    onClearCart={handleClearCart}
                  />
                }
              />
              <Route path="/performance-audit" element={<PerformanceAudit />} />
            </Routes>
          </Suspense>
        </main>

        <footer className="bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 py-6 text-center text-xs text-slate-500 dark:text-slate-400">
          <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div>
              © 2026 Prodesk IT Software Engineering Team. Sprint 08 Performance Deliverable.
            </div>
            <div className="flex items-center space-x-4 text-[11px] font-mono">
              <span className="text-emerald-600 dark:text-emerald-400">Phase 1: React.lazy()</span>
              <span className="text-emerald-600 dark:text-emerald-400">Phase 2: IntersectionObserver</span>
              <span className="text-emerald-600 dark:text-emerald-400">Phase 3: SW &amp; IndexedDB</span>
            </div>
          </div>
        </footer>
      </div>
    </HashRouter>
  );
}
