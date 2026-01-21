import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/navbar/Navbar";

const playfairDisplay = Playfair_Display({
  variable: "--font-font-primary",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-font-secondary",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hubly App",
  description: "Centralisez tous vos contenus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-background ${playfairDisplay.variable} ${plusJakarta.variable} antialiased`}
      >
        {children}
        <Navbar />
      </body>
    </html>
  );
}
