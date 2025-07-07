import { type RouteItem } from "@/routes"
import { BarChartIcon } from "lucide-react"
import { lazy } from "react"

const AverageTimeForExecutingWorkOrders = lazy(
    () => import("@/pages/Reports/AverageTimeForExecutingWorkOrders")
)
const DirectPurchasesOfSpareParts = lazy(
    () => import("@/pages/Reports/DirectPurchasesOfSpareParts")
)
const GarageMovement = lazy(() => import("@/pages/Reports/GarageMovement"))
const HistoricalMaintenanceData = lazy(() => import("@/pages/Reports/HistoricalMaintenanceData"))
const InvoiceTotal = lazy(() => import("@/pages/Reports/InvoiceTotal"))
const JobCardTimeline = lazy(() => import("@/pages/Reports/JobCardTimeline"))
const JobOrderStatus = lazy(() => import("@/pages/Reports/JobOrderStatus"))
const MOIMonthlyFinancial = lazy(() => import("@/pages/Reports/MOIMonthlyFinancial"))
const OverdueWorkOrders = lazy(() => import("@/pages/Reports/OverdueWorkOrders"))
const PendingWorkOrders = lazy(() => import("@/pages/Reports/PendingWorkOrders"))
const SparePartsIssue = lazy(() => import("@/pages/Reports/SparePartsIssue"))
const SparePartsRequest = lazy(() => import("@/pages/Reports/SparePartsRequest"))
const SubmittedJOSummary = lazy(() => import("@/pages/Reports/SubmittedJOSummary"))
const ThreeinOneInvoiceReport = lazy(() => import("@/pages/Reports/ThreeinOneInvoiceReport"))
const UserMovement = lazy(() => import("@/pages/Reports/UserMovement"))
const WorkOrderInProgress = lazy(() => import("@/pages/Reports/WorkOrderInProgress"))

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
