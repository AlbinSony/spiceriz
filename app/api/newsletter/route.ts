import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const form = await req.formData()
  const email = String(form.get("email") || "")
  console.log("[v0] Newsletter signup:", email)
  return NextResponse.json({ ok: true })
}
