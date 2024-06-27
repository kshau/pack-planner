"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/ui/toaster";
import { ScrollArea } from "@/components/ui/scroll-area";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <title>Pack Planner</title>
      <link rel="icon" type="image/x-icon" href="/assets/favicon.ico"/>
      <body className={inter.className}>
        <SessionProvider>
          <ScrollArea className="rounded-md">
            {children}
          </ScrollArea>
          <Toaster />
        </SessionProvider>
      </body>
    </html>
  );
}