"use client"

import React from "react"
import Link from "next/link"
import { BadgeCheck, FileCheck, Globe } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"

export function B2BExport() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    
    const name = formData.get("name") as string
    const product = formData.get("product") as string
    const country = formData.get("country") as string
    const quantity = formData.get("quantity") as string
    const email = formData.get("email") as string

    // Format message text for WhatsApp (uses markdown bolding)
    const message = `*Wholesale / Export Inquiry*

*Name:* ${name}
*Selected Product:* ${product}
*Country:* ${country}
*Required Quantity:* ${quantity}
*Email:* ${email}`

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/918606771827?text=${encodedMessage}`
    
    // Open WhatsApp link in a new window/tab
    window.open(whatsappUrl, "_blank")
  }

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
            <form onSubmit={handleSubmit} className="mt-4 grid gap-3">
              <input
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-3 text-sm text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-1 focus:ring-[var(--color-secondary)]"
                name="name"
                placeholder="Name"
                type="text"
                required
              />
              
              {/* Product Selection dropdown */}
              <select
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-3 text-sm text-foreground/80 focus:outline-none focus:ring-1 focus:ring-[var(--color-secondary)]"
                name="product"
                required
                defaultValue=""
              >
                <option value="" disabled>Select Product</option>
                <option value="Cardamom">Cardamom</option>
                <option value="Black Pepper">Black Pepper</option>
                <option value="Cloves">Cloves</option>
                <option value="Cinnamon">Cinnamon</option>
                <option value="Nutmeg">Nutmeg</option>
                <option value="Spice Blends">Spice Blends</option>
                <option value="Other">Other Spices</option>
              </select>

              <input
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-3 text-sm text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-1 focus:ring-[var(--color-secondary)]"
                name="country"
                placeholder="Country"
                type="text"
                required
              />
              <input
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-3 text-sm text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-1 focus:ring-[var(--color-secondary)]"
                name="quantity"
                placeholder="Required Quantity"
                type="text"
                required
              />
              <input
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-3 text-sm text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-1 focus:ring-[var(--color-secondary)]"
                name="email"
                type="email"
                placeholder="Email"
                required
              />
              
              <button type="submit" className="premium-button mt-3 w-fit cursor-pointer">
                Send Inquiry
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
