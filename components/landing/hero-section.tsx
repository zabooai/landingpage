"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const handleCTA = () => {
    window.location.href = "https://zabooai.com/form"
  }

  return (
    <section className="relative overflow-hidden border-b border-border bg-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-white to-white" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        {/* Logo */}
        <div className="mb-12 flex justify-center">
          <Image
            src="/images/zaboo-20ai-20png-20-281-29-20-281-29.png"
            alt="Zaboo.ai"
            width={180}
            height={60}
            className="h-auto w-40"
          />
        </div>

        <div className="mx-auto max-w-4xl text-center">
          {/* Headline */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Turn More Conversations Into Booked Appointments — Automatically
          </h1>

          {/* Subheadline */}
          <p className="mb-6 text-lg text-muted-foreground sm:text-xl lg:text-2xl">
            Zaboo.ai builds AI systems for appointment-based businesses that respond instantly, qualify leads, and book
            appointments across Instagram, WhatsApp, SMS, and your website — without hiring more staff or spending more
            on ads.
          </p>

          {/* Support text */}
          <p className="mb-10 text-base text-muted-foreground sm:text-lg">
            If your business depends on leads, messages, and bookings, Zaboo.ai helps you capture more revenue from what
            you already have.
          </p>

          {/* CTA Button */}
          <div className="mb-6 flex justify-center">
            <Button onClick={handleCTA} size="lg" className="h-14 px-8 text-lg font-semibold">
              Apply for a Free Tailored AI Demo
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span>15-20 minute consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span>Built around your business</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span>No obligation</span>
            </div>
          </div>
        </div>

        {/* Abstract visual element */}
        <div className="mt-16 flex justify-center">
          <div className="relative h-64 w-full max-w-3xl">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
              <div className="absolute h-32 w-32 animate-pulse rounded-full bg-accent/10 blur-2xl" />
            </div>
            <div className="relative flex items-center justify-center gap-4">
              {["Instagram", "WhatsApp", "SMS", "Website"].map((platform, i) => (
                <div
                  key={platform}
                  className="flex h-20 w-20 items-center justify-center rounded-xl bg-card text-xs font-medium text-foreground shadow-lg ring-1 ring-border"
                  style={{ animation: `fadeInUp 0.6s ease-out ${i * 0.1}s both` }}
                >
                  {platform}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
