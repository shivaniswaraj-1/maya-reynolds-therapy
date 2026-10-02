import styles from "@/components/layout/site-grid.module.css";

// Concerns named in the profile, listed row by row (left, right) as on desktop.
const CONCERNS = [
  "Anxiety",
  "Panic",
  "Constant worry & overthinking",
  "Single-incident trauma",
  "Complex trauma",
  "Burnout",
  "Perfectionism",
  "High internal pressure",
  "Chronic stress",
  "Difficulty sleeping",
  "Relationships & confidence",
  "…and more.",
];

// Mobile shows the left column first, then the right column.
const MOBILE_ORDER = [
  "order-1", "order-7", "order-2", "order-8", "order-3", "order-9",
  "order-4", "order-10", "order-5", "order-11", "order-6", "order-12",
];

const ROWS = ["md:row-[1]", "md:row-[2]", "md:row-[3]", "md:row-[4]", "md:row-[5]", "md:row-[6]"];

/* Cloned "areas of expertise" list. */
export default function HelpWith() {
  return (
    <section
      className={`${styles.grid24} bg-white px-gutter pt-(--areas-pt) pb-(--areas-pb) md:min-h-[80vh] md:content-center md:px-0`}
    >
      <h2 className="font-serif text-h3 font-extralight text-primary md:col-[3/9] md:row-[1/7] md:self-start">
        What I can <span className="script">help with</span>
      </h2>

      <ul className="mt-[55px] flex flex-col md:contents">
        {CONCERNS.map((item, i) => {
          const firstRow = i < 2;
          const lastRow = i >= CONCERNS.length - 2;
          return (
            <li
              key={item}
              className={[
                "text-eyebrow font-normal uppercase md:order-none",
                MOBILE_ORDER[i],
                ROWS[Math.floor(i / 2)],
                i % 2 === 0 ? "md:col-[10/17]" : "md:col-[18/25]",
                "border-primary/15",
                i === 0 ? "" : "pt-(--areas-rule-next)",
                i === CONCERNS.length - 1 ? "" : "border-b pb-(--areas-text-rule)",
                firstRow ? "md:pt-0" : "",
                lastRow ? "md:border-b-0 md:pb-0" : "",
              ].join(" ")}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
