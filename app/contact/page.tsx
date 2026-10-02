import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/contact/ContactForm";
import { MAPS_URL, PRACTICE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact | Dr. Maya Reynolds, PsyD",
  description:
    "Get in touch with Dr. Maya Reynolds, PsyD, about therapy in Santa Monica or telehealth across California.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col bg-background">
      <Navbar />

      <section className="grid gap-16 pt-10 pb-24 md:pt-16 lg:grid-cols-[42%_1fr] lg:gap-[8%] lg:pt-[60px] lg:pb-[160px]">
        {/* Intro + office details */}
        <Reveal className="lg:pt-10">
          <div className="px-6 sm:px-10 md:px-16 lg:pr-0 lg:pl-[21%]">
            <h1 className="font-serif text-[52px] font-light leading-[1.1] tracking-tight text-foreground sm:text-[64px]">
              Get{" "}
              <span className="font-script text-[72px] leading-none text-accent-teal sm:text-[96px]">
                in touch
              </span>
              .
            </h1>
            <p className="mt-10 max-w-[640px] text-[17px] leading-[1.8] text-foreground">
              Use this form to tell me a little about what brings you to
              therapy. I’ll follow up to talk through next steps and whether
              we’re a good fit.
            </p>
          </div>

          {/* Divider bleeds to the left viewport edge, like the reference */}
          <hr className="mt-14 border-foreground/15 lg:mt-28" />

          <div className="px-6 pt-12 sm:px-10 md:px-16 lg:pr-0 lg:pt-16 lg:pl-[21%]">
            <address className="flex flex-col text-[17px] leading-[1.8] text-foreground not-italic">
              <span>{PRACTICE.street}</span>
              <span>{PRACTICE.city}</span>
            </address>
            <p className="mt-5 text-[17px] leading-[1.8] text-foreground">
              In-person sessions in Santa Monica
              <br />
              Telehealth for clients located in California
            </p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block border-b border-foreground pb-2 text-[11.5px] tracking-[0.12em] text-foreground uppercase transition-colors duration-300 hover:border-accent-teal hover:text-accent-teal"
            >
              Get directions
            </a>
          </div>
        </Reveal>

        {/* Form */}
        <Reveal delay={150} className="px-6 sm:px-10 md:px-16 lg:pr-[9%] lg:pl-0">
          <ContactForm />
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}
