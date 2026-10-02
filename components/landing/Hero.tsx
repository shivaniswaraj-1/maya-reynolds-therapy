import Image from "next/image";
import styles from "@/components/layout/site-grid.module.css";
import { TextLink } from "@/components/landing/ui";

/*
  Same grid as the cloned hero: photo from the left edge to column 8, copy in
  columns 11–22, a photo sliver at the right edge. Mobile: copy, then photos.
*/
export default function Hero() {
  return (
    <section
      className={`${styles.grid24} grid grid-cols-[71.3vw_1fr] bg-canvas pt-(--hero-offset) pb-(--hero-pb) md:grid-rows-[auto_minmax(calc(60px_+_3.8*var(--u)),1fr)_auto]`}
    >
      <div className="relative order-3 mt-[59px] aspect-[278/304] md:order-none md:col-[1/10] md:row-[1/4] md:mt-0 md:aspect-auto md:min-h-(--hero-img-min)">
        <Image
          src="/images/office-sunlit.jpg"
          alt="Sunlit seating area in Dr. Maya Reynolds’ Santa Monica therapy office, with tall windows and exposed brick"
          fill
          priority
          sizes="(min-width: 768px) 35vw, 72vw"
          className="object-cover object-[60%_50%]"
        />
      </div>

      <p className="order-1 col-span-2 px-gutter text-eyebrow font-normal text-primary uppercase md:order-none md:col-[12/21] md:row-[1] md:mt-(--hero-eyebrow-top) md:px-0">
        Dr. Maya Reynolds, PsyD · Clinical psychologist in Santa Monica, CA
      </p>

      <div className="order-2 col-span-2 mt-[31px] px-gutter md:order-none md:col-[12/24] md:row-[3] md:mt-0 md:px-0 md:pb-(--hero-link-bottom)">
        <h1 className="font-serif text-h1 font-extralight text-primary">
          Anxiety &amp; trauma therapy in Santa Monica for high-achievers ready
          to feel <span className="script">at ease</span>.
        </h1>
        <p className="mt-[30px] max-w-[640px] text-body font-light">
          Warm, evidence-based therapy for adults navigating anxiety, panic,
          trauma, and burnout—in person in Santa Monica or through secure
          telehealth anywhere in California.
        </p>
        <TextLink href="/contact" className="mt-(--hero-p-link) text-primary">
          Book a consultation
        </TextLink>
      </div>

      {/* Olive-leaf sliver: echoes the olive tree in the office */}
      <div className="relative order-4 mt-[59px] aspect-[57/199] w-[14.6vw] self-end justify-self-end md:order-none md:col-[25/27] md:row-[3] md:-mt-(--hero-sliver-rise) md:aspect-auto md:w-auto md:self-stretch md:justify-self-stretch">
        <Image
          src="/images/olive-leaves.jpg"
          alt=""
          aria-hidden="true"
          fill
          sizes="(min-width: 768px) 9vw, 15vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
