"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"

/* ── Dropdown Chevron Icon ── */
function ChevronIcon({ open, color }: { open: boolean; color?: string }) {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color || "currentColor"}
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ transition: "transform 0.25s ease", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  )
}

/* ── Phone Icon ── */
function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v4a2 2 0 0 1-2.2 2A18 18 0 0 1 2 6.2 2 2 0 0 1 4 4z" />
    </svg>
  )
}

/* ── Hamburger Menu Icon ── */
function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#14261C" strokeWidth="2.2" strokeLinecap="round">
      {open ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
    </svg>
  )
}

/* ── Close Drawer Icon ── */
function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F5F1E6" strokeWidth="2" strokeLinecap="round">
      <path d="M5 5l14 14M19 5L5 19" />
    </svg>
  )
}

/* ── Accordion Plus Icon ── */
function PlusIcon({ open, color }: { open: boolean; color: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round">
      <path d="M12 5v14" style={{ transition: "transform 0.25s ease", transform: open ? "scaleY(0)" : "scaleY(1)", transformOrigin: "center" }} />
      <path d="M5 12h14" />
    </svg>
  )
}

/* ── Mail Icon ── */
function MailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#A9C29B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  )
}

/* ── Phone Green Icon ── */
function PhoneGreenIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#A9C29B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v4a2 2 0 0 1-2.2 2A18 18 0 0 1 2 6.2 2 2 0 0 1 4 4z" />
    </svg>
  )
}

/* ── Leaf Bud Brand SVG Stamp ── */
function BudMark() {
  return (
    <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
      <path d="M14 15 C11.5 10.5 12 4.5 14 1.5 C16 4.5 16.5 10.5 14 15 Z" fill="#6C8F68" />
      <path d="M14 15 C9.5 12 6.5 7.5 6 4 C10 4.8 13 9 14 15 Z" fill="#8DA77E" />
      <path d="M14 15 C18.5 12 21.5 7.5 22 4 C18 4.8 15 9 14 15 Z" fill="#8DA77E" />
      <path d="M14 15 V25 M14 20 C11.5 20 10.5 21.5 10.5 23" stroke="#14261C" strokeWidth="1.6" strokeLinecap="round" fill="none" />
    </svg>
  )
}

/* ── Social Media Icons ── */
function FacebookIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F5F1E6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 8.5h-2a1.5 1.5 0 0 0-1.5 1.5v2H15l-.4 3H11.5v6.5h-3V15h-2v-3h2v-2.3C8.5 7.6 10 6 12.5 6H15v2.5z" />
    </svg>
  )
}
function InstagramIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F5F1E6" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="3.7" />
      <circle cx="16.6" cy="7.4" r="0.6" fill="#F5F1E6" stroke="none" />
    </svg>
  )
}
function YoutubeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F5F1E6" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
      <path d="M10 9.2l5 2.8-5 2.8z" fill="#F5F1E6" stroke="none" />
    </svg>
  )
}

/* ── Nav Links Configuration ── */
const NAV = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    dropdown: [
      { label: "Our Company", href: "/about#about-us" },
      { label: "Mission & Vision", href: "/about#mission-vision" },
      { label: "Leadership", href: "/about#our-team" },
    ],
  },
  {
    label: "Products",
    href: "/products",
    dropdown: [
      { label: "Cardamom", href: "/products?cat=Cardamom" },
      { label: "Pepper", href: "/products?cat=Pepper" },
      { label: "Cloves", href: "/products?cat=Cloves" },
      { label: "Cinnamon", href: "/products?cat=Cinnamon" },
      { label: "Nutmeg", href: "/products?cat=Nutmeg" },
      { label: "Star Anise", href: "/products?cat=Star+Anise" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
]

/* ── Mobile Nav Links Setup with plus/chevron markings ── */
const MOBILE_NAV = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    type: "chevron",
    children: [
      { label: "Our Company", href: "/about#about-us" },
      { label: "Mission & Vision", href: "/about#mission-vision" },
      { label: "Leadership", href: "/about#our-team" },
    ],
  },
  {
    label: "Products",
    href: "/products",
    type: "chevron",
    children: [
      { label: "Cardamom", href: "/products?cat=Cardamom" },
      { label: "Pepper", href: "/products?cat=Pepper" },
      { label: "Cloves", href: "/products?cat=Cloves" },
      { label: "Cinnamon", href: "/products?cat=Cinnamon" },
      { label: "Nutmeg", href: "/products?cat=Nutmeg" },
      { label: "Star Anise", href: "/products?cat=Star+Anise" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
]

/* ── Individual Desktop Link with Sub-dropdown ── */
function NavLink({ item }: { item: any }) {
  const [open, setOpen] = useState(false)
  const closeTimer = useRef<NodeJS.Timeout | null>(null)

  const handleEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpen(true)
  }
  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120)
  }

  return (
    <div
      style={{ position: "relative" }}
      onMouseEnter={item.dropdown ? handleEnter : undefined}
      onMouseLeave={item.dropdown ? handleLeave : undefined}
    >
      <Link
        href={item.href}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 5,
          fontSize: 14.5,
          fontWeight: 600,
          color: "#22281F",
          textDecoration: "none",
          padding: "8px 2px",
          position: "relative",
        }}
        className="nav-link"
      >
        {item.label}
        {item.dropdown && <ChevronIcon open={open} />}
        <span className="nav-underline" />
      </Link>

      {item.dropdown && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 10px)",
            left: 0,
            minWidth: 190,
            background: "#FFFDF8",
            border: "1px solid rgba(30,58,43,0.14)",
            borderRadius: 6,
            boxShadow: "0 20px 40px rgba(20,38,28,0.14)",
            padding: 8,
            opacity: open ? 1 : 0,
            visibility: open ? "visible" : "hidden",
            transform: open ? "translateY(0)" : "translateY(6px)",
            transition: "opacity 0.2s ease, transform 0.2s ease, visibility 0.2s",
            zIndex: 40,
          }}
        >
          {item.dropdown.map((sub: any) => (
            <Link
              key={sub.label}
              href={sub.href}
              style={{
                display: "block",
                fontSize: 13.5,
                fontWeight: 600,
                color: "#4B5348",
                textDecoration: "none",
                padding: "9px 12px",
                borderRadius: 4,
              }}
              className="dropdown-item"
            >
              {sub.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

/* ── Mobile Accordion Link ── */
function MobileNavItem({ item, active, setMobileOpen }: { item: any; active: boolean; setMobileOpen: (open: boolean) => void }) {
  const [open, setOpen] = useState(false)
  const expandable = item.type === "chevron" || item.type === "plus"
  const iconColor = active ? "#A9C29B" : "rgba(245,241,230,0.65)"

  if (!expandable) {
    return (
      <div style={{ position: "relative" }}>
        {active && (
          <span
            style={{
              position: "absolute",
              left: 0,
              top: 10,
              bottom: 10,
              width: 3,
              borderRadius: 4,
              background: "#A9C29B",
            }}
          />
        )}
        <Link
          href={item.href}
          onClick={() => setMobileOpen(false)}
          className="nav-item-btn"
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: active ? "rgba(169,194,155,0.16)" : "transparent",
            borderRadius: 10,
            padding: "14px 16px 14px 20px",
            textDecoration: "none",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontWeight: 700,
              fontSize: 16,
              color: active ? "#F5F1E6" : "rgba(245,241,230,0.92)",
              letterSpacing: "0.01em",
            }}
          >
            {item.label}
          </span>
        </Link>
      </div>
    )
  }

  return (
    <div style={{ position: "relative" }}>
      {active && (
        <span
          style={{
            position: "absolute",
            left: 0,
            top: 10,
            bottom: 10,
            width: 3,
            borderRadius: 4,
            background: "#A9C29B",
          }}
        />
      )}
      <div
        className="nav-item-btn"
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: active ? "rgba(169,194,155,0.16)" : "transparent",
          borderRadius: 10,
          padding: "14px 16px 14px 20px",
        }}
      >
        <Link
          href={item.href}
          onClick={() => setMobileOpen(false)}
          style={{
            flex: 1,
            textDecoration: "none",
            fontFamily: "var(--font-manrope), sans-serif",
            fontWeight: 700,
            fontSize: 16,
            color: active ? "#F5F1E6" : "rgba(245,241,230,0.92)",
            letterSpacing: "0.01em",
            textAlign: "left",
          }}
        >
          {item.label}
        </Link>
        <button
          onClick={() => setOpen((v) => !v)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "4px 8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {item.type === "chevron" && <ChevronIcon open={open} color={iconColor} />}
          {item.type === "plus" && <PlusIcon open={open} color={iconColor} />}
        </button>
      </div>

      {expandable && (
        <div
          style={{
            maxHeight: open ? item.children.length * 38 + 10 : 0,
            overflow: "hidden",
            transition: "max-height 0.3s ease",
          }}
        >
          <div style={{ padding: "4px 20px 12px 30px", display: "flex", flexDirection: "column", gap: 1 }}>
            {item.children.map((c: any) => (
              <Link
                key={c.label}
                href={c.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  position: "relative",
                  fontSize: 14,
                  fontWeight: 600,
                  color: "rgba(245,241,230,0.68)",
                  textDecoration: "none",
                  padding: "7px 0 7px 16px",
                }}
                className="sub-link"
              >
                <span style={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)", width: 4, height: 4, borderRadius: "50%", background: "#A9C29B" }} />
                {c.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

/* ── Main Site Header Component ── */
export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: scrolled ? "rgba(245, 241, 230, 0.95)" : "#F5F1E6",
        borderBottom: "1px solid rgba(30,58,43,0.12)",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        fontFamily: "var(--font-manrope), sans-serif",
        transition: "background 0.3s ease, backdrop-filter 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          padding: scrolled ? "4px 6vw" : "0 6vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
          transition: "padding 0.3s ease",
        }}
      >
        {/* logo stays left */}
        <Link
          href="/"
          style={{ display: "flex", alignItems: "center", textDecoration: "none", flexShrink: 0 }}
        >
          <Image
            src="/images/spizespiceslogo.webp"
            alt="Spizespices"
            width={320}
            height={320}
            priority
            className={`w-auto shrink-0 object-contain transition-all duration-300 ${scrolled ? "h-[60px] sm:h-[60px] md:h-[64px]" : "h-[76px] sm:h-[76px] md:h-[80px]"
              }`}
            sizes="(max-width: 768px) 160px, 240px"
          />
        </Link>

        {/* navigation content grouped and aligned right */}
        <div
          className="nav-right"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 36,
            marginLeft: "auto",
          }}
        >
          <nav style={{ display: "flex", alignItems: "center", gap: 30 }} className="nav-links">
            {NAV.map((item) => (
              <NavLink key={item.label} item={item} />
            ))}
          </nav>

          <Link
            href="/#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              background: "#234f2c",
              color: "#F5F1E6",
              fontSize: 14,
              fontWeight: 700,
              textDecoration: "none",
              padding: "11px 20px",
              borderRadius: 4,
              flexShrink: 0,
            }}
            className="nav-cta"
          >
            <PhoneIcon />
            Contact
          </Link>
        </div>

        {/* mobile hamburger toggle */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          className="mobile-toggle"
          style={{
            display: "none",
            width: 40,
            height: 40,
            borderRadius: 6,
            border: "1px solid rgba(30,58,43,0.18)",
            background: "transparent",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <MenuIcon open={mobileOpen} />
        </button>
      </div>

      {/* mobile sliding side drawer menu */}
      <AnimatePresence>
        {mobileOpen && (
          <div style={{ position: "fixed", inset: 0, zIndex: 100 }} className="md:hidden">
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(8,14,10,0.5)",
                backdropFilter: "blur(3px)",
              }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Sliding Panel */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                width: "min(360px, 86%)",
                background: "radial-gradient(120% 90% at 100% 0%, #2C4A34 0%, #1B3324 45%, #132A1E 100%)",
                padding: "28px 22px 22px",
                display: "flex",
                flexDirection: "column",
                boxShadow: "24px 0 60px rgba(6,12,8,0.4)",
                overflow: "hidden",
              }}
            >
              {/* Dotted watermark texture */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: "radial-gradient(rgba(245,241,230,0.05) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                  pointerEvents: "none",
                }}
              />

              <div style={{ position: "relative", zIndex: 2 }}>
                {/* header */}
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 22 }}>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      src="/images/spizespiceslogo.webp"
                      alt="Spizespices"
                      width={160}
                      height={160}
                      className="h-[44px] w-auto object-contain"
                    />
                  </div>
                  <button
                    onClick={() => setMobileOpen(false)}
                    aria-label="Close menu"
                    className="close-btn"
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      border: "1px solid rgba(245,241,230,0.28)",
                      background: "rgba(245,241,230,0.06)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                    }}
                  >
                    <CloseIcon />
                  </button>
                </div>

                <p style={{ fontSize: 14, lineHeight: 1.65, color: "rgba(245,241,230,0.8)", margin: "0 0 22px", maxWidth: 280 }}>
                  Premium Idukki cardamom and{" "}
                  <span style={{ color: "#C9DABE", fontStyle: "italic", fontFamily: "var(--font-fraunces), serif" }}>Kerala spices</span>. From
                  our farms to your home and business.
                </p>

                <div
                  style={{
                    height: 1,
                    marginBottom: 16,
                    background:
                      "linear-gradient(to right, transparent, rgba(245,241,230,0.22) 15%, rgba(245,241,230,0.22) 85%, transparent)",
                  }}
                />
              </div>

              {/* nav list container */}
              <nav
                className="nav-scroll"
                style={{
                  position: "relative",
                  zIndex: 2,
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  flex: 1,
                  overflowY: "auto",
                }}
              >
                {MOBILE_NAV.map((item) => (
                  <MobileNavItem key={item.label} item={item} active={false} setMobileOpen={setMobileOpen} />
                ))}
              </nav>

              {/* contact footer */}
              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  background: "rgba(245,241,230,0.05)",
                  border: "1px solid rgba(245,241,230,0.14)",
                  borderRadius: 14,
                  padding: "18px 20px",
                  marginTop: 16,
                }}
              >
                <span
                  style={{
                    display: "block",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#8DA77E",
                    marginBottom: 12,
                  }}
                >
                  Get in Touch
                </span>
                <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 9 }}>
                  <MailIcon />
                  <span style={{ fontSize: 13.5, color: "rgba(245,241,230,0.85)" }}>spizespices.ecom@gmail.com</span>
                </div>
                <a
                  href="tel:+918606771827"
                  style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 17, textDecoration: "none" }}
                >
                  <PhoneGreenIcon />
                  <span style={{ fontSize: 15.5, fontWeight: 700, color: "#F5F1E6", letterSpacing: "0.01em" }}>+91 86067 71827</span>
                </a>
                <div style={{ display: "flex", gap: 10 }}>
                  {[FacebookIcon, InstagramIcon, YoutubeIcon].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: "50%",
                        border: "1px solid rgba(245,241,230,0.24)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textDecoration: "none",
                      }}
                      className="social-icon"
                    >
                      <Icon />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style>{`
        .nav-link { transition: color 0.2s ease; }
        .nav-link:hover { color: #6C8F68; }
        .nav-underline {
          position: absolute;
          left: 2px; right: 2px; bottom: 2px;
          height: 1.5px;
          background: #C1622D;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.25s ease;
        }
        .nav-link:hover .nav-underline { transform: scaleX(1); }
        .dropdown-item { transition: background 0.15s ease, color 0.15s ease; }
        .dropdown-item:hover { background: #EFEADB; color: #14261C; }
        .nav-cta { transition: background 0.2s ease, transform 0.2s ease; }
        .nav-cta:hover { background: #1C3E24; transform: translateY(-1px); }

        /* Mobile drawer styles */
        .nav-item-btn { transition: background 0.2s ease; }
        .nav-item-btn:active { background: rgba(245,241,230,0.1) !important; }
        .sub-link { transition: color 0.15s ease; }
        .sub-link:hover { color: #F5F1E6; }
        .social-icon { transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease; }
        .social-icon:hover { background: #6C8F68; border-color: #6C8F68; transform: translateY(-2px); }
        .close-btn { transition: background 0.2s ease, transform 0.2s ease; }
        .close-btn:hover { background: rgba(245,241,230,0.14); transform: rotate(90deg); }
        .nav-scroll { scrollbar-width: none; -ms-overflow-style: none; }
        .nav-scroll::-webkit-scrollbar { display: none; width: 0; height: 0; }

        @media (max-width: 880px) {
          .nav-links, .nav-cta { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
    </header>
  )
}
