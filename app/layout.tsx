import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tonys place",
  description: "Welcome to tonys place",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      
       <body>{/*className={`${geistSans.variable} ${geistMono.variable} antialiased`}> */}
        {/* <Header /> */}
        {/* <p>headeer</p> */}
          <div className="pageWrapper">
            <Header />
            {children}   {/* Your page.tsx contentWrapper goes here */}
          </div>
      </body>
    </html>
  );
}
