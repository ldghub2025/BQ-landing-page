"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function EarlyAccess() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      if (!response.ok) {
        throw new Error("Failed to join waitlist")
      }

      toast({
        title: "Success!",
        description: "You've been added to the waitlist. We'll be in touch soon!",
      })

      setEmail("")
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="waitlist" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl text-center space-y-8">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold tracking-tight text-balance md:text-5xl">
            Be one of the first to try BetterQs.
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
            Help us build a tool that makes doctor visits easier for everyone. Join our early access list today.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
          <Input
            id="waitlist-email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isLoading}
            className="h-14 px-6 text-base rounded-xl"
          />
          <Button
            type="submit"
            size="lg"
            className="h-14 px-8 text-base rounded-xl whitespace-nowrap"
            disabled={isLoading}
          >
            {isLoading ? "Joining..." : "Join the Waitlist"}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </form>
      </div>
    </section>
  )
}
