"use client";

import { useEffect, useRef, useState } from "react";

// 1. Data separated clearly
const plans = [
  { name: "Basic", price: "99", quality: "HD", features: ["HD Streaming", "Watch on 1 device", "Contains Ads"] },
  { name: "Premium", price: "199", quality: "4K", popular: true, features: ["4K Ultra HD", "Watch on 2 devices", "Ad-Free Experience"] },
  { name: "Enterprise", price: "349", quality: "4K+HDR", features: ["4K Ultra HD + HDR", "Watch on 5 devices", "Ad-Free Experience", "Offline Downloads"] },
];

// 2. The Main Section - Clean and easy to read
export default function PricingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const currentRef = sectionRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsRevealed(true), 1500);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(currentRef);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="pricing" className="relative py-24 bg-zinc-950 text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(223,65,25,0.08)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <PricingHeader isRevealed={isRevealed} />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-sm md:max-w-none mx-auto">
          {plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} isRevealed={isRevealed} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------
// CLEAN HELPER COMPONENTS (Makes the code "Humanized")
// ---------------------------------------------------------

function PricingHeader({ isRevealed }: { isRevealed: boolean }) {
  return (
    <div className="text-center mb-16">
      <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest uppercase text-white/70 mb-6">
        Subscription Plans
      </span>
      
      <div className="relative h-20 flex items-center justify-center overflow-hidden">
        <h2 className={`absolute text-4xl md:text-6xl font-extrabold transition-all duration-700 ease-in-out ${isRevealed ? "opacity-0 -translate-y-12" : "opacity-100 translate-y-0"}`}>
          Choose Your Plan
        </h2>
        <h2 className={`absolute text-4xl md:text-6xl font-extrabold transition-all duration-700 ease-in-out ${isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          Just Kidding. It's <span className="text-orange-500">100% FREE!</span>
        </h2>
      </div>
      <p className="text-white/50 text-lg mt-2">Experience premium regional storytelling.</p>
    </div>
  );
}

function PlanCard({ plan, isRevealed }: { plan: any; isRevealed: boolean }) {
  // Extracting messy CSS logic into clean variables
  const cardBaseStyle = "relative flex flex-col p-8 rounded-3xl border transition-all duration-500 backdrop-blur-md";
  const cardStateStyle = isRevealed 
    ? "border-orange-500/40 shadow-[0_10px_40px_rgba(223,65,25,0.1)]" 
    : (plan.popular ? "bg-orange-500/5 border-orange-500/20 md:-translate-y-4" : "bg-white/5 border-white/10");

  const buttonStyle = isRevealed 
    ? "bg-orange-500 text-white hover:bg-orange-600 shadow-lg shadow-orange-500/20" 
    : (plan.popular ? "bg-white text-black hover:bg-zinc-200" : "bg-white/10 text-white hover:bg-white/20");

  return (
    <article className={`${cardBaseStyle} ${cardStateStyle}`}>
      {plan.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
          Most Popular
        </div>
      )}

      {/* Card Header */}
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-2xl font-bold">{plan.name}</h3>
        <span className="bg-white/10 px-3 py-1 rounded-md text-xs font-semibold">{plan.quality}</span>
      </div>

      {/* Price Animation Area */}
      <div className="relative h-20 mb-8 flex items-end">
        
        {/* Fake Price (Fades and Strikes Out) */}
        <div className={`transition-all duration-700 ease-in-out font-extrabold flex items-center ${isRevealed ? "text-lg text-white/40 absolute top-0 -translate-y-2" : "text-5xl text-white relative"}`}>
          <span className={isRevealed ? "hidden" : "text-2xl text-white/50 mr-1 font-semibold"}>₹</span>
          {plan.price}
          <span className={isRevealed ? "hidden" : "text-base text-white/50 ml-2 font-normal"}>/mo</span>
          
          <div className={`absolute left-[-5%] h-[2px] bg-white transition-all duration-500 ease-out origin-left ${isRevealed ? "w-[110%] delay-300" : "w-0"}`} />
        </div>

        {/* Real Price (Free) */}
        <div className={`absolute bottom-0 text-5xl font-extrabold text-white transition-all duration-700 ease-in-out ${isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}>
          Free
        </div>
      </div>

      {/* Feature List */}
      <ul className="flex-grow space-y-4 mb-8">
        {plan.features.map((feature: string, idx: number) => (
          <li key={idx} className="flex items-center gap-3 text-sm text-white/70">
            <svg className="w-5 h-5 text-orange-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      {/* Action Link */}
      <a 
        href="https://play.google.com/store/apps/details?id=com.gutargooproo.application" 
        target="_blank" 
        rel="noopener noreferrer"
        className={`block text-center w-full py-4 rounded-xl font-bold transition-all duration-300 ${buttonStyle}`}
      >
        {isRevealed ? "Watch for Free Now" : "Select Plan"}
      </a>
    </article>
  );
}