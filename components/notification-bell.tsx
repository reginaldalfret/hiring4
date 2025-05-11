"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const notifications = [
  {
    id: 1,
    title: "New job match!",
    description: "A new Senior Developer role matches your profile.",
    time: "Just now",
    unread: true,
  },
  {
    id: 2,
    title: "Interview scheduled",
    description: "Your interview with TechCorp is confirmed for tomorrow at 2 PM.",
    time: "2 hours ago",
    unread: true,
  },
  {
    id: 3,
    title: "Resume viewed",
    description: "Your resume was viewed by 3 new companies.",
    time: "Yesterday",
    unread: false,
  },
]

export function NotificationBell() {
  const [unreadCount, setUnreadCount] = useState(notifications.filter((n) => n.unread).length)
  const [open, setOpen] = useState(false)

  const markAllAsRead = () => {
    setUnreadCount(0)
  }

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <AnimatePresence>
            {unreadCount > 0 && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white"
              >
                {unreadCount}
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <DropdownMenuLabel className="flex items-center justify-between">
          <span>Notifications</span>
          {unreadCount > 0 && (
            <Button variant="ghost" size="sm" onClick={markAllAsRead} className="h-auto p-0 text-xs font-normal">
              Mark all as read
            </Button>
          )}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {notifications.length > 0 ? (
          <>
            {notifications.map((notification) => (
              <DropdownMenuItem key={notification.id} className="flex cursor-pointer flex-col items-start p-4">
                <div className="flex w-full items-start justify-between">
                  <div className="font-medium">{notification.title}</div>
                  <div className="text-xs text-gray-500">{notification.time}</div>
                </div>
                <div className="mt-1 text-sm text-gray-500">{notification.description}</div>
                {notification.unread && (
                  <div className="mt-2 h-2 w-2 rounded-full bg-blue-500" aria-label="Unread notification" />
                )}
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer justify-center text-sm font-medium text-blue-600">
              View all notifications
            </DropdownMenuItem>
          </>
        ) : (
          <div className="p-4 text-center text-sm text-gray-500">No notifications yet</div>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
