import { Award, Leaf, ShieldCheck, Truck } from "lucide-react"
import { Reveal } from "@/components/ui/reveal"

const features = [
  {
    icon: Leaf,
    title: "100% Natural",
    text: "Pure spices with no additives or chemicals.",
  },
  {
    icon: ShieldCheck,
    title: "Premium Quality",
    text: "Handpicked and carefully processed.",
  },
  {
    icon: Award,
    title: "Export Standards",
    text: "Meeting international quality benchmarks.",
  },
  {
    icon: Truck,
    title: "Worldwide Delivery",
    text: "Reliable packaging and on-time worldwide delivery.",
  },
]

export function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="relative isolate overflow-hidden bg-[#fbf8f2] px-0 pb-10 pt-10 sm:pb-14 sm:pt-14 lg:pb-16 lg:pt-14"
    >
      <BotanicalFrame />

      <div className="container relative z-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#315d27]">
            <span className="h-px w-5 bg-[#7f9b5b]" />
            Why Choose Us
            <span className="h-px w-5 bg-[#7f9b5b]" />
          </span>
          <h2 className="mt-3 font-serif text-[clamp(2.15rem,9.5vw,3rem)] font-semibold leading-tight text-[#173f23] sm:hidden">
            Rooted in <span className="text-[#5b8c2f]">Purity</span>,
            <br />
            Driven
            <br />
            by <span className="text-[#5b8c2f]">Quality</span>
          </h2>
          <h2 className="mt-3 hidden font-serif text-[clamp(2rem,5vw,3.05rem)] font-semibold leading-tight text-[#173f23] sm:block">
            Rooted in <span className="text-[#5b8c2f]">Purity</span>, Driven by{" "}
            <span className="text-[#5b8c2f]">Quality</span>
          </h2>
          <span className="mx-auto mt-4 block h-[3px] w-12 rounded-full bg-[#d64b2a]" />
        </Reveal>

        <div className="mx-auto mt-9 grid max-w-6xl gap-5 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4 lg:gap-7">
          {features.map(({ icon: Icon, title, text }, index) => (
            <Reveal key={title} delay={index * 0.08}>
              <article className="group relative flex min-h-[218px] flex-col items-center justify-center overflow-hidden rounded-[10px] border border-[#eadfcd] bg-[#fffaf1] px-6 py-8 text-center shadow-[0_18px_40px_rgba(44,55,34,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_55px_rgba(44,55,34,0.1)]">
                <span className="absolute inset-0 rounded-[10px] border border-transparent transition-colors duration-500 group-hover:border-[#6f9347]" />
                <span className="absolute left-0 top-0 h-[3px] w-0 bg-[#d64b2a] transition-all duration-500 group-hover:w-full" />
                <Icon
                  strokeWidth={1.7}
                  className="h-14 w-14 text-[#5e872f] transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-105"
                />
                <h3 className="mt-6 text-[15px] font-extrabold text-[#1c2f22]">{title}</h3>
                <p className="mt-3 max-w-[170px] text-[12px] font-medium leading-6 text-[#344131]/75">{text}</p>
                {index === 1 && <span className="mt-3 h-1.5 w-3 rounded-full bg-[#d64b2a]" />}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function BotanicalFrame() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
      <Leaf className="absolute right-[-18px] top-[110px] h-28 w-28 rotate-[-26deg] text-[#d9d1bf]/55" strokeWidth={1} />
      <Leaf className="absolute bottom-4 left-[-28px] h-32 w-32 rotate-[38deg] text-[#476d24]/45" strokeWidth={1.2} />
      <Leaf className="absolute bottom-[-20px] right-[-6px] h-24 w-24 rotate-[-34deg] text-[#476d24]/50" strokeWidth={1.2} />
      <span className="absolute bottom-28 left-9 h-3 w-3 rounded-full bg-[#34271c] shadow-[32px_6px_0_#4b3524,calc(100vw-95px)_124px_0_#4b3524,calc(100vw-62px)_108px_0_#2e2219]" />
    </div>
  )
}
