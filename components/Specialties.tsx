import Link from "next/link";

const SPECIALTIES = [
  {
    title: "Trauma",
    description:
      "We don't always know when and how we've experienced trauma. In therapy, we'll work together to help you process your past, understand what's causing you to stay “stuck,” and regain a sense of safety, control, and hope. You don't have to carry your burdens alone.",
  },
  {
    title: "EMDR",
    description:
      "Eye Movement Desensitization and Reprocessing (EMDR) is a powerful therapeutic technique that helps process and heal trauma by reworking how painful memories are stored in your brain. This allows you to find relief and move toward lasting healing.",
  },
  {
    title: "Dissociation",
    description:
      "The feeling of losing time, hearing conflicting voices, or questioning your sense of self can be overwhelming. In therapy, we'll help you understand these experiences, recognize your own triggers, and create a sense of balance and identity so that you can feel more grounded.",
  },
  {
    title: "Special Needs Parenting",
    description:
      "Parenting a child with special needs presents unique challenges and complex emotions. We provide compassionate support through lived experience and expertise to help you navigate this journey with tools, understanding, and self-care.",
  },
];

export default function Specialties() {
  return (
    <section
      id="specialties"
      className="bg-white px-8 py-20 md:px-16 md:py-24 lg:px-20 lg:py-28"
    >
      <div className="mx-auto grid max-w-[1580px] gap-14 lg:grid-cols-[34%_1fr] lg:gap-0">
        <h2 className="font-serif text-[40px] font-light leading-[1.4] tracking-tight text-foreground sm:text-[46px]">
          Our{" "}
          <span className="font-script text-[60px] leading-none text-accent-teal sm:text-[70px]">
            specialties
          </span>
          <br />
          include&hellip;
        </h2>

        <div className="grid grid-cols-1 gap-x-24 gap-y-20 md:grid-cols-2 lg:gap-y-28">
          {SPECIALTIES.map((item) => (
            <div key={item.title} className="flex flex-col">
              <h3 className="font-serif text-[30px] font-light text-foreground sm:text-[34px]">
                {item.title}
              </h3>
              <p className="mt-6 flex-1 text-[17px] leading-[1.8] text-foreground">
                {item.description}
              </p>
              <Link
                href="/#specialties"
                className="mt-12 w-fit border-b border-foreground pb-2 text-[11.5px] tracking-[0.12em] text-foreground uppercase md:mt-28"
              >
                Learn more
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
