import type { Metadata } from "next";
import Header from "@/src/components/Header";
import "./globals.css";

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
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased bg-white text-[#012B55]">
        <Header />
        {children}
      </body>
    </html>
  );
}
