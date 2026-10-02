import Image from "next/image";
import styles from "@/components/layout/site-grid.module.css";
import { PillLink } from "@/components/conejo/ui";

/*
  768px+: photo sliver from the left edge to column 2, copy in columns 5–14,
  photo from column 17 to the right edge. The eyebrow lines up with the top of
  the right photo; the headline lines up with the top of the sliver, and both
  photos share the same bottom edge.
  Mobile: sliver, copy, then the right photo.
*/
export default function ScheduleSection() {
  return (
    <section
      id="contact"
      className={`${styles.grid24} flex flex-col bg-cv-cream pt-(--sched-pt) pb-(--sched-pb) md:grid-rows-[auto_var(--sched-eb-h2)_1fr]`}
    >
      <div className="relative aspect-[189/199] w-[48.5vw] md:col-[1/4] md:row-[3] md:aspect-auto md:w-auto">
        <Image
          src="/schedule-shells.webp"
          alt=""
          aria-hidden="true"
          fill
          sizes="(min-width: 768px) 12vw, 49vw"
          className="object-cover"
        />
      </div>

      <p className="mt-[62px] px-gutter text-eyebrow font-normal uppercase md:col-[6/16] md:row-[1] md:mt-0 md:px-0">
        Schedule an appointment
      </p>

      <div className="mt-(--sched-eb-h2) flex flex-col px-gutter md:col-[6/16] md:row-[3] md:mt-0 md:px-0 md:pb-(--sched-btn-bottom)">
        <h2 className="font-serif text-h2 font-extralight">
          Find a therapist who is the right fit for{" "}
          <span className="script">you</span>.
        </h2>
        <p className="mt-(--sched-h2-p) text-body font-light">
          Coming to therapy is a courageous decision, and connecting with the
          right kind of therapist makes all the difference. We understand that
          your journey is personal, and we’re here to support you with care and
          understanding every step of the way. Each member of our team brings
          dedicated expertise and a commitment to support you in your
          struggles. We want you to feel prioritized, understood, and
          empowered.
        </p>
        <p className="mt-[15px] mb-(--sched-p2-btn) text-body font-light">
          Click the button below to schedule an appointment.
        </p>
        <PillLink href="#contact" className="md:mt-auto">
          Book now
        </PillLink>
      </div>

      <div className="relative mt-[52px] ml-auto aspect-[322/269] w-[82.6vw] md:col-[18/27] md:row-[1/4] md:mt-0 md:ml-0 md:aspect-auto md:min-h-[calc(39.3*var(--u))] md:w-auto">
        <Image
          src="/schedule-sand.webp"
          alt="An adult pointing at seashells in the sand next to a child's bare feet"
          fill
          sizes="(min-width: 768px) 35vw, 83vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
