import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HopeSection from "@/components/HopeSection";
import WhoWeHelp from "@/components/WhoWeHelp";
import StorySection from "@/components/StorySection";

export default function Home() {
  return (
    <div className="flex flex-col bg-background">
      <div className="flex min-h-screen flex-1 flex-col">
        <Navbar />
        <Hero />
      </div>
      <HopeSection />
      <WhoWeHelp />
      <StorySection />
    </div>
  );
}
