"use client"

import type { ReactNode } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  as?: "div" | "span"
}

export function Reveal({ children, className, delay = 0, y = 32, as = "div" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  const Component = as === "span" ? motion.span : motion.div

  return (
    <Component
      ref={ref as any}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </Component>
  )
}

type ParallaxProps = {
  children: ReactNode
  className?: string
  strength?: number
}

export function Parallax({ children, className, strength = 34 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [-strength, strength])

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  )
}
