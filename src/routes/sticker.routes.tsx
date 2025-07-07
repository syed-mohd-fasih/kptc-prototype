import { type RouteItem } from "@/routes"
import { StickerIcon } from "lucide-react"
import { lazy } from "react"

const StickerDashboard = lazy(() => import("@/pages/Sticker/StickerDashboard"))
const SupervisorDashboard = lazy(() => import("@/pages/Sticker/SupervisorDashboard"))
const TeamLeaderWorkbench = lazy(() => import("@/pages/Sticker/TeamLeaderWorkbench"))
const TechnicianTaskScreen = lazy(() => import("@/pages/Sticker/TechnicianTaskScreen"))

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
