import Image from "next/image";

// Separated data arrays for clean, humanized code reading
const portraitShows = [
  "/networker 2.webp",
  "/ad1.webp",
  "/ad2.webp",
  "/ad3.webp",
  "/networker 2.webp",
  "/ad5.webp",
  "/ad6.webp",
  "/00.webp",
];

const landscapeShows = [
  "/networker 3.webp",
  "/landscape.webp",
  "/landscape (2).webp",
  "/landscape (3).webp",
  "/networker 3.webp",
  "/landscape (5).webp",
  "/landscape (6).webp",
  "/landscape alien frank.webp",
  "/landscape.webp", // Fixed missing leading slash from your original code
];

export default function ShowcaseScroll() {
  return (
    <section className="relative py-20 md:py-28 bg-zinc-950 overflow-hidden">
      
      {/* 1. Header (Semantic SEO tags) */}
      <header className="text-center mb-12 md:mb-16 px-6">
        <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm font-semibold tracking-wider text-orange-500 uppercase mb-4">
          Original Content
        </span>
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight text-white tracking-tight">
          Original Stories.<br />
          <span className="text-orange-500">Real Talent.</span>
        </h2>
      </header>

      {/* 2. Top Row: Portrait Scrolling Left */}
      <div className="flex overflow-hidden mb-6 group">
        <div className="flex w-max animate-marquee-left hover:[animation-play-state:paused]">
          {/* We render the array twice to create the infinite seamless loop */}
          {[...portraitShows, ...portraitShows].map((src, i) => (
            <article 
              key={`portrait-${i}`} 
              className="relative w-[150px] h-[225px] md:w-[200px] md:h-[300px] mx-2 shrink-0 rounded-2xl overflow-hidden cursor-pointer transition-transform duration-500 hover:scale-105"
            >
              <Image
                src={src}
                alt={`Gutargoo Original Portrait ${i}`}
                fill
                sizes="(max-width: 768px) 150px, 200px"
                className="object-cover brightness-75 hover:brightness-100 transition-all duration-500"
              />
            </article>
          ))}
        </div>
      </div>

      {/* 3. Bottom Row: Landscape Scrolling Right */}
      <div className="flex overflow-hidden group">
        <div className="flex w-max animate-marquee-right hover:[animation-play-state:paused]">
          {[...landscapeShows, ...landscapeShows].map((src, i) => (
            <article 
              key={`landscape-${i}`} 
              className="relative w-[260px] h-[146px] md:w-[360px] md:h-[200px] mx-2 shrink-0 rounded-2xl overflow-hidden cursor-pointer transition-transform duration-500 hover:scale-105"
            >
              <Image
                src={src}
                alt={`Gutargoo Original Landscape ${i}`}
                fill
                sizes="(max-width: 768px) 260px, 360px"
                className="object-cover brightness-75 hover:brightness-100 transition-all duration-500"
              />
            </article>
          ))}
        </div>
      </div>

      {/* 4. Embedded CSS Keyframes for zero-config drop-in */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes marqueeLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes marqueeRight {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .animate-marquee-left {
            animation: marqueeLeft 40s linear infinite;
          }
          .animate-marquee-right {
            animation: marqueeRight 45s linear infinite;
          }
        `
      }} />
    </section>
  );
}