import type { Metadata } from "next";
import { serif, sans, script } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds, PsyD | Therapist in Santa Monica, CA",
  description:
    "Licensed clinical psychologist in Santa Monica, CA, offering therapy for anxiety, panic, trauma, and burnout. In-person sessions and secure telehealth across California.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${sans.variable} ${serif.variable} ${script.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
