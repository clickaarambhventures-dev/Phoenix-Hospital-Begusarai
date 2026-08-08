import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Phoenix Hospital | Premium Minimal",
  description: "A Support For Life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body suppressHydrationWarning={true} className="font-sans">
        <div id="root">
          <div className="min-h-screen bg-white text-slate-900 antialiased selection:bg-slate-900 selection:text-white flex flex-col justify-between">
            <Header />
            <main className="flex-1 mt-[96px] lg:mt-[96px]">
              {children}
            </main>
            <Footer />
            <WhatsAppButton />
          </div>
        </div>
      </body>
    </html>
  );
}
