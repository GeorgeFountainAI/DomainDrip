export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto p-10 text-white">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">
        At DomainDrip.AI, we take your privacy seriously. This policy outlines what data we collect, how we use it, and your rights.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Information We Collect</h2>
      <ul className="list-disc pl-5 mb-4">
        <li>Email addresses when you sign up or log in</li>
        <li>Basic profile info from social login (if used)</li>
        <li>Anonymous site usage data (e.g., page visits)</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">How We Use Your Info</h2>
      <ul className="list-disc pl-5 mb-4">
        <li>To personalize your experience</li>
        <li>To improve our site and services</li>
        <li>To contact you about updates, only if you opt in</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Your Rights</h2>
      <ul className="list-disc pl-5 mb-4">
        <li>You can request to view, update, or delete your data at any time</li>
        <li>You can opt out of communications at any time</li>
      </ul>

      <p className="mt-8">
        If you have questions, contact us at <a href="mailto:support@domaindrip.ai" className="underline text-blue-400">support@domaindrip.ai</a>
      </p>
    </div>
  );
}
