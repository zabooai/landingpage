import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CalculatorHero } from "@/components/sections/calculator-hero"
import { RevenueCalculatorSection } from "@/components/sections/revenue-calculator-section"
import { ROIBreakdownSection } from "@/components/sections/roi-breakdown-section"

export default function Calculator() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <CalculatorHero />
        <RevenueCalculatorSection />
        <ROIBreakdownSection />
      </main>
      <Footer />
    </div>
  )
}
