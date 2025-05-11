"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Users, Briefcase, Clock, Award } from "lucide-react"

const stats = [
  {
    icon: <Users className="h-8 w-8" />,
    value: 10000,
    label: "Candidates Placed",
    suffix: "+",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Briefcase className="h-8 w-8" />,
    value: 2500,
    label: "Companies Served",
    suffix: "+",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: <Clock className="h-8 w-8" />,
    value: 48,
    label: "Hour Turnaround",
    suffix: "",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: <Award className="h-8 w-8" />,
    value: 95,
    label: "Satisfaction Rate",
    suffix: "%",
    color: "from-emerald-500 to-teal-500",
  },
]

export function AnimatedStats() {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      controls.start("visible")
      setHasAnimated(true)
    }
  }, [isInView, hasAnimated, controls])

  return (
    <div ref={ref} className="py-12">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: index * 0.1,
                },
              },
            }}
          >
            <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-lg transition-all hover:shadow-xl dark:border-gray-800 dark:bg-gray-900">
              <div
                className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-gradient-to-br opacity-10 blur-3xl"
                style={{
                  background: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
                  "--tw-gradient-from": stat.color.split(" ")[0].split("-")[1],
                  "--tw-gradient-to": stat.color.split(" ")[1].split("-")[1],
                }}
              />

              <div
                className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br ${stat.color} text-white`}
              >
                {stat.icon}
              </div>

              <h3 className="flex items-end text-3xl font-bold text-gray-900 dark:text-white">
                <CountUp end={stat.value} duration={2} />
                <span>{stat.suffix}</span>
              </h3>

              <p className="mt-2 text-gray-600 dark:text-gray-400">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function CountUp({ end, duration }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime = null
    let animationFrame

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return count
}
