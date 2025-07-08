"use client"

import { useState } from "react"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { type MJC } from "./columns"
import { Input } from "@/components/ui/input"

const mockInspectors = ["Ali Yousuf", "Sameer Hasan", "Nora Khaled", "Reem Saeed"]

async function getData(): Promise<MJC[]> {
    // Fetch data from your API here.
    return [
        {
            id: "1",
            serial: 1,
            jcno: "MJC/MISBS/2025070000011",
            date: "07/07/2025",
            plate: "17/29802-MOI",
            vehiclemake: "GMC",
            garage: "MOI SUBHAN",
            jcstatus: "Image Upload (MOI)",
            servicetype: "Main Service",
            waiting: false,
        },
        {
            id: "2",
            serial: 2,
            jcno: "MJC/MISUM/2025070000007",
            date: "07/07/2025",
            plate: "12100-MOI",
            vehiclemake: "GMC",
            garage: "MOI SULAIBIYA MAIN",
            jcstatus: "Image Upload (MOI)",
            servicetype: "Main Service",
            waiting: false,
        },
        {
            id: "3",
            serial: 3,
            jcno: "MJC/MIAHS/2025070000003",
            date: "07/07/2025",
            plate: "10121",
            vehiclemake: "FORD",
            garage: "MOI AHMADI",
            jcstatus: "Job Order Created (KPTC)",
            servicetype: "Main Service",
            waiting: false,
        },
        {
            id: "4",
            serial: 4,
            jcno: "MJC/MIAHS/2025070000002",
            date: "06/07/2025",
            plate: "1/1353",
            vehiclemake: "GMC",
            garage: "MOI AHMADI",
            jcstatus: "Image Upload (MOI)",
            servicetype: "Main Service",
            waiting: false,
        },
        {
            id: "5",
            serial: 5,
            jcno: "MJC/MIMTS/2025070000002",
            date: "06/07/2025",
            plate: "9808",
            vehiclemake: "CHEVROLET",
            garage: "MOI MUTLA",
            jcstatus: "Job Order Created (KPTC)",
            servicetype: "Main Service",
            waiting: false,
        },
        {
            id: "6",
            serial: 6,
            jcno: "MJC/MISBS/2025070000010",
            date: "06/07/2025",
            plate: "11213",
            vehiclemake: "MITSUBISHI",
            garage: "MOI SUBHAN",
            jcstatus: "Job Order Created (KPTC)",
            servicetype: "Main Service",
            waiting: false,
        },
    ]
}

export default function AssignInspectorMOI() {
    const [search, setSearch] = useState("")
    const [selectedCard, setSelectedCard] = useState<MJC | null>(null)
    const [selectedInspector, setSelectedInspector] = useState<string>("")
    const [data, setData] = useState<MJC[]>([])

    useState(() => {
        getData().then(setData)
    })

    return (
        <div className="p-4">
            {/* <h2 className="text-2xl font-bold mb-4">Assign Inspector - MOI</h2> */}
            <Input
                type="text"
                placeholder="Search by Job Card No."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="max-w-md mb-4"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {data
                    .filter((item) => item.jcno.toLowerCase().includes(search.toLowerCase()))
                    .map((item) => (
                        <Dialog
                            key={item.id}
                            onOpenChange={(open) => !open && setSelectedCard(null)}
                        >
                            <DialogTrigger asChild>
                                <Card
                                    onClick={() => setSelectedCard(item)}
                                    className="cursor-pointer hover:shadow-md transition"
                                >
                                    <CardHeader>
                                        <CardTitle className="text-sm">{item.jcno}</CardTitle>
                                        <CardDescription>{item.garage}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="text-sm space-y-1">
                                        <p>
                                            <span className="font-medium">Date:</span> {item.date}
                                        </p>
                                        <p>
                                            <span className="font-medium">Plate:</span> {item.plate}
                                        </p>
                                        <p>
                                            <span className="font-medium">Vehicle:</span>{" "}
                                            {item.vehiclemake}
                                        </p>
                                        <p>
                                            <span className="font-medium">Status:</span>{" "}
                                            {item.jcstatus}
                                        </p>
                                    </CardContent>
                                </Card>
                            </DialogTrigger>

                            <DialogContent className="sm:max-w-md">
                                <DialogHeader>
                                    <DialogTitle>Assign Inspector</DialogTitle>
                                </DialogHeader>
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-sm">{item.jcno}</CardTitle>
                                        <CardDescription>{item.garage}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="text-sm space-y-1">
                                        <p>
                                            <span className="font-medium">Date:</span> {item.date}
                                        </p>
                                        <p>
                                            <span className="font-medium">Plate:</span> {item.plate}
                                        </p>
                                        <p>
                                            <span className="font-medium">Vehicle:</span>{" "}
                                            {item.vehiclemake}
                                        </p>
                                        <p>
                                            <span className="font-medium">Status:</span>{" "}
                                            {item.jcstatus}
                                        </p>
                                    </CardContent>
                                </Card>
                                <div className="space-y-4">
                                    <div>
                                        <Label className="py-4" htmlFor="inspector">
                                            Inspector:
                                        </Label>
                                        <Select
                                            value={selectedInspector}
                                            onValueChange={setSelectedInspector}
                                        >
                                            <SelectTrigger id="inspector">
                                                <SelectValue placeholder="Select inspector" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {mockInspectors.map((name) => (
                                                    <SelectItem key={name} value={name}>
                                                        {name}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <Button
                                        className="w-full"
                                        onClick={() => {
                                            // Replace this with API call or state update logic
                                            console.log(
                                                `Assigned ${selectedInspector} to ${selectedCard?.jcno}`
                                            )
                                            setSelectedCard(null)
                                            setSelectedInspector("")
                                        }}
                                        disabled={!selectedInspector}
                                    >
                                        Assign
                                    </Button>
                                </div>
                            </DialogContent>
                        </Dialog>
                    ))}
            </div>
        </div>
    )
}
