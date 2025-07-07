import Invoice from "@/pages/Accounts/Invoice"
import JOSubmitforInvoice from "@/pages/Accounts/JOSubmitforInvoice"
import MaintenanceInvoice from "@/pages/Accounts/MaintenanceInvoice"
import PettyCash from "@/pages/Accounts/PettyCash"
import PettyCashApproval from "@/pages/Accounts/PettyCashApproval"
import ThreeinOneInvoice from "@/pages/Accounts/ThreeinOneInvoice"
import ThreeinOneInvoiceApproval from "@/pages/Accounts/ThreeinOneInvoiceApproval"
import { type RouteItem } from "@/routes"
import { ReceiptIcon } from "lucide-react"

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
