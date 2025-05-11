"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle, AlertCircle } from "lucide-react"

const jobData = {
  title: "Senior Frontend Developer",
  company: "TechInnovate Inc.",
  skills: [
    { name: "React", match: 95 },
    { name: "TypeScript", match: 90 },
    { name: "CSS/SCSS", match: 85 },
    { name: "Next.js", match: 80 },
    { name: "GraphQL", match: 70 },
    { name: "Testing", match: 65 },
  ],
  overallMatch: 85,
}

export function JobMatchVisualization() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-lg dark:border-gray-800 dark:bg-gray-900">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{jobData.title}</h3>
          <p className="text-gray-600 dark:text-gray-400">{jobData.company}</p>
        </div>

        <motion.div
          className="flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-2 text-white"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        >
          <span className="text-lg font-bold">{jobData.overallMatch}%</span>
          <span className="text-sm">Match</span>
        </motion.div>
      </div>

      <div className="space-y-4">
        <h4 className="font-medium text-gray-900 dark:text-white">Skills Match</h4>

        <div className="space-y-3">
          {jobData.skills.map((skill) => (
            <div
              key={skill.name}
              className="relative"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="mb-1 flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                <div className="flex items-center gap-1">
                  {skill.match >= 80 ? (
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                  ) : skill.match < 60 ? (
                    <AlertCircle className="h-4 w-4 text-amber-500" />
                  ) : null}
                  <span className="text-sm font-medium text-gray-900 dark:text-white">{skill.match}%</span>
                </div>
              </div>

              <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                <motion.div
                  className={`h-full rounded-full ${
                    skill.match >= 80
                      ? "bg-gradient-to-r from-emerald-500 to-teal-500"
                      : skill.match >= 60
                        ? "bg-gradient-to-r from-blue-500 to-cyan-500"
                        : "bg-gradient-to-r from-amber-500 to-yellow-500"
                  }`}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.match}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>

              {hoveredSkill === skill.name && (
                <motion.div
                  className="absolute -right-2 -top-10 rounded-lg bg-gray-900 px-3 py-1 text-xs text-white shadow-lg dark:bg-gray-800"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  {skill.match >= 80 ? "Strong match!" : skill.match >= 60 ? "Good match" : "Potential gap"}
                  <div className="absolute -bottom-1 right-2 h-2 w-2 rotate-45 bg-gray-900 dark:bg-gray-800" />
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>

      <motion.button
        className="mt-6 w-full rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 py-2 text-center font-medium text-white shadow-md hover:from-purple-700 hover:to-indigo-700"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Apply Now
      </motion.button>
    </div>
  )
}
