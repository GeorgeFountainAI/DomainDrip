import React from 'react';

interface Domain {
  name: string;
  available: boolean;
  price?: string;
}

export default function DomainResults({ domains }: { domains: Domain[] }) {
  return (
    <div className="mt-10 bg-gray-900 text-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">
        Search Results ({domains.length} domains)
      </h2>

      <ul className="space-y-4">
        {domains.map((domain, index) => (
          <li key={index} className="flex items-center justify-between p-3 bg-gray-800 rounded-md">
            <span className="text-lg">
              {domain.name}
              <span className={`ml-2 px-2 py-1 text-xs rounded ${
                domain.available ? 'bg-green-600' : 'bg-red-600'
              }`}>
                {domain.available ? 'Available' : 'Unavailable'}
              </span>
            </span>
            {domain.available && (
              <button
                onClick={() => alert(`Pretend to buy ${domain.name} for ${domain.price || '$9.99'}`)}
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded"
              >
                Buy {domain.price || '$9.99'}
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
