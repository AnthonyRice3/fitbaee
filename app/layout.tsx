import type { Metadata } from "next";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Geist, Geist_Mono, Oswald } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Home Grown Fitness",
  description: "Personalized fitness coaching for every body. Start your journey with a trainer who cares.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable} font-oswald antialiased`}>
        <Navbar />
        <div className="pt-16 min-h-screen flex flex-col">
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
