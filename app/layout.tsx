import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FaveIT - Your Perfect Gift Registry",
  description:
    "Create and share your wishlists with friends and family. Make gift-giving simple, meaningful, and organized. Avoid duplicate gifts and ensure every gift is wanted and appreciated.",
  keywords: [
    "gift registry",
    "wishlist",
    "gift giving",
    "gift organization",
    "gift management",
    "social gifting",
    "gift coordination",
  ],
  authors: [{ name: "FaveIT" }],
  openGraph: {
    title: "FaveIT - Your Perfect Gift Registry",
    description:
      "Create and share your wishlists with friends and family. Make gift-giving simple, meaningful, and organized.",
    type: "website",
    siteName: "FaveIT",
    images: [
      {
        url: "/images/faveit-logo.png",
        width: 800,
        height: 600,
        alt: "FaveIT Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FaveIT - Your Perfect Gift Registry",
    description:
      "Create and share your wishlists with friends and family. Make gift-giving simple, meaningful, and organized.",
    creator: "@faveitapp",
    images: [
      {
        url: "/images/faveit-logo.png",
        width: 800,
        height: 600,
        alt: "FaveIT Logo",
      },
    ],
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "ro-RO": "/ro-RO",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
