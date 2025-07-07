import { type RouteItem } from "@/routes"
import { Settings2 } from "lucide-react"
import { lazy } from "react"

const AssignTeamLeader = lazy(() => import("@/pages/Garage/AssignTeamLeader"))
const AssignTechnicianGarage = lazy(() => import("@/pages/Garage/AssignTechnicianGarage"))
const AssignWinch = lazy(() => import("@/pages/Garage/AssignWinch"))
const Estimation = lazy(() => import("@/pages/Garage/Estimation"))
const EstimationApproval = lazy(() => import("@/pages/Garage/EstimationApproval"))
const EstimationApprovalKD250 = lazy(() => import("@/pages/Garage/EstimationApprovalKD250"))
const FinalQCGarage = lazy(() => import("@/pages/Garage/FinalQCGarage"))
const FinalQCMOI = lazy(() => import("@/pages/Garage/FinalQCMOI"))
const GarageRequestVoucher = lazy(() => import("@/pages/Garage/GarageRequestVoucher"))
const GarageTransfer = lazy(() => import("@/pages/Garage/GarageTransfer"))
const ImageUploadGarage = lazy(() => import("@/pages/Garage/ImageUploadGarage"))
const InspectionGarage = lazy(() => import("@/pages/Garage/InspectionGarage"))
const ItemRequestApproval = lazy(() => import("@/pages/Garage/ItemRequestApproval"))
const ItemRequestVoucher = lazy(() => import("@/pages/Garage/ItemRequestVoucher"))
const ParkingGarage = lazy(() => import("@/pages/Garage/ParkingGarage"))
const QCPassIn = lazy(() => import("@/pages/Garage/QCPassIn"))
const QCPassOut = lazy(() => import("@/pages/Garage/QCPassOut"))
const RejectJobCard = lazy(() => import("@/pages/Garage/RejectJobCard"))
const RepairJobCompletion = lazy(() => import("@/pages/Garage/RepairJobCompletion"))
const ScrapSpares = lazy(() => import("@/pages/Garage/ScrapSpares"))
const VehicleChecklist = lazy(() => import("@/pages/Garage/VehicleChecklist"))
const VehicleDeliveryApproval = lazy(() => import("@/pages/Garage/VehicleDeliveryApproval"))
const WarrantyCheck = lazy(() => import("@/pages/Garage/WarrantyCheck"))
const Washing = lazy(() => import("@/pages/Garage/Washing"))
const WinchMove = lazy(() => import("@/pages/Garage/WinchMove"))

export const garageRoutes: RouteItem = {
    path: "garage",
    title: "garage",
    icon: Settings2,
    children: [
        { path: "qc-pass-in", title: "qc_pass_in", element: <QCPassIn /> },
        {
            path: "image-upload",
            title: "image_upload",
            element: <ImageUploadGarage />,
        },
        {
            path: "assign-team-leader",
            title: "assign_team_leader",
            element: <AssignTeamLeader />,
        },
        {
            path: "assign-technician",
            title: "assign_technician",
            element: <AssignTechnicianGarage />,
        },
        {
            path: "vehicle-check-list",
            title: "vehicle_check_list",
            element: <VehicleChecklist />,
        },
        {
            path: "inspection",
            title: "inspection",
            element: <InspectionGarage />,
        },
        { path: "estimation", title: "estimation", element: <Estimation /> },
        {
            path: "estimation-approval",
            title: "estimation_approval",
            element: <EstimationApproval />,
        },
        {
            path: "estimation-approval-kd250",
            title: "estimation_approval_kd250",
            element: <EstimationApprovalKD250 />,
        },
        {
            path: "item-request-voucher",
            title: "item_request_voucher",
            element: <ItemRequestVoucher />,
        },
        {
            path: "item-request-approval",
            title: "item_request_approval",
            element: <ItemRequestApproval />,
        },
        {
            path: "garage-request-voucher",
            title: "garage_request_voucher",
            element: <GarageRequestVoucher />,
        },
        {
            path: "repair-job-completion",
            title: "repair_job_completion",
            element: <RepairJobCompletion />,
        },
        {
            path: "final-qc-garage",
            title: "final_qc_garage",
            element: <FinalQCGarage />,
        },
        {
            path: "final-qc-moi",
            title: "final_qc_moi",
            element: <FinalQCMOI />,
        },
        { path: "qc-pass-out", title: "qc_pass_out", element: <QCPassOut /> },
        { path: "washing", title: "washing", element: <Washing /> },
        {
            path: "vehicle-delivery-approval",
            title: "vehicle_delivery_approval",
            element: <VehicleDeliveryApproval />,
        },
        {
            path: "warranty-check",
            title: "warranty_check",
            element: <WarrantyCheck />,
        },
        {
            path: "assign-winch",
            title: "assign_winch",
            element: <AssignWinch />,
        },
        {
            path: "parking",
            title: "parking",
            element: <ParkingGarage />,
        },
        {
            path: "scrap-spares",
            title: "scrap_spares",
            element: <ScrapSpares />,
        },
        { path: "winch-move", title: "winch_move", element: <WinchMove /> },
        {
            path: "garage-transfer",
            title: "garage_transfer",
            element: <GarageTransfer />,
        },
        {
            path: "reject-job-card",
            title: "reject_job_card",
            element: <RejectJobCard />,
        },
    ],
}
