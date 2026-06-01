interface MarqueeProps {
  reverse?: boolean;
}

const LANGUAGES = ["हिन्दी", "ENGLISH", "తెలుగు", "ਪੰਜਾਬੀ", "کشمیری", "ꯃꯤꯇꯩꯂꯣꯟ", "ગુજરાતી", "मराठी"];

export default function Marquee({ reverse = false }: MarqueeProps) {
  // Double the elements to create a seamless infinite loop illusion
  const doubledLanguages = [...LANGUAGES, ...LANGUAGES];

  return (
    <div className="w-full overflow-hidden border-t border-b border-white/10 bg-black py-4 select-none">
      <div
        className={`flex w-max ${
          reverse ? "animate-marquee-right" : "animate-marquee-left"
        }`}
      >
        {doubledLanguages.map((language, index) => (
          <div
            key={index}
            className="inline-flex items-center gap-5 px-5 text-lg font-bold tracking-widest text-white/60 hover:text-[#df4119] transition-colors duration-200 cursor-default whitespace-nowrap"
          >
            <span>{language}</span>
            <span className="text-[#df4119] text-xs" aria-hidden="true">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}