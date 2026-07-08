"use client"

import { useRef, useEffect } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

// Register ScrollTrigger only on the client
if (typeof window !== "undefined") {
  const gsapModule = require("gsap")
  const { ScrollTrigger } = require("gsap/ScrollTrigger")
  gsapModule.gsap.registerPlugin(ScrollTrigger)
}

interface Props {
  text: string
  className?: string
  heading?: string
  buttonText?: string
  buttonHref?: string
}

export default function ScrollRevealText({
  text,
  className,
  heading,
  buttonText,
  buttonHref,
}: Props) {
  const sectionRef = useRef<HTMLElement>(null)
  const paragraphRef = useRef<HTMLParagraphElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Skip animation if user prefers reduced motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) return

    // Dynamic imports to avoid SSR issues
    const gsap = require("gsap").gsap
    const { ScrollTrigger } = require("gsap/ScrollTrigger")
    const SplitType = require("split-type").default

    // Scope all GSAP work to the section ref for clean teardown
    const ctx = gsap.context(() => {
      if (!paragraphRef.current) return

      // Step 1: Split the paragraph into individual words
      // SplitType wraps each word in a <span>, allowing per-word animation
      const split = new SplitType(paragraphRef.current, { types: "words" })

      // Step 2: Force each word to inline-block so translateY works
      // while preserving natural text wrapping
      if (split.words) {
        split.words.forEach((word: HTMLElement) => {
          word.style.display = "inline-block"
        })
      }

      // Step 3: Build the GSAP timeline with all animated elements
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",       // pin starts when section hits viewport top
          end: "+=150%",          // scroll distance = 1.5× viewport height
          pin: true,              // section stays fixed while animating
          scrub: 1,               // smooth scrub tied to scroll position
          anticipatePin: 1,       // eliminates the small jump when pinning begins
        },
      })

      // Step 4: Set initial state — faded out and slightly shifted down
      gsap.set(split.words, { opacity: 0.15, y: 10 })

      // Step 5: Animate words revealing left-to-right, sequentially
      tl.to(split.words, {
        opacity: 1,
        y: 0,
        ease: "none",
        stagger: 0.05,
      })

      // Step 6: Animate the button fading in after all words are revealed
      if (buttonRef.current) {
        gsap.set(buttonRef.current, { opacity: 0, y: 16 })
        tl.to(
          buttonRef.current,
          { opacity: 1, y: 0, ease: "power2.out", duration: 0.3 },
          ">-0.1"
        )
      }
    }, sectionRef)

    // Step 7: Full cleanup — reverts ScrollTrigger pins AND
    // SplitType's DOM mutations (re-merges split spans back to text).
    // Critical for App Router route changes & Fast Refresh.
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className={`flex h-screen flex-col items-center pt-[10vh] px-6 lg:px-8 ${className ?? ""}`}
      style={{ fontFamily: "var(--font-outfit), sans-serif" }}
    >
      {/* Heading — always visible, uses site serif font */}
      {heading && (
        <div className="mb-8 text-center sm:mb-10 md:mb-12">
          <span className="premium-chip">{heading}</span>
        </div>
      )}

      {/* Scroll-reveal paragraph — Outfit font */}
      <p
        ref={paragraphRef}
        className="scroll-reveal-text"
      >
        {text}
      </p>

      {/* Know More button — reveals after text */}
      {buttonText && buttonHref && (
        <div ref={buttonRef} className="mt-8 sm:mt-10 md:mt-12">
          <Link
            href={buttonHref}
            className="group inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/20 bg-[var(--color-primary)] px-7 py-3.5 text-sm font-semibold text-[var(--color-primary-foreground)] transition-all duration-300 hover:bg-[var(--color-background)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)]"
          >
            {buttonText}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      )}
    </section>
  )
}
