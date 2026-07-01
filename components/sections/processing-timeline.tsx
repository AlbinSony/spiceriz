import { CookingPot, Leaf, Package, Sparkles, Sprout, SunMedium } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"

const steps = [
  {
    icon: Sprout,
    title: "Farm",
  },
  {
    icon: SunMedium,
    title: "Sun Dry",
  },
  {
    icon: Leaf,
    title: "Cleaning",
  },
  {
    icon: CookingPot,
    title: "Grinding",
  },
  {
    icon: Package,
    title: "Packing",
  },
]

export function ProcessingTimeline() {
  return (
    <section
      id="processing"
      className="relative isolate overflow-hidden bg-[#fbf8f2] px-0 pb-14 pt-2 sm:pb-[4.5rem] lg:pb-20"
    >
      <div className="container relative z-10">
        <Reveal>
          <div className="relative overflow-hidden rounded-[12px] border border-[#eee3cf] bg-[#f3f2de] px-5 py-9 shadow-[0_24px_70px_rgba(45,63,34,0.08)] sm:px-8 sm:py-10 lg:px-12">
            <Texture />

            <div className="relative mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-[clamp(2rem,4.7vw,3rem)] font-semibold leading-tight text-[#173f23]">
                Spice Processing
              </h2>
              <span className="mx-auto mt-3 block h-[3px] w-10 rounded-full bg-[#d64b2a]" />
              <p className="mx-auto mt-4 max-w-[500px] text-[13px] font-medium leading-7 text-[#243628]/80 sm:text-sm">
                From farm to finish - carefully cleaned, sorted, ground and packed to lock in freshness.
              </p>
            </div>

            <div className="relative mt-9 grid gap-5 sm:mt-10 md:grid-cols-5 md:gap-0">
              {steps.map(({ icon: Icon, title }, index) => (
                <Reveal key={title} delay={index * 0.06}>
                  <div className="group relative flex min-h-[122px] items-center gap-4 rounded-[10px] border border-[#e7dec9] bg-[#fffaf1]/86 px-5 py-5 shadow-[0_14px_35px_rgba(45,63,34,0.05)] transition-all duration-500 hover:-translate-y-1 hover:border-[#83a156] hover:bg-[#fffaf1] md:min-h-[150px] md:flex-col md:justify-center md:gap-3 md:border-transparent md:bg-transparent md:px-3 md:shadow-none md:hover:bg-[#fffaf1]/72 md:hover:shadow-[0_16px_38px_rgba(45,63,34,0.08)]">
                    <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#d9cca9] bg-[#fff7df] text-[#607f25] transition-all duration-500 group-hover:scale-105 group-hover:border-[#7f9b45] md:h-20 md:w-20">
                      <Icon strokeWidth={1.65} className="h-9 w-9 md:h-11 md:w-11" />
                    </span>
                    <h3 className="text-[13px] font-extrabold text-[#1d3024] md:text-center">{title}</h3>
                    {index < steps.length - 1 && (
                      <span className="absolute left-[37px] top-[calc(100%+2px)] h-5 w-px bg-[#aebb82] sm:hidden" />
                    )}
                    {index < steps.length - 1 && (
                      <span className="absolute right-[-18px] top-1/2 hidden w-9 -translate-y-1/2 items-center md:flex lg:right-[-26px] lg:w-12">
                        <span className="h-px flex-1 bg-[#aebb82]" />
                        <span className="h-1.5 w-1.5 rotate-45 border-r border-t border-[#aebb82]" />
                      </span>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Texture() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(117,145,77,0.12),transparent_28%),radial-gradient(circle_at_84%_64%,rgba(209,74,42,0.07),transparent_26%)]" />
      <Sparkles className="absolute left-6 top-6 h-16 w-16 text-[#d7ccb7]/60" strokeWidth={1} />
      <Leaf className="absolute right-[-24px] top-[-12px] h-28 w-28 rotate-[-22deg] text-[#466b27]/42" strokeWidth={1.3} />
      <Leaf className="absolute bottom-[-30px] left-[-22px] h-28 w-28 rotate-[42deg] text-[#466b27]/34" strokeWidth={1.3} />
      <span className="absolute bottom-7 right-8 h-3 w-3 rounded-full bg-[#4b3524] shadow-[26px_-15px_0_#2f241a,44px_16px_0_#6a4a32]" />
    </div>
  )
}
