import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HowItWorksHero } from "@/components/sections/how-it-works-hero"
import { ProcessSection } from "@/components/sections/process-section"
import { IntegrationSection } from "@/components/sections/integration-section"
import { AutomationFlowSection } from "@/components/sections/automation-flow-section"
import { TechStackSection } from "@/components/sections/tech-stack-section"

export default function HowItWorks() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HowItWorksHero />
        <ProcessSection />
        <AutomationFlowSection />
        <IntegrationSection />
        <TechStackSection />
      </main>
      <Footer />
    </div>
  )
}
