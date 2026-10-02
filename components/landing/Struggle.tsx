import Image from "next/image";
import styles from "@/components/layout/site-grid.module.css";

/* Cloned "hope" layout: headline and two text columns beside a tall photo. */
export default function Struggle() {
  return (
    <section
      className={`${styles.grid24} grid bg-canvas px-gutter pt-(--hope-pt) pb-(--hope-pb) [grid-template-areas:'h2'_'a'_'img'_'b'] md:grid-rows-[auto_1fr] md:gap-y-(--hope-h2-cols) md:px-0 md:[grid-template-areas:none]`}
    >
      <h2 className="font-serif text-h2 font-extralight text-primary [grid-area:h2] md:col-[3/17] md:row-[1] md:mt-(--hope-text-top)">
        You’re functional on the outside—but quietly exhausted on the inside.
      </h2>

      <div className="mt-[11px] [grid-area:a] md:col-[3/10] md:row-[2] md:mt-0 md:mr-[6.4px] md:mb-(--hope-text-bottom) md:self-start">
        <p className="text-eyebrow font-normal uppercase">
          Therapy for thoughtful, high-achieving adults in Santa Monica &amp;
          across California.
        </p>
        <p className="mt-[15px] text-body font-light">
          Many of the people I work with are self-aware and capable, yet live
          with constant worry, tension in their body, difficulty sleeping, or a
          sense that they’re always bracing for something to go wrong.
        </p>
      </div>

      <p className="mt-[46px] text-body font-light [grid-area:b] md:col-[10/17] md:row-[2] md:mt-0 md:mr-[6.4px] md:mb-(--hope-text-bottom) md:self-start">
        Others are still carrying earlier life experiences that shape their
        relationships, confidence, or sense of safety. Whatever brings you
        here, therapy can help you understand both the emotional and
        physiological sides of what you’re experiencing—and find a steadier
        way forward.
      </p>

      <div className="relative mt-[45px] aspect-[343/234] [grid-area:img] md:col-[19/27] md:row-[1/3] md:mt-0 md:ml-[5.7px] md:aspect-auto md:min-h-(--hope-img-min)">
        <Image
          src="/images/sea-breeze.jpg"
          alt="Woman with eyes closed, breathing in the sea breeze at dusk"
          fill
          sizes="(min-width: 768px) 31vw, 88vw"
          className="object-cover object-[55%_50%]"
        />
      </div>
    </section>
  );
}
