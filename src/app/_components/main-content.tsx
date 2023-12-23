"use client"
import { AosProvider } from "@/components/aos-provider";
import { ThemeProvider } from "@/components/theme-provider";
import type { ReactNode } from "react";

export const MainContent = ({ children }: { children: ReactNode }) => (
  <ThemeProvider
    attribute="class"
    defaultTheme="dark"
  >
    <AosProvider>
      <div className='flex min-h-screen flex-col space-y-6 outline-none'>
        <main className='flex w-full flex-1 flex-col overflow-hidden'>{children}</main>
      </div>
    </AosProvider>
  </ThemeProvider>
);
