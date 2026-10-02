import Image from "next/image";
import Reveal from "@/components/Reveal";
import { MAPS_URL, PRACTICE } from "@/lib/site";

export default function Sessions() {
  return (
    <section className="bg-white px-6 py-20 sm:px-10 md:px-16 md:py-28 lg:px-[8.8%] lg:pt-[100px] lg:pb-[120px]">
      <Reveal className="grid items-center gap-10 bg-accent-sand p-6 sm:p-10 md:grid-cols-[42%_1fr] md:gap-12 lg:gap-[9%] lg:py-12 lg:pr-[9%] lg:pl-[4.6%]">
        <div className="relative aspect-[4/3] w-full md:aspect-[563/663]">
          <Image
            src="/office-1.jpeg"
            alt="Sunlit sitting area in the Santa Monica office with tall windows and exposed brick"
            fill
            sizes="(min-width: 768px) 38vw, 100vw"
            className="object-cover object-[70%_50%]"
          />
        </div>

        <div>
          <h2 className="font-serif text-[36px] font-light leading-[1.3] tracking-tight text-foreground sm:text-[42px] lg:text-[46px]">
            Two ways to{" "}
            <span className="font-script text-[50px] leading-none text-accent-teal sm:text-[58px] lg:text-[64px]">
              meet
            </span>
          </h2>

          <div className="mt-8 flex flex-col gap-8">
            <div>
              <h3 className="text-[14px] tracking-[0.15em] text-foreground uppercase sm:text-[15px]">
                In person &middot; Santa Monica
              </h3>
              <p className="mt-3 text-[17px] leading-[1.8] text-foreground">
                My office is a quiet, private space designed to feel calm and
                grounding, with natural light and a comfortable, uncluttered
                environment.
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block border-b border-foreground/40 text-[17px] text-foreground transition-colors duration-300 hover:border-accent-teal hover:text-accent-teal"
              >
                {PRACTICE.street}, {PRACTICE.city}
              </a>
            </div>
            <div>
              <h3 className="text-[14px] tracking-[0.15em] text-foreground uppercase sm:text-[15px]">
                Telehealth &middot; California
              </h3>
              <p className="mt-3 text-[17px] leading-[1.8] text-foreground">
                Secure online sessions for clients located anywhere in
                California.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
