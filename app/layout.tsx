import type React from "react"
import type { Metadata } from "next"
import { Cormorant_Garamond, Inter } from "next/font/google"
import "./globals.css"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cormorant",
  weight: ["500", "600", "700"],
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Idukki Spices | Pure Idukki Cardamom & Kerala Spices",
  description:
    "Premium Idukki cardamom and Kerala spices. Direct from farms. Export-ready with certifications. Wholesale (B2B) and retail (B2C).",
  keywords: [
    "Idukki cardamom",
    "Kerala spices",
    "Indian cardamom exporter",
    "cardamom wholesale",
    "Kerala spice export",
  ],
  openGraph: {
    title: "Idukki Spices | Pure Idukki Cardamom & Kerala Spices",
    description:
      "Premium Idukki cardamom and Kerala spices for B2B & B2C. Export-ready, certified quality from Kerala.",
    url: "https://idukkispices.example.com",
    siteName: "Idukki Spices",
    images: [{ url: "/idukki-cardamom-farms.png" }],
    locale: "en_IN",
    type: "website",
  },
  alternates: { canonical: "https://idukkispices.example.com" },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} scroll-smooth`}>
      <body className="font-sans bg-background text-foreground antialiased">{children}</body>
    </html>
  )
}
