import Link from "next/link"

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
    <section className="container py-12">
      <div className="flex items-center justify-between">
        <h2 className="h-display text-2xl sm:text-3xl">Latest Blogs</h2>
        <Link href="/blog" className="text-sm text-[var(--color-primary)] underline">
          View all
        </Link>
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-3">
        {posts.map((p) => (
          <article key={p.title} className="card hover-lift overflow-hidden">
            <div className="aspect-[4/3] w-full">
              <img
                src={`/abstract-geometric-shapes.png?height=400&width=600&query=${encodeURIComponent(p.img)}`}
                alt={p.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="font-medium">{p.title}</h3>
              <Link href={p.href} className="mt-2 inline-block text-sm text-[var(--color-primary)] underline">
                Read more
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
