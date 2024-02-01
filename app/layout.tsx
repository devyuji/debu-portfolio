import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Debojyoti Mahto",
  description:
    "I have cultivated my expertise as a software developer with a primary focus on Java, initially driven by a desire to create gaming applications. Recognizing the profound potential of software to effect meaningful change, I expanded my repertoire to include Rust. This transition enabled me to delve into advanced software concepts and backend frameworks, allowing me to contribute to various projects with tangible benefits for individuals and society at large. My commitment to professional growth and the application of software for societal betterment continues to drive my endeavors in the field.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-zinc-900 text-white h-full w-full`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
