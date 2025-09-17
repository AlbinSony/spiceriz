import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "Wholesale & Export Inquiry | Idukki Spices",
  description: "Request a wholesale/export quote for Idukki cardamom and Kerala spices from Idukki Spices.",
}

export default function WholesalePage() {
  return (
    <main>
      <SiteHeader />
      <section className="w-full" style={{ backgroundColor: "#1B4332", color: "#FFFFFF" }}>
        <div className="container py-8">
          <h1 className="h-display text-3xl">Wholesale & Export Inquiry</h1>
          <p className="mt-2 max-w-2xl">
            Share your requirements and we’ll get back with best pricing, certifications, and logistics details.
          </p>
        </div>
      </section>

      <section className="container py-10" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="rounded-xl bg-white p-6 shadow-sm border" style={{ borderColor: "#EAEAEA" }}>
          <form action="/api/wholesale" method="post" className="grid gap-3 md:grid-cols-2">
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
            <textarea
              className="min-h-28 rounded-md border px-3 py-2 text-sm bg-white md:col-span-2"
              name="message"
              placeholder="Additional details"
              style={{ borderColor: "#40916C" }}
            />
            <button
              type="submit"
              className="mt-2 w-fit rounded-md px-5 py-2 text-sm font-semibold transition-colors"
              style={{ backgroundColor: "#C89B3C", color: "#1B4332" }}
            >
              Submit
            </button>
          </form>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
