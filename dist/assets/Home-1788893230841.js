import{c as s,j as e,C as o,L as r,S as n,a as m}from"./index-1788893230841.js";import{P as h}from"./ProductCard-1788893230841.js";import{A as p}from"./arrow-right-1788893230841.js";import"./star-1788893230841.js";/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=s("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=s("Headphones",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=s("Laptop",[["path",{d:"M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",key:"tarvll"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=s("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=s("Shirt",[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",key:"1wgbhj"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=s("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=s("Truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=s("Tv",[["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",ry:"2",key:"10ag99"}],["polyline",{points:"17 2 12 7 7 2",key:"11pgbg"}]]),v={mobiles:l,laptops:g,appliances:k,fashion:f,audio:u,sports:b};function S({products:d=[],onAddToCart:i,getItemQuantity:a}){const c=d.slice(0,8);return e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8",children:[e.jsxs("section",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-3 sm:p-4 shadow-sm",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2 sm:mb-3",children:[e.jsx("div",{className:"text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider",children:"Explore Product Categories"}),e.jsx("span",{className:"text-[10px] text-blue-600 dark:text-blue-400 font-semibold sm:hidden",children:"Swipe →"})]}),e.jsx("div",{className:"flex items-center gap-2 sm:gap-3 overflow-x-auto custom-scrollbar pb-1 snap-x snap-mandatory",children:o.map(t=>{const x=v[t.id]||l;return e.jsxs(r,{to:"/catalog",className:"group flex flex-col items-center justify-center min-w-[85px] sm:min-w-[120px] p-2.5 sm:p-3 rounded-xl sm:rounded-2xl border border-slate-100 dark:border-slate-700/60 hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-slate-700/50 transition-all text-center space-y-1.5 sm:space-y-2 flex-shrink-0 snap-start active:scale-95",children:[e.jsx("div",{className:"w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-blue-100 dark:bg-slate-700 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform",children:e.jsx(x,{className:"w-4 h-4 sm:w-5 sm:h-5"})}),e.jsx("span",{className:"font-bold text-[11px] sm:text-xs text-slate-800 dark:text-slate-200 leading-tight",children:t.name.split(" ")[0]})]},t.id)})})]}),e.jsxs("section",{className:"grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3",children:[e.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-3 sm:p-4 flex items-center space-x-3 shadow-sm",children:[e.jsx(j,{className:"w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400 flex-shrink-0"}),e.jsxs("div",{children:[e.jsx("div",{className:"font-bold text-slate-900 dark:text-white text-xs",children:"Express Worldwide Shipping"}),e.jsx("div",{className:"text-slate-500 text-[10px] sm:text-[11px]",children:"24-Hour dispatch on verified hardware"})]})]}),e.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-3 sm:p-4 flex items-center space-x-3 shadow-sm",children:[e.jsx(n,{className:"w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 dark:text-emerald-400 flex-shrink-0"}),e.jsxs("div",{children:[e.jsx("div",{className:"font-bold text-slate-900 dark:text-white text-xs",children:"100% Brand Authenticity"}),e.jsx("div",{className:"text-slate-500 text-[10px] sm:text-[11px]",children:"Official manufacturer warranty included"})]})]}),e.jsxs("div",{className:"bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-3 sm:p-4 flex items-center space-x-3 shadow-sm",children:[e.jsx(w,{className:"w-5 h-5 sm:w-6 sm:h-6 text-amber-600 dark:text-amber-400 flex-shrink-0"}),e.jsxs("div",{children:[e.jsx("div",{className:"font-bold text-slate-900 dark:text-white text-xs",children:"7-Day Easy Replacement"}),e.jsx("div",{className:"text-slate-500 text-[10px] sm:text-[11px]",children:"Hassle-free return policy"})]})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-base sm:text-lg font-bold text-slate-900 dark:text-white",children:"Featured Corporate Hardware & Devices"}),e.jsx("p",{className:"text-xs text-slate-500",children:"Certified electronics with official brand coverage"})]}),e.jsxs(r,{to:"/catalog",className:"w-full sm:w-auto px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm active:scale-95",children:[e.jsx("span",{children:"Explore All 5,000 Products"}),e.jsx(p,{className:"w-3.5 h-3.5"})]})]}),e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6",children:c.map(t=>e.jsx(h,{product:t,onAddToCart:i,qtyInCart:a?a(t.id):0},t.id))})]}),e.jsxs("section",{className:"bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-3 border border-slate-800 shadow-lg",children:[e.jsxs("div",{className:"flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase tracking-wider",children:[e.jsx(m,{className:"w-4 h-4"})," Enterprise Grade Platform Reliability"]}),e.jsx("h3",{className:"text-xl sm:text-2xl font-bold",children:"High-Volume Product Distribution Infrastructure"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl",children:"Engineered to support 5,000 active hardware catalog SKUs with 24/7 continuous availability, high-speed response times, and seamless order authorization."})]})]})}export{S as default};
