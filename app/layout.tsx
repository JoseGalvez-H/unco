import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "UNCO | Design, Research & Development Agency",
  description: "A forward-thinking agency specializing in design, research, and development. Creating exceptional digital experiences.",
  keywords: ["design", "research", "development", "agency", "digital", "creative"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen relative overflow-x-hidden">
        {/* Animated Background Orbs */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
          <div className="floating-orb w-96 h-96 bg-orange-400 top-20 -left-20" style={{ animationDelay: '0s' }} />
          <div className="floating-orb w-80 h-80 bg-amber-300 top-1/3 right-10" style={{ animationDelay: '2s' }} />
          <div className="floating-orb w-72 h-72 bg-rose-300 bottom-20 left-1/4" style={{ animationDelay: '4s' }} />
          <div className="floating-orb w-64 h-64 bg-orange-300 bottom-40 right-1/4" style={{ animationDelay: '1s' }} />
        </div>
        
        <Navbar />
        <main className="relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
