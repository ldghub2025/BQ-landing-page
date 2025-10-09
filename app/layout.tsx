import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

export const metadata: Metadata = {
  title: "BetterQs - Your AI Co-Pilot for Every Doctor Visit",
  description:
    "BetterQs helps patients and caregivers prepare for appointments, ask the right questions, and leave each visit feeling confident and understood.",
  generator: "v0.app",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "BetterQs - Your AI Co-Pilot for Every Doctor Visit",
    description:
      "BetterQs helps patients and caregivers prepare for appointments, ask the right questions, and leave each visit feeling confident and understood.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BetterQs",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
