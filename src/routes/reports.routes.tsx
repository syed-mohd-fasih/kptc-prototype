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
    title: "Reports",
    icon: BarChartIcon,
    children: [
        {
            path: "job-order-status",
            title: "Job Order Status",
            element: <JobOrderStatus />,
        },
        {
            path: "work-order-progress",
            title: "Work Order In Progress",
            element: <WorkOrderInProgress />,
        },
        {
            path: "job-card-timeline",
            title: "Job Card Timeline",
            element: <JobCardTimeline />,
        },
        {
            path: "invoice-total",
            title: "Invoice Total",
            element: <InvoiceTotal />,
        },
        {
            path: "historical-maintenance",
            title: "Historical Maintenance Data",
            element: <HistoricalMaintenanceData />,
        },
        {
            path: "direct-purchases",
            title: "Direct Purchases of Spare Parts",
            element: <DirectPurchasesOfSpareParts />,
        },
        {
            path: "spare-parts-requests",
            title: "Spare Parts Requests",
            element: <SparePartsRequest />,
        },
        {
            path: "user-movement",
            title: "User Movement",
            element: <UserMovement />,
        },
        {
            path: "garage-movement",
            title: "Garage Movement",
            element: <GarageMovement />,
        },
        {
            path: "moi-financial",
            title: "MOI Monthly Financial",
            element: <MOIMonthlyFinancial />,
        },
        {
            path: "spare-parts-issue",
            title: "Spare Parts Issue",
            element: <SparePartsIssue />,
        },
        {
            path: "jo-summary",
            title: "Submitted JO Summary",
            element: <SubmittedJOSummary />,
        },
        {
            path: "invoice-3in1-report",
            title: "3 in 1 Invoice Report",
            element: <ThreeinOneInvoiceReport />,
        },
        {
            path: "pending-work-orders",
            title: "Pending Work Orders",
            element: <PendingWorkOrders />,
        },
        {
            path: "avg-execution-time",
            title: "Average Execution (Work Order)",
            element: <AverageTimeForExecutingWorkOrders />,
        },
        {
            path: "overdue-work-orders",
            title: "Overdue Work Orders",
            element: <OverdueWorkOrders />,
        },
    ],
}
