"use client";

import { useEffect, useRef } from "react";

export default function GutargooLocalSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Optimized Observer: Triggers once, then unobserves to save memory
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-8");
            entry.target.classList.add("opacity-100", "translate-y-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal-element");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 bg-black text-white overflow-hidden"
    >
      {/* Background Glow Effects (Adapted from your CTA CSS) */}
      <div className="absolute top-1/2 left-[-150px] w-[500px] h-[500px] -translate-y-1/2 bg-[radial-gradient(circle,rgba(223,65,25,0.12)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/2 right-[-150px] w-[500px] h-[500px] -translate-y-1/2 bg-[radial-gradient(circle,rgba(223,65,25,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Content & USP */}
          <article className="flex flex-col items-start space-y-6">
            <div className="reveal-element opacity-0 translate-y-8 transition-all duration-700 ease-out inline-flex items-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-orange-400 shadow-[0_0_15px_rgba(223,65,25,0.2)]">
              ✨ Regional Cinema
            </div>
            
            <h2 className="reveal-element opacity-0 translate-y-8 transition-all duration-700 delay-100 ease-out text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              Celebrate<br />
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Local Artists.
              </span>
            </h2>
            
            <p className="reveal-element opacity-0 translate-y-8 transition-all duration-700 delay-200 ease-out text-lg text-white/70 leading-relaxed max-w-lg">
              We support state-level movies and production houses. <strong className="text-white">A platform where your local stories shine.</strong> Discover movies and web series produced right in your area, crafted beautifully in your native language.
            </p>

            <ul className="reveal-element opacity-0 translate-y-8 transition-all duration-700 delay-300 ease-out space-y-4 w-full max-w-lg mt-4">
              {[
                { icon: "🎬", text: "Exclusive state-wise movies and series" },
                { icon: "🗣️", text: "Stream content in your own native language" },
                { icon: "🚀", text: "Empower and support regional production houses" },
              ].map((point, index) => (
                <li key={index} className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
                  <span className="text-xl">{point.icon}</span>
                  <span className="text-white/80 font-medium">{point.text}</span>
                </li>
              ))}
            </ul>

            <div className="reveal-element opacity-0 translate-y-8 transition-all duration-700 delay-400 ease-out text-sm font-semibold tracking-widest uppercase text-white/40 mt-8 border-t border-white/10 pt-6 w-full max-w-lg">
              Every stream = <span className="text-white">Culture</span> + <span className="text-white">Recognition</span> + <span className="text-white">Growth</span>
            </div>

            <p className="reveal-element opacity-0 translate-y-8 transition-all duration-700 delay-500 ease-out text-base text-white/60">
              Stories aren't built by algorithms. They're born from culture.<br />
              <strong className="text-white">Watch what feels like home.</strong>
            </p>
          </article>

          {/* Right Side: Continuous Video */}
          <div className="reveal-element opacity-0 translate-y-8 transition-all duration-1000 delay-300 ease-out relative w-full aspect-[9/16] max-w-sm mx-auto lg:max-w-md">
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent blur-3xl rounded-full" />
            <div className="relative h-full w-full rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl shadow-orange-500/10">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
                aria-label="Preview of local regional content streaming"
              >
                <source src="/map.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}