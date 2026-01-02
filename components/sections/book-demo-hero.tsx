"use client"

import { Calendar } from "lucide-react"
import Image from "next/image"

export function BookDemoHero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 via-background to-primary/5 relative overflow-hidden">
      <div className="absolute bottom-20 right-20 animate-float" style={{ animationDelay: "1s" }}>
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Zaboo%20Ghost%20White%20Background%20png%20no%20backgf-8n6DmyAURSWS5ukx3EsUzfbtkyyyCb.png"
          alt="Zaboo"
          width={120}
          height={120}
          className="opacity-20"
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 animate-fade-in-up">
            <Calendar className="h-4 w-4" />
            <span className="font-semibold">Free 15-Minute Strategy Session</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            Let's Turn Your Leads Into <span className="text-primary">Revenue</span>
          </h1>
          <p
            className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up leading-relaxed"
            style={{ animationDelay: "100ms" }}
          >
            Book a 15-minute call to review your lead conversion process and discover exactly how much revenue you're
            losing to slow follow-up
          </p>
        </div>
      </div>
    </section>
  )
}
