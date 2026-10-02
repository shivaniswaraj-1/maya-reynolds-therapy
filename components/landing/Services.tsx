import Image from "next/image";
import styles from "@/components/layout/site-grid.module.css";
import { TextLink } from "@/components/landing/ui";

// The three core services named in the profile ("anxiety, panic, trauma, and burnout").
const SERVICES = [
  {
    title: "Anxiety & Panic Therapy",
    href: "/specialties#anxiety",
    image: "/images/anxiety-breathing.jpg",
    alt: "Woman with eyes closed and a hand on her chest, breathing slowly outdoors",
    column: "md:col-[5/12]",
    description:
      "For constant worry, overthinking, panic, and the tension you carry in your body. Using CBT, mindfulness-based practices, and body-oriented techniques, we’ll understand what’s driving your anxiety and build practical tools that help you feel calmer and more in control.",
  },
  {
    title: "Trauma Therapy & EMDR",
    href: "/specialties#trauma",
    image: "/images/trauma-grounding.jpg",
    alt: "Bare feet resting on sandy ground, a symbol of feeling grounded and safe",
    column: "md:col-[12/19]",
    description:
      "Support for single-incident trauma and complex, long-standing patterns rooted in childhood, relationships, or chronic stress. EMDR and body-oriented work are carefully paced, with an emphasis on safety, stabilization, and feeling more regulated in daily life.",
  },
  {
    title: "Burnout & Perfectionism Therapy",
    href: "/specialties#burnout",
    image: "/images/burnout-desk.jpg",
    alt: "Notebook, coffee, and laptop on a wooden desk during an unhurried planning moment",
    column: "md:col-[19/26]",
    description:
      "For entrepreneurs, creatives, and professionals living with high internal pressure who feel disconnected from themselves after years of pushing through stress. Together we’ll slow down, reconnect, and build more sustainable ways of living and working.",
  },
];

/* Cloned "who we help" layout: heading, then three image cards. */
export default function Services() {
  return (
    <section id="services" className={`${styles.grid24} scroll-mt-28 bg-white pt-(--who-pt) pb-(--who-pb)`}>
      <h2 className="px-gutter font-serif text-h2 font-extralight text-primary md:col-[2/14] md:row-[1] md:px-0">
        How I can <span className="script">help</span>
      </h2>

      <div className="mt-(--who-h2-img) flex flex-col gap-y-[68px] px-gutter md:contents">
        {SERVICES.map((item) => (
          <article key={item.title} className={`flex flex-col md:row-[2] md:mt-(--who-h2-img) md:mr-[6.4px] ${item.column}`}>
            <div className="relative aspect-[343/304] overflow-hidden md:aspect-auto md:h-(--who-img-h)">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(min-width: 768px) 26vw, 88vw"
                className="object-cover transition-transform duration-[1.2s] ease-out hover:scale-[1.03]"
              />
            </div>
            <h3 className="mt-(--who-img-h4) font-serif text-h4 font-extralight text-primary">
              {item.title}
            </h3>
            <p className="mt-[30px] mb-[24px] text-body font-light">{item.description}</p>
            <TextLink href={item.href} className="mt-auto text-primary">
              Learn more
            </TextLink>
          </article>
        ))}
      </div>
    </section>
  );
}
