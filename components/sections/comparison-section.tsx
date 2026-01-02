"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Check, X } from "lucide-react"
import Image from "next/image"

const comparisonData = [
  {
    feature: "Human-sounding AI",
    zaboo: true,
    traditional: false,
    description: "AI that sounds natural, not robotic",
  },
  {
    feature: "Done-for-you service",
    zaboo: true,
    traditional: false,
    description: "We handle setup and management",
  },
  {
    feature: "Pay on results only",
    zaboo: true,
    traditional: false,
    description: "No upfront costs, 100% free test",
  },
  {
    feature: "Multi-text responses",
    zaboo: true,
    traditional: false,
    description: "Handle multiple conversations simultaneously",
  },
  {
    feature: "In-conversation scheduling",
    zaboo: true,
    traditional: false,
    description: "Book appointments without breaking flow",
  },
  {
    feature: "Custom integrations",
    zaboo: true,
    traditional: true,
    description: "Seamlessly integrate with your existing tools",
  },
]

export function ComparisonSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Don't <span className="text-primary">Burn</span> Your Leads
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Ensure your AI company has the following capabilities. Here's why Zaboo is different:
          </p>
        </div>

        <Card className={`max-w-4xl mx-auto overflow-hidden ${isVisible ? "animate-scale-in" : "opacity-0"}`}>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-6 font-semibold">Feature</th>
                  <th className="text-center p-6">
                    <div className="flex flex-col items-center gap-2">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Zaboo%20Ghost%20White%20Background%20png%20no%20backgf-8n6DmyAURSWS5ukx3EsUzfbtkyyyCb.png"
                        alt="Zaboo"
                        width={40}
                        height={40}
                      />
                      <span className="font-semibold text-primary">Zaboo.ai</span>
                    </div>
                  </th>
                  <th className="text-center p-6 font-semibold text-muted-foreground">Traditional Solutions</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, index) => (
                  <tr key={index} className="border-t border-border hover:bg-muted/30 transition-colors">
                    <td className="p-6">
                      <div className="font-medium mb-1">{item.feature}</div>
                      <div className="text-sm text-muted-foreground">{item.description}</div>
                    </td>
                    <td className="text-center p-6">
                      {item.zaboo ? (
                        <div className="inline-flex items-center justify-center w-8 h-8 bg-green-500/10 rounded-full">
                          <Check className="h-5 w-5 text-green-500" />
                        </div>
                      ) : (
                        <div className="inline-flex items-center justify-center w-8 h-8 bg-red-500/10 rounded-full">
                          <X className="h-5 w-5 text-red-500" />
                        </div>
                      )}
                    </td>
                    <td className="text-center p-6">
                      {item.traditional ? (
                        <div className="inline-flex items-center justify-center w-8 h-8 bg-green-500/10 rounded-full">
                          <Check className="h-5 w-5 text-green-500" />
                        </div>
                      ) : (
                        <div className="inline-flex items-center justify-center w-8 h-8 bg-red-500/10 rounded-full">
                          <X className="h-5 w-5 text-red-500" />
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </section>
  )
}
