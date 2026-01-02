"use client"

import { TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function ResultsHero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-background via-green-500/5 to-background relative overflow-hidden">
      <div className="absolute top-20 right-20 animate-float">
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
          <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-600 dark:text-green-400 px-4 py-2 rounded-full mb-6 animate-fade-in-up">
            <TrendingUp className="h-4 w-4" />
            <span className="font-semibold">Real Results From Real Businesses</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">The Numbers Don't Lie</h1>
          <p
            className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up leading-relaxed"
            style={{ animationDelay: "100ms" }}
          >
            See how businesses across industries are transforming their lead conversion with Zaboo
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            <Button size="lg" asChild>
              <Link href="/book-demo">Get Your Custom ROI Analysis</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
