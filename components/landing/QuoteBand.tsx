import Image from "next/image";

/* Cloned full-bleed story banner, tinted with the eucalyptus primary. */
export default function QuoteBand() {
  return (
    <section className="relative flex min-h-[66vh] items-center overflow-hidden bg-primary px-gutter pt-(--story-pt) pb-(--story-pb) md:items-end md:pl-[calc(8.75vw_+_0.5px)]">
      <Image
        src="/images/shoreline-walk.jpg"
        alt="A person walking slowly along a misty shoreline"
        fill
        sizes="100vw"
        className="object-cover object-[50%_60%]"
      />
      <div className="absolute inset-0 bg-primary/60" />

      <blockquote className="relative font-serif text-h2 font-extralight text-white md:max-w-[calc(62vw_-_3.8px)]">
        “My goal is not just symptom relief, but helping you build insight,
        resilience, and <em className="text-accent-soft">a stronger relationship with yourself.</em>”
      </blockquote>
    </section>
  );
}
