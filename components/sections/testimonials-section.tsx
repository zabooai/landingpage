"use client"

import { useEffect, useRef, useState } from "react"
import { Quote, Star } from "lucide-react"

export function TestimonialsSection() {
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

  const testimonials = [
    {
      quote: "We went from losing 60% of our leads to following up with 100% of them. Zaboo pays for itself 10x over.",
      author: "Sarah M.",
      role: "Business Owner, Roofing Industry",
      result: "4x increase in bookings",
    },
    {
      quote:
        "Our team was spending 3 hours a day just responding to inquiries. Now Zaboo handles it all and books better than we did.",
      author: "Marcus T.",
      role: "Sales Director, Tech Services",
      result: "Saved 90 hours/month",
    },
    {
      quote:
        "The review generation feature alone has been worth it. We've gone from 12 reviews to over 200 in 6 months.",
      author: "Jennifer L.",
      role: "Practice Manager, Healthcare",
      result: "1,567% review growth",
    },
    {
      quote: "I was skeptical about AI, but Zaboo sounds more professional than some of my staff. Customers love it.",
      author: "David R.",
      role: "Founder, Automotive Services",
      result: "31% higher satisfaction",
    },
    {
      quote: "Best investment we've made. Period. We're capturing leads at midnight that would have been lost forever.",
      author: "Amanda K.",
      role: "CEO, Real Estate",
      result: "$480K in new revenue",
    },
    {
      quote: "Setup took 20 minutes. Within a week we had 15 new appointments booked. This is a game-changer.",
      author: "Chris B.",
      role: "Owner, Solar Energy",
      result: "ROI in 8 days",
    },
  ]

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-primary/5 via-background to-primary/5">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">What Business Owners Say</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real feedback from businesses transforming their lead conversion
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-card/50 backdrop-blur border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Quote className="h-8 w-8 text-primary/30 mb-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
              <div className="border-t border-border pt-4">
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground mb-2">{testimonial.role}</div>
                <div className="text-sm text-primary font-semibold">{testimonial.result}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
