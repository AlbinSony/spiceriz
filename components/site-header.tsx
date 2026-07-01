"use client"

import Link from "next/link"
import { useState } from "react"
import { Globe, Phone, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/processing", label: "Processing" },
  { href: "/exports", label: "Exports" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/wholesale", label: "Wholesale Inquiry" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[rgba(251,248,242,0.92)] backdrop-blur-md">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="Idukki Spices Home">
          <span
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-[var(--color-primary-foreground)] shadow-[0_10px_22px_rgba(35,79,44,0.16)]"
            style={{ backgroundColor: "var(--color-primary)" }}
          >
            <span className="text-sm font-semibold tracking-wide">SS</span>
          </span>
          <span className="font-serif text-xl font-semibold text-[var(--color-primary)] md:text-2xl">Spizespices</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 rounded-full border border-[var(--color-border)] bg-[rgba(247,244,236,0.75)] px-6 py-3">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-[var(--color-primary)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitcher />
          <Button asChild>
            <a href="tel:+911234567890" aria-label="Call or WhatsApp Idukki Spices">
              <Phone className="mr-2 h-4 w-4" /> Call / WhatsApp
            </a>
          </Button>
        </div>

        <button
          className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-primary)]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[var(--color-border)] bg-[rgba(251,248,242,0.96)]">
          <div className="container flex flex-col gap-3 py-5">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] px-4 py-3 text-sm font-medium text-foreground/90"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center justify-between pt-2">
              <LanguageSwitcher />
              <a
                href="tel:+911234567890"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-4 py-2 text-sm font-medium text-[var(--color-primary-foreground)]"
              >
                <Phone className="h-4 w-4" /> Call / WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

function LanguageSwitcher() {
  const [lang, setLang] = useState<"en" | "ar" | "hi">("en")
  return (
    <div className="flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[rgba(247,244,236,0.85)] px-3 py-1.5">
      <Globe className="h-4 w-4 text-foreground/70" />
      <select
        aria-label="Language"
        value={lang}
        onChange={(e) => setLang(e.target.value as any)}
        className="rounded-md border-0 bg-transparent px-1 py-1 text-sm font-medium text-[var(--color-primary)] focus-visible:outline-none"
      >
        <option value="en">English</option>
        <option value="ar">Arabic</option>
        <option value="hi">Hindi</option>
      </select>
    </div>
  )
}
