import type { Metadata } from "next";
import { Montserrat, Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800"], 
});

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist", 
  weight: ["400", "500", "600", "700", "800"], 
});

export const metadata: Metadata = {
  title: "Nurture Nova Learning",
  description: "Personalised Online Tutoring for Tech & Academics ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${urbanist.variable} antialiased bg-[#FFFFFF]`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
