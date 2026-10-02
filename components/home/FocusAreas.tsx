import Reveal from "@/components/Reveal";

const AREAS = [
  "Anxiety",
  "Panic",
  "Trauma",
  "Complex Trauma",
  "Burnout",
  "Perfectionism",
  "Overthinking",
  "Chronic Stress",
  "High Internal Pressure",
  "Difficulty Sleeping",
  "Relationships & Confidence",
  "...and more.",
];

export default function FocusAreas() {
  return (
    <section className="bg-white px-6 py-20 sm:px-10 md:px-16 md:py-28 lg:px-[8.8%] lg:py-36">
      <div className="grid gap-12 lg:grid-cols-[30%_1fr] lg:gap-0">
        <Reveal>
          <h2 className="font-serif text-[40px] font-light leading-[1.1] tracking-tight text-ink sm:text-[46px]">
            What I can
            <span className="-mt-1 block -translate-x-1 font-script text-[60px] leading-[1.2] text-accent sm:text-[70px]">
              help with
            </span>
          </h2>
        </Reveal>

        <Reveal delay={150}>
          <ul className="grid grid-cols-1 gap-x-20 sm:grid-cols-2">
            {AREAS.map((area) => (
              // Every row but the last gets a divider.
              <li
                key={area}
                className="border-b border-primary/10 py-7 text-[14px] tracking-[0.15em] text-ink uppercase first:pt-0 last:border-b-0 sm:py-10 sm:text-[15px] sm:[&:nth-child(-n+2)]:pt-0 sm:[&:nth-last-child(-n+2)]:border-b-0"
              >
                {area}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
