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
    <html lang="en" className={geist.className}>
      <body className="min-h-screen flex flex-col antialiased bg-white text-[#012B55]">
        <Header />
        {children}
      </body>
    </html>
  );
}
