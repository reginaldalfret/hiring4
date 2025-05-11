"use client"

import type React from "react"

import { useState } from "react"
import { Upload, FileText, Check, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { useToast } from "@/hooks/use-toast"

export function ResumeUploader() {
  const [isDragging, setIsDragging] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [uploadStatus, setUploadStatus] = useState<"idle" | "uploading" | "success" | "error">("idle")
  const { toast } = useToast()

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    const files = e.dataTransfer.files
    if (files.length > 0) {
      handleFileUpload(files)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFileUpload(e.target.files)
    }
  }

  const handleFileUpload = (files: FileList) => {
    setIsUploading(true)
    setUploadStatus("uploading")

    // Simulate upload progress
    let progress = 0
    const interval = setInterval(() => {
      progress += 5
      setUploadProgress(progress)

      if (progress >= 100) {
        clearInterval(interval)
        setIsUploading(false)
        setUploadStatus("success")

        toast({
          title: "Resume uploaded successfully",
          description: "The resume has been parsed and candidate data extracted.",
          variant: "default",
        })

        // Reset after 3 seconds
        setTimeout(() => {
          setUploadProgress(0)
          setUploadStatus("idle")
        }, 3000)
      }
    }, 100)
  }

  return (
    <div
      className={`relative flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-6 transition-colors ${
        isDragging ? "border-primary bg-primary/5" : "border-muted-foreground/25"
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {uploadStatus === "idle" && (
        <>
          <div className="mb-4 rounded-full bg-primary/10 p-3 text-primary">
            <Upload className="h-6 w-6" />
          </div>
          <h3 className="mb-1 text-sm font-medium">Upload Resume</h3>
          <p className="mb-4 text-xs text-muted-foreground text-center">Drag and drop your resume or click to browse</p>
          <Button size="sm" variant="secondary" asChild>
            <label>
              Browse Files
              <input type="file" accept=".pdf,.doc,.docx" className="sr-only" onChange={handleFileChange} />
            </label>
          </Button>
          <p className="mt-2 text-xs text-muted-foreground">Supports PDF, DOC, DOCX</p>
        </>
      )}

      {uploadStatus === "uploading" && (
        <div className="w-full space-y-4">
          <div className="flex items-center gap-3">
            <FileText className="h-8 w-8 text-primary" />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Uploading resume...</span>
                <span className="text-xs text-muted-foreground">{uploadProgress}%</span>
              </div>
              <Progress value={uploadProgress} className="h-2 mt-1" />
            </div>
          </div>
          <p className="text-xs text-muted-foreground">Parsing resume and extracting candidate data...</p>
        </div>
      )}

      {uploadStatus === "success" && (
        <div className="flex flex-col items-center">
          <div className="mb-2 rounded-full bg-green-100 p-3 text-green-600 dark:bg-green-900/30">
            <Check className="h-6 w-6" />
          </div>
          <h3 className="text-sm font-medium">Upload Complete!</h3>
          <p className="mt-1 text-xs text-muted-foreground text-center">
            Resume parsed successfully. Candidate data extracted.
          </p>
        </div>
      )}

      {uploadStatus === "error" && (
        <div className="flex flex-col items-center">
          <div className="mb-2 rounded-full bg-red-100 p-3 text-red-600 dark:bg-red-900/30">
            <AlertCircle className="h-6 w-6" />
          </div>
          <h3 className="text-sm font-medium">Upload Failed</h3>
          <p className="mt-1 text-xs text-muted-foreground text-center">
            There was an error processing your resume. Please try again.
          </p>
          <Button size="sm" variant="outline" className="mt-3" onClick={() => setUploadStatus("idle")}>
            Try Again
          </Button>
        </div>
      )}
    </div>
  )
}
