import { type RouteItem } from "@/routes"
import { Briefcase } from "lucide-react"
import { lazy } from "react"

const JobCardForm = lazy(() => import("@/pages/new_pages/Job/JobCardForm"))
const JobPage = lazy(() => import("@/pages/new_pages/Job/JobPage"))
const JobsDashboard = lazy(() => import("@/pages/new_pages/Job/JobsDashboard"))

export const jobRoutes: RouteItem = {
    path: "Jobs",
    title: "jobs",
    icon: Briefcase,
    children: [
        { path: "dashboard", title: "dashboard", element: <JobsDashboard /> },
        {
            path: "new",
            title: "new_job_card",
            element: <JobCardForm />,
        },
        {
            path: ":jobOrderNo",
            title: "job_details",
            element: <JobPage />,
        },
    ],
}
