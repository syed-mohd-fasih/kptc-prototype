import { type RouteItem } from "@/routes"
import { ReceiptIcon } from "lucide-react"
import { lazy } from "react"

const Invoice = lazy(() => import("@/pages/Accounts/Invoice"))
const JOSubmitforInvoice = lazy(() => import("@/pages/Accounts/JOSubmitforInvoice"))
const MaintenanceInvoice = lazy(() => import("@/pages/Accounts/MaintenanceInvoice"))
const PettyCash = lazy(() => import("@/pages/Accounts/PettyCash"))
const PettyCashApproval = lazy(() => import("@/pages/Accounts/PettyCashApproval"))
const ThreeinOneInvoice = lazy(() => import("@/pages/Accounts/ThreeinOneInvoice"))
const ThreeinOneInvoiceApproval = lazy(() => import("@/pages/Accounts/ThreeinOneInvoiceApproval"))

export const accountsRoutes: RouteItem = {
    path: "accounts",
    title: "accounts",
    icon: ReceiptIcon,
    children: [
        {
            path: "invoice-3in1",
            title: "invoice_3in1",
            element: <ThreeinOneInvoice />,
        },
        {
            path: "invoice-3in1-approval",
            title: "invoice_3in1_approval",
            element: <ThreeinOneInvoiceApproval />,
        },
        {
            path: "maintenance-invoice",
            title: "maintenance_invoice",
            element: <MaintenanceInvoice />,
        },
        { path: "petty-cash", title: "petty_cash", element: <PettyCash /> },
        {
            path: "petty-cash-approval",
            title: "petty_cash_approval",
            element: <PettyCashApproval />,
        },
        { path: "invoice", title: "invoice", element: <Invoice /> },
        {
            path: "jo-submit",
            title: "jo_submit",
            element: <JOSubmitforInvoice />,
        },
    ],
}
