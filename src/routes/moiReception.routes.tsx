import { type RouteItem } from "@/routes"
import { Landmark } from "lucide-react"
import { lazy } from "react"

const AssignInspectorMOI = lazy(() => import("@/pages/MoiReception/AssignInspectorMOI"))
const AssignTechnicianMOI = lazy(() => import("@/pages/MoiReception/AssignTechnicianMOI"))
const ImageUploadMOI = lazy(() => import("@/pages/MoiReception/ImageUploadMOI"))
const InspectionMOI = lazy(() => import("@/pages/MoiReception/InspectionMOI"))
const JobCard = lazy(() => import("@/pages/MoiReception/JobCard"))
const JobCardReopen = lazy(() => import("@/pages/MoiReception/JobCardReopen"))
const VehicleDelivery = lazy(() => import("@/pages/MoiReception/VehicleDelivery"))

export const moiReceptionRoutes: RouteItem = {
    path: "moi-reception",
    title: "moi_reception",
    icon: Landmark,
    children: [
        { path: "job-card", title: "job_card", element: <JobCard /> },
        {
            path: "assign-inspector",
            title: "assign_inspector",
            element: <AssignInspectorMOI />,
        },
        {
            path: "assign-technician",
            title: "assign_technician",
            element: <AssignTechnicianMOI />,
        },
        {
            path: "image-upload",
            title: "image_upload",
            element: <ImageUploadMOI />,
        },
        {
            path: "inspection",
            title: "inspection",
            element: <InspectionMOI />,
        },
        {
            path: "vehicle-delivery",
            title: "vehicle_delivery",
            element: <VehicleDelivery />,
        },
        {
            path: "job-card-reopen",
            title: "job_card_reopen",
            element: <JobCardReopen />,
        },
    ],
}
