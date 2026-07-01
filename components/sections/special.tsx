import { Tractor, Star, Users } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"

const items = [
  { icon: Tractor, title: "Direct from Farmers" },
  { icon: Star, title: "Premium Grading & Quality Control" },
  { icon: Users, title: "Trusted by Global Buyers" },
]

export function Special() {
  return (
    <section className="section-shell pt-10">
      <div className="container grid gap-5 md:grid-cols-3">
        {items.map((i, index) => (
          <Reveal key={i.title} delay={index * 0.08}>
            <div className="card hover-lift bg-[rgba(247,244,236,0.95)] p-7 text-center">
              <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-[rgba(91,140,81,0.14)] text-[var(--color-primary)]">
                <i.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[var(--color-primary)]">{i.title}</h3>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
