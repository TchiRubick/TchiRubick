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
  title: 'Ritchi Andriantsifeherana',
  description: 'Experienced Full-Stack Typescript Developer',
  keywords: techList,
  creator: 'tchi.devica@gmail.com',
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="5Af2v2K1oAtXGu7i0vE9eLLwa1VQIhIn8nMBkJ855ZY" />
      </head>
      <body className={`font-sans ${inter.variable}`}>
        <Particle />
        <TRPCReactProvider cookies={cookies().toString()}>
          <MainContent>
            {children}
          </MainContent>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
