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
import { Input } from "@/components/ui/input"
import { type MJC } from "./columns"

const imageSides = ["Front", "Back", "Left", "Right", "Top", "Bottom", "Others"] as const

type SideType = (typeof imageSides)[number]

const mockData: MJC[] = [
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

export default function ImageUploadMOI() {
    const [search, setSearch] = useState("")
    const [selectedCard, setSelectedCard] = useState<MJC | null>(null)
    const [selectedSide, setSelectedSide] = useState<SideType | "">("")
    const [selectedImage, setSelectedImage] = useState<File | null>(null)

    return (
        <div className="p-4">
            <Input
                type="text"
                placeholder="Search by Job Card No."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="max-w-md mb-4"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {mockData
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
                                    <DialogTitle>Upload Vehicle Image</DialogTitle>
                                </DialogHeader>
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-sm">{item.jcno}</CardTitle>
                                        <CardDescription>{item.garage}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="side">Vehicle Side</Label>
                                            <Select
                                                value={selectedSide}
                                                onValueChange={(value) =>
                                                    setSelectedSide(value as SideType)
                                                }
                                            >
                                                <SelectTrigger id="side">
                                                    <SelectValue placeholder="Select Side" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {imageSides.map((side) => (
                                                        <SelectItem key={side} value={side}>
                                                            {side}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="image">Upload Image</Label>
                                            <Input
                                                id="image"
                                                type="file"
                                                accept="image/*"
                                                onChange={(e) =>
                                                    setSelectedImage(e.target.files?.[0] || null)
                                                }
                                            />
                                        </div>
                                        <Button
                                            className="w-full"
                                            onClick={() => {
                                                console.log("Uploading:", {
                                                    jcno: selectedCard?.jcno,
                                                    side: selectedSide,
                                                    file: selectedImage,
                                                })
                                                setSelectedSide("")
                                                setSelectedImage(null)
                                                setSelectedCard(null)
                                            }}
                                            disabled={!selectedSide || !selectedImage}
                                        >
                                            Upload
                                        </Button>
                                    </CardContent>
                                </Card>
                            </DialogContent>
                        </Dialog>
                    ))}
            </div>
        </div>
    )
}
