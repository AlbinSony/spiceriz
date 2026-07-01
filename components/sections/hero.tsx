import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Parallax, Reveal } from "@/components/ui/reveal"

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate min-h-[620px] overflow-hidden bg-[#fbf8f2] sm:min-h-[650px] md:min-h-[560px] lg:min-h-[610px] xl:min-h-[660px]"
    >
      <Parallax className="absolute -inset-x-0 -inset-y-8" strength={22}>
        <div className="absolute inset-0 hidden md:block">
          <Image
            src="/images/herobgdesktop.png"
            alt="Premium Indian spices presentation"
            fill
            priority
            className="object-cover object-[58%_50%]"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 md:hidden">
          <Image
            src="/images/herobgmobile.png"
            alt="Premium Indian spices presentation"
            fill
            priority
            className="object-cover object-[62%_50%]"
            sizes="100vw"
          />
        </div>
      </Parallax>

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(251,248,242,0.94)_0%,rgba(251,248,242,0.78)_31%,rgba(251,248,242,0.2)_58%,rgba(251,248,242,0)_100%)] md:bg-[linear-gradient(90deg,rgba(251,248,242,0.92)_0%,rgba(251,248,242,0.7)_31%,rgba(251,248,242,0.12)_55%,rgba(251,248,242,0)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_47%,rgba(251,248,242,0.86)_0%,rgba(251,248,242,0.5)_24%,rgba(251,248,242,0)_52%)]" />
      <div className="absolute inset-x-0 bottom-0 h-20 bg-[#fbf8f2] [clip-path:polygon(0_60%,8%_56%,17%_64%,27%_48%,39%_58%,50%_44%,61%_52%,73%_38%,84%_47%,93%_34%,100%_42%,100%_100%,0_100%)] sm:h-24 md:h-28" />

      <div className="container relative z-10 flex min-h-[620px] items-center pb-24 pt-16 sm:min-h-[650px] sm:pt-12 md:min-h-[560px] md:pb-20 lg:min-h-[610px] xl:min-h-[660px]">
        <Reveal className="w-full max-w-[430px] sm:max-w-[500px] lg:max-w-[520px]" y={28}>
          <span className="text-[12px] font-extrabold uppercase tracking-[0.08em] text-[#5b8c2f] sm:text-[13px]">
            NATURAL&nbsp;&nbsp;+&nbsp;&nbsp;PREMIUM&nbsp;&nbsp;+&nbsp;&nbsp;TRUSTED
          </span>

          <h1 className="mt-3 font-serif text-[clamp(2.75rem,11.4vw,3.8rem)] font-bold leading-[0.98] text-[#173f23] sm:hidden">
            Pure Indian
            <br />
            Spices
            <br />
            From Our Farms
            <br />
            to <span className="text-[#5b8c2f]">Your Home</span>
          </h1>
          <h1 className="mt-3 hidden font-serif text-[clamp(3.25rem,6.6vw,4.45rem)] font-bold leading-[0.98] text-[#173f23] sm:block md:text-[clamp(3.25rem,4.8vw,4.25rem)] xl:text-[4.55rem]">
            Pure Indian Spices
            <br />
            From Our Farms
            <br />
            to <span className="text-[#5b8c2f]">Your Home</span>
          </h1>

          <p className="mt-5 max-w-[310px] text-[14px] font-medium leading-[1.75] text-[#213629]/85 sm:max-w-[370px] sm:text-[15px]">
            From the lap of nature to your kitchen - experience the purity, aroma, and taste of India's finest spices.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="#products"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-[5px] bg-[#123d26] px-5 text-[13px] font-bold text-[#fff8ec] shadow-[0_16px_30px_rgba(18,61,38,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#5b8c2f]"
            >
              Explore Products
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="#why-choose-us"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-[5px] border border-[#d6dccf] bg-[rgba(251,248,242,0.82)] px-5 text-[13px] font-bold text-[#173f23] shadow-[0_14px_28px_rgba(35,79,44,0.1)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#173f23] hover:bg-[#fffaf0]"
            >
              Learn More
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
