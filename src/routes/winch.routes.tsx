import WinchList from "@/pages/Winch/WinchList";
import { type RouteItem } from "@/routes";
import { TruckIcon } from "lucide-react";

export const winchRoutes: RouteItem = {
    path: "winch",
    title: "Winch",
    icon: TruckIcon,
    children: [{ path: "list", title: "Winch List", element: <WinchList /> }],
};
