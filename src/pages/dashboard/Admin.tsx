import { SectionCards } from "@/components/placeholder/SectionCards"
import { ChartAreaInteractive } from "@/components/placeholder/ChartAreaInteractive"
import { DataTable } from "@/components/ui/DataTable"
import { columns, type Payment } from "@/components/placeholder/columns"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { toast } from "sonner"

async function getData(): Promise<Payment[]> {
    // Fetch data from your API here.
    return [
        {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
        {
            id: "a19fd45b",
            amount: 250,
            status: "success",
            email: "alice@example.com",
        },
        {
            id: "b38cf23a",
            amount: 75,
            status: "failed",
            email: "bob@example.com",
        },
        {
            id: "c91ab76d",
            amount: 430,
            status: "pending",
            email: "carol@example.com",
        },
        {
            id: "d84fe12c",
            amount: 120,
            status: "success",
            email: "dave@example.com",
        },
        {
            id: "e27ca58e",
            amount: 310,
            status: "failed",
            email: "eve@example.com",
        },
        {
            id: "f73bb91a",
            amount: 60,
            status: "failed",
            email: "frank@example.com",
        },
        {
            id: "g64de10f",
            amount: 215,
            status: "pending",
            email: "grace@example.com",
        },
        {
            id: "h52cd32b",
            amount: 90,
            status: "success",
            email: "henry@example.com",
        },
        {
            id: "i45aa77c",
            amount: 145,
            status: "failed",
            email: "irene@example.com",
        },
        {
            id: "j31dd98e",
            amount: 200,
            status: "pending",
            email: "john@example.com",
        },
        {
            id: "k28bb67a",
            amount: 330,
            status: "success",
            email: "karen@example.com",
        },
        {
            id: "l77ec54d",
            amount: 80,
            status: "failed",
            email: "leo@example.com",
        },
        {
            id: "m90fe23f",
            amount: 410,
            status: "failed",
            email: "mia@example.com",
        },
        {
            id: "n81aa90b",
            amount: 190,
            status: "pending",
            email: "nick@example.com",
        },
        {
            id: "o16cd65c",
            amount: 500,
            status: "success",
            email: "olivia@example.com",
        },
        {
            id: "p33ee76a",
            amount: 105,
            status: "pending",
            email: "paul@example.com",
        },
        {
            id: "q92ff34d",
            amount: 295,
            status: "failed",
            email: "quinn@example.com",
        },
        {
            id: "r62aa19e",
            amount: 380,
            status: "success",
            email: "rachel@example.com",
        },
        {
            id: "s49cc81f",
            amount: 160,
            status: "failed",
            email: "sam@example.com",
        },
    ]
}

export default async function Admin() {
    const data = await getData()

    return (
        <>
            <div className="flex flex-1 flex-col">
                <div className="@container/main flex flex-1 flex-col gap-2">
                    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                        <SectionCards />
                        <div className="px-4 lg:px-6">
                            <ChartAreaInteractive />
                        </div>
                        <DataTable columns={columns} data={data} />
                    </div>
                </div>
            </div>

            <Separator />
            <div className="flex flex-grow justify-evenly">
                <Button
                    onClick={() => {
                        toast("Hi!!")
                    }}
                >
                    Click Me
                </Button>
                <Button
                    onClick={() => {
                        toast.info("FYI...")
                    }}
                >
                    Info
                </Button>
                <Button
                    onClick={() => {
                        toast.error("Oops!")
                    }}
                >
                    Error
                </Button>
                <Button
                    onClick={() => {
                        toast.success("Yay!!")
                    }}
                >
                    Success
                </Button>
                <Button
                    onClick={() => {
                        toast.warning("Wait!")
                    }}
                >
                    Warning
                </Button>
            </div>
        </>
    )
}
