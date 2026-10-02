import Image from "next/image";

const CATEGORIES = [
  {
    title: "Adults",
    image: "/who-adults.jpg",
    alt: "Two people sitting on a log at the beach, facing a lake with mountains in the background.",
    description:
      "Feeling stuck or overwhelmed? We help adults find clarity, build resilience, and move forward with confidence by addressing the root causes of anxiety, stress, and emotional pain.",
  },
  {
    title: "Couples",
    image: "/who-couples.jpg",
    alt: "A couple embracing on the beach, with both wearing casual summer clothing and smiling at each other. The ocean is in the background.",
    description:
      "Relationships require effort, and we're here to help you strengthen yours. We guide couples through challenges like communication breakdowns and trust issues, helping you rebuild intimacy and strengthen your relationship.",
  },
  {
    title: "Children & Teens",
    image: "/who-children.jpg",
    alt: "A boy carrying a girl on a beach with waves in the background.",
    description:
      "Kids need support, too. We help them process big emotions, cope with challenging family situations, build coping skills, and feel understood, while also working closely with their parents to create a nurturing environment.",
  },
];

export default function WhoWeHelp() {
  return (
    <section className="mt-16 bg-white px-8 py-16 md:mt-24 md:px-16 md:py-20 lg:mt-28 lg:px-20 lg:py-24">
      <h2 className="font-serif text-[44px] font-light leading-none tracking-tight text-foreground sm:text-[50px] lg:text-[56px]">
        Who we{" "}
        <span className="font-script text-[57px] leading-none text-accent-teal sm:text-[65px] lg:text-[73px]">
          help
        </span>
      </h2>

      <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-14 md:mt-16 md:grid-cols-3">
        {CATEGORIES.map((item) => (
          <div key={item.title}>
            <div className="relative aspect-[490/518] w-full overflow-hidden">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="mt-6 font-serif text-[28px] font-light text-foreground">
              {item.title}
            </h3>
            <p className="mt-4 text-[17px] leading-[1.8] text-foreground">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
