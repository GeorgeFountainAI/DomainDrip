export default function SignupPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-white text-black">
      <h1 className="text-4xl font-bold mb-4">Sign Up</h1>
      <p className="mb-6 text-lg">Create your account to get started.</p>
      {/* You can replace this with a real form later */}
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
          Sign Up
        </button>
      </form>
    </main>
  );
}