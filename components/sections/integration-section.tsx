"use client"

import { useEffect, useRef, useState } from "react"

export function IntegrationSection() {
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

  const integrations = [
    { name: "HubSpot", category: "CRM" },
    { name: "Salesforce", category: "CRM" },
    { name: "Google Calendar", category: "Calendar" },
    { name: "Outlook", category: "Calendar" },
    { name: "Twilio", category: "SMS" },
    { name: "Zapier", category: "Automation" },
    { name: "Stripe", category: "Payments" },
    { name: "Slack", category: "Communication" },
    { name: "WhatsApp", category: "Messaging" },
    { name: "Zoom", category: "Video" },
    { name: "ClickFunnels", category: "Marketing" },
    { name: "GoHighLevel", category: "CRM" },
  ]

  return (
    <section ref={sectionRef} className="py-24">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Integrates With Your Stack</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Zaboo plays nicely with the tools you already use. No switching, no migration headaches.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className={`bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg ${
                  isVisible ? "animate-scale-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="text-center">
                  <div className="font-semibold mb-1">{integration.name}</div>
                  <div className="text-xs text-muted-foreground">{integration.category}</div>
                </div>
              </div>
            ))}
          </div>

          <div
            className={`mt-12 text-center transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "600ms" }}
          >
            <p className="text-lg text-muted-foreground">
              Don't see your tool? We integrate with 100+ platforms via API.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
