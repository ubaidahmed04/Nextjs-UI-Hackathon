"use client"
import localFont from "next/font/local";
import "./globals.css";
import { Footer, Header } from "@/components";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={``}
      > <section className="myfont flex flex-col w-full min-h-screen max-h-full" >
        < Header />
        <main className="flex-grow max-w-screen-xl w-full flex flex-col mx-auto">
          {children}
        </main>
        <Footer />
    </section>
      </body>
    </html>
  );
}
