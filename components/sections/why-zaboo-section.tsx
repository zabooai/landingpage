"use client"

import { useEffect, useRef, useState } from "react"
import { Brain, Zap, Clock, TrendingUp } from "lucide-react"

export function WhyZabooSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const reasons = [
    {
      icon: Brain,
      title: "Never Forget a Lead",
      description:
        "Zaboo remembers every conversation, tracks every interaction, and ensures no potential customer slips through the cracks.",
    },
    {
      icon: Zap,
      title: "Instant Response Time",
      description:
        "While your competitors take hours to respond, Zaboo engages leads in seconds—increasing conversion rates by up to 391%.",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description:
        "Zaboo works around the clock, handling inquiries at 3 AM with the same professionalism as 3 PM. No overtime, no breaks, no excuses.",
    },
    {
      icon: TrendingUp,
      title: "Scale Without Limits",
      description:
        "Handle 10 conversations or 10,000 simultaneously. Zaboo scales effortlessly as your business grows, without adding headcount.",
    },
  ]

  return (
    <section ref={sectionRef} className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why <span className="text-primary">Zaboo</span> Changes Everything
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your competition is losing leads while they sleep. You won't be.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <reason.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
