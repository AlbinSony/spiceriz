"use client"

import Link from "next/link"
import { CldImage } from "next-cloudinary"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Phone, Menu, X, Facebook, Instagram, Youtube } from "lucide-react"
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
  const [activeHash, setActiveHash] = useState("")

  useEffect(() => {
    const updateScroll = () => setScrolled(window.scrollY > 20)
    updateScroll()
    window.addEventListener("scroll", updateScroll, { passive: true })
    return () => window.removeEventListener("scroll", updateScroll)
  }, [])

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash || "#hero")
    }
    handleHashChange()
    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 h-16 md:h-20 transition-all duration-500 ${
        scrolled
          ? "border-b border-[rgba(35,79,44,0.08)] bg-[rgba(247,244,236,0.95)] shadow-[0_10px_30px_rgba(35,79,44,0.05)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent backdrop-blur-0"
      }`}
    >
      <div className="container flex h-full items-center justify-between gap-3 md:grid md:grid-cols-[auto_1fr_auto] md:justify-start">
        <Link href="/" className="flex min-w-0 items-center gap-2 sm:gap-3" aria-label="Spizespices Home">
          <CldImage
            src="spizespiceslogo_nficgo"
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
          <div className="fixed inset-0 z-50 md:hidden flex h-[100dvh]">
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 220 }}
              className="relative z-50 flex h-[100dvh] w-[85vw] max-w-[360px] flex-col bg-[var(--color-primary)] px-6 pb-8 pt-6 shadow-[10px_0_50px_rgba(0,0,0,0.3)] text-[#fbf8f2] overflow-y-auto"
            >
              <div className="flex items-center justify-between">
                <div className="bg-white/95 rounded-xl p-2 px-3 inline-flex items-center justify-center">
                  <CldImage
                    src="spizespiceslogo_nficgo"
                    alt="Spizespices"
                    width={130}
                    height={36}
                    className="h-7 w-auto object-contain"
                    sizes="130px"
                  />
                </div>
                <button
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-[#fbf8f2]/75 font-medium">
                Premium Idukki cardamom and Kerala spices. From our farms to your home and business.
              </p>

              <div className="my-6 border-b border-white/10" />

              <div className="flex flex-col gap-2">
                {nav.map((item, index) => {
                  const isActive = activeHash ? item.href.endsWith(activeHash) : index === 0
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold transition-all duration-200 ${
                        isActive
                          ? "bg-white/10 text-white"
                          : "text-white/80 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <span>{item.label}</span>
                      {(item.label === "About" || item.label === "Products" || item.label === "Quality") && (
                        <span className="text-white/60 text-lg font-light leading-none">+</span>
                      )}
                    </Link>
                  )
                })}
              </div>

              <div className="mt-auto pt-8">
                <div className="rounded-[20px] border border-white/10 bg-white/[0.03] p-5">
                  <div className="space-y-1">
                    <a
                      href="mailto:hello@spizespicespvtltd.com"
                      className="block text-sm font-medium text-white/90 hover:text-white transition-colors"
                    >
                      hello@spizespicespvtltd.com
                    </a>
                    <a
                      href="tel:+911234567890"
                      className="block text-base font-bold text-white hover:text-white/90 transition-colors"
                    >
                      +91 12345 67890
                    </a>
                  </div>

                  <div className="mt-4 flex gap-3">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/80 transition-all hover:bg-white/10 hover:text-white"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-4 w-4" />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/80 transition-all hover:bg-white/10 hover:text-white"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-4 w-4" />
                    </a>
                    <a
                      href="https://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/80 transition-all hover:bg-white/10 hover:text-white"
                      aria-label="Youtube"
                    >
                      <Youtube className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  )
}

