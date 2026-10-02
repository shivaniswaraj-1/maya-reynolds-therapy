import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function BurnoutWork() {
  return (
    <section className="flex flex-col gap-12 bg-white pt-8 pb-20 md:flex-row md:gap-0 md:py-28 lg:pt-[110px] lg:pb-[135px]">
      <Reveal className="flex flex-col px-6 sm:px-10 md:w-[57.8%] md:px-16 lg:pr-[12%] lg:pl-[12.6%]">
        <p className="text-[14px] tracking-[0.15em] text-ink uppercase sm:text-[15px]">
          Burnout &amp; perfectionism
        </p>
        <h2 className="mt-6 font-serif text-[26px] font-light leading-[1.45] tracking-tight text-ink sm:text-[30px] lg:text-[34px]">
          For entrepreneurs, creatives, and professionals who feel disconnected
          from themselves after years of pushing through stress.
        </h2>
        <p className="mt-8 text-[17px] leading-[1.8] text-ink">
          In addition to trauma and anxiety, I frequently support clients
          dealing with professional burnout, perfectionism, and high internal
          pressure. Therapy can become a space to slow down, reconnect, and
          develop more sustainable ways of living and working&mdash;with a
          therapist who understands the realities of a fast-paced environment.
        </p>
        <Link
          href="/contact"
          className="mt-12 w-fit rounded-full border border-primary px-[19.5px] py-[15px] text-[11.5px] tracking-[0.12em] text-ink uppercase transition-colors duration-300 hover:bg-primary hover:text-canvas md:mt-auto"
        >
          Schedule now
        </Link>
      </Reveal>

      {/* Right image - flush to the viewport edge */}
      <Reveal delay={150} className="relative aspect-[803/518] w-full md:w-[42.2%]">
        <Image
          src="/images/calm-workspace.jpg"
          alt="A professional writing at an uncluttered desk with plants and natural light"
          fill
          sizes="(min-width: 768px) 42vw, 100vw"
          className="object-cover"
        />
      </Reveal>
    </section>
  );
}
