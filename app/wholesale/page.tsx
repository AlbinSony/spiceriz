import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "Wholesale & Export Inquiry | Idukki Spices",
  description: "Request a wholesale/export quote for Idukki cardamom and Kerala spices from Idukki Spices.",
}

export default function WholesalePage() {
  return (
    <main>
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
              Submit
            </button>
          </form>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
