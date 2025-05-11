"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Clock, Video } from "lucide-react"

// Sample interview data
const interviews = [
  {
    id: 1,
    candidate: "Alex Johnson",
    position: "Frontend Developer",
    date: "Today",
    time: "2:00 PM",
    type: "Video",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    candidate: "Samantha Lee",
    position: "UX Designer",
    date: "Tomorrow",
    time: "10:30 AM",
    type: "Video",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    candidate: "Michael Chen",
    position: "Backend Engineer",
    date: "Tomorrow",
    time: "3:15 PM",
    type: "Video",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export function UpcomingInterviews() {
  return (
    <div className="space-y-4">
      {interviews.map((interview) => (
        <div
          key={interview.id}
          className="flex items-center gap-3 rounded-lg border p-3 transition-colors hover:bg-muted/50"
        >
          <Avatar>
            <AvatarImage src={interview.avatar || "/placeholder.svg"} alt={interview.candidate} />
            <AvatarFallback>{interview.candidate.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">{interview.candidate}</p>
              <Badge variant="outline" className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-500">
                {interview.date}
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground">{interview.position}</p>
            <div className="flex items-center gap-3">
              <div className="flex items-center text-xs text-muted-foreground">
                <Clock className="mr-1 h-3 w-3" />
                {interview.time}
              </div>
              <div className="flex items-center text-xs text-muted-foreground">
                <Video className="mr-1 h-3 w-3" />
                {interview.type}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
