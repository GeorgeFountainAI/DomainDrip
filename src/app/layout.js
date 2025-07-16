import './globals.css';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import Link from 'next/link';

export const metadata = {
  title: 'DomainDrip.AI',
  description: 'Get the perfect domain in seconds.',
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className="bg-black text-white">
        <nav className="flex justify-between items-center p-4 border-b border-gray-700">
          <Link href="/" className="text-xl font-bold">
            DomainDrip.AI
          </Link>
          <div className="space-x-4">
            {session?.user ? (
              <>
                <span>Welcome, {session.user.email}</span>
                <Link href="/api/auth/signout">Sign Out</Link>
              </>
            ) : (
              <Link href="/signin">Sign In</Link>
            )}
          </div>
        </nav>

        <main className="p-4">{children}</main>

        <footer className="mt-20 text-center text-sm text-gray-400 border-t border-gray-700 py-6">
          <p>&copy; {new Date().getFullYear()} DomainDrip.AI. All rights reserved.</p>
          <p className="mt-2">
            <a href="/privacy-policy" className="underline hover:text-white">
              Privacy Policy
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}
