"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "@/components/Logo";
import { NAV_LINKS } from "@/lib/site";

// Underline that grows from the left on hover and stays drawn while active.
const underline =
  "relative after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left after:bg-current after:transition-transform after:duration-500 after:ease-out after:content-['']";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const close = () => setOpen(false);

  // Soft shadow once the page scrolls under the sticky header.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  const contactActive = pathname === "/contact";

  return (
    <header
      className={`sticky top-0 z-40 bg-canvas transition-shadow duration-500 ${
        scrolled ? "shadow-[0_8px_24px_-18px_rgba(0,0,0,0.35)]" : ""
      }`}
    >
      <div className="mx-auto flex max-w-[1680px] items-center justify-between px-6 py-[27px] sm:px-10 md:px-16 lg:px-20">
        <Link href="/" className="shrink-0" onClick={close} aria-label="Dr. Maya Reynolds, PsyD — home">
          <Logo />
        </Link>

        {/* Nav links + Contact */}
        <nav className="hidden items-center gap-8 md:flex lg:gap-10">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`${underline} text-[13px] tracking-[0.1em] text-ink uppercase ${
                  active ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            aria-current={contactActive ? "page" : undefined}
            className={`rounded-full border border-primary px-[19.5px] py-[15px] text-[11.5px] tracking-[0.12em] uppercase transition-colors duration-300 ${
              contactActive
                ? "bg-primary text-canvas"
                : "text-ink hover:bg-primary hover:text-canvas"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="relative flex h-10 w-10 items-center justify-center md:hidden"
        >
          <span
            className={`absolute h-px w-7 bg-primary transition-transform duration-300 ${
              open ? "rotate-45" : "-translate-y-[5px]"
            }`}
          />
          <span
            className={`absolute h-px w-7 bg-primary transition-transform duration-300 ${
              open ? "-rotate-45" : "translate-y-[5px]"
            }`}
          />
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={`absolute inset-x-0 top-full grid bg-canvas shadow-[0_12px_24px_-16px_rgba(0,0,0,0.25)] transition-[grid-template-rows] duration-500 ease-out md:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <nav className="overflow-hidden" inert={!open}>
          <div className="flex flex-col items-start gap-6 px-6 pt-2 pb-10 sm:px-10">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={close}
                  aria-current={active ? "page" : undefined}
                  className={`${underline} text-[14px] tracking-[0.12em] text-ink uppercase ${
                    active ? "after:scale-x-100" : "after:scale-x-0"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={close}
              aria-current={contactActive ? "page" : undefined}
              className={`mt-2 w-fit rounded-full border border-primary px-[19.5px] py-[15px] text-[11.5px] tracking-[0.12em] uppercase ${
                contactActive ? "bg-primary text-canvas" : "text-ink"
              }`}
            >
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
