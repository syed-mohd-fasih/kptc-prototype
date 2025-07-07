import StickerDashboard from "@/pages/Sticker/StickerDashboard"
import SupervisorDashboard from "@/pages/Sticker/SupervisorDashboard"
import TeamLeaderWorkbench from "@/pages/Sticker/TeamLeaderWorkbench"
import TechnicianTaskScreen from "@/pages/Sticker/TechnicianTaskScreen"
import { type RouteItem } from "@/routes"
import { StickerIcon } from "lucide-react"

export const stickerRoutes: RouteItem = {
    path: "sticker",
    title: "sticker",
    icon: StickerIcon,
    children: [
        {
            path: "dashboard",
            title: "sticker_dashboard",
            element: <StickerDashboard />,
        },
        {
            path: "supervisor",
            title: "supervisor",
            element: <SupervisorDashboard />,
        },
        {
            path: "team-leader",
            title: "team_leader",
            element: <TeamLeaderWorkbench />,
        },
        {
            path: "technician",
            title: "technician",
            element: <TechnicianTaskScreen />,
        },
    ],
}
