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
  "...and more.",
];

export default function AreasOfExpertise() {
  return (
    <section className="bg-white px-8 py-20 md:px-16 md:py-28 lg:px-20 lg:py-36">
      <div className="mx-auto grid max-w-[1580px] gap-12 lg:grid-cols-[30%_1fr] lg:gap-0">
        <h2 className="font-serif text-[40px] font-light leading-[1.1] tracking-tight text-foreground sm:text-[46px]">
          Our areas of
          <span className="-mt-1 block -translate-x-1 font-script text-[60px] leading-[1.2] text-accent-teal sm:text-[70px]">
            expertise
          </span>
        </h2>

        <ul className="grid grid-cols-1 gap-x-20 sm:grid-cols-2">
          {AREAS.map((area) => (
            // Every row but the last gets a divider.
            <li
              key={area}
              className="border-b border-foreground/10 py-7 text-[15px] tracking-[0.15em] text-foreground uppercase first:pt-0 last:border-b-0 sm:py-10 sm:[&:nth-child(-n+2)]:pt-0 sm:[&:nth-last-child(-n+2)]:border-b-0"
            >
              {area}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
