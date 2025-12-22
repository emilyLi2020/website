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
  title: "Wenqing(Emily) Li, MSW | Mental Health Therapist | Bilingual Counseling",
  description: "Wenqing(Emily) Li is a mental health therapist and UC Berkeley MSW candidate providing trauma-informed, gender-inclusive therapy in English and Mandarin. Specializing in individual and group therapy for diverse populations.",
  keywords: ["mental health therapist", "bilingual counseling", "trauma-informed care", "Mandarin therapist", "Bay Area therapist", "immigrant mental health"],
  authors: [{ name: "Wenqing(Emily) Li" }],
  openGraph: {
    title: "Wenqing(Emily) Li, MSW | Mental Health Therapist",
    description: "Trauma-informed, gender-inclusive therapy in English and Mandarin",
    type: "website",
    locale: "en_US",
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
