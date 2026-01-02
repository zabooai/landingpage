"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function FeaturesHero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 via-background to-primary/5 relative overflow-hidden">
      <div className="absolute bottom-10 left-10 animate-float" style={{ animationDelay: "1s" }}>
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
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            Every Feature You Need to <span className="text-primary">Win</span>
          </h1>
          <p
            className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up leading-relaxed"
            style={{ animationDelay: "100ms" }}
          >
            Zaboo isn't just a chatbot. It's a complete lead conversion system that works harder than your best sales
            rep.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            <Button size="lg" asChild>
              <Link href="/book-demo">
                Try It Free <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
