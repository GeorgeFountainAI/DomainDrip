import React from "react";

const plans = [
  {
    title: "Pro",
    badge: true,
    features: ["Daily domain drops", "Basic AI search", "Early access to promos"],
    priceIds: {
      monthly: import.meta.env.VITE_STRIPE_PRICE_PRO_MONTHLY,
      yearly: import.meta.env.VITE_STRIPE_PRICE_PRO_YEARLY,
    },
  },
  {
    title: "Power User",
    badge: false,
    features: ["Unlimited searches", "Search trend insights", "Bulk tools & alerts"],
    priceIds: {
      monthly: import.meta.env.VITE_STRIPE_PRICE_POWER_MONTHLY,
      yearly: import.meta.env.VITE_STRIPE_PRICE_POWER_YEARLY,
    },
  },
];

const SubscriptionPlans = () => {
  return (
    <section className="bg-white shadow-md rounded-2xl p-6">
      <h2 className="text-2xl font-semibold mb-4">Plans</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {plans.map((plan) => (
          <div key={plan.title} className="border p-4 rounded-xl">
            <h3 className="text-xl font-bold mb-2">{plan.title}</h3>

            {plan.badge && (
              <span className="inline-block mb-3 text-xs font-bold uppercase tracking-wide text-white bg-indigo-500 px-2 py-1 rounded-full">
                Most Popular
              </span>
            )}

            <ul className="mb-4 space-y-1 text-sm text-gray-700">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <span className="text-green-500 mr-2">✔</span> {feature}
                </li>
              ))}
            </ul>

            <div className="flex gap-2">
              <form method="POST" action="/api/create-checkout-session">
                <input type="hidden" name="priceId" value={plan.priceIds.monthly} />
                <button type="submit" className="bg-indigo-600 text-white px-4 py-1 rounded hover:bg-indigo-700 text-sm">
                  Monthly
                </button>
              </form>
              <form method="POST" action="/api/create-checkout-session">
                <input type="hidden" name="priceId" value={plan.priceIds.yearly} />
                <button type="submit" className="bg-gray-300 text-gray-800 px-4 py-1 rounded hover:bg-gray-400 text-sm">
                  Yearly
                </button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SubscriptionPlans;
