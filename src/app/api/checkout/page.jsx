"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const domain = searchParams.get("domain");
  const price = searchParams.get("price") || "9.99";
  const [success, setSuccess] = useState(false);

  const handleFakePurchase = () => {
    setTimeout(() => setSuccess(true), 1500);
  };

  if (!domain) {
    return (
      <div className="p-6">
        <h1 className="text-xl font-semibold">No domain selected.</h1>
        <Link href="/">← Go back</Link>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-gray-900 rounded-xl shadow-xl text-white">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <p className="text-lg mb-2">You're about to "buy": <strong>{domain}</strong></p>
      <p className="mb-6">Price: <span className="text-green-400">${price}</span></p>

      {success ? (
        <div className="bg-green-700 p-4 rounded">
          <p>✅ Purchase complete! You now "own" <strong>{domain}</strong>.</p>
          <Link href="/" className="underline mt-4 block">Back to search</Link>
        </div>
      ) : (
        <button
          className="bg-blue-500 px-6 py-2 rounded hover:bg-blue-600 transition"
          onClick={handleFakePurchase}
        >
          Place Order
        </button>
      )}
    </div>
  );
}
