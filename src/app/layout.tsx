import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ClientWrapper from "./ClientWrapper";

const playfairDisplay = Playfair_Display({
  variable: "--font-font-primary",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-font-secondary",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.svg",
  },
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
        className={`${playfairDisplay.variable} ${plusJakarta.variable} antialiased  `}
      >
        <div className=" min-h-dvh bg-background flexColumn pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]">
          <ClientWrapper>{children}</ClientWrapper>
        </div>
      </body>
    </html>
  );
}
