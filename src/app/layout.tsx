import type { Metadata } from "next";
import { Geist, Geist_Mono, Major_Mono_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const majorMono = Major_Mono_Display({
  weight: ["400"], // Major Mono Display only comes in weight 400
  subsets: ["latin"],
  display: "swap",
  variable: "--font-major-mono", // Optional: if you want to use it as a CSS variable
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${majorMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
