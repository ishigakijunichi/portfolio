import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/src/components/Header";
import "./globals.css";

const geist = localFont({
  src: [
    {
      path: "./geist-latin.woff2",
      style: "normal",
    },
    {
      path: "./geist-latin-ext.woff2",
      style: "normal",
    },
  ],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "Junichi Ishigaki | Product Designer",
  description: "Portfolio of Junichi Ishigaki, a product designer based in Tokyo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geist.className}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        {children}
      </body>
    </html>
  );
}
