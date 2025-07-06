import Invoice from "@/pages/Accounts/Invoice";
import JOSubmitforInvoice from "@/pages/Accounts/JOSubmitforInvoice";
import MaintenanceInvoice from "@/pages/Accounts/MaintenanceInvoice";
import PettyCash from "@/pages/Accounts/PettyCash";
import PettyCashApproval from "@/pages/Accounts/PettyCashApproval";
import ThreeinOneInvoice from "@/pages/Accounts/ThreeinOneInvoice";
import ThreeinOneInvoiceApproval from "@/pages/Accounts/ThreeinOneInvoiceApproval";
import { type RouteItem } from "@/routes";
import { ReceiptIcon } from "lucide-react";

export const accountsRoutes: RouteItem = {
    path: "accounts",
    title: "Accounts",
    icon: ReceiptIcon,
    children: [
        {
            path: "invoice-3in1",
            title: "3 in 1 Invoice",
            element: <ThreeinOneInvoice />,
        },
        {
            path: "invoice-3in1-approval",
            title: "3 in 1 Invoice Approval",
            element: <ThreeinOneInvoiceApproval />,
        },
        {
            path: "maintenance-invoice",
            title: "Maintenance Invoice",
            element: <MaintenanceInvoice />,
        },
        { path: "petty-cash", title: "Petty Cash", element: <PettyCash /> },
        {
            path: "petty-cash-approval",
            title: "Petty Cash Approval",
            element: <PettyCashApproval />,
        },
        { path: "invoice", title: "Invoice", element: <Invoice /> },
        {
            path: "jo-submit",
            title: "JO Submit for Invoice",
            element: <JOSubmitforInvoice />,
        },
    ],
};
