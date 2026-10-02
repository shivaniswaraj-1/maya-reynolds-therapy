import Image from "next/image";
import Link from "next/link";
import { PRACTICE } from "@/lib/site";

export default function BioHero() {
  return (
    <section className="flex flex-1 flex-col bg-background pb-16 md:min-h-[600px] md:flex-row md:items-center md:pb-0">
      {/* Text content */}
      <div className="flex flex-1 flex-col px-6 pt-10 pb-14 sm:px-10 md:self-stretch md:px-16 md:pt-[70px] md:pb-[75px] lg:pr-16 lg:pl-[8.8%]">
        <p className="text-[14px] tracking-[0.15em] text-foreground uppercase sm:text-[15px]">
          About Dr. Maya Reynolds, PsyD
        </p>

        <div className="mt-12 md:my-auto md:pt-16">
          <h1 className="max-w-[700px] font-serif text-[40px] font-light leading-[1.25] tracking-tight text-foreground sm:text-[50px] lg:text-[64px]">
            Practical tools, real depth, and room to{" "}
            <span className="font-script text-[56px] leading-none text-accent-teal sm:text-[68px] lg:text-[84px]">
              breathe
            </span>
            .
          </h1>
          <p className="mt-8 max-w-[620px] text-[17px] leading-[1.8] text-foreground md:mt-16">
            I’m a licensed clinical psychologist based in Santa Monica,
            California, offering therapy for adults who feel overwhelmed by
            anxiety, stress, or the lingering effects of past experiences.
          </p>
        </div>

        <Link
          href="/contact"
          className="mt-10 w-fit border-b border-foreground pb-2 text-[11.5px] tracking-[0.12em] text-foreground uppercase transition-colors duration-300 hover:border-accent-teal hover:text-accent-teal md:mt-0"
        >
          Book a consultation
        </Link>
      </div>

      {/* Portrait - framed by an offset sand block */}
      <figure className="mx-6 max-w-[460px] sm:mx-10 md:mx-0 md:mt-[70px] md:mr-16 md:mb-[50px] md:w-[36%] md:max-w-none lg:mr-[8.8%] lg:w-[32%]">
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute inset-0 translate-x-4 translate-y-4 bg-accent-sand md:translate-x-6 md:translate-y-6"
          />
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/dr-maya-reynolds.png"
              alt="Portrait of Dr. Maya Reynolds, PsyD, smiling, with long dark hair and a white blazer"
              fill
              priority
              sizes="(min-width: 1024px) 32vw, (min-width: 768px) 36vw, 460px"
              className="object-cover object-[50%_25%]"
            />
          </div>
        </div>
        <figcaption className="mt-10 md:mt-12">
          <span className="block font-serif text-[24px] font-normal text-foreground">
            {PRACTICE.name}
          </span>
          <span className="mt-1 block text-[12px] tracking-[0.18em] text-accent-teal uppercase">
            {PRACTICE.title} &middot; Santa Monica, CA
          </span>
        </figcaption>
      </figure>
    </section>
  );
}
