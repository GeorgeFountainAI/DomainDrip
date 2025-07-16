'use client';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const params = useSearchParams();
  const error = params.get('error');

  const handleLogin = async (e) => {
    e.preventDefault();
    await signIn('credentials', {
      email,
      password,
      callbackUrl: '/dashboard',
    });
  };

  return (
    <div className="max-w-md mx-auto mt-10 text-white">
      <h2 className="text-2xl font-bold mb-4">Sign In</h2>

      {error && <p className="text-red-500">Invalid login</p>}

      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border text-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border text-black"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="bg-black text-white p-2 w-full">
          Sign In
        </button>
      </form>

      <div className="mt-4 text-center">
        <button
          onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
          className="underline"
        >
          Sign in with Google
        </button>
        <div className="mt-2">
          <Link href="/forgot-password" className="text-sm underline">
            Forgot password?
          </Link>
        </div>
      </div>
    </div>
  );
}
