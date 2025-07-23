import React from "react";

const CreditPurchase = () => {
  const handleBuyNow = () => {
    // Later you’ll connect this to Stripe
    alert("Redirecting to Stripe checkout...");
  };

  return (
    <div className="border border-gray-200 rounded-xl p-4 shadow-sm bg-gray-50">
      <h2 className="text-xl font-semibold mb-2">Buy Search Credits</h2>
      <p className="text-gray-600 mb-4 text-sm">10 AI-powered searches for <strong>$5</strong></p>
      <button
        onClick={handleBuyNow}
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
      >
        Buy Now
      </button>
    </div>
  );
};

export default CreditPurchase;
