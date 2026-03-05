import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Marrow — Cultural intelligence. Creative firepower.",
  description:
    "We live inside internet culture and turn that fluency into campaigns that cut through. Brand strategy, creative, content, and trend intelligence.",
  openGraph: {
    title: "Marrow — Cultural intelligence. Creative firepower.",
    description:
      "We live inside internet culture and turn that fluency into campaigns that cut through.",
    url: "https://getmarrow.co",
    siteName: "Marrow",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Marrow wordmark on deep charcoal background",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marrow — Cultural intelligence. Creative firepower.",
    description:
      "We live inside internet culture and turn that fluency into campaigns that cut through.",
    creator: "@withmarrow",
  },
  metadataBase: new URL("https://getmarrow.co"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
