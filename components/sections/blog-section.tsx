import Link from "next/link"
import Image from "next/image"
import { Reveal } from "@/components/ui/reveal"
import { BLOG_POSTS } from "@/lib/blog-posts"

export function BlogSection() {
  const posts = BLOG_POSTS.slice(0, 3)

  return (
    <section className="section-shell bg-white py-16">
      <div className="container">
        <Reveal className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight text-[#173f23]">
            Latest Sourcing Guides
          </h2>
          <Link href="/blog" className="premium-button-ghost">
            View all
          </Link>
        </Reveal>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {posts.map((p, index) => (
            <Reveal key={p.slug} delay={index * 0.07}>
              <article className="card hover-lift overflow-hidden bg-[rgba(247,244,236,0.95)] border border-[rgba(35,79,44,0.06)] rounded-[16px] flex flex-col justify-between h-full">
                <div>
                  <div className="relative aspect-[4/3] w-full bg-neutral-100">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover"
                      loading="lazy"
                      sizes="(max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-neutral-900 leading-snug line-clamp-2">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-xs text-neutral-500 font-medium">
                      {p.date} • {p.readTime}
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-2">
                  <Link href={`/blog/${p.slug}`} className="inline-flex text-xs font-bold text-[#5b8c2f] hover:underline uppercase tracking-wider">
                    Read guide
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

