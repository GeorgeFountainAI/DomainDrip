'use client';

import { useState } from 'react';

export default function Home() {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/checkout', { method: 'POST' });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert('Checkout failed.');
      }
    } catch (error) {
      alert('Checkout failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 py-12 bg-black text-white">
      <div className="bg-zinc-900 p-8 rounded-xl shadow-lg text-center max-w-md w-full">
        <h1 className="text-4xl font-bold mb-4">DomainDrip</h1>
        <p className="mb-6 text-lg">Get the perfect domain in seconds.</p>
        <button
          onClick={handleCheckout}
          disabled={loading}
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded disabled:opacity-60"
        >
          {loading ? 'Redirecting...' : 'Buy Now'}
        </button>
      </div>
    </main>
  );
}
