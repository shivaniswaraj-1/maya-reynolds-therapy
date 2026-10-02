import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero, { ScriptWord } from "@/components/PageHero";
import OfficeFeature from "@/components/office/OfficeFeature";
import VisitDetails from "@/components/office/VisitDetails";
import BioCta from "@/components/bio/BioCta";

export const metadata: Metadata = {
  title: "Office | Dr. Maya Reynolds, PsyD",
  description:
    "A quiet, private therapy office in Santa Monica, CA, with natural light. In-person sessions and secure telehealth across California.",
};

export default function OfficePage() {
  return (
    <div className="flex flex-col bg-background">
      <Navbar />
      <div className="flex min-h-[calc(100svh-96px)] flex-1 flex-col lg:min-h-[calc(100svh-112px)]">
        <PageHero
          eyebrow="The office"
          title={
            <>
              A quiet, private space filled with natural <ScriptWord>light</ScriptWord>.
            </>
          }
          intro="See me in person at my Santa Monica office, or meet through secure telehealth from anywhere in California."
          image={{
            src: "/office-1.jpeg",
            alt: "Sunlit sitting area with tall windows, sheer curtains, exposed brick, and a swivel armchair",
            position: "object-[65%_50%]",
          }}
        />
      </div>
      <OfficeFeature />
      <VisitDetails />
      <BioCta />
      <Footer />
    </div>
  );
}
