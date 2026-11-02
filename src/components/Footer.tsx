import React from 'react';
import Link from 'next/link';
import { ShoppingBag, ShieldCheck } from 'lucide-react';

export function Footer() {
  return (
    <footer className="mt-auto border-t border-emerald-950/60 bg-[#060912] text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-2 space-y-3">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-emerald-400" />
            <span className="font-bold text-white text-base">AuraCommerce Hardware Store</span>
          </div>
          <p className="text-slate-400 max-w-sm text-xs leading-relaxed">
            A curated flagship store for audiophiles and engineering setups with interactive bag, promo discount system, and express dispatch tracking.
          </p>
          <div className="text-xs text-slate-500 pt-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Fast Express Dispatch Across India • 2-Year Direct Warranty</span>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3">Shop Collections</h4>
          <ul className="space-y-2 text-xs">
            <li><Link href="/" className="hover:text-white transition-colors">Storefront Highlights</Link></li>
            <li><Link href="/explore" className="hover:text-white transition-colors">All Hardware Gear</Link></li>
            <li><Link href="/dashboard" className="hover:text-white transition-colors">Your Order Status</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3">Commerce Stack</h4>
          <ul className="space-y-2 text-xs text-slate-500">
            <li>Framework: Next.js 15 App Router</li>
            <li>Database: Supabase E-Commerce Schema</li>
            <li>Payments: Ready for UPI & Stripe</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-emerald-950/50 max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
        <p>© {new Date().getFullYear()} AuraCommerce Hardware Store. Premium Developer & Creator Gear.</p>
        <p className="flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>Crafted autonomously with VoxBuild AI</span>
        </p>
      </div>
    </footer>
  );
}
