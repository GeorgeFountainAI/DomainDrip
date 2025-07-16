'use client';
import { useState } from 'react';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleReset = async (e) => {
    e.preventDefault();
    if (!email.includes('@')) {
      setMessage('Invalid email address');
      return;
    }

    // Placeholder logic — connect to Supabase reset if needed
    setTimeout(() => {
      setMessage('If your email exists, a reset link has been sent.');
    }, 500);
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
      {message && <p className="text-green-500">{message}</p>}
      <form onSubmit={handleReset} className="space-y-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-2 border"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="bg-black text-white p-2 w-full">
          Send Reset Link
        </button>
      </form>
    </div>
  );
}
