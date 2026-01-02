export function WhoItsForSection() {
  const industries = [
    "Car detailing & automotive services",
    "Solar installation companies",
    "MedSpas & aesthetic clinics",
    "Nail salons & beauty services",
    "Home services & contractors",
    "Dental & medical practices",
  ]

  return (
    <section className="border-b border-border py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Who It's For</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Zaboo.ai is built for appointment-based service businesses, including but not limited to:
          </p>

          <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, i) => (
              <div
                key={i}
                className="rounded-lg bg-card p-4 text-center shadow-sm"
                style={{ animation: `fadeInUp 0.6s ease-out ${i * 0.1}s both` }}
              >
                <p className="font-medium text-card-foreground">{industry}</p>
              </div>
            ))}
          </div>

          <p className="text-lg font-medium text-foreground">
            If your business relies on enquiries, conversations, and bookings — this applies to you.
          </p>
        </div>
      </div>
    </section>
  )
}
