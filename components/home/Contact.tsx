import Reveal from "@/components/Reveal";
import { MAPS_URL, PRACTICE } from "@/lib/site";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-6 bg-accent-sand px-6 py-20 sm:px-10 md:px-16 md:py-28 lg:px-[8.8%] lg:py-[160px]"
    >
      <div className="grid gap-14 lg:grid-cols-[1fr_36%] lg:gap-[9%]">
        <Reveal>
          <p className="text-[14px] tracking-[0.15em] text-foreground uppercase sm:text-[15px]">
            Book a consultation
          </p>
          <h2 className="mt-10 max-w-[760px] font-serif text-[40px] font-light leading-[1.35] tracking-tight text-foreground sm:text-[48px] md:mt-16 lg:text-[56px]">
            I may be a good{" "}
            <span className="mr-2 font-script text-[60px] leading-none text-accent-teal sm:text-[70px] lg:text-[80px]">
              fit
            </span>{" "}
            for you.
          </h2>
          <p className="mt-8 max-w-[680px] text-[17px] leading-[1.8] text-foreground">
            If you’re looking for a therapist who combines practical tools with
            depth-oriented work&mdash;and who understands the realities of
            living and working in a fast-paced environment&mdash;reach out to
            see whether we’re a good match.
          </p>
        </Reveal>

        <Reveal delay={150} className="flex flex-col justify-end gap-10 border-t border-foreground/15 pt-10 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12">
          <div>
            <h3 className="text-[14px] tracking-[0.15em] text-foreground uppercase">
              Office
            </h3>
            <address className="mt-4 flex flex-col text-[17px] leading-[1.8] text-foreground not-italic">
              <span>{PRACTICE.name}</span>
              <span>{PRACTICE.street}</span>
              <span>{PRACTICE.city}</span>
            </address>
          </div>
          <div>
            <h3 className="text-[14px] tracking-[0.15em] text-foreground uppercase">
              Sessions
            </h3>
            <p className="mt-4 text-[17px] leading-[1.8] text-foreground">
              In person in Santa Monica, or secure telehealth for clients
              located in California.
            </p>
          </div>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit rounded-full border border-foreground px-[19.5px] py-[15px] text-[11.5px] tracking-[0.12em] text-foreground uppercase transition-colors duration-300 hover:bg-foreground hover:text-background"
          >
            Get directions
          </a>
        </Reveal>
      </div>
    </section>
  );
}
