import { Babylonica, Crimson_Pro, Mulish } from "next/font/google";

// The reference site uses the licensed Typekit font beaufort-pro (weight 300)
// for headings. Crimson Pro at weight 200 was the closest free match when
// rendered side by side and measured against the live line widths.
export const serif = Crimson_Pro({
  subsets: ["latin"],
  weight: ["200", "300", "400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

// The reference site uses Muli, which Google now publishes as Mulish.
export const sans = Mulish({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-sans",
});

// The reference site uses the licensed script PrintedMoments for accent words
// ("thrive", "help", ...). Babylonica is the closest free thin monoline
// script; it draws smaller per font-size, so accents use the `script` utility.
export const script = Babylonica({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
});
