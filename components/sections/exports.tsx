import Image from "next/image"

export default function ExportsSection() {
  return (
    <section className="py-12" style={{ backgroundColor: "#FAF9F6" }}>
      <div className="container grid gap-8 md:grid-cols-2 items-center">
        <div>
          <h2 className="h-display text-2xl sm:text-3xl text-[#1B4332]">Supplying to the World</h2>
          <p className="mt-2 text-[#2B2B2B]">
            Export-ready capabilities with certifications: Spices Board India, ISO, Organic, FSSAI.
          </p>
          <a
            href="/wholesale"
            className="mt-4 inline-flex items-center rounded-md px-4 py-2 text-sm font-semibold"
            style={{ backgroundColor: "#C89B3C", color: "#FFFFFF" }}
          >
            Request a Quote
          </a>
        </div>
        <div className="overflow-hidden rounded-xl bg-white shadow-sm">
          <Image
            src="/images/exports-bulk-sacks.png"
            alt="Bulk cardamom sacks ready for international shipment"
            width={1400}
            height={900}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  )
}
