import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { FeaturesHero } from "@/components/sections/features-hero"
import { FeaturesGrid } from "@/components/sections/features-grid"
import { CapabilitiesSection } from "@/components/sections/capabilities-section"
import { IndustriesSection } from "@/components/sections/industries-section"
import { ComparisonSection } from "@/components/sections/comparison-section"

export default function Features() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <FeaturesHero />
        <FeaturesGrid />
        <CapabilitiesSection />
        <IndustriesSection />
        <ComparisonSection />
      </main>
      <Footer />
    </div>
  )
}
