import { Leaf, ShieldCheck, PackageCheck, Globe } from "lucide-react"

const features = [
  { icon: Leaf, title: "100% Natural & Organic" },
  { icon: ShieldCheck, title: "Direct from Idukki Farms" },
  { icon: Globe, title: "Export-Ready with Certifications" },
  { icon: PackageCheck, title: "Secure Packaging" },
]

export function WhyChooseUs() {
  return (
    <section className="container py-12">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="h-display text-2xl sm:text-3xl">Why Choose Us</h2>
        <p className="mt-2 text-foreground/80">Minimal handling. Maximum freshness. Farm-direct spices from Kerala.</p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title }) => (
          <div key={title} className="card hover-lift p-5">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-medium">{title}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}
