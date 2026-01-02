"use client"

import { useEffect, useRef, useState } from "react"
import { CheckCircle2 } from "lucide-react"

export function CapabilitiesSection() {
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

  const capabilities = {
    "What Zaboo Can Do": [
      "Respond to leads in under 30 seconds",
      "Qualify leads with custom criteria",
      "Book appointments directly into calendars",
      "Handle objections and answer FAQs",
      "Send follow-up messages automatically",
      "Generate and collect reviews",
      "Make and receive phone calls",
      "Update your CRM in real-time",
      "Work across SMS, email, chat, and voice",
      "Speak 50+ languages fluently",
    ],
    "What Zaboo Cannot Do": [
      "Replace human intuition entirely",
      "Make final purchasing decisions",
      "Handle complex negotiations alone",
      "Provide legal or medical advice",
      "Operate without initial setup",
    ],
  }

  return (
    <section ref={sectionRef} className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Know What You're Getting</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We believe in transparency. Here's exactly what Zaboo can and cannot do.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {Object.entries(capabilities).map(([title, items], sectionIndex) => (
            <div
              key={title}
              className={`bg-card border-2 ${
                sectionIndex === 0 ? "border-green-500/50" : "border-red-500/50"
              } rounded-xl p-8 transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${sectionIndex * 200}ms` }}
            >
              <h3 className="text-2xl font-bold mb-6">{title}</h3>
              <ul className="space-y-3">
                {items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2
                      className={`h-5 w-5 flex-shrink-0 mt-0.5 ${
                        sectionIndex === 0 ? "text-green-500" : "text-red-500"
                      }`}
                    />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
