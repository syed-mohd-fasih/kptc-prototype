import { type RouteItem } from "@/routes"
import { SettingsIcon, Sticker } from "lucide-react"
import { lazy } from "react"

const ChangePassword = lazy(() => import("@/pages/Master/ChangePassword"))
const EmployeeSync = lazy(() => import("@/pages/Master/EmployeeSync"))
const EmployeeTransfer = lazy(() => import("@/pages/Master/EmployeeTransfer"))
const EmployeeTransferApprove = lazy(() => import("@/pages/Master/EmployeeTransferApprove"))
const EmployeeTransferClose = lazy(() => import("@/pages/Master/EmployeeTransferClose"))
const ItemOpenRequest = lazy(() => import("@/pages/Master/ItemOpenRequest"))
const ItemSync = lazy(() => import("@/pages/Master/ItemSync"))
const LabourCharge = lazy(() => import("@/pages/Master/LabourCharge"))
const MainRepair = lazy(() => import("@/pages/Master/MainRepair"))
const RolePermission = lazy(() => import("@/pages/Master/RolePermission"))
const ServiceKilometers = lazy(() => import("@/pages/Master/ServiceKilometers"))
const SubRepair = lazy(() => import("@/pages/Master/SubRepair"))
const Supplier = lazy(() => import("@/pages/Master/Supplier"))
const TenderPrice = lazy(() => import("@/pages/Master/TenderPrice"))
const Users = lazy(() => import("@/pages/Master/Users"))
const Vehicle = lazy(() => import("@/pages/Master/Vehicle"))
const VehicleMake = lazy(() => import("@/pages/Master/VehicleMake"))
const VehicleModel = lazy(() => import("@/pages/Master/VehicleModel"))

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
