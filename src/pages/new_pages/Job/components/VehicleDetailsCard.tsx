"use client"
import {
    Form,
    FormControl,
    //   FormField,
    FormItem,
    FormLabel,
    //   FormMessage,
} from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import CarPlaceholder from "@/assets/placeholder_car.png"

export function VehicleDetailsCard() {
    const [tab, setTab] = useState("existing")
    const [plate, setPlate] = useState("")
    const [submitted, setSubmitted] = useState(false)
    const form = useForm()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (plate.trim()) setSubmitted(true)
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Vehicle Details</CardTitle>
            </CardHeader>
            <CardContent>
                <Tabs defaultValue="existing" value={tab} onValueChange={setTab}>
                    <TabsList className="w-full grid grid-cols-2 mb-4">
                        <TabsTrigger value="existing">Existing Vehicle</TabsTrigger>
                        <TabsTrigger value="new">New Vehicle</TabsTrigger>
                    </TabsList>

                    {/* EXISTING VEHICLE TAB */}
                    <TabsContent value="existing" className="space-y-4">
                        {/* Plate Input */}
                        <form onSubmit={handleSubmit} className="flex gap-2 items-center">
                            <Input
                                placeholder="Enter Plate Number"
                                value={plate}
                                onChange={(e) => setPlate(e.target.value)}
                            />
                            <Button type="submit">Submit</Button>
                        </form>

                        {/* Show either placeholder or data */}
                        {!submitted ? (
                            <div className="text-muted-foreground text-center py-16">
                                Vehicle details will show here
                            </div>
                        ) : (
                            <div className="flex flex-col gap-4">
                                {/* Image on top */}
                                <div className="w-full h-48 overflow-hidden rounded-xl flex justify-center items-center">
                                    <img
                                        src={CarPlaceholder}
                                        alt="Car"
                                        className="w-full h-full object-cover object-center"
                                    />
                                </div>

                                {/* Details below in 2 columns */}
                                <div className="grid grid-cols-5 gap-x-4 gap-y-2 text-sm relative mt-4">
                                    {/* Left side: columns 1 and 2 */}
                                    <div className="col-span-2 grid grid-cols-2 gap-x-4 gap-y-10">
                                        <p className="font-medium">Plate No:</p>
                                        <p>{plate}</p>

                                        <p className="font-medium">Ministry:</p>
                                        <p>Kuwait MOI</p>

                                        <p className="font-medium">Department:</p>
                                        <p>Transport Division</p>

                                        <p className="font-medium">Police No:</p>
                                        <p>MOI-2455</p>

                                        <p className="font-medium">Chassis No:</p>
                                        <p>CHS-9823XKD</p>
                                    </div>

                                    {/* Vertical separator */}
                                    <div className="w-px bg-muted h-full self-stretch mx-auto"></div>

                                    {/* Right side: columns 3 and 4 */}
                                    <div className="col-span-2 grid grid-cols-2 gap-x-4 gap-y-2">
                                        <p className="font-medium">Fuel Type:</p>
                                        <p>Petrol</p>

                                        <p className="font-medium">Cylinders:</p>
                                        <p>6</p>

                                        <p className="font-medium">Make:</p>
                                        <p>Toyota</p>

                                        <p className="font-medium">Model:</p>
                                        <p>Land Cruiser</p>

                                        <p className="font-medium">Year:</p>
                                        <p>2021</p>

                                        <p className="font-medium">Color:</p>
                                        <p>White</p>

                                        <p className="font-medium">Current KMs:</p>
                                        <p>88,000</p>

                                        <p className="font-medium">Last Service Date:</p>
                                        <p>2024-12-01</p>

                                        <p className="font-medium">Last Service KMs:</p>
                                        <p>82,000</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </TabsContent>

                    {/* NEW VEHICLE TAB */}
                    <TabsContent value="new">
                        <Form {...form}>
                            <form className="max-w-4xl mx-auto">
                                <div className="flex gap-6">
                                    {/* Left column */}
                                    <div className="flex-1 space-y-4">
                                        <FormItem>
                                            <FormLabel>Plate Number</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Plate Number" />
                                            </FormControl>
                                        </FormItem>

                                        <FormItem>
                                            <FormLabel>Company/Ministry</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Company or Ministry" />
                                            </FormControl>
                                        </FormItem>

                                        <FormItem>
                                            <FormLabel>Department</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Department" />
                                            </FormControl>
                                        </FormItem>

                                        <FormItem>
                                            <FormLabel>Police Number</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Police Number" />
                                            </FormControl>
                                        </FormItem>

                                        <FormItem>
                                            <FormLabel>Chassis Number</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Chassis Number" />
                                            </FormControl>
                                        </FormItem>

                                        <FormItem>
                                            <FormLabel>Fuel Type</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Fuel Type" />
                                            </FormControl>
                                        </FormItem>
                                    </div>

                                    {/* Vertical separator */}
                                    <div className="w-px bg-border"></div>

                                    {/* Right column */}
                                    <div className="flex-1 space-y-4">
                                        <FormItem>
                                            <FormLabel>Cylinders</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Number of Cylinders" />
                                            </FormControl>
                                        </FormItem>

                                        <FormItem>
                                            <FormLabel>Make</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Make" />
                                            </FormControl>
                                        </FormItem>

                                        <FormItem>
                                            <FormLabel>Model</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Model" />
                                            </FormControl>
                                        </FormItem>

                                        <FormItem>
                                            <FormLabel>Year</FormLabel>
                                            <FormControl>
                                                <Input type="number" placeholder="Year" />
                                            </FormControl>
                                        </FormItem>

                                        <FormItem>
                                            <FormLabel>Color</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Color" />
                                            </FormControl>
                                        </FormItem>
                                    </div>
                                </div>

                                <Button type="submit" className="w-full mt-6">
                                    Submit New Vehicle
                                </Button>
                            </form>
                        </Form>
                    </TabsContent>
                </Tabs>
            </CardContent>
        </Card>
    )
}
