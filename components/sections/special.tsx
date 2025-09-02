import { Tractor, Star, Users } from "lucide-react"

const items = [
  { icon: Tractor, title: "Direct from Farmers" },
  { icon: Star, title: "Premium Grading & Quality Control" },
  { icon: Users, title: "Trusted by Global Buyers" },
]

export function Special() {
  return (
    <section className="container py-12">
      <div className="grid gap-4 md:grid-cols-3">
        {items.map((i) => (
          <div key={i.title} className="card p-6 text-center">
            <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
              <i.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-3 font-medium">{i.title}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}
