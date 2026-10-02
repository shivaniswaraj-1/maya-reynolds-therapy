"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

const TEAM = [
  { name: "Jennifer Anderson", image: "/team/jennifer-anderson.webp" },
  { name: "Heather Williams-Baumgart", image: "/team/heather-williams-baumgart.webp" },
  { name: "Candace Bletscher", image: "/team/candace-bletscher.webp" },
  { name: "Samantha Johnson", image: "/team/samantha-johnson.webp" },
  { name: "Autumn Bodily", image: "/team/autumn-bodily.webp" },
  { name: "Andrea Watkins", image: "/team/andrea-watkins.webp" },
  { name: "Rosa Gomez", image: "/team/rosa-gomez.webp" },
  { name: "Chad Flores", image: "/team/chad-flores.webp" },
];

function Arrow({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 32 16"
      className={`h-4 w-8 ${direction === "left" ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M0 8h30M23 1l7 7-7 7" />
    </svg>
  );
}

export default function TeamCarousel() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateArrows = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    setCanPrev(track.scrollLeft > 4);
    setCanNext(track.scrollLeft + track.clientWidth < track.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    updateArrows();
    track.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      track.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [updateArrows]);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    const card = track?.querySelector("li");
    if (!track || !card) return;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    track.scrollBy({ left: direction * (card.offsetWidth + gap), behavior: "smooth" });
  };

  const arrowClass =
    "absolute top-1/2 z-10 hidden h-[60px] w-[60px] -translate-y-1/2 items-center justify-center rounded-full bg-foreground/90 text-white transition-opacity duration-300 hover:bg-foreground sm:flex";

  return (
    <div className="relative">
      <ul
        ref={trackRef}
        aria-label="Our therapists"
        className="flex snap-x snap-mandatory scroll-px-6 gap-5 overflow-x-auto px-6 pb-4 [scrollbar-width:none] sm:scroll-px-10 sm:px-10 md:scroll-px-16 md:px-16 lg:scroll-px-[5%] lg:px-[5%] [&::-webkit-scrollbar]:hidden"
      >
        {TEAM.map((member) => (
          <li
            key={member.name}
            className="w-[82%] shrink-0 snap-start bg-white p-5 text-center sm:w-[46%] sm:p-8 lg:w-[29.6%]"
          >
            <div className="relative aspect-square w-full overflow-hidden">
              <Image
                src={member.image}
                alt={`Portrait of ${member.name}`}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 42vw, 75vw"
                className="object-cover object-top transition-transform duration-700 ease-out hover:scale-[1.03]"
              />
            </div>
            <h3 className="mt-10 font-serif text-[22px] font-normal text-foreground">
              {member.name}
            </h3>
            <Link
              href="/about#team"
              className="mt-10 mb-2 inline-block border-b border-foreground pb-2 text-[11.5px] tracking-[0.12em] text-foreground uppercase transition-colors duration-300 hover:border-accent-teal hover:text-accent-teal"
            >
              Read bio
            </Link>
          </li>
        ))}
      </ul>

      <button
        type="button"
        aria-label="Previous therapists"
        onClick={() => scrollByCard(-1)}
        className={`${arrowClass} left-[3%] ${canPrev ? "opacity-100" : "pointer-events-none opacity-0"}`}
      >
        <Arrow direction="left" />
      </button>
      <button
        type="button"
        aria-label="Next therapists"
        onClick={() => scrollByCard(1)}
        className={`${arrowClass} right-[3%] ${canNext ? "opacity-100" : "pointer-events-none opacity-0"}`}
      >
        <Arrow direction="right" />
      </button>
    </div>
  );
}
