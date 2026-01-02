"use client"

import { useEffect, useRef, useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function DemoFAQSection() {
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

  const faqs = [
    {
      question: "What happens during the 15-minute call?",
      answer:
        "We'll review your current lead management process, identify bottlenecks causing lost revenue, and show you exactly how Zaboo can help. You'll leave with a clear action plan, whether you choose to work with us or not.",
    },
    {
      question: "Is this really free with no strings attached?",
      answer:
        "Absolutely. This is a genuine strategy session designed to help you understand where you're losing leads. There's no sales pitch, no obligation, and no pressure. If Zaboo isn't right for you, we'll tell you.",
    },
    {
      question: "How quickly can I get started after the call?",
      answer:
        "If you decide to move forward, most businesses are up and running with Zaboo within 24-48 hours. The setup process is simple and our team handles the heavy lifting.",
    },
    {
      question: "Do I need any technical knowledge?",
      answer:
        "Not at all. We handle the entire setup process for you. All you need to do is provide access to your existing systems (CRM, calendar, etc.) and we take care of the rest.",
    },
    {
      question: "What if I'm not ready to commit yet?",
      answer:
        "That's completely fine! The strategy session is valuable on its own. You'll walk away with actionable insights you can implement whether you use Zaboo or not. Many clients take time to think it over before moving forward.",
    },
    {
      question: "Will I be locked into a long-term contract?",
      answer:
        "No. We offer month-to-month pricing with no long-term contracts. You can cancel anytime. We're confident that once you see the results, you won't want to stop using Zaboo.",
    },
    {
      question: "What information do I need to bring to the call?",
      answer:
        "Just come prepared to discuss your current lead volume, average deal size, and typical response times. If you have your CRM data handy, that's helpful but not required.",
    },
    {
      question: "Can Zaboo work for my specific industry?",
      answer:
        "Zaboo works across virtually every industry—from home services and healthcare to B2B SaaS and real estate. During the call, we'll discuss your specific use case and show you examples from similar businesses.",
    },
  ]

  return (
    <section ref={sectionRef} className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about your free strategy session
          </p>
        </div>

        <div
          className={`max-w-4xl mx-auto transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "200ms" }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 hover:border-primary/50 transition-all"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
