import { Metadata } from "next";
import Link from "next/link";

// SEO Metadata for Google
export const metadata: Metadata = {
  title: "Privacy Policy | Gutargoo+",
  description: "Learn how Gutargoo+ collects, uses, and protects your data. We respect your privacy on our 100% free streaming platform.",
  openGraph: {
    title: "Privacy Policy | Gutargoo+",
    description: "Learn how Gutargoo+ collects, uses, and protects your data.",
  },
};

const privacyData = [
  { title: "1. Information We Collect", content: "We collect information you provide directly, such as when you create an account or contact us. This includes name, email, and viewing preferences." },
  { title: "2. How We Use Your Information", content: "We use your information to provide, maintain, and improve our services, send communications, and comply with legal obligations." },
  { title: "3. Data Security", content: "We implement industry-standard security measures to protect your personal information. All data is encrypted during transmission and stored securely." },
  { title: "4. Sharing Your Information", content: "We do not sell your personal information. We may share data with trusted service providers who assist us in operating our platform, under strict confidentiality agreements." },
  { title: "5. Cookies and Tracking", content: "We use cookies and similar technologies to enhance your experience, remember preferences, and analyze how you use Gutargoo+." },
  { title: "6. Your Rights", content: "You have the right to access, update, or delete your personal information. Contact us at info@gutargooplus.com to exercise these rights." }, // Email updated
  { title: "7. iOS App Subscriptions and Payment", content: "Gutargoo+ does not offer any paid Subscriptions or Purchases on iOS. All content available in the iOS version is free to access." },
  { title: "8. Contact Us", content: "For any questions, feedback, or support, feel free to reach out to us anytime at info@gutargooplus.com" }, // Email updated
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-300 py-24 px-6">
      <article className="max-w-3xl mx-auto">
        
        <header className="mb-16 border-b border-white/10 pb-10">
          <Link href="/" className="text-orange-500 hover:text-orange-400 text-sm font-semibold mb-8 inline-flex items-center gap-2 transition-colors">
            &larr; Back to Home
          </Link>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mt-6">
            Privacy Policy
          </h1>
          <p className="text-zinc-500 mt-4 text-sm uppercase tracking-widest font-semibold">
            Last updated: January 03, 2026
          </p>
        </header>

        <div className="space-y-12">
          {privacyData.map((section, index) => (
            <section key={index}>
              <h2 className="text-2xl font-bold text-white mb-4">{section.title}</h2>
              <p className="leading-relaxed text-zinc-400">{section.content}</p>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}