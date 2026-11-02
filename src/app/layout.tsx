import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "AuraCommerce Hardware Store — Precision-machined hardware gear for developers & creators",
  description: "A curated flagship store for audiophiles and engineering setups with interactive bag, promo discount system, and express dispatch tracking.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen flex flex-col bg-[#070a12] text-slate-100 antialiased selection:bg-indigo-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
