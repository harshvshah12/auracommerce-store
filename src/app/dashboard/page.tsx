'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ShoppingBag, Truck, CheckCircle2, Clock } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#070a12]">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full flex-1">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-emerald-950 pb-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Customer Portal Active</span>
            </div>
            <h1 className="text-3xl font-bold text-white tracking-tight">Orders & Dispatch Hub</h1>
            <p className="text-slate-400 text-sm mt-0.5">Track your packages, download GST invoices, and manage warranty claims.</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300">
              Customer: <strong className="text-white">Harsh Shah</strong>
            </span>
          </div>
        </div>

        {/* Recent Order Card */}
        <div className="rounded-2xl bg-[#0c111e] border border-slate-800 p-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 gap-2">
            <div>
              <span className="text-[10px] font-semibold text-emerald-400 uppercase tracking-wider">Tracking #EXP-IN-90821</span>
              <h3 className="text-base font-bold text-white mt-0.5">Aura Spatial Audio Pro Headphones</h3>
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold self-start sm:self-auto">
              Out for Delivery
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div>
              <span className="text-slate-500 block">Dispatch Origin</span>
              <span className="text-slate-200 font-medium">Bengaluru Fulfillment Hub</span>
            </div>
            <div>
              <span className="text-slate-500 block">Estimated Arrival</span>
              <span className="text-emerald-400 font-bold">Tomorrow by 2:00 PM</span>
            </div>
            <div>
              <span className="text-slate-500 block">Invoice Total</span>
              <span className="text-white font-bold">₹21,249 (15% Off Applied)</span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
