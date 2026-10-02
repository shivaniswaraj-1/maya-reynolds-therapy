import Image from "next/image";

export default function StorySection() {
  return (
    <section className="relative flex min-h-[66vh] items-center overflow-hidden bg-cv-ink px-gutter pt-(--story-pt) pb-(--story-pb) md:items-end md:pl-[calc(8.75vw_+_0.5px)]">
      <Image
        src="/conejo/story-banner.png"
        alt="Two children running along a foggy beach"
        fill
        sizes="100vw"
        className="object-cover"
      />
      {/* Same overlay as the reference: #2b2b2b at 54% */}
      <div className="absolute inset-0 bg-cv-ink/54" />

      {/* 768px+: spans 16 grid columns */}
      <h2 className="relative font-serif text-h2 font-extralight text-white md:max-w-[calc(60vw_-_3.8px)]">
        You deserve a place where your story is heard, valued, and understood.{" "}
        <em>Nothing will be too heavy for us to carry together.</em>
      </h2>
    </section>
  );
}
