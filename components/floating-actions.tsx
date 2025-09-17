"use client"

import { Phone } from "lucide-react"
import { WhatsAppIcon } from "./whatsapp-icon"

export function FloatingActions() {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-3">
      <a
        href="https://wa.me/911234567890?text=Hello%20Puttady%20Spices%2C%20I%E2%80%99d%20like%20to%20know%20more%20about%20your%20cardamom."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="hover-lift inline-flex items-center gap-2 rounded-full px-4 py-2 text-white shadow transition-colors hover:bg-[#40916C]"
        style={{ backgroundColor: "#1B4332" }}
      >
        <WhatsAppIcon className="h-5 w-5" />
        <span className="hidden sm:inline text-sm">WhatsApp</span>
      </a>

      <a
        href="tel:+911234567890"
        aria-label="Call Puttady Spices"
        className="hover-lift inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white shadow transition-colors hover:bg-[#40916C]"
        style={{ backgroundColor: "#1B4332" }}
      >
        <Phone className="h-5 w-5" />
        <span className="hidden sm:inline">Call</span>
      </a>
    </div>
  )
}
