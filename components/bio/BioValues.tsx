import Reveal from "@/components/Reveal";

const VALUES = [
  {
    title: "Warm.",
    description:
      "Therapy works best when you feel respected and understood. You’ll be met with care, not judgment, whatever you bring into the room.",
  },
  {
    title: "Collaborative.",
    description:
      "You’re an active part of the process. Sessions are structured enough to feel supportive, while still leaving space for reflection and depth.",
  },
  {
    title: "Grounded.",
    description:
      "Evidence-based methods such as CBT, EMDR, mindfulness, and body-oriented techniques, with practical tools you can use beyond our sessions.",
  },
];

export default function BioValues() {
  return (
    <section className="bg-accent-sand px-6 py-20 sm:px-10 md:px-16 md:py-28 lg:px-[6.8%] lg:py-[200px]">
      <div className="grid gap-12 md:grid-cols-3 md:gap-10 lg:gap-[4.5%]">
        {VALUES.map((value, i) => (
          <Reveal key={value.title} delay={i * 150}>
            <h3 className="font-serif text-[30px] font-light text-foreground lg:text-[32px]">
              {value.title}
            </h3>
            <p className="mt-6 text-[17px] leading-[1.8] text-foreground lg:mt-8">
              {value.description}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
