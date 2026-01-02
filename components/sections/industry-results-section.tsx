"use client"

import { useEffect, useRef, useState } from "react"
import { Building2, Wrench, Heart, Briefcase, Home, Utensils } from "lucide-react"

export function IndustryResultsSection() {
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

  const industries = [
    {
      icon: Wrench,
      name: "Home Services",
      improvement: "312%",
      metric: "booking rate increase",
      description: "HVAC, plumbing, roofing companies converting more emergency calls to scheduled appointments",
    },
    {
      icon: Heart,
      name: "Healthcare",
      improvement: "89%",
      metric: "no-show reduction",
      description: "Medical practices filling more appointment slots with automated reminders and confirmations",
    },
    {
      icon: Building2,
      name: "Real Estate",
      improvement: "4.2x",
      metric: "more property tours",
      description: "Agents scheduling showings while focusing on closings instead of phone tag",
    },
    {
      icon: Briefcase,
      name: "B2B Services",
      improvement: "267%",
      metric: "demo booking increase",
      description: "SaaS and consulting firms converting more website visitors to sales calls",
    },
    {
      icon: Home,
      name: "Home Improvement",
      improvement: "$1.2M",
      metric: "recovered revenue",
      description: "Solar and window companies re-engaging old leads that went cold",
    },
    {
      icon: Utensils,
      name: "Restaurants",
      improvement: "94%",
      metric: "positive review growth",
      description: "Food service businesses generating more 5-star reviews automatically",
    },
  ]

  return (
    <section ref={sectionRef} className="py-24">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Results By Industry</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every industry sees measurable improvements with Zaboo
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                <industry.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{industry.name}</h3>
              <div className="mb-4">
                <div className="text-3xl font-bold text-primary">{industry.improvement}</div>
                <div className="text-sm text-muted-foreground">{industry.metric}</div>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
