export default function SigninPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-white text-black">
      <h1 className="text-4xl font-bold mb-4">Sign In</h1>
      <p className="mb-6 text-lg">Welcome back! Please sign in to continue.</p>
      <form className="flex flex-col gap-4 w-full max-w-sm">
        <input
          type="email"
          placeholder="Email"
          className="p-3 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition"
        >
          Sign In
        </button>
      </form>
    </main>
  );
}