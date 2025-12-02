import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

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
  title: "RubyKay Labs | Custom AI & Software for Real Estate Teams",
  description:
    "We build custom, white-label AI and software products for real estate teams and brokerages. Get tools your competitors can't buy off the shelf.",
  keywords: [
    "real estate software",
    "custom CRM",
    "AI for real estate",
    "white-label software",
    "real estate technology",
    "agent tools",
  ],
  authors: [{ name: "RubyKay Labs" }],
  openGraph: {
    title: "RubyKay Labs | Custom AI & Software for Real Estate Teams",
    description:
      "We build custom, white-label AI and software products for real estate teams and brokerages.",
    url: "https://rubykaylabs.com",
    siteName: "RubyKay Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RubyKay Labs | Custom AI & Software for Real Estate Teams",
    description:
      "We build custom, white-label AI and software products for real estate teams and brokerages.",
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
      >
        {children}
      </body>
    </html>
  );
}
