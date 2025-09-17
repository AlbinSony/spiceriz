import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t">
      <div className="container py-12 grid gap-8 md:grid-cols-4">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2">
            <span
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-white"
              style={{ backgroundColor: "var(--color-primary)" }}
            >
              <span className="text-sm font-bold">PS</span>
            </span>
            <span className="font-serif text-xl font-semibold text-[var(--color-primary)]">puttady spices</span>
          </div>
          <p className="text-sm text-foreground/80">
            Premium Idukki cardamom and Kerala spices. From our farms to your home and business.
          </p>
        </div>

        <div>
          <h3 className="font-serif text-lg">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:underline">
                Products
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:underline">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/exports" className="hover:underline">
                Exports
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-lg">Contact</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" /> <a href="tel:+911234567890">+91 12345 67890</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" /> <a href="mailto:hello@puttadyspices.com">hello@puttadyspices.com</a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Puttady, Idukki, Kerala
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-lg">Newsletter</h3>
          <form action="/api/newsletter" method="post" className="mt-3 flex gap-2">
            <input
              type="email"
              name="email"
              required
              placeholder="Your email"
              className="w-full rounded-md border px-3 py-2 text-sm bg-white"
            />
            <button
              type="submit"
              className="rounded-md px-4 text-sm text-white"
              style={{ backgroundColor: "var(--color-primary)" }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t">
        <div className="container py-4 text-center text-xs text-foreground/70">
          © 2025 Puttady Spices. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}
