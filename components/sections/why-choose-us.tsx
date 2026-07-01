import type { SVGProps } from "react"

const features = [
  {
    icon: NaturalIcon,
    title: "100% Natural",
    text: "Pure spices with no additives or chemicals.",
  },
  {
    icon: QualityIcon,
    title: "Premium Quality",
    text: "Handpicked and carefully processed.",
  },
  {
    icon: StandardsIcon,
    title: "Export Standards",
    text: "Meeting international quality benchmarks.",
  },
  {
    icon: DeliveryIcon,
    title: "Timely Delivery",
    text: "Reliable packaging and on-time worldwide delivery.",
  },
]

export function WhyChooseUs() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-[#fbf8f2] pb-14 pt-12 sm:pb-16 sm:pt-14 lg:pb-20 lg:pt-16"
    >
      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.08em] text-[#14281c]">
            <span className="text-[#6f8e35]">-&gt;</span>
            Why Choose Us
            <span className="text-[#6f8e35]">&lt;-</span>
          </span>
          <h2 className="mt-2 font-serif text-[clamp(2rem,7vw,3rem)] font-semibold leading-tight text-[#173f23]">
            Rooted in <span className="text-[#5b8c2f]">Purity</span>, Driven by{" "}
            <span className="text-[#5b8c2f]">Quality</span>
          </h2>
          <span className="mx-auto mt-4 block h-[3px] w-11 rounded-full bg-[#d64b2a]" />
        </div>

        <div className="mx-auto mt-11 grid max-w-[1060px] gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {features.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="flex min-h-[210px] flex-col items-center justify-center rounded-[8px] border border-[#e9decb] bg-[#fffaf2] px-6 py-8 text-center shadow-[0_12px_30px_rgba(49,39,23,0.06)]"
            >
              <Icon className="h-[58px] w-[58px] text-[#5f872f]" />
              <h3 className="mt-6 text-[15px] font-extrabold leading-tight text-[#15261d]">{title}</h3>
              <p className="mt-4 max-w-[170px] text-[12px] font-medium leading-[1.65] text-[#26352b]/80">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function NaturalIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" {...props}>
      <path d="M31.5 54V22" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path
        d="M30 27c-11.5 1.4-18.4-6.3-20.4-17.7C21.7 9 30.4 15.4 30 27Z"
        fill="currentColor"
        opacity="0.92"
      />
      <path
        d="M36 30c11.5.6 17.5-7.9 18.2-19.4C42.4 11.5 34.6 18.8 36 30Z"
        fill="currentColor"
        opacity="0.92"
      />
      <path d="M31.5 36c-5.5-8.8-13-14.8-21-18.4" stroke="#fffaf2" strokeWidth="2" strokeLinecap="round" />
      <path d="M35.5 37c4.8-8.4 11.6-14 18.2-17.2" stroke="#fffaf2" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function QualityIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" {...props}>
      <path
        d="M32 6 51 14v14.2C51 41.7 43.5 51 32 58 20.5 51 13 41.7 13 28.2V14l19-8Z"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinejoin="round"
      />
      <path d="M32 11.5v40" stroke="currentColor" strokeWidth="2" opacity="0.35" />
      <path d="m23.5 31.5 5.8 5.8 12-13.2" stroke="currentColor" strokeWidth="3.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function StandardsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" {...props}>
      <path
        d="m32 5 5.2 5.5 7.5-1.1 2.2 7.2 7 3-2.9 7 3.6 6.7-6.5 3.9-.5 7.6-7.6.5-4 6.5-6.6-3.6-7 2.9-3-7-7.2-2.2 1.1-7.5L5.8 32l5.5-5.2-1.1-7.5 7.2-2.2 3-7 7 2.9L32 5Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <circle cx="32" cy="30" r="10.5" stroke="currentColor" strokeWidth="3" />
      <path d="m27.5 30.5 3.2 3.1 6-7" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m24.5 46-3.2 12 10.7-5.1L42.7 58l-3.2-12" fill="currentColor" opacity="0.9" />
    </svg>
  )
}

function DeliveryIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" {...props}>
      <path d="M5 18h28v24H5" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M33 26h12l8 8v8H33V26Z" fill="currentColor" opacity="0.95" />
      <path d="M11 24H2M16 31H5M20 38H9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <circle cx="19" cy="46" r="5" fill="currentColor" />
      <circle cx="45" cy="46" r="5" fill="currentColor" />
    </svg>
  )
}
