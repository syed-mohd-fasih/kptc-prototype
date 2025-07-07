import ChangeJobStatus from "@/pages/KptcReception/ChangeJobStatus"
import GarageIssueVoucher from "@/pages/KptcReception/GarageIssueVoucher"
import InspectionKPTC from "@/pages/KptcReception/InspectionKPTC"
import JobOrder from "@/pages/KptcReception/JobOrder"
import ParkingReception from "@/pages/KptcReception/ParkingReception"
import VehicleHistory from "@/pages/KptcReception/VehicleHistory"
import type { RouteItem } from "@/routes"
import { BookOpen } from "lucide-react"

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
