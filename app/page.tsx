import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import Struggle from "@/components/home/Struggle";
import QuoteBanner from "@/components/home/QuoteBanner";
import FocusAreas from "@/components/home/FocusAreas";
import Approach from "@/components/home/Approach";
import Specialties from "@/components/home/Specialties";
import Methods from "@/components/home/Methods";
import Office from "@/components/home/Office";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <div className="flex flex-col bg-background">
      <Navbar />
      {/* Hero fills the rest of the first screen below the sticky header */}
      <div className="flex min-h-[calc(100svh-96px)] flex-1 flex-col lg:min-h-[calc(100svh-112px)]">
        <Hero />
      </div>
      <Struggle />
      <QuoteBanner />
      <FocusAreas />
      <Approach />
      <Specialties />
      <Methods />
      <Office />
      <Contact />
      <Footer />
    </div>
  );
}
