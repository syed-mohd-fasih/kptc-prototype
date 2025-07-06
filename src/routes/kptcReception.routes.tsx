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
    title: "KPTC Reception",
    icon: BookOpen,
    children: [
        { path: "job-order", title: "Job Order (KJO)", element: <JobOrder /> },
        {
            path: "inspection",
            title: "Inspection (KPTC)",
            element: <InspectionKPTC />,
        },
        {
            path: "garage-issue-voucher",
            title: "Garage Issue Voucher",
            element: <GarageIssueVoucher />,
        },
        {
            path: "parking",
            title: "Parking (Reception)",
            element: <ParkingReception />,
        },
        {
            path: "change-job-status",
            title: "Change Job Status",
            element: <ChangeJobStatus />,
        },
        {
            path: "vehicle-history",
            title: "Vehicle History",
            element: <VehicleHistory />,
        },
    ],
}
