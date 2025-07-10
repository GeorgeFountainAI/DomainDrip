export default function Home() {
  return (
    <main className="min-h-screen px-6 py-10 bg-white text-black">
      <h1 className="text-blue-400 font-semibold mb-2 text-sm">
        ✨ AI-Powered Domain Discovery
      </h1>
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Find the Perfect <span className="text-blue-500">Domain Name</span>
      </h2>
      <p className="text-gray-400 text-lg mb-6">
        Discover available domains with AI-powered suggestions, real-time pricing, and smart search patterns.
      </p>

      <form className="flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          placeholder="Enter keyword or idea..."
          className="border border-gray-300 rounded-lg px-4 py-2 w-full"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white rounded-lg px-6 py-2 hover:bg-blue-700"
        >
          Search Domains
        </button>
      </form>
    </main>
  );
}

