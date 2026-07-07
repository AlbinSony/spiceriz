"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"
import { Linkedin } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { FloatingActions } from "@/components/floating-actions"
import { Reveal } from "@/components/ui/reveal"
import Link from "next/link"

/* ── Animated Counter ── */
function Counter({ target, suffix = "+" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let frame: number
    const duration = 2000
    const start = performance.now()
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) frame = requestAnimationFrame(step)
    }
    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [inView, target])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

/* ── Stats Data ── */
const stats = [
  { target: 10, label: "Years of Experience" },
  { target: 500, label: "Happy Customers" },
  { target: 15, label: "Professional Awards" },
]

/* ── Values Data ── */
const values = [
  {
    title: "Our Concept",
    desc: "The sprouting spice seedling symbolizes new life and is the manifestation of all growth, innovation, and prosperity. It represents farming and the farmer — the foundation for all our activities, from sourcing premium spices to delivering them worldwide. The seedling grows in all directions in pursuit of excellence, embodying Spizespices — always fresh, innovating, and inspiring.",
  },
  {
    title: "Our Philosophy",
    desc: "Our core philosophy is to bring the purest Kerala spices to the world through sustainable sourcing and fair trade practices. We enhance farming returns by improving farm productivity, product quality, market reach, and brand value — delivering maximum value to agriculture in a sustainable manner.",
  },
  {
    title: "Our Values",
    desc: "We offer valuable products and services that build a trusted brand name. Honesty and integrity are woven into every trade we make with our clients. We ensure stage-wise growth and development of our team, our farmers, and the communities we work with.",
  },
]

/* ── Team Data ── */
const directors = [
  {
    name: "Lijish Joshy",
    role: "Director",
    initials: "LJ",
    linkedin: "#",
  },
  {
    name: "Dani J Joseph",
    role: "Director",
    initials: "DJ",
    linkedin: "#",
  },
  {
    name: "Jubin Reji",
    role: "Director",
    initials: "JR",
    linkedin: "#",
  },
]

export default function AboutPage() {
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
    <main>
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

      {/* ── About Us Section ── */}
      <section id="about-us" className="section-shell">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
            <Reveal>
              <span className="premium-chip">Who We Are</span>
              <h2 className="h-display mt-5 text-3xl text-[var(--color-primary)] sm:text-4xl md:text-5xl">
                About Our Company
              </h2>
              <p className="mt-6 text-base leading-relaxed text-[var(--color-foreground)]/80 sm:text-lg">
                <strong className="text-[var(--color-primary)]">Spizespices Pvt Ltd</strong> focuses
                on delivering the finest Kerala spices to global markets. Rooted in the lush hills of
                Idukki, we believe that agriculture is the backbone of livelihood in India — hence
                farming and allied activities are propelled through our solutions in agribusiness.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[var(--color-foreground)]/80 sm:text-lg">
                With the right channels of marketing, demand, and trusted buyers, we ensure a steady
                outflow of farm returns with an unwavering focus on enhancing farm productivity and
                quality. From hand-picked cardamom to export-ready pepper and turmeric, every spice
                carries the promise of purity.
              </p>
            </Reveal>

            {/* Decorative card with accent */}
            <Reveal delay={0.15}>
              <div className="relative">
                <div className="about-image-card">
                  <div className="flex flex-col items-center justify-center gap-4 text-center">
                    <div
                      className="inline-flex h-20 w-20 items-center justify-center rounded-full text-3xl font-bold"
                      style={{
                        backgroundColor: "var(--color-secondary)",
                        color: "var(--color-primary-foreground)",
                      }}
                    >
                      SS
                    </div>
                    <h3 className="font-serif text-2xl font-semibold text-[var(--color-primary)]">
                      Spizespices Pvt Ltd
                    </h3>
                    <p className="text-sm font-medium text-[var(--color-muted-foreground)]">
                      Premium Kerala Spices · Established with Passion
                    </p>
                    <div className="mt-2 h-px w-16 bg-[var(--color-secondary)]/30" />
                    <p className="max-w-xs text-sm leading-relaxed text-[var(--color-foreground)]/70">
                      Today, Spizespices is a well-established and professionally managed company
                      committed to quality, sustainability, and global excellence in the spice trade.
                    </p>
                  </div>
                </div>
                {/* Decorative background blob */}
                <div className="about-blob" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Stats Counter ── */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {stats.map((s, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="stat-card">
                  <span className="stat-number">
                    <Counter target={s.target} />
                  </span>
                  <span className="stat-label">{s.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Concept / Philosophy / Values ── */}
      <section className="section-shell">
        <div className="container">
          <Reveal className="section-intro">
            <span className="premium-chip">Our Foundation</span>
            <h2 className="h-display mt-5 text-3xl text-[var(--color-primary)] sm:text-4xl md:text-5xl">
              Why Choose Us
            </h2>
          </Reveal>

          <div className="mx-auto mt-12 grid max-w-[1200px] grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 sm:mt-16">
            {values.map((v, i) => (
              <Reveal key={i} delay={i * 0.12}>
                <div className="card hover-lift flex h-full flex-col bg-[rgba(247,244,236,0.95)] px-7 py-8 sm:px-8 sm:py-10">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]">
                    <span className="text-lg font-bold">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-[var(--color-primary)] sm:text-2xl">
                    {v.title}
                  </h3>
                  <div className="mt-3 h-[2px] w-8 bg-[var(--color-secondary)]" />
                  <p className="mt-4 flex-1 text-[15px] leading-relaxed text-[var(--color-foreground)]/80">
                    {v.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section id="mission-vision" className="section-shell bg-[rgba(247,244,236,0.5)]">
        <div className="container">
          <Reveal className="section-intro">
            <span className="premium-chip">Our Purpose</span>
            <h2 className="h-display mt-5 text-3xl text-[var(--color-primary)] sm:text-4xl md:text-5xl">
              Mission &amp; Vision
            </h2>
          </Reveal>

          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2 sm:mt-16">
            <Reveal delay={0}>
              <div className="mission-card">
                <div className="mission-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                </div>
                <h3 className="mt-5 font-serif text-2xl font-semibold text-[var(--color-primary)]">
                  Our Mission
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-foreground)]/80">
                  To source, process, and deliver the purest Kerala spices to homes and businesses
                  worldwide — empowering local farmers with fair returns while maintaining uncompromising
                  quality at every step from farm to fork.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mission-card">
                <div className="mission-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <h3 className="mt-5 font-serif text-2xl font-semibold text-[var(--color-primary)]">
                  Our Vision
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-foreground)]/80">
                  To become the most trusted name in Indian spice exports — recognized globally for
                  authenticity, sustainability, and premium quality. We envision a future where every
                  kitchen in the world has access to the finest spices grown in the hills of Kerala.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Our Team ── */}
      <section id="our-team" className="section-shell">
        <div className="container">
          <Reveal className="section-intro">
            <span className="premium-chip">Leadership</span>
            <h2 className="h-display mt-5 text-3xl text-[var(--color-primary)] sm:text-4xl md:text-5xl">
              Meet Our Directors
            </h2>
            <p className="mt-4 text-base text-[var(--color-foreground)]/70 sm:text-lg">
              Our Management Team
            </p>
          </Reveal>

          <div className="mx-auto mt-12 grid max-w-[1000px] grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-16">
            {directors.map((d, i) => (
              <Reveal key={i} delay={i * 0.12}>
                <div className="team-card">
                  {/* Avatar */}
                  <div className="team-avatar">
                    <span>{d.initials}</span>
                  </div>

                  {/* Info */}
                  <h3 className="mt-5 font-serif text-xl font-semibold text-[var(--color-primary)]">
                    {d.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-[var(--color-muted-foreground)]">
                    {d.role}
                  </p>

                  {/* LinkedIn */}
                  <a
                    href={d.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="team-linkedin"
                    aria-label={`${d.name} LinkedIn`}
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
      <FloatingActions />
    </main>
  )
}
