import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";

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
      <body className={league_spartan.className}>{children}</body>
    </html>
  );
}
