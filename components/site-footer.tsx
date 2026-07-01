import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-[var(--color-border)] bg-[rgba(247,244,236,0.8)]">
      <div className="container grid gap-8 py-14 md:grid-cols-4">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-3">
            <span
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-[var(--color-primary-foreground)]"
              style={{ backgroundColor: "var(--color-primary)" }}
            >
              <span className="text-sm font-semibold">SS</span>
            </span>
            <span className="font-serif text-2xl font-semibold text-[var(--color-primary)]">Spizespices</span>
          </div>
          <p className="text-sm text-foreground/80">
            Premium Idukki cardamom and Kerala spices. From our farms to your home and business.
          </p>
        </div>

        <div>
          <h3 className="font-serif text-lg font-semibold text-[var(--color-primary)]">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/about" className="text-foreground/80 transition-colors hover:text-[var(--color-primary)]">
                About
              </Link>
            </li>
            <li>
              <Link href="/products" className="text-foreground/80 transition-colors hover:text-[var(--color-primary)]">
                Products
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-foreground/80 transition-colors hover:text-[var(--color-primary)]">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/exports" className="text-foreground/80 transition-colors hover:text-[var(--color-primary)]">
                Exports
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-foreground/80 transition-colors hover:text-[var(--color-primary)]">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-lg font-semibold text-[var(--color-primary)]">Contact</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="flex items-center gap-2 text-foreground/85">
              <Phone className="h-4 w-4" /> <a href="tel:+911234567890">+91 12345 67890</a>
            </li>
            <li className="flex items-center gap-2 text-foreground/85">
              <Mail className="h-4 w-4" /> <a href="mailto:hello@idukkispices.com">hello@idukkispices.com</a>
            </li>
            <li className="flex items-center gap-2 text-foreground/85">
              <MapPin className="h-4 w-4" /> Idukki, Kerala, India
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-lg font-semibold text-[var(--color-primary)]">Newsletter</h3>
          <form action="/api/newsletter" method="post" className="mt-3 flex gap-2">
            <input
              type="email"
              name="email"
              required
              placeholder="Your email"
              className="w-full rounded-full border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-2.5 text-sm"
            />
            <button type="submit" className="rounded-full bg-[var(--color-primary)] px-4 text-sm font-semibold text-[var(--color-primary-foreground)]">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-[var(--color-border)]">
        <div className="container py-4 text-center text-xs text-foreground/70">
          © 2025 Idukki Spices. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}
