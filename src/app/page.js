export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 text-center bg-white text-black">
      <span className="mb-4 text-sm text-gray-500">✨ AI-Powered Domain Discovery</span>
      <h1 className="text-4xl font-bold mb-2">
        Find the Perfect <span className="text-blue-500">Domain Name</span>
      </h1>
      <p className="mb-6 text-gray-600">
        Discover available domains with AI-powered suggestions, real-time pricing, and smart search patterns.
      </p>
      <input
        type="text"
        placeholder="Enter keyword or idea..."
        className="w-full max-w-xl px-4 py-2 border border-gray-300 rounded-md mb-4"
      />
      <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition">
        Search Domains
      </button>
    </main>
  );
}


