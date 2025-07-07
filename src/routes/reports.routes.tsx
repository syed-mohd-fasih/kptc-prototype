import AverageTimeForExecutingWorkOrders from "@/pages/Reports/AverageTimeForExecutingWorkOrders"
import DirectPurchasesOfSpareParts from "@/pages/Reports/DirectPurchasesOfSpareParts"
import GarageMovement from "@/pages/Reports/GarageMovement"
import HistoricalMaintenanceData from "@/pages/Reports/HistoricalMaintenanceData"
import InvoiceTotal from "@/pages/Reports/InvoiceTotal"
import JobCardTimeline from "@/pages/Reports/JobCardTimeline"
import JobOrderStatus from "@/pages/Reports/JobOrderStatus"
import MOIMonthlyFinancial from "@/pages/Reports/MOIMonthlyFinancial"
import OverdueWorkOrders from "@/pages/Reports/OverdueWorkOrders"
import PendingWorkOrders from "@/pages/Reports/PendingWorkOrders"
import SparePartsIssue from "@/pages/Reports/SparePartsIssue"
import SparePartsRequest from "@/pages/Reports/SparePartsRequest"
import SubmittedJOSummary from "@/pages/Reports/SubmittedJOSummary"
import ThreeinOneInvoiceReport from "@/pages/Reports/ThreeinOneInvoiceReport"
import UserMovement from "@/pages/Reports/UserMovement"
import WorkOrderInProgress from "@/pages/Reports/WorkOrderInProgress"
import { type RouteItem } from "@/routes"
import { BarChartIcon } from "lucide-react"

export const reportsRoutes: RouteItem = {
    path: "reports",
    title: "reports",
    icon: BarChartIcon,
    children: [
        {
            path: "job-order-status",
            title: "job_order_status",
            element: <JobOrderStatus />,
        },
        {
            path: "work-order-progress",
            title: "work_order_progress",
            element: <WorkOrderInProgress />,
        },
        {
            path: "job-card-timeline",
            title: "job_card_timeline",
            element: <JobCardTimeline />,
        },
        {
            path: "invoice-total",
            title: "invoice_total",
            element: <InvoiceTotal />,
        },
        {
            path: "historical-maintenance",
            title: "historical_maintenance",
            element: <HistoricalMaintenanceData />,
        },
        {
            path: "direct-purchases",
            title: "direct_purchases",
            element: <DirectPurchasesOfSpareParts />,
        },
        {
            path: "spare-parts-requests",
            title: "spare_parts_requests",
            element: <SparePartsRequest />,
        },
        {
            path: "user-movement",
            title: "user_movement",
            element: <UserMovement />,
        },
        {
            path: "garage-movement",
            title: "garage_movement",
            element: <GarageMovement />,
        },
        {
            path: "moi-financial",
            title: "moi_financial",
            element: <MOIMonthlyFinancial />,
        },
        {
            path: "spare-parts-issue",
            title: "spare_parts_issue",
            element: <SparePartsIssue />,
        },
        {
            path: "jo-summary",
            title: "jo_summary",
            element: <SubmittedJOSummary />,
        },
        {
            path: "invoice-3in1-report",
            title: "invoice_3in1_report",
            element: <ThreeinOneInvoiceReport />,
        },
        {
            path: "pending-work-orders",
            title: "pending_work_orders",
            element: <PendingWorkOrders />,
        },
        {
            path: "avg-execution-time",
            title: "avg_execution_time",
            element: <AverageTimeForExecutingWorkOrders />,
        },
        {
            path: "overdue-work-orders",
            title: "overdue_work_orders",
            element: <OverdueWorkOrders />,
        },
    ],
}
