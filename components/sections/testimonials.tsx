"use client"

import { Reveal } from "@/components/ui/reveal"

const testimonials = [
  {
    quote:
      "As a cardamom exporter, I rely on Spize Spices for sourcing high-quality cardamom. Their commitment to delivering premium products is unmatched. The cardamom I purchase from them consistently meets international standards and exceeds the expectations of my clients.",
    name: "Thomas A.",
    role: "Cardamom Exporter, Tamil Nadu",
  },
  {
    quote:
      "Spize Spices has been an invaluable partner in our spice sourcing journey. Their premium green cardamom and bold black pepper are of top-notch quality, offering unmatched aroma and essential oil content. We have witnessed a remarkable response from our clients since we started sourcing from their estate.",
    name: "Suresh D.",
    role: "Spice Distributor, Karnataka",
  },
  {
    quote:
      "Spize Spices' premium grading and sorting have truly transformed our wholesale spice operations. Their color sorting and sizing expertise have helped us supply the most uniform, aromatic, and premium spices to our buyers, resulting in improved profitability.",
    name: "Rajesh M.",
    role: "Wholesale Buyer, Kerala",
  },
]

export function Testimonials() {
  return (
    <section className="section-shell">
      <div className="container">
        <Reveal className="section-intro">
          <span className="premium-chip">Global Trust</span>
          <h2 className="h-display mt-5 text-4xl text-[var(--color-primary)] sm:text-5xl">
            What Buyers Say
          </h2>
        </Reveal>

        <div
          className="mx-auto mt-12 sm:mt-16"
          style={{ maxWidth: "1200px" }}
        >
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 0.12}>
                <div className="testimonial-card">
                  {/* Name */}
                  <h3 className="testimonial-name">{t.name}</h3>

                  {/* Role */}
                  <p className="testimonial-role">{t.role}</p>

                  {/* Quote */}
                  <p className="testimonial-text">{t.quote}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
