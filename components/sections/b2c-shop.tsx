"use client"

import { useState } from "react"

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
    <section id="shop" className="container py-12">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="h-display text-2xl sm:text-3xl">Shop Cardamom</h2>
        <p className="mt-2 text-foreground/80">
          Small packs for home use. UPI/Razorpay (IN) & PayPal/Stripe (Intl) coming soon.
        </p>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <div key={it.id} className="card p-5">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-md">
              <img
                src={`/abstract-geometric-shapes.png?height=400&width=600&query=${encodeURIComponent("premium cardamom retail pack")}`}
                alt={it.name}
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="mt-3 font-medium">{it.name}</h3>
            <p className="text-sm text-foreground/80">Pack: {it.pack}</p>
            <div className="mt-3 flex items-center justify-between">
              <span className="font-semibold">₹{it.price}</span>
              <div className="flex items-center gap-2">
                <button onClick={() => remove(it.id)} className="rounded-md border px-2 py-1 text-sm">
                  -
                </button>
                <span className="min-w-6 text-center text-sm">{cart[it.id] || 0}</span>
                <button
                  onClick={() => add(it.id)}
                  className="rounded-md px-2 py-1 text-sm text-white"
                  style={{ backgroundColor: "var(--color-primary)" }}
                >
                  +
                </button>
              </div>
            </div>
            <button
              onClick={() => add(it.id)}
              className="mt-3 w-full rounded-md px-4 py-2 text-sm font-medium text-white"
              style={{ backgroundColor: "var(--color-secondary)" }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-6 max-w-2xl rounded-md border bg-white p-5">
        <div className="flex items-center justify-between">
          <span className="font-medium">Cart Total</span>
          <span className="text-lg font-semibold">₹{total}</span>
        </div>

        <label className="mt-3 flex items-center gap-2 text-sm">
          <input type="checkbox" checked={subscribe} onChange={(e) => setSubscribe(e.target.checked)} />
          Subscribe monthly (auto-delivery)
        </label>

        <div className="mt-3 flex flex-wrap gap-3">
          <a href="#contact" className="rounded-md border px-4 py-2 text-sm" aria-label="Contact us to checkout">
            Contact to Checkout
          </a>
          <button
            className="rounded-md px-4 py-2 text-sm text-white"
            style={{ backgroundColor: "var(--color-primary)" }}
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
    </section>
  )
}
