import './globals.css';

export const metadata = {
  title: 'DomainDrip',
  description: 'Get the perfect domain in seconds',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
