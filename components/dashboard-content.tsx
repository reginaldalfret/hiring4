"use client"

import type React from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, FileText, Users, Clock, CheckCircle2, XCircle, AlertCircle } from "lucide-react"
import { ResumeUploader } from "@/components/resume-uploader"
import { CandidateList } from "@/components/candidate-list"
import { JobsList } from "@/components/jobs-list"
import { UpcomingInterviews } from "@/components/upcoming-interviews"

export function DashboardContent() {
  return (
    <main className="flex-1 p-6">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's an overview of your hiring process.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title="Total Candidates"
            value="1,234"
            description="+12% from last month"
            icon={<Users className="h-5 w-5" />}
          />
          <MetricCard
            title="Open Positions"
            value="42"
            description="8 urgent positions"
            icon={<FileText className="h-5 w-5" />}
          />
          <MetricCard
            title="Interviews Scheduled"
            value="28"
            description="This week"
            icon={<Calendar className="h-5 w-5" />}
          />
          <MetricCard
            title="Time to Hire"
            value="18 days"
            description="Avg. for tech roles"
            icon={<Clock className="h-5 w-5" />}
          />
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="candidates">Candidates</TabsTrigger>
            <TabsTrigger value="jobs">Jobs</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-6 pt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Resume Upload</CardTitle>
                  <CardDescription>Upload and parse candidate resumes</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResumeUploader />
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Upcoming Interviews</CardTitle>
                  <CardDescription>Next 48 hours</CardDescription>
                </CardHeader>
                <CardContent>
                  <UpcomingInterviews />
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full">
                    View Calendar
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Hiring Pipeline</CardTitle>
                  <CardDescription>Current application status</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <PipelineStage
                      label="Applications"
                      count={156}
                      total={156}
                      icon={<FileText className="h-4 w-4" />}
                    />
                    <PipelineStage
                      label="Screening"
                      count={98}
                      total={156}
                      icon={<AlertCircle className="h-4 w-4" />}
                    />
                    <PipelineStage label="Interviews" count={45} total={156} icon={<Calendar className="h-4 w-4" />} />
                    <PipelineStage label="Offers" count={12} total={156} icon={<CheckCircle2 className="h-4 w-4" />} />
                    <PipelineStage label="Rejected" count={32} total={156} icon={<XCircle className="h-4 w-4" />} />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="candidates" className="pt-6">
            <Card>
              <CardHeader>
                <CardTitle>Candidate Pipeline</CardTitle>
                <CardDescription>Manage and track candidate applications</CardDescription>
              </CardHeader>
              <CardContent>
                <CandidateList />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="jobs" className="pt-6">
            <Card>
              <CardHeader>
                <CardTitle>Open Positions</CardTitle>
                <CardDescription>Manage your job listings and applications</CardDescription>
              </CardHeader>
              <CardContent>
                <JobsList />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}

function MetricCard({
  title,
  value,
  description,
  icon,
}: {
  title: string
  value: string
  description: string
  icon: React.ReactNode
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="rounded-md bg-primary/10 p-1 text-primary">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

function PipelineStage({
  label,
  count,
  total,
  icon,
}: {
  label: string
  count: number
  total: number
  icon: React.ReactNode
}) {
  const percentage = Math.round((count / total) * 100)

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {icon}
          <span className="text-sm font-medium">{label}</span>
        </div>
        <span className="text-sm text-muted-foreground">
          {count} <span className="text-xs">({percentage}%)</span>
        </span>
      </div>
      <Progress value={percentage} className="h-2" />
    </div>
  )
}
