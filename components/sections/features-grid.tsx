"use client"

import { useEffect, useRef, useState } from "react"
import {
  Calendar,
  MessageSquare,
  Star,
  Phone,
  Mail,
  Clock,
  Users,
  BarChart,
  Filter,
  Repeat,
  Brain,
  Zap,
} from "lucide-react"

export function FeaturesGrid() {
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
      title: "Smart Appointment Booking",
      description:
        "Zaboo checks your calendar availability, suggests times, handles rescheduling, and sends automatic reminders.",
      benefits: ["Time zone detection", "Buffer time management", "Multi-calendar sync"],
    },
    {
      icon: MessageSquare,
      title: "Intelligent Conversations",
      description:
        "Natural, human-like dialogue that understands context, remembers past interactions, and adapts tone to match your brand.",
      benefits: ["Context awareness", "Personality customization", "Multi-turn conversations"],
    },
    {
      icon: Star,
      title: "Review Generation Engine",
      description:
        "Automatically reaches out to satisfied customers at the perfect moment to request reviews across Google, Yelp, and more.",
      benefits: ["Timing optimization", "Multi-platform support", "Follow-up sequences"],
    },
    {
      icon: Phone,
      title: "Voice AI Phone Calls",
      description:
        "Handle inbound and outbound calls with remarkably human-like voice AI. Transcripts saved automatically.",
      benefits: ["Natural voice", "Call recording", "Real-time transcription"],
    },
    {
      icon: Mail,
      title: "Email Automation",
      description: "Respond to emails, send follow-ups, and manage your inbox with AI that sounds exactly like you.",
      benefits: ["Template learning", "Smart scheduling", "Personalized replies"],
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Never miss a lead again. Zaboo works nights, weekends, and holidays without breaks or sick days.",
      benefits: ["No downtime", "Instant responses", "Global time zones"],
    },
    {
      icon: Users,
      title: "Lead Qualification",
      description:
        "Ask the right questions to determine if a lead is sales-ready, saving your team time on unqualified prospects.",
      benefits: ["Custom criteria", "Scoring system", "Auto-routing"],
    },
    {
      icon: BarChart,
      title: "Analytics Dashboard",
      description:
        "Track conversations, conversion rates, response times, and ROI in real-time with beautiful visualizations.",
      benefits: ["Real-time data", "Custom reports", "Performance insights"],
    },
    {
      icon: Filter,
      title: "Smart Lead Routing",
      description:
        "Automatically assign leads to the right team member based on specialty, workload, or geographic location.",
      benefits: ["Round-robin", "Skill-based routing", "Load balancing"],
    },
    {
      icon: Repeat,
      title: "Follow-Up Sequences",
      description:
        "Never let a lead go cold. Automated follow-up campaigns that persist until they respond or opt out.",
      benefits: ["Multi-channel", "Smart timing", "A/B testing"],
    },
    {
      icon: Brain,
      title: "Learning System",
      description:
        "Zaboo learns from every interaction, improving responses and conversion rates over time automatically.",
      benefits: ["Self-improving", "Pattern recognition", "Performance optimization"],
    },
    {
      icon: Zap,
      title: "Instant Integration",
      description:
        "Connect with your existing CRM, calendar, email, and phone systems in minutes with pre-built integrations.",
      benefits: ["100+ integrations", "API access", "Webhook support"],
    },
  ]

  return (
    <section ref={sectionRef} className="py-24">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Complete Feature Set</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to automate lead conversion in one powerful platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">{feature.description}</p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {benefit}
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
