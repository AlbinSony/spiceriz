"use client"

import React, { useEffect, useRef, useState } from "react"
import { CldImage } from "next-cloudinary"
import { Sun, Check } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"

// Custom SVG Icons matching the image design
const SourcingIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Sprout / Leaves */}
    <path d="M12 12c0-3 1.5-5 4-5s4 2 4 5-1.5 5-4 5" />
    <path d="M16 7c0-2-1-4-3-4s-3 2-3 4" />
    <path d="M12 21v-9" />
    {/* Hand holding the sprout */}
    <path d="M4 16c2.5 0 5-1 7-2 2-1 4.5-1 6.5 0 1.5.8 2 2.2.5 3-1.5.8-3.5 1-5 1H6.5" />
  </svg>
)

const SieveIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Sieve rim */}
    <ellipse cx="12" cy="9" rx="8" ry="3.5" />
    {/* Mesh dots */}
    <circle cx="8" cy="8.5" r="0.5" fill="currentColor" />
    <circle cx="10" cy="9" r="0.5" fill="currentColor" />
    <circle cx="12" cy="8.5" r="0.5" fill="currentColor" />
    <circle cx="14" cy="9" r="0.5" fill="currentColor" />
    <circle cx="16" cy="8.5" r="0.5" fill="currentColor" />
    <circle cx="9" cy="10" r="0.5" fill="currentColor" />
    <circle cx="12" cy="10" r="0.5" fill="currentColor" />
    <circle cx="15" cy="10" r="0.5" fill="currentColor" />
    {/* Sieve body */}
    <path d="M4 9v4c0 1.9 3.6 3.5 8 3.5s8-1.6 8-3.5V9" />
    {/* Small handle */}
    <path d="M20 11h2.5v2H20v-2z" />
    {/* Falling particles/spice dust */}
    <circle cx="9" cy="18" r="0.55" fill="currentColor" />
    <circle cx="12" cy="19.5" r="0.55" fill="currentColor" />
    <circle cx="15" cy="18.5" r="0.55" fill="currentColor" />
    <circle cx="10.5" cy="21" r="0.55" fill="currentColor" />
    <circle cx="13.5" cy="20.5" r="0.55" fill="currentColor" />
  </svg>
)

const ColorSortingIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Lens Target scope ring */}
    <circle cx="12" cy="12" r="8" />
    {/* Crosshairs */}
    <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
    {/* Selected bold seed */}
    <circle cx="12" cy="12" r="2.5" fill="currentColor" />
    {/* Out of spec seed sorted away */}
    <circle cx="17" cy="7" r="1" />
    <circle cx="6" cy="17" r="1.2" />
  </svg>
)

const PackagingIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Stand up pouch design */}
    <path d="M6 3h12a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
    <path d="M5 7v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7" />
    <path d="M12 11c1.5 0 2.5 1 2.5 2.5S13.5 16 12 16s-2.5-1-2.5-2.5S10.5 11 12 11z" />
    <circle cx="12" cy="13.5" r="0.8" fill="currentColor" />
  </svg>
)

const DeliveryIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Globe outline and longitudinal lines */}
    <circle cx="12" cy="9" r="7" />
    <path d="M12 2a14 14 0 0 1 3 7 14 14 0 0 1-3 7 14 14 0 0 1-3-7 14 14 0 0 1 3-7z" />
    <path d="M5 9h14" />
    {/* Cargo Truck shape at bottom */}
    <path d="M2 17h14l1.5 2h5v1.5a0.5 0.5 0 0 1-0.5.5H3a1 1 0 0 1-1-1v-3z" />
    <rect x="4" y="14" width="9" height="3" rx="0.5" />
    <path d="M15 14h5l2 3h-7v-3z" />
    <circle cx="6" cy="20" r="1.5" />
    <circle cx="18" cy="20" r="1.5" />
  </svg>
)

const steps = [
  {
    num: "01",
    title: "Sourcing",
    desc: "We source the finest spices directly from trusted farms.",
    icon: SourcingIcon,
  },
  {
    num: "02",
    title: "Drying",
    desc: "Natural drying locks in rich aroma, color, and essential oils.",
    icon: Sun,
  },
  {
    num: "03",
    title: "Grading",
    desc: "Graded based on size to select the boldest pods and uniform consistency.",
    icon: SieveIcon,
  },
  {
    num: "04",
    title: "Color Sorting",
    desc: "Advanced color sorting selects seeds for a better premium visual presence.",
    icon: ColorSortingIcon,
  },
  {
    num: "05",
    title: "Packaging",
    desc: "Packed in custom food-grade bags based on client requirements.",
    icon: PackagingIcon,
  },
  {
    num: "06",
    title: "Delivery",
    desc: "Delivered safely across the globe with care, on time, every time.",
    icon: DeliveryIcon,
  },
]

export function ProcessingTimeline() {
  const desktopContainerRef = useRef<HTMLDivElement>(null)
  const mobileContainerRef = useRef<HTMLDivElement>(null)
  const progressLineRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  const [revealed, setRevealed] = useState<boolean[]>([false, false, false, false, false, false])
  const [activeIndex, setActiveIndex] = useState<number>(-1)
  const [desktopWidth, setDesktopWidth] = useState<number>(1000)

  const revealedRef = useRef<boolean[]>([false, false, false, false, false, false])
  const activeIndexRef = useRef<number>(-1)

  // Track width of the desktop grid container for precise layout geometry
  useEffect(() => {
    const container = desktopContainerRef.current
    if (!container) return

    const observer = new ResizeObserver((entries) => {
      const [entry] = entries
      if (entry) {
        setDesktopWidth(entry.contentRect.width)
      }
    })

    observer.observe(container)
    return () => observer.disconnect()
  }, [])

  // Mobile scroll animation logic
  useEffect(() => {
    // Check user preference for reduced motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (mediaQuery.matches) {
      setRevealed([true, true, true, true, true, true])
      setActiveIndex(5)
      if (progressLineRef.current) {
        progressLineRef.current.style.transform = "scaleY(1)"
      }
      return
    }

    const container = mobileContainerRef.current
    if (!container) return

    let animationFrameId: number
    let isIntersecting = false
    let currentProgress = 0
    let containerTop = 0
    let containerHeight = 0

    const updateDimensions = () => {
      if (container) {
        const rect = container.getBoundingClientRect()
        containerTop = rect.top + window.scrollY
        containerHeight = rect.height
      }
    }

    // Measure container dimension once and on resize to avoid reading inside scroll loop
    updateDimensions()
    window.addEventListener("resize", updateDimensions, { passive: true })

    const handleScroll = () => {
      if (!isIntersecting || containerHeight === 0) return

      const scrollPosition = window.scrollY
      const viewportHeight = window.innerHeight
      const triggerY = scrollPosition + viewportHeight * 0.6

      const lineStart = containerTop + 32
      const lineLength = containerHeight - 64

      const scrolled = triggerY - lineStart
      let targetProgress = scrolled / lineLength
      targetProgress = Math.max(0, Math.min(1, targetProgress))

      // Linear interpolation for smooth progress line growth
      currentProgress += (targetProgress - currentProgress) * 0.15

      if (progressLineRef.current) {
        progressLineRef.current.style.transform = `scaleY(${currentProgress})`
      }

      animationFrameId = requestAnimationFrame(handleScroll)
    }

    const scrollObserver = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        isIntersecting = entry.isIntersecting
        if (isIntersecting) {
          animationFrameId = requestAnimationFrame(handleScroll)
        } else {
          cancelAnimationFrame(animationFrameId)
        }
      },
      { threshold: 0.01 }
    )

    scrollObserver.observe(container)

    // Node observers to mark nodes active/revealed without querying geometric props on scroll
    const nodeObservers: IntersectionObserver[] = []
    itemRefs.current.forEach((item, index) => {
      if (!item) return
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setRevealed((prev) => {
                const next = [...prev]
                next[index] = true
                return next
              })
              setActiveIndex(index)
            }
          })
        },
        {
          rootMargin: "0px 0px -40% 0px",
          threshold: 0.05,
        }
      )
      observer.observe(item)
      nodeObservers.push(observer)
    })

    return () => {
      window.removeEventListener("resize", updateDimensions)
      scrollObserver.disconnect()
      nodeObservers.forEach((obs) => obs.disconnect())
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  // Geometry calculations for desktop "racetrack" layout path
  const x1 = desktopWidth * 0.1667
  const x3 = desktopWidth * 0.8333
  const x4 = desktopWidth * 0.1667
  const x6 = desktopWidth * 0.8333
  
  const y1 = 40
  const y4 = 464
  const ymid = 252
  const R = 106 // Radius of the 180-degree bends
  const offset = 100 // Extension distance (80-120px) beyond columns

  // Racetrack Path coordinates:
  // 1. Starts at Circle 01 center (x1, y1)
  // 2. Extends through Circle 02 and Circle 03, continuing by 'offset' (x3 + offset, y1)
  // 3. Clockwise 180° arc on right to ymid (x3 + offset, ymid)
  // 4. Straight horizontal return line to left past Column 1 by 'offset' (x4 - offset, ymid)
  // 5. Counter-clockwise 180° arc on left to y4 (x4 - offset, y4)
  // 6. Straight horizontal line through Circle 04, Circle 05, to Circle 06 center (x6, y4)
  const racetrackPath = `M ${x1} ${y1} L ${x3 + offset} ${y1} A ${R} ${R} 0 0 1 ${x3 + offset} ${ymid} L ${x4 - offset} ${ymid} A ${R} ${R} 0 0 0 ${x4 - offset} ${y4} L ${x6} ${y4}`

  return (
    <section id="processing" className="relative isolate overflow-hidden bg-[#FAF8F2] py-16 md:py-24 lg:py-28">
      {/* Self-contained style block for pulse and entry transitions */}
      <style>{`
        @keyframes timeline-glow-pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(94, 141, 58, 0.45);
          }
          70% {
            box-shadow: 0 0 0 14px rgba(94, 141, 58, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(94, 141, 58, 0);
          }
        }
        .timeline-pulse-active {
          animation: timeline-glow-pulse 2s infinite cubic-bezier(0.25, 0, 0, 1);
        }
      `}</style>

      {/* Decorative background leaves */}
      <CldImage
        src="left-leaf_ug8owj"
        alt=""
        width={260}
        height={260}
        className="pointer-events-none absolute -left-6 bottom-0 z-0 w-[120px] object-contain opacity-75 sm:left-0 sm:w-[170px] sm:opacity-100 lg:w-[260px]"
        sizes="(max-width: 640px) 120px, (max-width: 1024px) 170px, 260px"
        quality={60}
        format="auto"
        loading="lazy"
      />
      <CldImage
        src="right-leaf_br1adr"
        alt=""
        width={260}
        height={260}
        className="pointer-events-none absolute -right-5 top-8 z-0 w-[110px] object-contain opacity-75 sm:right-0 sm:top-12 sm:w-[150px] sm:opacity-100 lg:w-[250px]"
        sizes="(max-width: 640px) 110px, (max-width: 1024px) 150px, 250px"
        quality={60}
        format="auto"
        loading="lazy"
      />

      <div className="container relative z-10">
        {/* Header */}
        <div className="mx-auto max-w-xl text-center mb-16 md:mb-20">
          <span className="text-xs font-bold tracking-[0.2em] text-[#5b8c51] uppercase">
            Step by Step Process
          </span>
          <span className="mx-auto mt-2 block h-[2px] w-8 bg-[#d64b2a]" />
          <h2 className="mt-5 font-serif text-3xl md:text-5xl font-normal leading-tight text-[#173f23]">
            We Complete every <span className="font-semibold text-[#173f23]">Step Carefully</span>
          </h2>
        </div>

        <div className="mx-auto max-w-[1060px] px-8 lg:px-12">
          {/* Desktop/Tablet Horizontal Timeline (md and up) */}
          <div ref={desktopContainerRef} className="hidden md:block relative w-full">
            
            {/* Racetrack SVG Connector Overlay */}
            <svg
              className="absolute inset-0 w-full h-[500px] pointer-events-none -z-10 overflow-visible"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d={racetrackPath}
                fill="none"
                stroke="#9cb075"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* Grid layout with vertical spacing (gap-y-56 = 224px) for premium Apple/Aesop style whitespace */}
            <div className="grid grid-cols-3 gap-x-12 gap-y-56 w-full">
              {steps.map((step, index) => (
                <Reveal key={step.num} delay={index * 0.08} y={20}>
                  <div className="flex flex-col items-center text-center h-[200px]">
                    {/* Circle Container */}
                    <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-[#f0f4e3] border border-[#9cb075] text-[#234f2c] z-10 shadow-[0_2px_8px_rgba(35,79,44,0.04)] hover:scale-105 transition-transform duration-300">
                      <step.icon className="w-8 h-8 text-[#234f2c]" />
                    </div>

                    {/* Step Info */}
                    <span className="mt-5 text-sm font-semibold tracking-wider text-[#5b8c51]">
                      {step.num}
                    </span>
                    <h3 className="mt-1 font-serif text-lg font-bold text-[#14281c]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#203020]/75 leading-relaxed max-w-[240px]">
                      {step.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Mobile Scroll-driven Timeline (below md) */}
          <div ref={mobileContainerRef} className="md:hidden relative pl-4 max-w-[400px] mx-auto">
            {/* Background static line */}
            <div className="absolute left-[32px] top-[32px] bottom-[32px] w-[2px] bg-[#D7D7D7] -translate-x-1/2" />
            
            {/* Animated scale active line */}
            <div
              ref={progressLineRef}
              className="absolute left-[32px] top-[32px] bottom-[32px] w-[2px] bg-[#5E8D3A] -translate-x-1/2 origin-top scale-y-0"
              style={{ willChange: "transform" }}
            />

            <div className="flex flex-col gap-20">
              {steps.map((step, index) => {
                const isCompleted = index < activeIndex
                const isActive = index === activeIndex
                const isRevealed = revealed[index]

                return (
                  <div
                    key={step.num}
                    ref={(el) => {
                      itemRefs.current[index] = el
                    }}
                    className={`relative flex items-start gap-6 transition-all duration-[450ms] ease-[cubic-bezier(.22,.61,.36,1)] ${isRevealed
                        ? "opacity-100 translate-y-0 scale-100"
                        : "opacity-0 translate-y-5 scale-[0.85] pointer-events-none"
                      }`}
                  >
                    {/* Circle Node */}
                    <div
                      className={`flex-shrink-0 w-16 h-16 rounded-full border-2 flex items-center justify-center relative z-10 transition-all duration-300 ${isCompleted
                          ? "bg-[#5E8D3A] border-[#5E8D3A] text-white"
                          : isActive
                            ? "bg-[#FAF8F2] border-[#5E8D3A] text-[#5E8D3A] timeline-pulse-active"
                            : "bg-[#FAF8F2] border-[#D7D7D7] text-[#203020]/40"
                        }`}
                    >
                      {isCompleted ? (
                        <Check className="w-6 h-6 text-white stroke-[2.5]" />
                      ) : (
                        <step.icon className="w-6 h-6 transition-colors duration-300" />
                      )}
                    </div>

                    {/* Step Info Content */}
                    <div className="flex-1 pt-2">
                      <span
                        className={`text-xs font-bold uppercase tracking-wider block transition-colors duration-300 ${isCompleted || isActive ? "text-[#5E8D3A]" : "text-[#203020]/40"
                          }`}
                      >
                        {step.num}
                      </span>
                      <h3
                        className={`font-serif text-lg font-bold mt-0.5 transition-colors duration-300 ${isCompleted || isActive ? "text-[#14281c]" : "text-[#203020]/60"
                          }`}
                      >
                        {step.title}
                      </h3>
                      <p
                        className={`text-sm mt-1 max-w-[280px] leading-relaxed transition-colors duration-300 ${isCompleted || isActive ? "text-[#203020]/75" : "text-[#203020]/50"
                          }`}
                      >
                        {step.desc}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
