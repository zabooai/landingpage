import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ResultsHero } from "@/components/sections/results-hero"
import { BeforeAfterSection } from "@/components/sections/before-after-section"
import { MetricsSection } from "@/components/sections/metrics-section"
import { IndustryResultsSection } from "@/components/sections/industry-results-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"

export default function Results() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ResultsHero />
        <BeforeAfterSection />
        <MetricsSection />
        <IndustryResultsSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  )
}
