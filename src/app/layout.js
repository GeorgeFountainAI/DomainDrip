import "./globals.css";

export const metadata = {
  title: "DomainDrip",
  description: "AI-powered domain discovery platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className="bg-white text-black">
        {children}
      </body>
    </html>
  );
}

