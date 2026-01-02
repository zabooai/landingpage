"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Calendar, Clock, Target } from "lucide-react"

export function BookingSection() {
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
    <section ref={sectionRef} id="booking" className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`${isVisible ? "animate-fade-in-left" : "opacity-0"}`}>
              <div className="flex items-center gap-3 mb-6">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Zaboo%20Ghost%20White%20Background%20png%20no%20backgf-8n6DmyAURSWS5ukx3EsUzfbtkyyyCb.png"
                  alt="Zaboo"
                  width={60}
                  height={60}
                  className="animate-float"
                />
                <h2 className="text-4xl md:text-5xl font-bold">Ready to Stop Losing Leads?</h2>
              </div>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Book a 15-minute strategy session with our team. We'll analyze how your business currently handles
                inactive leads and show you exactly how much revenue you're leaving on the table.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Personalized Lead Analysis</h3>
                    <p className="text-muted-foreground">
                      We'll review your current lead handling process and identify missed opportunities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Custom AI Strategy</h3>
                    <p className="text-muted-foreground">
                      Get a data-backed plan to increase conversions with AI automation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Zero Risk, All Reward</h3>
                    <p className="text-muted-foreground">
                      100% free consultation. No obligations, just actionable insights you can implement immediately.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg">
                <p className="font-semibold text-primary mb-2">What You'll Walk Away With:</p>
                <p className="text-sm text-muted-foreground">
                  A clear, actionable roadmap to convert your inactive leads into new revenue—without increasing your ad
                  spend.
                </p>
              </div>
            </div>

            <Card className={`p-8 ${isVisible ? "animate-scale-in" : "opacity-0"}`} style={{ animationDelay: "200ms" }}>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Book Your Free Strategy Call</h3>
                <p className="text-muted-foreground">15 minutes that could transform your business</p>
              </div>

              <div className="bg-muted/30 rounded-lg p-4 min-h-[600px] flex items-center justify-center">
                <iframe
                  src="https://app.zabooai.com/widget/booking/IeLnYtMl3Rw42KZ0VXcY"
                  width="100%"
                  height="600px"
                  className="border-0 rounded-lg"
                  title="Zaboo.ai Booking Calendar"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
