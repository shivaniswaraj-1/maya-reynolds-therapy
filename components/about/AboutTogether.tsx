import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function AboutTogether() {
  return (
    <section className="flex flex-col gap-12 bg-white pt-8 pb-20 md:flex-row md:gap-0 md:py-28 lg:pt-[130px] lg:pb-[135px]">
      <Reveal className="flex flex-col px-6 sm:px-10 md:w-[57.8%] md:pr-16 md:pl-16 lg:pr-[12%] lg:pl-[12.6%]">
        <h2 className="font-serif text-[26px] font-light leading-[1.45] tracking-tight text-foreground sm:text-[30px] lg:text-[32px]">
          Together, we&apos;ll tackle the specific challenges you&apos;re
          facing&mdash;conflict in your relationships, stress at work, or
          feeling disconnected from yourself or others.
        </h2>
        <p className="mt-8 text-[17px] leading-[1.8] text-foreground">
          We know that no one else has lived your life as you, so we&apos;ll
          take the time to understand your experience not just as
          therapists, but as people who genuinely care. You don&apos;t need
          to have it all figured out, you just need to be ready to take those
          first steps. When everything else feels unsteady, we hope to be a
          place of safety and stability in your life.
        </p>
        <Link
          href="/#contact"
          className="mt-12 w-fit rounded-full border border-foreground px-[19.5px] py-[15px] text-[11.5px] tracking-[0.12em] text-foreground uppercase transition-colors duration-300 hover:bg-foreground hover:text-background md:mt-auto md:pt-[15px]"
        >
          Schedule Now
        </Link>
      </Reveal>

      {/* Right image - flush to the viewport edge */}
      <Reveal
        delay={150}
        className="relative aspect-[803/518] w-full md:w-[42.2%]"
      >
        <Image
          src="/about-water.webp"
          alt="Clear turquoise ocean water rippling over the sand"
          fill
          sizes="(min-width: 768px) 42vw, 100vw"
          className="object-cover"
        />
      </Reveal>
    </section>
  );
}
