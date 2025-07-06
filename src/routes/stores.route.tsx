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
    title: "Stores",
    icon: WarehouseIcon,
    children: [
        {
            path: "receipt-voucher-direct",
            title: "Receipt Voucher Direct",
            element: <ReceiptVoucherDirect />,
        },
        {
            path: "issue-voucher",
            title: "Issue Voucher",
            element: <IssueVoucher />,
        },
        {
            path: "return-voucher",
            title: "Return Voucher",
            element: <ReturnVoucher />,
        },
        {
            path: "transfer-voucher-demand",
            title: "Transfer Voucher By Demand",
            element: <TranferVoucherByDemand />,
        },
        {
            path: "transfer-voucher-posting",
            title: "Transfer Voucher Posting",
            element: <TransferVoucherPosting />,
        },
        {
            path: "purchase-request-nojo",
            title: "Purchase Request (Without JO)",
            element: <PurchaseRequestWithoutJO />,
        },
        {
            path: "purchase-request-approval-kptc",
            title: "PR Approval (KPTC)",
            element: <PurchaseRequestApprovalKPTC />,
        },
        {
            path: "daily-transaction-report",
            title: "Daily Transaction Report",
            element: <DailyTransactionReport />,
        },
        {
            path: "stock-query",
            title: "Stock Query Report",
            element: <StockQueryReport />,
        },
        {
            path: "current-stock",
            title: "Current Stock Report",
            element: <CurrentStockReport />,
        },
        {
            path: "store-documents",
            title: "Store Document Report",
            element: <StoreDocumentReport />,
        },
    ],
}
