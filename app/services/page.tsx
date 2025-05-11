"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Users, Search, FileText, MessageSquare, ArrowRight } from "lucide-react"

export default function ServicesPage() {
  return (
    <>
      <ServiceHero />
      <ServicesList />
      <ProcessSection />
      <CtaSection />
    </>
  )
}

function ServiceHero() {
  return (
    <section className="pt-24 md:pt-32 bg-gradient-to-b from-blue-600 to-blue-700 text-white">
      <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">Our Services</Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Smart solutions for smarter hiring
            </h1>
            <p className="mt-6 text-xl text-blue-100">
              Comprehensive recruitment services tailored to your specific needs
            </p>
          </motion.div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="relative h-16 sm:h-24">
        <svg
          className="absolute bottom-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  )
}

function ServicesList() {
  const services = [
    {
      id: "permanent",
      icon: <Briefcase className="h-8 w-8" />,
      title: "Permanent Recruitment",
      description: "End-to-end hiring service for full-time roles. Fast, high-quality shortlisting using AI.",
      features: [
        "AI-powered candidate matching",
        "Comprehensive skill assessment",
        "Cultural fit evaluation",
        "Salary benchmarking",
        "Offer negotiation support",
      ],
      color: "blue",
    },
    {
      id: "contract",
      icon: <Users className="h-8 w-8" />,
      title: "Contract Staffing",
      description: "Hire skilled professionals for short-term or project-based roles without the hassle.",
      features: [
        "Rapid deployment of talent",
        "Flexible contract durations",
        "Payroll management",
        "Performance monitoring",
        "Contract extension options",
      ],
      color: "purple",
    },
    {
      id: "executive",
      icon: <Search className="h-8 w-8" />,
      title: "Executive Search",
      description: "Specialized in CXO, VP, and senior leadership hiring with confidentiality and precision.",
      features: [
        "Discreet headhunting",
        "Industry-specific expertise",
        "Leadership assessment",
        "Competitive analysis",
        "Executive onboarding support",
      ],
      color: "pink",
    },
    {
      id: "resume",
      icon: <FileText className="h-8 w-8" />,
      title: "Resume Services",
      description: "Improve your resume with expert guidance to boost shortlisting chances.",
      features: [
        "ATS optimization",
        "Keyword enhancement",
        "Achievement highlighting",
        "Professional formatting",
        "Industry-specific tailoring",
      ],
      color: "green",
    },
    {
      id: "interview",
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Interview Preparation",
      description: "Enhance your interview skills with mock sessions and feedback. Free for partner-placed candidates.",
      features: [
        "Mock interview sessions",
        "Personalized feedback",
        "Question preparation",
        "Behavioral interview coaching",
        "Salary negotiation tactics",
      ],
      color: "amber",
    },
  ]

  const getColorClasses = (color) => {
    const colorMap = {
      blue: {
        light: "bg-blue-50 text-blue-700 border-blue-200",
        icon: "bg-blue-100 text-blue-700",
        dark: "bg-blue-700 hover:bg-blue-800 text-white",
      },
      purple: {
        light: "bg-purple-50 text-purple-700 border-purple-200",
        icon: "bg-purple-100 text-purple-700",
        dark: "bg-purple-700 hover:bg-purple-800 text-white",
      },
      pink: {
        light: "bg-pink-50 text-pink-700 border-pink-200",
        icon: "bg-pink-100 text-pink-700",
        dark: "bg-pink-700 hover:bg-pink-800 text-white",
      },
      green: {
        light: "bg-green-50 text-green-700 border-green-200",
        icon: "bg-green-100 text-green-700",
        dark: "bg-green-700 hover:bg-green-800 text-white",
      },
      amber: {
        light: "bg-amber-50 text-amber-700 border-amber-200",
        icon: "bg-amber-100 text-amber-700",
        dark: "bg-amber-700 hover:bg-amber-800 text-white",
      },
    }

    return colorMap[color]
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {services.map((service, index) => {
            const colorClasses = getColorClasses(service.color)
            const isEven = index % 2 === 0

            return (
              <div key={service.id} id={service.id} className="scroll-mt-24">
                <div
                  className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-12 items-center`}
                >
                  <div className="w-full lg:w-1/2">
                    <div
                      className={`inline-flex items-center justify-center rounded-2xl ${colorClasses.light} p-2 mb-4`}
                    >
                      <div className={`rounded-xl ${colorClasses.icon} p-3`}>{service.icon}</div>
                      <span className="ml-2 text-sm font-medium">{service.title}</span>
                    </div>

                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{service.title}</h2>

                    <p className="mt-4 text-lg text-gray-600">{service.description}</p>

                    <ul className="mt-8 space-y-4">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <div
                            className={`mt-1 flex h-5 w-5 items-center justify-center rounded-full ${colorClasses.icon}`}
                          >
                            <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <span className="ml-3 text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8">
                      <Button className={colorClasses.dark} asChild>
                        <Link href={`/contact-us?service=${service.id}`}>
                          Request Service <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>

                  <div className="w-full lg:w-1/2">
                    <div className="relative rounded-2xl overflow-hidden shadow-xl">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br from-${service.color}-400 to-${service.color}-600 opacity-20`}
                      />
                      <Image
                        src={`/placeholder.svg?height=400&width=600&text=${service.title}`}
                        alt={service.title}
                        width={600}
                        height={400}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function ProcessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const steps = [
    {
      title: "Submit Request",
      description: "Tell us about your needs and requirements.",
    },
    {
      title: "Get Shortlist",
      description: "Receive a curated list of qualified candidates.",
    },
    {
      title: "Interviews",
      description: "Meet and evaluate the top candidates.",
    },
    {
      title: "Hire",
      description: "Select and onboard your perfect match.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-200">How It Works</Badge>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Hiring Process</h2>
          <p className="mt-4 text-lg text-gray-600">
            A simple, efficient process designed to find the right talent quickly
          </p>
        </div>

        <div ref={ref} className="relative">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gray-200 md:hidden" />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Card className="relative h-full border-none bg-white shadow-lg">
                    {/* Step number */}
                    <div className="absolute -top-5 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white md:left-1/2 md:-top-5">
                      {index + 1}
                    </div>

                    <CardHeader className="pt-8 text-center">
                      <CardTitle>{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center text-gray-600">
                      <p>{step.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function CtaSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to transform your hiring process?</h2>
          <p className="mt-4 text-xl text-blue-100">Get started with Smart Hire today and find your perfect match.</p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50" asChild>
              <Link href="/contact-us">Contact Us</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <Link href="/for-employers">Post a Job</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
