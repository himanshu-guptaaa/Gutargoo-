import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full bg-[#0a0a0a] py-4 px-5 md:px-10 flex items-center justify-between border-b border-white/5">
      
     
      <Link href="/">
        <img 
          src="/logo.webp" 
          alt="Gutargoo Plus" 
          className="h-6 md:h-7 w-auto object-contain" 
        />
      </Link>
//navlogo
      <div className="flex items-center gap-5 md:gap-8">
        <span className="hidden md:block text-white/60 text-sm font-medium tracking-wide">
          Available for iOS & Android
        </span>
        
        <a
          href="https://play.google.com/store/apps/details?id=com.gutargooproo.application"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#df4119] hover:bg-[#c23714] text-white px-6 py-2.5 rounded-full text-sm font-bold transition-colors"
        >
          Get the app
        </a>
      </div>

    </header>
  );
}