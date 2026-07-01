"use client"

import { useState } from "react"
import Image from "next/image"
import { Reveal } from "@/components/ui/reveal"

type Item = { id: string; name: string; price: number; pack: string }

const items: Item[] = [
  { id: "cardamom-100", name: "Cardamom 100g", price: 399, pack: "100g" },
  { id: "cardamom-250", name: "Cardamom 250g", price: 899, pack: "250g" },
  { id: "cardamom-500", name: "Cardamom 500g", price: 1699, pack: "500g" },
]

export function B2CShop() {
  const [cart, setCart] = useState<Record<string, number>>({})
  const [subscribe, setSubscribe] = useState(false)

  const add = (id: string) => setCart((c) => ({ ...c, [id]: (c[id] || 0) + 1 }))
  const remove = (id: string) =>
    setCart((c) => {
      const qty = (c[id] || 0) - 1
      const n = { ...c }
      if (qty <= 0) delete n[id]
      else n[id] = qty
      return n
    })

  const total = Object.entries(cart).reduce((sum, [id, qty]) => {
    const item = items.find((i) => i.id === id)!
    return sum + item.price * qty
  }, 0)

  return (
    <section id="shop" className="section-shell">
      <div className="container">
        <Reveal className="section-intro">
          <span className="premium-chip">Retail Experience</span>
          <h2 className="h-display mt-5 text-4xl text-[var(--color-primary)] sm:text-5xl">Shop Cardamom</h2>
          <p className="mt-4 text-foreground/80">Small packs for home use. UPI/Razorpay (IN) & PayPal/Stripe (Intl) coming soon.</p>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, index) => (
            <Reveal key={it.id} delay={index * 0.06}>
              <div className="card bg-[rgba(247,244,236,0.95)] p-6">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[18px]">
                  <Image
                    src={`/abstract-geometric-shapes.png?height=400&width=600&query=${encodeURIComponent("premium cardamom retail pack")}`}
                    alt={it.name}
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-[var(--color-primary)]">{it.name}</h3>
                <p className="text-sm text-foreground/80">Pack: {it.pack}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-semibold text-[var(--color-primary)]">₹{it.price}</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => remove(it.id)}
                      className="rounded-full border border-[var(--color-border)] bg-[var(--color-background)] px-3 py-1 text-sm"
                    >
                      -
                    </button>
                    <span className="min-w-6 text-center text-sm">{cart[it.id] || 0}</span>
                    <button
                      onClick={() => add(it.id)}
                      className="rounded-full bg-[var(--color-primary)] px-3 py-1 text-sm text-[var(--color-primary-foreground)]"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button onClick={() => add(it.id)} className="premium-button mt-4 w-full">
                  Add to Cart
                </button>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.16} className="mx-auto mt-8 max-w-3xl">
          <div className="card bg-[rgba(247,244,236,0.95)] p-6 sm:p-8">
            <div className="flex items-center justify-between">
              <span className="text-base font-medium">Cart Total</span>
              <span className="text-2xl font-semibold text-[var(--color-primary)]">₹{total}</span>
            </div>

            <label className="mt-4 flex items-center gap-2 text-sm text-foreground/90">
              <input type="checkbox" checked={subscribe} onChange={(e) => setSubscribe(e.target.checked)} />
              Subscribe monthly (auto-delivery)
            </label>

            <div className="mt-5 flex flex-wrap gap-3">
              <a href="#contact" className="premium-button-ghost" aria-label="Contact us to checkout">
                Contact to Checkout
              </a>
              <button
                className="premium-button"
                onClick={() =>
                  alert(
                    "Checkout integrations (Razorpay/UPI/Stripe/PayPal) can be connected here. Subscriptions supported when enabled.",
                  )
                }
              >
                Checkout (Coming Soon)
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
