import Image from "next/image"

export function AboutSection() {
  return (
    <section className="py-12" style={{ backgroundColor: "#FAF9F6" }}>
      <div className="container grid gap-8 md:grid-cols-2 items-center">
        <div className="order-2 md:order-1">
          <h2 className="h-display text-2xl sm:text-3xl text-[#1B4332]">About Puttady Spices</h2>
          <div className="mt-2 h-1 w-12 rounded" style={{ backgroundColor: "#C89B3C" }} />
          <p className="mt-4 text-[#2B2B2B]">
            From Idukki’s lush plantations, we deliver premium cardamom and Kerala spices with uncompromising quality
            and authenticity.
          </p>
        </div>
        <div className="order-1 md:order-2 overflow-hidden rounded-xl bg-white shadow-sm">
          <Image
            src="/images/about-farmers.png"
            alt="Farmers handpicking cardamom pods in Kerala plantations"
            width={1200}
            height={800}
            className="w-full h-auto object-cover transition-transform duration-500 hover:scale-[1.01]"
          />
        </div>
      </div>
    </section>
  )
}
