import StickerDashboard from "@/pages/Sticker/StickerDashboard";
import SupervisorDashboard from "@/pages/Sticker/SupervisorDashboard";
import TeamLeaderWorkbench from "@/pages/Sticker/TeamLeaderWorkbench";
import TechnicianTaskScreen from "@/pages/Sticker/TechnicianTaskScreen";
import { type RouteItem } from "@/routes";
import { StickerIcon } from "lucide-react";

export const stickerRoutes: RouteItem = {
    path: "sticker",
    title: "Sticker",
    icon: StickerIcon,
    children: [
        {
            path: "dashboard",
            title: "Sticker Dashboard",
            element: <StickerDashboard />,
        },
        {
            path: "supervisor",
            title: "Supervisor Dashboard",
            element: <SupervisorDashboard />,
        },
        {
            path: "team-leader",
            title: "Team Leader Workbench",
            element: <TeamLeaderWorkbench />,
        },
        {
            path: "technician",
            title: "Technician Task Screen",
            element: <TechnicianTaskScreen />,
        },
    ],
};
