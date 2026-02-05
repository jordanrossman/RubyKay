import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/animations/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RubyKay Labs | Custom AI & Software for Growing Companies",
  description:
    "We build custom AI tools and software products that fit how your team actually works. No off-the-shelf compromises—just solutions built around your business.",
  keywords: [
    "custom software development",
    "AI development agency",
    "white-label software",
    "custom business tools",
    "software consulting",
    "bespoke software",
  ],
  authors: [{ name: "RubyKay Labs" }],
  openGraph: {
    title: "RubyKay Labs | Custom AI & Software for Growing Companies",
    description:
      "We build custom AI tools and software products that fit how your team actually works.",
    url: "https://rubykaylabs.com",
    siteName: "RubyKay Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RubyKay Labs | Custom AI & Software for Growing Companies",
    description:
      "We build custom AI tools and software products that fit how your team actually works.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${instrumentSerif.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
