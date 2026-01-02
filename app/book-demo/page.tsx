import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BookDemoHero } from "@/components/sections/book-demo-hero"
import { BookingSection } from "@/components/sections/booking-section"
import { DemoFAQSection } from "@/components/sections/demo-faq-section"

export default function BookDemo() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <BookDemoHero />
        <BookingSection />
        <DemoFAQSection />
      </main>
      <Footer />
    </div>
  )
}
