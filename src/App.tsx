import React from 'react';
import TraitSearchForm from "./components/TraitSearchForm";

function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-8 bg-gray-50">
      <div className="w-full max-w-4xl text-center">
        <h1 className="text-4xl font-bold mb-2">Find Your Perfect Domain with Style</h1>
        <p className="text-gray-600 mb-8">Choose your vibe. We’ll find your name.</p>

        {/* Trait-Based Domain Search UI */}
        <TraitSearchForm />

        {/* Credit Info Display */}
        <div className="text-right text-sm mt-6 text-gray-500">
          You have: <span className="font-semibold text-black">50 Credits</span>
          | 1 Search = 2 Credits
        </div>

        {/* Subscription Plans (commented out for MVP) */}
        {/*
        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Plans</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border p-4 rounded shadow">
              <h3 className="text-xl font-semibold">Pro</h3>
              <p className="text-sm text-purple-600 font-bold">MOST POPULAR</p>
              <ul className="mt-2 space-y-1 text-sm">
                <li>✓ Daily domain drops</li>
                <li>✓ Basic AI search</li>
                <li>✓ Early access to promos</li>
              </ul>
            </div>

            <div className="border p-4 rounded shadow">
              <h3 className="text-xl font-semibold">Power User</h3>
              <ul className="mt-2 space-y-1 text-sm">
                <li>✓ Unlimited searches</li>
                <li>✓ Search trend insights</li>
                <li>✓ Bulk tools & alerts</li>
              </ul>
            </div>
          </div>
        </section>
        */}
      </div>
    </main>
  );
}

export default App;
