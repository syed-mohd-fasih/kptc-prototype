import AssignInspectorMOI from "@/pages/MoiReception/AssignInspectorMOI";
import AssignTechnicianMOI from "@/pages/MoiReception/AssignTechnicianMOI";
import ImageUploadMOI from "@/pages/MoiReception/ImageUploadMOI";
import InspectionMOI from "@/pages/MoiReception/InspectionMOI";
import JobCard from "@/pages/MoiReception/JobCard";
import JobCardReopen from "@/pages/MoiReception/JobCardReopen";
import VehicleDelivery from "@/pages/MoiReception/VehicleDelivery";
import { type RouteItem } from "@/routes";
import { Landmark } from "lucide-react";

export const moiReceptionRoutes: RouteItem = {
  path: "moi-reception",
  title: "MOI Reception",
  icon: Landmark,
  children: [
    { path: "job-card", title: "Job Card", element: <JobCard /> },
    {
      path: "assign-inspector",
      title: "Assign Inspector",
      element: <AssignInspectorMOI />,
    },
    {
      path: "assign-technician",
      title: "Assign Technician",
      element: <AssignTechnicianMOI />,
    },
    {
      path: "image-upload",
      title: "Image Upload",
      element: <ImageUploadMOI />,
    },
    {
      path: "inspection",
      title: "Inspection (MOI)",
      element: <InspectionMOI />,
    },
    {
      path: "vehicle-delivery",
      title: "Vehicle Delivery",
      element: <VehicleDelivery />,
    },
    {
      path: "job-card-reopen",
      title: "Job Card Reopen",
      element: <JobCardReopen />,
    },
  ],
};
