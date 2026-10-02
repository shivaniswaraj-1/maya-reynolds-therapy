import styles from "@/components/layout/site-grid.module.css";
import { TextLink } from "@/components/landing/ui";

// The four methods named in the profile. Mobile reads down each column.
const METHODS = [
  {
    title: "Cognitive-Behavioral Therapy (CBT)",
    placement: "order-1 md:col-[11/18] md:row-[1] md:mt-(--spec-h4-offset)",
    description:
      "A structured, practical approach for noticing the thought patterns behind worry and overthinking, and practicing new ways of responding in everyday life.",
  },
  {
    title: "EMDR Therapy",
    placement: "order-3 md:col-[19/26] md:row-[1] md:mt-(--spec-h4-offset)",
    description:
      "Eye Movement Desensitization and Reprocessing helps your brain process distressing memories so they carry less emotional charge—always paced with safety and stabilization first.",
  },
  {
    title: "Mindfulness-Based Practices",
    placement: "order-2 md:col-[11/18] md:row-[2] md:mt-(--spec-row-gap)",
    description:
      "Practices that build present-moment awareness, helping you step out of constant worry, slow down, and reconnect with what you actually need.",
  },
  {
    title: "Body-Oriented Techniques",
    placement: "order-4 md:col-[19/26] md:row-[2] md:mt-(--spec-row-gap)",
    description:
      "Stress and trauma live in the body, too. Working with physical signals like tension or feeling on edge helps your nervous system feel more regulated day to day.",
  },
];

/* Cloned "specialties" layout, repurposed for the methods in the profile. */
export default function Methods() {
  return (
    <section
      id="methods"
      className={`${styles.grid24} scroll-mt-28 bg-white px-gutter pt-(--spec-pt) pb-(--spec-pb) md:px-0`}
    >
      <h2 className="font-serif text-h3 font-extralight text-primary md:col-[3/10] md:row-[1]">
        Evidence-based <span className="script">methods</span> I use…
      </h2>

      <div className="mt-[65px] flex flex-col gap-y-(--spec-row-gap) md:contents">
        {METHODS.map((item) => (
          <article key={item.title} className={`flex flex-col md:order-none ${item.placement}`}>
            <h3 className="font-serif text-h4 font-extralight text-primary">{item.title}</h3>
            <p className="mt-[29px] mb-(--spec-p-link) text-body font-light md:mt-[30px]">
              {item.description}
            </p>
            <TextLink href="/approach" className="mt-auto text-primary">
              Learn more
            </TextLink>
          </article>
        ))}
      </div>
    </section>
  );
}
