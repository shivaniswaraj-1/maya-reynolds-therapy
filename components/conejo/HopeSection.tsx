import Image from "next/image";
import styles from "@/components/layout/site-grid.module.css";

/*
  768px+: headline (columns 2–14) over two text columns (2–8, 9–15) beside a
  tall photo running from column 18 to the right edge; the text keeps a
  measured gap from the top of the photo.
  Mobile reorders to headline, first column, photo, second column (as on the
  reference site).
*/
export default function HopeSection() {
  return (
    <section
      className={`${styles.grid24} grid bg-cv-cream px-gutter pt-(--hope-pt) pb-(--hope-pb) [grid-template-areas:'h2'_'a'_'img'_'b'] md:grid-rows-[auto_1fr] md:gap-y-(--hope-h2-cols) md:px-0 md:[grid-template-areas:none]`}
    >
      <h2 className="font-serif text-h2 font-extralight [grid-area:h2] md:col-[3/16] md:row-[1] md:mt-(--hope-text-top)">
        You’re holding onto hope that life can be better than it is right now.
      </h2>

      <div className="mt-[11px] [grid-area:a] md:col-[3/10] md:row-[2] md:mt-0 md:mr-[6.4px] md:mb-(--hope-text-bottom) md:self-start">
        <p className="text-eyebrow font-normal uppercase">
          At Conejo Valley Family Counseling we want to make that hope a
          reality.
        </p>
        <p className="mt-[15px] text-body font-light">
          Whether you’re an adult seeking personal growth, looking to work
          through your trauma, a couple working on your relationship, or a
          parent looking for support for your child, we provide a compassionate
          and safe space to help you navigate all of life’s ups and downs.
        </p>
      </div>

      <p className="mt-[46px] text-body font-light [grid-area:b] md:col-[10/17] md:row-[2] md:mt-0 md:mr-[6.4px] md:mb-(--hope-text-bottom) md:self-start">
        First and foremost, we believe what you’re going through is real,
        valid, and worthy of support. Our team offers clients in the Newbury
        Park area and across CA an environment to discover a new life and a
        deeper sense of self in the midst of their struggles. As we tap into
        the power of connection and understanding, you can find your footing
        again and take a transformative path forward.
      </p>

      <div className="relative mt-[45px] aspect-[343/234] [grid-area:img] md:col-[19/27] md:row-[1/3] md:mt-0 md:ml-[5.7px] md:aspect-auto md:min-h-(--hope-img-min)">
        <Image
          src="/conejo/hope-ocean.jpg"
          alt="Sandy beach with gentle ocean waves under a cloudy sky"
          fill
          sizes="(min-width: 768px) 31vw, 88vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
