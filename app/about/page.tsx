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
import Image from "next/image"




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
  {
    name: "Lijish Joshy",
    role: "Co-Founder & Managing Director",
    initials: "LJ",
    photo: "https://res.cloudinary.com/xug0w0py/image/upload/v1784263035/lijish_zwl6yo.jpg",
    objectPosition: "center top",
    imgTransform: undefined,
  },
  {
    name: "Dani J Joseph",
    role: "Co-Founder & Director – Operations",
    initials: "DJ",
    photo: "https://res.cloudinary.com/xug0w0py/image/upload/v1784263034/dani_harkt2.jpg",
    objectPosition: "center top",
    imgTransform: undefined,
  },
  {
    name: "Jubin Reji",
    role: "Co-Founder & Director – Sales & Marketing",
    initials: "JR",
    photo: "https://res.cloudinary.com/xug0w0py/image/upload/v1784263523/jubin_atzvup.png",
    objectPosition: "center top",
    imgTransform: undefined,
  },
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
function Portrait({ initials, photo, objectPosition = "center top", imgTransform }: { initials: string; photo?: string | null; objectPosition?: string; imgTransform?: string }) {
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
        <img
          src={photo}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition,
            transform: imgTransform,
            transformOrigin: "top center",
          }}
        />
      ) : (
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <BudWatermark />
          <span
            style={{
              position: "relative",
              fontFamily: "var(--font-fraunces), serif",
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
function DirectorCard({ name, role, initials, photo, objectPosition, imgTransform, delay }: { name: string; role: string; initials: string; photo?: string | null; objectPosition?: string; imgTransform?: string; delay: number }) {
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
      <Portrait initials={initials} photo={photo} objectPosition={objectPosition} imgTransform={imgTransform} />

      <div style={{ padding: "26px 28px 28px" }}>
        <h3
          style={{
            fontFamily: "var(--font-fraunces), serif",
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
      </div>
    </div>
  )
}

export default function AboutPage() {
  /* Smooth-scroll on load if hash is present */
  // Fonts loaded via Next.js Layout

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
          fontFamily: "var(--font-manrope), sans-serif",
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
                  fontFamily: "var(--font-fraunces), serif",
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
              <p style={{ fontSize: 16.5, lineHeight: 1.8, color: "#4B5348", margin: "0 0 38px", maxWidth: 520 }}>
                Our journey starts from the 1960s, in the mist-covered hills of Idukki, where our grandfather arrived with a strong  determination and a mind full of dream. Through years of perseverance, he transformed the untamed land into thriving spice plantations, discovering the true potential of coffee,pepper and cardamom. Today, as the third generation, we proudly carry this legacy forward.
                <br /><br />
                Alongside the spices grown on our own
                <br />
                plantations, we carefully source premium cardamom from trusted local farmers who possess the same commitment in quality. Every harvest reflects our heritage, every spice tells a story, and every pack brings the authentic taste of Idukki to the kitchens...
              </p>
            </Reveal>

            <Reveal delay={0.34}>
              <div style={{ display: "flex", alignItems: "center", gap: 22, flexWrap: "wrap" }}>
                <a
                  href="#mission-vision"
                  style={{
                    background: "#14261C",
                    color: "#F5F1E6",
                    border: "none",
                    fontFamily: "var(--font-manrope), sans-serif",
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

          <Reveal
            delay={0.24}
            className="flex items-center justify-center w-full justify-self-center lg:justify-self-end"
          >
            <Image
              src="https://res.cloudinary.com/xug0w0py/image/upload/v1784261652/about-img-removebg-preview_rimoe5.png"
              alt="Spizespices estate farming heritage"
              width={560}
              height={560}
              priority
              className="w-full max-w-[520px] h-auto object-contain drop-shadow-2xl"
              sizes="(max-width: 900px) 100vw, 520px"
            />
          </Reveal>
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
          fontFamily: "var(--font-manrope), sans-serif",
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
                fontFamily: "var(--font-fraunces), serif",
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
                      fontFamily: "var(--font-fraunces), serif",
                      fontStyle: "italic",
                      fontSize: 17,
                      color: "#C1622D",
                    }}
                  >
                    I.
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-fraunces), serif",
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
                      fontFamily: "var(--font-fraunces), serif",
                      fontStyle: "italic",
                      fontSize: 17,
                      color: "#C1622D",
                    }}
                  >
                    II.
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-fraunces), serif",
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
                  fontFamily: "var(--font-manrope), sans-serif",
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
          fontFamily: "var(--font-manrope), sans-serif",
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
                fontFamily: "var(--font-fraunces), serif",
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
                        fontFamily: "var(--font-fraunces), serif",
                        fontStyle: "italic",
                        fontSize: 17,
                        color: "#C1622D",
                      }}
                    >
                      {r.numeral}
                    </span>
                    <h3
                      style={{
                        fontFamily: "var(--font-fraunces), serif",
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
          fontFamily: "var(--font-manrope), sans-serif",
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
                    fontFamily: "var(--font-fraunces), serif",
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
