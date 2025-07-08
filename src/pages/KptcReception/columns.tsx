"use client"

import { type ColumnDef } from "@tanstack/react-table"
import { CheckCircle, MoreHorizontal, XCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { DataTableColumnHeader } from "@/components/ui/DataTableColumnHeader"
import { toast } from "sonner"
import { cn } from "@/lib/utils"

export type KJO = {
    id: string
    serial: number
    jono: string
    date: string // Or use Date if you're parsing it
    plate: string
    vehiclemake: string
    garage: string
    jostatus: string
    servicetype: "Main Service" | "Quick Service" | "Sticker"
    waiting: boolean
}

export const columns: ColumnDef<KJO>[] = [
    {
        accessorKey: "serial",
        header: "S.No.",
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "jono",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Job Card No." />,
    },
    {
        accessorKey: "date",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Date" />,
    },
    {
        accessorKey: "plate",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Plate" />,
    },
    {
        accessorKey: "vehiclemake",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Vehicle Make" />,
    },
    {
        accessorKey: "garage",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Garage" />,
    },
    {
        accessorKey: "jostatus",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Status" />,
    },
    {
        accessorKey: "servicetype",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Service Type" />,
        cell: ({ row }) => {
            const type: string = row.getValue("servicetype")

            const styles = {
                "Main Service": {
                    color: "text-blue-500",
                    border: "border border-blue-500",
                    dot: "bg-blue-500",
                },
                "Quick Service": {
                    color: "text-green-500",
                    border: "border border-green-500",
                    dot: "bg-green-500",
                },
                Sticker: {
                    color: "text-yellow-500",
                    border: "border border-yellow-500",
                    dot: "bg-yellow-500",
                },
            }

            const style = styles[type as keyof typeof styles] ?? {
                color: "text-gray-600",
                border: "border border-gray-500",
                dot: "bg-gray-500",
            }

            return (
                <Badge
                    variant="outline"
                    className={cn("flex items-center gap-1 px-2 py-1", style.color, style.border)}
                >
                    <span className={`h-2 w-2 rounded-full ${style.dot}`} />
                    <span className="text-xs">{type}</span>
                </Badge>
            )
        },
    },
    {
        accessorKey: "waiting",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Customer Waiting" />,
        cell: ({ row }) => {
            const isWaiting = row.getValue("waiting")?.toString().toLowerCase() === "yes"

            return isWaiting ? (
                <div className="flex items-center text-green-500">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    <span className="text-xs">Yes</span>
                </div>
            ) : (
                <div className="flex items-center text-red-500">
                    <XCircle className="w-4 h-4 mr-1" />
                    <span className="text-xs">No</span>
                </div>
            )
        },
        enableSorting: true,
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const jc = row.original
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() => {
                                navigator.clipboard.writeText(jc.jono)
                                toast.info("Copied to Clipboard!")
                            }}
                        >
                            Copy Job Card No.
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]
