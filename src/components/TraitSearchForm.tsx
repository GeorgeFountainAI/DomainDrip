import React, { useState } from 'react';

export default function TraitSearchForm() {
  const [selectedTraits, setSelectedTraits] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  const toggleTrait = (trait: string) => {
    setSelectedTraits((prev) =>
      prev.includes(trait)
        ? prev.filter((t) => t !== trait)
        : [...prev, trait]
    );
  };

  const handleSubmit = async () => {
    if (selectedTraits.length === 0) return;

    setLoading(true);
    setResults([]);
    setError(null);

    try {
      const res = await fetch('/api/generate-domains', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ traits: selectedTraits }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      setResults(data.domains || []);
    } catch (err: any) {
      console.error('Error generating domains:', err);
      setError(err.message || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  const traits = [
    'Professional', 'Trendy', 'Urban',
    'Fun', 'Country', 'Latin',
    'Short', 'Long', 'Simple',
    'Complex', 'Initials', 'Unique',
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-2 text-center">Find Your Perfect Domain with Style</h1>
      <p className="text-center mb-4 text-gray-500">Choose your vibe. We’ll find your name.</p>

      <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto mb-6">
        {traits.map((trait) => (
          <button
            key={trait}
            onClick={() => toggleTrait(trait)}
            className={`border px-4 py-2 rounded ${
              selectedTraits.includes(trait) ? 'bg-black text-white' : 'bg-white'
            }`}
          >
            {trait}
          </button>
        ))}
      </div>

      <div className="text-center">
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? 'Generating...' : 'Generate Domains'}
        </button>
      </div>

      <div className="text-center mt-4 text-sm text-gray-600">
        You have: <strong>50 Credits</strong> | 1 Search = 2 Credits
      </div>

      {error && (
        <div className="text-center mt-4 text-red-500">
          ❌ {error}
        </div>
      )}

      {results.length > 0 && (
        <div className="mt-6 max-w-xl mx-auto text-center">
          <h2 className="text-xl font-semibold mb-2">Suggested Domains</h2>
          <ul className="space-y-2">
            {results.map((domain, index) => (
              <li key={index} className="bg-gray-100 px-4 py-2 rounded">
                {domain}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
