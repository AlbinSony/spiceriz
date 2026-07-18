import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Wholesale & Export Inquiry",
  description: "Request a wholesale/export quote for Indian spices from Spizespices Pvt Ltd.",
  alternates: { canonical: "/wholesale" },
}

export default function WholesalePage() {
  return (
    <main className="overflow-x-hidden bg-[#FAF8F2]">
      {/* Dynamic Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
                "name": "Wholesale & Export Inquiry",
                "item": "https://www.spizespices.com/wholesale"
              }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is the minimum order quantity for cardamom export?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our minimum order quantity for export is 100kg. Contact us for custom bulk pricing."
                }
              },
              {
                "@type": "Question",
                "name": "What certifications are available for your spices?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Spizespices Pvt Ltd supplies FSSAI and Spices Board India certified spices for export and domestic wholesale."
                }
              },
              {
                "@type": "Question",
                "name": "Which countries do you export cardamom to?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We export premium Idukki cardamom and Kerala spices to the UAE, Saudi Arabia, USA, UK, Germany, and other markets worldwide."
                }
              }
            ]
          })
        }}
      />

      <SiteHeader />

      <section className="section-shell pb-12 pt-12">
        <div className="container">
          <span className="premium-chip">Global Supply Program</span>
          <h1 className="h-display mt-5 text-5xl text-[var(--color-primary)] sm:text-6xl">Wholesale & Export Inquiry</h1>
          <p className="mt-4 max-w-2xl text-foreground/80">
            Share your requirements and we’ll get back with best pricing, certifications, and logistics details.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container">
          <div className="card bg-[rgba(247,244,236,0.95)] p-6 sm:p-8">
            <form action="/api/wholesale" method="post" className="grid gap-3 md:grid-cols-2">
              <input
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-3 text-sm"
                name="name"
                placeholder="Name"
                required
              />
              <input
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-3 text-sm"
                name="company"
                placeholder="Company"
                required
              />
              <input
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-3 text-sm"
                name="country"
                placeholder="Country"
                required
              />
              <input
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-3 text-sm"
                name="quantity"
                placeholder="Required Quantity"
                required
              />
              <input
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-3 text-sm"
                name="email"
                type="email"
                placeholder="Email"
                required
              />
              <input
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-3 text-sm"
                name="whatsapp"
                placeholder="WhatsApp"
                required
              />
              <textarea
                className="min-h-28 rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-3 text-sm md:col-span-2"
                name="message"
                placeholder="Additional details"
              />
              <button type="submit" className="premium-button mt-3 w-fit">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Visual FAQ Section */}
      <section className="section-shell bg-white border-t border-[rgba(35,79,44,0.06)] py-16 md:py-24">
        <div className="container max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="premium-chip">Common Queries</span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 text-[#173f23]">
              Frequently Asked Questions
            </h2>
            <span className="mx-auto mt-4 block h-[2px] w-8 bg-[#d64b2a]" />
          </div>

          <div className="space-y-4">
            <details className="group border border-[rgba(35,79,44,0.08)] rounded-[16px] bg-[#fbf8f2] p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer transition-all duration-300 open:bg-[#f7f4ec]">
              <summary className="flex items-center justify-between font-serif text-[17px] font-semibold text-[#173f23] select-none">
                <span>What is the minimum order quantity for cardamom export?</span>
                <span className="ml-1.5 flex-shrink-0 rounded-full bg-[#FAF8F2] p-1.5 text-[#5b8c51] group-open:rotate-180 transition-transform duration-300">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 text-sm text-[#203020]/75 leading-relaxed font-medium pl-1">
                Our minimum order quantity for export is 100kg. Contact us for custom bulk pricing and grade specifications.
              </p>
            </details>

            <details className="group border border-[rgba(35,79,44,0.08)] rounded-[16px] bg-[#fbf8f2] p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer transition-all duration-300 open:bg-[#f7f4ec]">
              <summary className="flex items-center justify-between font-serif text-[17px] font-semibold text-[#173f23] select-none">
                <span>What certifications are available for your spices?</span>
                <span className="ml-1.5 flex-shrink-0 rounded-full bg-[#FAF8F2] p-1.5 text-[#5b8c51] group-open:rotate-180 transition-transform duration-300">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 text-sm text-[#203020]/75 leading-relaxed font-medium pl-1">
                Spizespices Pvt Ltd supplies FSSAI and Spices Board India certified spices for export and domestic wholesale.
              </p>
            </details>

            <details className="group border border-[rgba(35,79,44,0.08)] rounded-[16px] bg-[#fbf8f2] p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer transition-all duration-300 open:bg-[#f7f4ec]">
              <summary className="flex items-center justify-between font-serif text-[17px] font-semibold text-[#173f23] select-none">
                <span>Which countries do you export cardamom to?</span>
                <span className="ml-1.5 flex-shrink-0 rounded-full bg-[#FAF8F2] p-1.5 text-[#5b8c51] group-open:rotate-180 transition-transform duration-300">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 text-sm text-[#203020]/75 leading-relaxed font-medium pl-1">
                We export premium Idukki cardamom and Kerala spices to the UAE, Saudi Arabia, USA, UK, Germany, and other markets worldwide.
              </p>
            </details>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
