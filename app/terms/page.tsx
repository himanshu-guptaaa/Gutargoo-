import { Metadata } from "next";
import Link from "next/link";

// 1. Next.js SEO Metadata (This is what ranks on Google)
export const metadata: Metadata = {
  title: "Terms and Conditions | Gutargoo+",
  description: "Read the Terms and Conditions for Gutargoo+. Understand your rights and our guidelines for using India's 100% free regional OTT platform.",
  openGraph: {
    title: "Terms and Conditions | Gutargoo+",
    description: "Read the Terms and Conditions for Gutargoo+.",
  },
};

// 2. Data separated for clean reading
const termsData = [
  { title: "1. Acceptance of Terms", content: "Welcome to Gutargoo+! By using our streaming platform, you agree to these Terms." },
  { title: "2. Service Description", content: "Gutargoo+ is a free digital entertainment platform that provides access to movies, TV shows, documentaries, and other video content for online streaming. Users can enjoy unlimited viewing of the available content without any paid subscription or membership plans. The service is designed to provide easy and convenient entertainment access for all users at no cost. Content availability may vary over time depending on updates and platform improvements." },
  { title: "3. Account Registration and Security", content: "You are responsible for maintaining your account safety. Keep your login credentials secure. Do not share your OTP." },
  { title: "4. Acceptable Use Policy", content: "You agree not to misuse our service, including: Copying or distributing content illegally. Bypassing security measures. Uploading viruses or harmful software." },
  { title: "5. Content & Intellectual Property", content: "All content is protected under copyright laws. Personal, non-commercial use only. No redistribution allowed." },
  { title: "6. Privacy Policy", content: "Your privacy is important. Please review our Privacy Policy." },
  { title: "7. Service Availability", content: "We cannot guarantee uninterrupted access or specific content availability." },
  { title: "8. Disclaimer & Limitation of Liability", content: "Gutargoo+ is provided to users for entertainment purposes on an “as available” basis. We work hard to ensure the service runs smoothly and the content is presented accurately. The service may occasionally experience temporary interruptions due to maintenance, updates, or network issues. Content availability and information may change over time, and we encourage users to verify details when needed. To the maximum extent permitted by applicable law, Gutargoo+ is not responsible for any unexpected losses caused by technical disruptions beyond our control. Nothing in this section is intended to limit any consumer rights that cannot be excluded under applicable laws." },
  { title: "9. Governing Law", content: "These terms are governed by the laws of India." },
  { title: "10. Contact Information", content: "For any questions, feedback, or support, feel free to reach out to us anytime at: info@gutargooplus.com" }, // Email updated as requested
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-300 py-24 px-6">
      <article className="max-w-3xl mx-auto">
        {/* Header Section */}
        <header className="mb-16 border-b border-white/10 pb-10">
          <Link href="/" className="text-orange-500 hover:text-orange-400 text-sm font-semibold mb-8 inline-flex items-center gap-2 transition-colors">
            &larr; Back to Home
          </Link>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mt-6">
            Terms & Conditions
          </h1>
        </header>

        {/* Content Section */}
        <div className="space-y-12">
          {termsData.map((section, index) => (
            <section key={index} className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-white mb-4">{section.title}</h2>
              <p className="leading-relaxed text-zinc-400">{section.content}</p>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}