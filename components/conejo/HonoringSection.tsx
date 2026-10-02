import Image from "next/image";

export default function HonoringSection() {
  return (
    <section className="flex flex-col gap-12 bg-white py-16 md:flex-row md:items-end md:gap-0 md:py-20">
      {/* Left image - flush to the viewport edge */}
      <div className="relative aspect-[1019/662] w-full md:w-[53%]">
        <Image
          src="/honoring-family.webp"
          alt="A family holding hands while standing in the ocean shallows"
          fill
          sizes="(min-width: 768px) 53vw, 100vw"
          className="object-cover"
        />
      </div>

      <p className="px-8 font-serif text-[36px] font-light leading-[1.4] tracking-tight text-foreground sm:text-[42px] md:flex-1 md:pb-2 md:pl-[4.4%] md:pr-12 lg:text-[50px]">
        Honoring where you&apos;ve been{" "}
        <span className="font-script text-[52px] leading-none text-accent-teal sm:text-[60px] lg:text-[72px]">
          &amp;
        </span>{" "}
        helping shape where you&apos;re headed.
      </p>
    </section>
  );
}
