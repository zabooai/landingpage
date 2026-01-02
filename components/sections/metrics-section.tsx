"use client"

import { useEffect, useRef, useState } from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts"

export function MetricsSection() {
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

  const leadHandlingData = [
    { task: "Lead Response", manual: 180, zaboo: 30 },
    { task: "Qualification", manual: 15, zaboo: 2 },
    { task: "Booking", manual: 20, zaboo: 3 },
    { task: "Follow-up", manual: 10, zaboo: 0 },
    { task: "CRM Update", manual: 5, zaboo: 0 },
  ]

  const leadOutcomeData = [
    { name: "Meetings Booked", value: 45, color: "#8b5cf6" },
    { name: "Qualified & Scheduled", value: 30, color: "#a78bfa" },
    { name: "Nurturing", value: 20, color: "#c4b5fd" },
    { name: "Not Qualified", value: 5, color: "#e9d5ff" },
  ]

  const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name }: any) => {
    const RADIAN = Math.PI / 180
    const radius = outerRadius + 25
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
      <text
        x={x}
        y={y}
        fill="hsl(var(--foreground))"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        className="text-sm"
      >
        {`${name}: ${(percent * 100).toFixed(0)}%`}
      </text>
    )
  }

  return (
    <section ref={sectionRef} className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Performance Metrics</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Detailed breakdown of time savings and lead outcomes
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Time Comparison Chart */}
          <div
            className={`bg-card border border-border rounded-xl p-8 transition-all duration-700 ${
              isVisible ? "animate-fade-in-left" : "opacity-0"
            }`}
          >
            <h3 className="text-2xl font-bold mb-2">Time Per Lead (seconds)</h3>
            <p className="text-muted-foreground mb-6">Manual process vs. Zaboo automation</p>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={leadHandlingData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="task" angle={-20} textAnchor="end" height={100} />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="manual" fill="#6b7280" name="Manual Process" />
                  <Bar dataKey="zaboo" fill="hsl(var(--primary))" name="With Zaboo" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Lead Outcomes Pie Chart */}
          <div
            className={`bg-card border border-border rounded-xl p-8 transition-all duration-700 ${
              isVisible ? "animate-fade-in-right" : "opacity-0"
            }`}
          >
            <h3 className="text-2xl font-bold mb-2">Lead Outcomes</h3>
            <p className="text-muted-foreground mb-6">Distribution of 1000 leads handled by Zaboo</p>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={leadOutcomeData}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    label={renderCustomLabel}
                    outerRadius={90}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {leadOutcomeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
