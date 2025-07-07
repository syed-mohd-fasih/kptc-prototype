import { type RouteItem } from "@/routes"
import { ShoppingCartIcon } from "lucide-react"
import { lazy } from "react"

const CostReport = lazy(() => import("@/pages/Procurement/CostReport"))
const CostReportApprovalKPTC = lazy(() => import("@/pages/Procurement/CostReportApprovalKPTC"))
const CostReportApprovalMOI = lazy(() => import("@/pages/Procurement/CostReportApprovalMOI"))
const ItemInspection = lazy(() => import("@/pages/Procurement/ItemInspection"))
const PurchaseOrder = lazy(() => import("@/pages/Procurement/PurchaseOrder"))
const PurchaseOrderApproval = lazy(() => import("@/pages/Procurement/PurchaseOrderApproval"))
const PurchaseRequestApproval3rdLevel = lazy(
    () => import("@/pages/Procurement/PurchaseRequestApproval3rdLevel")
)
const PurchaseRequestApprovalKPTC = lazy(
    () => import("@/pages/Procurement/PurchaseRequestApprovalKPTC")
)
const PurchaseRequestApprovalMOI = lazy(
    () => import("@/pages/Procurement/PurchaseRequestApprovalMOI")
)
const PurchaseRequestWithJO = lazy(() => import("@/pages/Procurement/PurchaseRequestWithJO"))
const Quotation = lazy(() => import("@/pages/Procurement/Quotation"))

export const procurementRoutes: RouteItem = {
    path: "procurement",
    title: "procurement",
    icon: ShoppingCartIcon,
    children: [
        {
            path: "purchase-request-jo",
            title: "purchase_request_jo",
            element: <PurchaseRequestWithJO />,
        },
        {
            path: "purchase-request-approval-moi",
            title: "purchase_request_approval_moi",
            element: <PurchaseRequestApprovalMOI />,
        },
        {
            path: "purchase-request-approval-kptc",
            title: "purchase_request_approval_kptc",
            element: <PurchaseRequestApprovalKPTC />,
        },
        {
            path: "purchase-request-approval-third",
            title: "purchase_request_approval_third",
            element: <PurchaseRequestApproval3rdLevel />,
        },
        { path: "quotation", title: "quotation", element: <Quotation /> },
        { path: "cost-report", title: "cost_report", element: <CostReport /> },
        {
            path: "cost-report-approval-moi",
            title: "cost_report_approval_moi",
            element: <CostReportApprovalMOI />,
        },
        {
            path: "cost-report-approval-kptc",
            title: "cost_report_approval_kptc",
            element: <CostReportApprovalKPTC />,
        },
        {
            path: "purchase-order",
            title: "purchase_order",
            element: <PurchaseOrder />,
        },
        {
            path: "purchase-order-approval",
            title: "purchase_order_approval",
            element: <PurchaseOrderApproval />,
        },
        {
            path: "item-inspection",
            title: "item_inspection",
            element: <ItemInspection />,
        },
    ],
}
