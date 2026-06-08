import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono, Raleway, Google_Sans_Flex } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const jetbrainsMono = JetBrains_Mono({subsets:['latin'],variable:'--font-mono'});
const raleway = Raleway({subsets:['latin'],variable:'--font-raleway'});
const googleSansFlex = Google_Sans_Flex({subsets:['latin'],variable:'--font-google-sans-flex'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fonts = [geistSans, geistMono, jetbrainsMono, raleway, googleSansFlex];

export const metadata: Metadata = {
  title: "Faith Tracker - Jesus Youth Pala",
  description: "A web application to track and manage your faith lives.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", ...fonts.map((f) => f.variable))}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
