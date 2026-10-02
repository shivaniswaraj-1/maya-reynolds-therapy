import Image from "next/image";
import styles from "@/components/layout/site-grid.module.css";
import { TextLink } from "@/components/landing/ui";

/* Cloned "how we work" layout on a sage band, with the therapy room photo. */
export default function Approach() {
  return (
    <section
      className={`${styles.grid24} grid bg-secondary px-gutter pt-(--how-pt) pb-(--how-pb) [grid-template-areas:'eb'_'h2'_'img'_'a'_'b'_'link'] md:grid-rows-[auto_auto_auto_1fr] md:px-0 md:[grid-template-areas:none]`}
    >
      <p className="text-eyebrow font-normal uppercase [grid-area:eb] md:col-[3/15] md:row-[1]">My approach</p>

      <h2 className="mt-(--how-eb-h2) max-w-[87%] font-serif text-h2 font-extralight text-primary [grid-area:h2] md:col-[3/20] md:row-[2] md:max-w-none">
        Warm, collaborative &amp; grounded therapy.
      </h2>

      <div className="mt-[46px] [grid-area:a] md:col-[3/11] md:row-[3] md:mt-(--how-h2-cols) md:mr-[5.6px]">
        <p className="text-eyebrow font-normal uppercase">
          Practical tools combined with depth-oriented work.
        </p>
        <p className="mt-[15px] text-body font-light">
          Sessions are structured enough to feel supportive, while still
          leaving space for reflection and depth. I integrate evidence-based
          methods—CBT, EMDR, mindfulness-based practices, and body-oriented
          techniques—to help you understand both the emotional and
          physiological sides of what you’re experiencing.
        </p>
      </div>

      <p className="mt-[12px] text-body font-light [grid-area:b] md:col-[11/19] md:row-[3] md:mt-(--how-h2-cols) md:mr-[5.6px]">
        Whether we’re working through anxiety, trauma, or burnout, the work is
        paced with care and focused on your daily life—helping you feel more
        regulated outside of sessions, not just during them. I understand the
        realities of living and working in a fast-paced environment, and we’ll
        build ways of coping that actually fit yours.
      </p>

      <div className="mt-[23px] [grid-area:link] md:col-[3/11] md:row-[4] md:mt-[18px] md:self-end">
        <TextLink href="/approach" className="text-primary">Explore my approach</TextLink>
      </div>

      <div className="relative mt-[47px] aspect-[343/269] [grid-area:img] md:col-[21/27] md:row-[1/5] md:mt-0 md:ml-[6.3px] md:aspect-auto md:min-h-(--how-img-min)">
        <Image
          src="/images/quiet-shore.jpg"
          alt="A quiet stretch of beach with dune grass and calm water"
          fill
          sizes="(min-width: 768px) 24vw, 88vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
