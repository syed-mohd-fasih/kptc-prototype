import { type RouteItem } from "."
import { SquareKanban } from "lucide-react"

import Admin from "@/pages/dashboard/Admin"
import ExecutiveManagement from "@/pages/dashboard/ExecutiveManagement"
import ContractingParty from "@/pages/dashboard/ContractingParty"
import GarageTeamLeader from "@/pages/dashboard/GarageTeamLeader"

export const dashboardRoutes: RouteItem = {
    path: "dashboard",
    title: "dashboard",
    icon: SquareKanban,
    children: [
        { path: "admin", title: "admin", element: <Admin /> },
        {
            path: "executive-management",
            title: "executive_management",
            element: <ExecutiveManagement />,
        },
        {
            path: "contracting-party",
            title: "contracting_party",
            element: <ContractingParty />,
        },
        {
            path: "garage-team-leader",
            title: "garage_team_leader",
            element: <GarageTeamLeader />,
        },
    ],
}
