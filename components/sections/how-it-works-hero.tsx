"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function HowItWorksHero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden">
      <div className="absolute top-20 right-10 animate-float">
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
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            How <span className="text-primary">Zaboo</span> Works
          </h1>
          <p
            className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up leading-relaxed"
            style={{ animationDelay: "100ms" }}
          >
            From setup to conversion in minutes. Here's how Zaboo transforms your lead management from chaos to clarity.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            <Button size="lg" asChild>
              <Link href="/book-demo">
                See It In Action <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/calculator">Calculate Your ROI</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
