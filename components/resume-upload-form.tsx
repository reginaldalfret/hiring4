"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { motion } from "framer-motion"
import { Upload, CheckCircle2, AlertCircle } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export function ResumeUploadForm() {
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    phone: "",
    jobTitle: "",
    experience: "",
    skills: "",
    location: "",
    linkedin: "",
    portfolio: "",
    message: "",
  })

  const [uploadState, setUploadState] = useState({
    status: "idle", // idle, uploading, success, error
    progress: 0,
    fileName: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { toast } = useToast()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name, value) => {
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Check file type
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ]
    if (!allowedTypes.includes(file.type)) {
      toast({
        title: "Invalid file type",
        description: "Please upload a PDF or Word document.",
        variant: "destructive",
      })
      return
    }

    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Please upload a file smaller than 5MB.",
        variant: "destructive",
      })
      return
    }

    // Simulate upload
    setUploadState({
      status: "uploading",
      progress: 0,
      fileName: file.name,
    })

    let progress = 0
    const interval = setInterval(() => {
      progress += 5
      setUploadState((prev) => ({
        ...prev,
        progress,
      }))

      if (progress >= 100) {
        clearInterval(interval)
        setUploadState((prev) => ({
          ...prev,
          status: "success",
        }))
      }
    }, 100)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (uploadState.status !== "success") {
      toast({
        title: "Resume required",
        description: "Please upload your resume before submitting.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)

    toast({
      title: "Resume submitted successfully",
      description: "We'll review your profile and get back to you soon.",
    })
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="border-none shadow-lg bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-900 dark:to-gray-900">
          <CardContent className="p-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-emerald-600 to-teal-600">
              <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">Thank You!</h3>
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              Your resume has been submitted successfully. Our team will review your profile and match you with suitable
              opportunities.
            </p>
            <Button onClick={() => setIsSubmitted(false)} variant="outline">
              Submit Another Resume
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    )
  }

  return (
    <Card className="border-none shadow-lg">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Upload Your Resume</h3>
            <div className="relative">
              {uploadState.status === "idle" && (
                <div
                  className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-6 transition-colors hover:border-emerald-500"
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => {
                    e.preventDefault()
                    const file = e.dataTransfer.files?.[0]
                    if (file) {
                      const input = document.getElementById("resume-upload")
                      const dataTransfer = new DataTransfer()
                      dataTransfer.items.add(file)
                      input.files = dataTransfer.files
                      const event = new Event("change", { bubbles: true })
                      input.dispatchEvent(event)
                    }
                  }}
                >
                  <div className="mb-4 rounded-full bg-emerald-100 p-3 text-emerald-600">
                    <Upload className="h-6 w-6" />
                  </div>
                  <p className="mb-2 text-sm font-medium">Drag and drop your resume or click to browse</p>
                  <p className="text-xs text-gray-500">Supports PDF, DOC, DOCX (Max 5MB)</p>
                  <Input
                    id="resume-upload"
                    type="file"
                    accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    className="sr-only"
                    onChange={handleFileChange}
                  />
                  <Button
                    type="button"
                    variant="outline"
                    className="mt-4"
                    onClick={() => document.getElementById("resume-upload").click()}
                  >
                    Browse Files
                  </Button>
                </div>
              )}

              {uploadState.status === "uploading" && (
                <div className="rounded-lg border p-6">
                  <div className="flex items-center gap-3">
                    <Upload className="h-8 w-8 text-emerald-600" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{uploadState.fileName}</span>
                        <span className="text-xs text-gray-500">{uploadState.progress}%</span>
                      </div>
                      <Progress value={uploadState.progress} className="h-2 mt-1" />
                    </div>
                  </div>
                  <p className="mt-2 text-xs text-gray-500">Uploading and parsing resume...</p>
                </div>
              )}

              {uploadState.status === "success" && (
                <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-6">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-emerald-100 p-2 text-emerald-600">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-medium text-emerald-800">{uploadState.fileName}</p>
                      <p className="text-sm text-emerald-600">Resume uploaded successfully</p>
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="ml-auto text-emerald-600 hover:text-emerald-700"
                      onClick={() => {
                        setUploadState({
                          status: "idle",
                          progress: 0,
                          fileName: "",
                        })
                        document.getElementById("resume-upload").value = ""
                      }}
                    >
                      Change
                    </Button>
                  </div>
                </div>
              )}

              {uploadState.status === "error" && (
                <div className="rounded-lg border border-red-200 bg-red-50 p-6">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-red-100 p-2 text-red-600">
                      <AlertCircle className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-medium text-red-800">Upload failed</p>
                      <p className="text-sm text-red-600">Please try again</p>
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="ml-auto text-red-600 hover:text-red-700"
                      onClick={() => {
                        setUploadState({
                          status: "idle",
                          progress: 0,
                          fileName: "",
                        })
                        document.getElementById("resume-upload").value = ""
                      }}
                    >
                      Try Again
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name *</Label>
                <Input id="fullName" name="fullName" value={formState.fullName} onChange={handleChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" name="email" type="email" value={formState.email} onChange={handleChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input id="phone" name="phone" type="tel" value={formState.phone} onChange={handleChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location *</Label>
                <Input
                  id="location"
                  name="location"
                  value={formState.location}
                  onChange={handleChange}
                  required
                  placeholder="City, State, Country"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Professional Information</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="jobTitle">Current/Desired Job Title *</Label>
                <Input id="jobTitle" name="jobTitle" value={formState.jobTitle} onChange={handleChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="experience">Years of Experience *</Label>
                <Select
                  value={formState.experience}
                  onValueChange={(value) => handleSelectChange("experience", value)}
                  required
                >
                  <SelectTrigger id="experience">
                    <SelectValue placeholder="Select experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-1">0-1 years</SelectItem>
                    <SelectItem value="1-3">1-3 years</SelectItem>
                    <SelectItem value="3-5">3-5 years</SelectItem>
                    <SelectItem value="5-10">5-10 years</SelectItem>
                    <SelectItem value="10+">10+ years</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="skills">Key Skills *</Label>
                <Textarea
                  id="skills"
                  name="skills"
                  rows={3}
                  value={formState.skills}
                  onChange={handleChange}
                  required
                  placeholder="e.g., JavaScript, React, Project Management"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="linkedin">LinkedIn Profile</Label>
                <Input
                  id="linkedin"
                  name="linkedin"
                  type="url"
                  value={formState.linkedin}
                  onChange={handleChange}
                  placeholder="https://linkedin.com/in/yourprofile"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="portfolio">Portfolio/Website</Label>
                <Input
                  id="portfolio"
                  name="portfolio"
                  type="url"
                  value={formState.portfolio}
                  onChange={handleChange}
                  placeholder="https://yourwebsite.com"
                />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="message">Additional Information</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Tell us about your career goals, preferred work environment, etc."
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <Button
              type="submit"
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Resume"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
