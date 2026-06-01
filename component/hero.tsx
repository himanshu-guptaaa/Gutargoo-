"use client";

import { useEffect, useState } from "react";

const MOVIES = [
  "/networker 2.webp",
  "/ad3.webp",
  "/ad2.webp",
  "/ad4.webp",
  "/ad5.webp",
];

const WORDS = [
  "Full High.",
  "Your Entertainment.",
  "Always Real.",
  "Pure Drama.",
  "No Limits.",
];

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  // Grouped timers into a single, clean useEffect
  useEffect(() => {
    const textTimer = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % WORDS.length);
    }, 2000);
    
    const carouselTimer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % MOVIES.length);
    }, 3000);
    
    return () => {
      clearInterval(textTimer);
      clearInterval(carouselTimer);
    };
  }, []);

  // Carousel positioning logic
  const getOffset = (index: number) => {
    const diff = index - activeIndex;
    const half = Math.floor(MOVIES.length / 2);
    if (diff < -half) return diff + MOVIES.length;
    if (diff > half) return diff - MOVIES.length;
    return diff;
  };

  return (
    <section className="relative min-h-[600px] md:min-h-[800px] h-auto md:h-screen flex flex-col items-center justify-between pt-28 md:pt-32 bg-[#0d0d0d] overflow-hidden">
      
      {/* 1. Header & Buttons */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 mb-10 md:mb-0">
        <h1 className="font-extrabold text-[32px] md:text-[64px] leading-tight text-white mb-6 uppercase tracking-wide">
          REGIONAL STORIES.<br />
          <span className="text-[#df4119] transition-opacity duration-300">
            {WORDS[textIndex]}
          </span>
        </h1>

        <div className="flex gap-4 justify-center items-center">
          <a
            href="https://apps.apple.com/in/app/gutargoo/id6761012576"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 hover:-translate-y-1 hover:scale-105"
          >
            <img src="/apple.png" alt="App Store" className="h-10 md:h-[50px] w-auto rounded-md" />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.gutargooproo.application"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 hover:-translate-y-1 hover:scale-105"
          >
            <img src="/playstore.png" alt="Google Play" className="h-10 md:h-[50px] w-auto rounded-md" />
          </a>
        </div>
      </div>

      {/* 2. Spread Carousel */}
      <div className="relative w-full max-w-7xl h-[280px] md:h-[450px] flex justify-center items-end md:-mb-[50px]">
        {MOVIES.map((poster, index) => {
          const offset = getOffset(index);
          const absOffset = Math.abs(offset);
          const isActive = offset === 0;

          return (
            <div
              key={poster}
              className={`absolute bottom-6 md:bottom-[50px] w-[150px] h-[220px] md:w-[280px] md:h-[400px] rounded-2xl overflow-hidden transition-all duration-700 ease-out origin-bottom ${
                isActive 
                  ? 'shadow-[0_-10px_80px_rgba(223,65,25,0.4)] border border-white/10' 
                  : 'shadow-[0_10px_40px_rgba(0,0,0,0.8)]'
              }`}
              style={{
                zIndex: MOVIES.length - absOffset,
                /* Pure CSS Math using clamp(): Eliminates the need for buggy window resize JS listeners */
                transform: `translateX(calc(${offset} * clamp(75px, 10vw, 160px))) translateY(calc(${absOffset} * clamp(20px, 3vw, 40px))) scale(${1 - absOffset * 0.12})`,
              }}
            >
              <img src={poster} alt={`Movie poster ${index + 1}`} className="w-full h-full object-cover" />
              {/* Dark overlay for inactive background cards */}
              {!isActive && <div className="absolute inset-0 bg-black/50 transition-opacity duration-500" />}
            </div>
          );
        })}
      </div>
      
    </section>
  );
}