"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What kind of content does Gutargoo+ offer?",
    a: "Gutargoo+ offers Regional Stories and Pure Drama. We feature addictive movies, web series, and short series crafted specifically for mobile viewing in your own regional language.",
  },
  {
    q: "Is there a subscription plan?",
    a: "No! Gutargoo+ is 100% FREE. You can enjoy unlimited viewing of all our movies, TV shows, and series without any paid subscription, hidden fees, or membership plans.",
  },
  {
    q: 'What does "Creator-First OTT" mean?',
    a: "We don't just showcase shows; we celebrate the people who make them. Gutargoo+ is built to directly support and recognize the writers, directors, actors, debutants, and crew who bring these amazing regional stories to life.",
  },
  {
    q: "Which languages are available?",
    a: "We focus heavily on Indian regional languages. Our goal is to bring you authentic, culturally relevant stories from every state in their native language.",
  },
  {
    q: "Is the content safe and clean?",
    a: "Yes. Gutargoo+ is built on genuine entertainment. No spammy shortcuts, no random dubbed content. Just original, high-quality stories made with care, specifically for you.",
  },
  {
    q: "Why Gutargoo+ over other OTT apps?",
    a: "Because we're India's apna OTT platform! We offer premium regional storytelling and influencer-driven content completely for free. It's high-quality entertainment without the frustrating paywalls.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // SEO Supercharger: Generate Google FAQ Schema structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  };

  return (
    <section id="faq" className="w-full py-20 md:py-28 bg-zinc-950 text-white">
      {/* Injecting Structured Data into the Document Head for Google Bot */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm font-semibold tracking-wider text-orange-500 uppercase">
            Got Questions?
          </span>
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight mt-4">
            FAQs
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                onClick={() => toggleFaq(i)}
                className={`group border rounded-2xl cursor-pointer transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-orange-500/30 bg-orange-500/[0.04]"
                    : "border-white/10 bg-white/[0.03] hover:border-white/20"
                }`}
              >
                {/* Question Row */}
                <button
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left gap-4 font-bold text-base md:text-lg select-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-white group-hover:text-zinc-200 transition-colors">
                    {faq.q}
                  </span>
                  
                  {/* Icon with smooth transform states */}
                  <div
                    className={`w-9 h-9 rounded-full border flex items-center justify-center text-xl font-light shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "border-orange-500 bg-orange-500/10 text-orange-500 rotate-180"
                        : "border-white/20 text-orange-500 group-hover:border-white/40"
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </div>
                </button>

                {/* CSS-Only Smooth Accordion Slide Transition */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 md:px-6 md:pb-6 text-sm md:text-base text-zinc-400 leading-relaxed border-t border-white/[0.02] pt-4">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}