import Image from "next/image";
import styles from "@/components/layout/site-grid.module.css";

/* Cloned "honoring" layout: a Santa Monica photo beside the location statement. */
export default function Local() {
  return (
    <section className={`${styles.grid24} bg-white pt-(--honor-pt) pb-(--honor-pb) md:min-h-[66vh]`}>
      <div className="relative ml-gutter aspect-[367/304] md:col-[1/15] md:ml-0 md:aspect-auto md:min-h-[calc(36.6*var(--u))]">
        <Image
          src="/images/santa-monica-pier.jpg"
          alt="The Santa Monica Pier promenade on a calm, clear morning"
          fill
          sizes="(min-width: 768px) 54vw, 94vw"
          className="object-cover saturate-[0.8] sepia-[0.12]"
        />
      </div>

      <h2 className="mt-[11px] px-gutter font-serif text-h2 font-extralight text-primary md:col-[16/26] md:mt-0 md:self-end md:px-0">
        Rooted in Santa Monica <span className="script">&amp;</span>{" "}
        available by telehealth across California.
      </h2>
    </section>
  );
}
