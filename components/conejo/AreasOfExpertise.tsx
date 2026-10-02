import styles from "@/components/layout/site-grid.module.css";

// Listed row by row (left, right) as on desktop.
const AREAS = [
  "Dissociation",
  "Anxiety",
  "Trauma",
  "Relationships",
  "Family Conflict",
  "Children",
  "Special Needs Parenting",
  "Teens",
  "Depression",
  "Intimacy & Connection",
  "Marriage",
  "…and more.",
];

// Mobile shows the left column first, then the right column.
const MOBILE_ORDER = [
  "order-1", "order-7", "order-2", "order-8", "order-3", "order-9",
  "order-4", "order-10", "order-5", "order-11", "order-6", "order-12",
];

// 768px+ grid row for each pair of items.
const ROWS = ["md:row-[1]", "md:row-[2]", "md:row-[3]", "md:row-[4]", "md:row-[5]", "md:row-[6]"];

/* 768px+: heading in columns 2–7; items in columns 9–15 and 17–23. */
export default function AreasOfExpertise() {
  return (
    <section
      className={`${styles.grid24} bg-white px-gutter pt-(--areas-pt) pb-(--areas-pb) md:min-h-[80vh] md:content-center md:px-0`}
    >
      <h2 className="font-serif text-h3 font-extralight md:col-[3/9] md:row-[1/7] md:self-start">
        Our areas of <span className="script">expertise</span>
      </h2>

      <ul className="mt-[55px] flex flex-col md:contents">
        {AREAS.map((area, i) => {
          const firstRow = i < 2;
          const lastRow = i >= AREAS.length - 2;
          return (
            <li
              key={area}
              className={[
                "text-eyebrow font-normal uppercase md:order-none",
                MOBILE_ORDER[i],
                ROWS[Math.floor(i / 2)],
                i % 2 === 0 ? "md:col-[10/17]" : "md:col-[18/25]",
                // Divider below every item but the last (mobile) / last row (desktop).
                "border-cv-sand/50",
                i === 0 ? "" : "pt-(--areas-rule-next)",
                i === AREAS.length - 1 ? "" : "border-b pb-(--areas-text-rule)",
                firstRow ? "md:pt-0" : "",
                lastRow ? "md:border-b-0 md:pb-0" : "",
              ].join(" ")}
            >
              {area}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
