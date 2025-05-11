"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle2, Upload } from "lucide-react"
import { ResumeUploadForm } from "@/components/resume-upload-form"

export default function ForCandidatesPage() {
  return (
    <>
      <CandidateHero />
      <BenefitsSection />
      <ServicesSection />
      <ResumeSection />
      <TestimonialsSection />
    </>
  )
}

function CandidateHero() {
  return (
    <section className="pt-24 md:pt-32 bg-gradient-to-b from-emerald-600 to-teal-700 text-white">
      <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <Badge className="mb-4 w-fit bg-white/20 text-white hover:bg-white/30">For Candidates</Badge>
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block">Get Hired</span>
              <span className="block bg-gradient-to-r from-emerald-300 to-teal-200 bg-clip-text text-transparent">
                Faster
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-emerald-100">
              Submit your resume & let opportunities find you. Our AI-powered platform connects you with top employers
              looking for your skills.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50" asChild>
                <Link href="#upload-resume">
                  Submit Your Resume <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link href="#services">Resume Services</Link>
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
              <div className="absolute -top-4 -left-4 h-72 w-72 rounded-full bg-teal-500/20 mix-blend-multiply blur-xl" />
              <div className="absolute -bottom-4 -right-4 h-72 w-72 rounded-full bg-emerald-500/20 mix-blend-multiply blur-xl" />

              <div className="relative rounded-2xl bg-white/10 p-6 shadow-xl backdrop-blur-sm">
                <Image
                  src="/placeholder.svg?height=400&width=500&text=Smart+Hire+for+Candidates"
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
      title: "We help skilled professionals get hired faster",
      description:
        "Whether you're a fresher or experienced, we connect you with top recruiters and companies looking for talent like you.",
    },
  ]

  const features = [
    {
      icon: <CheckCircle2 className="h-5 w-5 text-emerald-500" />,
      text: "AI-powered job matching based on your skills and preferences",
    },
    {
      icon: <CheckCircle2 className="h-5 w-5 text-emerald-500" />,
      text: "Direct connections with hiring managers and recruiters",
    },
    {
      icon: <CheckCircle2 className="h-5 w-5 text-emerald-500" />,
      text: "Resume optimization and interview preparation services",
    },
    {
      icon: <CheckCircle2 className="h-5 w-5 text-emerald-500" />,
      text: "Personalized career guidance and salary negotiation support",
    },
  ]

  return (
    <section ref={ref} className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
          <div>
            <Badge className="mb-4 bg-emerald-100 text-emerald-700 hover:bg-emerald-200">Why Choose Us</Badge>
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{benefit.title}</h2>
                <p className="mt-4 text-lg text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}

            <div className="mt-8 space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 mt-1">{feature.icon}</div>
                  <p className="ml-3 text-gray-600">{feature.text}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-10">
              <Button
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white"
                asChild
              >
                <Link href="#upload-resume">
                  Submit Your Resume <ArrowRight className="ml-2 h-4 w-4" />
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
                src="/placeholder.svg?height=500&width=600&text=Career+Growth"
                alt="Career Growth"
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

function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const services = [
    {
      icon: <Upload className="h-6 w-6" />,
      title: "Resume Submission",
      description: "Upload your resume and let our AI match you with suitable job opportunities.",
    },
    {
      icon: <CheckCircle2 className="h-6 w-6" />,
      title: "Profile Enhancement",
      description: "Get expert tips to improve your resume and online professional profile.",
    },
    {
      icon: <CheckCircle2 className="h-6 w-6" />,
      title: "Interview Preparation",
      description: "Prepare for interviews with mock sessions and personalized feedback.",
    },
  ]

  return (
    <section ref={ref} className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-emerald-100 text-emerald-700 hover:bg-emerald-200">Our Services</Badge>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">How We Help You</h2>
          <p className="mt-4 text-lg text-gray-600">Comprehensive career services to help you land your dream job</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full border-none bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
                    {service.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ResumeSection() {
  return (
    <section id="upload-resume" className="py-16 md:py-24 bg-white scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-emerald-100 text-emerald-700 hover:bg-emerald-200">Get Started</Badge>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Submit Your Resume</h2>
          <p className="mt-4 text-lg text-gray-600">Upload your resume and let opportunities find you</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <ResumeUploadForm />
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  const testimonials = [
    {
      quote: "The Bright Hire helped me land a job at a top tech company within 2 weeks of submitting my resume!",
      name: "Alex Johnson",
      title: "Software Engineer",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "The resume optimization service completely transformed my job search. I started getting calls immediately.",
      name: "Sarah Chen",
      title: "UX Designer",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote: "Their interview preparation was invaluable. I felt confident and prepared for every question.",
      name: "Michael Rodriguez",
      title: "Product Manager",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-emerald-600 to-teal-700 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">Success Stories</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">From Our Candidates</h2>
          <p className="mt-4 text-lg text-emerald-100">
            Hear from professionals who found their dream jobs through The Bright Hire
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-none">
              <CardContent className="p-6">
                <div className="mb-4 text-lg italic">"{testimonial.quote}"</div>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-emerald-100">{testimonial.title}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50" asChild>
            <Link href="#upload-resume">
              Submit Your Resume <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
