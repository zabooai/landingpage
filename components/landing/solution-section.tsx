import { MessageSquare, UserCheck, Calendar, PhoneIncoming, RefreshCw } from "lucide-react"

export function SolutionSection() {
  const features = [
    {
      icon: MessageSquare,
      title: "Instant Lead Response",
      description: "AI replies immediately to new enquiries across Instagram, WhatsApp, SMS, and website chat.",
    },
    {
      icon: UserCheck,
      title: "Automatic Lead Qualification",
      description: "AI asks the right questions to filter serious prospects from low-intent enquiries.",
    },
    {
      icon: Calendar,
      title: "Automated Appointment Booking",
      description: "Qualified leads are guided directly into your calendar without back-and-forth.",
    },
    {
      icon: PhoneIncoming,
      title: "Missed Call Recovery",
      description: "Missed calls receive automatic follow-ups so opportunities aren't lost.",
    },
    {
      icon: RefreshCw,
      title: "Lead Reactivation",
      description: "AI re-engages past leads and customers to generate new bookings without new ad spend.",
    },
  ]

  return (
    <section className="border-b border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What Zaboo.ai Actually Does
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Zaboo.ai designs and deploys AI systems that act as your front-line sales and booking assistant — 24/7.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <div
              key={i}
              className="rounded-lg bg-card p-6 shadow-sm transition-all hover:shadow-md"
              style={{ animation: `fadeInUp 0.6s ease-out ${i * 0.1}s both` }}
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-card-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
