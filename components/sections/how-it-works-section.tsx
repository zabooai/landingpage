"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const steps = [
  {
    number: "1",
    title: "A New Lead Comes In",
    description: "Whether from your ads, website, or any campaign—Zaboo is instantly alerted and ready to engage.",
  },
  {
    number: "2",
    title: "AI Engages Over SMS/WhatsApp",
    description:
      "Zaboo ensures every lead is engaged immediately with human-like conversations that build trust and qualify interest.",
  },
  {
    number: "3",
    title: "Qualified Leads Get Booked",
    description:
      "Zaboo schedules appointments directly with your team. Only qualified, ready-to-buy leads land on your calendar.",
  },
]

export function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visibleSteps, setVisibleSteps] = useState<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleSteps((prev) => [...prev, index])
          }
        })
      },
      { threshold: 0.3 },
    )

    const stepElements = sectionRef.current?.querySelectorAll("[data-index]")
    stepElements?.forEach((step) => observer.observe(step))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="how-it-works" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Here's <span className="text-primary">How It Works</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed text-balance">
            Simple, seamless, and completely automated. Let Zaboo handle the heavy lifting while you focus on closing
            deals.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              data-index={index}
              className={`${visibleSteps.includes(index) ? "animate-fade-in-left" : "opacity-0"}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <Card className="p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">{step.description}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:flex items-center justify-center">
                      <ArrowRight className="h-6 w-6 text-muted-foreground" />
                    </div>
                  )}
                </div>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-4">
            <Image src="/images/zaboo-mascot.png" alt="Zaboo" width={30} height={30} className="inline-block mx-2" />
            Zaboo works while you sleep, so you never miss a lead again.
          </p>
        </div>
      </div>
    </section>
  )
}
