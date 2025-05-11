"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    quote: "Smart Hire transformed our recruitment process. We found top talent in half the time it used to take us!",
    name: "Sarah Johnson",
    title: "HR Director, TechGlobal",
    image: "/images/testimonial-1.png",
  },
  {
    id: 2,
    quote: "The AI matching technology is incredible. Every candidate was perfectly aligned with our requirements.",
    name: "Michael Chen",
    title: "CTO, InnovateCorp",
    image: "/images/testimonial-2.png",
  },
  {
    id: 3,
    quote: "As a job seeker, Smart Hire connected me with opportunities that truly matched my skills and aspirations.",
    name: "Jessica Rodriguez",
    title: "Senior Developer",
    image: "/images/testimonial-3.png",
  },
  {
    id: 4,
    quote: "We reduced our time-to-hire by 60% and improved quality of hires. Smart Hire is a game-changer!",
    name: "David Wilson",
    title: "Talent Acquisition Manager, FutureTech",
    image: "/images/testimonial-4.png",
  },
]

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [current, autoplay])

  return (
    <div
      className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900 to-indigo-900 p-8 text-white shadow-xl"
      onMouseEnter={() => setAutoplay(false)}
      onMouseLeave={() => setAutoplay(true)}
    >
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-purple-500/30 blur-xl" />
      <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-indigo-500/30 blur-xl" />

      <div className="absolute left-8 top-8 text-purple-300 opacity-50">
        <Quote size={48} />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center"
          >
            <div className="mb-6 h-20 w-20 overflow-hidden rounded-full border-4 border-purple-400 shadow-lg">
              <Image
                src={testimonials[current].image || "/placeholder.svg"}
                alt={testimonials[current].name}
                width={80}
                height={80}
                className="h-full w-full object-cover"
              />
            </div>

            <p className="mb-6 text-xl font-light italic leading-relaxed md:text-2xl">
              "{testimonials[current].quote}"
            </p>

            <div>
              <h4 className="text-lg font-semibold">{testimonials[current].name}</h4>
              <p className="text-sm text-purple-200">{testimonials[current].title}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2 w-2 rounded-full transition-all ${index === current ? "w-8 bg-white" : "bg-white/50"}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
        onClick={prev}
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">Previous testimonial</span>
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
        onClick={next}
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">Next testimonial</span>
      </Button>
    </div>
  )
}
