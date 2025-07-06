import { type RouteItem } from "."
import { SquareKanban } from "lucide-react"

import Admin from "@/pages/dashboard/Admin"
import ExecutiveManagement from "@/pages/dashboard/ExecutiveManagement"
import ContractingParty from "@/pages/dashboard/ContractingParty"
import GarageTeamLeader from "@/pages/dashboard/GarageTeamLeader"

export const dashboardRoutes: RouteItem = {
    path: "dashboard",
    title: "Dashboard",
    icon: SquareKanban,
    children: [
        { path: "admin", title: "Admin", element: <Admin /> },
        {
            path: "executive-management",
            title: "Executive Management",
            element: <ExecutiveManagement />,
        },
        {
            path: "contracting-party",
            title: "Contracting Party",
            element: <ContractingParty />,
        },
        {
            path: "garage-team-leader",
            title: "Garage Team Leader",
            element: <GarageTeamLeader />,
        },
    ],
}
