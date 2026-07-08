import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Lato } from "next/font/google"
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

export const metadata: Metadata = {
  title: "Spizespices Pvt Ltd | Pure Indian Spices",
  description:
    "Premium Idukki cardamom and Kerala spices. Direct from farms. Export-ready with certifications. Wholesale (B2B) and retail (B2C).",
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
    title: "Spizespices Pvt Ltd | Pure Indian Spices",
    description:
      "Premium Idukki cardamom and Kerala spices for B2B & B2C. Export-ready, certified quality from Kerala.",
    url: "https://www.spizespices.com",
    siteName: "Spizespices Pvt Ltd",
    images: [{ url: "/idukki-cardamom-farms.png" }],
    locale: "en_IN",
    type: "website",
  },
  alternates: { canonical: "https://www.spizespices.com" },
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable} scroll-smooth overflow-x-hidden`}>
      <head>
        {/* Preconnect to critical third-party origins to reduce connection latency */}
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://a.tile.openstreetmap.org" />
        <link rel="dns-prefetch" href="https://b.tile.openstreetmap.org" />
        <link rel="dns-prefetch" href="https://c.tile.openstreetmap.org" />
        <link rel="preconnect" href="https://a.tile.openstreetmap.org" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://b.tile.openstreetmap.org" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://c.tile.openstreetmap.org" crossOrigin="anonymous" />
      </head>
      <body className="font-sans bg-background text-foreground antialiased overflow-x-hidden">{children}</body>
    </html>
  )
}
