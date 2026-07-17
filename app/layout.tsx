import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Lato, Outfit, Manrope, Fraunces } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "700"],
})

const lato = Lato({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato",
  weight: ["400", "700"],
})

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800"],
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
})

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.spizespices.com"),
  title: {
    default: "Premium Cardamom & Kerala Spice Exporter | Spizespices Pvt Ltd",
    template: "%s | Spizespices Pvt Ltd",
  },
  description:
    "Buy premium Idukki cardamom, black pepper, cloves, cinnamon and authentic Kerala spices directly from trusted farmers. Export-quality spices for wholesale and retail worldwide.",
  keywords: [
    "Idukki cardamom",
    "Kerala spices",
    "Indian cardamom exporter",
    "cardamom wholesale",
    "Kerala spice export",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" }
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Premium Cardamom & Kerala Spice Exporter | Spizespices Pvt Ltd",
    description:
      "Buy premium Idukki cardamom, black pepper, cloves, cinnamon and authentic Kerala spices directly from trusted farmers. Export-quality spices for wholesale and retail worldwide.",
    url: "/",
    siteName: "Spizespices Pvt Ltd",
    images: [{ url: "/og-image.jpg" }],
    locale: "en_IN",
    type: "website",
  },
  alternates: { canonical: "/" },
  twitter: {
    card: "summary_large_image",
    title: "Premium Cardamom & Kerala Spice Exporter | Spizespices Pvt Ltd",
    description: "Buy premium Idukki cardamom, black pepper, cloves, cinnamon and authentic Kerala spices directly from trusted farmers.",
    images: ["/og-image.jpg"],
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable} ${outfit.variable} ${manrope.variable} ${fraunces.variable} scroll-smooth overflow-x-hidden`}>
      <head>
        {/* Preconnect to critical third-party origins to reduce connection latency */}
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=general-sans@300,400,500,600,700,800&display=swap" />

        {/* Global Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Spizespices Pvt Ltd",
              "alternateName": "Spizespices",
              "url": "https://www.spizespices.com",
              "logo": "https://www.spizespices.com/images/spizespiceslogo.webp",
              "contactPoint": [{
                "@type": "ContactPoint",
                "telephone": "+91-86067-71827",
                "contactType": "sales",
                "areaServed": ["IN", "AE", "US", "GB", "DE"],
                "availableLanguage": ["English", "Malayalam"]
              }],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Idukki",
                "addressRegion": "Kerala",
                "addressCountry": "IN"
              },
              "email": "hello@spizespicespvtltd.com"
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Spizespices Pvt Ltd",
              "image": "https://www.spizespices.com/og-image.jpg",
              "telephone": "+91-86067-71827",
              "email": "hello@spizespicespvtltd.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Idukki",
                "addressRegion": "Kerala",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 9.8499,
                "longitude": 77.0997
              },
              "url": "https://www.spizespices.com",
              "priceRange": "INR",
              "openingHoursSpecification": [{
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
                "opens": "09:00",
                "closes": "18:00"
              }]
            })
          }}
        />
      </head>
      <body className="font-sans bg-background text-foreground antialiased overflow-x-hidden">{children}</body>
    </html>
  )
}
