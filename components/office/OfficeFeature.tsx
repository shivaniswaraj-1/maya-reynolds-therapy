import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function OfficeFeature() {
  return (
    <section className="flex flex-col gap-12 bg-white py-20 md:flex-row md:items-center md:gap-0 md:py-28 lg:py-[130px]">
      {/* Left image - flush to the viewport edge */}
      <Reveal className="relative aspect-[4/3] w-full md:w-[52%]">
        <Image
          src="/office-2.jpeg"
          alt="Quiet therapy room with a sofa, leather armchair, olive tree, and a wall of bookshelves"
          fill
          sizes="(min-width: 768px) 52vw, 100vw"
          className="object-cover"
        />
      </Reveal>

      <Reveal
        delay={150}
        className="flex flex-col gap-6 px-6 sm:px-10 md:flex-1 md:pr-16 md:pl-12 lg:pr-[8.8%] lg:pl-[7%]"
      >
        <p className="text-[14px] tracking-[0.15em] text-foreground uppercase sm:text-[15px]">
          Inside the office
        </p>
        <h2 className="font-serif text-[32px] font-light leading-[1.3] tracking-tight text-foreground sm:text-[40px] lg:text-[44px]">
          Calm, grounding, and uncluttered.
        </h2>
        <p className="text-[17px] leading-[1.8] text-foreground">
          My office is a quiet, private space designed to feel calm and
          grounding, with natural light and a comfortable, uncluttered
          environment.
        </p>
        <p className="text-[17px] leading-[1.8] text-foreground">
          Clients often share that the space itself helps them feel more at
          ease when they arrive.
        </p>
      </Reveal>
    </section>
  );
}
