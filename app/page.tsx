import Navbar from "../component/navbar";
import Hero from "../component/hero";
import Marquee from "../component/Marquee";
import About from "../component/About";
import Footer from "../component/footer";
import Clap from "../component/clap";
import FAQ from "../component/FAQ";
import PricingSection from "../component/PricingSection";
import ShowcaseScroll from "../component/ShowcaseScroll";


export default function Home() {
  return (
    <main className="min-h-screen bg-black flex flex-col overflow-x-hidden">
      <Navbar />

      <div className="flex-grow"> 
        <Hero />
        <Marquee />
        <About />
        <Clap />
        <PricingSection />
        <ShowcaseScroll />
        
        <FAQ />
 
      </div>

      <Footer />
    </main>
  );
}