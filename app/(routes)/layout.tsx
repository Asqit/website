import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const meta: Metadata = {
  title: "Next.js with Tailwind CSS",
  description: "Next.js with Tailwind CSS template",
};

interface Props {
  children: Readonly<ReactNode>;
}

export default function Layout({ children }: Props) {
  return (
    <html>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
