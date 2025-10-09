import { FileText, MessageSquare, ClipboardCheck } from "lucide-react"
import { Card } from "@/components/ui/card"

const features = [
  {
    icon: FileText,
    title: "Before your visit",
    description:
      "Tell BetterQs what's going on — by talking, typing, or uploading your notes. It can also pull data from your fitness watch or health records. Workflows follow medical best practices for each specialist, helping you quickly understand your issue, get a short summary, and have clear questions ready for your visit.",
  },
  {
    icon: MessageSquare,
    title: "During your visit",
    description:
      "Have a better, more focused conversation with your doctor using the summaries and questions prepared in advance. If your doctor consents, you can also record the visit so BetterQs can remember everything for you.",
  },
  {
    icon: ClipboardCheck,
    title: "After your visit",
    description: "Get an easy-to-read summary of what was discussed and what to do next.",
  },
]

export function Solution() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold tracking-tight text-balance md:text-5xl">
            Your AI co-pilot for health conversations.
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed text-pretty max-w-3xl mx-auto">
            BetterQs helps you take charge of your health by making it easier to prepare, talk, and follow up after each
            appointment.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="p-8 space-y-4 border-2 hover:border-primary/50 transition-colors">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
