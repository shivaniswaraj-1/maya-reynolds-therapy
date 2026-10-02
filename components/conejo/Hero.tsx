import Image from "next/image";
import styles from "@/components/layout/site-grid.module.css";
import { TextLink } from "@/components/conejo/ui";

/*
  768px+: on the 24-column grid — photo from the left edge to column 8, copy in
  columns 11–22, photo sliver from column 24 to the right edge. The eyebrow
  sits at the top; the headline group sits at the bottom, level with the photo.
  Mobile: copy first, then the photo with the sliver at the right edge.
*/
export default function Hero() {
  return (
    <section
      className={`${styles.grid24} grid grid-cols-[71.3vw_1fr] bg-cv-cream pt-[calc(var(--header-h)_+_var(--hero-offset))] pb-(--hero-pb) md:grid-rows-[auto_minmax(calc(60px_+_3.8*var(--u)),1fr)_auto]`}
    >
      <div className="relative order-3 mt-[59px] aspect-[278/304] md:order-none md:col-[1/10] md:row-[1/4] md:mt-0 md:aspect-auto md:min-h-(--hero-img-min)">
        <Image
          src="/hero-family.jpg"
          alt="Family walking together on the beach"
          fill
          priority
          sizes="(min-width: 768px) 35vw, 72vw"
          className="object-cover"
        />
      </div>

      <p className="order-1 col-span-2 px-gutter text-eyebrow font-normal uppercase md:order-none md:col-[12/20] md:row-[1] md:mt-(--hero-eyebrow-top) md:px-0">
        Online &amp; in-person counseling in Newbury Park &amp; across CA
      </p>

      <div className="order-2 col-span-2 mt-[31px] px-gutter md:order-none md:col-[12/24] md:row-[3] md:mt-0 md:px-0 md:pb-(--hero-link-bottom)">
        <h1 className="font-serif text-h1 font-extralight">
          Rebuild your foundation on solid ground and finally begin to{" "}
          <span className="script">thrive</span>.
        </h1>
        <p className="mt-[30px] text-body font-light">
          Specialized therapy for adults, couples, teens, and children to
          reflect, heal, and grow.
        </p>
        <TextLink href="#contact" className="mt-(--hero-p-link)">
          Book an appointment
        </TextLink>
      </div>

      {/* Photo sliver at the right edge */}
      <div className="relative order-4 mt-[59px] aspect-[57/199] w-[14.6vw] self-end justify-self-end md:order-none md:col-[25/27] md:row-[3] md:-mt-(--hero-sliver-rise) md:aspect-auto md:w-auto md:self-stretch md:justify-self-stretch">
        <Image
          src="/hero-edge.jpg"
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
