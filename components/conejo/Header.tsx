"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PillLink } from "@/components/conejo/ui";

type NavItem = { label: string; href: string; items?: string[] };

// Mirrors the reference site's navigation, including its dropdown folders.
const NAV: NavItem[] = [
  { label: "About", href: "#about" },
  {
    label: "Our Team",
    href: "#our-team",
    items: [
      "Jennifer Anderson, LMFT",
      "Candace Bletscher, AMFT",
      "Heather Williams-Baumgart, AMFT",
      "Samantha Johnson, AMFT",
      "Autumn Bodily, AMFT",
      "Rosa Gomez, AMFT",
      "Chad Flores, AMFT",
    ],
  },
  {
    label: "Specialties",
    href: "#specialties",
    items: [
      "Dissociation",
      "Trauma",
      "Special Needs Parenting",
      "Couples",
      "Children & Teens",
      "Anxiety & Depression",
      "Adoption",
    ],
  },
  {
    label: "Methods",
    href: "#methods",
    items: ["EMDR", "Brainspotting", "Somatic Therapy", "Parts Work Therapy"],
  },
  { label: "FAQs", href: "#faqs" },
];

function Logo({ priority = false }: { priority?: boolean }) {
  return (
    <Image
      src="/conejo-logo.png"
      alt="Conejo Valley Family Counseling"
      width={1500}
      height={438}
      priority={priority}
      className="h-auto w-[240px] md:w-[257px]"
    />
  );
}

function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 10 18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.2" className={`h-[0.6em] w-auto ${className}`}>
      <path d="M1 1l8 8-8 8" />
    </svg>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [folder, setFolder] = useState<NavItem | null>(null);

  const closeMenu = () => {
    setMenuOpen(false);
    setFolder(null);
  };

  // Lock page scroll and allow Escape to close while the mobile menu is open.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setMenuOpen(false);
      setFolder(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-white focus:px-3 focus:py-2 focus:text-nav"
      >
        Skip to Content
      </a>

      <div className="flex items-center justify-between p-[6vw] nav:px-[5vw] nav:py-[1.4vw]">
        <Link href="/conejo-clone" className="shrink-0">
          <Logo priority />
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Main" className="hidden items-center gap-[2.5vw] nav:flex">
          {/* Links wrap onto a second right-aligned row on narrow screens, as on the reference. */}
          <div className="flex flex-wrap items-center justify-end gap-x-[2.5vw]">
            {NAV.map((item) =>
              item.items ? (
                <div key={item.label} className="group relative">
                  <button
                    type="button"
                    aria-haspopup="true"
                    className="text-nav font-normal uppercase transition-opacity duration-300 hover:opacity-60"
                  >
                    {item.label}
                  </button>
                  <ul className="invisible absolute top-full right-0 pt-[6px] opacity-0 transition-opacity duration-300 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                    {item.items.map((sub) => (
                      <li key={sub} className="text-right">
                        <Link
                          href={item.href}
                          className="block py-[6.5px] text-nav whitespace-nowrap uppercase transition-opacity duration-300 hover:opacity-60"
                        >
                          {sub}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-nav uppercase transition-opacity duration-300 hover:opacity-60"
                >
                  {item.label}
                </Link>
              ),
            )}
          </div>
          <PillLink href="#contact" className="shrink-0">
            Contact
          </PillLink>
        </nav>

        {/* Mobile / tablet menu button */}
        <button
          type="button"
          aria-label="Open Menu"
          aria-expanded={menuOpen}
          aria-controls="conejo-menu"
          onClick={() => setMenuOpen(true)}
          className="flex h-[37px] w-[47px] flex-col items-center justify-center gap-[6px] nav:hidden"
        >
          <span className="h-px w-[35px] bg-cv-ink" />
          <span className="h-px w-[35px] bg-cv-ink" />
        </button>
      </div>

      {/* Full-screen mobile menu */}
      <div
        id="conejo-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        inert={!menuOpen}
        className={`fixed inset-0 z-40 flex flex-col bg-cv-cream transition-opacity duration-300 nav:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex items-center justify-between p-[6vw]">
          <Link href="/conejo-clone" onClick={closeMenu} className="shrink-0">
            <Logo />
          </Link>
          <button
            type="button"
            aria-label="Close Menu"
            onClick={closeMenu}
            className="relative flex h-[37px] w-[47px] items-center justify-center"
          >
            <span className="absolute h-px w-[28px] rotate-45 bg-cv-ink" />
            <span className="absolute h-px w-[28px] -rotate-45 bg-cv-ink" />
          </button>
        </div>

        <nav aria-label="Mobile" className="flex flex-1 flex-col justify-center overflow-y-auto px-[10vw]">
          {folder ? (
            <ul className="flex flex-col gap-[18px]">
              <li>
                <button
                  type="button"
                  onClick={() => setFolder(null)}
                  className="flex items-center gap-3 text-[18px] tracking-[0.1em] uppercase"
                >
                  <Chevron className="rotate-180" /> Back
                </button>
              </li>
              {folder.items?.map((sub) => (
                <li key={sub}>
                  <Link href={folder.href} onClick={closeMenu} className="text-[20px] tracking-[0.1em] uppercase">
                    {sub}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <ul className="flex flex-col gap-[29px]">
              {NAV.map((item) => (
                <li key={item.label}>
                  {item.items ? (
                    <button
                      type="button"
                      onClick={() => setFolder(item)}
                      className="flex items-center gap-[14px] text-[30px] leading-[1.45] tracking-[0.1em] uppercase"
                    >
                      {item.label} <Chevron />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className="text-[30px] leading-[1.45] tracking-[0.1em] uppercase"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          )}
        </nav>

        <div className="px-[6vw] pb-[6vw]">
          <Link
            href="#contact"
            onClick={closeMenu}
            className="block w-full max-w-[210px] rounded-[100%] border border-cv-ink py-[15px] text-center text-button leading-[1.25] uppercase"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
