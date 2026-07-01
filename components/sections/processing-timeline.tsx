import Image from "next/image"

const steps = [
  {
    img: "/images/handpicked.png",
    title: "Handpicked",
  },
  {
    img: "/images/drying.png",
    title: "Sun Dried",
  },
  {
    img: "/images/cleaning.png",
    title: "Cleaned & Sorted",
  },
  {
    img: "/images/grinding.png",
    title: "Ground",
  },
  {
    img: "/images/export.png",
    title: "Packed",
  },
]

export function ProcessingTimeline() {
  return (
    <section id="processing" className="relative isolate overflow-hidden bg-[#fbf8f2] pb-20 pt-4">
      <Image
        src="/images/left-leaf.png"
        alt=""
        width={260}
        height={260}
        className="pointer-events-none absolute bottom-0 left-0 z-0 w-[150px] object-contain sm:w-[210px] lg:w-[260px]"
      />
      <Image
        src="/images/right-leaf.png"
        alt=""
        width={260}
        height={260}
        className="pointer-events-none absolute right-0 top-12 z-0 w-[130px] object-contain sm:w-[190px] lg:w-[250px]"
      />

      <span
        aria-hidden="true"
        className="absolute bottom-[116px] left-[28px] z-0 h-3 w-3 rounded-full bg-[#3b2a1d] shadow-[32px_10px_0_#5a3d28,calc(100vw-70px)_110px_0_#5a3d28,calc(100vw-40px)_88px_0_#33251b]"
      />

      <div className="container relative z-10">
        <div className="mx-auto max-w-[1060px] rounded-[8px] bg-[#f3f2de] px-5 py-11 shadow-[0_18px_50px_rgba(49,39,23,0.06)] sm:px-8 lg:px-12">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="font-serif text-[clamp(2rem,5vw,2.85rem)] font-semibold leading-tight text-[#173f23]">
              Spice Processing
            </h2>
            <span className="mx-auto mt-3 block h-[3px] w-10 rounded-full bg-[#d64b2a]" />
            <p className="mx-auto mt-4 max-w-[470px] text-[13px] font-medium leading-7 text-[#26352b]/85 sm:text-sm">
              From farm to finish - carefully cleaned, sorted,
              <br className="hidden sm:block" />
              ground and packed to lock in freshness.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:mt-12 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] md:items-end md:gap-4">
            {steps.map((step, index) => (
              <Step key={step.title} {...step} showArrow={index < steps.length - 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Step({ img, title, showArrow }: { img: string; title: string; showArrow: boolean }) {
  return (
    <>
      <div className="flex flex-col items-center text-center">
        <div className="relative h-[70px] w-[76px] sm:h-[78px] sm:w-[86px]">
          <Image src={img} alt="" fill className="object-contain" sizes="90px" />
        </div>
        <h3 className="mt-3 text-[14px] font-extrabold leading-tight text-[#14281c]">{title}</h3>
      </div>
      {showArrow && (
        <div className="hidden pb-9 text-center text-[22px] leading-none text-[#9daf70] md:block" aria-hidden="true">
          --
          <span className="ml-1">&gt;</span>
        </div>
      )}
    </>
  )
}
