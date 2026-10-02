import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero, { ScriptWord } from "@/components/PageHero";
import SpecialtyDetails from "@/components/specialties/SpecialtyDetails";
import FocusAreas from "@/components/home/FocusAreas";
import BioCta from "@/components/bio/BioCta";

export const metadata: Metadata = {
  title: "Specialties | Dr. Maya Reynolds, PsyD",
  description:
    "Therapy for anxiety, panic, trauma, burnout, and perfectionism with Dr. Maya Reynolds, PsyD, in Santa Monica and via telehealth across California.",
};

export default function SpecialtiesPage() {
  return (
    <div className="flex flex-col bg-background">
      <Navbar />
      <div className="flex min-h-[calc(100svh-96px)] flex-1 flex-col lg:min-h-[calc(100svh-112px)]">
        <PageHero
          eyebrow="Specialties"
          title={
            <>
              Support for what you’ve been quietly <ScriptWord>carrying</ScriptWord>.
            </>
          }
          intro="My work often focuses on anxiety, panic, trauma, and burnout—for adults who feel overwhelmed by stress or the lingering effects of past experiences."
          image={{
            src: "/hope-ocean.jpg",
            alt: "Sandy beach with gentle ocean waves under a cloudy sky",
          }}
        />
      </div>
      <SpecialtyDetails />
      <FocusAreas />
      <BioCta />
      <Footer />
    </div>
  );
}
