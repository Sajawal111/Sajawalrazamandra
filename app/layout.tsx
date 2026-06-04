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
  // ── PERSONAL & BRAND ──────────────────────────────
  'sajawal raza mandra',
  'sajawal raza web developer',
  'sajawal mandra developer',
  'sajawal raza mandra blog',
  'sajawal raza portfolio',

  // ── PAKISTAN LOCATION-BASED ───────────────────────
  'web developer pakistan',
  'web developer karachi',
  'web design karachi',
  'react developer pakistan',
  'nextjs developer pakistan',
  'freelance web developer pakistan',
  'mern stack developer pakistan',
  'frontend developer pakistan',
  'shopify developer pakistan',
  'hire web developer pakistan',
  'portfolio web developer pakistan',
  'full stack developer pakistan',
  'nodejs developer pakistan',
  'mongodb developer pakistan',

  // ── WORLDWIDE — HIGH VOLUME (Hire Intent) ─────────
  'hire web developer',
  'hire react developer',
  'hire full stack developer',
  'hire mern stack developer',
  'hire nextjs developer',
  'hire shopify developer',
  'freelance web developer',
  'web developer for hire',
  'remote web developer',
  'dedicated web developer',
  'remote react developer',
  'remote full stack developer',

  // ── WORLDWIDE — SERVICES ──────────────────────────
  'full stack web developer',
  'mern stack development',
  'react developer',
  'reactjs development services',
  'react frontend developer',
  'custom react application development',
  'nextjs development services',
  'nodejs backend developer',
  'express js developer',
  'mongodb developer',
  'rest api developer',
  'shopify store development',
  'custom ecommerce development',
  'ecommerce website development',
  'custom web application development',
  'responsive web design',
  'web performance optimization',

  // ── WORLDWIDE — BLOG & TUTORIALS ─────────────────
  'web development blog',
  'react.js tutorial',
  'next.js guide',
  'mern stack tutorial',
  'shopify store setup guide',
  'freelancing tips for developers',
  'core web vitals guide',
  'website speed optimization',
  'tailwind css tips',
  'seo for web developers',
  'google analytics 4 setup',
  'rest api integration nextjs',
  'mongodb tutorial beginners',
  'wordpress vs nextjs',
  'react vs nextjs 2026',
  'how to build portfolio website',
  'how to get freelance clients',
  'developer portfolio tips',
  'how to start online store',

  // ── PAKISTAN — BLOG SPECIFIC ──────────────────────
  'web development blog pakistan',
  'next.js guide pakistan',
  'mern stack pakistan',
  'shopify development pakistan',
  'freelancing pakistan',
  'fiverr pakistan freelancer',
  'freelancing payments pakistan',
  'payoneer pakistan freelancer',
  'seo guide pakistani websites',
  'website cost pakistan 2026',
  'ecommerce store pakistan',
  'jazzcash easypaisa shopify',
  'cod shopify pakistan',

  // ── TECH STACK KEYWORDS ───────────────────────────
  'react.js developer 2026',
  'next.js app router seo',
  'mern stack scalable apps',
  'full stack javascript developer',
  'saas web application developer',
  'mvp development services',
  'startup web developer',
  'landing page developer',
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