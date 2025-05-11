"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const skills = [
  "JavaScript",
  "React",
  "Node.js",
  "Python",
  "Java",
  "Product Management",
  "UX Design",
  "DevOps",
  "Data Science",
  "Machine Learning",
  "Cloud Computing",
  "Agile",
  "Project Management",
  "Digital Marketing",
  "Sales",
  "Customer Success",
  "HR",
  "Finance",
  "Operations",
  "Leadership",
  "Communication",
  "Problem Solving",
]

const colors = [
  "bg-blue-500",
  "bg-purple-500",
  "bg-pink-500",
  "bg-indigo-500",
  "bg-teal-500",
  "bg-green-500",
  "bg-yellow-500",
  "bg-orange-500",
  "bg-red-500",
  "bg-cyan-500",
]

export function SkillCloud() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="flex flex-wrap justify-center gap-2 py-8">
      {skills.map((skill, index) => {
        const randomColor = colors[index % colors.length]
        const randomDelay = Math.random() * 0.5

        return (
          <motion.span
            key={skill}
            className={`${randomColor} cursor-pointer rounded-full px-3 py-1 text-sm font-medium text-white shadow-md transition-all hover:scale-110`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: randomDelay, duration: 0.5 }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
          >
            {skill}
          </motion.span>
        )
      })}
    </div>
  )
}
