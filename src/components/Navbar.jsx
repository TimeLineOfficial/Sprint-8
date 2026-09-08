import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Zap, 
  ShoppingBag, 
  ShoppingCart, 
  Activity, 
  Sun, 
  Moon, 
  Wifi, 
  WifiOff, 
  Layers
} from 'lucide-react';

export const Navbar = ({ cartCount = 0, theme, toggleTheme, isOnline }) => {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/catalog', label: 'Product Catalog (Infinite Scroll)' },
    { path: '/checkout', label: 'Checkout Flow' },
    { path: '/performance-audit', label: 'WPO Audit' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex items-center space-x-2.5">
          <div className="w-9 h-9 rounded-xl bg-blue-600 text-white font-extrabold text-lg flex items-center justify-center shadow-md">
            <Zap className="w-5 h-5 text-amber-300" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-base tracking-tight text-slate-900 dark:text-white leading-none">
              PRODESK<span className="text-blue-600">EDGE</span>
            </span>
            <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">
              Sprint 08 • WPO &amp; PWA Service Worker
            </span>
          </div>
        </Link>

        {/* Route Links */}
        <nav className="hidden md:flex items-center space-x-1 text-xs font-semibold">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-bold'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center space-x-3 text-xs">
          {/* Network Indicator Pill */}
          <div className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold flex items-center gap-1.5 border ${
            isOnline
              ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800'
              : 'bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border-amber-300'
          }`}>
            {isOnline ? <Wifi className="w-3 h-3" /> : <WifiOff className="w-3 h-3 animate-pulse" />}
            <span className="hidden sm:inline">{isOnline ? 'Network Online' : 'PWA Offline Cache'}</span>
          </div>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-200 font-bold transition-all"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Moon className="w-4 h-4 text-amber-300" /> : <Sun className="w-4 h-4 text-amber-500" />}
          </button>

          <Link
            to="/checkout"
            className="px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase flex items-center space-x-1.5 shadow-sm transition-all"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Cart ({cartCount})</span>
          </Link>
        </div>
      </div>
    </header>
  );
};
