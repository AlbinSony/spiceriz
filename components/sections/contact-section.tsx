"use client"

import dynamic from "next/dynamic"
import { Reveal } from "@/components/ui/reveal"

const Map = dynamic(() => import("@/components/map-component"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[250px] bg-[#f0eee4] animate-pulse rounded-[18px] flex items-center justify-center text-xs text-[#203020]/40 font-semibold">
      Loading maps...
    </div>
  ),
})

export function ContactSection() {
  return (
    <section id="contact" className="section-shell bg-[rgba(242,239,230,0.75)]">
      <div className="container grid gap-8 lg:grid-cols-[1fr_1.08fr] lg:gap-12">
        <Reveal className="card bg-[rgba(247,244,236,0.9)] p-7 sm:p-8">
          <span className="premium-chip">Contact Spizespices</span>
          <h2 className="h-display mt-5 text-4xl text-[var(--color-primary)] sm:text-5xl">Get in Touch</h2>
          <p className="mt-4 text-foreground/80">Questions about wholesale, exports, or retail orders? We’re here to help.</p>
          <div className="mt-6 relative h-64 overflow-hidden rounded-[18px] bg-[var(--color-background)] border border-[rgba(35,79,44,0.06)] shadow-inner">
            <Map />
          </div>
          <ul className="mt-5 space-y-1 text-sm text-foreground/85">
            <li>
              Phone:{" "}
              <a className="underline" href="tel:+911234567890">
                +91 12345 67890
              </a>
            </li>
            <li>
              Email:{" "}
              <a className="underline" href="mailto:hello@spizespicespvtltd.com">
                hello@spizespicespvtltd.com
              </a>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="card bg-[rgba(247,244,236,0.95)] p-6 sm:p-8">
            <h3 className="text-2xl font-semibold text-[var(--color-primary)]">Contact Form</h3>
          <form action="/api/contact" method="post" className="mt-4 grid gap-3">
            <input
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-3 text-sm"
              name="name"
              placeholder="Name"
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
              name="phone"
              placeholder="Phone"
            />
            <textarea
              className="min-h-28 rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-3 text-sm"
              name="message"
              placeholder="Message"
            />
            <button type="submit" className="premium-button mt-3 w-fit">
              Send Message
            </button>
          </form>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
