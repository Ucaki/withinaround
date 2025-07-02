import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport ={
  width: "device-width",
  initialScale: 1,
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta charSet="UTF-8" />
      </head>
      <body className="bg-white text-gray-900">
        <Navbar />
        <main className="p-4" style={{backgroundColor: 'rgb(217, 223, 215)', color: 'rgb(71, 74, 73)' }}>{children}</main>
      </body>
    </html>
  );
}

