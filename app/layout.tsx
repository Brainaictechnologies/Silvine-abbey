import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import TawkToScript from "@/components/Tawkto/Tawkto";

const league_spartan = League_Spartan({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Silvine",
  description: "Finance management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <TawkToScript />
      <GoogleTagManager gtmId="G-RSFZ53NYE5" />
      <body className={league_spartan.className}>{children}</body>
    </html>
  );
}
