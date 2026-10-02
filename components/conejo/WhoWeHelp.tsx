import Image from "next/image";
import styles from "@/components/layout/site-grid.module.css";

const CATEGORIES = [
  {
    title: "Adults",
    image: "/who-adults.jpg",
    alt: "Two people sitting on the beach, facing a lake with mountains in the background.",
    column: "md:col-[5/12]",
    description:
      "Feeling stuck or overwhelmed? We help adults find clarity, build resilience, and move forward with confidence by addressing the root causes of anxiety, stress, and emotional pain.",
  },
  {
    title: "Couples",
    image: "/who-couples.jpg",
    alt: "A smiling couple embracing on the beach with the ocean behind them.",
    column: "md:col-[12/19]",
    description:
      "Relationships require effort, and we’re here to help you strengthen yours. We guide couples through challenges like communication breakdowns and trust issues, helping you rebuild intimacy and strengthen your relationship.",
  },
  {
    title: "Children & Teens",
    image: "/who-children.jpg",
    alt: "A boy carrying a girl on a beach with waves in the background.",
    column: "md:col-[19/26]",
    description:
      "Kids need support, too. We help them process big emotions, cope with challenging family situations, build coping skills, and feel understood, while also working closely with their parents to create a nurturing environment.",
  },
];

/* 768px+: heading in columns 1–8; three cards in columns 4–10, 11–17, 18–24. */
export default function WhoWeHelp() {
  return (
    <section className={`${styles.grid24} bg-white pt-(--who-pt) pb-(--who-pb)`}>
      <h2 className="px-gutter font-serif text-h2 font-extralight md:col-[2/10] md:row-[1] md:px-0">
        Who we <span className="script">help</span>
      </h2>

      <div className="mt-(--who-h2-img) flex flex-col gap-y-[68px] px-gutter md:contents">
        {CATEGORIES.map((item) => (
          <article key={item.title} className={`md:row-[2] md:mt-(--who-h2-img) md:mr-[6.4px] ${item.column}`}>
            <div className="relative aspect-[343/304] md:aspect-auto md:h-(--who-img-h)">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(min-width: 768px) 26vw, 88vw"
                className="object-cover"
              />
            </div>
            <h3 className="mt-(--who-img-h4) font-serif text-h4 font-extralight">
              {item.title}
            </h3>
            <p className="mt-[30px] text-body font-light">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
