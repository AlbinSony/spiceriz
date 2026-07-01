import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Leaf, Sparkles, ShieldCheck } from "lucide-react"
import { Parallax, Reveal } from "@/components/ui/reveal"

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate min-h-[calc(100dvh-4rem)] overflow-hidden bg-[#fbf8f2] sm:min-h-[650px] md:min-h-[560px] lg:min-h-[610px] xl:min-h-[660px]"
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

      <div className="container relative z-10 flex min-h-[calc(100dvh-4rem)] items-center pb-24 pt-16 sm:min-h-[650px] sm:pt-12 md:min-h-[560px] md:pb-20 lg:min-h-[610px] xl:min-h-[660px]">
        <Reveal className="w-full max-w-[430px] sm:max-w-[500px] lg:max-w-[520px]" y={28}>
          <div className="inline-flex items-center gap-3.5 rounded-lg border border-[#e8dfd3] bg-[#fffaf4]/80 px-3.5 py-1.5 shadow-[0_2px_12px_rgba(23,63,35,0.03)] backdrop-blur-[2px] sm:gap-4 sm:px-4">
            <span className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#173f23] sm:text-[12px]">
              <Leaf className="h-3.5 w-3.5 text-[#5b8c2f] stroke-[2.2]" />
              Natural
            </span>
            <span className="h-3.5 w-px bg-[#e8dfd3]" />
            <span className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#173f23] sm:text-[12px]">
              <Sparkles className="h-3.5 w-3.5 text-[#bfa17a] stroke-[2.2]" />
              Premium
            </span>
            <span className="h-3.5 w-px bg-[#e8dfd3]" />
            <span className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#173f23] sm:text-[12px]">
              <ShieldCheck className="h-3.5 w-3.5 text-[#5b8c2f] stroke-[2.2]" />
              Trusted
            </span>
          </div>

          <h1 className="mt-4 font-serif text-[clamp(2.25rem,10vw,3.15rem)] font-bold leading-[1.06] tracking-tight text-[#173f23] sm:hidden">
            Pure Indian Spices
            <br />
            <span className="font-normal italic text-[#5b8c2f]">from our farms</span>
            <br />
            to Your Home
          </h1>
          <h1 className="mt-4 hidden font-serif text-[clamp(3.15rem,6.2vw,4.25rem)] font-bold leading-[1.06] tracking-tight text-[#173f23] sm:block md:text-[clamp(3.15rem,4.5vw,4.10rem)] xl:text-[4.5rem]">
            Pure Indian Spices
            <br />
            <span className="font-normal italic text-[#5b8c2f]">from our farms</span> to Your Home
          </h1>

          <p className="mt-5 max-w-[320px] text-[14.5px] font-medium leading-[1.65] text-[#213629]/80 sm:max-w-[390px] sm:text-[16px]">
            From the lap of nature to your kitchen — experience the pure aroma, rich color, and authentic taste of India's finest spices.
          </p>

          <div className="mt-8 flex flex-wrap gap-3.5">
            <Link
              href="#products"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-[6px] bg-[#123d26] px-6 text-[13.5px] font-bold text-[#fff8ec] shadow-[0_16px_30px_rgba(18,61,38,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#5b8c2f]"
            >
              Explore Products
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="#why-choose-us"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-[6px] border border-[#d6dccf] bg-[rgba(251,248,242,0.82)] px-6 text-[13.5px] font-bold text-[#173f23] shadow-[0_14px_28px_rgba(35,79,44,0.1)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#173f23] hover:bg-[#fffaf0]"
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
