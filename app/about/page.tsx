import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BioHero from "@/components/bio/BioHero";
import BioIntro from "@/components/bio/BioIntro";
import BioBanner from "@/components/bio/BioBanner";
import TraumaWork from "@/components/bio/TraumaWork";
import BurnoutWork from "@/components/bio/BurnoutWork";
import Sessions from "@/components/bio/Sessions";
import BioCta from "@/components/bio/BioCta";

export const metadata: Metadata = {
  title: "About | Dr. Maya Reynolds, PsyD",
  description:
    "Dr. Maya Reynolds is a licensed clinical psychologist in Santa Monica, CA, offering therapy for anxiety, trauma, and burnout in person and via telehealth.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col bg-canvas">
      <Navbar />
      {/* Hero fills the rest of the first screen below the sticky header */}
      <div className="flex min-h-[calc(100svh-96px)] flex-1 flex-col lg:min-h-[calc(100svh-112px)]">
        <BioHero />
      </div>
      <BioIntro />
      <BioBanner />
      <TraumaWork />
      <BurnoutWork />
      <Sessions />
      <BioCta />
      <Footer />
    </div>
  );
}
