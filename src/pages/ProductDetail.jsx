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
  Layers
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div className="flex items-center space-x-2 text-xs text-slate-500">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <span>/</span>
        <Link to="/catalog" className="hover:text-blue-600">Catalog</Link>
        <span>/</span>
        <span className="text-slate-900 dark:text-white font-semibold truncate">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Product Media with Explicit Image Dimensions */}
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

        {/* Product Details & Actions */}
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

          <div className="bg-slate-50 dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 space-y-1">
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">${product.price}</div>
            <div className="text-xs text-slate-500">Inclusive of all taxes &amp; Free Express Delivery</div>
          </div>

          <div className="flex items-center gap-3 pt-4">
            <button
              onClick={() => onAddToCart && onAddToCart(product, quantity)}
              className="flex-1 py-3 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase flex items-center justify-center space-x-2 shadow-sm"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>{qtyInCart > 0 ? `In Cart (${qtyInCart})` : 'Add To Cart'}</span>
            </button>
            <button
              onClick={() => {
                if (onAddToCart) onAddToCart(product, quantity);
                navigate('/checkout');
              }}
              className="flex-1 py-3 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase shadow-sm"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
