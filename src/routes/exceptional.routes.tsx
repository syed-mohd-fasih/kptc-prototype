import { type RouteItem } from "@/routes"
import { AlertTriangleIcon } from "lucide-react"
import { lazy } from "react"

const Dashboard = lazy(() => import("@/pages/ExceptionalOrder/Dashboard"))

export const exceptionalOrderRoutes: RouteItem = {
    path: "exceptional-order",
    title: "exceptional_order",
    icon: AlertTriangleIcon,
    children: [{ path: "dashboard", title: "dashboard", element: <Dashboard /> }],
}
