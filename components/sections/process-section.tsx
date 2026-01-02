"use client"

import { useEffect, useRef, useState } from "react"
import { Upload, Settings, Rocket, BarChart } from "lucide-react"

export function ProcessSection() {
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

  const steps = [
    {
      icon: Upload,
      number: "01",
      title: "Connect Your Systems",
      description:
        "Link your CRM, calendar, and communication channels in under 5 minutes. Zaboo integrates with 100+ platforms.",
      time: "5 minutes",
    },
    {
      icon: Settings,
      number: "02",
      title: "Train Your AI",
      description:
        "Zaboo learns your business, your tone, your products, and your sales process. Upload docs or let it learn from past conversations.",
      time: "10 minutes",
    },
    {
      icon: Rocket,
      number: "03",
      title: "Launch & Monitor",
      description:
        "Go live immediately. Zaboo starts engaging leads, booking appointments, and answering questions while you watch.",
      time: "Instant",
    },
    {
      icon: BarChart,
      number: "04",
      title: "Optimize & Scale",
      description:
        "Review analytics, refine responses, and scale up. Zaboo gets smarter every day, learning from every interaction.",
      time: "Ongoing",
    },
  ]

  return (
    <section ref={sectionRef} className="py-24">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Getting Started is Simple</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Most businesses are fully operational with Zaboo in less than 30 minutes
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-card/30 backdrop-blur border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                {/* Icon */}
                <div className="relative flex-shrink-0">
                  <div className="bg-primary text-primary-foreground p-6 rounded-2xl shadow-lg">
                    <step.icon className="h-8 w-8" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-background border-2 border-primary rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-block bg-primary/10 text-primary font-bold text-sm px-3 py-1 rounded-full mb-4">
                    {step.time}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
