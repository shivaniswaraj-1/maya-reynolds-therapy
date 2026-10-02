import Image from "next/image";
import styles from "@/components/layout/site-grid.module.css";
import { TextLink } from "@/components/landing/ui";
import { MAPS_URL, PRACTICE } from "@/lib/site";

// What clients can expect from the space — each point comes from the profile.
const FEATURES = [
  {
    title: "Quiet & private",
    description:
      "A private office in Santa Monica where you can talk openly and move at your own pace, with safety and comfort at the center of our work.",
    column: "md:col-[3/10]",
  },
  {
    title: "Calm, natural light",
    description:
      "Natural light and a comfortable, uncluttered room designed to feel calm and grounding from the moment you arrive.",
    column: "md:col-[11/18]",
  },
  {
    title: "In person or telehealth",
    description:
      "Meet in person at the Santa Monica office, or choose secure telehealth sessions from anywhere in California.",
    column: "md:col-[19/26]",
  },
];

/*
  New section (not in the original template). 768px+, on the 24-column grid:
  heading (columns 2–13) beside the intro (16–24); the therapy room photo from
  the left edge to column 14, with two views of the sunlit sitting area
  stacked from column 15 to the right edge; then three "what to expect"
  points and the address.
*/
export default function OurOffice() {
  return (
    <section
      id="office"
      aria-labelledby="office-heading"
      className={`${styles.grid24} scroll-mt-28 bg-canvas px-gutter pt-(--how-pt) pb-(--how-pb) md:px-0`}
    >
      <div className="md:col-[3/15] md:row-[1] md:self-end">
        <p className="text-eyebrow font-normal uppercase">Our office</p>
        <h2 id="office-heading" className="mt-[24px] font-serif text-h2 font-extralight text-primary">
          A calm, private space in Santa Monica made for slowing{" "}
          <span className="script">down</span>.
        </h2>
      </div>

      <div className="mt-[28px] md:col-[17/26] md:row-[1] md:mt-0 md:self-end">
        <p className="text-body font-light">
          My office is a quiet, private space designed to feel calm and
          grounding, with natural light and a comfortable, uncluttered
          environment—a place to set down what you’ve been carrying for a
          while.
        </p>
        <blockquote className="mt-[18px] border-l border-accent pl-[18px] font-serif text-h4 font-extralight text-accent-deep italic">
          Clients often share that the space itself helps them feel more at
          ease when they arrive.
        </blockquote>
      </div>

      {/* Photos of the practice, from Dr. Reynolds’ profile */}
      <figure className="relative mt-(--who-h2-img) -mx-gutter aspect-[4/3] md:col-[1/16] md:row-[2] md:mx-0">
        <Image
          src="/images/office-therapy-room.jpg"
          alt="Dr. Reynolds’ Santa Monica therapy room with a grey sofa, leather armchair, olive tree, and bookshelves"
          fill
          sizes="(min-width: 768px) 58vw, 100vw"
          className="object-cover"
        />
      </figure>

      <div className="mt-[11.5px] grid grid-cols-2 gap-[11.5px] md:col-[16/27] md:row-[2] md:mt-(--who-h2-img) md:flex md:flex-col">
        <figure className="relative aspect-square overflow-hidden md:aspect-auto md:flex-1">
          <Image
            src="/images/office-sunlit.jpg"
            alt="Sunlit sitting area in the office with tall windows, sheer curtains, and exposed brick"
            fill
            sizes="(min-width: 768px) 42vw, 50vw"
            className="object-cover object-[35%_50%]"
          />
        </figure>
        <figure className="relative aspect-square overflow-hidden md:aspect-auto md:flex-1">
          {/* Closer view of the armchair by the window, from the same office photo */}
          <Image
            src="/images/office-sunlit.jpg"
            alt="Close-up of the comfortable armchair beside the office’s sunlit window"
            fill
            sizes="(min-width: 768px) 42vw, 50vw"
            className="origin-[78%_68%] scale-[1.9] object-cover"
          />
        </figure>
      </div>

      <ul className="mt-(--who-h2-img) flex flex-col gap-y-[36px] md:contents">
        {FEATURES.map((item) => (
          <li
            key={item.title}
            className={`border-t border-primary/20 pt-[24px] md:row-[3] md:mt-(--who-h2-img) ${item.column}`}
          >
            <h3 className="font-serif text-h4 font-extralight text-primary">{item.title}</h3>
            <p className="mt-[12px] text-body font-light">{item.description}</p>
          </li>
        ))}
      </ul>

      <div className="mt-[48px] flex flex-col gap-[20px] md:col-[3/26] md:row-[4] md:mt-(--how-h2-cols) md:flex-row md:items-end md:justify-between">
        <address className="text-body font-light not-italic">
          <span className="block text-eyebrow font-normal text-primary uppercase">Visit the office</span>
          {PRACTICE.street}, {PRACTICE.city}
        </address>
        <div className="flex flex-wrap items-center gap-x-[36px] gap-y-[12px]">
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-fit border-b border-current py-[9px] text-button leading-[1.25] font-normal text-primary uppercase transition-colors duration-300 hover:text-accent-deep"
          >
            Get directions
          </a>
          <TextLink href="/office" className="text-primary">
            Take a closer look
          </TextLink>
        </div>
      </div>
    </section>
  );
}
