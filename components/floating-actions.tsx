"use client"

import { Phone } from "lucide-react"
import { WhatsAppIcon } from "./whatsapp-icon"

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href="https://wa.me/911234567890?text=Hello%20Idukki%20Spices%2C%20I%E2%80%99d%20like%20to%20know%20more%20about%20your%20cardamom."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="hover-lift inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-primary)] px-4 py-2.5 text-[var(--color-primary-foreground)] shadow-[0_12px_24px_rgba(35,79,44,0.2)] hover:bg-[var(--color-secondary)]"
      >
        <WhatsAppIcon className="h-5 w-5" />
        <span className="hidden sm:inline text-sm">WhatsApp</span>
      </a>

      <a
        href="tel:+911234567890"
        aria-label="Call Idukki Spices"
        className="hover-lift inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-primary)] px-4 py-2.5 text-sm text-[var(--color-primary-foreground)] shadow-[0_12px_24px_rgba(35,79,44,0.2)] hover:bg-[var(--color-secondary)]"
      >
        <Phone className="h-5 w-5" />
        <span className="hidden sm:inline">Call</span>
      </a>
    </div>
  )
}
