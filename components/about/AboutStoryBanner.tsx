import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function AboutStoryBanner() {
  return (
    <section className="relative h-[460px] w-full overflow-hidden bg-foreground sm:h-[540px] lg:h-[627px]">
      <Image
        src="/about-story.webp"
        alt="A father and son holding hands and jumping across a sandy beach"
        fill
        sizes="100vw"
        className="object-cover object-[70%_50%]"
      />
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 flex items-end px-6 pb-14 sm:px-10 md:px-16 md:pb-28 lg:px-[8.8%] lg:pb-[130px]">
        <Reveal>
          <p className="max-w-[1100px] font-serif text-[30px] font-light leading-[1.4] tracking-tight text-white sm:text-[40px] lg:text-[52px]">
            This isn&apos;t the whole story. We&apos;re here to help you write
            the next chapter.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
