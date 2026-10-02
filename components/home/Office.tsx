import Image from "next/image";
import Reveal from "@/components/Reveal";

const PHOTOS = [
  {
    src: "/office-1.jpeg",
    alt: "Sunlit sitting area with tall windows, sheer curtains, exposed brick, and a swivel armchair",
  },
  {
    src: "/office-2.jpeg",
    alt: "Quiet therapy room with a sofa, leather armchair, olive tree, and a wall of bookshelves",
  },
];

export default function Office() {
  return (
    <section
      id="office"
      className="scroll-mt-6 bg-background px-6 py-20 sm:px-10 md:px-16 md:py-28 lg:px-[8.8%] lg:py-36"
    >
      <div className="grid gap-10 lg:grid-cols-2 lg:items-end lg:gap-[9%]">
        <Reveal>
          <p className="text-[14px] tracking-[0.15em] text-foreground uppercase sm:text-[15px]">
            The office
          </p>
          <h2 className="mt-8 font-serif text-[36px] font-light leading-[1.3] tracking-tight text-foreground sm:text-[44px] lg:text-[50px]">
            A quiet, private space filled with natural{" "}
            <span className="font-script text-[52px] leading-none text-accent-teal sm:text-[62px] lg:text-[70px]">
              light
            </span>
            .
          </h2>
        </Reveal>

        <Reveal delay={150}>
          <p className="text-[17px] leading-[1.8] text-foreground">
            My Santa Monica office is designed to feel calm and grounding, with
            natural light and a comfortable, uncluttered environment. Clients
            often share that the space itself helps them feel more at ease when
            they arrive.
          </p>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-20 lg:gap-8">
        {PHOTOS.map((photo, i) => (
          <Reveal key={photo.src} delay={i * 150} className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 640px) 45vw, 100vw"
              className="object-cover transition-transform duration-[1.2s] ease-out hover:scale-[1.03]"
            />
          </Reveal>
        ))}
      </div>

      <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:mt-20 lg:gap-8">
        <Reveal>
          <h3 className="font-serif text-[28px] font-light text-foreground lg:text-[32px]">
            In person
          </h3>
          <p className="mt-4 text-[17px] leading-[1.8] text-foreground">
            Meet face to face at my office in Santa Monica, California.
          </p>
        </Reveal>
        <Reveal delay={150}>
          <h3 className="font-serif text-[28px] font-light text-foreground lg:text-[32px]">
            Telehealth
          </h3>
          <p className="mt-4 text-[17px] leading-[1.8] text-foreground">
            Secure online sessions for clients located anywhere in California.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
