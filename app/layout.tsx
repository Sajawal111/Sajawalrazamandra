import type { Metadata } from "next"
import { Syne, DM_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
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
  title: 'Sajawal Raza Mandra | MERN Stack Developer — Trusted by Clients in USA, UK & Pakistan',
  description: 'MERN Stack developer with 3+ years experience. 40+ projects delivered for clients in USA, UK & Pakistan. Fast delivery, clean code, timezone-friendly. Available for remote work.',
  keywords: [
  // Brand
  'sajawal raza mandra',
  'sajawal raza web developer',

  // Worldwide — USA/UK clients
  'hire mern stack developer',
  'hire react developer',
  'remote full stack developer',
  'freelance web developer',
  'hire nextjs developer',

  // Pakistan Local
  'mern stack developer pakistan',
  'web developer karachi',
  'freelance web developer pakistan',

  // Tech + Service
  'shopify developer',
  'react developer',
],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W28P8DP6');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body
        className={`${syne.variable} ${dmSans.variable} font-sans antialiased bg-[var(--bg)]`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W28P8DP6"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}