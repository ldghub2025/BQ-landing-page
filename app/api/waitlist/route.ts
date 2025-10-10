import { NextResponse } from "next/server"
import { writeFile, readFile, mkdir } from "fs/promises"
import { existsSync } from "fs"
import path from "path"

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    const dataDir = path.join(process.cwd(), "data")
    const csvPath = path.join(dataDir, "waitlist.csv")

    // Create data directory if it doesn't exist
    if (!existsSync(dataDir)) {
      await mkdir(dataDir, { recursive: true })
    }

    // Create CSV with headers if it doesn't exist
    if (!existsSync(csvPath)) {
      await writeFile(csvPath, "email,timestamp\n", "utf-8")
    }

    // Read existing CSV content
    const existingContent = await readFile(csvPath, "utf-8")

    // Check if email already exists
    if (existingContent.includes(email)) {
      return NextResponse.json({ error: "Email already registered" }, { status: 400 })
    }

    // Append new entry
    const timestamp = new Date().toISOString()
    const newEntry = `${email},${timestamp}\n`
    await writeFile(csvPath, existingContent + newEntry, "utf-8")

    console.log("[v0] Waitlist signup saved to CSV:", email, timestamp)

    return NextResponse.json({ success: true, message: "Successfully joined waitlist" })
  } catch (error) {
    console.error("[v0] Waitlist signup error:", error)
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 })
  }
}
