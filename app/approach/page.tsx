import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero, { ScriptWord } from "@/components/PageHero";
import Philosophy from "@/components/approach/Philosophy";
import BioValues from "@/components/bio/BioValues";
import Methods from "@/components/home/Methods";
import QuoteBanner from "@/components/home/QuoteBanner";
import BioCta from "@/components/bio/BioCta";

export const metadata: Metadata = {
  title: "Approach | Dr. Maya Reynolds, PsyD",
  description:
    "A warm, collaborative, and grounded approach to therapy combining CBT, EMDR, mindfulness-based practices, and body-oriented techniques.",
};

export default function ApproachPage() {
  return (
    <div className="flex flex-col bg-background">
      <Navbar />
      <div className="flex min-h-[calc(100svh-96px)] flex-1 flex-col lg:min-h-[calc(100svh-112px)]">
        <PageHero
          eyebrow="My approach"
          title={
            <>
              Warm, collaborative, and <ScriptWord>grounded</ScriptWord>.
            </>
          }
          intro="Sessions are structured enough to feel supportive, while still leaving space for reflection and depth."
          image={{
            src: "/office-2.jpeg",
            alt: "Therapy room with a grey sofa, leather armchair, olive tree, and bookshelves",
            position: "object-[40%_50%]",
          }}
        />
      </div>
      <Philosophy />
      <BioValues />
      <Methods divider={false} />
      <QuoteBanner />
      <BioCta />
      <Footer />
    </div>
  );
}
