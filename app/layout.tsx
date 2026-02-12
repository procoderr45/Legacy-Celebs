import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url), // change later
  verification: {
    google: '6Lk6AdtXMvB38WvCwbW0xmzDyUbbHAPdA89zdD4gNJ8',
  },
  title: {
    default: siteConfig.name + " | A premium event planning company",
    template: "%s | Luxury Event Management",
  },

  description: siteConfig.description,
  keywords: [
    "Luxury event management",
    "Elite party planner",
    "High-end wedding planner",
    "Private event curator",
    "Premium event company",
  ],

  authors: [{ name: siteConfig.name }],

  creator: siteConfig.name,
  publisher: siteConfig.name,

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description:
      "Crafting unforgettable luxury events with precision, exclusivity, and elegance.",
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage, // add later
        width: 1200,
        height: 630,
        alt: "Luxury Event Experience",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      siteConfig.ogImage
    ],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.variable} font-body antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
