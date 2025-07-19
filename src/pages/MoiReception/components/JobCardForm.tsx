"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
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

import { useState } from "react"

const formSchema = z.object({
    plateNumber: z.string().min(1, "Plate number is required"),
    serviceType: z.enum(["Main", "Quick", "Sticker"]),
    customerWaiting: z.boolean(),
    datetime: z.string(),
    winchNeeded: z.boolean(),
    winchNo: z.string().optional(),
    driverId: z.string().optional(),
    customerName: z.string().optional(),
    ministryId: z.string().optional(),
    customerContact: z.string().optional(),
    freeCost: z.boolean(),
    garage: z.enum(["Garage_1", "Garage_2", "Garage_3", "Garage_4", "Garage_5"]),
    remarks: z.string().optional(),
})

export function JobCardForm() {
    const [showWinchField, setShowWinchField] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            datetime: new Date().toISOString(),
            customerWaiting: false,
            winchNeeded: false,
            freeCost: false,
        },
    })

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values)
        // You can call an API here to POST values
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                {/* Plate Number */}
                <FormField
                    control={form.control}
                    name="plateNumber"
                    render={({ field }) => (
                        <FormItem>
                            {/* <FormLabel>Plate Number</FormLabel> */}
                            <FormControl>
                                <Input placeholder="Plate No." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Service Type */}
                <FormField
                    control={form.control}
                    name="serviceType"
                    render={({ field }) => (
                        <FormItem>
                            {/* <FormLabel>Service Type</FormLabel> */}
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Service type" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="Main Service">Main Service</SelectItem>
                                    <SelectItem value="Quick Service">Quick Service</SelectItem>
                                    <SelectItem value="Sticker Service">Sticker Service</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Customer Waiting */}
                <FormField
                    control={form.control}
                    name="customerWaiting"
                    render={({ field }) => (
                        <FormItem className="flex items-center gap-2 space-y-0">
                            <FormControl>
                                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>
                            <FormLabel>Customer Waiting</FormLabel>
                        </FormItem>
                    )}
                />

                {/* Winch Needed */}
                <FormField
                    control={form.control}
                    name="winchNeeded"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Winch</FormLabel>
                            <div className="flex items-center gap-4">
                                <FormControl>
                                    <ToggleGroup
                                        type="single"
                                        value={field.value ? "yes" : "no"}
                                        onValueChange={(val) => {
                                            const isYes = val === "yes"
                                            field.onChange(isYes)
                                            setShowWinchField(isYes)
                                        }}
                                    >
                                        <ToggleGroupItem value="yes">Yes</ToggleGroupItem>
                                        <ToggleGroupItem value="no">No</ToggleGroupItem>
                                    </ToggleGroup>
                                </FormControl>
                            </div>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="winchNo"
                    render={({ field }) => (
                        <FormItem>
                            {/* <FormLabel>Winch Number</FormLabel> */}
                            <FormControl>
                                <Input
                                    placeholder="Enter Winch Number"
                                    disabled={!showWinchField}
                                    {...field}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />

                {/* Driver ID */}
                <FormField
                    control={form.control}
                    name="driverId"
                    render={({ field }) => (
                        <FormItem>
                            {/* <FormLabel>Driver ID</FormLabel> */}
                            <FormControl>
                                <Input placeholder="Driver ID" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />

                {/* Customer Name */}
                <FormField
                    control={form.control}
                    name="customerName"
                    render={({ field }) => (
                        <FormItem>
                            {/* <FormLabel>Customer Name</FormLabel> */}
                            <FormControl>
                                <Input placeholder="Customer Name" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />

                {/* Ministry ID */}
                <FormField
                    control={form.control}
                    name="ministryId"
                    render={({ field }) => (
                        <FormItem>
                            {/* <FormLabel>Ministry ID</FormLabel> */}
                            <FormControl>
                                <Input placeholder="Ministry ID" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />

                {/* Contact */}
                <FormField
                    control={form.control}
                    name="customerContact"
                    render={({ field }) => (
                        <FormItem>
                            {/* <FormLabel>Customer Contact</FormLabel> */}
                            <FormControl>
                                <Input placeholder="Customer Contact" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />

                {/* Free Cost */}
                <FormField
                    control={form.control}
                    name="freeCost"
                    render={({ field }) => (
                        <FormItem className="flex items-center gap-2 space-y-0">
                            <FormControl>
                                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>
                            <FormLabel>Free of Charge</FormLabel>
                        </FormItem>
                    )}
                />

                {/* Garage */}
                <FormField
                    control={form.control}
                    name="garage"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Garage</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Garage" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {[
                                        "Garage_1",
                                        "Garage_2",
                                        "Garage_3",
                                        "Garage_4",
                                        "Garage_5",
                                    ].map((g) => (
                                        <SelectItem key={g} value={g}>
                                            {g}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Remarks */}
                <FormField
                    control={form.control}
                    name="remarks"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Remarks</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Any additional comments..." {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <Button type="submit" className="w-full">
                    Submit Job Card
                </Button>
            </form>
        </Form>
    )
}
