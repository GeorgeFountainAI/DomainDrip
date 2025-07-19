import './globals.css';

export const metadata = {
  title: 'DomainDrip',
  description: 'AI-powered domain name search',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="bg-black text-white min-h-screen"
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}


