import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ChevronRight, ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Premium Green Cardamom Exporter | Idukki Kerala Cardamom | Spize Spices",
  description: "Source high-quality green cardamom from Idukki, Kerala. Graded from 7mm to 9mm with high essential oil content. Enquire for bulk wholesale B2B pricing.",
  alternates: { canonical: "/products/cardamom" },
}

export default function CardamomProductPage() {
  return (
    <main className="overflow-x-hidden bg-white min-h-screen flex flex-col justify-between">
      {/* Product Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Premium Green Cardamom",
            "image": "https://res.cloudinary.com/xug0w0py/image/upload/f_auto,q_auto/v1/why-choose-us_lzix4l",
            "description": "Vibrant bold green cardamom pods graded from 7mm to 9mm, grown under forest shade in Idukki, Kerala, India.",
            "brand": {
              "@type": "Brand",
              "name": "Spize Spices"
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "INR",
              "lowPrice": "1500",
              "highPrice": "3500",
              "offerCount": "5"
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
              Green Cardamom
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
            Premium Green Cardamom
          </h1>

          <div className="relative aspect-[1.8] w-full overflow-hidden rounded-[8px] bg-neutral-50 border border-neutral-100 mb-8">
            <Image
              src="https://res.cloudinary.com/xug0w0py/image/upload/f_auto,q_auto/v1/why-choose-us_lzix4l"
              alt="Premium Green Cardamom"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 800px"
              priority
            />
          </div>

          <div className="prose prose-neutral max-w-none text-neutral-800 leading-[1.8]">
            <p>
              Grown in the high-altitude, mist-covered hills of the Western Ghats in Idukki, Kerala, our green cardamom represents the premium benchmark of quality. Hand-picked at exact maturity flushes and cured carefully in custom chambers, it preserves a vibrant green hue and high essential oil concentration.
            </p>

            <h2 className="font-serif text-xl sm:text-2xl font-bold text-neutral-950 mt-8 mb-4">
              Specifications & Export Quality Grades
            </h2>
            <p>
              We process, sort, and package several commercial and gourmet grades to satisfy different importer requirements:
            </p>
            
            <ul className="space-y-2.5 my-6">
              <li className="flex items-start gap-2.5">
                <span className="text-neutral-400 mt-1.5 flex-shrink-0 text-xs">•</span>
                <span><strong>8.5mm to 9mm:</strong> Luxury export pods with full seed content and deep green skin.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-neutral-400 mt-1.5 flex-shrink-0 text-xs">•</span>
                <span><strong>8mm Bold:</strong> Flagship export size, plump, and highly aromatic.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-neutral-400 mt-1.5 flex-shrink-0 text-xs">•</span>
                <span><strong>7mm Premium:</strong> Gourmet retail and hospitality standard.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-neutral-400 mt-1.5 flex-shrink-0 text-xs">•</span>
                <span><strong>6mm Standard:</strong> Everyday cooking and retail grocery packs.</span>
              </li>
            </ul>

            <h2 className="font-serif text-xl sm:text-2xl font-bold text-neutral-950 mt-8 mb-4">
              Packaging & Custom Sourcing
            </h2>
            <p>
              We ship worldwide in moisture-resistant bulk bags, custom vacuum pouches (highly recommended to maintain flavor and volatile oils), and client-brand private label packaging.
            </p>
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
