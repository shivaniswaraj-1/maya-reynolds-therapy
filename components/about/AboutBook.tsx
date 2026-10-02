import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function AboutBook() {
  return (
    <section className="flex flex-col-reverse gap-12 bg-background py-20 md:flex-row md:gap-0 md:py-28 lg:py-[128px]">
      {/* Left image - flush to the viewport edge */}
      <Reveal className="relative aspect-[803/662] w-full md:w-[42.2%]">
        <Image
          src="/about-book.webp"
          alt="Two friends laughing together over a phone while sitting on driftwood"
          fill
          sizes="(min-width: 768px) 42vw, 100vw"
          className="object-cover"
        />
      </Reveal>

      <Reveal
        delay={150}
        className="flex flex-col px-6 sm:px-10 md:flex-1 md:pr-16 md:pl-12 lg:pr-[8.8%] lg:pl-[8.2%]"
      >
        <p className="text-[14px] tracking-[0.15em] text-foreground uppercase sm:text-[15px] md:pt-2">
          Book an appointment
        </p>

        <h2 className="mt-12 font-serif text-[36px] font-light leading-[1.4] tracking-tight text-foreground sm:text-[46px] md:mt-auto lg:text-[56px]">
          It&apos;s time to close the gap between the life you want and the
          life you&apos;re{" "}
          <span className="font-script text-[56px] leading-none text-accent-teal sm:text-[68px] lg:text-[84px]">
            living
          </span>
          .
        </h2>
        <p className="mt-6 text-[17px] leading-[1.8] text-foreground">
          Sessions available for you both online and in-person based in
          Newbury Park.
        </p>
        <Link
          href="/#contact"
          className="mt-8 w-fit rounded-full border border-foreground px-[19.5px] py-[15px] text-[11.5px] tracking-[0.12em] text-foreground uppercase transition-colors duration-300 hover:bg-foreground hover:text-background"
        >
          Book Now
        </Link>
      </Reveal>
    </section>
  );
}
