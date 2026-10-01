import { Cormorant, Mulish, Mrs_Saint_Delafield } from "next/font/google";

// The real site uses a licensed Squarespace font (beaufort-pro) for headings.
// Cormorant at a light weight is the closest freely-available match.
export const serif = Cormorant({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-serif",
});

// The real site uses Muli (now published as Mulish) for all body/nav copy.
export const sans = Mulish({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-sans",
});

// The real site uses a licensed Squarespace script font (PrintedMoments) for
// the "thrive" / "help" accents. No free equivalent exists; this is the
// closest available approximation.
export const script = Mrs_Saint_Delafield({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
});
