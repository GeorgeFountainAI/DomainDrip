'use client';

import DomainSearchForm from '../components/DomainSearchForm';
import CreditPurchase from '../components/CreditPurchase'; // 👈 Add this line

export default function HomePage() {
  return (
    <main className="min-h-screen p-4 bg-black text-white">
      <h1 className="text-2xl font-bold mb-4">Search for a Domain</h1>
      <DomainSearchForm />

      {/* Optional Credits Purchase Section */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-2">Buy More Search Credits</h2>
        <CreditPurchase /> {/* 👈 This shows the Stripe test button */}
      </div>
    </main>
  );
}

