import type { Metadata } from "next"
import { Syne, DM_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: 'Sajawal Raza Mandra | Professional Web Developer Pakistan',
description: 'Sajawal Raza Mandra is a professional Web Developer specializing in React.js, Next.js, Node.js and MongoDB. 3+ years experience, 40+ projects delivered worldwide. Available for freelance.',
keywords: [
  'sajawal raza mandra',
  'web developer pakistan',
  'web developer karachi',
  'react developer pakistan',
  'nextjs developer pakistan',
  'freelance web developer pakistan',
  'mern stack developer pakistan',
  'frontend developer pakistan',
  'shopify developer pakistan',
  'web design karachi',
  'hire web developer pakistan',
  'portfolio web developer pakistan',
  'sajawal raza web developer',
  'sajawal mandra developer',
],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${syne.variable} ${dmSans.variable} font-sans antialiased bg-[var(--bg)]`}
      >
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
