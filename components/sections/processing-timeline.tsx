import { Sprout, ListFilter, Sun, Package, Ship } from "lucide-react"

const steps = [
  { icon: Sprout, title: "Harvesting in Idukki Farms", img: "harvesting" },
  { icon: ListFilter, title: "Sorting & Grading", img: "sorting" },
  { icon: Sun, title: "Hygienic Drying", img: "drying" },
  { icon: Package, title: "Eco-friendly Packaging", img: "packaging" },
  { icon: Ship, title: "Global Delivery", img: "delivery" },
]

export function ProcessingTimeline() {
  return (
    <section id="processing" className="py-12" style={{ backgroundColor: "#EAEAEA" }}>
      <div className="container">
        <h2 className="h-display text-2xl sm:text-3xl text-center text-[#1B4332]">Spice Processing</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-5">
          {steps.map((s) => (
            <div key={s.title} className="card p-4 bg-white rounded-xl shadow-sm">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-md bg-white">
                <img
                  src={`/images/processing-${s.img}.png`}
                  alt={s.title}
                  className="h-full w-full object-contain p-3"
                />
              </div>
              <div className="mt-3 flex items-center gap-2 text-sm">
                <s.icon className="h-4 w-4" color="#40916C" />
                <span className="font-medium text-[#2B2B2B]">{s.title}</span>
                <span
                  className="ml-auto inline-block h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: "#C89B3C" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
