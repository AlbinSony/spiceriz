import Link from "next/link"
import Image from "next/image"
import { Reveal } from "@/components/ui/reveal"
import { ArrowRight } from "lucide-react"

const products = [
  {
    name: "Cardamom",
    desc: "Rich aroma and intense flavor.",
    imgPath: "/images/products-cardamom-pods.png",
  },
  { name: "Black Pepper", desc: "Pungent, bold and naturally grown.", imgPath: "/images/products-black-pepper.png" },
  { name: "Cloves", desc: "Strong aroma with medicinal goodness.", imgPath: "/images/products-clove.png" },
  { name: "Cinnamon", desc: "Sweet, warm and naturally fragrant.", imgPath: "/images/products-cinnamon.png" },
  { name: "Nutmeg", desc: "Warm, sweet and perfectly aromatic.", imgPath: "/images/products-nutmeg.png" },
  { name: "Spice Blends", desc: "Perfectly blended for rich taste.", imgPath: "/images/products-blends.png" },
]

export function ProductGrid() {
  return (
    <section id="products" className="section-shell">
      <div className="container">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-secondary)]">
            <span className="text-[var(--color-secondary)]">←</span>
            <span>Our Product Range</span>
            <span className="text-[var(--color-secondary)]">→</span>
          </div>
          <h2 className="h-display mt-4 text-4xl text-[var(--color-primary)] sm:text-5xl lg:text-[3.35rem]">
            Authentic Spices, <span className="text-[var(--color-secondary)]">Rich in Flavor</span>
          </h2>
          <span className="mx-auto mt-4 block h-[3px] w-10 rounded-full bg-[var(--color-accent)]" />
          <p className="mx-auto mt-5 max-w-2xl text-base text-foreground/80 sm:text-lg">
            Discover a wide range of carefully selected spices.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p, index) => (
            <Reveal key={p.name} delay={index * 0.06}>
              <article className="overflow-hidden rounded-[20px] border border-[#e8dfcf] bg-[#f8f3e8] shadow-[0_10px_28px_rgba(35,79,44,0.06)] transition-shadow duration-300 hover:shadow-[0_14px_36px_rgba(35,79,44,0.08)]">
                <div className="group relative aspect-[1.08] w-full overflow-hidden bg-[#f7f1e3]">
                  <Image
                    src={p.imgPath || "/placeholder.svg"}
                    alt={p.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    sizes="(max-width: 1024px) 50vw, 30vw"
                  />
                </div>
                <div className="px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
                  <h3 className="text-[18px] font-semibold leading-tight text-[#223227]">{p.name}</h3>
                  <p className="mt-2 min-h-[40px] text-[13px] leading-[1.45] text-[#4e564f]">{p.desc}</p>
                  <Link
                    href={`/products#${encodeURIComponent(p.name.toLowerCase())}`}
                    className="mt-4 flex items-center justify-between text-[13px] font-semibold text-[#223227] transition-colors hover:text-[var(--color-secondary)]"
                  >
                    <span>View Details</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
