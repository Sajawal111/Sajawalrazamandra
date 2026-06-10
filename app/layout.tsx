import type { Metadata } from "next"
import { Syne, DM_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from "next/script"
import "./globals.css"
import { WhatsAppButton } from "@/components/whatsapp-button"

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

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://sajawalraza.vercel.app/#person",
      "name": "Sajawal Raza Mandra",
      "url": "https://sajawalraza.vercel.app",
      "image": "https://sajawalraza.vercel.app/images/about-photo.png",
      "jobTitle": "MERN Stack Developer",
      "description": "Full-stack MERN developer with 3+ years experience. 40+ projects delivered for clients in USA, UK & Pakistan.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Karachi",
        "addressCountry": "PK"
      },
      "sameAs": [
        "https://github.com/sajawal111",
        "https://www.linkedin.com/in/sajawal-raza/",
        "https://www.fiverr.com/s/EgGE94K"
      ]
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://sajawalraza.vercel.app/#service",
      "name": "Sajawal Raza Mandra — Web Development Services",
      "url": "https://sajawalraza.vercel.app",
      "image": "https://sajawalraza.vercel.app/images/about-photo.png",
      "description": "MERN Stack web development services including React, Node.js, MongoDB, Next.js, Shopify, and REST APIs.",
      "provider": {
        "@id": "https://sajawalraza.vercel.app/#person"
      },
      "areaServed": ["PK", "US", "GB"],
      "priceRange": "$29 - $799",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Web Development Packages",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Starter Package",
            "price": "29",
            "priceCurrency": "USD",
            "description": "3 pages, responsive design, 2 day delivery"
          },
          {
            "@type": "Offer",
            "name": "Professional Package",
            "price": "49",
            "priceCurrency": "USD",
            "description": "5 pages, e-commerce, 5 day delivery"
          },
          {
            "@type": "Offer",
            "name": "Elite Package",
            "price": "79",
            "priceCurrency": "USD",
            "description": "7 pages, full e-commerce with cart, 6 day delivery"
          }
        ]
      }
    }
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body
        className={`${syne.variable} ${dmSans.variable} font-sans antialiased bg-[var(--bg)]`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W28P8DP6"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {children}
        <WhatsAppButton />
        {process.env.NODE_ENV === "production" && <Analytics />}
        <SpeedInsights />
      </body>
    </html>
  )
}