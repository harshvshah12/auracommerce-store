'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import {
  ShoppingBag,
  Star,
  Search,
  CheckCircle2,
  Truck,
  ShieldCheck,
  Zap,
  Tag,
  ArrowRight,
  Plus,
  Minus,
  Trash2,
  X
} from 'lucide-react';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  badge: string;
  image: string;
  specs: string;
}

const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Aura Spatial Audio Pro Headphones',
    category: 'Audio',
    price: 24999,
    rating: 4.96,
    reviews: 312,
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    specs: 'Planar Magnetic Drivers • 42h Battery • Dual ANC'
  },
  {
    id: '2',
    name: 'Obsidian 75% Mechanical Keyboard',
    category: 'Keyboards',
    price: 12499,
    rating: 4.92,
    reviews: 184,
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80',
    specs: 'Gasket Mounted • Hot-swappable tactile switches • CNC Aluminium'
  },
  {
    id: '3',
    name: 'CyberTrack Ergonomic Mouse',
    category: 'Gear',
    price: 6499,
    rating: 4.88,
    reviews: 95,
    badge: 'Trending',
    image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80',
    specs: '26,000 DPI Optical Sensor • 59g Ultralight • 4K Polling'
  },
  {
    id: '4',
    name: 'Lumina OLED Ambient ScreenBar',
    category: 'Lighting',
    price: 4899,
    rating: 4.89,
    reviews: 140,
    badge: 'Editor Pick',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80',
    specs: 'Asymmetric Optical Design • Ra95 High CRI • Wireless Puck'
  }
];

export default function HomePage() {
  const [category, setCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [cart, setCart] = useState<Array<{ product: Product; qty: number }>>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  const categories = ['All', 'Audio', 'Keyboards', 'Gear', 'Lighting'];

  const filtered = PRODUCTS.filter((p) => {
    const matchCat = category === 'All' || p.category === category;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
                        p.specs.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { product, qty: 1 }];
    });
    setCartOpen(true);
  };

  const updateQty = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === id) {
            const newQty = item.qty + delta;
            return newQty > 0 ? { ...item, qty: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as Array<{ product: Product; qty: number }>
    );
  };

  const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.qty, 0);
  const discountAmount = discountApplied ? Math.round(subtotal * 0.15) : 0;
  const grandTotal = subtotal - discountAmount;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'VOXBUILD') {
      setDiscountApplied(true);
    } else {
      alert('Try promo code: VOXBUILD for 15% off!');
    }
  };

  const handleCheckout = () => {
    setCheckoutComplete(true);
    setTimeout(() => {
      setCart([]);
      setDiscountApplied(false);
      setCheckoutComplete(false);
      setCartOpen(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#070a12]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden border-b border-emerald-950/40">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-600/10 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[450px] h-[250px] bg-teal-500/10 blur-[110px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-emerald-800/40 text-xs font-semibold text-emerald-300 mb-6 shadow-sm">
            <ShoppingBag className="w-3.5 h-3.5 text-emerald-400" />
            <span>Precision-machined hardware gear for developers & creators</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.1]">
            Elevate Your Setup with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-400">
              AuraCommerce Hardware Store
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            A curated flagship store for audiophiles and engineering setups with interactive bag, promo discount system, and express dispatch tracking.
          </p>

          {/* Search bar & Cart status */}
          <div className="mt-10 max-w-2xl mx-auto p-2 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-xl flex flex-col sm:flex-row gap-2">
            <div className="flex-1 flex items-center gap-3 px-3.5 py-2">
              <Search className="w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search gear by name, switch type, sensor..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none"
              />
            </div>
            <button
              onClick={() => setCartOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all shadow-lg shadow-emerald-600/30"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Bag ({cart.reduce((a, b) => a + b.qty, 0)})</span>
            </button>
          </div>

          {/* Perks Bar */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold">
                <Truck className="w-4 h-4" />
                <span>Express Delivery</span>
              </div>
              <div className="text-white text-sm font-bold mt-1">Free on all orders</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
              <div className="flex items-center gap-2 text-teal-400 text-xs font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>2-Year Warranty</span>
              </div>
              <div className="text-white text-sm font-bold mt-1">Direct replacement</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
              <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold">
                <Tag className="w-4 h-4" />
                <span>Promo Code</span>
              </div>
              <div className="text-white text-sm font-bold mt-1">Use VOXBUILD (15% off)</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold">
                <Zap className="w-4 h-4" />
                <span>Direct Dispatch</span>
              </div>
              <div className="text-white text-sm font-bold mt-1">Ships in 24 hours</div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Showcase */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Featured Flagship Hardware
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Precision-machined tools tailored for high-focus engineering and creative work.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  category === c
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl bg-[#0c111e] border border-slate-800/80 overflow-hidden hover:border-emerald-500/40 transition-all flex flex-col"
            >
              <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-emerald-300 border border-emerald-500/30">
                  {item.badge}
                </span>
                <span className="absolute bottom-3 right-3 text-xs font-bold px-2 py-0.5 rounded bg-black/70 backdrop-blur-md text-amber-300 flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-amber-300" />
                  {item.rating}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-semibold text-emerald-400 uppercase tracking-wider">{item.category}</span>
                  <h3 className="text-base font-bold text-white mt-1 group-hover:text-emerald-300 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                    {item.specs}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500 block">Price</span>
                    <span className="text-sm font-bold text-white">₹{item.price.toLocaleString('en-IN')}</span>
                  </div>
                  <button
                    onClick={() => addToCart(item)}
                    className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-all shadow-md shadow-emerald-600/20"
                  >
                    Add To Bag
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cart Drawer */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm">
          <div className="w-full max-w-md bg-[#0a0f1d] border-l border-slate-800 h-full flex flex-col p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-emerald-400" />
                <h3 className="text-lg font-bold text-white">Your Shopping Bag</h3>
              </div>
              <button onClick={() => setCartOpen(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            {checkoutComplete ? (
              <div className="my-auto text-center py-8 space-y-3">
                <div className="w-12 h-12 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white">Order Successfully Placed!</h3>
                <p className="text-xs text-slate-400">
                  Your tracking number has been generated and logged to your Orders Hub.
                </p>
              </div>
            ) : cart.length === 0 ? (
              <div className="my-auto text-center py-12 text-slate-500 text-sm">
                Your bag is currently empty. Add products from the catalog above!
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto py-4 divide-y divide-slate-800/80">
                  {cart.map(({ product, qty }) => (
                    <div key={product.id} className="py-3 flex items-center justify-between gap-3">
                      <img src={product.image} alt={product.name} className="w-14 h-14 object-cover rounded-lg" />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-bold text-white truncate">{product.name}</h4>
                        <p className="text-xs text-emerald-400 mt-0.5">₹{product.price.toLocaleString('en-IN')}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQty(product.id, -1)}
                          className="p-1 rounded bg-slate-800 text-slate-300 hover:text-white"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold text-white w-4 text-center">{qty}</span>
                        <button
                          onClick={() => updateQty(product.id, 1)}
                          className="p-1 rounded bg-slate-800 text-slate-300 hover:text-white"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Promo Code Form */}
                <form onSubmit={handleApplyPromo} className="py-3 border-t border-slate-800 flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter VOXBUILD for 15% off"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="flex-1 px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs uppercase focus:outline-none focus:border-emerald-500"
                  />
                  <button
                    type="submit"
                    className="px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200"
                  >
                    Apply
                  </button>
                </form>

                {/* Total & Checkout */}
                <div className="pt-4 border-t border-slate-800 space-y-2 text-xs">
                  <div className="flex justify-between text-slate-400">
                    <span>Subtotal</span>
                    <span>₹{subtotal.toLocaleString('en-IN')}</span>
                  </div>
                  {discountApplied && (
                    <div className="flex justify-between text-emerald-400 font-semibold">
                      <span>Promo Discount (15%)</span>
                      <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-slate-400">
                    <span>Shipping</span>
                    <span className="text-emerald-400">FREE EXPRESS</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-slate-800">
                    <span>Grand Total</span>
                    <span>₹{grandTotal.toLocaleString('en-IN')}</span>
                  </div>

                  <button
                    onClick={handleCheckout}
                    className="w-full mt-3 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-lg shadow-emerald-600/30 transition-all"
                  >
                    Proceed To Instant Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
