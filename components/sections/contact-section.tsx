"use client"

export function ContactSection() {
  return (
    <section id="contact" className="py-12" style={{ backgroundColor: "#F3F7F5" }}>
      <div className="container grid gap-8 md:grid-cols-2">
        <div className="bg-[#E6F9E6]">
          <h2 className="h-display text-2xl sm:text-3xl text-[#1B4332]">Get in Touch</h2>
          <p className="mt-2 text-[#2B2B2B]">
            Questions about wholesale, exports, or retail orders? We’re here to help.
          </p>
          <div className="mt-4 overflow-hidden rounded-md bg-white">
            <img
              src="/images/contact-idukki-map.png"
              alt="Puttady, Idukki, Kerala"
              className="h-full w-full object-contain p-2"
            />
          </div>
          <ul className="mt-4 text-sm text-[#2B2B2B]">
            <li>
              Phone:{" "}
              <a className="underline" href="tel:+911234567890">
                +91 12345 67890
              </a>
            </li>
            <li>
              Email:{" "}
              <a className="underline" href="mailto:hello@puttadyspices.com">
                hello@puttadyspices.com
              </a>
            </li>
          </ul>
        </div>

        <div className="rounded-xl bg-white p-5 shadow-sm border" style={{ borderColor: "#40916C" }}>
          <h3 className="font-serif text-lg text-[#1B4332]">Contact Form</h3>
          <form action="/api/contact" method="post" className="mt-4 grid gap-3">
            <input
              className="rounded-md border px-3 py-2 text-sm bg-white"
              name="name"
              placeholder="Name"
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
              name="phone"
              placeholder="Phone"
              style={{ borderColor: "#40916C" }}
            />
            <textarea
              className="min-h-28 rounded-md border px-3 py-2 text-sm bg-white"
              name="message"
              placeholder="Message"
              style={{ borderColor: "#40916C" }}
            />
            <button
              type="submit"
              className="mt-2 w-fit rounded-md px-4 py-2 text-sm font-medium text-white transition-colors"
              style={{ backgroundColor: "#1B4332" }}
              onMouseOver={(e) => (
                (e.currentTarget.style.backgroundColor = "#C89B3C"), (e.currentTarget.style.color = "#1B4332")
              )}
              onMouseOut={(e) => (
                (e.currentTarget.style.backgroundColor = "#1B4332"), (e.currentTarget.style.color = "#FFFFFF")
              )}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
