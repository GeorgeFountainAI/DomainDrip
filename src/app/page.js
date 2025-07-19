'use client';

import DomainSearchForm from '../components/DomainSearchForm';

export default function HomePage() {
  return (
    <main className="min-h-screen p-4 bg-black text-white">
      <h1 className="text-2xl font-bold mb-4">Search for a Domain</h1>
      <DomainSearchForm />
    </main>
  );
}
