import ScrollRevealText from "@/components/ScrollRevealText"

const ABOUT_TEXT =
  "Our story began in the mist-covered hills of Idukki in the 1960s, when our grandfather arrived with little more than determination and a dream. Through years of perseverance, he transformed untamed land into thriving spice plantations, discovering the true potential of pepper and cardamom. Today, as the third generation, we proudly carry this legacy forward. Alongside the spices grown on our own plantations, we carefully source premium cardamom from trusted local farmers who share our commitment to quality. Every harvest reflects our heritage, every spice tells a story, and every pack brings the authentic taste of Idukki to your kitchen."
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
