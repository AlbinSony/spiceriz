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
    <html lang="en" className={`${playfair.variable} ${lato.variable} scroll-smooth`}>
      <body className="font-sans bg-background text-foreground antialiased">{children}</body>
    </html>
  )
}
