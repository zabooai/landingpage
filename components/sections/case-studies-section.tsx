"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Quote } from "lucide-react"
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"

const caseStudies = [
  {
    company: "Solar Solutions Inc.",
    industry: "Solar Installation",
    result: "4.2x increase in qualified appointments",
    description:
      "Zaboo helped Solar Solutions convert 42% of aged leads into qualified opportunities, generating $890K in additional revenue.",
    metric: "890K",
    metricLabel: "Additional Revenue",
    chartData: [
      { month: "Jan", before: 12, after: 18 },
      { month: "Feb", before: 15, after: 32 },
      { month: "Mar", before: 11, after: 45 },
      { month: "Apr", before: 14, after: 52 },
      { month: "May", before: 13, after: 58 },
      { month: "Jun", before: 16, after: 64 },
    ],
  },
  {
    company: "Premier Roofing Co.",
    industry: "Home Improvement",
    result: "67% reduction in response time",
    description:
      "By responding to leads in under 60 seconds, Premier Roofing increased their conversion rate from 8% to 31%.",
    metric: "31%",
    metricLabel: "Conversion Rate",
    chartData: [
      { name: "Before Zaboo", value: 8 },
      { name: "After Zaboo", value: 31 },
      { name: "Potential", value: 61 },
    ],
  },
  {
    company: "Elite Auto Group",
    industry: "Automotive Sales",
    result: "120+ hours saved per month",
    description:
      "Elite Auto's sales team now focuses exclusively on closing deals while Zaboo handles initial outreach and qualification.",
    metric: "120+",
    metricLabel: "Hours Saved Monthly",
    chartData: [
      { category: "Lead Qualification", hours: 45 },
      { category: "Follow-ups", hours: 38 },
      { category: "Appointment Setting", hours: 25 },
      { category: "Review Requests", hours: 12 },
    ],
  },
]

const COLORS = ["#8b5cf6", "#a78bfa", "#e9d5ff"]

export function CaseStudiesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visibleCards, setVisibleCards] = useState<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleCards((prev) => [...prev, index])
          }
        })
      },
      { threshold: 0.2 },
    )

    const cards = sectionRef.current?.querySelectorAll("[data-index]")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="case-studies" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Real Results From <span className="text-primary">Real Businesses</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            See how companies across industries are transforming their lead conversion with Zaboo:
          </p>
        </div>

        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <Card
              key={index}
              data-index={index}
              className={`overflow-hidden hover:shadow-xl transition-all duration-300 ${
                visibleCards.includes(index) ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                <div>
                  <div className="flex items-start gap-3 mb-4">
                    <Quote className="h-8 w-8 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{study.company}</h3>
                      <p className="text-sm text-muted-foreground">{study.industry}</p>
                    </div>
                  </div>

                  <div className="bg-primary/10 border-l-4 border-primary p-4 mb-6">
                    <p className="text-lg font-semibold text-primary">{study.result}</p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6">{study.description}</p>

                  <div className="bg-gradient-to-br from-primary/20 to-purple-500/20 p-6 rounded-lg">
                    <div className="text-5xl font-bold text-primary mb-2">{study.metric}</div>
                    <div className="text-sm font-medium">{study.metricLabel}</div>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  {index === 0 && (
                    <ResponsiveContainer width="100%" height={300}>
                      <AreaChart data={study.chartData}>
                        <defs>
                          <linearGradient id="colorAfter" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                        <XAxis dataKey="month" stroke="#6b7280" />
                        <YAxis stroke="#6b7280" />
                        <Tooltip
                          contentStyle={{ backgroundColor: "#fff", border: "1px solid #e5e7eb", borderRadius: "8px" }}
                        />
                        <Area type="monotone" dataKey="before" stroke="#d1d5db" fill="#f3f4f6" strokeWidth={2} />
                        <Area
                          type="monotone"
                          dataKey="after"
                          stroke="#8b5cf6"
                          fillOpacity={1}
                          fill="url(#colorAfter)"
                          strokeWidth={2}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  )}

                  {index === 1 && (
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={study.chartData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, value }) => `${name}: ${value}%`}
                          outerRadius={100}
                          fill="#8b5cf6"
                          dataKey="value"
                        >
                          {study.chartData.map((entry, idx) => (
                            <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  )}

                  {index === 2 && (
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={study.chartData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                        <XAxis dataKey="category" stroke="#6b7280" angle={-15} textAnchor="end" height={80} />
                        <YAxis stroke="#6b7280" />
                        <Tooltip
                          contentStyle={{ backgroundColor: "#fff", border: "1px solid #e5e7eb", borderRadius: "8px" }}
                        />
                        <Bar dataKey="hours" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
