import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ChevronRight, ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Artisanal Spice Blends Wholesale Exporter | Spize Spices",
  description: "Buy wholesale traditional Kerala masala blends and spice mixtures. Hand-crafted, ground at low temperatures, and packed fresh. Order custom B2B spice blends.",
  alternates: { canonical: "/products/spice-blends" },
}

export default function SpiceBlendsProductPage() {
  return (
    <main className="overflow-x-hidden bg-white min-h-screen flex flex-col justify-between">
      {/* Product Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Artisanal Spice Blends",
            "image": "https://res.cloudinary.com/xug0w0py/image/upload/f_auto,q_auto/v1/products-blends_uno4c4",
            "description": "Perfect ratios of traditional whole spices ground to lock in freshness and aroma.",
            "brand": {
              "@type": "Brand",
              "name": "Spize Spices"
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "INR",
              "lowPrice": "300",
              "highPrice": "800",
              "offerCount": "3"
            }
          })
        }}
      />

      <SiteHeader />

      <section className="py-8 sm:py-12">
        <div className="container max-w-3xl mx-auto px-6">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-1.5 text-xs font-semibold text-neutral-500 mb-6 flex-wrap">
            <Link href="/" className="hover:underline hover:text-neutral-900 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/products" className="hover:underline hover:text-neutral-900 transition-colors">
              Products
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-neutral-800 font-normal">
              Spice Blends
            </span>
          </nav>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-700 hover:text-neutral-900 hover:underline transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>

          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-950 mb-4">
            Artisanal Spice Blends
          </h1>

          <div className="relative aspect-[1.8] w-full overflow-hidden rounded-[8px] bg-neutral-50 border border-neutral-100 mb-8">
            <Image
              src="https://res.cloudinary.com/xug0w0py/image/upload/f_auto,q_auto/v1/products-blends_uno4c4"
              alt="Artisanal Spice Blends"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 800px"
              priority
            />
          </div>

          <div className="prose prose-neutral max-w-none text-neutral-800 leading-[1.8]">
            <p>
              Our spice mixtures are crafted from ancestral formulas, blending the finest whole green cardamom, black pepper, cloves, and cinnamon. Ground slowly in cool temperature mills, we prevent high friction heat from evaporating volatile oils, ensuring intense flavor in every pinch.
            </p>

            <h2 className="font-serif text-xl sm:text-2xl font-bold text-neutral-950 mt-8 mb-4">
              Available Spice Blend Types
            </h2>
            <p className="mb-6">
              We offer both traditional regional recipes and custom formulations. Select a type to enquire:
            </p>

            <div className="space-y-4 my-6">
              {[
                { type: "Garam Masala Blend", desc: "A classic warm blend featuring Idukki green cardamom, cloves, cinnamon, and black pepper. Sweetly aromatic with zero filler powders.", waMsg: "Hi, I am interested in Garam Masala Blend." },
                { type: "Kerala Curry Masala", desc: "A robust blend with turmeric, coriander, fennel, and black pepper. Ideal for traditional curries.", waMsg: "Hi, I am interested in Kerala Curry Masala." },
                { type: "Custom Private Formulations", desc: "We formulate custom spice mixtures tailored to your brand's specifications, sensory profiles, and package sizes.", waMsg: "Hi, I am interested in Custom Private Formulations." }
              ].map((variant) => (
                <div key={variant.type} className="border border-neutral-200 rounded-[12px] p-4 bg-white hover:border-neutral-300 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-base font-bold text-neutral-900">{variant.type}</h3>
                    <p className="text-xs text-neutral-500 mt-1 max-w-lg leading-relaxed">{variant.desc}</p>
                  </div>
                  <div className="flex gap-2 sm:flex-col justify-end">
                    <a
                      href={`https://wa.me/918606771827?text=${encodeURIComponent(variant.waMsg)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-8 items-center justify-center rounded-[6px] bg-neutral-900 px-3.5 text-xs font-bold text-white transition-all hover:bg-neutral-800 text-center whitespace-nowrap"
                    >
                      Buy via WhatsApp
                    </a>
                    <Link
                      href="/wholesale"
                      className="inline-flex h-8 items-center justify-center rounded-[6px] border border-neutral-300 bg-white px-3.5 text-xs font-bold text-neutral-800 transition-all hover:bg-neutral-50 text-center whitespace-nowrap"
                    >
                      B2B Quote
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sourcing CTA Box */}
          <div className="mt-12 bg-white border border-neutral-200 rounded-[12px] p-6 sm:p-8 text-center text-neutral-900 shadow-sm relative overflow-hidden">
            <h3 className="font-serif text-xl sm:text-2xl font-bold leading-tight text-neutral-950">
              Bulk Wholesale Sourcing
            </h3>
            <p className="mt-3 text-sm text-neutral-600 max-w-xl mx-auto leading-relaxed">
              Enquire today for customizable specifications, Certificates of Analysis, and current harvest container pricing.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3.5 justify-center">
              <Link
                href="/wholesale"
                className="inline-flex h-11 items-center justify-center rounded-[6px] bg-neutral-900 px-6 text-[13px] font-bold text-white transition-all hover:bg-neutral-800 hover:-translate-y-0.5"
              >
                Request Quotation
              </Link>
              <a
                href="https://wa.me/918606771827"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-[6px] border border-neutral-300 bg-white px-6 text-[13px] font-bold text-neutral-800 transition-all hover:bg-neutral-50 hover:-translate-y-0.5"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
