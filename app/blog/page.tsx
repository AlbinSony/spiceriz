import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BLOG_POSTS } from "@/lib/blog-posts"
import { Calendar, Clock, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog & Spice Insights",
  description: "Insights, guides, and updates from the green cardamom hills of Idukki and Kerala spice country by Spize Spices.",
  alternates: { canonical: "/blog" },
}

export default function BlogIndexPage() {
  return (
    <main className="overflow-x-hidden bg-white min-h-screen flex flex-col justify-between">
      <SiteHeader />

      <section className="section-shell py-12 md:py-16">
        <div className="container">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-3 block">
            Spice Chronicles
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-neutral-950">
            Insights & Guides
          </h1>
          <p className="mt-4 max-w-2xl text-neutral-600 leading-relaxed font-normal">
            Discover the secrets of green cardamom, spice harvesting legacy, B2B export guidelines, and recipes from the heart of Kerala's Western Ghats.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <article key={post.slug} className="card bg-white border border-neutral-200 rounded-[12px] p-5 flex flex-col justify-between group transition-all duration-300">
                <div>
                  {/* Blog Image */}
                  <div className="relative aspect-[1.5] w-full overflow-hidden rounded-[8px] bg-neutral-50 border border-neutral-100 mb-5">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 30vw"
                    />
                    <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-wider text-white bg-neutral-900 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>

                  {/* Metadata */}
                  <div className="flex items-center gap-4 text-xs text-neutral-500 mb-3 font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-neutral-400" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="font-serif text-xl font-bold leading-snug text-neutral-950 group-hover:underline transition-colors duration-300">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  {/* Description */}
                  <p className="mt-3 text-sm text-neutral-600 leading-relaxed font-normal">
                    {post.description}
                  </p>
                </div>

                <div className="pt-6">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-800 hover:text-neutral-950 transition-colors duration-300"
                  >
                    Read Full Article
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
