const blogCovers = {
  tea: "/images/blog-lifestyle-tea.png",
  food: "/images/blog-lifestyle-food.png",
}

const posts = [
  {
    title: "Why Idukki Cardamom is World-Famous",
    href: "/blog/idukki-cardamom-world-famous",
    img: "/images/blog-cardamom-tea.png",
  },
  {
    title: "Health Benefits of Cardamom Backed by Science",
    href: "/blog/health-benefits-cardamom",
    img: "/images/blog-cardamom-health.png",
  },
  {
    title: "How to Store Cardamom for Freshness",
    href: "/blog/how-to-store-cardamom",
    img: "/images/blog-cardamom-storage.png",
  },
]

const BlogSection = () => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((p) => (
        <article
          key={p.href}
          className="rounded-xl bg-white shadow-sm border border-transparent transition-colors hover:border-[#40916C]"
        >
          <img src={p.img || "/placeholder.svg"} alt={p.title} className="h-40 w-full object-cover rounded-t-xl" />
          <div className="p-4">
            <a href={p.href} className="font-medium text-[#2B2B2B] hover:text-[#1B4332]">
              {p.title}
            </a>
            <div className="mt-2">
              <a href={p.href} className="text-sm font-medium" style={{ color: "#C89B3C" }}>
                Read more
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}

export default BlogSection
