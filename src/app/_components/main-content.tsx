"use client"
import { AosProvider } from "@/components/aos-provider";
import { MainNav } from "@/components/main-nav";
import { ThemeProvider } from "@/components/theme-provider";
import type { ReactNode } from "react";

const ITEMS = [
  {
    href: '#main-stack',
    title: 'Main Stack',
  },
  {
    href: '#projects',
    title: 'Projects',
  },
  {
    href: '#technologies',
    title: 'Technologies',
  },
  {
    href: '#personality',
    title: 'Personality',
  },
];

export const MainContent = ({ children }: { children: ReactNode }) => (
  <ThemeProvider
    attribute="class"
    defaultTheme="dark"
  >
    <AosProvider>
      <div className='flex min-h-screen flex-col space-y-6 outline-none'>
        <header className='sticky top-0 z-40 border-b bg-background'>
          <div className='container flex h-16 items-center justify-between py-4'>
            <MainNav items={ITEMS} />
          </div>
        </header>
        <main className='flex w-full flex-1 flex-col overflow-hidden'>{children}</main>
      </div>
    </AosProvider>
  </ThemeProvider>
);
