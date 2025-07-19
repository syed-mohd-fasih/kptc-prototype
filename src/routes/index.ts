import { dashboardRoutes } from "./dashboard.routes"
import { garageRoutes } from "./garage.routes"
import { kptcReceptionRoutes } from "./kptcReception.routes"
import { moiReceptionRoutes } from "./moiReception.routes"
import { stickerRoutes } from "./sticker.routes"
import { winchRoutes } from "./winch.routes"
import { procurementRoutes } from "./procurement.routes"
import { accountsRoutes } from "./accounts.routes"
import { storesRoutes } from "./stores.route"
import { masterRoutes } from "./master.routes"
import { reportsRoutes } from "./reports.routes"

import type { LucideIcon } from "lucide-react"
import { jobRoutes } from "./new_routes/job.routes"

export type RouteItem = {
    path: string
    title: string
    icon?: LucideIcon
    element?: React.ReactNode
    children?: RouteItem[]
}

export const appRoutes: RouteItem[] = [
    dashboardRoutes,
    moiReceptionRoutes,
    kptcReceptionRoutes,
    garageRoutes,
    stickerRoutes,
    winchRoutes,
    procurementRoutes,
    accountsRoutes,
    storesRoutes,
    masterRoutes,
    reportsRoutes,

    // New Routes
    jobRoutes,
]
