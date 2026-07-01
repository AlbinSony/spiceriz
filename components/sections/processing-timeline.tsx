import { Sprout, ListFilter, Sun, Package, Ship } from "lucide-react"
import Image from "next/image"
import { Reveal } from "@/components/ui/reveal"

const steps = [
  { icon: Sprout, title: "Harvesting in Idukki Farms", img: "harvesting" },
  { icon: ListFilter, title: "Sorting & Grading", img: "sorting" },
  { icon: Sun, title: "Hygienic Drying", img: "drying" },
  { icon: Package, title: "Eco-friendly Packaging", img: "packaging" },
  { icon: Ship, title: "Global Delivery", img: "delivery" },
]

export function ProcessingTimeline() {
  return (
    <section id="processing" className="section-shell bg-[linear-gradient(180deg,rgba(247,244,236,0.95),rgba(242,239,230,0.85))]">
      <div className="container">
        <Reveal className="section-intro">
          <span className="premium-chip">Traceable Quality</span>
          <h2 className="h-display mt-5 text-4xl text-[var(--color-primary)] sm:text-5xl">Spice Processing</h2>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {steps.map((s, index) => (
            <Reveal key={s.title} delay={index * 0.08}>
              <div className="card hover-lift h-full bg-[rgba(247,244,236,0.94)] p-5">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[18px] bg-[rgba(251,248,242,0.9)]">
                  <Image
                    src={`/images/processing-${s.img}.png`}
                    alt={s.title}
                    fill
                    className="object-contain p-4"
                    loading="lazy"
                    sizes="(max-width: 1280px) 50vw, 20vw"
                  />
                </div>
                <div className="mt-4 flex items-center gap-2 text-sm">
                  <s.icon className="h-4 w-4 text-[var(--color-secondary)]" />
                  <span className="font-medium text-[var(--color-primary)]">{s.title}</span>
                  <span className="ml-auto inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
