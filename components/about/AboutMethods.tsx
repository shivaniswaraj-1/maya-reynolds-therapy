import Reveal from "@/components/Reveal";
import MethodsAccordion from "@/components/about/MethodsAccordion";

export default function AboutMethods() {
  return (
    <section
      id="methods"
      className="scroll-mt-6 bg-white px-6 py-20 sm:px-10 md:px-16 md:py-28 lg:px-[8.8%] lg:pt-[100px] lg:pb-[200px]"
    >
      <div className="grid gap-10 md:grid-cols-[40%_1fr] md:gap-0 lg:grid-cols-[50%_1fr]">
        <Reveal>
          <h2 className="font-serif text-[40px] font-light leading-[1.35] tracking-tight text-foreground sm:text-[48px] lg:text-[56px]">
            Some of the{" "}
            <span className="font-script text-[60px] leading-none text-accent-teal sm:text-[70px] lg:text-[80px]">
              methods
            </span>
            <br />
            we use
          </h2>
        </Reveal>

        <Reveal delay={150} className="md:-mt-[6px]">
          <MethodsAccordion />
        </Reveal>
      </div>
    </section>
  );
}
