import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BottomNav } from "@/components/layout/BottomNav";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AQUASEN",
  description: "Platform Monitoring Kualitas dan Kuantitas Air Sendang",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.className} antialiased text-slate-900 bg-slate-50 pb-16 lg:pb-0`}>
        {children}
        <BottomNav />
      </body>
    </html>
  );
}
