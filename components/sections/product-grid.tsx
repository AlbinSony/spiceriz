import Link from "next/link"
import Image from "next/image"
import { Reveal } from "@/components/ui/reveal"

const products = [
  {
    name: "Cardamom",
    desc: "Grades: 6mm, 7mm, 8mm. Fresh, aromatic pods from Idukki.",
    imgPath: "/images/products-cardamom-pods.png",
  },
  { name: "Black Pepper", desc: "Bold and pungent peppercorns.", imgPath: "/images/products-black-pepper.png" },
  { name: "Clove", desc: "Hand-picked cloves with strong aroma.", imgPath: "/images/products-clove.png" },
  { name: "Cinnamon", desc: "Delicate quills with sweet fragrance.", imgPath: "/images/products-cinnamon.png" },
  { name: "Nutmeg", desc: "Whole nutmeg with warm notes.", imgPath: "/images/products-nutmeg.png" },
  { name: "Blended Spices", desc: "Custom blends upon request.", imgPath: "/images/products-blends.png" },
]

export function ProductGrid() {
  return (
    <section id="products" className="section-shell">
      <div className="container">
        <Reveal className="section-intro">
          <span className="premium-chip">Curated Portfolio</span>
          <h2 className="h-display mt-5 text-4xl text-[var(--color-primary)] sm:text-5xl">Our Product Range</h2>
          <p className="mt-4 text-foreground/80">From whole spices to custom blends, responsibly sourced in Kerala.</p>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, index) => (
            <Reveal key={p.name} delay={index * 0.06}>
              <article className="card hover-lift overflow-hidden border-[var(--color-border)] bg-[rgba(247,244,236,0.95)]">
                <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-b-none rounded-t-[24px]">
                  <Image
                    src={p.imgPath || "/placeholder.svg"}
                    alt={p.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    sizes="(max-width: 1024px) 50vw, 30vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[var(--color-primary)]">{p.name}</h3>
                  <p className="mt-2 text-sm text-foreground/80">{p.desc}</p>
                  <div className="mt-5">
                    <Link href={`/products#${encodeURIComponent(p.name.toLowerCase())}`} className="premium-button">
                      View Details
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
