import Reveal from "@/components/Reveal";

const VALUES = [
  {
    title: "Expertise.",
    description:
      "We've spent years honing our skills and knowledge, but we never stop learning from our clients. Every session allows us the opportunity to help you grow while deepening our understanding of what truly helps people. As we work to help you uncover patterns, you'll gain practical tools to use in your daily life and feel empowered to make real, lasting changes.",
  },
  {
    title: "Understanding.",
    description:
      "Your story is your own, and we honor that. Our team takes the time to listen and really understand what it's like to walk in your shoes. Whether it's your relationships, your work, or the way you move through the world, we're here to listen. Our approach isn't one-size-fits-all because your experience is unique, and we believe the way you're supported should be, too.",
  },
  {
    title: "Transformation.",
    description:
      "True change doesn't happen overnight but it does happen with commitment and consistency. We believe in working alongside you to create real, tangible shifts—not just in how you feel but in how you live. With our support, you'll build a stronger foundation, find your footing, and move forward with more clarity, confidence, and connection to yourself and others.",
  },
];

export default function AboutValues() {
  return (
    <section className="bg-accent-sand px-6 py-20 sm:px-10 md:px-16 md:py-28 lg:px-[6.8%] lg:py-[220px]">
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
