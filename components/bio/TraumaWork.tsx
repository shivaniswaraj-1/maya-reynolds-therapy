import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function TraumaWork() {
  return (
    <section className="bg-white py-20 md:py-28 lg:pt-[120px] lg:pb-[90px]">
      <Reveal className="px-6 sm:px-10 md:px-16 lg:px-[8.8%]">
        <p className="text-[14px] tracking-[0.15em] text-ink uppercase sm:text-[15px]">
          Trauma work
        </p>
        <h2 className="mt-6 max-w-[1180px] font-serif text-[32px] font-light leading-[1.35] tracking-tight text-ink sm:text-[40px] lg:text-[46px]">
          Trauma work is an important part of my practice&mdash;paced
          carefully, with an emphasis on{" "}
          <span className="mr-2 font-script text-[46px] leading-none text-accent sm:text-[56px] lg:text-[62px]">
            safety
          </span>{" "}
          and stabilization.
        </h2>
      </Reveal>

      <div className="mt-14 flex flex-col gap-12 md:mt-24 md:flex-row md:items-center md:gap-0 lg:mt-[120px]">
        {/* Left image - flush to the viewport edge */}
        <Reveal className="relative aspect-[947/565] w-full md:w-[49.7%]">
          <Image
            src="/images/trauma-grounding.jpg"
            alt="Bare feet resting on sandy ground, a symbol of feeling grounded and safe"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </Reveal>

        <Reveal
          delay={150}
          className="flex flex-col gap-6 px-6 sm:px-10 md:flex-1 md:pr-16 md:pl-12 lg:pr-[8.8%] lg:pl-[8.2%]"
        >
          <p className="text-[14px] tracking-[0.15em] text-ink uppercase sm:text-[15px]">
            Single-incident &amp; complex trauma
          </p>
          <p className="text-[17px] leading-[1.8] text-ink">
            I work with adults who have experienced single-incident trauma as
            well as more complex, long-standing patterns that may stem from
            childhood, relationships, or chronic stress.
          </p>
          <p className="text-[17px] leading-[1.8] text-ink">
            We’ll move at a pace that feels manageable, focusing on helping you
            feel more regulated in your daily life&mdash;not just during
            sessions. Approaches like EMDR and body-oriented techniques help
            address both the emotional and physiological sides of what
            you’ve been carrying.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
