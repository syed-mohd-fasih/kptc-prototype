"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { VehicleDetailsCard } from "./components/VehicleDetailsCard"
// import { Separator } from "@/components/ui/separator"

export default function JobCardForm() {
    const [winchNeeded, setWinchNeeded] = useState(false)

    return (
        <div className="px-6 space-y-6">
            {/* === Top Two Cards: Vehicle + Job Details === */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* === Vehicle Details Card === */}
                <VehicleDetailsCard />

                {/* === Job Card Details Card === */}
                <Card>
                    <CardHeader>
                        <CardTitle>Job Card Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Select Service Type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Main">Main Service</SelectItem>
                                <SelectItem value="Quick">Quick Service</SelectItem>
                                <SelectItem value="Sticker">Sticker Service</SelectItem>
                            </SelectContent>
                        </Select>

                        <div className="flex items-center gap-2">
                            <Checkbox id="customerWaiting" />
                            <label htmlFor="customerWaiting">Customer Waiting</label>
                        </div>

                        <div>
                            <label className="block mb-1 font-medium">Winch Needed</label>
                            <ToggleGroup
                                type="single"
                                value={winchNeeded ? "yes" : "no"}
                                onValueChange={(val) => setWinchNeeded(val === "yes")}
                            >
                                <ToggleGroupItem value="yes">Yes</ToggleGroupItem>
                                <ToggleGroupItem value="no">No</ToggleGroupItem>
                            </ToggleGroup>
                        </div>

                        <Input placeholder="Winch Number" disabled={!winchNeeded} />

                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Select Garage" />
                            </SelectTrigger>
                            <SelectContent>
                                {["Garage_1", "Garage_2", "Garage_3", "Garage_4", "Garage_5"].map(
                                    (g) => (
                                        <SelectItem key={g} value={g}>
                                            {g}
                                        </SelectItem>
                                    )
                                )}
                            </SelectContent>
                        </Select>

                        <Textarea placeholder="Remarks..." />
                    </CardContent>
                </Card>
            </div>

            {/* === Vehicle Checklist Card === */}
            <Card>
                <CardHeader>
                    <CardTitle>Vehicle Checklist</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {/* Placeholder checklist columns */}
                        <div className="space-y-2">
                            <p className="font-medium">Exterior</p>
                            <div className="flex items-center gap-2">
                                <Checkbox id="lights" />
                                <label htmlFor="lights">Lights</label>
                            </div>
                            <div className="flex items-center gap-2">
                                <Checkbox id="mirror" />
                                <label htmlFor="mirror">Mirrors</label>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <p className="font-medium">Interior</p>
                            <div className="flex items-center gap-2">
                                <Checkbox id="ac" />
                                <label htmlFor="ac">A/C</label>
                            </div>
                            <div className="flex items-center gap-2">
                                <Checkbox id="radio" />
                                <label htmlFor="radio">Radio</label>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <p className="font-medium">Engine Bay</p>
                            <div className="flex items-center gap-2">
                                <Checkbox id="oil" />
                                <label htmlFor="oil">Oil Level</label>
                            </div>
                            <div className="flex items-center gap-2">
                                <Checkbox id="battery" />
                                <label htmlFor="battery">Battery</label>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* === Submit Button === */}
            <div className="pt-2">
                <Button className="w-full md:w-fit">Submit Job Card</Button>
            </div>
        </div>
    )
}
