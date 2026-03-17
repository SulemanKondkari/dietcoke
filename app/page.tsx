import NavBar from "@/components/NavBar";
import HeroCanvas from "@/components/HeroCanvas";
import SustainabilityStory from "@/components/SustainabilityStory";
import TasteSection from "@/components/TasteSection";
import TickerSection from "@/components/TickerSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import StickyBuyBar from "@/components/StickyBuyBar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavBar />
      
      {/* Scroll Experience */}
      <section className="relative">
        <HeroCanvas />
      </section>

      {/* Narrative Sections */}
      <SustainabilityStory />
      <TasteSection />
      <TickerSection />
      <CTASection />
      
      <Footer />
      <StickyBuyBar />
    </main>
  );
}

