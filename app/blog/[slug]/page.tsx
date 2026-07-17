import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BLOG_POSTS } from "@/lib/blog-posts"
import { Calendar, Clock, ArrowLeft, ChevronRight, User } from "lucide-react"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)

  if (!post) {
    return {}
  }

  return {
    title: post.seoTitle,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  // Phase 2: Compute topic cluster related posts (ring mesh linking all 9 articles)
  const currentIndex = BLOG_POSTS.findIndex((p) => p.slug === slug)
  const relatedPosts = []
  for (let i = 1; i <= 5; i++) {
    const nextIndex = (currentIndex + i) % BLOG_POSTS.length
    relatedPosts.push(BLOG_POSTS[nextIndex])
  }

  // Phase 2: Dynamically extract FAQs for FAQPage schema injection
  const faqElements: Array<{ question: string; answer: string }> = []
  let isFAQSection = false
  let currentQuestion = ""

  for (const block of post.content) {
    if (block.type === "heading" && block.text === "Frequently Asked Questions") {
      isFAQSection = true
      continue
    }
    if (isFAQSection) {
      if (block.type === "heading" && block.level === 3) {
        currentQuestion = block.text || ""
      } else if (block.type === "paragraph" && currentQuestion) {
        faqElements.push({
          question: currentQuestion,
          answer: block.text || ""
        })
        currentQuestion = "" // reset
      }
    }
  }

  return (
    <main className="overflow-x-hidden bg-white min-h-screen flex flex-col justify-between">
      {/* 1. BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.spizespices.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://www.spizespices.com/blog"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": post.title,
                "item": `https://www.spizespices.com/blog/${post.slug}`
              }
            ]
          })
        }}
      />

      {/* 2. Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": post.title,
            "description": post.description,
            "image": post.image,
            "datePublished": "2026-07-14",
            "author": {
              "@type": "Organization",
              "name": "Spize Spices",
              "url": "https://www.spizespices.com"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Spize Spices",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.spizespices.com/logo.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://www.spizespices.com/blog/${post.slug}`
            }
          })
        }}
      />

      {/* 3. FAQPage Schema (only if FAQs exist in the content block) */}
      {faqElements.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqElements.map((faq) => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            })
          }}
        />
      )}

      <SiteHeader />

      <article className="py-8 sm:py-12 md:py-16">
        <div className="container max-w-3xl mx-auto px-6">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-1.5 text-xs font-semibold text-neutral-500 mb-6 flex-wrap">
            <Link href="/" className="hover:underline hover:text-neutral-900 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/blog" className="hover:underline hover:text-neutral-900 transition-colors">
              Blog
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-neutral-800 truncate max-w-[200px] sm:max-w-none font-normal">
              {post.title}
            </span>
          </nav>

          {/* Back Button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-700 hover:text-neutral-900 hover:underline transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Post Header */}
          <header className="mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-3 block">
              {post.category}
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.12] text-neutral-950 mt-2">
              {post.title}
            </h1>

            {/* Author & Meta */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-neutral-500 mt-6 font-medium border-b border-neutral-200 pb-6">
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4 text-neutral-400" />
                By {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-neutral-400" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-neutral-400" />
                {post.readTime}
              </span>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative aspect-[1.8] w-full overflow-hidden rounded-[8px] bg-neutral-50 border border-neutral-100 mb-10">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 800px"
              priority
            />
          </div>

          {/* Post Content Body */}
          <div className="prose prose-neutral max-w-none">
            {post.content.map((block, idx) => {
              switch (block.type) {
                case "paragraph":
                  return (
                    <p key={idx} className="text-base sm:text-[17px] text-neutral-800 leading-[1.8] font-normal mb-6">
                      {block.text}
                    </p>
                  )
                case "heading":
                  if (block.level === 3) {
                    return (
                      <h3 key={idx} className="font-sans text-lg sm:text-xl font-bold text-neutral-900 mt-8 mb-4">
                        {block.text}
                      </h3>
                    )
                  }
                  return (
                    <h2 key={idx} className="font-serif text-2xl sm:text-3xl font-bold text-neutral-950 mt-10 mb-5">
                      {block.text}
                    </h2>
                  )
                case "list":
                  return (
                    <ul key={idx} className="space-y-3 my-6 pl-1">
                      {block.items?.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2.5 text-base sm:text-[17px] text-neutral-800 leading-relaxed">
                          <span className="text-neutral-400 mt-1.5 flex-shrink-0 text-xs">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )
                case "table":
                  return (
                    <div key={idx} className="overflow-x-auto my-8 border border-neutral-200 rounded-[8px]">
                      <table className="w-full text-left border-collapse bg-white">
                        <thead>
                          <tr className="bg-neutral-50 border-b border-neutral-200">
                            {block.headers?.map((header, headIdx) => (
                              <th key={headIdx} className="p-4 text-xs font-bold text-neutral-800 uppercase tracking-wider">
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {block.rows?.map((row, rowIdx) => (
                            <tr key={rowIdx} className="border-b border-neutral-100 hover:bg-neutral-50/50 transition-colors">
                              {row.map((cell, cellIdx) => (
                                <td key={cellIdx} className="p-4 text-sm text-neutral-700">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )
                default:
                  return null
              }
            })}
          </div>

          {/* Phase 2: Topic Cluster & Sourcing Navigation Web */}
          <div className="mt-16 pt-8 border-t border-neutral-200">
            <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-6">
              Cardamom Knowledge Hub & Sourcing
            </h4>
            <div className="grid gap-8 sm:grid-cols-2 text-sm text-neutral-700">
              <div>
                <h5 className="font-semibold text-neutral-950 mb-3">Related Guides</h5>
                <ul className="space-y-2.5">
                  {relatedPosts.map((p) => (
                    <li key={p.slug}>
                      <Link href={`/blog/${p.slug}`} className="hover:underline hover:text-neutral-950 block text-[13px] text-neutral-600 font-medium">
                        {p.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <h5 className="font-semibold text-neutral-950 mb-3">Product Portfolio</h5>
                  <ul className="space-y-2.5 text-[13px] text-neutral-600 font-medium">
                    <li>
                      <Link href="/products?cat=Cardamom" className="hover:underline hover:text-neutral-950 block">
                        Premium Idukki Green Cardamom
                      </Link>
                    </li>
                    <li>
                      <Link href="/products?cat=Pepper" className="hover:underline hover:text-neutral-950 block">
                        Bold Malabar Black Pepper
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="mt-6 pt-6 border-t border-neutral-100">
                  <h5 className="font-semibold text-neutral-950 mb-2">Corporate Sourcing</h5>
                  <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs font-semibold text-neutral-500">
                    <Link href="/" className="hover:underline hover:text-neutral-900">
                      Homepage
                    </Link>
                    <Link href="/about" className="hover:underline hover:text-neutral-900">
                      About Spize Spices
                    </Link>
                    <Link href="/wholesale" className="hover:underline hover:text-neutral-900">
                      Wholesale Supply
                    </Link>
                    <Link href="/#contact" className="hover:underline hover:text-neutral-900">
                      Contact Page
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action Box */}
          <div className="mt-12 bg-white border border-neutral-200 rounded-[12px] p-6 sm:p-8 md:p-10 text-center text-neutral-900 shadow-sm relative overflow-hidden">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-tight text-neutral-950">
              Source Premium Idukki Cardamom
            </h3>
            <p className="mt-4 text-sm text-neutral-600 max-w-xl mx-auto leading-relaxed font-normal">
              We work directly with local farms in Kerala to grade, dry, and export the finest bold green cardamom pods worldwide.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3.5 justify-center">
              <Link
                href="/wholesale"
                className="inline-flex h-11 items-center justify-center rounded-[6px] bg-neutral-900 px-6 text-[13px] font-bold text-white transition-all hover:bg-neutral-800 hover:-translate-y-0.5"
              >
                Inquire Wholesale
              </Link>
              <a
                href="https://wa.me/918606771827"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-[6px] border border-neutral-300 bg-white px-6 text-[13px] font-bold text-neutral-800 transition-all hover:bg-neutral-50 hover:-translate-y-0.5"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </article>

      <SiteFooter />
    </main>
  )
}
