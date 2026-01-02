import { X } from "lucide-react"

export function ProblemSection() {
  const problems = [
    "Leads come in, but replies are slow or inconsistent",
    "Missed calls turn into missed revenue",
    "Old leads sit in the database untouched",
    "Manual follow-ups waste time",
    "Potential customers book whoever responds first",
  ]

  return (
    <section className="border-b border-border py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="mb-12 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Sound Familiar?</h2>

          <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {problems.map((problem, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-lg bg-card p-6 text-left shadow-sm"
                style={{ animation: `fadeInUp 0.6s ease-out ${i * 0.1}s both` }}
              >
                <X className="mt-0.5 h-5 w-5 flex-shrink-0 text-destructive" />
                <p className="text-sm text-card-foreground">{problem}</p>
              </div>
            ))}
          </div>

          <div className="rounded-lg bg-primary/10 p-8">
            <p className="text-xl font-semibold text-foreground sm:text-2xl">
              Most businesses don't have a lead problem.
              <br />
              They have a response and follow-up problem.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
