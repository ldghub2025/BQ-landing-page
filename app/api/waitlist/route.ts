import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    // Log the waitlist signup
    console.log("[v0] Waitlist signup:", email, new Date().toISOString())

    // TODO: Store in database (Supabase, Airtable, etc.)
    // Example: await supabase.from('waitlist').insert({ email, created_at: new Date() })

    // TODO: Optional - Send confirmation email via Resend/SendGrid
    // Example: await resend.emails.send({ to: email, subject: "Welcome to BetterQs!", ... })

    return NextResponse.json({ success: true, message: "Successfully joined waitlist" })
  } catch (error) {
    console.error("[v0] Waitlist signup error:", error)
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 })
  }
}
