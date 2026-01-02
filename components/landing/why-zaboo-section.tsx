export function WhyZabooSection() {
  const points = [
    "Built around your business, not a template",
    "Works with your existing tools and workflows",
    "Focused on bookings and revenue, not chatbots",
    "Designed to reduce manual work, not add complexity",
  ]

  return (
    <section className="border-b border-border py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="mb-12 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Why Zaboo.ai</h2>

          <div className="mb-10 grid gap-6 sm:grid-cols-2">
            {points.map((point, i) => (
              <div
                key={i}
                className="rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 p-8 text-left"
                style={{ animation: `fadeInUp 0.6s ease-out ${i * 0.1}s both` }}
              >
                <p className="text-lg font-semibold text-foreground">{point}</p>
              </div>
            ))}
          </div>

          <div className="rounded-lg bg-card p-8 shadow-lg">
            <p className="text-xl font-bold text-foreground">
              This is not a chatbot. It's a revenue and operations system.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
