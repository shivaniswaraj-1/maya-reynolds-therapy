import Image from "next/image";
import styles from "@/components/layout/site-grid.module.css";

/* 768px+: photo from the left edge to column 13; headline in columns 15–24. */
export default function HonoringSection() {
  return (
    <section className={`${styles.grid24} bg-white pt-(--honor-pt) pb-(--honor-pb) md:min-h-[66vh]`}>
      {/* Photo flush to the left edge (flush right on mobile) */}
      <div className="relative ml-gutter aspect-[367/304] md:col-[1/15] md:ml-0 md:aspect-auto md:min-h-[calc(36.6*var(--u))]">
        <Image
          src="/honoring-family.webp"
          alt="A family holding hands while standing in the ocean shallows"
          fill
          sizes="(min-width: 768px) 54vw, 94vw"
          className="object-cover"
        />
      </div>

      <h2 className="mt-[11px] px-gutter font-serif text-h2 font-extralight md:col-[16/26] md:mt-0 md:self-end md:px-0">
        Honoring where you’ve been <span className="script">&amp;</span>{" "}
        helping shape where you’re headed.
      </h2>
    </section>
  );
}
