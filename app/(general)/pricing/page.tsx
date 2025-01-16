import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Pricing description',
};

export default function PricingPage() {
  return (
    <h1 className="text-7xl">Pricing page</h1>
  )
}