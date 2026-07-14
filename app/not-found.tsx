import Link from "next/link"
import { ArrowLeft, Home, MessageSquare, AlertCircle } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function NotFound() {
  return (
    <main className="bg-[#FAF8F2] min-h-screen flex flex-col justify-between overflow-x-hidden">
      <SiteHeader />

      <section className="container flex-1 flex flex-col items-center justify-center py-20 px-6 text-center">
        <div className="max-w-md mx-auto flex flex-col items-center">
          {/* Decorative Icon */}
          <div className="w-16 h-16 rounded-full bg-[#f0eee4] border border-[rgba(35,79,44,0.08)] flex items-center justify-center text-[#234f2c] mb-6">
            <AlertCircle className="w-8 h-8" />
          </div>

          <span className="text-xs font-bold tracking-[0.2em] text-[#5b8c51] uppercase">
            Error 404
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#173f23] mt-3">
            Page Not Found
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[#203020]/75 leading-relaxed font-medium">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full justify-center">
            <Link
              href="/"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-[6px] bg-[#123d26] px-6 text-[13.5px] font-bold text-[#fff8ec] shadow-[0_12px_24px_rgba(18,61,38,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#5b8c2f]"
            >
              <Home className="w-4 h-4" />
              Go Back Home
            </Link>
            <Link
              href="/#contact"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-[6px] border border-[#d6dccf] bg-[rgba(251,248,242,0.82)] px-6 text-[13.5px] font-bold text-[#173f23] shadow-[0_10px_20px_rgba(35,79,44,0.05)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#173f23] hover:bg-[#fffaf0]"
            >
              <MessageSquare className="w-4 h-4" />
              Contact Support
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
