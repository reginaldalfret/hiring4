"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { JobPostForm } from "@/components/job-post-form"

export default function ForEmployersPage() {
  return (
    <>
      <EmployerHero />
      <BenefitsSection />
      <ProcessSection />
      <JobPostSection />
      <FaqSection />
    </>
  )
}

function EmployerHero() {
  return (
    <section className="pt-24 md:pt-32 bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <Badge className="mb-4 w-fit bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-400">
              For Employers
            </Badge>
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block">Why Work</span>
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                With Us?
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-gray-300">
              The Bright Hire connects you with pre-screened, job-ready talent. Our AI-powered platform finds the perfect
              match for your team faster than traditional recruitment.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                asChild
              >
                <Link href="#post-job">
                  Post a Job <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-gray-700 text-white hover:bg-gray-800" asChild>
                <Link href="/contact-us">Schedule a Call</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-lg">
              <div className="absolute -top-4 -left-4 h-72 w-72 rounded-full bg-purple-500/20 mix-blend-multiply blur-xl" />
              <div className="absolute -bottom-4 -right-4 h-72 w-72 rounded-full bg-blue-500/20 mix-blend-multiply blur-xl" />

              <div className="relative rounded-2xl bg-gray-800/80 p-6 shadow-xl backdrop-blur-sm">
                <Image
                  src="/placeholder.svg?height=400&width=500&text=The+Bright+Hire+for+Employers"
                  alt="Smart Hire Platform"
                  width={500}
                  height={400}
                  className="rounded-xl"
                />
              </div>
            </div>
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

function BenefitsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const benefits = [
    {
      icon: <CheckCircle2 className="h-6 w-6 text-green-500" />,
      title: "Pre-screened Talent",
      description: "All candidates are vetted and trained for job-readiness.",
    },
    {
      icon: <CheckCircle2 className="h-6 w-6 text-green-500" />,
      title: "48-Hour Shortlisting",
      description: "Receive matched profiles within 2 business days.",
    },
    {
      icon: <CheckCircle2 className="h-6 w-6 text-green-500" />,
      title: "First Hire Trial",
      description: "Try our service with a trial hire before full engagement.",
    },
  ]

  return (
    <section ref={ref} className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
          <div>
            <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-200">Benefits</Badge>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Recruitment that works for you
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our AI-powered platform and expert recruiters work together to find you the perfect candidates, faster and
              more efficiently than traditional methods.
            </p>

            <div className="mt-8 space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="flex"
                >
                  <div className="flex-shrink-0">{benefit.icon}</div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">{benefit.title}</h3>
                    <p className="mt-1 text-gray-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-10">
              <Button
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                asChild
              >
                <Link href="/services">
                  Explore Our Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="relative rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/placeholder.svg?height=500&width=600&text=Smart+Hire+Benefits"
                alt="Smart Hire Benefits"
                width={600}
                height={500}
                className="w-full h-auto"
              />
            </motion.div>
          </div>
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
      title: "Submit Job",
      description: "Post your job requirements and specifications.",
    },
    {
      title: "Get Shortlist",
      description: "Receive a curated list of qualified candidates within 48 hours.",
    },
    {
      title: "Interviews",
      description: "Meet and evaluate the top candidates with our support.",
    },
    {
      title: "Hire",
      description: "Select and onboard your perfect match with confidence.",
    },
  ]

  return (
    <section ref={ref} className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">How It Works</Badge>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Hiring Process</h2>
          <p className="mt-4 text-lg text-gray-600">
            A simple, efficient process designed to find the right talent quickly
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full border-none bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    {index + 1}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function JobPostSection() {
  return (
    <section id="post-job" className="py-16 md:py-24 bg-white scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-200">Get Started</Badge>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Post a Job Requirement</h2>
          <p className="mt-4 text-lg text-gray-600">
            Fill out this form and our team will get in touch within 24 hours.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <JobPostForm />
        </div>
      </div>
    </section>
  )
}

function FaqSection() {
  const faqs = [
    {
      question: "How does your AI matching technology work?",
      answer:
        "Our proprietary AI analyzes job requirements and candidate profiles across 50+ parameters including skills, experience, cultural preferences, and career trajectory to find the most suitable matches.",
    },
    {
      question: "What industries do you specialize in?",
      answer:
        "We specialize in technology, finance, healthcare, and marketing sectors, but our platform is designed to work across all industries with customized matching algorithms.",
    },
    {
      question: "How much does your service cost?",
      answer:
        "Our pricing is based on the type of role and service level. We offer flexible models including success-based fees and subscription plans. Contact us for a customized quote.",
    },
    {
      question: "What if I'm not satisfied with the candidates?",
      answer:
        "We offer a satisfaction guarantee. If you're not happy with the initial shortlist, we'll refine our search and provide additional candidates at no extra cost.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">FAQ</Badge>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Frequently Asked Questions</h2>
          <p className="mt-4 text-lg text-gray-600">Find answers to common questions about our services</p>
        </div>

        <div className="max-w-3xl mx-auto divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <div key={index} className="py-6">
              <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            Still have questions?{" "}
            <Link href="/contact-us" className="text-blue-600 hover:underline font-medium">
              Contact our team
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
