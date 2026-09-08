import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star, CheckCircle2, Truck } from 'lucide-react';

export const ProductCard = ({ product, onAddToCart, qtyInCart = 0 }) => {
  return (
    <div className="group flex flex-col h-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200">
      {/* Image Thumbnail with Explicit Dimensions for Zero CLS */}
      <Link to={`/product/${product.id}`} className="relative block aspect-square bg-slate-50 dark:bg-slate-900 overflow-hidden p-3">
        <img
          src={product.image}
          alt={product.name}
          width={product.width || 400}
          height={product.height || 400}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 mx-auto"
        />

        {product.discountPct > 0 && (
          <span className="absolute top-2.5 left-2.5 px-2 py-0.5 text-[10px] font-bold rounded bg-rose-600 text-white uppercase shadow-sm">
            {product.discountPct}% OFF
          </span>
        )}
      </Link>

      {/* Body Content */}
      <div className="p-3.5 flex flex-col flex-grow text-xs">
        <div className="text-[10px] font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-0.5 truncate">
          {product.brand} • {product.category}
        </div>

        <Link to={`/product/${product.id}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-xs line-clamp-2 mb-1.5 leading-snug">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center space-x-1.5 mb-2">
          <span className="inline-flex items-center space-x-0.5 px-1.5 py-0.5 rounded bg-emerald-600 text-white text-[10px] font-bold">
            <span>{product.rating}</span>
            <Star className="w-2.5 h-2.5 fill-white" />
          </span>
          <span className="text-[11px] text-slate-500 dark:text-slate-400">
            ({product.reviewCount})
          </span>
        </div>

        {/* Price & Action */}
        <div className="mt-auto pt-2.5 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between gap-2">
          <div>
            <span className="text-sm font-extrabold text-slate-900 dark:text-white">
              ${product.price}
            </span>
            {product.originalPrice > product.price && (
              <span className="text-[10px] text-slate-400 line-through ml-1">
                ${product.originalPrice}
              </span>
            )}
          </div>

          <button
            onClick={() => onAddToCart && onAddToCart(product)}
            className={`px-3 py-1.5 rounded-lg font-semibold text-xs transition-all flex items-center space-x-1 ${
              qtyInCart > 0
                ? 'bg-emerald-50 text-emerald-700 border border-emerald-300 dark:bg-emerald-950/60 dark:text-emerald-300'
                : 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm'
            }`}
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            <span>{qtyInCart > 0 ? `(${qtyInCart})` : 'Add'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
