import Dashboard from "@/pages/ExceptionalOrder/Dashboard"
import { type RouteItem } from "@/routes"
import { AlertTriangleIcon } from "lucide-react"

export const exceptionalOrderRoutes: RouteItem = {
    path: "exceptional-order",
    title: "exceptional_order",
    icon: AlertTriangleIcon,
    children: [{ path: "dashboard", title: "dashboard", element: <Dashboard /> }],
}
