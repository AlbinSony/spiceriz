"use client"

import Link from "next/link"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Phone, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const nav = [
  { href: "/#hero", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#products", label: "Products" },
  { href: "/#processing", label: "Quality" },
  { href: "/#contact", label: "Contact" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const updateScroll = () => setScrolled(window.scrollY > 20)
    updateScroll()
    window.addEventListener("scroll", updateScroll, { passive: true })
    return () => window.removeEventListener("scroll", updateScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 h-20 transition-all duration-500 ${
        scrolled
          ? "border-b border-[rgba(35,79,44,0.08)] bg-[rgba(247,244,236,0.95)] shadow-[0_10px_30px_rgba(35,79,44,0.05)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent backdrop-blur-0"
      }`}
    >
      <div className="container flex h-full items-center justify-between gap-3 md:grid md:grid-cols-[auto_1fr_auto] md:justify-start">
        <Link href="/" className="flex min-w-0 items-center gap-2 sm:gap-3" aria-label="Spizespices Home">
          <Image
            src="/images/spizespiceslogo.jpg"
            alt="Spizespices"
            width={166}
            height={48}
            priority
            className="h-9 w-auto shrink-0 object-contain sm:h-10 md:h-12"
            sizes="(max-width: 768px) 128px, 166px"
          />
        </Link>

        <nav className="hidden justify-center md:flex">
          <div className="flex items-center gap-1 rounded-full border border-[rgba(35,79,44,0.1)] bg-[rgba(251,248,242,0.42)] px-2 py-2 backdrop-blur-md">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-[var(--color-primary)] transition-all duration-300 hover:bg-[rgba(35,79,44,0.08)]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        <div className="hidden items-center justify-end md:flex">
          <Button asChild>
            <a href="/#contact" aria-label="Contact Spizespices">
              <Phone className="mr-2 h-4 w-4" /> Contact
            </a>
          </Button>
        </div>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(35,79,44,0.12)] bg-[rgba(251,248,242,0.58)] text-[var(--color-primary)] backdrop-blur-md transition-transform duration-300 active:scale-95 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 md:hidden"
          >
            <div className="absolute inset-0 bg-[rgba(32,48,32,0.22)] backdrop-blur-md" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ y: -16, opacity: 0, scale: 0.985 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -16, opacity: 0, scale: 0.985 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex h-full w-full flex-col bg-[rgba(247,244,236,0.78)] px-6 pb-8 pt-5 shadow-[0_30px_80px_rgba(35,79,44,0.14)] backdrop-blur-2xl"
            >
              <div className="flex items-center justify-between">
                <Image
                  src="/images/spizespiceslogo.jpg"
                  alt="Spizespices"
                  width={144}
                  height={42}
                  className="h-9 w-auto shrink-0 object-contain"
                  sizes="144px"
                />
                <button
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(35,79,44,0.12)] bg-[rgba(251,248,242,0.75)] text-[var(--color-primary)]"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-8 flex flex-1 flex-col justify-center gap-3">
                {nav.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.04 + index * 0.04, duration: 0.28 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between rounded-[22px] border border-[rgba(35,79,44,0.1)] bg-[rgba(251,248,242,0.6)] px-5 py-4 text-lg font-medium text-[var(--color-primary)] shadow-[0_10px_24px_rgba(35,79,44,0.05)] backdrop-blur-md"
                    >
                      <span>{item.label}</span>
                      <span className="text-[var(--color-secondary)]">0{index + 1}</span>
                    </Link>
                  </motion.div>
                ))}

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
