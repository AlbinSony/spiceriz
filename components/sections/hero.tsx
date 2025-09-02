import Link from "next/link"

// Added subtle fade-in animations and hover scale on background image while preserving existing color scheme.
export function Hero() {
  return (
    <section id="hero" className="relative mt-6">
      <div className="group relative h-[60vh] w-full overflow-hidden bg-[var(--color-primary)] sm:h-[72vh]">
        <img
          src="/images/hero-idukki-misty.png"
          alt="Misty cardamom plantations in Idukki, Kerala"
          className="h-full w-full object-cover opacity-80 transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Blended overlay with deep green tone */}
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(27,67,50,0.80)] via-[rgba(27,67,50,0.35)] to-transparent" />
        <div className="absolute inset-0 flex items-end sm:items-center">
          <div className="container pb-10 sm:pb-0">
            <div className="max-w-2xl space-y-4 text-white animate-in fade-in-50 slide-in-from-bottom-4 duration-700">
              {/* Bold serif headline per spec */}
              <h1 className="h-display text-3xl font-semibold sm:text-5xl md:font-bold">
                Pure Idukki Cardamom – From Our Farms to Your Home
              </h1>
              <p className="text-pretty text-white/90">
                Premium, authentic spices grown in Kerala’s Idukki hills. Export-ready quality, trusted by global buyers
                and loved by homes.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {/* Primary CTA: green accent button for strong contrast and brand consistency */}
                <Link
                  href="#products"
                  className="rounded-md px-4 py-2 text-sm font-medium text-white transition-colors"
                  style={{ backgroundColor: "#1B4332" }}
                >
                  Explore Products
                </Link>
                {/* Secondary CTA: outline on dark hero for visual hierarchy */}
                <Link
                  href="/wholesale"
                  className="rounded-md border border-white/50 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10"
                >
                  Get Wholesale Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
