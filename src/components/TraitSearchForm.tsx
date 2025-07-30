import React, { useState } from "react";

const TRAITS = [
  "Professional", "Trendy", "Urban", "Fun",
  "Country", "Latin", "Short", "Long",
  "Simple", "Complex", "Initials", "Unique"
];

export default function TraitSearchForm() {
  const [selectedTraits, setSelectedTraits] = useState<string[]>([]);

  const toggleTrait = (trait: string) => {
    setSelectedTraits(prev =>
      prev.includes(trait)
        ? prev.filter(t => t !== trait)
        : [...prev, trait]
    );
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Choose your vibe. We’ll find your name.</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {TRAITS.map((trait) => (
          <button
            key={trait}
            onClick={() => toggleTrait(trait)}
            className={`border px-4 py-2 rounded-lg ${
              selectedTraits.includes(trait)
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
          >
            {trait}
          </button>
        ))}
      </div>
    </div>
  );
}
