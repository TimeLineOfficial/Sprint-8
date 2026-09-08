import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { useOfflineQueue } from '../hooks/useOfflineQueue';
import { 
  ShoppingCart, 
  Trash2, 
  Plus, 
  Minus, 
  ShieldCheck, 
  WifiOff, 
  CheckCircle2, 
  Database,
  ArrowRight
} from 'lucide-react';

export default function Checkout({ cart = [], onUpdateQty, onRemoveItem, onClearCart }) {
  const { isOnline, addActionToQueue, queuedCount } = useOfflineQueue();
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const [isOfflineQueued, setIsOfflineQueued] = useState(false);

  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const handlePlaceOrder = async () => {
    if (cart.length === 0) return;

    if (!isOnline) {
      // Offline Mode: Queue order in IndexedDB
      await addActionToQueue('PLACE_ORDER', {
        cart,
        subtotal,
        timestamp: Date.now()
      });
      setIsOfflineQueued(true);
      onClearCart();
      return;
    }

    // Online Mode: Process instant order
    setIsOrderComplete(true);
    onClearCart();

    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch (e) {
      console.log('Confetti trigger error', e);
    }
  };

  if (isOrderComplete) {
    return (
      <div className="max-w-xl mx-auto py-16 text-center space-y-6">
        <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-950 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
          <CheckCircle2 className="w-10 h-10 animate-bounce" />
        </div>
        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Order Confirmed!</h2>
        <p className="text-xs text-slate-600 dark:text-slate-300">
          Your order has been authorized and dispatched. Tracking ID: #S8-{Math.floor(100000 + Math.random() * 900000)}.
        </p>
      </div>
    );
  }

  if (isOfflineQueued) {
    return (
      <div className="max-w-xl mx-auto py-16 text-center space-y-6">
        <div className="w-20 h-20 bg-amber-100 dark:bg-amber-950 text-amber-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
          <Database className="w-10 h-10 animate-bounce" />
        </div>
        <div className="space-y-2">
          <span className="px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 text-xs font-bold uppercase tracking-wider">
            IndexedDB Offline Queue Active
          </span>
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">Order Queued in IndexedDB</h2>
        </div>
        <p className="text-xs text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
          You are currently offline. Your purchase mutation has been safely stored in browser <strong>IndexedDB</strong> and will automatically flush to the server as soon as internet connection is restored!
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 pb-4">
        <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
          <ShoppingCart className="w-6 h-6 text-blue-600" />
          <span>Checkout &amp; Cart Setup ({cart.length} items)</span>
        </h1>

        {!isOnline && (
          <div className="px-3 py-1 bg-amber-500 text-slate-950 text-xs font-bold rounded-full flex items-center gap-1.5">
            <WifiOff className="w-3.5 h-3.5" />
            <span>IndexedDB Offline Sync Enabled</span>
          </div>
        )}
      </div>

      {cart.length === 0 ? (
        <div className="text-center py-16 space-y-4">
          <div className="text-slate-400 text-sm">Your shopping cart is currently empty.</div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-4">
            {cart.map(({ product, quantity }) => (
              <div key={product.id} className="p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl flex items-center justify-between gap-4 shadow-sm text-xs">
                <img src={product.image} alt={product.name} width={60} height={60} className="w-16 h-16 object-contain rounded-lg bg-slate-50" />

                <div className="flex-1">
                  <h4 className="font-bold text-slate-900 dark:text-white text-xs">{product.name}</h4>
                  <div className="text-slate-500 text-[11px]">${product.price} each</div>
                </div>

                <div className="flex items-center space-x-2 border rounded-lg p-1 bg-slate-50 dark:bg-slate-900">
                  <button onClick={() => onUpdateQty(product.id, quantity - 1)} className="p-1"><Minus className="w-3.5 h-3.5" /></button>
                  <span className="px-2 font-bold">{quantity}</span>
                  <button onClick={() => onUpdateQty(product.id, quantity + 1)} className="p-1"><Plus className="w-3.5 h-3.5" /></button>
                </div>

                <div className="font-extrabold text-sm text-slate-900 dark:text-white">${product.price * quantity}</div>

                <button onClick={() => onRemoveItem(product.id)} className="p-1.5 text-rose-500 hover:bg-rose-50 rounded"><Trash2 className="w-4 h-4" /></button>
              </div>
            ))}
          </div>

          <div className="lg:col-span-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 space-y-4 shadow-sm text-xs">
            <h3 className="font-bold text-base text-slate-900 dark:text-white border-b pb-3">Order Summary</h3>

            <div className="space-y-2 text-slate-600 dark:text-slate-300">
              <div className="flex justify-between"><span>Subtotal</span><span>${subtotal}</span></div>
              <div className="flex justify-between"><span>Express Delivery</span><span className="text-emerald-600 font-bold">FREE</span></div>
              <div className="flex justify-between text-base font-extrabold text-slate-900 dark:text-white border-t pt-2">
                <span>Total</span><span>${subtotal}</span>
              </div>
            </div>

            <button
              onClick={handlePlaceOrder}
              className={`w-full py-3.5 rounded-xl font-bold text-xs uppercase shadow-md transition-all flex items-center justify-center space-x-2 ${
                !isOnline
                  ? 'bg-amber-500 hover:bg-amber-400 text-slate-950'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              <span>{!isOnline ? 'QUEUE ORDER IN INDEXEDDB (OFFLINE)' : 'PLACE ORDER (INSTANT)'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
