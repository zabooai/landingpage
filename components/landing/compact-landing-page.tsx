"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  CheckCircle2,
  Zap,
  Calendar,
  MessageSquare,
  TrendingUp,
  Clock,
  Phone,
  RotateCcw,
  Send,
  Globe,
  Timer,
  Moon,
  Users,
  TrendingDown,
} from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
}

export function CompactLandingPage() {
  const [expandedIndustry, setExpandedIndustry] = useState<string | null>(null)

  const handleCTA = () => {
    window.location.href = "https://zabooai.com/form"
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="relative border-b border-gray-200 bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        {/* Video Background Layer */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="h-full w-full object-cover opacity-85">
            <source
              src="https://assets.cdn.filesafe.space/Zk85CLpbWcXkQiUiSL4n/media/671fc0ccce71e673f61b5ee7.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        {/* Content Layer */}
        <div className="relative z-10 mx-auto max-w-6xl">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex justify-center"
          >
            <Image
              src="/images/zaboo-20ai-20png-20-281-29-20-281-29.png"
              alt="Zaboo.ai"
              width={240}
              height={72}
              className="h-auto w-60"
            />
          </motion.div>

          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left: Headline & CTA */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-center lg:text-left"
            >
              <motion.h1
                variants={fadeInUp}
                className="mb-5 text-balance text-3xl font-bold leading-tight tracking-tight text-black sm:text-4xl lg:text-5xl xl:text-6xl"
              >
                Turn Conversations Into Booked Appointments — Automatically
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="mb-8 text-pretty text-base leading-relaxed text-gray-600 sm:text-lg lg:text-xl"
              >
                AI that responds instantly, qualifies leads, and books appointments 24/7 across Instagram, WhatsApp,
                SMS, and your website.
              </motion.p>

              <motion.div variants={fadeInUp}>
                <Button
                  onClick={handleCTA}
                  size="lg"
                  className="relative mb-6 h-14 w-full bg-[#825de5] px-8 text-base font-bold text-white shadow-lg transition-all hover:scale-105 hover:bg-[#7048d9] sm:h-16 sm:w-auto sm:px-12 sm:text-xl"
                  style={{
                    animation: "pulse-scale 2s ease-in-out infinite",
                  }}
                >
                  Get a Free AI Consultation + Live Demo
                </Button>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 sm:gap-6 lg:justify-start"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-[#825de5]" />
                  <span>15-20 minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-[#825de5]" />
                  <span>Tailored demo</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-[#825de5]" />
                  <span>Zero obligation</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Key Stats/Benefits */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="grid gap-4 sm:grid-cols-2"
            >
              {[
                {
                  metric: "247%",
                  label: "Avg conversion increase",
                  icon: <TrendingUp className="h-7 w-7 sm:h-8 sm:w-8" />,
                },
                { metric: "< 2 min", label: "Response time", icon: <Zap className="h-7 w-7 sm:h-8 sm:w-8" /> },
                { metric: "24/7", label: "Coverage", icon: <Clock className="h-7 w-7 sm:h-8 sm:w-8" /> },
                { metric: "6+", label: "Industries served", icon: <Globe className="h-7 w-7 sm:h-8 sm:w-8" /> },
              ].map((stat) => (
                <motion.div key={stat.label} variants={scaleIn}>
                  <Card className="border-2 border-gray-200 bg-white p-5 text-center shadow-lg sm:p-6">
                    <div className="mb-3 flex justify-center text-[#825de5]">{stat.icon}</div>
                    <div className="mb-1 text-2xl font-bold text-black sm:text-3xl">{stat.metric}</div>
                    <div className="text-xs text-gray-600 sm:text-sm">{stat.label}</div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Problem + Solution - Combined Section */}
      <section className="border-b border-gray-200 bg-gray-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Problem */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="mb-4 text-balance text-center text-2xl font-bold text-black sm:text-3xl lg:text-4xl"
            >
              Your Leads Are Slipping Through the Cracks
            </motion.h2>
            <motion.p variants={fadeInUp} className="mb-10 text-center text-base text-gray-600 sm:text-lg">
              You're spending money on ads, but leads never convert because:
            </motion.p>

            <motion.div variants={staggerContainer} className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
              {[
                {
                  title: "Slow Response",
                  desc: "Leads go cold waiting for replies",
                  icon: <Timer className="h-9 w-9 sm:h-10 sm:w-10" />,
                  color: "bg-red-50 border-red-200 text-red-600",
                },
                {
                  title: "Off-Hours Loss",
                  desc: "Messages when you're closed",
                  icon: <Moon className="h-9 w-9 sm:h-10 sm:w-10" />,
                  color: "bg-orange-50 border-orange-200 text-orange-600",
                },
                {
                  title: "Overwhelmed Staff",
                  desc: "Team buried in repetitive questions",
                  icon: <Users className="h-9 w-9 sm:h-10 sm:w-10" />,
                  color: "bg-yellow-50 border-yellow-200 text-yellow-700",
                },
                {
                  title: "Missed Follow-ups",
                  desc: "Inactive leads never re-engaged",
                  icon: <TrendingDown className="h-9 w-9 sm:h-10 sm:w-10" />,
                  color: "bg-[#825de5]/10 border-[#825de5]/30 text-[#825de5]",
                },
              ].map((item) => (
                <motion.div key={item.title} variants={scaleIn} className="h-full">
                  <Card className={`h-full border-2 ${item.color} p-5 text-center sm:p-6`}>
                    <div className="mb-3 flex justify-center">{item.icon}</div>
                    <h3 className="mb-2 text-base font-bold text-black sm:text-lg">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-600">{item.desc}</p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="relative"
          >
            <Card className="border-2 border-gray-200 bg-white p-6 shadow-xl sm:p-8 lg:p-12">
              <h2 className="mb-4 text-balance text-center text-2xl font-bold text-black sm:text-3xl lg:text-4xl">
                Zaboo Solves This — Automatically
              </h2>
              <p className="mb-8 text-center text-base text-gray-600 sm:mb-10 sm:text-lg">
                Your AI assistant working 24/7 across all channels
              </p>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
                className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              >
                {[
                  {
                    icon: (
                      <div className="flex justify-center gap-2">
                        <MessageSquare className="h-5 w-5 text-[#825de5] sm:h-6 sm:w-6" />
                        <Send className="h-5 w-5 text-[#825de5] sm:h-6 sm:w-6" />
                        <Phone className="h-5 w-5 text-[#825de5] sm:h-6 sm:w-6" />
                        <Globe className="h-5 w-5 text-[#825de5] sm:h-6 sm:w-6" />
                      </div>
                    ),
                    title: "Instant Response",
                    desc: "Replies in seconds on Instagram, WhatsApp, SMS and website",
                  },
                  {
                    icon: <RotateCcw className="h-6 w-6 sm:h-7 sm:w-7" />,
                    title: "Lead Reactivation",
                    desc: "Re-engages with aged/abandoned leads automatically",
                  },
                  {
                    icon: <Phone className="h-6 w-6 sm:h-7 sm:w-7" />,
                    title: "Voice AI Calls",
                    desc: "Takes calls for you, when you're busy or unavailable",
                  },
                  {
                    icon: <CheckCircle2 className="h-6 w-6 sm:h-7 sm:w-7" />,
                    title: "Review Generation",
                    desc: "Follows up with satisfied customers to generate you positive Google reviews",
                  },
                  {
                    icon: <MessageSquare className="h-6 w-6 sm:h-7 sm:w-7" />,
                    title: "Smart Qualification",
                    desc: "Qualifies leads, filters tire-kickers",
                  },
                  {
                    icon: <Calendar className="h-6 w-6 sm:h-7 sm:w-7" />,
                    title: "Automatic Booking",
                    desc: "Books appointments directly into your calendar",
                  },
                ].map((feature) => (
                  <motion.div key={feature.title} variants={fadeInUp} className="text-center">
                    <div className="mb-3 flex justify-center text-[#825de5]">{feature.icon}</div>
                    <h3 className="mb-2 text-base font-bold text-black sm:text-lg">{feature.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-600">{feature.desc}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Embedded CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mt-8 text-center sm:mt-10"
              >
                <Button
                  onClick={handleCTA}
                  size="lg"
                  className="h-12 bg-[#825de5] px-8 text-base font-bold text-white shadow-xl transition-all hover:scale-105 hover:bg-[#7048d9] sm:h-14 sm:px-10 sm:text-lg"
                >
                  See How Zaboo Works For Your Business →
                </Button>
              </motion.div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Who It's For - Horizontal Scroll */}
      <section className="border-b border-gray-200 bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-0 left-0 h-64 w-full rotate-2 bg-gradient-to-r from-gray-100 to-transparent" />
          <div className="absolute bottom-0 right-0 h-64 w-full -rotate-1 bg-gradient-to-l from-gray-100 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="mb-4 text-balance text-center text-2xl font-bold text-black sm:text-3xl lg:text-4xl"
            >
              Built for Appointment-Based Businesses
            </motion.h2>
            <motion.p variants={fadeInUp} className="mb-8 text-center text-base text-gray-600 sm:mb-10 sm:text-lg">
              Hover over any industry to learn how Zaboo helps
            </motion.p>
          </motion.div>

          {/* Background Image */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="scrollbar-hide flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory sm:gap-6">
              {[
                {
                  id: "car-detailing",
                  title: "Car Detailing & Automotive",
                  image: "/professional-car-detailing-service-luxury-vehicle.jpg",
                  description:
                    "Perfect for auto detailing shops, car washes, and mobile detailing services that handle high inquiry volumes and need instant booking.",
                },
                {
                  id: "solar",
                  title: "Solar Installation Companies",
                  image: "/solar-panel-installation-on-modern-home-rooftop.jpg",
                  description:
                    "Ideal for solar companies managing complex sales cycles and high-value leads requiring immediate follow-up.",
                },
                {
                  id: "medspa",
                  title: "MedSpas & Aesthetic Clinics",
                  image: "/modern-luxury-medspa-treatment-room-aesthetic-clin.jpg",
                  description:
                    "Perfect for aesthetic practices that book consultations, treatments, and need to qualify leads based on specific services.",
                },
                {
                  id: "salon",
                  title: "Nail Salons & Beauty Services",
                  image: "/elegant-nail-salon-manicure-service-beauty-studio.jpg",
                  description:
                    "Built for high-volume appointment booking with instant availability checks and automated reminders.",
                },
                {
                  id: "contractors",
                  title: "Home Services & Contractors",
                  image: "/professional-contractor-home-renovation-service.jpg",
                  description:
                    "Designed for contractors managing quote requests, site visits, and project bookings across multiple channels.",
                },
                {
                  id: "dental",
                  title: "Dental & Medical Practices",
                  image: "/modern-dental-office-medical-practice-reception.jpg",
                  description:
                    "Handles patient inquiries, insurance questions, and appointment scheduling with HIPAA-compliant conversations.",
                },
              ].map((industry) => (
                <div
                  key={industry.id}
                  className="group relative min-w-[280px] flex-shrink-0 snap-start overflow-hidden rounded-2xl sm:min-w-[320px] lg:min-w-[380px]"
                >
                  {/* Background Image */}
                  <div className="relative h-[260px] sm:h-[280px] lg:h-[320px]">
                    <Image
                      src={industry.image || "/placeholder.svg"}
                      alt={industry.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Dark overlay - gets darker on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 transition-all duration-300 group-hover:from-black/90 group-hover:via-black/50" />

                    {/* Industry Title */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                      <h3 className="text-xl font-bold text-white sm:text-2xl lg:text-3xl">{industry.title}</h3>

                      {/* Description - shows on hover */}
                      <p className="mt-3 text-sm leading-relaxed text-white/90 opacity-0 transition-all duration-300 group-hover:opacity-100 sm:text-base">
                        {industry.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Scroll indicator */}
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-600 sm:mt-6">
              <span>←</span>
              <span>Scroll to explore</span>
              <span>→</span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 text-center text-base font-medium text-black sm:mt-10 sm:text-lg"
          >
            If your business relies on bookings / appointments — Zaboo works for you.
          </motion.p>
        </div>
      </section>

      {/* Why Zaboo - Compact */}
      <section className="border-b border-gray-200 bg-gray-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="mb-8 text-balance text-center text-2xl font-bold text-black sm:mb-10 sm:text-3xl lg:text-4xl"
          >
            Why Choose Zaboo.ai
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
          >
            {[
              {
                icon: <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6" />,
                title: "Built Around Your Business",
                desc: "Trained on your services, pricing, and processes — not a template",
              },
              {
                icon: <Globe className="h-5 w-5 sm:h-6 sm:w-6" />,
                title: "Works With Existing Tools",
                desc: "Integrates with your CRM, calendar, and channels seamlessly",
              },
              {
                icon: <Calendar className="h-5 w-5 sm:h-6 sm:w-6" />,
                title: "Revenue-Focused",
                desc: "Every conversation designed to convert and book appointments",
              },
              {
                icon: <Zap className="h-5 w-5 sm:h-6 sm:w-6" />,
                title: "Reduces Manual Work",
                desc: "Your team serves customers while Zaboo manages leads 24/7",
              },
            ].map((benefit) => (
              <motion.div key={benefit.title} variants={scaleIn} className="h-full">
                <Card className={`h-full border-2 border-gray-200 bg-white p-5 text-center shadow-lg sm:p-6`}>
                  <div className="mb-3 flex justify-center text-[#825de5]">{benefit.icon}</div>
                  <h3 className="mb-2 text-sm font-bold text-black sm:text-base">{benefit.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{benefit.desc}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative overflow-hidden bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        {/* Subtle diagonal wave background */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-0 left-0 h-full w-full rotate-2 bg-gradient-to-br from-gray-100 to-transparent" />
          <div className="absolute bottom-0 right-0 h-full w-full -rotate-1 bg-gradient-to-tl from-gray-100 to-transparent" />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="relative mx-auto max-w-4xl text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="mb-4 text-balance text-2xl font-bold text-black sm:text-3xl lg:text-4xl xl:text-5xl"
          >
            Ready to Stop Losing Leads?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mb-8 text-pretty text-base leading-relaxed text-gray-600 sm:mb-10 sm:text-lg lg:text-xl"
          >
            Book a free 15-20 minute consultation. We'll review your business and show you exactly how Zaboo can help
            you convert more leads — using real scenarios from your industry.
          </motion.p>

          <motion.div variants={fadeInUp}>
            <Button
              onClick={handleCTA}
              size="lg"
              className="h-14 bg-[#825de5] px-8 text-base font-bold text-white shadow-2xl transition-all hover:scale-105 hover:bg-[#7048d9] sm:h-16 sm:px-12 sm:text-xl"
              style={{
                animation: "pulse-scale 2s ease-in-out infinite",
              }}
            >
              Request a FREE Demo now!
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <Image
            src="/images/zaboo-20ai-20png-20-281-29-20-281-29.png"
            alt="Zaboo.ai"
            width={180}
            height={54}
            className="mx-auto mb-4 h-auto w-44"
          />
          <p className="text-sm text-gray-600">© 2025 ClearIdeas, LDA. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
