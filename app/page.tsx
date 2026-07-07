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
    <main>
      <SiteHeader />

      <Hero />

      <HomeAbout />
      <WhyChooseUs />
      <ProcessingTimeline />
      <ProductGrid />
      <B2BExport />
      <Testimonials />
      <ContactSection />

      <SiteFooter />
      <FloatingActions />
    </main>
  )
}

