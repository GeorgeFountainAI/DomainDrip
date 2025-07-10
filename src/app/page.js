export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex flex-col">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center px-6 py-4">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">✨</span>
          <span className="text-lg font-bold text-blue-400">DomainDrip.AI</span>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-sm">Sign In</a>
          <a
            href="/signup"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm"
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <span className="text-sm text-blue-200 mb-2">✨ AI-Powered Domain Discovery</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
          Find the <span className="text-white">Perfect</span>{" "}
          <span className="text-blue-400">Domain Name</span>
        </h1>
        <p className="text-gray-300 max-w-xl mb-6">
          Discover available domains with AI-powered suggestions, real-time pricing,
          and smart search patterns. Build your brand with the perfect domain name.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/signup"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-semibold text-sm"
          >
            Get Started Free
          </a>
          <a
            href="/learn"
            className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-md font-semibold text-sm"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-6 px-4 text-sm text-gray-400 text-center">
        <p>&copy; {new Date().getFullYear()} DomainDrip.AI — All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-2">
          <a href="/about" className="hover:text-white">About</a>
          <a href="/contact" className="hover:text-white">Contact</a>
          <a href="/privacy" className="hover:text-white">Privacy</a>
        </div>
      </footer>
    </main>
  );
}


