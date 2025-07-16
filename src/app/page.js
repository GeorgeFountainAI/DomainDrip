'use client';

export default function HomePage() {
  const handleCheckout = async () => {
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    } else {
      alert('Checkout failed');
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-800 text-white flex items-center justify-center p-8">
      <div className="max-w-md w-full text-center space-y-6 bg-slate-950 bg-opacity-80 backdrop-blur-sm rounded-2xl p-10 shadow-2xl">
        <h1 className="text-4xl font-extrabold">DomainDrip</h1>
        <p className="text-lg text-gray-300">
          Get the perfect domain in seconds. Try DomainDrip Starter for just $19.99.
        </p>
        <button
          onClick={handleCheckout}
          className="bg-green-500 hover:bg-green-600 text-black font-semibold px-6 py-3 rounded-xl transition-all duration-200"
        >
          Buy Now
        </button>
      </div>
    </main>
  );
}
