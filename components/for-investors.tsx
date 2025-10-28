export function ForInvestors() {
  return (
    <section id="investors" className="px-6 py-24 md:py-32 bg-secondary/30">
      <div className="mx-auto max-w-4xl text-center space-y-8">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold tracking-tight text-balance md:text-5xl">
            Let's build a healthier future together.
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
            BetterQs is an early-stage company on a mission to make healthcare conversations easier and smarter. We
            welcome partners, investors, and healthcare professionals who share our vision.
          </p>
        </div>
        <a
          href="mailto:dmitriy@betterqs.com"
          className="inline-flex items-center justify-center h-14 px-8 text-base font-medium rounded-xl border-2 border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
        >
          Contact the Founders
        </a>
      </div>
    </section>
  )
}
