import { DataTable } from "@/components/ui/DataTable"
import { columns, type MJC } from "./columns"
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
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

import { useEffect, useState } from "react"

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

function getData(): Promise<MJC[]> {
    // Fetch data from your API here.
    return Promise.resolve([
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
    ])
}

export default function JobCard() {
    const [data, setData] = useState<MJC[]>([])
    const [showWinchField, setShowWinchField] = useState(false)

    useEffect(() => {
        getData().then(setData)
    }, [])

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
        <div>
            <h2 className="text-2xl font-bold mb-4">Job Card - MOI</h2>

            <Card className="my-4">
                <CardContent>
                    <Dialog>
                        <DialogTrigger>
                            <Button>Create New Job Card</Button>
                        </DialogTrigger>
                        <DialogContent className="!max-w-4xl h-[90vh] overflow-hidden">
                            <DialogHeader>
                                <DialogTitle>New Job Card</DialogTitle>
                                <DialogDescription className="text-muted-foreground">
                                    Fill in the details to create a new job card.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="overflow-y-auto max-h-[calc(90vh-8rem)]">
                                <Form {...form}>
                                    <form
                                        onSubmit={form.handleSubmit(onSubmit)}
                                        className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4"
                                    >
                                        {/* 🔹 Section: Vehicle Details */}
                                        <div className="col-span-full">
                                            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide border-b pb-1">
                                                Vehicle Details
                                            </h3>
                                        </div>

                                        <FormField
                                            control={form.control}
                                            name="plateNumber"
                                            render={({ field }) => (
                                                <FormItem className="flex items-center gap-2">
                                                    <FormLabel className="w-32 shrink-0">
                                                        Plate No.
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            {...field}
                                                            placeholder="Plate Number"
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name="ministryId"
                                            render={({ field }) => (
                                                <FormItem className="flex items-center gap-2">
                                                    <FormLabel className="w-32 shrink-0">
                                                        Ministry ID
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            {...field}
                                                            placeholder="Ministry ID"
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name="customerContact"
                                            render={({ field }) => (
                                                <FormItem className="flex items-center gap-2">
                                                    <FormLabel className="w-32 shrink-0">
                                                        Contact
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            {...field}
                                                            placeholder="Contact Number"
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name="garage"
                                            render={({ field }) => (
                                                <FormItem className="flex items-center gap-2">
                                                    <FormLabel className="w-32 shrink-0">
                                                        Garage
                                                    </FormLabel>
                                                    <Select
                                                        onValueChange={field.onChange}
                                                        defaultValue={field.value}
                                                    >
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

                                        {/* 🔹 Section: Job Details */}
                                        <div className="col-span-full">
                                            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide border-b pb-1">
                                                Job Details
                                            </h3>
                                        </div>

                                        <FormField
                                            control={form.control}
                                            name="serviceType"
                                            render={({ field }) => (
                                                <FormItem className="flex items-center gap-2">
                                                    <FormLabel className="w-32 shrink-0">
                                                        Service Type
                                                    </FormLabel>
                                                    <Select
                                                        onValueChange={field.onChange}
                                                        defaultValue={field.value}
                                                    >
                                                        <FormControl>
                                                            <SelectTrigger>
                                                                <SelectValue placeholder="Select type" />
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent>
                                                            <SelectItem value="Main">
                                                                Main
                                                            </SelectItem>
                                                            <SelectItem value="Quick">
                                                                Quick
                                                            </SelectItem>
                                                            <SelectItem value="Sticker">
                                                                Sticker
                                                            </SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name="customerWaiting"
                                            render={({ field }) => (
                                                <FormItem className="flex items-center gap-2">
                                                    <FormLabel className="w-32 shrink-0">
                                                        Waiting?
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Checkbox
                                                            checked={field.value}
                                                            onCheckedChange={field.onChange}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name="freeCost"
                                            render={({ field }) => (
                                                <FormItem className="flex items-center gap-2">
                                                    <FormLabel className="w-32 shrink-0">
                                                        Free Cost?
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Checkbox
                                                            checked={field.value}
                                                            onCheckedChange={field.onChange}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        {/* 🔹 Section: Winch */}
                                        <div className="col-span-full">
                                            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide border-b pb-1">
                                                Winch
                                            </h3>
                                        </div>

                                        <FormField
                                            control={form.control}
                                            name="winchNo"
                                            render={({ field }) => (
                                                <FormItem className="flex items-center gap-2">
                                                    <FormLabel className="w-32 shrink-0">
                                                        Winch No.
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            {...field}
                                                            placeholder="Enter Winch No."
                                                            disabled={!showWinchField}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name="winchNeeded"
                                            render={({ field }) => (
                                                <FormItem className="flex items-center gap-2">
                                                    <FormLabel className="w-32 shrink-0">
                                                        Needed?
                                                    </FormLabel>
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
                                                            <ToggleGroupItem value="yes">
                                                                Yes
                                                            </ToggleGroupItem>
                                                            <ToggleGroupItem value="no">
                                                                No
                                                            </ToggleGroupItem>
                                                        </ToggleGroup>
                                                    </FormControl>
                                                </FormItem>
                                            )}
                                        />

                                        {/* 🔹 Section: Customer Info */}
                                        <div className="col-span-full">
                                            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide border-b pb-1">
                                                Customer Info
                                            </h3>
                                        </div>

                                        <FormField
                                            control={form.control}
                                            name="driverId"
                                            render={({ field }) => (
                                                <FormItem className="flex items-center gap-2">
                                                    <FormLabel className="w-32 shrink-0">
                                                        Driver ID
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input {...field} placeholder="Driver ID" />
                                                    </FormControl>
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name="customerName"
                                            render={({ field }) => (
                                                <FormItem className="flex items-center gap-2">
                                                    <FormLabel className="w-32 shrink-0">
                                                        Customer
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            {...field}
                                                            placeholder="Customer Name"
                                                        />
                                                    </FormControl>
                                                </FormItem>
                                            )}
                                        />

                                        {/* 🔹 Section: Remarks */}
                                        <div className="col-span-full">
                                            <FormField
                                                control={form.control}
                                                name="remarks"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Remarks</FormLabel>
                                                        <FormControl>
                                                            <Textarea
                                                                {...field}
                                                                placeholder="Any additional comments..."
                                                            />
                                                        </FormControl>
                                                    </FormItem>
                                                )}
                                            />
                                        </div>

                                        {/* Submit Button */}
                                        <div className="col-span-full">
                                            <Button type="submit" className="w-full">
                                                Submit Job Card
                                            </Button>
                                        </div>
                                    </form>
                                </Form>
                            </div>
                        </DialogContent>
                    </Dialog>
                </CardContent>
            </Card>

            <DataTable data={data} columns={columns} />
        </div>
    )
}
