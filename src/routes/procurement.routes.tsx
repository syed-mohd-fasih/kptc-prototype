import CostReport from "@/pages/Procurement/CostReport";
import CostReportApprovalKPTC from "@/pages/Procurement/CostReportApprovalKPTC";
import CostReportApprovalMOI from "@/pages/Procurement/CostReportApprovalMOI";
import ItemInspection from "@/pages/Procurement/ItemInspection";
import PurchaseOrder from "@/pages/Procurement/PurchaseOrder";
import PurchaseOrderApproval from "@/pages/Procurement/PurchaseOrderApproval";
import PurchaseRequestApproval3rdLevel from "@/pages/Procurement/PurchaseRequestApproval3rdLevel";
import PurchaseRequestApprovalKPTC from "@/pages/Procurement/PurchaseRequestApprovalKPTC";
import PurchaseRequestApprovalMOI from "@/pages/Procurement/PurchaseRequestApprovalMOI";
import PurchaseRequestWithJO from "@/pages/Procurement/PurchaseRequestWithJO";
import Quotation from "@/pages/Procurement/Quotation";
import { type RouteItem } from "@/routes";
import { ShoppingCartIcon } from "lucide-react";

export const procurementRoutes: RouteItem = {
    path: "procurement",
    title: "Procurement",
    icon: ShoppingCartIcon,
    children: [
        {
            path: "purchase-request-jo",
            title: "PR: Purchase Request (With JO)",
            element: <PurchaseRequestWithJO />,
        },
        {
            path: "purchase-request-approval-moi",
            title: "PR Approval (MOI)",
            element: <PurchaseRequestApprovalMOI />,
        },
        {
            path: "purchase-request-approval-kptc",
            title: "PR Approval (KPTC)",
            element: <PurchaseRequestApprovalKPTC />,
        },
        {
            path: "purchase-request-approval-third",
            title: "PR Approval (3rd Level)",
            element: <PurchaseRequestApproval3rdLevel />,
        },
        { path: "quotation", title: "Quotation", element: <Quotation /> },
        { path: "cost-report", title: "Cost Report", element: <CostReport /> },
        {
            path: "cost-report-approval-moi",
            title: "Cost Report Approval (MOI)",
            element: <CostReportApprovalMOI />,
        },
        {
            path: "cost-report-approval-kptc",
            title: "Cost Report Approval (KPTC)",
            element: <CostReportApprovalKPTC />,
        },
        {
            path: "purchase-order",
            title: "Purchase Order",
            element: <PurchaseOrder />,
        },
        {
            path: "purchase-order-approval",
            title: "Purchase Order Approval",
            element: <PurchaseOrderApproval />,
        },
        {
            path: "item-inspection",
            title: "Item Inspection",
            element: <ItemInspection />,
        },
    ],
};
