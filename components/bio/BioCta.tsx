import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function BioCta() {
  return (
    <section className="bg-canvas px-6 py-20 sm:px-10 md:px-16 md:py-28 lg:px-[8.8%] lg:py-[150px]">
      <Reveal className="mx-auto flex max-w-[1000px] flex-col items-center text-center">
        <p className="text-[14px] tracking-[0.15em] text-ink uppercase sm:text-[15px]">
          Book a consultation
        </p>
        <h2 className="mt-10 font-serif text-[36px] font-light leading-[1.4] tracking-tight text-ink sm:text-[46px] lg:text-[56px]">
          If you’re ready for practical tools and depth-oriented work, I may be
          a good{" "}
          <span className="font-script text-[56px] leading-none text-accent sm:text-[68px] lg:text-[84px]">
            fit
          </span>
          .
        </h2>
        <p className="mt-6 text-[17px] leading-[1.8] text-ink">
          Sessions available in person in Santa Monica and by telehealth across
          California.
        </p>
        <Link
          href="/contact"
          className="mt-10 w-fit rounded-full border border-primary px-[19.5px] py-[15px] text-[11.5px] tracking-[0.12em] text-ink uppercase transition-colors duration-300 hover:bg-primary hover:text-canvas"
        >
          Get in touch
        </Link>
      </Reveal>
    </section>
  );
}
