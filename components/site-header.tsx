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
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="Spiceriz Home">
          <span
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-white"
            style={{ backgroundColor: "var(--color-primary)" }}
          >
            <span className="text-sm font-bold">SR</span>
          </span>
          <span className="font-serif text-xl font-semibold text-[var(--color-primary)]">spiceriz</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-foreground/80 hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitcher />
          <Button asChild className="bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90">
            <a href="tel:+911234567890" aria-label="Call or WhatsApp Spiceriz">
              <Phone className="mr-2 h-4 w-4" /> Call / WhatsApp
            </a>
          </Button>
        </div>

        <button
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t bg-white/95">
          <div className="container py-3 flex flex-col gap-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-foreground/90"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center justify-between pt-2">
              <LanguageSwitcher />
              <a
                href="tel:+911234567890"
                className="inline-flex items-center gap-2 rounded-md bg-[var(--color-primary)] px-3 py-2 text-sm text-white"
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
    <div className="flex items-center gap-2">
      <Globe className="h-4 w-4 text-foreground/70" />
      <select
        aria-label="Language"
        value={lang}
        onChange={(e) => setLang(e.target.value as any)}
        className="rounded-md border px-2 py-1 text-sm bg-white"
      >
        <option value="en">English</option>
        <option value="ar">Arabic</option>
        <option value="hi">Hindi</option>
      </select>
    </div>
  )
}
