"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export function CTASection() {
  const handleCTA = () => {
    window.location.href = "https://zabooai.com/form"
  }

  return (
    <section className="py-20 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-accent to-primary p-12 text-center shadow-2xl">
          <div className="absolute inset-0 bg-grid-white/[0.05]" />
          <div className="relative">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
              Ready to Stop Missing Opportunities?
            </h2>
            <p className="mb-8 text-lg text-primary-foreground/90">
              Apply now to see how Zaboo.ai can transform your lead conversion
            </p>

            <Button onClick={handleCTA} size="lg" variant="secondary" className="mb-6 h-14 px-8 text-lg font-semibold">
              Apply for a Free Tailored AI Demo
            </Button>

            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                <span>No obligation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                <span>No generic demos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                <span>Built specifically for your business</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
