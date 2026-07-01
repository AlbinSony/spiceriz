import Link from "next/link"
import Image from "next/image"
import { Reveal } from "@/components/ui/reveal"

const posts = [
  {
    title: "Why Idukki Cardamom is World-Famous",
    img: "idukki cardamom fame",
    href: "/blog/idukki-cardamom-world-famous",
  },
  {
    title: "Health Benefits of Cardamom Backed by Science",
    img: "cardamom health benefits",
    href: "/blog/health-benefits-cardamom",
  },
  {
    title: "How to Store Cardamom for Freshness",
    img: "store cardamom airtight",
    href: "/blog/how-to-store-cardamom",
  },
]

export function BlogSection() {
  return (
    <section className="section-shell">
      <div className="container">
        <Reveal className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="h-display text-4xl text-[var(--color-primary)] sm:text-5xl">Latest Blogs</h2>
          <Link href="/blog" className="premium-button-ghost">
            View all
          </Link>
        </Reveal>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {posts.map((p, index) => (
            <Reveal key={p.title} delay={index * 0.07}>
              <article className="card hover-lift overflow-hidden bg-[rgba(247,244,236,0.95)]">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={`/abstract-geometric-shapes.png?height=400&width=600&query=${encodeURIComponent(p.img)}`}
                    alt={p.title}
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[var(--color-primary)]">{p.title}</h3>
                  <Link href={p.href} className="mt-3 inline-flex text-sm font-semibold text-[var(--color-secondary)] underline">
                    Read more
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
