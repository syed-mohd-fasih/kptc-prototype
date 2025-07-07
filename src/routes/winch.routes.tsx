import WinchList from "@/pages/Winch/WinchList"
import { type RouteItem } from "@/routes"
import { TruckIcon } from "lucide-react"

export const winchRoutes: RouteItem = {
    path: "winch",
    title: "winch",
    icon: TruckIcon,
    children: [{ path: "winch-list", title: "winch_list", element: <WinchList /> }],
}
