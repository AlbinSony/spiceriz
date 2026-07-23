import ScrollRevealText from "@/components/ScrollRevealText"

const ABOUT_TEXT =
  `Our journey starts from the 1960s, in the mist-covered hills of Idukki, where our grandfather arrived with a strong  determination and a mind full of dream. Through years of perseverance, he transformed the untamed land into thriving spice plantations, discovering the true potential of coffee,pepper and cardamom. Today, as the third generation, we proudly carry this legacy forward.
Alongside the spices grown on our own
plantations, we carefully source premium cardamom from trusted local farmers who possess the same commitment in quality. Every harvest reflects our heritage, every spice tells a story, and every pack brings the authentic taste of Idukki to the kitchens...`
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
