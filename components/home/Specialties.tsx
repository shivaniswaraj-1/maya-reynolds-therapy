import Link from "next/link";
import Reveal from "@/components/Reveal";

const SPECIALTIES = [
  {
    title: "Anxiety & Panic",
    description:
      "Constant worry, overthinking, a tense body, trouble sleeping, or the feeling that you’re always bracing for something to go wrong. Together we’ll make sense of what’s driving it and build practical tools to help you feel calmer and more in control.",
  },
  {
    title: "Trauma",
    description:
      "I work with single-incident trauma as well as more complex, long-standing patterns that may stem from childhood, relationships, or chronic stress. The work is paced carefully, with an emphasis on safety, stabilization, and feeling more regulated in daily life.",
  },
  {
    title: "Burnout & Perfectionism",
    description:
      "For entrepreneurs, creatives, and professionals living with high internal pressure who feel disconnected from themselves after years of pushing through stress. Therapy becomes a place to slow down and build more sustainable ways of living and working.",
  },
  {
    title: "Past Experiences",
    description:
      "Earlier life experiences can keep shaping your relationships, confidence, or sense of safety long after they’ve passed. We’ll explore those patterns with care so you can develop insight, resilience, and a stronger relationship with yourself.",
  },
];

export default function Specialties() {
  return (
    <section
      id="specialties"
      className="scroll-mt-6 bg-white px-6 py-20 sm:px-10 md:px-16 md:py-24 lg:px-[8.8%] lg:py-28"
    >
      <div className="grid gap-14 lg:grid-cols-[30%_1fr] lg:gap-0">
        <Reveal>
          <h2 className="font-serif text-[40px] font-light leading-[1.4] tracking-tight text-foreground sm:text-[46px]">
            My{" "}
            <span className="font-script text-[60px] leading-none text-accent-teal sm:text-[70px]">
              specialties
            </span>
            <br />
            include&hellip;
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-x-24 gap-y-16 md:grid-cols-2 lg:gap-y-24">
          {SPECIALTIES.map((item, i) => (
            <Reveal key={item.title} delay={(i % 2) * 150} className="flex flex-col">
              <h3 className="font-serif text-[30px] font-light text-foreground sm:text-[34px]">
                {item.title}
              </h3>
              <p className="mt-6 flex-1 text-[17px] leading-[1.8] text-foreground">
                {item.description}
              </p>
              <Link
                href="/about"
                className="mt-10 w-fit border-b border-foreground pb-2 text-[11.5px] tracking-[0.12em] text-foreground uppercase transition-colors duration-300 hover:border-accent-teal hover:text-accent-teal md:mt-16"
              >
                Learn more
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
