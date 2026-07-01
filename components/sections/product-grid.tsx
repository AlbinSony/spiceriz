"use client"

import Link from "next/link"
import Image from "next/image"
import { Reveal } from "@/components/ui/reveal"
import { ArrowRight } from "lucide-react"

const products = [
  {
    name: "Cardamom",
    desc: "Cardamom is a highly prized aromatic spice known as the 'Queen of Spices.' It features a complex, sweet, and herbal flavor profile with citrusy undertones, making it a staple in both traditional Indian desserts and savory masala blends.",
    imgPath: "/images/products-cardamom-pods.png",
  },
  {
    name: "Black Pepper",
    desc: "Black Pepper is the 'King of Spices,' revered for its sharp, pungent heat and deep woody notes. Harvested from mature pepper vines, it delivers a fresh, bold kick that enhances flavor and aids digestion in culinary preparations worldwide.",
    imgPath: "/images/products-black-pepper.png",
  },
  {
    name: "Cloves",
    desc: "Clove is a pungent, warm spice that consists of intense flavor and aroma. Its sweet and spicy taste makes it one of the most used spices in India and the world. They are used in a variety of traditional Indian dish preparation.",
    imgPath: "/images/products-clove.png",
  },
  {
    name: "Cinnamon",
    desc: "Cinnamon is a sweet, woody spice harvested from the inner bark of evergreen trees. Renowned for its warm, comforting fragrance and delicate sweet taste, it adds a refined flavor to baked goods, curries, and spiced teas.",
    imgPath: "/images/products-cinnamon.png",
  },
  {
    name: "Nutmeg",
    desc: "Nutmeg is a warm, sweet spice derived from the seed of the tropical nutmeg tree. It features a rich, nutty, and slightly sweet flavor, widely used to add warmth to hot beverages, creamy sauces, and festive holiday desserts.",
    imgPath: "/images/products-nutmeg.png",
  },
  {
    name: "Spice Blends",
    desc: "Our Artisanal Spice Blends are carefully crafted recipes that bring together the perfect ratios of whole spices. Ground to lock in freshness, they deliver a balanced, authentic flavor profile that simplifies premium Indian cooking.",
    imgPath: "/images/products-blends.png",
  },
]

export function ProductGrid() {
  return (
    <section id="products" className="relative bg-white py-16 md:py-24 lg:py-28 overflow-hidden">
      <div className="container relative z-10">
        {/* Header Section */}
        <Reveal className="mx-auto max-w-3xl text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#5b8c51]">
            <span className="text-[#5b8c51]">←</span>
            <span>Our Product Range</span>
            <span className="text-[#5b8c51]">→</span>
          </div>
          <h2 className="mt-5 font-serif text-3xl md:text-5xl font-semibold leading-tight text-[#173f23]">
            Authentic Spices, <span className="font-semibold text-[#5b8c2f]">Rich in Flavor</span>
          </h2>
          <span className="mx-auto mt-4 block h-[2px] w-8 bg-[#d64b2a]" />
          <p className="mx-auto mt-5 max-w-xl text-[14.5px] md:text-[16px] font-medium leading-relaxed text-[#203020]/75">
            Discover a wide range of carefully selected spices.
          </p>
        </Reveal>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, index) => (
            <Reveal key={p.name} delay={index * 0.06}>
              <div className="card hover-lift bg-white border border-[rgba(35,79,44,0.06)] rounded-[24px] p-5 flex flex-col h-full group">
                
                {/* Framed Image Container */}
                <div className="relative aspect-[1.12] w-full overflow-hidden rounded-[20px] bg-[rgba(35,79,44,0.02)] border border-[rgba(35,79,44,0.04)]">
                  <Image
                    src={p.imgPath || "/placeholder.svg"}
                    alt={p.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    sizes="(max-width: 1024px) 50vw, 30vw"
                  />
                </div>

                {/* Info Text Area */}
                <div className="pt-5 pb-1 px-1 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Product Name Title */}
                    <h3 className="font-serif text-[22px] font-bold leading-tight text-[#173f23] group-hover:text-[#5b8c2f] transition-colors duration-300">
                      {p.name}
                    </h3>

                    {/* Description Text */}
                    <p className="mt-3 text-[14px] leading-relaxed text-[#203020]/75">
                      {p.desc}
                    </p>
                  </div>
                </div>

              </div>
            </Reveal>
          ))}
        </div>

        {/* View Full Range Center Button */}
        <Reveal className="mt-16 text-center" delay={0.15}>
          <Link
            href="/products"
            className="group inline-flex h-12 items-center justify-center gap-2.5 rounded-[8px] bg-[#123d26] px-8 text-[14px] font-bold text-[#fff8ec] shadow-[0_16px_30px_rgba(18,61,38,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#5b8c2f]"
          >
            View Full Range
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
