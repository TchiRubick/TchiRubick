import "@/styles/globals.css";

import { LIST as techList } from "@/server/api/routers/technology";
import { TRPCReactProvider } from "@/trpc/react";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import { MainContent } from "./_components/main-content";

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
      <body className={`font-sans ${inter.variable}`}>
        <TRPCReactProvider cookies={cookies().toString()}>
          <MainContent>
            {children}
          </MainContent>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
