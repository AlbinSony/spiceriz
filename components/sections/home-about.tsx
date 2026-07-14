import ScrollRevealText from "@/components/ScrollRevealText"

const ABOUT_TEXT =
  "For four generations, our family has walked the same red-soil hills where cardamom, pepper, and turmeric have grown since before memory. We harvest by hand, dry slowly in open air, and grind only in small batches so nothing loses its oil to time. Every jar that leaves our estate carries the exact aroma of the morning it was picked. We work directly with forty smallholder farms across the Western Ghats, paying above market rate for quality over yield. What reaches your kitchen has touched only two hands — the farmer's, and yours. This is not an industry. It is a promise, kept one harvest at a time."

export function HomeAbout() {
  return (
    <div id="about">
      <ScrollRevealText
        text={ABOUT_TEXT}
        heading="About Us"
        buttonText="Know More"
        buttonHref="/about"
        className="bg-[#fbf8f2] text-[var(--color-primary)]"
      />
    </div>
  )
}
