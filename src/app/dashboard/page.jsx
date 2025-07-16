'use client';
import { useEffect, useState } from 'react';
import { getSession, signOut } from 'next-auth/react';

export default function DashboardPage() {
  const [session, setSession] = useState(null);
  const [name, setName] = useState('');
  const [savedName, setSavedName] = useState('');

  useEffect(() => {
    getSession().then((s) => {
      setSession(s);
      setName(s?.user?.name || '');
      setSavedName(localStorage.getItem('displayName') || s?.user?.name || '');
    });
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    localStorage.setItem('displayName', name);
    setSavedName(name);
  };

  if (!session) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-xl font-bold">Access Denied</h2>
        <p className="mt-4">You must be signed in to view the dashboard.</p>
        <a href="/signin" className="underline text-blue-500">
          Go to Sign In
        </a>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto p-8 text-white space-y-6">
      <h1 className="text-3xl font-bold">Welcome to your dashboard</h1>

      <div className="border border-gray-700 rounded-lg p-4 bg-gray-900">
        <h2 className="text-xl font-semibold mb-2">Your Info</h2>
        <p><strong>Name:</strong> {savedName}</p>
        <p><strong>Email:</strong> {session.user.email}</p>
      </div>

      <form onSubmit={handleUpdate} className="space-y-4">
        <h3 className="text-lg font-semibold">Update Display Name</h3>
        <input
          type="text"
          className="w-full p-2 border text-black"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter new name"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Save Name
        </button>
      </form>
    </div>
  );
}
