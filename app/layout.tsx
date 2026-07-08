import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Lato } from "next/font/google"
import "leaflet/dist/leaflet.css"
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
    url: "https://spizespices.example.com",
    siteName: "Spizespices Pvt Ltd",
    images: [{ url: "/idukki-cardamom-farms.png" }],
    locale: "en_IN",
    type: "website",
  },
  alternates: { canonical: "https://spizespices.example.com" },
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable} scroll-smooth overflow-x-hidden`}>
      <body className="font-sans bg-background text-foreground antialiased overflow-x-hidden">{children}</body>
    </html>
  )
}
