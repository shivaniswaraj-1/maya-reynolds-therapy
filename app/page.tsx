import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import styles from "@/components/layout/site-grid.module.css";
import Hero from "@/components/landing/Hero";
import Struggle from "@/components/landing/Struggle";
import Services from "@/components/landing/Services";
import QuoteBand from "@/components/landing/QuoteBand";
import MeetMaya from "@/components/landing/MeetMaya";
import HelpWith from "@/components/landing/HelpWith";
import Approach from "@/components/landing/Approach";
import OurOffice from "@/components/landing/OurOffice";
import Local from "@/components/landing/Local";
import Methods from "@/components/landing/Methods";
import Faqs from "@/components/landing/Faqs";
import BookCta from "@/components/landing/BookCta";
import { FAQS } from "@/lib/faqs";
import { PRACTICE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Anxiety & Trauma Therapist in Santa Monica, CA | Dr. Maya Reynolds, PsyD",
  description:
    "Licensed clinical psychologist offering anxiety, trauma & EMDR, and burnout therapy in Santa Monica, CA, with secure telehealth across California.",
  openGraph: {
    title: "Anxiety & Trauma Therapy in Santa Monica, CA | Dr. Maya Reynolds, PsyD",
    description:
      "Warm, evidence-based therapy for adults navigating anxiety, panic, trauma, and burnout—in person in Santa Monica or via telehealth across California.",
    type: "website",
    locale: "en_US",
    images: [{ url: "/images/office-sunlit.jpg", alt: "Dr. Maya Reynolds’ Santa Monica therapy office" }],
  },
};

// Structured data for local search: the practice, the psychologist, and the FAQs.
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: PRACTICE.name,
    description:
      "Therapy for adults with anxiety, panic, trauma, and burnout in Santa Monica, CA, plus secure telehealth across California.",
    image: "/images/office-sunlit.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: PRACTICE.street,
      addressLocality: "Santa Monica",
      addressRegion: "CA",
      postalCode: "90401",
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "City", name: "Santa Monica" },
      { "@type": "State", name: "California" },
    ],
    knowsAbout: [
      "Anxiety",
      "Panic",
      "Trauma",
      "Burnout",
      "Perfectionism",
      "Cognitive-behavioral therapy (CBT)",
      "EMDR",
      "Mindfulness-based therapy",
      "Body-oriented therapy",
    ],
    employee: {
      "@type": "Person",
      name: "Maya Reynolds",
      honorificSuffix: "PsyD",
      jobTitle: PRACTICE.title,
      image: "/images/dr-maya-reynolds.png",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  },
];

/*
  Part 2: the cloned homepage structure, redesigned with Dr. Maya Reynolds'
  profile as the only source of content, a new palette, and new imagery.
*/
export default function Home() {
  return (
    <div className={`${styles.page} flex flex-col bg-canvas text-ink`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Navbar />
      <main>
        <Hero />
        <Reveal>
          <Struggle />
        </Reveal>
        <Reveal>
          <Services />
        </Reveal>
        <QuoteBand />
        <Reveal>
          <MeetMaya />
        </Reveal>
        <Reveal>
          <HelpWith />
        </Reveal>
        <Reveal>
          <Approach />
        </Reveal>
        <Reveal>
          <OurOffice />
        </Reveal>
        <Reveal>
          <Local />
        </Reveal>
        <Reveal>
          <Methods />
        </Reveal>
        <Faqs />
        <Reveal>
          <BookCta />
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}
