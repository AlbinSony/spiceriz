import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Premium Spice Collection | Cardamom & Black Pepper Wholesale",
  description: "Explore the premium spice collection of Spize Spices sourced from Idukki, Kerala. Green cardamom, black pepper, cloves, and cinnamon wholesale exports.",
  alternates: { canonical: "/products" },
}

const PRODUCTS = [
  {
    name: "Premium Green Cardamom",
    slug: "cardamom",
    description: "Vibrant bold green cardamom graded from 7mm to 9mm, grown under forest shade in Idukki, Kerala.",
    image: "https://res.cloudinary.com/xug0w0py/image/upload/f_auto,q_auto/v1/why-choose-us_lzix4l",
  },
  {
    name: "Bold Malabar Black Pepper",
    slug: "black-pepper",
    description: "Sun-dried high-density black pepper with a hot, pungent aroma, sourced directly from Kerala growers.",
    image: "https://res.cloudinary.com/xug0w0py/image/upload/f_auto,q_auto/v1/why-choose-us_lzix4l",
  }
]

export default function ProductsPage() {
  return (
    <main className="overflow-x-hidden bg-white min-h-screen flex flex-col justify-between">
      <SiteHeader />
      
      <section className="py-12 md:py-16">
        <div className="container max-w-4xl mx-auto px-6">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-3 block">
            Pure Sourcing
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-tight text-neutral-950">
            Our Spice Portfolio
          </h1>
          <p className="mt-4 text-neutral-600 leading-relaxed font-normal max-w-2xl">
            Sourced directly from the high-altitude plantations of Idukki, Kerala. Graded and packed to preserve authentic essential oils.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container max-w-4xl mx-auto px-6">
          <div className="grid gap-8 sm:grid-cols-2">
            {PRODUCTS.map((prod) => (
              <div key={prod.slug} className="border border-neutral-200 rounded-[12px] p-5 flex flex-col justify-between group">
                <div>
                  <div className="relative aspect-[1.5] w-full overflow-hidden rounded-[8px] bg-neutral-50 border border-neutral-100 mb-5">
                    <Image
                      src={prod.image}
                      alt={prod.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>
                  <h2 className="font-serif text-xl font-bold text-neutral-950 group-hover:underline">
                    <Link href={`/products/${prod.slug}`}>
                      {prod.name}
                    </Link>
                  </h2>
                  <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
                    {prod.description}
                  </p>
                </div>
                <div className="pt-6">
                  <Link
                    href={`/products/${prod.slug}`}
                    className="inline-flex h-9 items-center justify-center rounded-[6px] bg-neutral-950 px-4 text-xs font-bold text-white transition-all hover:bg-neutral-800"
                  >
                    View Specifications
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
