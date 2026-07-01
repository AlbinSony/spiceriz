import { Leaf, ShieldCheck, PackageCheck, Globe } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"

const features = [
  { icon: Leaf, title: "100% Natural & Organic" },
  { icon: ShieldCheck, title: "Direct from Idukki Farms" },
  { icon: Globe, title: "Export-Ready with Certifications" },
  { icon: PackageCheck, title: "Secure Packaging" },
]

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="section-shell">
      <div className="container">
        <Reveal className="section-intro">
          <span className="premium-chip">Why Buyers Choose Spizespices</span>
          <h2 className="h-display mt-5 text-4xl text-[var(--color-primary)] sm:text-5xl">Why Choose Us</h2>
          <p className="mt-4 text-foreground/80">Minimal handling. Maximum freshness. Farm-direct spices from Kerala.</p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title }, index) => (
            <Reveal key={title} delay={index * 0.08}>
              <div className="card hover-lift h-full p-6">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(91,140,81,0.12)] text-[var(--color-primary)]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-[var(--color-primary)]">{title}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
