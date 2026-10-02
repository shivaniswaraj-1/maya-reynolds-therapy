import Reveal from "@/components/Reveal";

export default function AboutIntro() {
  return (
    <section className="bg-background px-6 py-20 sm:px-10 md:px-16 md:py-32 lg:px-[8.8%] lg:py-[220px]">
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16 lg:gap-[9%]">
        <Reveal>
          <h2 className="font-serif text-[36px] font-light leading-[1.3] tracking-tight text-foreground sm:text-[44px] lg:text-[56px]">
            It seems like nobody else understands what you&apos;re going
            through.
          </h2>
        </Reveal>

        <Reveal delay={150} className="flex flex-col gap-6">
          <p className="text-[14px] leading-[1.9] tracking-[0.15em] text-foreground uppercase sm:text-[15px]">
            You could be here as a parent, a spouse, or simply someone trying
            to navigate the things life has thrown your way.
          </p>
          <p className="text-[17px] leading-[1.8] text-foreground">
            We know how frustrating it can be trying to make sense of your
            emotions and balance everyone else&apos;s needs along with your
            own. Our expertise, lived experiences, and empathetic approach
            help our clients feel safe and understood in their
            challenges&mdash;no matter what they bring to the table.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
