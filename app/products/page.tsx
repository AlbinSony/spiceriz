"use client"

import { useState, useEffect, Suspense } from "react"
import Link from "next/link"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ShoppingCart } from "lucide-react"

const CATEGORIES = ["Cardamom", "Pepper", "Cloves", "Cinnamon", "Nutmeg", "Spice Blends"]

const PRODUCTS = [
  // Cardamom Varieties
  {
    name: "Emperor Bold (8.5mm+)",
    slug: "cardamom-emperor",
    category: "Cardamom",
    description: "Super bold premium green pods, peak essential oils",
    price: "Rs. 2,200/kg",
    image: "https://res.cloudinary.com/xug0w0py/image/upload/f_auto,q_auto/v1/products-cardamom-pods_h4ukyj",
  },
  {
    name: "Empire Bold (8.0mm)",
    slug: "cardamom-empire",
    category: "Cardamom",
    description: "Flagship export grade, uniform plump pods",
    price: "Rs. 1,800/kg",
    image: "https://res.cloudinary.com/xug0w0py/image/upload/f_auto,q_auto/v1/products-cardamom-pods_h4ukyj",
  },
  {
    name: "Premium Bold (7.5mm)",
    slug: "cardamom-premium",
    category: "Cardamom",
    description: "Excellent color and value for bulk blending",
    price: "Rs. 1,600/kg",
    image: "https://res.cloudinary.com/xug0w0py/image/upload/f_auto,q_auto/v1/products-cardamom-pods_h4ukyj",
  },
  {
    name: "Medium Bold (7.0mm)",
    slug: "cardamom-medium",
    category: "Cardamom",
    description: "Standard retail pack pods, sun-cured & clean",
    price: "Rs. 1,400/kg",
    image: "https://res.cloudinary.com/xug0w0py/image/upload/f_auto,q_auto/v1/products-cardamom-pods_h4ukyj",
  },

  // Pepper Varieties
  {
    name: "Garbled Black Pepper",
    slug: "pepper-garbled",
    category: "Pepper",
    description: "Double-cleaned whole berries, dust-free Malabar grade",
    price: "Rs. 680/kg",
    image: "https://res.cloudinary.com/xug0w0py/image/upload/f_auto,q_auto/v1/products-black-pepper_e9ubjc",
  },
  {
    name: "Ungarbled Pepper",
    slug: "pepper-ungarbled",
    category: "Pepper",
    description: "Standard commercial berries for extractors and milling",
    price: "Rs. 620/kg",
    image: "https://res.cloudinary.com/xug0w0py/image/upload/f_auto,q_auto/v1/products-black-pepper_e9ubjc",
  },
  {
    name: "Coarse Ground Pepper",
    slug: "pepper-ground",
    category: "Pepper",
    description: "Freshly milled black pepper powder, high piperine kick",
    price: "Rs. 580/kg",
    image: "https://res.cloudinary.com/xug0w0py/image/upload/f_auto,q_auto/v1/products-black-pepper_e9ubjc",
  },

  // Cloves Varieties
  {
    name: "Handpicked Prime Cloves",
    slug: "cloves-prime",
    category: "Cloves",
    description: "Select bold buds, high head presence and volatile oil",
    price: "Rs. 950/kg",
    image: "https://res.cloudinary.com/xug0w0py/image/upload/f_auto,q_auto/v1/products-clove_g1oexv",
  },
  {
    name: "Standard Cleaned Cloves",
    slug: "cloves-standard",
    category: "Cloves",
    description: "Cleaned commercial grade cloves, sorted and sieved",
    price: "Rs. 850/kg",
    image: "https://res.cloudinary.com/xug0w0py/image/upload/f_auto,q_auto/v1/products-clove_g1oexv",
  },
  {
    name: "Fine Clove Powder",
    slug: "cloves-powder",
    category: "Cloves",
    description: "100% pure cool-ground clove powder, intense flavor",
    price: "Rs. 780/kg",
    image: "https://res.cloudinary.com/xug0w0py/image/upload/f_auto,q_auto/v1/products-clove_g1oexv",
  },

  // Cinnamon Varieties
  {
    name: "Ceylon Cinnamon Quills",
    slug: "cinnamon-ceylon",
    category: "Cinnamon",
    description: "Sweet, soft quills with multiple thin layers",
    price: "Rs. 820/kg",
    image: "https://res.cloudinary.com/xug0w0py/image/upload/f_auto,q_auto/v1/products-cinnamon_lajfu3",
  },
  {
    name: "Cassia Cinnamon Quills",
    slug: "cinnamon-cassia",
    category: "Cinnamon",
    description: "Thick hard rolls with strong spicy aroma and red hue",
    price: "Rs. 720/kg",
    image: "https://res.cloudinary.com/xug0w0py/image/upload/f_auto,q_auto/v1/products-cinnamon_lajfu3",
  },
  {
    name: "Pure Cinnamon Powder",
    slug: "cinnamon-powder",
    category: "Cinnamon",
    description: "Freshly ground bark powder, sifted and sorted",
    price: "Rs. 650/kg",
    image: "https://res.cloudinary.com/xug0w0py/image/upload/f_auto,q_auto/v1/products-cinnamon_lajfu3",
  },

  // Nutmeg Varieties
  {
    name: "Whole Nutmeg (No Shell)",
    slug: "nutmeg-no-shell",
    category: "Nutmeg",
    description: "Hand-graded whole nutmeg seeds, high volatile oil density",
    price: "Rs. 1,150/kg",
    image: "https://res.cloudinary.com/xug0w0py/image/upload/f_auto,q_auto/v1/products-nutmeg_xwntos",
  },
  {
    name: "Whole Nutmeg (With Shell)",
    slug: "nutmeg-shell",
    category: "Nutmeg",
    description: "Natural shell-on nutmeg seeds, extended freshness",
    price: "Rs. 950/kg",
    image: "https://res.cloudinary.com/xug0w0py/image/upload/f_auto,q_auto/v1/products-nutmeg_xwntos",
  },
  {
    name: "Premium Red Mace (Javitri)",
    slug: "nutmeg-mace",
    category: "Nutmeg",
    description: "Vibrant red-orange dried arils, sweet fragrant scent",
    price: "Rs. 1,850/kg",
    image: "https://res.cloudinary.com/xug0w0py/image/upload/f_auto,q_auto/v1/products-nutmeg_xwntos",
  },

  // Spice Blends Varieties
  {
    name: "Garam Masala Blend",
    slug: "blends-garam",
    category: "Spice Blends",
    description: "Classic warm blend with green cardamom, pepper, cloves",
    price: "Rs. 550/box",
    image: "https://res.cloudinary.com/xug0w0py/image/upload/f_auto,q_auto/v1/products-blends_uno4c4",
  },
  {
    name: "Kerala Curry Masala",
    slug: "blends-curry",
    category: "Spice Blends",
    description: "Robust blend with turmeric, coriander, fennel, pepper",
    price: "Rs. 450/box",
    image: "https://res.cloudinary.com/xug0w0py/image/upload/f_auto,q_auto/v1/products-blends_uno4c4",
  },
  {
    name: "Custom Formulations",
    slug: "blends-custom",
    category: "Spice Blends",
    description: "Private label spice mixtures tailored to your sensory profile",
    price: "Rs. 650/box",
    image: "https://res.cloudinary.com/xug0w0py/image/upload/f_auto,q_auto/v1/products-blends_uno4c4",
  }
]

function CatParamObserver({ onCatChange }: { onCatChange: (cat: string) => void }) {
  const searchParams = useSearchParams()
  const cat = searchParams.get("cat")

  useEffect(() => {
    if (cat && CATEGORIES.includes(cat)) {
      onCatChange(cat)
    }
  }, [cat, onCatChange])

  return null
}

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState("Cardamom")

  // Filter products based on active tab
  const filteredProducts = PRODUCTS.filter(prod => prod.category === activeTab)

  return (
    <main className="overflow-x-hidden bg-white min-h-screen flex flex-col justify-between">
      <SiteHeader />

      <Suspense fallback={null}>
        <CatParamObserver onCatChange={setActiveTab} />
      </Suspense>

      {/* Top Banner Section */}
      <section className="py-6 sm:py-8 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="bg-[#F5F1E6] rounded-[24px] py-14 px-6 sm:py-20 sm:px-12 text-center">
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.15] max-w-2xl mx-auto font-sans">
              Shop premium handpicked Kerala spices
            </h1>
            <p className="mt-4 text-xs sm:text-sm text-neutral-500 max-w-md mx-auto font-sans font-medium leading-relaxed">
              Sourced directly from the high-altitude plantations of Idukki, Kerala. Graded and packed to preserve authentic essential oils.
            </p>
          </div>
        </div>
      </section>

      {/* Category Tabs & Filter Controls */}
      <section className="border-b border-neutral-100 pb-4">
        <div className="container max-w-6xl mx-auto px-4">
          
          {/* Desktop controls (Single Horizontal Line) */}
          <div className="hidden sm:flex items-center justify-center py-2">
            <div className="flex items-center gap-6">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`text-[15px] font-semibold transition-all pb-1.5 border-b-2 whitespace-nowrap ${
                    activeTab === cat
                      ? "border-neutral-900 text-neutral-950"
                      : "border-transparent text-neutral-400 hover:text-neutral-600"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile controls (Clean, properly ordered 2-line layout) */}
          <div className="sm:hidden flex flex-col gap-3 py-2 w-full text-center">
            {/* 1st Line: Cardamom, Pepper, Cloves */}
            <div className="grid grid-cols-3 gap-1.5">
              {["Cardamom", "Pepper", "Cloves"].map((cat) => {
                const mapCat = cat === "Pepper" ? "Pepper" : cat
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveTab(mapCat)}
                    className={`text-[12px] font-bold transition-all py-1.5 px-1 border rounded-[6px] text-center truncate ${
                      activeTab === mapCat
                        ? "bg-neutral-900 border-neutral-900 text-white"
                        : "bg-white border-neutral-200 text-neutral-500"
                    }`}
                  >
                    {cat}
                  </button>
                )
              })}
            </div>

            {/* 2nd Line: Cinnamon, Nutmeg, Spice Blends */}
            <div className="grid grid-cols-3 gap-1.5">
              {["Cinnamon", "Nutmeg", "Spice Blends"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`text-[12px] font-bold transition-all py-1.5 px-1 border rounded-[6px] text-center truncate ${
                    activeTab === cat
                      ? "bg-neutral-900 border-neutral-900 text-white"
                      : "bg-white border-neutral-200 text-neutral-500"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Grid of Product Cards */}
      <section className="py-12 sm:py-16 flex-1">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
            {filteredProducts.map((prod) => {
              const message = encodeURIComponent(`Hi, I am interested in purchasing ${prod.name}.`)
              return (
                <a 
                  href={`https://wa.me/918606771827?text=${message}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={prod.slug}
                  className="group block flex flex-col justify-between h-full cursor-pointer bg-white no-underline hover:no-underline"
                >
                  <div>
                    {/* Image Box Frame (Square & Full Fill) */}
                    <div className="relative aspect-square w-full overflow-hidden rounded-[16px] bg-[#f5f5f5] border border-neutral-100">
                      <Image
                        src={prod.image}
                        alt={prod.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 330px"
                      />
                    </div>

                    {/* Bottom Meta Content */}
                    <div className="mt-4 flex items-center justify-between px-1">
                      <div className="flex-1 text-left">
                        <h2 className="text-base font-bold text-neutral-900 leading-tight group-hover:underline">
                          {prod.name}
                        </h2>
                        <p className="mt-1 text-xs text-neutral-400 font-medium">
                          {prod.description}
                        </p>
                      </div>
                      <div className="flex-shrink-0 ml-4">
                        <span
                          className="inline-flex items-center gap-1.5 h-8 px-4 rounded-[6px] text-[11px] font-bold tracking-wide uppercase transition-all shadow-sm bg-[#123d26] text-[#fff8ec] group-hover:bg-[#5b8c2f]"
                        >
                          <ShoppingCart className="w-3.5 h-3.5 text-neutral-200" /> Buy Now
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
