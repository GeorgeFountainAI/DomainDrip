'use client';

import React, { useState } from 'react';
import DomainResults from './DomainResults';

export default function DomainSearchForm() {
  const [keyword, setKeyword] = useState('');
  const [domains, setDomains] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!keyword) return;

    setLoading(true);

    try {
      const res = await fetch('/api/suggest-domains', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ keyword }),
      });

      const data = await res.json();
      setDomains(data.suggestions || []);
    } catch (error) {
      console.error('Domain search error:', error);
    }

    setLoading(false);
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-8">
      <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          placeholder="Enter a keyword"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
        >
          {loading ? 'Searching...' : 'Search Domains'}
        </button>
      </form>

      {domains.length > 0 && <DomainResults domains={domains} />}
    </div>
  );
}
