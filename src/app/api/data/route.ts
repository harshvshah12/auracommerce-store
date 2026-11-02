import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: 'success',
    project: "AuraCommerce Hardware Store",
    archetype: "ecommerce",
    features: ["Curated flagship hardware peripherals with high-res galleries","Interactive shopping bag drawer with quantity counters & subtotal calculation","Promo coupon engine (VOXBUILD grants 15% discount)","Order tracking hub with Bengaluru fulfillment dispatch timeline"],
    generatedAt: new Date().toISOString()
  });
}
