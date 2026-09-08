import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Star, 
  ShoppingCart, 
  Heart, 
  ShieldCheck, 
  Truck, 
  ArrowLeft, 
  Plus, 
  Minus, 
  CheckCircle2, 
  RotateCcw,
  PackageCheck,
  Award
} from 'lucide-react';

export default function ProductDetail({ allProducts = [], onAddToCart, getItemQuantity }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const product = allProducts.find((p) => p.id === id) || allProducts[0];
  const qtyInCart = product ? (getItemQuantity ? getItemQuantity(product.id) : 0) : 0;

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="text-2xl font-bold">Product Not Found</h2>
        <Link to="/catalog" className="inline-block px-6 py-2.5 bg-blue-600 text-white rounded-lg text-xs font-bold">
          Return to Catalog
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-6 sm:space-y-8">
      <div className="flex items-center space-x-2 text-xs text-slate-500">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <span>/</span>
        <Link to="/catalog" className="hover:text-blue-600">Catalog</Link>
        <span>/</span>
        <span className="text-slate-900 dark:text-white font-semibold truncate">{product.name}</span>
      </div>

      {/* Main Product Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* Product Image */}
        <div className="lg:col-span-5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 shadow-sm">
          <img
            src={product.image}
            alt={product.name}
            width={product.width || 400}
            height={product.height || 400}
            loading="lazy"
            decoding="async"
            className="w-full aspect-square object-contain mx-auto"
          />
        </div>

        {/* Essential Product Details & Purchase Actions */}
        <div className="lg:col-span-7 space-y-5">
          <div>
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              {product.brand} • {product.category}
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              {product.name}
            </h1>
            <div className="flex items-center space-x-2 text-xs mt-2">
              <span className="px-2 py-0.5 rounded bg-emerald-600 text-white font-bold flex items-center gap-1">
                {product.rating} <Star className="w-3 h-3 fill-white" />
              </span>
              <span className="text-slate-500">({product.reviewCount} Reviews)</span>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800 p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-slate-700 space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">${product.price}</div>
            <div className="text-[11px] sm:text-xs text-slate-500">Inclusive of all taxes &amp; Free Express Delivery</div>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center space-x-3 pt-2">
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Quantity:</span>
            <div className="flex items-center border border-slate-300 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-900 p-1">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 font-bold active:scale-95"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="w-8 text-center text-xs font-extrabold text-slate-900 dark:text-white">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 font-bold active:scale-95"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
            <button
              onClick={() => onAddToCart && onAddToCart(product, quantity)}
              className="flex-1 py-3.5 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs uppercase flex items-center justify-center space-x-2 shadow-sm active:scale-95 transition-transform"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>{qtyInCart > 0 ? `In Cart (${qtyInCart})` : 'Add To Cart'}</span>
            </button>
            <button
              onClick={() => {
                if (onAddToCart) onAddToCart(product, quantity);
                navigate('/checkout');
              }}
              className="flex-1 py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs uppercase shadow-sm active:scale-95 transition-transform text-center"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Product Delivery, Replacement & Authenticity Section */}
      <section className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-5 sm:p-6 space-y-4 shadow-sm">
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-3 flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-blue-600" />
          <span>Product Guarantees &amp; Fulfillment Specs</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 font-bold">
              <Truck className="w-4 h-4 flex-shrink-0" />
              <span>Express Delivery Time</span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-[11px] leading-relaxed">
              Dispatched within 24 hours. Delivered in 2–4 business days with live real-time GPS tracking.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center space-x-2 text-emerald-600 dark:text-emerald-400 font-bold">
              <ShieldCheck className="w-4 h-4 flex-shrink-0" />
              <span>100% Brand Authenticity</span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-[11px] leading-relaxed">
              Verified OEM product stock with official manufacturer seal, serial validation, &amp; 1-year brand warranty.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-700/60 space-y-2">
            <div className="flex items-center space-x-2 text-amber-600 dark:text-amber-400 font-bold">
              <RotateCcw className="w-4 h-4 flex-shrink-0" />
              <span>7-Day Replacement Policy</span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-[11px] leading-relaxed">
              Full 7-day hassle-free replacement guarantee for hardware defects or damaged shipments.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
