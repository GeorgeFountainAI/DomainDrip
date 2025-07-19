'use client';

import { useState, FormEvent } from 'react';

export default function DomainSearchForm() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate fake domain results
    setTimeout(() => {
      setResults([
        `${query}.com`,
        `${query}.net`,
        `get${query}.ai`,
        `${query}hub.io`,
        `${query}-site.dev`
      ]);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="max-w-xl mx-auto">
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          placeholder="Enter a domain keyword"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-2 text-black rounded"
        />
        <button
          type="submit"
          className="mt-2 p-2 bg-blue-600 text-white rounded w-full"
        >
          {loading ? 'Searching...' : 'Search Domains'}
        </button>
      </form>

      {results.length > 0 && (
        <div className="bg-gray-800 p-4 rounded">
          <h2 className="text-lg font-bold mb-2">Results:</h2>
          <ul>
            {results.map((domain, index) => (
              <li key={index} className="text-green-400">{domain}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
