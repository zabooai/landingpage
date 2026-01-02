"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export function ConsultationSection() {
  const handleCTA = () => {
    window.location.href = "https://zabooai.com/form"
  }

  const benefits = [
    "We review how your business handles leads, messages, and bookings",
    "You'll see a live AI demo built around real scenarios from your business",
    "We identify where automation can save time and capture more appointments",
  ]

  return (
    <section className="border-b border-border py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Free Tailored AI Consultation + Live Demo
          </h2>
          <p className="mb-4 text-lg font-semibold text-primary">15-20 minute session</p>

          <div className="mb-8 space-y-4 text-left">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="flex items-start gap-3"
                style={{ animation: `fadeInLeft 0.6s ease-out ${i * 0.1}s both` }}
              >
                <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-primary" />
                <p className="text-base text-muted-foreground">{benefit}</p>
              </div>
            ))}
          </div>

          <div className="mb-8 rounded-lg border-2 border-primary/50 bg-primary/10 p-6">
            <p className="text-sm font-medium text-foreground">
              <strong>Important:</strong> Submitting the form does not guarantee a consultation. We carefully review
              each request and only move forward with businesses that are a good fit and can genuinely benefit.
            </p>
          </div>

          <Button onClick={handleCTA} size="lg" className="h-14 px-8 text-lg font-semibold">
            Apply for a Free Tailored AI Demo
          </Button>
        </div>
      </div>
    </section>
  )
}
