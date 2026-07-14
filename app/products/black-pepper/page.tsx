import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ChevronRight, ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Bold Malabar Black Pepper Exporter | Kerala Black Pepper Wholesale | Spize Spices",
  description: "Source premium Malabar black pepper from Kerala. Cleaned, graded, high-density black pepper pods with bold, hot spice taste. Custom B2B pricing.",
  alternates: { canonical: "/products/black-pepper" },
}

export default function BlackPepperProductPage() {
  return (
    <main className="overflow-x-hidden bg-white min-h-screen flex flex-col justify-between">
      {/* Product Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Bold Malabar Black Pepper",
            "image": "https://res.cloudinary.com/xug0w0py/image/upload/f_auto,q_auto/v1/why-choose-us_lzix4l",
            "description": "Sun-dried bold black pepper with high density, sourced from Malabar region, Kerala, India.",
            "brand": {
              "@type": "Brand",
              "name": "Spize Spices"
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "INR",
              "lowPrice": "500",
              "highPrice": "900",
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
              Black Pepper
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
            Bold Malabar Black Pepper
          </h1>

          <div className="relative aspect-[1.8] w-full overflow-hidden rounded-[8px] bg-neutral-50 border border-neutral-100 mb-8">
            <Image
              src="https://res.cloudinary.com/xug0w0py/image/upload/f_auto,q_auto/v1/why-choose-us_lzix4l"
              alt="Bold Malabar Black Pepper"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 800px"
              priority
            />
          </div>

          <div className="prose prose-neutral max-w-none text-neutral-800 leading-[1.8]">
            <p>
              Revered as the &ldquo;King of Spices,&rdquo; Malabar black pepper from Kerala is famous globally for its high density, strong piperine content, and pungent, deep heat. Sun-dried and graded carefully, our pepper provides a rich complexity that enhances savory blends, seasonings, and packaged meats.
            </p>

            <h2 className="font-serif text-xl sm:text-2xl font-bold text-neutral-950 mt-8 mb-4">
              Available Pepper Types & Ordering Links
            </h2>
            <p className="mb-6">
              Below are our standard export-quality black pepper varieties. Select a type to enquire or place a bulk order:
            </p>
            
            <div className="space-y-4 my-6">
              {[
                { type: "Garbled Black Pepper", desc: "Double-cleaned whole pepper berries, free from pinheads or dust. Highest quality visual grade.", waMsg: "Hi, I am interested in purchasing Garbled Black Pepper wholesales." },
                { type: "Ungarbled Pepper", desc: "Standard commercial whole pepper berries, ideal for extractors and large-scale industrial milling.", waMsg: "Hi, I am interested in purchasing Ungarbled Pepper wholesales." },
                { type: "Coarse Ground & Powder", desc: "Freshly milled black pepper powder, processed under strict temperature controls to preserve piperine kick.", waMsg: "Hi, I am interested in purchasing Black Pepper Powder wholesales." }
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
