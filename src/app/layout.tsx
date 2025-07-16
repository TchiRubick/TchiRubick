import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
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
  keywords: [
    "Typescript",
    "React",
    "Nextjs",
    "Nodejs",
    "PostgreSQL",
    "IA",
    "Blockchain",
  ],
  authors: [{ name: "Ritchi Andria" }],
  openGraph: {
    title:
      "Ritchi Andria - Fullstack Developer Specializing in React & Node.js",
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
  sameAs: [
    "https://www.linkedin.com/in/ritchiandria",
    "https://github.com/ritchiandria",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div
          className="relative flex size-full min-h-screen flex-col bg-[#f8fbfa] group/design-root overflow-x-hidden"
          style={{ fontFamily: '"Space Grotesk", "Noto Sans", sans-serif' }}
        >
          <div className="layout-container flex h-full grow flex-col">
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e8f2ec] px-10 py-3">
              <div className="flex items-center gap-4 text-[#0e1a13]">
                <div className="w-10 h-10">
                  <Image
                    src="/me.jpeg"
                    width={40}
                    height={40}
                    alt="Ritchi"
                    className="rounded-full w-10 h-10 object-cover border-2 border-[#e8f2ec] shadow"
                  />
                </div>
                <h2 className="text-[#0e1a13] text-lg font-bold leading-tight tracking-[-0.015em]">
                  Ritchi
                </h2>
              </div>
              <div className="flex flex-1 justify-end gap-8">
                <nav className="flex items-center gap-9">
                  <Link
                    href="/#about"
                    className="text-[#0e1a13] text-sm font-medium leading-normal hover:text-[#51946b] transition-colors"
                  >
                    About
                  </Link>
                  <Link
                    href="/#projects"
                    className="text-[#0e1a13] text-sm font-medium leading-normal hover:text-[#51946b] transition-colors"
                  >
                    Projects
                  </Link>
                  <Link
                    href="/#contact"
                    className="text-[#0e1a13] text-sm font-medium leading-normal hover:text-[#51946b] transition-colors"
                  >
                    Contact
                  </Link>
                  <Link
                    href="/chat"
                    className="text-[#0e1a13] text-sm font-medium leading-normal hover:text-[#51946b] transition-colors"
                  >
                    Chat
                  </Link>
                </nav>
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded h-10 px-4 bg-[#e8f2ec] text-[#0e1a13] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#d1e6d9] transition-colors">
                  <span className="truncate">Resume</span>
                </button>
              </div>
            </header>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
