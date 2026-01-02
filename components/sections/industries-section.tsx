"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Car, Plane, Sun, Home, Building, Stethoscope, Wrench, Hammer, CheckCircle } from "lucide-react"

const industries = [
  { icon: Car, name: "Automotive", color: "text-blue-500" },
  { icon: Plane, name: "Travel", color: "text-purple-500" },
  { icon: Sun, name: "Solar", color: "text-yellow-500" },
  { icon: Home, name: "Roofing", color: "text-red-500" },
  { icon: Building, name: "Siding", color: "text-gray-500" },
  { icon: Home, name: "Window Remodeling", color: "text-cyan-500" },
  { icon: Stethoscope, name: "Clinics", color: "text-green-500" },
  { icon: Wrench, name: "Kitchen Remodeling", color: "text-orange-500" },
  { icon: Hammer, name: "Flooring", color: "text-indigo-500" },
]

export function IndustriesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visibleCards, setVisibleCards] = useState<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleCards((prev) => [...prev, index])
          }
        })
      },
      { threshold: 0.2 },
    )

    const cards = sectionRef.current?.querySelectorAll("[data-index]")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="industries" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Industries We've Seen <span className="text-primary">Remarkable Success</span> In
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Zaboo adapts to any industry. Here are some businesses we've helped transform with AI automation:
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <Card
                key={index}
                data-index={index}
                className={`p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                  visibleCards.includes(index) ? "animate-scale-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className={`${industry.color} mb-3 flex justify-center`}>
                  <Icon className="h-10 w-10" />
                </div>
                <div className="font-semibold text-sm">{industry.name}</div>
              </Card>
            )
          })}
          <Card
            data-index={industries.length}
            className={`p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
              visibleCards.includes(industries.length) ? "animate-scale-in" : "opacity-0"
            }`}
            style={{ animationDelay: `${industries.length * 50}ms` }}
          >
            <div className="text-muted-foreground mb-3 flex justify-center">
              <CheckCircle className="h-10 w-10" />
            </div>
            <div className="font-semibold text-sm">And Many More</div>
          </Card>
        </div>

        <div className="text-center">
          <p className="text-lg text-muted-foreground">
            Your industry not listed? No problem—Zaboo works for any business with leads to convert.
          </p>
        </div>
      </div>
    </section>
  )
}
