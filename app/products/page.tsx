"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ChevronDown, Check, ShoppingCart, Filter, ArrowRight, X } from "lucide-react"

const CATEGORIES = ["All Spices", "Cardamom", "Pepper", "Cloves", "Cinnamon", "Nutmeg", "Spice Blends"]

const PRODUCTS = [
  {
    name: "Premium Green Cardamom",
    slug: "cardamom",
    category: "Cardamom",
    description: "7mm - 9mm Bold, Idukki Kerala",
    price: "Rs. 1,600/kg",
    image: "https://res.cloudinary.com/xug0w0py/image/upload/f_auto,q_auto/v1/products-cardamom-pods_h4ukyj",
  },
  {
    name: "Bold Malabar Black Pepper",
    slug: "black-pepper",
    category: "Pepper",
    description: "High-density garbled whole pepper",
    price: "Rs. 620/kg",
    image: "https://res.cloudinary.com/xug0w0py/image/upload/f_auto,q_auto/v1/products-black-pepper_e9ubjc",
  },
  {
    name: "Handpicked Cloves",
    slug: "cloves",
    category: "Cloves",
    description: "Premium selection, high volatile oil",
    price: "Rs. 850/kg",
    image: "https://res.cloudinary.com/xug0w0py/image/upload/f_auto,q_auto/v1/products-clove_g1oexv",
  },
  {
    name: "Ceylon Cinnamon Quills",
    slug: "cinnamon",
    category: "Cinnamon",
    description: "Fragrant sweet cinnamon quills",
    price: "Rs. 720/kg",
    image: "https://res.cloudinary.com/xug0w0py/image/upload/f_auto,q_auto/v1/products-cinnamon_lajfu3",
  },
  {
    name: "Whole Nutmeg & Mace",
    slug: "nutmeg",
    category: "Nutmeg",
    description: "Bold nutmeg seeds with red aril mace",
    price: "Rs. 950/kg",
    image: "https://res.cloudinary.com/xug0w0py/image/upload/f_auto,q_auto/v1/products-nutmeg_xwntos",
  },
  {
    name: "Artisanal Spice Blends",
    slug: "spice-blends",
    category: "Spice Blends",
    description: "Perfect ratios of traditional blends",
    price: "Rs. 450/box",
    image: "https://res.cloudinary.com/xug0w0py/image/upload/f_auto,q_auto/v1/products-blends_uno4c4",
  }
]

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState("All Spices")
  const [cart, setCart] = useState<Record<string, boolean>>({})
  const [showModal, setShowModal] = useState(false)
  const [lastAddedProduct, setLastAddedProduct] = useState("")
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false)
  const [filterDropdownOpen, setFilterDropdownOpen] = useState(false)
  const [sortBy, setSortBy] = useState("default")

  const handleAddToCart = (e: React.MouseEvent, slug: string, name: string) => {
    e.preventDefault()
    e.stopPropagation()
    setCart(prev => ({
      ...prev,
      [slug]: !prev[slug]
    }))
    if (!cart[slug]) {
      setLastAddedProduct(name)
      setShowModal(true)
    }
  }

  // Filter products based on active tab
  const filteredProducts = PRODUCTS.filter(prod => {
    if (activeTab === "All Spices") return true
    return prod.category === activeTab
  })

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "name-asc") return a.name.localeCompare(b.name)
    if (sortBy === "name-desc") return b.name.localeCompare(a.name)
    return 0 // default
  })

  const activeCartCount = Object.values(cart).filter(Boolean).length

  return (
    <main className="overflow-x-hidden bg-white min-h-screen flex flex-col justify-between">
      <SiteHeader />

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
            {/* 1st Line: All Spices, Cardamom, Pepper, Cloves */}
            <div className="grid grid-cols-4 gap-1.5">
              {["All Spices", "Cardamom", "Pepper", "Cloves"].map((cat) => {
                const mapCat = cat === "All Spices" ? "All Spices" : cat === "Pepper" ? "Pepper" : cat
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
            <div className="grid grid-cols-3 gap-1.5 max-w-[90%] mx-auto w-full">
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
            {sortedProducts.map((prod) => {
              const isAdded = !!cart[prod.slug]
              return (
                <Link 
                  href={`/products/${prod.slug}`} 
                  key={prod.slug}
                  className="group block flex flex-col justify-between h-full"
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
                      <div className="flex-1">
                        <h2 className="text-base font-bold text-neutral-900 leading-tight group-hover:underline">
                          {prod.name}
                        </h2>
                        <p className="mt-1 text-xs text-neutral-400 font-medium">
                          {prod.description}
                        </p>
                      </div>
                      <div className="flex-shrink-0 ml-4">
                        <button
                          onClick={(e) => handleAddToCart(e, prod.slug, prod.name)}
                          className={`inline-flex items-center gap-1.5 h-8 px-4 rounded-[6px] text-[11px] font-bold tracking-wide uppercase transition-all shadow-sm ${
                            isAdded
                              ? "bg-[#5b8c2f] text-white hover:bg-[#4a7325]"
                              : "bg-[#123d26] text-[#fff8ec] hover:bg-[#5b8c2f]"
                          }`}
                        >
                          {isAdded ? (
                            <>
                              <Check className="w-3.5 h-3.5" /> Selected
                            </>
                          ) : (
                            <>
                              <ShoppingCart className="w-3.5 h-3.5 text-neutral-200" /> Buy Now
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Floating Inquiry summary */}
      {activeCartCount > 0 && (
        <div className="fixed bottom-6 right-6 z-40 bg-neutral-950 text-white rounded-full px-5 py-3.5 shadow-2xl flex items-center gap-4 border border-neutral-800">
          <span className="text-xs font-bold uppercase tracking-wider">
            {activeCartCount} Item{activeCartCount > 1 ? "s" : ""} selected
          </span>
          <Link
            href="/wholesale"
            className="inline-flex h-9 items-center justify-center rounded-full bg-white px-4 text-xs font-bold text-neutral-950 hover:bg-neutral-100 transition-colors"
          >
            Review Sourcing Quote <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </Link>
        </div>
      )}

      {/* Notification Toast Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="bg-white rounded-[16px] max-w-md w-full p-6 shadow-2xl border border-neutral-100 relative">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-600"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                <Check className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-neutral-950">Added to Sourcing List</h3>
            </div>
            <p className="text-xs text-neutral-600 leading-relaxed font-medium">
              We have added <strong>{lastAddedProduct}</strong> to your B2B sourcing list. Let us know if you want to request a wholesale quotation now or continue browsing.
            </p>
            <div className="mt-6 flex gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 h-10 border border-neutral-200 rounded-[8px] text-[13px] font-bold text-neutral-700 hover:bg-neutral-50"
              >
                Keep Browsing
              </button>
              <Link
                href="/wholesale"
                className="flex-1 h-10 bg-neutral-950 text-white rounded-[8px] text-[13px] font-bold flex items-center justify-center hover:bg-neutral-800"
              >
                Inquire Wholesale
              </Link>
            </div>
          </div>
        </div>
      )}

      <SiteFooter />
    </main>
  )
}
