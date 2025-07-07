import CostReport from "@/pages/Procurement/CostReport"
import CostReportApprovalKPTC from "@/pages/Procurement/CostReportApprovalKPTC"
import CostReportApprovalMOI from "@/pages/Procurement/CostReportApprovalMOI"
import ItemInspection from "@/pages/Procurement/ItemInspection"
import PurchaseOrder from "@/pages/Procurement/PurchaseOrder"
import PurchaseOrderApproval from "@/pages/Procurement/PurchaseOrderApproval"
import PurchaseRequestApproval3rdLevel from "@/pages/Procurement/PurchaseRequestApproval3rdLevel"
import PurchaseRequestApprovalKPTC from "@/pages/Procurement/PurchaseRequestApprovalKPTC"
import PurchaseRequestApprovalMOI from "@/pages/Procurement/PurchaseRequestApprovalMOI"
import PurchaseRequestWithJO from "@/pages/Procurement/PurchaseRequestWithJO"
import Quotation from "@/pages/Procurement/Quotation"
import { type RouteItem } from "@/routes"
import { ShoppingCartIcon } from "lucide-react"

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
