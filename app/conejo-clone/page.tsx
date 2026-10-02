import type { Metadata } from "next";
import Header from "@/components/conejo/Header";
import Hero from "@/components/conejo/Hero";
import HopeSection from "@/components/conejo/HopeSection";
import WhoWeHelp from "@/components/conejo/WhoWeHelp";
import StorySection from "@/components/conejo/StorySection";
import AreasOfExpertise from "@/components/conejo/AreasOfExpertise";
import HowWeWork from "@/components/conejo/HowWeWork";
import HonoringSection from "@/components/conejo/HonoringSection";
import Specialties from "@/components/conejo/Specialties";
import ScheduleSection from "@/components/conejo/ScheduleSection";
import Footer from "@/components/conejo/Footer";
import styles from "@/components/conejo/conejo.module.css";

export const metadata: Metadata = {
  title: "Conejo Valley Family Counseling | Homepage Clone",
  description:
    "A Next.js + Tailwind CSS recreation of the Conejo Valley Family Counseling homepage.",
};

// Part 1 of the assignment: a recreation of conejovalleycounseling.com/home.
export default function ConejoClonePage() {
  return (
    <div className={`${styles.page} relative bg-white text-foreground`}>
      <Header />
      <main id="main">
        <Hero />
        <HopeSection />
        <WhoWeHelp />
        <StorySection />
        <AreasOfExpertise />
        <HowWeWork />
        <HonoringSection />
        <Specialties />
        <ScheduleSection />
      </main>
      <Footer />
    </div>
  );
}
