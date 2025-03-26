import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/common/header";
import Footer from "@/components/ui/common/footer";
import {
  ClerkProvider
} from '@clerk/nextjs'
import { Toaster } from "@/components/ui/sonner"

const sans = Source_Sans_3({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  style: ['normal', 'italic'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: "SummAIze",
  description: "A app which summarize pdf with AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${sans.variable}`}
      >
        <div className="relative min-h-screen flex flex-col px-2 max-w-6xl mx-auto">
        <Header/>
        <main className="flex-1">
        {children}
        </main>
        <Footer/>
        </div>
      </body>
      <Toaster/>
    </html>
    </ClerkProvider>
  );
}
