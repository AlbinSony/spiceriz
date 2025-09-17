"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    quote: "The cardamom quality from Puttady Spices is superb—fresh aroma and consistent grading. Our customers love it.",
    name: "Ayesha K.",
    role: "Retailer, UAE",
  },
  {
    quote: "Smooth export process and excellent packaging. We received the shipment on time with all documentation.",
    name: "Daniel P.",
    role: "Importer, Germany",
  },
  {
    quote: "I ordered the 250g pack—fragrance is amazing and it stays fresh longer. Highly recommended!",
    name: "Rohit S.",
    role: "Home Customer, India",
  },
]

export function Testimonials() {
  const [idx, setIdx] = useState(0)
  const prev = () => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setIdx((i) => (i + 1) % testimonials.length)
  const t = testimonials[idx]

  return (
    <section className="container py-12">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="h-display text-2xl sm:text-3xl">What Buyers Say</h2>
        <div className="card mt-6 p-6">
          <blockquote className="text-pretty text-lg">&ldquo;{t.quote}&rdquo;</blockquote>
          <div className="mt-3 text-sm text-foreground/80">
            — {t.name}, {t.role}
          </div>
          <div className="mt-4 flex items-center justify-center gap-3">
            <button aria-label="Previous testimonial" onClick={prev} className="rounded-md border px-3 py-1">
              <ChevronLeft />
            </button>
            <button aria-label="Next testimonial" onClick={next} className="rounded-md border px-3 py-1">
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
