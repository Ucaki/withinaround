import type { Metadata } from "next";
/*import { Geist, Geist_Mono } from "next/font/google";*/
import "../styles/globals.css";
import Navbar from "@/components/Navbar";

/*const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});*/

/*const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});*/

export const metadata: Metadata = {
  title: "withinaround",
  description: "get to know yourself, inside and out. Yoga workshops and blog",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Navbar />
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}

