"use client"

import { useState, useEffect, Suspense } from "react"
import Link from "next/link"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ShoppingCart } from "lucide-react"

const CATEGORIES = ["Cardamom", "Pepper", "Cloves", "Cinnamon", "Nutmeg", "Star Anise"]

const CARDAMOM_IMG = "https://res.cloudinary.com/xug0w0py/image/upload/f_auto,q_auto/v1/products-cardamom-pods_h4ukyj"
const PEPPER_IMG = "https://res.cloudinary.com/xug0w0py/image/upload/f_auto,q_auto/v1/products-black-pepper_e9ubjc"
const CLOVE_IMG = "https://res.cloudinary.com/xug0w0py/image/upload/f_auto,q_auto/v1/products-clove_g1oexv"
const NUTMEG_IMG = "https://res.cloudinary.com/xug0w0py/image/upload/f_auto,q_auto/v1/products-nutmeg_xwntos"
const BLENDS_IMG = "https://res.cloudinary.com/xug0w0py/image/upload/f_auto,q_auto/v1/products-blends_uno4c4"

const PRODUCTS = [
  // ── Cardamom ──────────────────────────────────────────
  { name: "8.5 mm Bold", slug: "cardamom-85-bold", category: "Cardamom", description: "Super premium large pods, peak aroma & essential oils", price: "On Request", image: CARDAMOM_IMG },
  { name: "8 Bold Rejection", slug: "cardamom-8-rejection", category: "Cardamom", description: "8 mm grade — rejection sorted, suitable for processing", price: "On Request", image: CARDAMOM_IMG },
  { name: "8 Bold Fruit", slug: "cardamom-8-fruit", category: "Cardamom", description: "8 mm fruit grade, naturally dried full pods", price: "On Request", image: CARDAMOM_IMG },
  { name: "8 Bold", slug: "cardamom-8-bold", category: "Cardamom", description: "Classic bold 8 mm export grade, uniform plump pods", price: "On Request", image: CARDAMOM_IMG },
  { name: "8 mm", slug: "cardamom-8mm", category: "Cardamom", description: "Standard 8 mm green cardamom, double cleaned", price: "On Request", image: CARDAMOM_IMG },
  { name: "7.5–8 mm", slug: "cardamom-75-8mm", category: "Cardamom", description: "Mid-bold range, excellent colour and fragrance", price: "On Request", image: CARDAMOM_IMG },
  { name: "7–8 mm Rejection", slug: "cardamom-7-8-rejection", category: "Cardamom", description: "7–8 mm rejection grade, ideal for oil extraction", price: "On Request", image: CARDAMOM_IMG },
  { name: "7–8 mm Fruit", slug: "cardamom-7-8-fruit", category: "Cardamom", description: "7–8 mm fruit grade, naturally sun-dried pods", price: "On Request", image: CARDAMOM_IMG },
  { name: "7–7.5 mm", slug: "cardamom-7-75mm", category: "Cardamom", description: "Consistent mid-grade pods for retail and blending", price: "On Request", image: CARDAMOM_IMG },
  { name: "6–7 mm Rejection", slug: "cardamom-6-7-rejection", category: "Cardamom", description: "6–7 mm rejection sort, suitable for powder extraction", price: "On Request", image: CARDAMOM_IMG },
  { name: "6–7 mm Fruit", slug: "cardamom-6-7-fruit", category: "Cardamom", description: "6–7 mm fruit grade, whole dried pods", price: "On Request", image: CARDAMOM_IMG },
  { name: "6–7 mm", slug: "cardamom-6-7mm", category: "Cardamom", description: "Standard commercial grade, clean and sieved", price: "On Request", image: CARDAMOM_IMG },
  { name: "5–6 mm Rejection", slug: "cardamom-5-6-rejection", category: "Cardamom", description: "5–6 mm rejection grade for processing use", price: "On Request", image: CARDAMOM_IMG },
  { name: "5–6 mm Fruit", slug: "cardamom-5-6-fruit", category: "Cardamom", description: "5–6 mm fruit grade, small whole pods", price: "On Request", image: CARDAMOM_IMG },
  { name: "5–6 mm", slug: "cardamom-5-6mm", category: "Cardamom", description: "Entry-grade whole pods, clean and sorted", price: "On Request", image: CARDAMOM_IMG },

  // ── Black Pepper ──────────────────────────────────────
  { name: "Bold", slug: "pepper-bold", category: "Pepper", description: "Premium large whole berries, dust-free Malabar grade", price: "On Request", image: PEPPER_IMG },
  { name: "Mini Bold", slug: "pepper-mini-bold", category: "Pepper", description: "Smaller bold berries, consistent size, high piperine content", price: "On Request", image: PEPPER_IMG },
  { name: "Bulk Clean", slug: "pepper-bulk-clean", category: "Pepper", description: "Commercial bulk grade, cleaned and sorted for export", price: "On Request", image: PEPPER_IMG },

  // ── Cloves ────────────────────────────────────────────
  { name: "Normal", slug: "cloves-normal", category: "Cloves", description: "Standard cleaned whole cloves, sorted and sieved", price: "On Request", image: CLOVE_IMG },
  { name: "Export Quality", slug: "cloves-export", category: "Cloves", description: "Select bold buds, high head presence and volatile oil, export certified", price: "On Request", image: CLOVE_IMG },

  // ── Cinnamon ──────────────────────────────────────────
  { name: "Cinnamon Bark", slug: "cinnamon-bark", category: "Cinnamon", description: "Raw dried cinnamon bark pieces, rich and fragrant", price: "On Request", image: "https://res.cloudinary.com/xug0w0py/image/upload/v1784263902/bark-removebg-preview_ozdz3q.png" },
  { name: "Ceylon Cinnamon", slug: "cinnamon-ceylon", category: "Cinnamon", description: "True cinnamon — sweet, soft quills with thin multiple layers", price: "On Request", image: "https://res.cloudinary.com/xug0w0py/image/upload/v1784263901/ceylon-removebg-preview_qz1prf.png" },
  { name: "Cassia Cinnamon", slug: "cinnamon-cassia", category: "Cinnamon", description: "Thick hard rolls with strong spicy aroma and deep red hue", price: "On Request", image: "https://res.cloudinary.com/xug0w0py/image/upload/v1784263900/cassia-removebg-preview_oxh2v5.png" },

  // ── Nutmeg ────────────────────────────────────────────
  { name: "Whole Nutmeg (No Shell)", slug: "nutmeg-no-shell", category: "Nutmeg", description: "Hand-graded whole nutmeg seeds, high volatile oil density", price: "On Request", image: NUTMEG_IMG },
  { name: "Whole Nutmeg (With Shell)", slug: "nutmeg-shell", category: "Nutmeg", description: "Natural shell-on nutmeg seeds, extended freshness", price: "On Request", image: NUTMEG_IMG },
  { name: "Premium Red Mace (Javitri)", slug: "nutmeg-mace", category: "Nutmeg", description: "Vibrant red-orange dried arils, sweet fragrant scent", price: "On Request", image: NUTMEG_IMG },

  // ── Star Anise ───────────────────────────────────────
  { name: "Star Anise", slug: "star-anise", category: "Star Anise", description: "Whole dried star-shaped pods, bold liquorice aroma for curries, biryanis & spiced teas", price: "On Request", image: "https://res.cloudinary.com/xug0w0py/image/upload/v1784264980/star-anise_rlmhwi.png" },
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
                  className={`text-[15px] font-semibold transition-all pb-1.5 border-b-2 whitespace-nowrap ${activeTab === cat
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
                    className={`text-[12px] font-bold transition-all py-1.5 px-1 border rounded-[6px] text-center truncate ${activeTab === mapCat
                        ? "bg-neutral-900 border-neutral-900 text-white"
                        : "bg-white border-neutral-200 text-neutral-500"
                      }`}
                  >
                    {cat}
                  </button>
                )
              })}
            </div>

            {/* 2nd Line: Cinnamon, Nutmeg, Star Anise */}
            <div className="grid grid-cols-3 gap-1.5">
              {["Cinnamon", "Nutmeg", "Star Anise"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`text-[12px] font-bold transition-all py-1.5 px-1 border rounded-[6px] text-center truncate ${activeTab === cat
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
                        className={`transition-transform duration-500 group-hover:scale-105 ${(prod.category === "Cinnamon" || prod.category === "Star Anise") ? "object-contain p-4" : "object-cover"}`}
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
