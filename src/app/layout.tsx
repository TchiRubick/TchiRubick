import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  title: "Ritchi Andria - Expert Fullstack Developer in React & Node.js",
  description:
    "Explore the innovative solutions crafted by Ritchi Andria, a Senior Full-Stack Developer with 7 years of experience in React, Next.js, and Node.js. Specializing in scalable web and mobile applications.",
  keywords: ["Typescript", "React", "Nextjs", "Nodejs", "PostgreSQL", "IA", "Blockchain"],
  authors: [{ name: "Ritchi Andria" }],
  openGraph: {
    title: "Ritchi Andria - Fullstack Developer Specializing in React & Node.js",
    description:
      "Discover the work of Ritchi Andria, a seasoned Full-Stack Developer with expertise in React, Next.js, and Node.js. Delivering high-performance applications for startups and enterprises.",
    type: "website",
    images: "https://www.tchi.xyz/me.jpeg",
    url: "https://www.tchi.xyz",
  },
  appLinks: {
    web: {
      url: "https://www.tchi.xyz",
    },
  },
  category: "Portfolio",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ritchi Andria",
  jobTitle: "Fullstack Developer",
  url: "https://www.tchi.xyz",
  sameAs: ["https://www.linkedin.com/in/tchirubick/", "https://github.com/TchiRubick"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="schemas" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
