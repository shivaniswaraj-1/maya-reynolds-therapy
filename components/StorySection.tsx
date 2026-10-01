import Image from "next/image";

export default function StorySection() {
  return (
    <section className="relative mt-16 h-[520px] w-full overflow-hidden bg-foreground md:mt-24 md:h-[650px] lg:mt-28 lg:h-[724px]">
      <Image
        src="/story-banner.png"
        alt="Two children running along a foggy beach"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-foreground/25" />
      <div className="absolute inset-0 flex items-end">
        <p className="max-w-3xl px-8 pb-14 font-serif text-[26px] font-light leading-[1.3] tracking-tight text-background sm:text-[30px] md:px-16 md:pb-20 lg:px-20 lg:text-[34px]">
          You deserve a place where your story is heard, valued, and
          understood. <em className="italic">Nothing will be too heavy for
          us to carry together.</em>
        </p>
      </div>
    </section>
  );
}
