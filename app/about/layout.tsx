import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about the four-generation legacy of Spizespices Pvt Ltd, sourcing premium green cardamom, pepper, and spices directly from Idukki farms.",
  alternates: { canonical: "/about" },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Page Specific Structured Data (BreadcrumbList) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.spizespices.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "About Us",
                "item": "https://www.spizespices.com/about"
              }
            ]
          })
        }}
      />
      {children}
    </>
  )
}
