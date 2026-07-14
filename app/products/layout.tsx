import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Premium Spice Collection | Cardamom & Black Pepper Wholesale | Spize Spices",
  description: "Explore the premium spice collection of Spize Spices sourced from Idukki, Kerala. Green cardamom, black pepper, cloves, and cinnamon wholesale exports.",
  alternates: { canonical: "/products" },
}

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
