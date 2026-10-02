import Reveal from "@/components/Reveal";
import MethodsAccordion from "@/components/home/MethodsAccordion";

/** `divider` draws a rule above the section, for when it follows another white section. */
export default function Methods({ divider = true }: { divider?: boolean }) {
  return (
    <section
      id="methods"
      className={`scroll-mt-6 bg-white px-6 pb-20 sm:px-10 md:px-16 md:pb-28 lg:px-[8.8%] lg:pb-36 ${divider ? "" : "pt-20 md:pt-28 lg:pt-32"}`}
    >
      <div
        className={`grid gap-10 md:grid-cols-[40%_1fr] md:gap-0 lg:grid-cols-[50%_1fr] ${
          divider ? "border-t border-foreground/10 pt-20 md:pt-28 lg:pt-32" : ""
        }`}
      >
        <Reveal>
          <h2 className="font-serif text-[40px] font-light leading-[1.35] tracking-tight text-foreground sm:text-[48px] lg:text-[56px]">
            The{" "}
            <span className="font-script text-[60px] leading-none text-accent-teal sm:text-[70px] lg:text-[80px]">
              methods
            </span>
            <br />I draw on
          </h2>
          <p className="mt-8 max-w-[460px] text-[17px] leading-[1.8] text-foreground">
            Practical tools combined with depth-oriented work, tailored to what
            you need.
          </p>
        </Reveal>

        <Reveal delay={150} className="md:-mt-[6px]">
          <MethodsAccordion />
        </Reveal>
      </div>
    </section>
  );
}
