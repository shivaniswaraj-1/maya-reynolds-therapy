"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "@/components/Logo";
import { NAV_LINKS } from "@/lib/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="relative z-30 bg-background">
      <div className="mx-auto flex max-w-[1680px] items-center justify-between px-6 py-[27px] sm:px-10 md:px-16 lg:px-20">
        <Link href="/" className="shrink-0" onClick={close} aria-label="Dr. Maya Reynolds, PsyD — home">
          <Logo />
        </Link>

        {/* Nav links + Contact */}
        <nav className="hidden items-center gap-8 md:flex lg:gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[13px] tracking-[0.1em] text-foreground uppercase transition-colors duration-300 hover:text-accent-teal"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="rounded-full border border-foreground px-[19.5px] py-[15px] text-[11.5px] tracking-[0.12em] text-foreground uppercase transition-colors duration-300 hover:bg-foreground hover:text-background"
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
            className={`absolute h-px w-7 bg-foreground transition-transform duration-300 ${
              open ? "rotate-45" : "-translate-y-[5px]"
            }`}
          />
          <span
            className={`absolute h-px w-7 bg-foreground transition-transform duration-300 ${
              open ? "-rotate-45" : "translate-y-[5px]"
            }`}
          />
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={`absolute inset-x-0 top-full grid bg-background shadow-[0_12px_24px_-16px_rgba(0,0,0,0.25)] transition-[grid-template-rows] duration-500 ease-out md:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <nav className="overflow-hidden" inert={!open}>
          <div className="flex flex-col gap-6 px-6 pt-2 pb-10 sm:px-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={close}
                className="text-[14px] tracking-[0.12em] text-foreground uppercase"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={close}
              className="mt-2 w-fit rounded-full border border-foreground px-[19.5px] py-[15px] text-[11.5px] tracking-[0.12em] text-foreground uppercase"
            >
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
