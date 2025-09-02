import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const form = await req.formData()
  const payload = Object.fromEntries(form.entries())
  console.log("[v0] Wholesale inquiry:", payload)
  // Placeholder for CRM/export workflow integration
  // Implement CRM/export logic here
  return NextResponse.json({ ok: true })
}
