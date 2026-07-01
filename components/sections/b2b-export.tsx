import Link from "next/link"
import { BadgeCheck, FileCheck, Globe } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"

export function B2BExport() {
  return (
    <section id="b2b" className="section-shell bg-[rgba(245,242,232,0.75)]">
      <div className="container grid gap-8 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
        <Reveal>
          <span className="premium-chip">B2B Export Desk</span>
          <h2 className="h-display mt-5 text-4xl text-[var(--color-primary)] sm:text-5xl">Supplying to the World</h2>
          <p className="mt-4 max-w-2xl text-foreground/80">
            We export premium cardamom and Kerala spices globally with rigorous quality control. Certifications include
            Spices Board India, FSSAI, ISO, and Organic options.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-foreground/90">
            <li className="flex items-center gap-3">
              <BadgeCheck className="h-4 w-4 text-[var(--color-secondary)]" /> Spices Board India
            </li>
            <li className="flex items-center gap-3">
              <FileCheck className="h-4 w-4 text-[var(--color-secondary)]" /> FSSAI & ISO
            </li>
            <li className="flex items-center gap-3">
              <Globe className="h-4 w-4 text-[var(--color-secondary)]" /> Organic certification (on request)
            </li>
          </ul>
          <div className="mt-7">
            <Link href="/wholesale" className="premium-button">
              Request a Quote
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="card bg-[rgba(247,244,236,0.95)] p-6 sm:p-8">
            <h3 className="text-2xl font-semibold text-[var(--color-primary)]">Wholesale / Export Inquiry</h3>
          <form action="/api/wholesale" method="post" className="mt-4 grid gap-3">
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
            <button type="submit" className="premium-button mt-3 w-fit">
              Send Inquiry
            </button>
          </form>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
