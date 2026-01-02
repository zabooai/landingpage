"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"

export function AutomationFlowSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
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

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % 5)
      }, 2000)
      return () => clearInterval(interval)
    }
  }, [isVisible])

  const flowSteps = [
    { title: "Lead Comes In", description: "From web form, SMS, email, or call" },
    { title: "Zaboo Responds", description: "Instant, personalized reply in <30 seconds" },
    { title: "Qualifies Lead", description: "Asks questions, assesses fit" },
    { title: "Books Meeting", description: "Syncs with calendar, sends confirmation" },
    { title: "Notifies Team", description: "Updates CRM, alerts sales team" },
  ]

  return (
    <section ref={sectionRef} className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">The Automation Flow</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Watch how Zaboo handles a lead from first contact to booked appointment
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {flowSteps.map((step, index) => (
              <div key={index} className="flex items-center flex-1">
                <div
                  className={`flex-1 transition-all duration-500 ${activeStep === index ? "scale-110" : "scale-100"}`}
                >
                  <div
                    className={`p-6 rounded-xl border-2 transition-all duration-500 ${
                      activeStep === index ? "border-primary bg-primary/10 shadow-xl" : "border-border bg-card"
                    }`}
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold mb-3 mx-auto">
                      {index + 1}
                    </div>
                    <h3 className="font-semibold text-center mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground text-center">{step.description}</p>
                  </div>
                </div>
                {index < flowSteps.length - 1 && (
                  <ArrowRight className="hidden md:block h-6 w-6 text-muted-foreground mx-2 flex-shrink-0" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 bg-primary/5 border border-primary/20 rounded-xl p-8">
            <p className="text-center text-lg">
              <span className="font-bold text-primary">Average time from lead to booked meeting: 4 minutes</span>
              <br />
              <span className="text-muted-foreground">vs. 3-4 hours with traditional sales teams</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
