import type { RouteItem } from "@/routes"
import { BookOpen } from "lucide-react"
import { lazy } from "react"

const ChangeJobStatus = lazy(() => import("@/pages/KptcReception/ChangeJobStatus"))
const GarageIssueVoucher = lazy(() => import("@/pages/KptcReception/GarageIssueVoucher"))
const InspectionKPTC = lazy(() => import("@/pages/KptcReception/InspectionKPTC"))
const JobOrder = lazy(() => import("@/pages/KptcReception/JobOrder"))
const ParkingReception = lazy(() => import("@/pages/KptcReception/ParkingReception"))
const VehicleHistory = lazy(() => import("@/pages/KptcReception/VehicleHistory"))

export const kptcReceptionRoutes: RouteItem = {
    path: "kptc-reception",
    title: "kptc_reception",
    icon: BookOpen,
    children: [
        { path: "job-order", title: "job_order", element: <JobOrder /> },
        {
            path: "inspection",
            title: "inspection",
            element: <InspectionKPTC />,
        },
        {
            path: "garage-issue-voucher",
            title: "garage_issue_voucher",
            element: <GarageIssueVoucher />,
        },
        {
            path: "parking",
            title: "parking_reception",
            element: <ParkingReception />,
        },
        {
            path: "change-job-status",
            title: "change_job_status",
            element: <ChangeJobStatus />,
        },
        {
            path: "vehicle-history",
            title: "vehicle_history",
            element: <VehicleHistory />,
        },
    ],
}
