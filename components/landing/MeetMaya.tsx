import Image from "next/image";
import styles from "@/components/layout/site-grid.module.css";
import { TextLink } from "@/components/landing/ui";

/* Bio: portrait in columns 2–8, copy in columns 11–22. */
export default function MeetMaya() {
  return (
    <section
      id="about"
      className={`${styles.grid24} scroll-mt-28 bg-canvas px-gutter pt-(--how-pt) pb-(--how-pb) md:items-center md:px-0`}
    >
      <div className="relative md:col-[3/10]">
        <div aria-hidden="true" className="absolute inset-0 translate-x-3 translate-y-3 bg-secondary md:translate-x-5 md:translate-y-5" />
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src="/images/dr-maya-reynolds.png"
            alt="Portrait of Dr. Maya Reynolds, PsyD, licensed clinical psychologist in Santa Monica, CA"
            fill
            sizes="(min-width: 768px) 28vw, 88vw"
            className="object-cover object-[50%_22%]"
          />
        </div>
      </div>

      <div className="mt-[56px] md:col-[12/24] md:mt-0">
        <p className="text-eyebrow font-normal uppercase">Meet your therapist</p>
        <h2 className="mt-(--sched-eb-h2) font-serif text-h2 font-extralight text-primary md:mt-[24px]">
          Dr. Maya Reynolds, <span className="whitespace-nowrap">PsyD</span>
        </h2>
        <p className="mt-[6px] text-button tracking-[0.18em] text-accent-deep uppercase">
          Licensed Clinical Psychologist · Santa Monica, CA
        </p>
        <p className="mt-[30px] text-body font-light">
          I’m a licensed clinical psychologist based in Santa Monica,
          California, offering therapy for adults who feel overwhelmed by
          anxiety, stress, or the lingering effects of past experiences. My
          work often focuses on anxiety, panic, trauma, and burnout.
        </p>
        <p className="mt-[15px] text-body font-light">
          I take a warm, collaborative, and grounded approach. Sessions are
          structured enough to feel supportive while still leaving space for
          reflection and depth—because I believe therapy works best when you
          feel respected, understood, and actively involved in the process.
        </p>
        <TextLink href="/about" className="mt-[28px] text-primary">
          Read my full bio
        </TextLink>
      </div>
    </section>
  );
}
