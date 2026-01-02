"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
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
    <section
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-to-br from-primary via-purple-600 to-pink-600 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-white/10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center max-w-4xl mx-auto text-white ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="flex justify-center mb-6">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Zaboo%20Ghost%20White%20Background%20png%20no%20backgf-8n6DmyAURSWS5ukx3EsUzfbtkyyyCb.png"
              alt="Zaboo"
              width={100}
              height={100}
              className="animate-float drop-shadow-2xl"
            />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Let Zaboo Haunt Your Leads Until They Convert
          </h2>

          <p className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed text-balance">
            Your friendly AI ghost that works 24/7 to turn cold leads into hot revenue. Never miss an opportunity again.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
              <Link href="/book-demo">
                Start Your Free Test <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 bg-white/10 hover:bg-white/20 text-white border-white/30"
              asChild
            >
              <Link href="/calculator">See Your Potential ROI</Link>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 text-sm opacity-80">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 bg-white rounded-full animate-pulse" />
              <span>Setup in 7 Days</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 bg-white rounded-full animate-pulse" />
              <span>No Long-Term Contracts</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 bg-white rounded-full animate-pulse" />
              <span>Cancel Anytime</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-1/4 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/4 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />
    </section>
  )
}
