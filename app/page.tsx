import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { FloatingActions } from "@/components/floating-actions"
import { Hero } from "@/components/sections/hero"
import { HomeAbout } from "@/components/sections/home-about"
import { WhyChooseUs } from "@/components/sections/why-choose-us"
import { ProcessingTimeline } from "@/components/sections/processing-timeline"
import { ProductGrid } from "@/components/sections/product-grid"
import { B2BExport } from "@/components/sections/b2b-export"
import { Testimonials } from "@/components/sections/testimonials"
import { BlogSection } from "@/components/sections/blog-section"
import { ContactSection } from "@/components/sections/contact-section"

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      {/* Homepage specific JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Spizespices Pvt Ltd",
            "url": "https://www.spizespices.com",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.spizespices.com/products?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
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
                "name": "What makes Idukki cardamom special?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Idukki cardamom is grown in the high-altitude, fertile Western Ghats of Kerala, giving it a unique bold size (up to 8.5mm+), deep green color, and high volatile oil content that retains aroma for longer."
                }
              },
              {
                "@type": "Question",
                "name": "Do you export spices internationally?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, Spizespices Pvt Ltd is a certified exporter registered with the Spices Board of India. We supply premium spices globally to B2B wholesalers, distributors, and retailers."
                }
              },
              {
                "@type": "Question",
                "name": "Which countries do you export to?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We export our premium cardamom, black pepper, and other spices to the UAE, Saudi Arabia, USA, UK, Germany, and many other countries worldwide."
                }
              },
              {
                "@type": "Question",
                "name": "Are your spices organically grown?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our spices are sourced from plantations in Idukki that follow natural, sustainable agricultural practices. Organic certification is available upon request for specific bulk shipments."
                }
              },
              {
                "@type": "Question",
                "name": "Can wholesalers order in bulk?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we specialize in bulk B2B spice distribution. Wholesalers and importers can request pricing and custom grading based on their specific requirements."
                }
              }
            ]
          })
        }}
      />

      <SiteHeader />

      <Hero />

      <HomeAbout />
      <WhyChooseUs />
      <ProcessingTimeline />
      <ProductGrid />
      <B2BExport />
      <Testimonials />
      <BlogSection />
      <ContactSection />

      <SiteFooter />
      <FloatingActions />
    </main>
  )
}

