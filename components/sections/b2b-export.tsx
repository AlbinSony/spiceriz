import Link from "next/link"
import { BadgeCheck, FileCheck, Globe } from "lucide-react"

export function B2BExport() {
  return (
    <section id="b2b" className="py-12" style={{ backgroundColor: "#FAF9F6" }}>
      <div className="container grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="h-display text-2xl sm:text-3xl text-[#1B4332]">Supplying to the World</h2>
          <p className="mt-3 text-[#2B2B2B]">
            We export premium cardamom and Kerala spices globally with rigorous quality control. Certifications include
            Spices Board India, FSSAI, ISO, and Organic options.
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <BadgeCheck className="h-4 w-4" color="#40916C" /> Spices Board India
            </li>
            <li className="flex items-center gap-2">
              <FileCheck className="h-4 w-4" color="#40916C" /> FSSAI & ISO
            </li>
            <li className="flex items-center gap-2">
              <Globe className="h-4 w-4" color="#40916C" /> Organic certification (on request)
            </li>
          </ul>
          <div className="mt-5">
            <Link
              href="/wholesale"
              className="rounded-md px-4 py-2 text-sm font-semibold"
              style={{ backgroundColor: "#C89B3C", color: "#FFFFFF" }}
            >
              Request a Quote
            </Link>
          </div>
        </div>

        <div className="rounded-xl bg-white p-5 shadow-sm border" style={{ borderColor: "#EAEAEA" }}>
          <h3 className="font-serif text-lg text-[#1B4332]">Wholesale / Export Inquiry</h3>
          <form action="/api/wholesale" method="post" className="mt-4 grid gap-3">
            <input
              className="rounded-md border px-3 py-2 text-sm bg-white"
              name="name"
              placeholder="Name"
              required
              style={{ borderColor: "#40916C" }}
            />
            <input
              className="rounded-md border px-3 py-2 text-sm bg-white"
              name="company"
              placeholder="Company"
              required
              style={{ borderColor: "#40916C" }}
            />
            <input
              className="rounded-md border px-3 py-2 text-sm bg-white"
              name="country"
              placeholder="Country"
              required
              style={{ borderColor: "#40916C" }}
            />
            <input
              className="rounded-md border px-3 py-2 text-sm bg-white"
              name="quantity"
              placeholder="Required Quantity"
              required
              style={{ borderColor: "#40916C" }}
            />
            <input
              className="rounded-md border px-3 py-2 text-sm bg-white"
              name="email"
              type="email"
              placeholder="Email"
              required
              style={{ borderColor: "#40916C" }}
            />
            <input
              className="rounded-md border px-3 py-2 text-sm bg-white"
              name="whatsapp"
              placeholder="WhatsApp"
              required
              style={{ borderColor: "#40916C" }}
            />
            <button
              type="submit"
              className="mt-2 rounded-md px-4 py-2 text-sm font-semibold"
              style={{ backgroundColor: "#C89B3C", color: "#1B4332" }}
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
