import Link from "next/link"

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
    <section id="products" className="container py-12">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="h-display text-2xl sm:text-3xl">Our Product Range</h2>
        <p className="mt-2 text-foreground/80">From whole spices to custom blends, responsibly sourced in Kerala.</p>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <article
            key={p.name}
            className="overflow-hidden rounded-xl bg-white shadow-sm border border-transparent transition-colors hover:border-[#40916C]"
          >
            <div className="aspect-[4/3] w-full">
              {/* Real studio shots instead of abstract generator */}
              <img
                src={p.imgPath || "/placeholder.svg"}
                alt={p.name}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
            <div className="p-5">
              <h3 className="font-medium text-[#1B4332]">{p.name}</h3>
              <p className="mt-1 text-sm text-[#2B2B2B]">{p.desc}</p>
              <div className="mt-4">
                <Link
                  href={`/products#${encodeURIComponent(p.name.toLowerCase())}`}
                  className="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium text-white"
                  style={{ backgroundColor: "#1B4332" }}
                >
                  View Details
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
