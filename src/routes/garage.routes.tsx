import AssignTeamLeader from "@/pages/Garage/AssignTeamLeader"
import AssignTechnicianGarage from "@/pages/Garage/AssignTechnicianGarage"
import AssignWinch from "@/pages/Garage/AssignWinch"
import Estimation from "@/pages/Garage/Estimation"
import EstimationApproval from "@/pages/Garage/EstimationApproval"
import EstimationApprovalKD250 from "@/pages/Garage/EstimationApprovalKD250"
import FinalQCGarage from "@/pages/Garage/FinalQCGarage"
import FinalQCMOI from "@/pages/Garage/FinalQCMOI"
import GarageRequestVoucher from "@/pages/Garage/GarageRequestVoucher"
import GarageTransfer from "@/pages/Garage/GarageTransfer"
import ImageUploadGarage from "@/pages/Garage/ImageUploadGarage"
import InspectionGarage from "@/pages/Garage/InspectionGarage"
import ItemRequestApproval from "@/pages/Garage/ItemRequestApproval"
import ItemRequestVoucher from "@/pages/Garage/ItemRequestVoucher"
import ParkingGarage from "@/pages/Garage/ParkingGarage"
import QCPassIn from "@/pages/Garage/QCPassIn"
import QCPassOut from "@/pages/Garage/QCPassOut"
import RejectJobCard from "@/pages/Garage/RejectJobCard"
import RepairJobCompletion from "@/pages/Garage/RepairJobCompletion"
import ScrapSpares from "@/pages/Garage/ScrapSpares"
import VehicleChecklist from "@/pages/Garage/VehicleChecklist"
import VehicleDeliveryApproval from "@/pages/Garage/VehicleDeliveryApproval"
import WarrantyCheck from "@/pages/Garage/WarrantyCheck"
import Washing from "@/pages/Garage/Washing"
import WinchMove from "@/pages/Garage/WinchMove"
import { type RouteItem } from "@/routes"
import { Settings2 } from "lucide-react"

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
