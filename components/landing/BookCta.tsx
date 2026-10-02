import Image from "next/image";
import styles from "@/components/layout/site-grid.module.css";
import { PillLink } from "@/components/landing/ui";

/* Cloned "schedule" layout: photo sliver, copy, and a photo at the right edge. */
export default function BookCta() {
  return (
    <section
      id="contact"
      className={`${styles.grid24} flex scroll-mt-28 flex-col bg-canvas pt-(--sched-pt) pb-(--sched-pb) md:grid-rows-[auto_var(--sched-eb-h2)_1fr]`}
    >
      <div className="relative aspect-[189/199] w-[48.5vw] md:col-[1/4] md:row-[3] md:aspect-auto md:w-auto">
        <Image
          src="/images/herb-terracotta.jpg"
          alt=""
          aria-hidden="true"
          fill
          sizes="(min-width: 768px) 12vw, 49vw"
          className="object-cover"
        />
      </div>

      <p className="mt-[62px] px-gutter text-eyebrow font-normal uppercase md:col-[6/16] md:row-[1] md:mt-0 md:px-0">
        Book a consultation
      </p>

      <div className="mt-(--sched-eb-h2) flex flex-col px-gutter md:col-[6/16] md:row-[3] md:mt-0 md:px-0 md:pb-(--sched-btn-bottom)">
        <h2 className="font-serif text-h2 font-extralight text-primary">
          Ready to feel more at ease? Let’s see if we’re a good{" "}
          <span className="script">fit</span>.
        </h2>
        <p className="mt-(--sched-h2-p) text-body font-light">
          If you’re looking for a therapist who combines practical tools with
          depth-oriented work—and who understands the realities of living and
          working in a fast-paced environment—I may be a good fit.
        </p>
        <p className="mt-[15px] mb-(--sched-p2-btn) text-body font-light">
          In-person sessions in Santa Monica, CA, and secure telehealth for
          clients across California.
        </p>
        <PillLink href="/contact" className="md:mt-auto">
          Book a consultation
        </PillLink>
      </div>

      <div className="relative mt-[52px] ml-auto aspect-[322/269] w-[82.6vw] md:col-[18/27] md:row-[1/4] md:mt-0 md:ml-0 md:aspect-auto md:min-h-[calc(39.3*var(--u))] md:w-auto">
        <Image
          src="/images/telehealth-session.jpg"
          alt="Woman joining a secure online therapy session from home"
          fill
          sizes="(min-width: 768px) 35vw, 83vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
