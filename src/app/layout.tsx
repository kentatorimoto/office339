import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "office339",
  description:
    "office339 — Art Direction / Curation / Production",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="bg-white text-gray-900 font-sans">
        <Header />
        <main className="min-h-screen pt-18 md:pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
