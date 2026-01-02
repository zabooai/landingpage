"use client"

import { Calculator } from "lucide-react"
import Image from "next/image"

export function CalculatorHero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-background via-amber-500/5 to-background relative overflow-hidden">
      <div className="absolute top-10 left-20 animate-float" style={{ animationDelay: "0.5s" }}>
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Zaboo%20Ghost%20White%20Background%20png%20no%20backgf-8n6DmyAURSWS5ukx3EsUzfbtkyyyCb.png"
          alt="Zaboo"
          width={100}
          height={100}
          className="opacity-20"
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-600 dark:text-amber-400 px-4 py-2 rounded-full mb-6 animate-fade-in-up">
            <Calculator className="h-4 w-4" />
            <span className="font-semibold">Free Revenue Calculator</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            Calculate Your <span className="text-primary">Lost Revenue</span>
          </h1>
          <p
            className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up leading-relaxed"
            style={{ animationDelay: "100ms" }}
          >
            Discover how much money you're leaving on the table with slow lead response times
          </p>
        </div>
      </div>
    </section>
  )
}
