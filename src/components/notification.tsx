"use client"

import { Bell, BellDot } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

export function Notification() {
    const toggleNotification = () => {
        toast.info("Looking for notifications?")
    }

    return (
        <Button variant="outline" size="icon" onClick={toggleNotification}>
            <Bell className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:scale-0 dark:-rotate-90" />
            <BellDot className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:scale-100 dark:rotate-0" />
        </Button>
    )
}
