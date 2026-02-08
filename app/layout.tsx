import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";




export const metadata: Metadata = {
  title: "Digital Arc Technologies",
  description:
    "Building exceptional web experiences that drive business growth.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Digital Arc Technologies",
    description:
      "Building exceptional web experiences that drive business growth.",
    url: "https://digitalarctechnologies.com",
    siteName: "Digital Arc Technologies",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Digital Arc Technologies",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
       
      >
        {children}
      </body>
    </html>
  );
}
