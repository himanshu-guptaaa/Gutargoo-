import Link from "next/link";

const FOOTER_MARQUEE = [
  "Gutargoo+", "✦", "Inhouse Production", "✦", "Indian Influencer OTT", "✦", "Creator First", "✦", "Multiple Languages", "✦", "Full High", "✦",
  "Gutargoo+", "✦", "Real Movies", "✦", "Regional OTT", "✦", "Creator First", "✦", "Telugu", "✦", "Full High", "✦"
];

export default function Footer() {
  // Doubling the array items for loop stability
  const doubledMarquee = [...FOOTER_MARQUEE, ...FOOTER_MARQUEE];

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 overflow-hidden w-full">
      {/* Upper Scrolling Banner */}
      <div className="w-full overflow-hidden py-5 border-b border-white/5 bg-[#0e0e0e] select-none">
        <div className="flex w-max animate-marquee-footer">
          {doubledMarquee.map((token, index) => (
            <span 
              key={index}
              className={`px-4 text-xl font-black tracking-wide whitespace-nowrap flex items-center ${
                token === "✦" ? "text-[#df4119] text-sm" : "text-white/15"
              }`}
            >
              {token}
            </span>
          ))}
        </div>
      </div>

      {/* Main Structural Layout Links Block */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 md:gap-6">
          
          {/* Brand/Social Column */}
          <div className="flex flex-col gap-4 md:col-span-2">
            <div className="h-6 flex items-center">
              <img src="/Logo GG+.webp" alt="Gutargoo Plus Logo" className="h-6 w-auto object-contain" />
            </div>
            <p className="text-sm text-white/35 font-medium">Made with ❤️ in India</p>
            
            {/* Social SVGs */}
            <div className="flex gap-3 mt-2">
              <a href="https://youtube.com/@gutargooplus?si=zqav4EZMSLDGt4rr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:border-[#df4119] hover:text-[#df4119] hover:bg-[#df4119]/10 transition-all duration-300" aria-label="YouTube Channel">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93 $.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="https://www.instagram.com/gutargooplus?igsh=MWI2Z3Q5bGRmcnlo" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:border-[#df4119] hover:text-[#df4119] hover:bg-[#df4119]/10 transition-all duration-300" aria-label="Instagram Profile">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/gutargooplus/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:border-[#df4119] hover:text-[#df4119] hover:bg-[#df4119]/10 transition-all duration-300" aria-label="LinkedIn Page">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>

          {/* Links Grid Section */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xs font-bold tracking-widest text-white/30 uppercase">Pages</h2>
            <div className="flex flex-col gap-2.5 text-sm font-medium text-white/50">
              <Link href="/" className="hover:text-white transition-colors duration-200">Home</Link>
              <a href="https://www.linkedin.com/company/gutargooplus/jobs/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">Careers</a>
              <Link href="/privacy" className="hover:text-white transition-colors duration-200">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors duration-200">Terms & Conditions</Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-xs font-bold tracking-widest text-white/30 uppercase">Install</h2>
            <div className="flex flex-col gap-2.5 text-sm font-medium text-white/50">
              <a href="https://apps.apple.com/in/app/gutargoo/id6761012576" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">App Store</a>
              <a href="https://play.google.com/store/apps/details?id=com.gutargooproo.application" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">Google Play</a>
            </div>
          </div>


          <div className="flex flex-col gap-4">
            <h2 className="text-xs font-bold tracking-widest text-white/30 uppercase">Contact</h2>
            <div className="flex flex-col gap-2.5 text-sm font-medium text-white/50">
              <a href="mailto:info@gutargooplus.com" className="hover:text-white transition-colors duration-200 break-all">info@gutargooplus.com</a>
            </div>
          </div>

        </div>

        {/* Lower Legal Disclaimer Bar */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/25 font-medium">
          <p>© {new Date().getFullYear()} Gutargoo+. All rights reserved.</p>
          <p className="tracking-wide">India ka apna OTT Platform</p>
        </div>
      </div>
    </footer>
  );
}