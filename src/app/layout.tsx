import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactElement } from "react";
import Navbar from "@/components/Navbar";
import "./globals.css";
import TransitionProvider from "@/components/TransitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "vitor.dev",
  description: "Vitor Santos Portifolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactElement;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
