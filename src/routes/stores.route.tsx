import { type RouteItem } from "@/routes"
import { WarehouseIcon } from "lucide-react"
import { lazy } from "react"

const CurrentStockReport = lazy(() => import("@/pages/Stores/CurrentStockReport"))
const DailyTransactionReport = lazy(() => import("@/pages/Stores/DailyTransactionReport"))
const IssueVoucher = lazy(() => import("@/pages/Stores/IssueVoucher"))
const PurchaseRequestApprovalKPTC = lazy(() => import("@/pages/Stores/PurchaseRequestApprovalKPTC"))
const PurchaseRequestWithoutJO = lazy(() => import("@/pages/Stores/PurchaseRequestWithoutJO"))
const ReceiptVoucherDirect = lazy(() => import("@/pages/Stores/ReceiptVoucherDirect"))
const ReturnVoucher = lazy(() => import("@/pages/Stores/ReturnVoucher"))
const StockQueryReport = lazy(() => import("@/pages/Stores/StockQueryReport"))
const StoreDocumentReport = lazy(() => import("@/pages/Stores/StoreDocumentReport"))
const TranferVoucherByDemand = lazy(() => import("@/pages/Stores/TranferVoucherByDemand"))
const TransferVoucherPosting = lazy(() => import("@/pages/Stores/TransferVoucherPosting"))

export const storesRoutes: RouteItem = {
    path: "stores",
    title: "stores",
    icon: WarehouseIcon,
    children: [
        {
            path: "receipt-voucher-direct",
            title: "receipt_voucher_direct",
            element: <ReceiptVoucherDirect />,
        },
        {
            path: "issue-voucher",
            title: "issue_voucher",
            element: <IssueVoucher />,
        },
        {
            path: "return-voucher",
            title: "return_voucher",
            element: <ReturnVoucher />,
        },
        {
            path: "transfer-voucher-demand",
            title: "transfer_voucher_demand",
            element: <TranferVoucherByDemand />,
        },
        {
            path: "transfer-voucher-posting",
            title: "transfer_voucher_posting",
            element: <TransferVoucherPosting />,
        },
        {
            path: "purchase-request-nojo",
            title: "purchase_request_nojo",
            element: <PurchaseRequestWithoutJO />,
        },
        {
            path: "purchase-request-approval-kptc",
            title: "purchase_request_approval_kptc",
            element: <PurchaseRequestApprovalKPTC />,
        },
        {
            path: "daily-transaction-report",
            title: "daily_transaction_report",
            element: <DailyTransactionReport />,
        },
        {
            path: "stock-query",
            title: "stock_query",
            element: <StockQueryReport />,
        },
        {
            path: "current-stock",
            title: "current_stock",
            element: <CurrentStockReport />,
        },
        {
            path: "store-documents",
            title: "store_documents",
            element: <StoreDocumentReport />,
        },
    ],
}
