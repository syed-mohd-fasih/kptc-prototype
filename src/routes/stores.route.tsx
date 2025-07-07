import CurrentStockReport from "@/pages/Stores/CurrentStockReport"
import DailyTransactionReport from "@/pages/Stores/DailyTransactionReport"
import IssueVoucher from "@/pages/Stores/IssueVoucher"
import PurchaseRequestApprovalKPTC from "@/pages/Stores/PurchaseRequestApprovalKPTC"
import PurchaseRequestWithoutJO from "@/pages/Stores/PurchaseRequestWithoutJO"
import ReceiptVoucherDirect from "@/pages/Stores/ReceiptVoucherDirect"
import ReturnVoucher from "@/pages/Stores/ReturnVoucher"
import StockQueryReport from "@/pages/Stores/StockQueryReport"
import StoreDocumentReport from "@/pages/Stores/StoreDocumentReport"
import TranferVoucherByDemand from "@/pages/Stores/TranferVoucherByDemand"
import TransferVoucherPosting from "@/pages/Stores/TransferVoucherPosting"
import { type RouteItem } from "@/routes"
import { WarehouseIcon } from "lucide-react"

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
