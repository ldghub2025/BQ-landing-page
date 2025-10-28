"use client"

import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:py-32 lg:py-40 pt-32 md:pt-40 lg:pt-48 bg-gradient-to-br from-background via-secondary/20 to-accent/10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl font-bold tracking-tight text-balance md:text-6xl lg:text-7xl">
              Your AI Companion for Every Doctor Visit
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty max-w-2xl">
              BetterQs helps you understand and remember what to say, what to ask, and what the doctor said — all in one
              simple app.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 py-6 rounded-xl bg-transparent"
                onClick={() => document.getElementById("investors")?.scrollIntoView({ behavior: "smooth" })}
              >
                For Investors
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-secondary/50 backdrop-blur-sm border border-border overflow-hidden">
              <img
                src="/doctor-and-patient-having-a-calm--positive-convers.jpg"
                alt="Doctor and patient conversation"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
