import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // In a production environment, you would integrate with an email service here
    // For now, we'll log the message and return success
    // TODO: Integrate with email service (e.g., Resend, SendGrid, etc.) to send to dima.graber@gmail.com

    console.log("[v0] Contact form submission:", {
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
      recipientEmail: "dima.graber@gmail.com",
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error("[v0] Error processing contact form:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
