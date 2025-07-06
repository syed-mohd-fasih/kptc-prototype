import ChangePassword from "@/pages/Master/ChangePassword"
import EmployeeSync from "@/pages/Master/EmployeeSync"
import EmployeeTransfer from "@/pages/Master/EmployeeTransfer"
import EmployeeTransferApprove from "@/pages/Master/EmployeeTransferApprove"
import EmployeeTransferClose from "@/pages/Master/EmployeeTransferClose"
import ItemOpenRequest from "@/pages/Master/ItemOpenRequest"
import ItemSync from "@/pages/Master/ItemSync"
import LabourCharge from "@/pages/Master/LabourCharge"
import MainRepair from "@/pages/Master/MainRepair"
import RolePermission from "@/pages/Master/RolePermission"
import ServiceKilometers from "@/pages/Master/ServiceKilometers"
import SubRepair from "@/pages/Master/SubRepair"
import Supplier from "@/pages/Master/Supplier"
import TenderPrice from "@/pages/Master/TenderPrice"
import Users from "@/pages/Master/Users"
import Vehicle from "@/pages/Master/Vehicle"
import VehicleMake from "@/pages/Master/VehicleMake"
import VehicleModel from "@/pages/Master/VehicleModel"
import { type RouteItem } from "@/routes"
import { SettingsIcon, Sticker } from "lucide-react"

export const masterRoutes: RouteItem = {
    path: "master",
    title: "Master",
    icon: SettingsIcon,
    children: [
        {
            path: "vehicle-make",
            title: "Vehicle Make",
            element: <VehicleMake />,
        },
        {
            path: "tender-price",
            title: "Tender Price",
            element: <TenderPrice />,
        },
        {
            path: "vehicle-model",
            title: "Vehicle Model",
            element: <VehicleModel />,
        },
        { path: "sticker", title: "Sticker", element: <Sticker /> },
        { path: "vehicle", title: "Vehicle", element: <Vehicle /> },
        { path: "supplier", title: "Supplier", element: <Supplier /> },
        { path: "main-repair", title: "Main Repair", element: <MainRepair /> },
        { path: "sub-repair", title: "Sub Repair", element: <SubRepair /> },
        {
            path: "item-open-request",
            title: "Item Open Request",
            element: <ItemOpenRequest />,
        },
        {
            path: "role-permission",
            title: "Role Permission",
            element: <RolePermission />,
        },
        { path: "users", title: "Users", element: <Users /> },
        {
            path: "change-password",
            title: "Change Password",
            element: <ChangePassword />,
        },
        {
            path: "service-kilometers",
            title: "Service Kilometers",
            element: <ServiceKilometers />,
        },
        {
            path: "employee-transfer",
            title: "Employee Transfer",
            element: <EmployeeTransfer />,
        },
        {
            path: "employee-transfer-approve",
            title: "Employee Transfer Approve",
            element: <EmployeeTransferApprove />,
        },
        {
            path: "employee-transfer-close",
            title: "Employee Transfer Close",
            element: <EmployeeTransferClose />,
        },
        {
            path: "labour-charge",
            title: "Labour Charge",
            element: <LabourCharge />,
        },
        {
            path: "employee-sync",
            title: "Employee Sync",
            element: <EmployeeSync />,
        },
        { path: "item-sync", title: "Item Sync", element: <ItemSync /> },
    ],
}
