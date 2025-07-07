import AssignInspectorMOI from "@/pages/MoiReception/AssignInspectorMOI"
import AssignTechnicianMOI from "@/pages/MoiReception/AssignTechnicianMOI"
import ImageUploadMOI from "@/pages/MoiReception/ImageUploadMOI"
import InspectionMOI from "@/pages/MoiReception/InspectionMOI"
import JobCard from "@/pages/MoiReception/JobCard"
import JobCardReopen from "@/pages/MoiReception/JobCardReopen"
import VehicleDelivery from "@/pages/MoiReception/VehicleDelivery"
import { type RouteItem } from "@/routes"
import { Landmark } from "lucide-react"

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
