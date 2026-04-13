import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import localFont from 'next/font/local'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const clash = localFont({
  src: [
    {
      path: '../public/fonts/DrukWideBold.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/DrukWideBold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-clash',
})

export const metadata: Metadata = {
  title: "Raihan Abdur Shi - Portfolio",
  description: "portofolio website",
  icons: {
    icon: "/LogoHAS.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${clash.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        </body>
    </html>
  );
}
