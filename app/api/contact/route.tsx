import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message, company } = body

    console.log("[v0] Contact form submission received:", { name, email, hasMessage: !!message })

    if (company) {
      console.log("[v0] Spam detected via honeypot field")
      return NextResponse.json({ error: "Spam detected" }, { status: 400 })
    }

    // Validate required fields
    if (!name || !email || !message) {
      console.log("[v0] Missing required fields")
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      console.log("[v0] Invalid email format")
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    const { data, error } = await resend.emails.send({
      from: process.env.CONTACT_FROM || "BetterQs <dima.graber@gmail.com>",
      to: process.env.CONTACT_TO || "dima.graber@gmail.com",
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p><em>Submitted at ${new Date().toISOString()}</em></p>
      `,
    })

    if (error) {
      console.error("[v0] Resend error:", error)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }

    console.log("[v0] Email sent successfully:", data)
    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error("[v0] Error processing contact form:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
