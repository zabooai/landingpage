"use client"

import { useEffect, useRef, useState } from "react"
import { Shield, Lock, Zap, Award } from "lucide-react"

export function TrustSection() {
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

  const trustFactors = [
    { icon: Shield, label: "Enterprise Security", value: "SOC 2 Compliant" },
    { icon: Lock, label: "Data Privacy", value: "GDPR & CCPA" },
    { icon: Zap, label: "Uptime", value: "99.9% SLA" },
    { icon: Award, label: "Satisfaction", value: "4.9/5 Rating" },
  ]

  return (
    <section ref={sectionRef} className="py-16 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {trustFactors.map((factor, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-700 ${isVisible ? "animate-scale-in" : "opacity-0"}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center bg-primary/10 p-3 rounded-full mb-3">
                <factor.icon className="h-6 w-6 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground mb-1">{factor.label}</p>
              <p className="font-semibold">{factor.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
