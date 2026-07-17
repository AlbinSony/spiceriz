import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Premium Spice Collection | Cardamom & Black Pepper Wholesale | Spize Spices",
  description: "Explore the premium spice collection of Spize Spices sourced from Idukki, Kerala. Green cardamom, black pepper, cloves, and cinnamon wholesale exports.",
  alternates: { canonical: "/products" },
}

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  const breadcrumbSchema = {
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
        "name": "Products",
        "item": "https://www.spizespices.com/products"
      }
    ]
  }

  // Key representative product schemas listed on the products page
  const productSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Premium Idukki Green Cardamom (8.5 mm Bold)",
      "description": "Super premium large green cardamom pods, peak aroma & essential oils, handpicked from the high-altitude plantations of Idukki, Kerala.",
      "image": "https://res.cloudinary.com/xug0w0py/image/upload/f_auto,q_auto/v1/products-cardamom-pods_h4ukyj",
      "brand": {
        "@type": "Brand",
        "name": "Spize Spices"
      },
      "sku": "SS-CARDAMOM-85B",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "INR",
        "price": "1800.00",
        "priceValidUntil": "2027-12-31",
        "valueAddedTaxIncluded": "true",
        "url": "https://www.spizespices.com/products?cat=Cardamom",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "Organization",
          "name": "Spizespices Pvt Ltd"
        }
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Malabar Black Pepper (Bold)",
      "description": "Premium large whole black pepper berries, dust-free Malabar grade with high piperine content, sourced from Idukki, Kerala.",
      "image": "https://res.cloudinary.com/xug0w0py/image/upload/f_auto,q_auto/v1/products-black-pepper_e9ubjc",
      "brand": {
        "@type": "Brand",
        "name": "Spize Spices"
      },
      "sku": "SS-PEPPER-BOLD",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "INR",
        "price": "750.00",
        "priceValidUntil": "2027-12-31",
        "valueAddedTaxIncluded": "true",
        "url": "https://www.spizespices.com/products?cat=Pepper",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "Organization",
          "name": "Spizespices Pvt Ltd"
        }
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Export Quality Cloves",
      "description": "Select bold clove buds with high head presence and volatile essential oil content, dried naturally and export certified.",
      "image": "https://res.cloudinary.com/xug0w0py/image/upload/f_auto,q_auto/v1/products-clove_g1oexv",
      "brand": {
        "@type": "Brand",
        "name": "Spize Spices"
      },
      "sku": "SS-CLOVES-EXP",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "INR",
        "price": "950.00",
        "priceValidUntil": "2027-12-31",
        "valueAddedTaxIncluded": "true",
        "url": "https://www.spizespices.com/products?cat=Cloves",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "Organization",
          "name": "Spizespices Pvt Ltd"
        }
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Ceylon Cinnamon Quills",
      "description": "True Ceylon cinnamon quills — sweet, soft, multiple layers, delicate fragrance, high-grade export quality spice.",
      "image": "https://res.cloudinary.com/xug0w0py/image/upload/v1784263901/ceylon-removebg-preview_qz1prf.png",
      "brand": {
        "@type": "Brand",
        "name": "Spize Spices"
      },
      "sku": "SS-CINNAMON-CEYLON",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "INR",
        "price": "450.00",
        "priceValidUntil": "2027-12-31",
        "valueAddedTaxIncluded": "true",
        "url": "https://www.spizespices.com/products?cat=Cinnamon",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "Organization",
          "name": "Spizespices Pvt Ltd"
        }
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Whole Nutmeg (No Shell)",
      "description": "Hand-graded whole nutmeg seeds, high volatile oil density and rich nutty flavor, direct from Kerala plantations.",
      "image": "https://res.cloudinary.com/xug0w0py/image/upload/f_auto,q_auto/v1/products-nutmeg_xwntos",
      "brand": {
        "@type": "Brand",
        "name": "Spize Spices"
      },
      "sku": "SS-NUTMEG-NOSHELL",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "INR",
        "price": "600.00",
        "priceValidUntil": "2027-12-31",
        "valueAddedTaxIncluded": "true",
        "url": "https://www.spizespices.com/products?cat=Nutmeg",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "Organization",
          "name": "Spizespices Pvt Ltd"
        }
      }
    }
  ]

  return (
    <>
      {/* 1. Products Page Breadcrumb List */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />

      {/* 2. Products List - Inject multiple Product schemas */}
      {productSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema)
          }}
        />
      ))}

      {children}
    </>
  )
}

