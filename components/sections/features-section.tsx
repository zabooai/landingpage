"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Calendar, MessageCircle, Star, Phone, Zap, Target } from "lucide-react"

const features = [
  {
    icon: Calendar,
    title: "Smart Appointment Booking",
    description:
      "Zaboo books appointments directly into your calendar through natural conversations. No more back-and-forth emails.",
    color: "text-blue-500",
  },
  {
    icon: MessageCircle,
    title: "24/7 Customer Q&A",
    description: "Answer every customer question instantly, any time of day. Zaboo sounds human, not robotic.",
    color: "text-purple-500",
  },
  {
    icon: Star,
    title: "Google Review Generation",
    description: "Automatically reach out to past customers and generate authentic 5-star reviews at scale.",
    color: "text-yellow-500",
  },
  {
    icon: Phone,
    title: "Voice AI Calling",
    description: "Take inbound calls or make outbound follow-ups with human-like voice AI that converts.",
    color: "text-green-500",
  },
  {
    icon: Zap,
    title: "Multi-Text Responses",
    description: "Handle multiple message threads simultaneously. Zaboo can respond to dozens of leads at once.",
    color: "text-orange-500",
  },
  {
    icon: Target,
    title: "In-Conversation Scheduling",
    description: "Schedule appointments mid-conversation without breaking flow. Results in 3x higher conversion rates.",
    color: "text-red-500",
  },
]

export function FeaturesSection() {
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
    <section ref={sectionRef} id="features" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Image src="/images/zaboo-mascot.png" alt="Zaboo" width={40} height={40} className="animate-float" />
            <h2 className="text-4xl md:text-5xl font-bold">What Zaboo Can Do</h2>
          </div>
          <p className="text-xl text-muted-foreground text-balance leading-relaxed">
            Your friendly AI ghost that haunts your leads until they convert. Here's how Zaboo transforms your business:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                data-index={index}
                className={`p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                  visibleCards.includes(index) ? "animate-scale-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`${feature.color} mb-4`}>
                  <Icon className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
