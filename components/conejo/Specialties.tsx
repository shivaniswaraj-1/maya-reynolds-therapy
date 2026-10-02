import styles from "@/components/conejo/conejo.module.css";
import { TextLink } from "@/components/conejo/ui";

// Listed row by row as on desktop; mobile reads down each column instead.
const SPECIALTIES = [
  {
    title: "Trauma",
    placement: "order-1 md:col-[11/18] md:row-[1] md:mt-(--spec-h4-offset)",
    description:
      "We don’t always know when and how we’ve experienced trauma. In therapy, we’ll work together to help you process your past, understand what’s causing you to stay “stuck,” and regain a sense of safety, control, and hope. You don’t have to carry your burdens alone.",
  },
  {
    title: "EMDR",
    placement: "order-3 md:col-[19/26] md:row-[1] md:mt-(--spec-h4-offset)",
    description:
      "Eye Movement Desensitization and Reprocessing (EMDR) is a powerful therapeutic technique that helps process and heal trauma by reworking how painful memories are stored in your brain. This allows you to find relief and move toward lasting healing.",
  },
  {
    title: "Dissociation",
    placement: "order-2 md:col-[11/18] md:row-[2] md:mt-(--spec-row-gap)",
    description:
      "The feeling of losing time, hearing conflicting voices, or questioning your sense of self can be overwhelming. In therapy, we’ll help you understand these experiences, recognize your own triggers, and create a sense of balance and identity so that you can feel more grounded.",
  },
  {
    title: "Special Needs Parenting",
    placement: "order-4 md:col-[19/26] md:row-[2] md:mt-(--spec-row-gap)",
    description:
      "Parenting a child with special needs presents unique challenges and complex emotions. We provide compassionate support through lived experience and expertise to help you navigate this journey with tools, understanding, and self-care.",
  },
];

/* 768px+: heading in columns 2–8; cards in columns 10–16 and 18–24. */
export default function Specialties() {
  return (
    <section
      id="specialties"
      className={`${styles.grid24} bg-white px-gutter pt-(--spec-pt) pb-(--spec-pb) md:px-0`}
    >
      <h2 className="font-serif text-h3 font-extralight md:col-[3/10] md:row-[1]">
        Our <span className="script">specialties</span> include…
      </h2>

      <div className="mt-[65px] flex flex-col gap-y-(--spec-row-gap) md:contents">
        {SPECIALTIES.map((item) => (
          <article key={item.title} className={`flex flex-col md:order-none ${item.placement}`}>
            <h3 className="font-serif text-h4 font-extralight">{item.title}</h3>
            <p className="mt-[29px] mb-(--spec-p-link) text-body font-light md:mt-[30px]">
              {item.description}
            </p>
            <TextLink href="#specialties" className="mt-auto">
              Learn more
            </TextLink>
          </article>
        ))}
      </div>
    </section>
  );
}
