'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ShoppingBag, Star, SlidersHorizontal } from 'lucide-react';

export default function ExplorePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#070a12]">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full flex-1">
        <div className="border-b border-emerald-950 pb-6 mb-8">
          <h1 className="text-3xl font-bold text-white tracking-tight">Full Hardware Gear Catalog</h1>
          <p className="text-slate-400 text-sm mt-1">
            Browse all high-performance peripherals engineered with aerospace-grade materials.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#0c111e] border border-slate-800 text-center py-16 space-y-3">
          <ShoppingBag className="w-10 h-10 text-emerald-400 mx-auto" />
          <h3 className="text-lg font-bold text-white">Full Gear Catalog Live</h3>
          <p className="text-xs text-slate-400 max-w-md mx-auto">
            All 4 flagship products are in stock and ready for immediate 24h express dispatch across India.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
