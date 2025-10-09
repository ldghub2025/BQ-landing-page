import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message, company } = body

    if (company) {
      console.log("[v0] Spam detected via honeypot field")
      return NextResponse.json({ success: false, error: "Invalid submission" }, { status: 400 })
    }

    // Validate required fields
    if (!email || !message) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 })
    }

    const recipientEmail = process.env.CONTACT_TO
    const fromEmail = process.env.CONTACT_FROM || "BetterQs <onboarding@resend.dev>"

    if (!recipientEmail) {
      console.error("[v0] CONTACT_TO environment variable not set")
      return NextResponse.json({ success: false, error: "Email configuration error" }, { status: 500 })
    }

    await resend.emails.send({
      from: fromEmail,
      to: recipientEmail,
      replyTo: email,
      subject: `BetterQs contact from ${name || "Someone"}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name || "Not provided"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    })

    console.log("[v0] Contact form email sent successfully to:", recipientEmail)

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error("[v0] Error processing contact form:", error)
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 })
  }
}
