"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"

const testimonials = [
  {
    quote: "The cardamom quality from Idukki Spices is superb—fresh aroma and consistent grading. Our customers love it.",
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
    <section className="section-shell">
      <div className="container">
        <Reveal className="section-intro">
          <span className="premium-chip">Global Trust</span>
          <h2 className="h-display mt-5 text-4xl text-[var(--color-primary)] sm:text-5xl">What Buyers Say</h2>
        </Reveal>
        <Reveal delay={0.1} className="mx-auto mt-8 max-w-4xl">
          <div className="card bg-[rgba(247,244,236,0.95)] p-7 text-center sm:p-10">
            <blockquote className="text-pretty text-2xl font-medium leading-relaxed text-[var(--color-primary)]">&ldquo;{t.quote}&rdquo;</blockquote>
            <div className="mt-5 text-sm text-foreground/80">
              - {t.name}, {t.role}
            </div>
            <div className="mt-6 flex items-center justify-center gap-3">
              <button
                aria-label="Previous testimonial"
                onClick={prev}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-primary)]"
              >
                <ChevronLeft />
              </button>
              <button
                aria-label="Next testimonial"
                onClick={next}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-primary)]"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
