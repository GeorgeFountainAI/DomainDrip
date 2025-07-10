export const metadata = {
  title: 'DomainDrip.AI',
  description: 'AI-powered domain discovery platform',
};

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white px-4">
      <nav className="w-full flex justify-between items-center py-6 px-4 max-w-6xl">
        <h1 className="text-2xl font-bold text-blue-500">✨ DomainDrip.AI</h1>
        <div>
          <button className="mr-4 text-white hover:text-blue-400">Sign In</button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">Get Started</button>
        </div>
      </nav>

      <div className="text-center mt-16">
        <span className="text-sm text-blue-200">✨ AI-Powered Domain Discovery</span>
        <h2 className="text-4xl md:text-5xl font-extrabold mt-4 mb-6">
          Find the Perfect <span className="text-blue-400">Domain Name</span>
        </h2>
        <p className="text-lg max-w-xl mx-auto mb-8 text-gray-300">
          Discover available domains with AI-powered suggestions, real-time pricing, and smart search patterns. Build your brand with the perfect domain name.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-md text-white font-semibold">Get Started Free</button>
          <button className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-md text-white font-semibold">Learn More</button>
        </div>
      </div>
    </main>
  );
}


