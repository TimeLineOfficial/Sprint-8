import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Grid, 
  ShoppingCart, 
  Zap, 
  Sun, 
  Moon, 
  Wifi, 
  WifiOff, 
  Menu, 
  X, 
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

export const Navbar = ({ cartCount = 0, theme, toggleTheme, isOnline }) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/catalog', label: 'Product Catalog', icon: Grid },
    { path: '/checkout', label: 'Checkout & Cart', icon: ShoppingCart },
    { path: '/performance-audit', label: 'Platform Performance', icon: Zap }
  ];

  return (
    <>
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 shadow-sm">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Left: Mobile Menu Toggle & Brand Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 focus:outline-none transition-colors"
              aria-label="Toggle Mobile Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 text-blue-600" /> : <Menu className="w-5 h-5" />}
            </button>

            <Link to="/" className="flex items-center space-x-2">
              <div className="w-9 h-9 rounded-xl bg-blue-600 text-white font-extrabold text-lg flex items-center justify-center shadow-md">
                P
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-sm sm:text-base tracking-tight text-slate-900 dark:text-white leading-none">
                  PRODESK<span className="text-blue-600">ENTERPRISE</span>
                </span>
                <span className="text-[8px] sm:text-[9px] font-medium text-slate-400 uppercase tracking-wider mt-0.5 truncate max-w-[170px] sm:max-w-none">
                  Global Products &amp; Certified Hardware
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 text-xs font-semibold">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3.5 py-2 rounded-lg transition-colors ${
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
          <div className="flex items-center space-x-2 sm:space-x-3 text-xs">
            {/* Network Indicator Pill */}
            <div className={`px-2 py-1 sm:px-2.5 sm:py-1 rounded-full text-[10px] font-bold flex items-center gap-1 border ${
              isOnline
                ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800'
                : 'bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border-amber-300'
            }`}>
              {isOnline ? <Wifi className="w-3 h-3" /> : <WifiOff className="w-3 h-3 animate-pulse text-amber-600" />}
              <span className="hidden sm:inline">{isOnline ? 'Online' : 'Offline Mode'}</span>
            </div>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-200 font-bold transition-all"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Moon className="w-4 h-4 text-amber-300" /> : <Sun className="w-4 h-4 text-amber-500" />}
            </button>

            {/* Desktop Header Cart Link */}
            <Link
              to="/checkout"
              className="hidden sm:flex px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase items-center space-x-1.5 shadow-sm transition-all"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Cart ({cartCount})</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Out Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer Container */}
          <div className="relative w-4/5 max-w-xs bg-white dark:bg-slate-800 h-full shadow-2xl flex flex-col z-10 transition-transform">
            <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between bg-slate-50 dark:bg-slate-900">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-blue-600 text-white font-extrabold flex items-center justify-center text-sm shadow">
                  P
                </div>
                <span className="font-extrabold text-sm text-slate-900 dark:text-white">PRODESK MENU</span>
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 space-y-1 overflow-y-auto flex-1">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2 px-2">Navigation Links</div>
              {navLinks.map((link) => {
                const IconComp = link.icon;
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-3 py-3 rounded-xl text-xs font-semibold transition-all ${
                      isActive
                        ? 'bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400 font-bold'
                        : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700/60'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <IconComp className="w-4 h-4 text-blue-500" />
                      <span>{link.label}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>
                );
              })}
            </div>

            <div className="p-4 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500">Theme</span>
                <button
                  onClick={toggleTheme}
                  className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5"
                >
                  {theme === 'dark' ? <Moon className="w-3.5 h-3.5 text-amber-300" /> : <Sun className="w-3.5 h-3.5 text-amber-500" />}
                  <span>{theme === 'dark' ? 'Dark Mode' : 'Light Mode'}</span>
                </button>
              </div>

              <div className="text-[10px] text-slate-400 text-center flex items-center justify-center gap-1 pt-1">
                <ShieldCheck className="w-3 h-3 text-emerald-500" /> 100% Certified Enterprise Hardware
              </div>
            </div>
          </div>
        </div>
      )}

      {/* App-Style Fixed Mobile Bottom Navigation Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800 py-1.5 px-2 shadow-2xl flex items-center justify-around">
        {navLinks.map((link) => {
          const IconComp = link.icon;
          const isActive = location.pathname === link.path;
          const isCart = link.path === '/checkout';

          return (
            <Link
              key={link.path}
              to={link.path}
              className={`relative flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all ${
                isActive
                  ? 'text-blue-600 dark:text-blue-400 font-bold'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              <div className="relative">
                <IconComp className={`w-5 h-5 ${isActive ? 'scale-110' : ''} transition-transform`} />
                {isCart && cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-2.5 w-4 h-4 rounded-full bg-rose-600 text-white font-extrabold text-[9px] flex items-center justify-center shadow-sm animate-pulse">
                    {cartCount > 99 ? '99+' : cartCount}
                  </span>
                )}
              </div>
              <span className="text-[10px] mt-0.5 tracking-tight font-medium leading-none">
                {link.label.split(' ')[0]}
              </span>
            </Link>
          );
        })}
      </div>
    </>
  );
};
