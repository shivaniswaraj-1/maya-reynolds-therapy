import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function Struggle() {
  return (
    <section className="relative mt-10 flex flex-col overflow-hidden bg-background md:mt-16 md:flex-row lg:mt-24">
      {/* Text content */}
      <div className="flex flex-1 flex-col justify-center px-6 py-16 sm:px-10 md:px-16 md:py-20 lg:py-28 lg:pr-16 lg:pl-[8.8%]">
        <Reveal>
          <h2 className="max-w-[880px] font-serif text-[36px] font-light leading-[1.3] tracking-tight text-foreground sm:text-[44px] lg:text-[50px]">
            You’re thoughtful, self-aware, and high-achieving&mdash;and quietly
            exhausted.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-x-16 gap-y-8 md:mt-16 lg:mt-20 lg:grid-cols-2">
          <Reveal delay={100} className="flex flex-col gap-5">
            <p className="text-[14px] leading-[1.8] tracking-[0.1em] text-foreground uppercase sm:text-[15px]">
              Maybe you feel overwhelmed by anxiety, stress, or the lingering
              effects of past experiences.
            </p>
            <p className="text-[17px] leading-[1.8] text-foreground">
              Many people I work with feel “functional” on the outside while
              quietly struggling with constant worry, tension in their body,
              difficulty sleeping, or a sense that they’re always bracing for
              something to go wrong. Internally, they feel exhausted, stuck in
              overthinking, or emotionally on edge.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-[17px] leading-[1.8] text-foreground">
              Others are navigating the impact of earlier life experiences
              that continue to affect their relationships, confidence, or
              sense of safety. Wherever you’re starting from, therapy can help
              you understand both the emotional and physiological sides of
              what you’re experiencing&mdash;and find more sustainable ways of
              living and working.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Right image - flush to the viewport edge */}
      <div className="relative h-[340px] w-full md:h-auto md:w-[30.5%] md:self-stretch">
        <div className="absolute inset-0 md:top-[12.5%] md:bottom-[16.9%]">
          <Image
            src="/hope-ocean.jpg"
            alt="Sandy beach with gentle ocean waves under a cloudy sky"
            fill
            sizes="(min-width: 768px) 31vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
