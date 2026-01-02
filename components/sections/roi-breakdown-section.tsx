"use client"

import { useEffect, useRef, useState } from "react"
import { TrendingUp, DollarSign, Clock } from "lucide-react"

export function ROIBreakdownSection() {
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

  const scenarios = [
    {
      title: "Small Business",
      leads: "50 leads/month",
      current: "$15K/month revenue",
      withZaboo: "$37K/month revenue",
      increase: "$22K",
      percentage: "147%",
    },
    {
      title: "Growing Company",
      leads: "200 leads/month",
      current: "$60K/month revenue",
      withZaboo: "$156K/month revenue",
      increase: "$96K",
      percentage: "160%",
    },
    {
      title: "Enterprise",
      leads: "1000 leads/month",
      current: "$280K/month revenue",
      withZaboo: "$742K/month revenue",
      increase: "$462K",
      percentage: "165%",
    },
  ]

  const costBreakdown = [
    { icon: TrendingUp, label: "Average Revenue Increase", value: "$193K/year" },
    { icon: Clock, label: "Time Saved", value: "1,440 hours/year" },
    { icon: DollarSign, label: "Average ROI", value: "38,700%" },
  ]

  return (
    <section ref={sectionRef} className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Potential ROI Scenarios</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See potential returns based on your business size
          </p>
        </div>

        {/* Scenario Comparison */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {scenarios.map((scenario, index) => (
            <div
              key={index}
              className={`bg-card border-2 border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg ${
                isVisible ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <h3 className="text-2xl font-bold mb-2">{scenario.title}</h3>
              <p className="text-sm text-muted-foreground mb-6">{scenario.leads}</p>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Current Revenue</span>
                  <span className="font-semibold">{scenario.current}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">With Zaboo</span>
                  <span className="font-semibold text-green-600">{scenario.withZaboo}</span>
                </div>
                <div className="border-t border-border pt-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold">Monthly Increase</span>
                    <span className="text-2xl font-bold text-primary">{scenario.increase}</span>
                  </div>
                  <div className="bg-primary/10 text-primary px-3 py-2 rounded-lg text-center font-bold">
                    +{scenario.percentage} Growth
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cost Breakdown - Now with 3 items instead of 4 */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {costBreakdown.map((item, index) => (
            <div
              key={index}
              className={`bg-card border border-border rounded-xl p-6 text-center transition-all duration-700 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100 + 450}ms` }}
            >
              <div className="inline-flex items-center justify-center bg-primary/10 p-3 rounded-full mb-4">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground mb-2">{item.label}</p>
              <p className="text-2xl font-bold">{item.value}</p>
            </div>
          ))}
        </div>

        <div
          className={`mt-12 text-center transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "850ms" }}
        >
          <p className="text-lg text-muted-foreground">
            These are conservative estimates based on average client results. Your actual results may vary.
          </p>
        </div>
      </div>
    </section>
  )
}
