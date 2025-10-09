export function ForPatients() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight text-balance md:text-5xl">For Families and Caregivers</h2>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              If you help care for someone else, BetterQs keeps their story and progress in one place so you can support
              them confidently.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl bg-card border-2 border-border overflow-hidden shadow-xl">
              <img
                src="/modern-tablet-showing-organized-medical-questions-.jpg"
                alt="BetterQs app interface"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
