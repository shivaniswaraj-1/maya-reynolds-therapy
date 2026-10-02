import Image from "next/image";
import styles from "@/components/layout/site-grid.module.css";
import { TextLink } from "@/components/conejo/ui";

/*
  768px+: copy in columns 2–17 (two text columns: 2–9 and 10–17) with a tall
  photo from column 20 to the right edge; the photo's top and bottom line up
  with the eyebrow and the "Learn more" link.
  Mobile: eyebrow, headline, photo, then the copy and link.
*/
export default function HowWeWork() {
  return (
    <section
      id="about"
      className={`${styles.grid24} grid bg-cv-sand px-gutter pt-(--how-pt) pb-(--how-pb) text-cv-black [grid-template-areas:'eb'_'h2'_'img'_'a'_'b'_'link'] md:grid-rows-[auto_auto_auto_1fr] md:px-0 md:[grid-template-areas:none]`}
    >
      <p className="text-eyebrow font-normal uppercase [grid-area:eb] md:col-[3/15] md:row-[1]">
        How we work
      </p>

      <h2 className="mt-(--how-eb-h2) max-w-[87%] font-serif text-h2 font-extralight [grid-area:h2] md:col-[3/20] md:row-[2] md:max-w-none">
        We’re here to make a difference.
      </h2>

      <div className="mt-[46px] [grid-area:a] md:col-[3/11] md:row-[3] md:mt-(--how-h2-cols) md:mr-[5.6px]">
        <p className="text-eyebrow font-normal uppercase">
          The clients we work with are balancing so many things at once, it’s
          often hard for them to put themselves first.
        </p>
        <p className="mt-[15px] text-body font-light">
          Here, your needs are always top priority. Our team takes the time to
          deeply listen to our clients in order to truly understand their story
          and their struggles. We recognize that no two people are the same and
          that personalized therapy means an intentional, tailored approach.
          (You won’t find anything “one-size-fits-all” here.) If you’re ready
          to do the work, we’re ready to help.
        </p>
      </div>

      <p className="mt-[12px] text-body font-light [grid-area:b] md:col-[11/19] md:row-[3] md:mt-(--how-h2-cols) md:mr-[5.6px]">
        Sometimes we may gently challenge you to look at things differently and
        other times we may explore your emotions, all while encouraging you to
        practice what you’ve learned in your daily life. We take what we do
        seriously because we know how important it is for you to heal from
        what’s hurting you, discover a fulfilling life, and build meaningful
        relationships. Our goal is to walk alongside you in this journey,
        offering support and guidance as you uncover your strengths and embrace
        what the future can hold for you.
      </p>

      <div className="mt-[23px] [grid-area:link] md:col-[3/11] md:row-[4] md:mt-[18px] md:self-end">
        <TextLink href="#about">Learn more about us</TextLink>
      </div>

      <div className="relative mt-[47px] aspect-[343/269] [grid-area:img] md:col-[21/27] md:row-[1/5] md:mt-0 md:ml-[6.3px] md:aspect-auto md:min-h-(--how-img-min)">
        <Image
          src="/conejo/how-we-work.webp"
          alt="Mother and daughter dancing together on a sandy beach at sunset"
          fill
          sizes="(min-width: 768px) 24vw, 88vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
