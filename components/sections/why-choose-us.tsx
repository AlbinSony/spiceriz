"use client"

import { CldImage } from "next-cloudinary"

const features = [
  {
    num: "01",
    title: "100% Natural",
    desc: "Pure spices with no additives or chemicals.",
    stickyTop: "top-[100px]"
  },
  {
    num: "02",
    title: "Premium Quality",
    desc: "Handpicked and carefully processed for the best quality.",
    stickyTop: "top-[130px]"
  },
  {
    num: "03",
    title: "Export Standards",
    desc: "Meeting international quality benchmarks.",
    stickyTop: "top-[160px]"
  },
  {
    num: "04",
    title: "Timely Delivery",
    desc: "Reliable packaging and on-time worldwide delivery.",
    stickyTop: "top-[190px]"
  }
]

export function WhyChooseUs() {
  return (
    <section id="about" className="font-general-sans bg-[#fbf8f2] py-16 md:py-24 lg:py-28 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16 items-start">
          {/* Left Column: Text Content and Features Grid */}
          <div className="flex flex-col justify-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#234f2c]">
                Why Choose Us
              </h2>
              <p className="mt-5 text-base md:text-lg text-[#203020]/75 font-medium leading-relaxed">
                Pure spices. Honest process.<br />
                Trusted by people worldwide.
              </p>
            </div>

            {/* Mobile: stacking column layout | Desktop: 2x2 grid */}
            <div className="flex flex-col gap-6 mt-12 lg:grid lg:grid-cols-2 lg:gap-6 lg:mt-14">
              {features.map((item) => (
                <div
                  key={item.num}
                  className={`sticky ${item.stickyTop} lg:relative lg:top-auto bg-[#f7f4ec] border border-[rgba(35,79,44,0.08)] rounded-[20px] p-6 shadow-[0_10px_25px_rgba(35,79,44,0.03)] transition-all duration-300 hover:shadow-[0_15px_35px_rgba(35,79,44,0.06)]`}
                >
                  <span className="text-5xl font-semibold text-[#234f2c] leading-none">{item.num}</span>
                  <h3 className="mt-4 text-base md:text-lg font-semibold text-[#203020]">{item.title}</h3>
                  <div className="mt-3 w-8 h-[2px] bg-[#5b8c51]" />
                  <p className="mt-3 text-sm text-[#203020]/70 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="relative aspect-square lg:aspect-[4/5] w-full max-w-[420px] lg:justify-self-end overflow-hidden rounded-[24px] border border-[rgba(35,79,44,0.08)] shadow-[0_15px_40px_rgba(35,79,44,0.06)] min-h-[350px] sm:min-h-[450px] lg:min-h-[500px] lg:sticky lg:top-24">
            <CldImage
              src="why-choose-us_lzix4l"
              alt="Assorted spices on a dark slate background"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}


