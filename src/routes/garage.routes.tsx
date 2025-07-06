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
    title: "Garage",
    icon: Settings2,
    children: [
        { path: "qc-pass-in", title: "QC Pass In", element: <QCPassIn /> },
        {
            path: "image-upload",
            title: "Image Upload (Garage)",
            element: <ImageUploadGarage />,
        },
        {
            path: "assign-team-leader",
            title: "Assign Team Leader",
            element: <AssignTeamLeader />,
        },
        {
            path: "assign-technician",
            title: "Assign Technician",
            element: <AssignTechnicianGarage />,
        },
        {
            path: "vehicle-check-list",
            title: "Vehicle Check List (Garage)",
            element: <VehicleChecklist />,
        },
        {
            path: "inspection",
            title: "Inspection (Garage)",
            element: <InspectionGarage />,
        },
        { path: "estimation", title: "Estimation", element: <Estimation /> },
        {
            path: "estimation-approval",
            title: "Estimation Approval",
            element: <EstimationApproval />,
        },
        {
            path: "estimation-approval-kd250",
            title: "Estimation Approval (KD250)",
            element: <EstimationApprovalKD250 />,
        },
        {
            path: "item-request-voucher",
            title: "Item Request Voucher",
            element: <ItemRequestVoucher />,
        },
        {
            path: "item-request-approval",
            title: "Item Request Approval (MOI)",
            element: <ItemRequestApproval />,
        },
        {
            path: "garage-request-voucher",
            title: "Garage Request Voucher",
            element: <GarageRequestVoucher />,
        },
        {
            path: "repair-job-completion",
            title: "Repair Job Completion",
            element: <RepairJobCompletion />,
        },
        {
            path: "final-qc-garage",
            title: "Final QC (Garage)",
            element: <FinalQCGarage />,
        },
        {
            path: "final-qc-moi",
            title: "Final QC (MOI)",
            element: <FinalQCMOI />,
        },
        { path: "qc-pass-out", title: "QC Pass Out", element: <QCPassOut /> },
        { path: "washing", title: "Washing", element: <Washing /> },
        {
            path: "vehicle-delivery-approval",
            title: "Vehicle Delivery Approval (MOI)",
            element: <VehicleDeliveryApproval />,
        },
        {
            path: "warranty-check",
            title: "Warranty Check",
            element: <WarrantyCheck />,
        },
        {
            path: "assign-winch",
            title: "Assign Winch",
            element: <AssignWinch />,
        },
        {
            path: "parking",
            title: "Parking (Garage)",
            element: <ParkingGarage />,
        },
        {
            path: "scrap-spares",
            title: "Scrap Spares",
            element: <ScrapSpares />,
        },
        { path: "winch-move", title: "Winch Move", element: <WinchMove /> },
        {
            path: "garage-transfer",
            title: "Garage Transfer",
            element: <GarageTransfer />,
        },
        {
            path: "reject-job-card",
            title: "Reject Job Card",
            element: <RejectJobCard />,
        },
    ],
}
