import { type RouteItem } from "@/routes"
import { TruckIcon } from "lucide-react"
import { lazy } from "react"

const WinchList = lazy(() => import("@/pages/Winch/WinchList"))

export const winchRoutes: RouteItem = {
    path: "winch",
    title: "winch",
    icon: TruckIcon,
    children: [{ path: "winch-list", title: "winch_list", element: <WinchList /> }],
}
