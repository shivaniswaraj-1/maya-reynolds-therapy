import Reveal from "@/components/Reveal";
import { MAPS_URL, PRACTICE } from "@/lib/site";

export default function VisitDetails() {
  return (
    <section className="bg-accent-sand px-6 py-20 sm:px-10 md:px-16 md:py-28 lg:px-[8.8%] lg:py-[150px]">
      <Reveal>
        <h2 className="font-serif text-[40px] font-light leading-[1.3] tracking-tight text-foreground sm:text-[48px] lg:text-[56px]">
          Two ways to{" "}
          <span className="font-script text-[60px] leading-none text-accent-teal sm:text-[70px] lg:text-[80px]">
            meet
          </span>
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-[8%] lg:mt-20">
        <Reveal className="border-t border-foreground/20 pt-8">
          <h3 className="font-serif text-[30px] font-light text-foreground lg:text-[34px]">
            In person
          </h3>
          <p className="mt-5 text-[17px] leading-[1.8] text-foreground">
            Sessions take place at my office in Santa Monica, California.
          </p>
          <address className="mt-6 flex flex-col text-[17px] leading-[1.8] text-foreground not-italic">
            <span>{PRACTICE.street}</span>
            <span>{PRACTICE.city}</span>
          </address>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block border-b border-foreground pb-2 text-[11.5px] tracking-[0.12em] text-foreground uppercase transition-colors duration-300 hover:border-accent-teal hover:text-accent-teal"
          >
            Get directions
          </a>
        </Reveal>

        <Reveal delay={150} className="border-t border-foreground/20 pt-8">
          <h3 className="font-serif text-[30px] font-light text-foreground lg:text-[34px]">
            Telehealth
          </h3>
          <p className="mt-5 text-[17px] leading-[1.8] text-foreground">
            Secure telehealth sessions are available for clients located in
            California, so you can meet from wherever you feel most
            comfortable.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
