import { type RouteItem } from "."
import { SquareKanban } from "lucide-react"
import { lazy } from "react"

const Admin = lazy(() => import("@/pages/dashboard/Admin"))
const ExecutiveManagement = lazy(() => import("@/pages/dashboard/ExecutiveManagement"))
const ContractingParty = lazy(() => import("@/pages/dashboard/ContractingParty"))
const GarageTeamLeader = lazy(() => import("@/pages/dashboard/GarageTeamLeader"))

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
