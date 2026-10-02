import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  intro: ReactNode;
  image: { src: string; alt: string; position?: string };
};

/** Top-of-page hero for inner pages: copy on the left, photo flush to the right edge. */
export default function PageHero({ eyebrow, title, intro, image }: PageHeroProps) {
  return (
    <section className="flex flex-1 flex-col bg-canvas md:min-h-[600px] md:flex-row">
      <div className="flex flex-1 flex-col px-6 pt-10 pb-14 sm:px-10 md:px-16 md:pt-[70px] md:pb-[75px] lg:pr-16 lg:pl-[8.8%]">
        <p className="text-[14px] tracking-[0.15em] text-ink uppercase sm:text-[15px]">
          {eyebrow}
        </p>

        <div className="mt-12 md:my-auto md:pt-16">
          <h1 className="max-w-[720px] font-serif text-[40px] font-light leading-[1.25] tracking-tight text-ink sm:text-[50px] lg:text-[62px]">
            {title}
          </h1>
          <p className="mt-8 max-w-[620px] text-[17px] leading-[1.8] text-ink md:mt-14">
            {intro}
          </p>
        </div>

        <Link
          href="/contact"
          className="mt-10 w-fit border-b border-primary pb-2 text-[11.5px] tracking-[0.12em] text-ink uppercase transition-colors duration-300 hover:border-accent-deep hover:text-accent-deep md:mt-0"
        >
          Book a consultation
        </Link>
      </div>

      {/* Right image - flush to the viewport edge */}
      <div className="relative aspect-[4/3] w-full md:mt-[70px] md:mb-[50px] md:aspect-auto md:w-[46%]">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="(min-width: 768px) 46vw, 100vw"
          className={`object-cover ${image.position ?? ""}`}
        />
      </div>
    </section>
  );
}

/** Script-font accent word used inside page titles. */
export function ScriptWord({ children }: { children: ReactNode }) {
  return (
    <span className="mr-1 font-script text-[56px] leading-none text-accent sm:text-[68px] lg:text-[82px]">
      {children}
    </span>
  );
}
