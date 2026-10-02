import Image from "next/image";
import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="flex flex-1 flex-col bg-background md:min-h-[600px] md:flex-row">
      {/* Text content */}
      <div className="flex flex-1 flex-col px-6 pt-10 pb-14 sm:px-10 md:px-16 md:pt-[70px] md:pb-[75px] lg:pl-[8.8%] lg:pr-16">
        <p className="text-[14px] tracking-[0.15em] text-foreground uppercase sm:text-[15px]">
          Therapists in Newbury Park, CA
        </p>

        <div className="mt-12 md:my-auto md:pt-16">
          <h1 className="max-w-[680px] font-serif text-[40px] font-light leading-[1.25] tracking-tight text-foreground sm:text-[50px] lg:text-[64px]">
            We&apos;re here to help{" "}
            <span className="font-script text-[56px] leading-none text-accent-teal sm:text-[68px] lg:text-[84px]">
              you
            </span>{" "}
            find solid ground again.
          </h1>
          <p className="mt-8 max-w-[700px] text-[17px] leading-[1.8] text-foreground md:mt-24">
            Discover a transformative therapy experience with our dedicated,
            specialized therapists.
          </p>
        </div>

        <Link
          href="/#contact"
          className="mt-10 w-fit border-b border-foreground pb-2 text-[11.5px] tracking-[0.12em] text-foreground uppercase transition-colors duration-300 hover:border-accent-teal hover:text-accent-teal md:mt-0"
        >
          Book an appointment
        </Link>
      </div>

      {/* Right image - flush to the viewport edge */}
      <div className="relative aspect-[5/4] w-full md:mt-[70px] md:mb-[50px] md:aspect-auto md:w-[46%]">
        <Image
          src="/about-hero.webp"
          alt="A laughing family hugging on a couch"
          fill
          priority
          sizes="(min-width: 768px) 46vw, 100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
