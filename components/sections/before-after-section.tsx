"use client"

import { useEffect, useRef, useState } from "react"
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts"

export function BeforeAfterSection() {
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

  const conversionData = [
    { month: "Jan", before: 12, after: 34 },
    { month: "Feb", before: 15, after: 42 },
    { month: "Mar", before: 13, after: 48 },
    { month: "Apr", before: 18, after: 55 },
    { month: "May", before: 16, after: 61 },
    { month: "Jun", before: 19, after: 68 },
  ]

  const responseData = [
    { hour: "9AM", before: 45, after: 0.5 },
    { hour: "12PM", before: 120, after: 0.5 },
    { hour: "3PM", before: 180, after: 0.5 },
    { hour: "6PM", before: 240, after: 0.5 },
    { hour: "9PM", before: 360, after: 0.5 },
    { hour: "12AM", before: 480, after: 0.5 },
  ]

  return (
    <section ref={sectionRef} className="py-24">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Before vs. After Zaboo</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">See the dramatic impact on key metrics</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Conversion Rate Chart */}
          <div
            className={`bg-card border border-border rounded-xl p-8 transition-all duration-700 ${
              isVisible ? "animate-fade-in-left" : "opacity-0"
            }`}
          >
            <h3 className="text-2xl font-bold mb-2">Lead-to-Meeting Conversion Rate</h3>
            <p className="text-muted-foreground mb-6">Average increase: 247%</p>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={conversionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis label={{ value: "Conversion %", angle: -90, position: "insideLeft" }} />
                  <Tooltip />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="before"
                    stroke="#6b7280"
                    fill="#6b7280"
                    fillOpacity={0.4}
                    name="Before Zaboo"
                  />
                  <Area
                    type="monotone"
                    dataKey="after"
                    stroke="hsl(var(--primary))"
                    fill="hsl(var(--primary))"
                    fillOpacity={0.4}
                    name="After Zaboo"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Response Time Chart */}
          <div
            className={`bg-card border border-border rounded-xl p-8 transition-all duration-700 ${
              isVisible ? "animate-fade-in-right" : "opacity-0"
            }`}
          >
            <h3 className="text-2xl font-bold mb-2">Average Response Time</h3>
            <p className="text-muted-foreground mb-6">Minutes to respond to new leads</p>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={responseData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="hour" />
                  <YAxis label={{ value: "Minutes", angle: -90, position: "insideLeft" }} />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="before"
                    stroke="#6b7280"
                    strokeWidth={2}
                    name="Before Zaboo"
                    dot={{ r: 4 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="after"
                    stroke="hsl(var(--primary))"
                    strokeWidth={3}
                    name="After Zaboo"
                    dot={{ r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Key Stats */}
        <div className="grid md:grid-cols-4 gap-6 mt-16 max-w-6xl mx-auto">
          {[
            { label: "Faster Response", value: "360x", description: "vs. manual follow-up" },
            { label: "More Conversions", value: "247%", description: "average increase" },
            { label: "Time Saved", value: "120hrs", description: "per month per team" },
            { label: "Lead Coverage", value: "100%", description: "no lead left behind" },
          ].map((stat, index) => (
            <div
              key={index}
              className={`bg-primary/5 border border-primary/20 rounded-xl p-6 text-center transition-all duration-700 ${
                isVisible ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100 + 400}ms` }}
            >
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
