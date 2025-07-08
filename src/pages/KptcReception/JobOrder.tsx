import { DataTable } from "@/components/ui/DataTable"
import { columns, type KJO } from "./columns"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { DialogHeader } from "@/components/ui/dialog"

async function getData(): Promise<KJO[]> {
    // Fetch data from your API here.
    return [
        {
            id: "1",
            serial: 1,
            jono: "MJC/MISBS/2025070000011",
            date: "07/07/2025",
            plate: "17/29802-MOI",
            vehiclemake: "GMC",
            garage: "MOI SUBHAN",
            jostatus: "Image Upload (MOI)",
            servicetype: "Main Service",
            waiting: false,
        },
        {
            id: "2",
            serial: 2,
            jono: "MJC/MISUM/2025070000007",
            date: "07/07/2025",
            plate: "12100-MOI",
            vehiclemake: "GMC",
            garage: "MOI SULAIBIYA MAIN",
            jostatus: "Image Upload (MOI)",
            servicetype: "Main Service",
            waiting: false,
        },
        {
            id: "3",
            serial: 3,
            jono: "MJC/MIAHS/2025070000003",
            date: "07/07/2025",
            plate: "10121",
            vehiclemake: "FORD",
            garage: "MOI AHMADI",
            jostatus: "Job Order Created (KPTC)",
            servicetype: "Main Service",
            waiting: false,
        },
        {
            id: "4",
            serial: 4,
            jono: "MJC/MIAHS/2025070000002",
            date: "06/07/2025",
            plate: "1/1353",
            vehiclemake: "GMC",
            garage: "MOI AHMADI",
            jostatus: "Image Upload (MOI)",
            servicetype: "Main Service",
            waiting: false,
        },
        {
            id: "5",
            serial: 5,
            jono: "MJC/MIMTS/2025070000002",
            date: "06/07/2025",
            plate: "9808",
            vehiclemake: "CHEVROLET",
            garage: "MOI MUTLA",
            jostatus: "Job Order Created (KPTC)",
            servicetype: "Main Service",
            waiting: false,
        },
        {
            id: "6",
            serial: 6,
            jono: "MJC/MISBS/2025070000010",
            date: "06/07/2025",
            plate: "11213",
            vehiclemake: "MITSUBISHI",
            garage: "MOI SUBHAN",
            jostatus: "Job Order Created (KPTC)",
            servicetype: "Main Service",
            waiting: false,
        },
    ]
}

export default async function JobOrder() {
    const data = await getData()
    return (
        <div>
            <Card className="my-4">
                <CardContent>
                    <Dialog>
                        <DialogTrigger>
                            <Button>Create New Job Order</Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>New Job Order</DialogTitle>
                                <DialogDescription>New Job Order Form here</DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                </CardContent>
            </Card>
            <DataTable data={data} columns={columns} />
        </div>
    )
}
