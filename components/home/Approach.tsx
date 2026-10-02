import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function Approach() {
  return (
    <section
      id="approach"
      className="relative flex scroll-mt-6 flex-col overflow-hidden bg-accent-sand md:flex-row"
    >
      {/* Text content */}
      <Reveal className="flex flex-1 flex-col px-6 py-16 sm:px-10 md:px-16 md:py-14 lg:pr-24 lg:pl-[8.8%]">
        <p className="text-[14px] tracking-[0.15em] text-foreground uppercase sm:text-[15px]">
          My approach
        </p>

        <h2 className="mt-14 font-serif text-[40px] font-light leading-[1.2] tracking-tight text-foreground sm:text-[48px] md:mt-24 lg:mt-36 lg:text-[56px]">
          Warm, collaborative, and{" "}
          <span className="font-script text-[56px] leading-none text-accent-teal sm:text-[66px] lg:text-[76px]">
            grounded
          </span>
          .
        </h2>

        <div className="mt-10 grid gap-x-8 gap-y-6 md:mt-14 lg:grid-cols-2">
          <div className="flex flex-col gap-5">
            <p className="text-[14px] leading-[1.8] tracking-[0.15em] text-foreground uppercase sm:text-[15px]">
              Sessions are structured enough to feel supportive, while still
              leaving space for reflection and depth.
            </p>
            <p className="text-[17px] leading-[1.8] text-foreground">
              I integrate evidence-based methods such as cognitive-behavioral
              therapy (CBT), EMDR, mindfulness-based practices, and
              body-oriented techniques to help you understand both the
              emotional and physiological sides of what you’re experiencing.
            </p>
          </div>

          <p className="text-[17px] leading-[1.8] text-foreground">
            I believe therapy works best when you feel respected, understood,
            and actively involved in the process. My goal is not just symptom
            relief, but helping you develop insight, resilience, and a
            stronger relationship with yourself over time.
          </p>
        </div>

        <Link
          href="/approach"
          className="mt-14 w-fit border-b border-foreground pb-2 text-[11.5px] tracking-[0.12em] text-foreground uppercase transition-colors duration-300 hover:border-accent-teal hover:text-accent-teal md:mt-auto md:pt-24"
        >
          Explore my approach
        </Link>
      </Reveal>

      {/* Right image - flush to the viewport edge, inset from the section top */}
      <div className="relative h-[380px] w-full md:mt-[53px] md:mb-[33px] md:h-auto md:w-[30%] md:self-stretch">
        <Image
          src="/office-2.jpeg"
          alt="Therapy room with a grey sofa, leather armchair, olive tree, and bookshelves"
          fill
          sizes="(min-width: 768px) 30vw, 100vw"
          className="object-cover object-[40%_50%]"
        />
      </div>
    </section>
  );
}
