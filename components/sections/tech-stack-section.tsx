"use client"

import { useEffect, useRef, useState } from "react"
import { Brain, Shield, Zap, Globe } from "lucide-react"

export function TechStackSection() {
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

  const techFeatures = [
    {
      icon: Brain,
      title: "Advanced AI Models",
      description: "Powered by GPT-4 and custom-trained models that understand context, tone, and intent",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption, SOC 2 compliance, and GDPR-ready data handling",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Sub-second response times with 99.9% uptime SLA",
    },
    {
      icon: Globe,
      title: "Multi-Language",
      description: "Supports 50+ languages with native-level fluency",
    },
  ]

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-primary/5 via-background to-primary/5">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Built on Cutting-Edge Technology</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Zaboo leverages the latest in AI, security, and infrastructure
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {techFeatures.map((feature, index) => (
            <div
              key={index}
              className={`bg-card/50 backdrop-blur border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
