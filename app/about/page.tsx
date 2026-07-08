"use client"

import { useEffect, useRef, useState, useMemo } from "react"
import { useInView } from "framer-motion"
import {
  Linkedin,
  Sprout,
  Globe,
  ShieldCheck,
  Target,
  Eye,
} from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { FloatingActions } from "@/components/floating-actions"
import { Reveal } from "@/components/ui/reveal"
import Link from "next/link"

/* ── Google Fonts Loader Hook ── */
function useGoogleFonts() {
  useEffect(() => {
    const id = "spizespices-fonts"
    if (document.getElementById(id)) return
    const link = document.createElement("link")
    link.id = id
    link.rel = "stylesheet"
    link.href =
      "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Manrope:wght@400;500;600;700;800&display=swap"
    document.head.appendChild(link)
  }, [])
}

/* ── Geometric Math Utilities ── */
function polar(cx: number, cy: number, r: number, angleDeg: number) {
  const a = ((angleDeg - 90) * Math.PI) / 180
  const x = cx + r * Math.cos(a)
  const y = cy + r * Math.sin(a)
  return [Math.round(x * 1000) / 1000, Math.round(y * 1000) / 1000]
}

function petalPath(cx: number, cy: number, a0: number, a1: number, rO: number, rI: number) {
  const [x1, y1] = polar(cx, cy, rO, a0)
  const [x2, y2] = polar(cx, cy, rO, a1)
  const [x3, y3] = polar(cx, cy, rI, a1)
  const [x4, y4] = polar(cx, cy, rI, a0)
  const largeArc = a1 - a0 > 180 ? 1 : 0
  return `M ${x1} ${y1} A ${rO} ${rO} 0 ${largeArc} 1 ${x2} ${y2} L ${x3} ${y3} A ${rI} ${rI} 0 ${largeArc} 0 ${x4} ${y4} Z`
}

/* ── Core SVG Icons ── */
const ICONS = {
  shield: "M0,-11 L9,-6 V3 C9,9 4,12 0,14 C-4,12 -9,9 -9,3 V-6 Z",
  drop: "M0,-11 C6,-3 8,2 8,6 A8,8 0 1 1 -8,6 C-8,2 -6,-3 0,-11 Z",
  link: "M-5,-5 A4,4 0 1 1 3,3 M5,5 A4,4 0 1 1 -3,-3 M-1,-1 L1,1",
  leaf: "M-9,9 C-9,-4 4,-9 9,-9 C9,-4 4,9 -9,9 Z M-9,9 C-4,4 2,-2 9,-9",
  star: "M0,-11 L2.8,-3.6 L10.5,-3.4 L4.3,1.6 L6.5,9 L0,4.6 L-6.5,9 L-4.3,1.6 L-10.5,-3.4 L-2.8,-3.6 Z",
  people:
    "M-6,3 A4,4 0 1 1 -6,-5 A4,4 0 0 1 -6,3 Z M6,3 A4,4 0 1 1 6,-5 A4,4 0 0 1 6,3 Z M-11,13 C-11,7 -2,7 -2,13 M2,13 C2,7 11,7 11,13",
  tool: "M-8,8 L2,-2 M-2,-9 L9,2 L2,9 L-9,-2 Z M4,-4 L8,-8",
}

/* ── Compass Values Definition ── */
const COMPASS_VALUES = [
  { label: ["Integrity"], color: "#173021", dark: false, icon: "shield" },
  { label: ["Purity"], color: "#1E3A2B", dark: false, icon: "drop" },
  { label: ["Trust &", "Respect"], color: "#3C5C40", dark: false, icon: "link" },
  { label: ["Sustainability"], color: "#5F7F55", dark: false, icon: "leaf" },
  { label: ["Excellence"], color: "#C1622D", dark: false, icon: "star" },
  { label: ["Community"], color: "#8DA77E", dark: true, icon: "people" },
  { label: ["Craftsmanship"], color: "#B7C7A3", dark: true, icon: "tool" },
]

/* ── ValuesCompass Component ── */
function ValuesCompass() {
  const ref = useRef<HTMLDivElement>(null)
  const isIntersecting = useInView(ref, { once: true, amount: 0.15 })
  const [prefersReduced, setPrefersReduced] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setPrefersReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches)
    setMounted(true)
  }, [])

  const visible = mounted ? (prefersReduced ? true : isIntersecting) : false

  const cx = 300
  const cy = 300
  const rOuter = 268
  const rInner = 128
  const gapDeg = 3.2
  const n = COMPASS_VALUES.length
  const sweep = 360 / n
  const startAngle = -90 - sweep / 2

  const petals = useMemo(
    () =>
      COMPASS_VALUES.map((v, i) => {
        const a0 = startAngle + i * sweep + gapDeg / 2
        const a1 = startAngle + (i + 1) * sweep - gapDeg / 2
        const mid = (a0 + a1) / 2
        const d = petalPath(cx, cy, a0, a1, rOuter, rInner)
        const [ix, iy] = polar(cx, cy, (rOuter + rInner) / 2 - 34, mid)
        const [lx, ly] = polar(cx, cy, (rOuter + rInner) / 2 + 30, mid)
        return { ...v, d, ix, iy, lx, ly, mid, index: i }
      }),
    []
  )

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 560,
      }}
    >
      <svg
        viewBox="0 0 600 600"
        style={{ width: "100%", maxWidth: 560, height: "auto", overflow: "visible" }}
      >
        {petals.map((p) => (
          <g
            key={p.label.join(" ")}
            style={{
              opacity: visible ? 1 : 0,
              transform: visible
                ? "scale(1) rotate(0deg)"
                : `scale(0.85) rotate(${p.mid > 0 ? 6 : -6}deg)`,
              transformOrigin: "300px 300px",
              transitionProperty: "opacity, transform",
              transitionDuration: "0.6s",
              transitionTimingFunction: "cubic-bezier(.22,.61,.36,1)",
              transitionDelay: `${140 + p.index * 90}ms`,
            }}
          >
            <path d={p.d} fill={p.color} />
            <g
              transform={`translate(${p.ix},${p.iy}) scale(1.15)`}
              stroke={p.dark ? "#1E3A2B" : "#F5F1E6"}
              fill="none"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d={ICONS[p.icon as keyof typeof ICONS]} />
            </g>
            <text
              x={p.lx}
              y={p.ly - (p.label.length - 1) * 7}
              textAnchor="middle"
              fontSize="13.5"
              fontWeight="700"
              fill={p.dark ? "#1E3A2B" : "#F5F1E6"}
              fontFamily="var(--font-sans), sans-serif"
            >
              {p.label.map((line, li) => (
                <tspan key={li} x={p.lx} dy={li === 0 ? 0 : 15}>
                  {line}
                </tspan>
              ))}
            </text>
          </g>
        ))}

        <circle
          cx={cx}
          cy={cy}
          r={rInner - 6}
          fill="#F5F1E6"
          stroke="rgba(30,58,43,0.18)"
          strokeWidth="1.5"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "scale(1)" : "scale(0.7)",
            transformOrigin: "300px 300px",
            transition: "opacity 0.5s ease 0.15s, transform 0.5s ease 0.15s",
          }}
        />
        <g
          transform={`translate(${cx},${cy - 28}) scale(1.6)`}
          stroke="#5F7F55"
          fill="none"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ opacity: visible ? 1 : 0, transition: "opacity 0.6s ease 0.4s" }}
        >
          <path d={ICONS.leaf} />
        </g>
        <text
          x={cx}
          y={cy + 8}
          textAnchor="middle"
          fontSize="19"
          fontWeight="600"
          fill="#1E3A2B"
          fontFamily="var(--font-serif), serif"
          style={{ opacity: visible ? 1 : 0, transition: "opacity 0.6s ease 0.45s" }}
        >
          Spizespices
        </text>
        <text
          x={cx}
          y={cy + 24}
          textAnchor="middle"
          fontSize="9.5"
          letterSpacing="0.5"
          fill="#4B5348"
          fontFamily="var(--font-sans), sans-serif"
          style={{ opacity: visible ? 1 : 0, transition: "opacity 0.6s ease 0.5s" }}
        >
          AGRIBUSINESS SOLUTIONS
        </text>
      </svg>
    </div>
  )
}

/* ── Hydration-Safe Asymmetric IconMark Badge ── */
function IconMark({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isIntersecting = useInView(ref, { once: true, amount: 0.3 })
  const [mounted, setMounted] = useState(false)
  const [prefersReduced, setPrefersReduced] = useState(false)

  useEffect(() => {
    setPrefersReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches)
    setMounted(true)
  }, [])

  const visible = mounted ? (prefersReduced ? true : isIntersecting) : false

  return (
    <div
      ref={ref}
      style={{
        width: 64,
        height: 60,
        borderRadius: "58% 42% 46% 54% / 50% 46% 54% 50%",
        background: "#E4E0CC",
        border: "1px solid rgba(30, 58, 43, 0.14)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 22,
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1) rotate(0deg)" : "scale(0.6) rotate(-6deg)",
        transition: `opacity 0.5s cubic-bezier(.3,1.2,.6,1) ${delay}ms, transform 0.5s cubic-bezier(.3,1.2,.6,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

/* ── Custom Mission & Vision SVG Icons ── */
function MissionIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path
        d="M5 13.5 C5 13.5 4.4 21 14 21 C23.6 21 23 13.5 23 13.5"
        stroke="#14261C"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <ellipse cx="14" cy="13.3" rx="9" ry="2.4" stroke="#14261C" strokeWidth="1.7" />
      <line x1="20.5" y1="4" x2="14.8" y2="13" stroke="#14261C" strokeWidth="2.6" strokeLinecap="round" />
      <circle cx="21.3" cy="3.2" r="1.9" fill="#C1622D" />
      <circle cx="11" cy="16.3" r="0.9" fill="#6C8F68" />
      <circle cx="14.2" cy="17.6" r="0.9" fill="#6C8F68" />
      <circle cx="17.1" cy="16.1" r="0.9" fill="#6C8F68" />
    </svg>
  )
}

function VisionIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M5 9.5 A5.5 5.5 0 0 1 16 9.5" stroke="#C1622D" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M4 9.5 H2.3 M17 9.5 H18.7 M10.5 3 V1.3 M6.6 4.6 L5.4 3.4 M14.4 4.6 L15.6 3.4" stroke="#C1622D" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M1.5 21 C4.5 16.5 7 19 9.5 16 C12 13 14.5 17.5 17 15 C19.5 12.5 22 16.5 26.5 13.5" stroke="#14261C" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M1.5 21 H26.5" stroke="#14261C" strokeWidth="1.7" strokeLinecap="round" opacity="0.35" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" width="14" height="14">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

/* ── Custom Why Choose Us SVG Icons ── */
function ConceptIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M14 15 C11.5 10.5 12 4.5 14 1.5 C16 4.5 16.5 10.5 14 15 Z" fill="#6C8F68" opacity="0.9" />
      <path d="M14 15 C9.5 12 6.5 7.5 6 4 C10 4.8 13 9 14 15 Z" fill="#8DA77E" opacity="0.9" />
      <path d="M14 15 C18.5 12 21.5 7.5 22 4 C18 4.8 15 9 14 15 Z" fill="#8DA77E" opacity="0.9" />
      <path d="M14 15 V25 M14 20 C11.5 20 10.5 21.5 10.5 23" stroke="#14261C" strokeWidth="1.6" strokeLinecap="round" fill="none" />
    </svg>
  )
}

function PhilosophyIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="2" fill="#C1622D" />
      <circle cx="14" cy="14" r="6.2" stroke="#14261C" strokeWidth="1.5" opacity="0.85" />
      <circle cx="14" cy="14" r="10.4" stroke="#14261C" strokeWidth="1.4" opacity="0.5" />
      <circle cx="14" cy="14" r="13.4" stroke="#14261C" strokeWidth="1.3" opacity="0.22" />
    </svg>
  )
}

function ValuesIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path
        d="M8 19.5 L5.5 26 L9.8 24.3 L11.6 27.5 L14 21.2"
        stroke="#14261C"
        strokeWidth="1.4"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
        transform="translate(0,-4)"
      />
      <path
        d="M20 19.5 L22.5 26 L18.2 24.3 L16.4 27.5 L14 21.2"
        stroke="#14261C"
        strokeWidth="1.4"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
        transform="translate(0,-4)"
      />
      <circle cx="14" cy="11" r="8.4" fill="#EFEADB" stroke="#14261C" strokeWidth="1.6" />
      <path d="M10.2 11.2 L12.8 13.8 L18 8.2" stroke="#C1622D" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  )
}

/* ── Why Choose Us Reasons Data ── */
const REASONS = [
  {
    numeral: "I.",
    title: "Our Concept",
    Icon: ConceptIcon,
    text: "The emerging bud is our own symbol — new life, growth, and the farmer at the root of everything we do, whether that's distributing agro inputs, trading spices, or running auctions. It opens in every direction, in pursuit of the same thing: staying fresh, inventive, and always reaching further.",
  },
  {
    numeral: "II.",
    title: "Our Philosophy",
    Icon: PhilosophyIcon,
    text: "Our core philosophy is to enhance farming returns through agribusiness solutions that improve farm productivity, quality, product reach, and marketability — fetching optimal prices and delivering maximum value to agriculture, sustainably.",
  },
  {
    numeral: "III.",
    title: "Our Values",
    Icon: ValuesIcon,
    text: "Every trade carries our name, so honesty and integrity come first. We build valuable services and products around that trust, while investing in the stage-wise growth and development of the people who work with us.",
  },
]

/* ── Team Data ── */
const DIRECTORS = [
  { name: "Lijish Joshy", role: "Director", initials: "LJ", photo: null },
  { name: "Dani J Joseph", role: "Director", initials: "DJ", photo: null },
  { name: "Jubin Reji", role: "Director", initials: "JR", photo: null },
]

/* ── ConnectIcon for Linkedin/Find Online ── */
function ConnectIcon({ hovered }: { hovered: boolean }) {
  const stroke = hovered ? "#F5F1E6" : "#14261C"
  return (
    <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
      <circle cx="5" cy="15" r="2.1" stroke={stroke} strokeWidth="1.4" />
      <circle cx="15" cy="15" r="2.1" stroke={stroke} strokeWidth="1.4" />
      <circle cx="10" cy="5.5" r="2.1" stroke={stroke} strokeWidth="1.4" />
      <path d="M6.6 13.3 L8.7 7.4 M13.4 13.3 L11.3 7.4" stroke={stroke} strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}

/* ── BudWatermark background stamp ── */
function BudWatermark() {
  return (
    <svg width="72" height="72" viewBox="0 0 28 28" fill="none" style={{ opacity: 0.16 }}>
      <path d="M14 15 C11.5 10.5 12 4.5 14 1.5 C16 4.5 16.5 10.5 14 15 Z" fill="#F5F1E6" />
      <path d="M14 15 C9.5 12 6.5 7.5 6 4 C10 4.8 13 9 14 15 Z" fill="#F5F1E6" />
      <path d="M14 15 C18.5 12 21.5 7.5 22 4 C18 4.8 15 9 14 15 Z" fill="#F5F1E6" />
    </svg>
  )
}

/* ── Portrait placeholder/photo frame ── */
function Portrait({ initials, photo }: { initials: string; photo?: string | null }) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "4 / 5",
        overflow: "hidden",
        background: "linear-gradient(160deg, #3C5C40 0%, #1B3324 100%)",
      }}
    >
      {photo ? (
        <img src={photo} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      ) : (
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <BudWatermark />
          <span
            style={{
              position: "relative",
              fontFamily: "'Fraunces', serif",
              fontWeight: 600,
              fontSize: 34,
              color: "#F5F1E6",
              letterSpacing: "0.02em",
            }}
          >
            {initials}
          </span>
        </div>
      )}
    </div>
  )
}

/* ── DirectorCard component (Hydration Safe) ── */
function DirectorCard({ name, role, initials, photo, delay }: { name: string; role: string; initials: string; photo?: string | null; delay: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isIntersecting = useInView(ref, { once: true, amount: 0.2 })
  const [mounted, setMounted] = useState(false)
  const [prefersReduced, setPrefersReduced] = useState(false)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    setPrefersReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches)
    setMounted(true)
  }, [])

  const visible = mounted ? (prefersReduced ? true : isIntersecting) : false

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#EFEADB",
        borderRadius: 6,
        overflow: "hidden",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.65s cubic-bezier(.22,.61,.36,1) ${delay}ms, transform 0.65s cubic-bezier(.22,.61,.36,1) ${delay}ms, box-shadow 0.3s ease, translate 0.3s ease`,
        boxShadow: hovered
          ? "0 26px 46px rgba(20,38,28,0.16), 0 4px 10px rgba(20,38,28,0.08)"
          : "0 14px 30px rgba(20,38,28,0.08)",
        translate: hovered ? "0 -5px" : "0 0",
      }}
    >
      <Portrait initials={initials} photo={photo} />

      <div style={{ padding: "26px 28px 28px" }}>
        <h3
          style={{
            fontFamily: "'Fraunces', serif",
            fontWeight: 600,
            fontSize: 21,
            color: "#14261C",
            margin: "0 0 6px",
          }}
        >
          {name}
        </h3>
        <p
          style={{
            fontSize: 12.5,
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#C1622D",
            margin: "0 0 22px",
          }}
        >
          {role}
        </p>

        <div style={{ height: 1, background: "rgba(30,58,43,0.14)", marginBottom: 20 }} />

        <a
          href="#"
          aria-label={`Connect with ${name}`}
          style={{
            width: 38,
            height: 38,
            borderRadius: "50%",
            border: `1px solid ${hovered ? "#14261C" : "rgba(30,58,43,0.24)"}`,
            background: hovered ? "#14261C" : "transparent",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "none",
            transition: "background 0.25s ease, border-color 0.25s ease",
          }}
        >
          <ConnectIcon hovered={hovered} />
        </a>
      </div>
    </div>
  )
}

export default function AboutPage() {
  /* Smooth-scroll on load if hash is present */
  useGoogleFonts()

  /* Smooth-scroll on load if hash is present */
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" })
      }, 400)
    }
  }, [])

  return (
    <main className="bg-[#fbf8f2] overflow-x-hidden">
      <SiteHeader />

      {/* ── Hero Banner ── */}
      <section className="about-hero">
        <div className="container">
          <Reveal>
            <h1 className="h-display text-4xl text-[var(--color-primary-foreground)] sm:text-5xl md:text-6xl">
              About Us
            </h1>
            <nav className="mt-4 flex items-center gap-2 text-sm font-medium text-[var(--color-primary-foreground)]/70">
              <Link
                href="/"
                className="transition-colors hover:text-[var(--color-primary-foreground)]"
              >
                Home
              </Link>
              <span>/</span>
              <span className="text-[var(--color-primary-foreground)]">About Us</span>
            </nav>
          </Reveal>
        </div>
      </section>

      {/* ── SECTION 1: About Spizespices ── */}
      <section
        id="about-us"
        style={{
          position: "relative",
          padding: "100px 0 110px",
          background:
            "radial-gradient(circle at 8% 12%, rgba(30,58,43,0.05), transparent 40%), #F5F1E6",
          fontFamily: "'Manrope', sans-serif",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(rgba(30,58,43,0.05) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
            opacity: 0.5,
            pointerEvents: "none",
          }}
        />

        <div
          className="container max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] gap-16 items-center relative z-10 spz-wrap"
        >
          <div>
            <Reveal delay={0}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  fontSize: 12.5,
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#9F4E22",
                  marginBottom: 22,
                }}
              >
                <span style={{ width: 26, height: 2, background: "#C1622D", display: "inline-block" }} />
                About Spizespices
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h2
                style={{
                  fontFamily: "'Fraunces', serif",
                  fontWeight: 560,
                  fontSize: "clamp(38px, 4.4vw, 56px)",
                  lineHeight: 1.04,
                  letterSpacing: "-0.01em",
                  color: "#14261C",
                  margin: "0 0 22px",
                }}
              >
                Growing trust,<br />
                <em style={{ fontStyle: "italic", color: "#6C8F68", fontWeight: 500 }}>
                  from the ground up.
                </em>
              </h2>
            </Reveal>

            <Reveal delay={0.16}>
              <p style={{ fontSize: 18, fontWeight: 600, color: "#22281F", margin: "0 0 18px", lineHeight: 1.5 }}>
                Enhancing farm productivity &amp; quality — for the growers, and everyone downstream.
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <p style={{ fontSize: 15.5, lineHeight: 1.75, color: "#4B5348", maxWidth: 480, margin: "0 0 34px" }}>
                Agriculture is the root of livelihood across India, so we built our agribusiness
                solutions around it. By connecting farms to the right markets, demand, and buyers,
                we keep farm returns steady while pushing productivity and quality forward, season
                after season.
              </p>
            </Reveal>

            <Reveal delay={0.28}>
              <div style={{ display: "flex", gap: 34, marginBottom: 38 }}>
                {[
                  ["7", "Core Values"],
                  ["360°", "Farm-to-Buyer Chain"],
                  ["1st", "Priority: Quality"],
                ].map(([num, label]) => (
                  <div key={label} style={{ borderLeft: "2px solid rgba(30,58,43,0.16)", paddingLeft: 14 }}>
                    <b
                      style={{
                        display: "block",
                        fontFamily: "'Fraunces', serif",
                        fontSize: 26,
                        fontWeight: 600,
                        color: "#14261C",
                        lineHeight: 1,
                        marginBottom: 4,
                      }}
                    >
                      {num}
                    </b>
                    <span style={{ fontSize: 11.5, color: "#4B5348", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.34}>
              <div style={{ display: "flex", alignItems: "center", gap: 22, flexWrap: "wrap" }}>
                <a
                  href="#mission-vision"
                  style={{
                    background: "#14261C",
                    color: "#F5F1E6",
                    border: "none",
                    fontFamily: "'Manrope', sans-serif",
                    fontWeight: 700,
                    fontSize: 14,
                    letterSpacing: "0.02em",
                    padding: "15px 26px",
                    borderRadius: 3,
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  Explore Our Values
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" width="14" height="14">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
                <Link
                  href="/#processing"
                  style={{
                    fontSize: 13.5,
                    fontWeight: 700,
                    color: "#14261C",
                    textDecoration: "none",
                    borderBottom: "1.5px solid #A9C29B",
                    paddingBottom: 2,
                  }}
                >
                  Our Sourcing Story
                </Link>
              </div>
            </Reveal>
          </div>

          <ValuesCompass />
        </div>

        <style>{`
          @media (max-width: 900px) {
            .spz-wrap { grid-template-columns: 1fr !important; gap: 48px !important; }
          }
        `}</style>
      </section>

      {/* ── SECTION 2: Mission & Vision ── */}
      <section
        id="mission-vision"
        style={{
          position: "relative",
          padding: "104px 0 96px",
          background: "#1E3A2B",
          borderTop: "1px solid rgba(245,241,230,0.08)",
          borderBottom: "1px solid rgba(245,241,230,0.08)",
          fontFamily: "'Manrope', sans-serif",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(rgba(245,241,230,0.05) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
            opacity: 0.5,
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative", zIndex: 1 }} className="container max-w-5xl mx-auto px-6 lg:px-8">
          {/* kicker */}
          <Reveal delay={0}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
              <span style={{ width: 34, height: 1, background: "#C1622D", display: "inline-block" }} />
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#B7C7A3",
                }}
              >
                Why Spizespices exists
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h2
              style={{
                fontFamily: "'Fraunces', serif",
                fontWeight: 560,
                fontSize: "clamp(34px, 4.6vw, 54px)",
                lineHeight: 1.08,
                letterSpacing: "-0.01em",
                color: "#F5F1E6",
                margin: "0 0 60px",
                maxWidth: 620,
              }}
            >
              What we're working<br />
              toward<span style={{ color: "#C1622D" }}>,</span> and why<span style={{ color: "#C1622D" }}>.</span>
            </h2>
          </Reveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 64,
              borderTop: "1px solid rgba(245,241,230,0.14)",
              paddingTop: 48,
            }}
            className="mv-grid"
          >
            <Reveal delay={0.14}>
              <div>
                <IconMark delay={220}>
                  <MissionIcon />
                </IconMark>
                <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 14 }}>
                  <span
                    style={{
                      fontFamily: "'Fraunces', serif",
                      fontStyle: "italic",
                      fontSize: 17,
                      color: "#C1622D",
                    }}
                  >
                    I.
                  </span>
                  <h3
                    style={{
                      fontFamily: "'Fraunces', serif",
                      fontWeight: 600,
                      fontSize: 23,
                      color: "#F5F1E6",
                      margin: 0,
                    }}
                  >
                    Our Mission
                  </h3>
                </div>
                <p style={{ fontSize: 15.5, lineHeight: 1.75, color: "rgba(245,241,230,0.8)", margin: 0, maxWidth: 420 }}>
                  To source, process, and deliver the purest Kerala spices to homes and businesses
                  worldwide — empowering local farmers with fair returns while maintaining
                  uncompromising quality at every step from farm to fork.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.20}>
              <div>
                <IconMark delay={280}>
                  <VisionIcon />
                </IconMark>
                <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 14 }}>
                  <span
                    style={{
                      fontFamily: "'Fraunces', serif",
                      fontStyle: "italic",
                      fontSize: 17,
                      color: "#C1622D",
                    }}
                  >
                    II.
                  </span>
                  <h3
                    style={{
                      fontFamily: "'Fraunces', serif",
                      fontWeight: 600,
                      fontSize: 23,
                      color: "#F5F1E6",
                      margin: 0,
                    }}
                  >
                    Our Vision
                  </h3>
                </div>
                <p style={{ fontSize: 15.5, lineHeight: 1.75, color: "rgba(245,241,230,0.8)", margin: 0, maxWidth: 420 }}>
                  To become the most trusted name in Indian spice exports — recognized globally for
                  authenticity, sustainability, and premium quality. We envision a future where every
                  kitchen in the world has access to the finest spices grown in the hills of Kerala.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.34}>
            <div style={{ marginTop: 56 }}>
              <a
                href="#contact"
                style={{
                  background: "#F5F1E6",
                  color: "#1E3A2B",
                  border: "none",
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: 700,
                  fontSize: 14,
                  letterSpacing: "0.02em",
                  padding: "15px 26px",
                  borderRadius: 3,
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  transition: "background-color 0.2s ease, opacity 0.2s ease",
                }}
                className="mv-cta-btn"
              >
                Get in Touch
                <ArrowIcon />
              </a>
            </div>
          </Reveal>
        </div>

        <style>{`
          .mv-cta-btn:hover { background-color: #E4E0CC !important; }
          @media (max-width: 760px) {
            .mv-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          }
        `}</style>
      </section>

      {/* ── SECTION 3: Why Choose Us ── */}
      <section
        id="why-choose-us"
        style={{
          position: "relative",
          padding: "96px 0 104px",
          background: "#F5F1E6",
          fontFamily: "'Manrope', sans-serif",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(rgba(30,58,43,0.05) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
            opacity: 0.5,
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative", zIndex: 1 }} className="container max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal delay={0}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
              <span style={{ width: 34, height: 1, background: "#C1622D", display: "inline-block" }} />
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#6C8F68",
                }}
              >
                What sets us apart
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h2
              style={{
                fontFamily: "'Fraunces', serif",
                fontWeight: 560,
                fontSize: "clamp(34px, 4.6vw, 54px)",
                lineHeight: 1.08,
                letterSpacing: "-0.01em",
                color: "#14261C",
                margin: "0 0 60px",
                maxWidth: 640,
              }}
            >
              Why choose <span style={{ color: "#6C8F68", fontStyle: "italic" }}>us.</span>
            </h2>
          </Reveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 56,
              borderTop: "1px solid rgba(30,58,43,0.14)",
              paddingTop: 48,
            }}
            className="wcu-grid"
          >
            {REASONS.map((r, i) => (
              <Reveal key={r.title} delay={0.14 + i * 0.07}>
                <div>
                  <IconMark delay={220 + i * 70}>
                    <r.Icon />
                  </IconMark>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 14 }}>
                    <span
                      style={{
                        fontFamily: "'Fraunces', serif",
                        fontStyle: "italic",
                        fontSize: 17,
                        color: "#C1622D",
                      }}
                    >
                      {r.numeral}
                    </span>
                    <h3
                      style={{
                        fontFamily: "'Fraunces', serif",
                        fontWeight: 600,
                        fontSize: 22,
                        color: "#14261C",
                        margin: 0,
                      }}
                    >
                      {r.title}
                    </h3>
                  </div>
                  <p style={{ fontSize: 15, lineHeight: 1.75, color: "#4B5348", margin: 0 }}>{r.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .wcu-grid { grid-template-columns: 1fr !important; gap: 44px !important; }
          }
        `}</style>
      </section>



      {/* ── SECTION 5: Meet Our Directors ── */}
      <section
        id="our-team"
        style={{
          position: "relative",
          padding: "100px 0 112px",
          background: "#F5F1E6",
          fontFamily: "'Manrope', sans-serif",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(rgba(30,58,43,0.05) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
            opacity: 0.5,
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative", zIndex: 1 }} className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              gap: 40,
              marginBottom: 56,
              flexWrap: "wrap",
            }}
          >
            <div>
              <Reveal delay={0}>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
                  <span style={{ width: 34, height: 1, background: "#C1622D", display: "inline-block" }} />
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "#6C8F68",
                    }}
                  >
                    Leadership
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <h2
                  style={{
                    fontFamily: "'Fraunces', serif",
                    fontWeight: 560,
                    fontSize: "clamp(34px, 4.4vw, 52px)",
                    lineHeight: 1.08,
                    letterSpacing: "-0.01em",
                    color: "#14261C",
                    margin: 0,
                    maxWidth: 560,
                  }}
                >
                  The people <span style={{ color: "#6C8F68", fontStyle: "italic" }}>steering</span> Spizespices.
                </h2>
              </Reveal>
            </div>

            <Reveal delay={0.14}>
              <p style={{ fontSize: 15, color: "#4B5348", margin: 0, maxWidth: 260, textAlign: "right" }} className="mgmt-tagline">
                Our management team, and the decisions they carry.
              </p>
            </Reveal>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 32,
            }}
            className="directors-grid"
          >
            {DIRECTORS.map((d, i) => (
              <DirectorCard key={d.name} {...d} delay={180 + i * 90} />
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .directors-grid { grid-template-columns: 1fr !important; }
          }
          @media (max-width: 700px) {
            .mgmt-tagline { display: none; }
          }
        `}</style>
      </section>

      <SiteFooter />
      <FloatingActions />
    </main>
  )
}
