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
    title: "master",
    icon: SettingsIcon,
    children: [
        {
            path: "vehicle-make",
            title: "vehicle_make",
            element: <VehicleMake />,
        },
        {
            path: "tender-price",
            title: "tender_price",
            element: <TenderPrice />,
        },
        {
            path: "vehicle-model",
            title: "vehicle_model",
            element: <VehicleModel />,
        },
        { path: "sticker", title: "sticker", element: <Sticker /> },
        { path: "vehicle", title: "vehicle", element: <Vehicle /> },
        { path: "supplier", title: "supplier", element: <Supplier /> },
        { path: "main-repair", title: "main_repair", element: <MainRepair /> },
        { path: "sub-repair", title: "sub_repair", element: <SubRepair /> },
        {
            path: "item-open-request",
            title: "item_open_request",
            element: <ItemOpenRequest />,
        },
        {
            path: "role-permission",
            title: "role_permission",
            element: <RolePermission />,
        },
        { path: "users", title: "users", element: <Users /> },
        {
            path: "change-password",
            title: "change_password",
            element: <ChangePassword />,
        },
        {
            path: "service-kilometers",
            title: "service_kilometers",
            element: <ServiceKilometers />,
        },
        {
            path: "employee-transfer",
            title: "employee_transfer",
            element: <EmployeeTransfer />,
        },
        {
            path: "employee-transfer-approve",
            title: "employee_transfer_approve",
            element: <EmployeeTransferApprove />,
        },
        {
            path: "employee-transfer-close",
            title: "employee_transfer_close",
            element: <EmployeeTransferClose />,
        },
        {
            path: "labour-charge",
            title: "labour_charge",
            element: <LabourCharge />,
        },
        {
            path: "employee-sync",
            title: "employee_sync",
            element: <EmployeeSync />,
        },
        { path: "item-sync", title: "item_sync", element: <ItemSync /> },
    ],
}
