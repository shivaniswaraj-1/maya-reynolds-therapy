import { Playfair_Display, Mrs_Saint_Delafield } from "next/font/google";

// Serif font used for the logo wordmark and the large hero heading.
export const serif = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-serif",
});

// Cursive/script font used only for the highlighted word "thrive".
export const script = Mrs_Saint_Delafield({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
});
