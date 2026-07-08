"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"

export default function FloatingWhatsApp() {
  // TODO: Replace the phone number below with your business WhatsApp number
  const whatsappNumber = "918606771827" // e.g., 91XXXXXXXXXX
  const waUrl = `https://wa.me/${whatsappNumber}`

  return (
    <div className="fixed z-50 bottom-5 right-5 md:bottom-6 md:right-6">
      <Link
        href={waUrl}
        aria-label="Chat on WhatsApp"
        prefetch={false}
        className={cn(
          "flex h-12 w-12 items-center justify-center rounded-full shadow-lg",
          "bg-[#25D366] hover:bg-[#1ebe59] transition-colors",
        )}
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* Simple WhatsApp glyph (accessible) */}
        <span className="sr-only">WhatsApp</span>
        <svg aria-hidden="true" width="24" height="24" viewBox="0 0 32 32" fill="currentColor" className="text-white">
          <path d="M19.11 17.33c-.31-.15-1.81-.89-2.09-.99s-.48-.15-.68.15-.78.99-.95 1.2-.35.22-.65.07a10.94 10.94 0 0 1-3.23-2 11.83 11.83 0 0 1-2.19-2.7c-.23-.4 0-.62.12-.85.12-.15.27-.37.39-.55s.15-.32.23-.52.04-.37-.02-.52c-.07-.15-.68-1.61-.93-2.2s-.49-.52-.68-.52h-.56a1.08 1.08 0 0 0-.78.37 3.28 3.28 0 0 0-1.03 2.43c0 1.43 1.05 2.81 1.19 3 .15.22 2.07 3.17 5.01 4.44s3.02.8 3.56.75 1.75-.7 2-1.38.25-1.25.18-1.38-.28-.22-.59-.37zM16.06 3.05A12.9 12.9 0 0 0 3.13 15.98a12.79 12.79 0 0 0 1.73 6.51L3 29l6.67-1.75a12.93 12.93 0 0 0 6.39 1.72h.01a12.9 12.9 0 0 0 12.93-12.93 12.89 12.89 0 0 0-12.94-12.99zm0 23.5h-.01a10.6 10.6 0 0 1-5.41-1.48l-.39-.23-3.95 1.02 1.06-3.86-.25-.4a10.64 10.64 0 0 1-1.63-5.65 10.81 10.81 0 1 1 10.61 10.6z" />
        </svg>
      </Link>
    </div>
  )
}
