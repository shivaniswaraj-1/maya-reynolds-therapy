import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function FounderNote() {
  return (
    <section className="bg-white px-6 pb-20 sm:px-10 md:px-16 md:pb-28 lg:px-[8.8%] lg:pt-[76px] lg:pb-[100px]">
      <Reveal className="grid items-center gap-10 bg-accent-sand p-6 sm:p-10 md:grid-cols-[40%_1fr] md:gap-12 lg:grid-cols-[41%_1fr] lg:gap-[9%] lg:py-12 lg:pr-[9%] lg:pl-[4.6%]">
        <div className="relative aspect-[563/663] w-full">
          <Image
            src="/team/jennifer-anderson.webp"
            alt="Portrait of Jennifer Anderson, LMFT, founder of Conejo Valley Family Counseling"
            fill
            sizes="(min-width: 1024px) 30vw, (min-width: 768px) 38vw, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <h2 className="font-serif text-[36px] font-light leading-[1.3] tracking-tight text-foreground sm:text-[42px] lg:text-[46px]">
            A{" "}
            <span className="font-script text-[50px] leading-none text-accent-teal sm:text-[58px] lg:text-[64px]">
              note
            </span>{" "}
            from our founder
          </h2>
          <blockquote className="mt-6 text-[17px] leading-[1.8] text-foreground">
            &ldquo;Starting Conejo Valley Counseling in 2014 and witnessing
            what it has become is one of the greatest privileges of my life.
            Therapy has been a deeply transformative experience for me
            personally, and it&apos;s fueled my passion for helping others
            through this powerful process. I&apos;m grateful every day to work
            alongside incredible therapists who are dedicated to helping
            people heal and find hope. We all have our own stories, and
            it&apos;s an honor to be part of a team that helps people reclaim
            theirs.&rdquo;
          </blockquote>
          <p className="mt-4 text-[17px] leading-[1.8] text-foreground">
            &ndash; Jennifer Anderson, LMFT
          </p>
        </div>
      </Reveal>
    </section>
  );
}
