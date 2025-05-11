"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useInView, useAnimation } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Clock, Award, Zap, ChevronRight } from "lucide-react"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { AnimatedStats } from "@/components/animated-stats"
import { SkillCloud } from "@/components/skill-cloud"
import { JobMatchVisualization } from "@/components/job-match-visualization"

export default function Home() {
  return (
    <>
      <HeroSection />
      <AnimatedStats />
      <FeaturesSection />
      <ServicesSection />
      <JobMatchSection />
      <TestimonialsSection />
      <SkillsSection />
      <CtaSection />
    </>
  )
}

function HeroSection() {
  return (
    <section className="relative pt-24 md:pt-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900" />

      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-purple-300/20 blur-3xl animate-blob" />
        <div className="absolute top-40 -left-20 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-40 right-20 h-64 w-64 rounded-full bg-pink-300/20 blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="container relative mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <Badge className="mb-4 w-fit bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-400">
              AI-Powered Recruitment
            </Badge>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              <span className="block">Smart Hiring.</span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                Bright Futures.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-gray-600 dark:text-gray-300">
              AI-enabled recruitment services connecting companies with top-tier, job-ready talent. Find the perfect
              match faster and more efficiently than ever before.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 hover:from-blue-700 hover:via-purple-700 hover:to-pink-600 text-white"
                asChild
              >
                <Link href="/for-employers">
                  Post a Job <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300 dark:border-gray-700" asChild>
                <Link href="/for-candidates">Submit Your Resume</Link>
              </Button>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-900 overflow-hidden"
                  >
                    <Image
                      src={`/images/avatar-${i}.jpg`}
                      alt={`User ${i}`}
                      width={32}
                      height={32}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <span className="ml-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                Trusted by 500+ companies worldwide
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-lg">
              <div className="absolute -top-4 -left-4 h-72 w-72 rounded-full bg-purple-300/30 mix-blend-multiply blur-xl dark:bg-purple-900/30" />
              <div className="absolute -bottom-4 -right-4 h-72 w-72 rounded-full bg-blue-300/30 mix-blend-multiply blur-xl dark:bg-blue-900/30" />

              <div className="relative rounded-2xl bg-white/80 p-6 shadow-xl backdrop-blur-sm dark:bg-gray-800/80">
                <Image
                  src="/images/hero-image.png"
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
    </section>
  )
}

function FeaturesSection() {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const features = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Pre-screened Talent",
      description: "All candidates are vetted and trained for job-readiness.",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "48-Hour Shortlisting",
      description: "Receive matched profiles within 2 business days.",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "First Hire Trial",
      description: "Try our service with a trial hire before full engagement.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "AI-Powered Matching",
      description: "Our algorithms find the perfect fit for your requirements.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-200 dark:bg-purple-900/30 dark:text-purple-400">
            Why Choose Us?
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Recruitment Reimagined
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            We combine cutting-edge technology with human expertise to deliver exceptional hiring experiences.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-800"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function ServicesSection() {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const services = [
    {
      title: "Permanent Recruitment",
      description: "End-to-end hiring service for full-time roles. Fast, high-quality shortlisting using AI.",
      color: "from-blue-500 to-blue-700",
      link: "/services#permanent",
      image: "/images/service-permanent.png",
    },
    {
      title: "Contract Staffing",
      description: "Hire skilled professionals for short-term or project-based roles without the hassle.",
      color: "from-purple-500 to-purple-700",
      link: "/services#contract",
      image: "/images/service-contract.png",
    },
    {
      title: "Executive Search",
      description: "Specialized in CXO, VP, and senior leadership hiring with confidentiality and precision.",
      color: "from-pink-500 to-pink-700",
      link: "/services#executive",
      image: "/images/service-executive.png",
    },
    {
      title: "Resume Services",
      description: "Improve your resume with expert guidance to boost shortlisting chances.",
      color: "from-green-500 to-green-700",
      link: "/services#resume",
      image: "/images/service-resume.png",
    },
    {
      title: "Interview Preparation",
      description: "Enhance your interview skills with mock sessions and feedback. Free for partner-placed candidates.",
      color: "from-amber-500 to-amber-700",
      link: "/services#interview",
      image: "/images/service-interview.png",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">Our Services</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Smart solutions for smarter hiring</h2>
          <p className="mt-4 text-lg text-blue-100">
            Comprehensive recruitment services tailored to your specific needs
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm p-6 shadow-lg transition-all hover:bg-white/20"
            >
              <div
                className={`absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br ${service.color} opacity-50 blur-xl`}
              />

              <div className="relative h-48 w-full mb-4 overflow-hidden rounded-lg">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
              <p className="mb-4 text-blue-100">{service.description}</p>
              <Link
                href={service.link}
                className="inline-flex items-center text-sm font-medium text-white hover:underline"
              >
                Request Service
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function JobMatchSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          <div>
            <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-200 dark:bg-purple-900/30 dark:text-purple-400">
              AI-Powered Matching
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Perfect matches, every time
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Our advanced AI algorithm analyzes over 50 parameters to find the perfect match between candidates and job
              openings. Experience recruitment like never before.
            </p>

            <motion.ul
              className="mt-8 space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.2 },
                },
              }}
            >
              {[
                "Skills and experience matching",
                "Cultural fit assessment",
                "Career trajectory analysis",
                "Personality compatibility",
                "Work style preferences",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-700 dark:text-gray-300">{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            <div className="mt-8">
              <Button
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                asChild
              >
                <Link href="/services">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <JobMatchVisualization />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-200 dark:bg-purple-900/30 dark:text-purple-400">
            Success Stories
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            What People Say
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Real feedback from people we've helped – companies & candidates alike.
          </p>
        </div>

        <TestimonialCarousel />
      </div>
    </section>
  )
}

function SkillsSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">In-Demand Skills</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Top Skills in the Market</h2>
          <p className="mt-4 text-lg text-blue-100">Browse through the most sought-after skills by employers today</p>
        </div>

        <SkillCloud />

        <div className="mt-12 text-center">
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50" asChild>
            <Link href="/for-candidates">
              Upgrade Your Skills <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function CtaSection() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600">
          <div className="absolute inset-0">
            <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute bottom-0 left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          </div>

          <div className="relative px-6 py-12 sm:px-12 sm:py-16 md:flex md:items-center md:justify-between md:px-16 md:py-20">
            <div className="max-w-xl">
              <motion.h2
                className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Ready to transform your hiring process?
              </motion.h2>
              <motion.p
                className="mt-4 text-lg text-blue-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Join hundreds of companies that trust Smart Hire to find their perfect talent match.
              </motion.p>
            </div>
            <div className="mt-8 md:mt-0">
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50" asChild>
                    <Link href="/for-employers">Post a Job</Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                    <Link href="/contact-us">Book a Free Consultation</Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
