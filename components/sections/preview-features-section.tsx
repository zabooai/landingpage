"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, MessageSquare, Star, Phone } from "lucide-react"

export function PreviewFeaturesSection() {
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

  const features = [
    {
      icon: Calendar,
      title: "Appointment Booking",
      description: "Books directly into your calendar while you focus on closing deals",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: MessageSquare,
      title: "24/7 Customer Support",
      description: "Answers questions instantly, any time of day or night",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Star,
      title: "Review Generation",
      description: "Automatically reaches past customers to generate 5-star reviews",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: Phone,
      title: "Voice AI Calls",
      description: "Handles phone calls with human-like conversation",
      color: "from-green-500 to-emerald-500",
    },
  ]

  return (
    <section ref={sectionRef} className="py-24">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What <span className="text-primary">Zaboo</span> Can Do
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            One AI agent, infinite possibilities for your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl bg-card border border-border p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-xl ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />
              <div className="relative">
                <div className={`bg-gradient-to-br ${feature.color} p-3 rounded-lg w-fit mb-4`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`text-center transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "400ms" }}
        >
          <Button size="lg" asChild>
            <Link href="/features">Explore All Features</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
