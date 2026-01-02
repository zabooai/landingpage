"use client"

import { useState, useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { TrendingUp } from "lucide-react"

export function RevenueCalculatorSection() {
  const [newLeads, setNewLeads] = useState(5000)
  const [currentCustomers, setCurrentCustomers] = useState(5000)
  const [agedLeads, setAgedLeads] = useState(50000)
  const [lostRevenue, setLostRevenue] = useState(0)

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

  useEffect(() => {
    // Conservative calculation based on typical conversion rates and average deal values
    const newLeadValue = newLeads * 0.15 * 500 // 15% conversion, $500 avg deal
    const currentCustomerValue = currentCustomers * 0.1 * 400 // 10% upsell, $400 avg
    const agedLeadValue = agedLeads * 0.05 * 450 // 5% revival rate, $450 avg deal

    setLostRevenue(Math.round(newLeadValue + currentCustomerValue + agedLeadValue))
  }, [newLeads, currentCustomers, agedLeads])

  return (
    <section ref={sectionRef} id="calculator" className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Calculate Your <span className="text-primary">Lost Revenue</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            These numbers are based on the results we typically see with our partners. Adjust the sliders to see your
            potential:
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card
              className={`p-8 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-2 border-primary/20 ${isVisible ? "animate-scale-in" : "opacity-0"}`}
            >
              <div className="text-sm font-medium text-muted-foreground mb-4">AMOUNT OF NEW LEADS (MONTHLY)</div>
              <div className="text-4xl font-bold text-primary mb-6">{newLeads.toLocaleString()}</div>
              <Slider
                value={[newLeads]}
                onValueChange={(value) => setNewLeads(value[0])}
                min={1000}
                max={50000}
                step={1000}
                className="mb-2"
              />
            </Card>

            <Card
              className={`p-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-2 border-primary/20 ${isVisible ? "animate-scale-in" : "opacity-0"}`}
              style={{ animationDelay: "100ms" }}
            >
              <div className="text-sm font-medium text-muted-foreground mb-4">
                AMOUNT OF CURRENT CUSTOMERS TO UPSELL
              </div>
              <div className="text-4xl font-bold text-primary mb-6">{currentCustomers.toLocaleString()}</div>
              <Slider
                value={[currentCustomers]}
                onValueChange={(value) => setCurrentCustomers(value[0])}
                min={1000}
                max={50000}
                step={1000}
                className="mb-2"
              />
            </Card>

            <Card
              className={`p-8 bg-gradient-to-br from-pink-500/10 to-red-500/10 border-2 border-primary/20 ${isVisible ? "animate-scale-in" : "opacity-0"}`}
              style={{ animationDelay: "200ms" }}
            >
              <div className="text-sm font-medium text-muted-foreground mb-4">AMOUNT OF AGED LEADS</div>
              <div className="text-4xl font-bold text-primary mb-6">{agedLeads.toLocaleString()}</div>
              <Slider
                value={[agedLeads]}
                onValueChange={(value) => setAgedLeads(value[0])}
                min={10000}
                max={200000}
                step={5000}
                className="mb-2"
              />
            </Card>
          </div>

          <Card
            className={`p-12 bg-gradient-to-br from-primary via-purple-600 to-pink-600 text-white text-center ${isVisible ? "animate-scale-in" : "opacity-0"}`}
            style={{ animationDelay: "300ms" }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <TrendingUp className="h-8 w-8" />
              <div className="text-2xl font-semibold">YOU ARE MISSING OUT ON:</div>
            </div>
            <div className="text-6xl md:text-7xl font-bold mb-4">${lostRevenue.toLocaleString()}</div>
            <p className="text-xl opacity-90">per month in potential revenue</p>
          </Card>

          <div className="text-center mt-8 text-muted-foreground">
            <p className="text-sm">
              * Calculations based on industry averages and typical conversion improvements with Zaboo
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
