import "@/styles/globals.css";

import { LIST as techList } from "@/server/api/routers/technology";
import { TRPCReactProvider } from "@/trpc/react";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import { MainContent } from "./_components/main-content";
import { Particle } from "./_components/particle";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Ritchi Andriantsifeherana",
  description: "Experienced Full-Stack Typescript Developer",
  keywords: techList,
  creator: "tchi.devica@gmail.com",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Ritchi Andriantsifeherana",
    description: "Experienced Full-Stack Typescript Developer",
    url: "https://tchi.xyz",
    site_name: "Ritchi portfolio",
    images: [
      {
        url: "https://tchi.xyz/favicon.ico",
        width: 800,
        height: 600,
        alt: "Experienced Full-Stack Typescript Developer",
      },
    ],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${inter.variable}`}>
        <Particle />
        <TRPCReactProvider cookies={cookies().toString()}>
          <MainContent>{children}</MainContent>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
