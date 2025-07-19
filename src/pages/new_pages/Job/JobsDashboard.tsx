import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Plus } from "lucide-react"
import { Link } from "react-router-dom"
import CarPlaceholder from "@/assets/placeholder_car.png"

export default function JobsDashboard() {
    return (
        <div className="px-4 lg:px-6">
            {/* <h2 className="text-2xl font-bold mb-4">Job Cards</h2> */}
            <Card className="@container/card">
                <CardHeader>
                    <CardTitle>Job Cards</CardTitle>
                    <CardDescription>All Job Cards</CardDescription>
                    <CardAction className="flex flex-row space-x-2">
                        <ToggleGroup
                            type="single"
                            variant="outline"
                            className="hidden *:data-[slot=toggle-group-item]:!px-4 @[767px]/card:flex"
                        >
                            <ToggleGroupItem value="inprogress">In Progress</ToggleGroupItem>
                            <ToggleGroupItem value="completed">Completed</ToggleGroupItem>
                            <ToggleGroupItem value="all">All Jobs</ToggleGroupItem>
                        </ToggleGroup>
                        <Link to="/Jobs/New">
                            <Button>
                                <Plus />
                                Create New Job Card
                            </Button>
                        </Link>
                    </CardAction>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <Card className="cursor-pointer hover:shadow-md transition overflow-hidden">
                            <CardHeader className="p-4 pb-2">
                                <CardTitle className="font-bold">Job Card Number</CardTitle>
                                <CardDescription>Garage Name</CardDescription>
                                <CardAction>
                                    <span className="px-3 py-1 rounded-full outline-2 outline-green-600 text-green-600 font-normal">
                                        In Progress
                                    </span>
                                </CardAction>
                            </CardHeader>

                            <CardContent className="text-sm pt-0 px-4 pb-4">
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <div className="flex-1 space-y-1">
                                        <p>
                                            <span className="font-medium">Date:</span> Date
                                        </p>
                                        <p>
                                            <span className="font-medium">Plate:</span> Plate Number
                                        </p>
                                        <p>
                                            <span className="font-medium">Vehicle:</span> Vehicle
                                            Make
                                        </p>
                                        <p>
                                            <span className="font-medium">Status:</span>
                                            <span className="ml-2 text-green-600 font-semibold">
                                                Waiting for Technician Approval
                                            </span>
                                        </p>
                                    </div>

                                    <div className="w-full sm:w-32 rounded-2xl overflow-hidden self-start">
                                        <img
                                            src={CarPlaceholder}
                                            alt="Vehicle"
                                            className="aspect-square object-cover"
                                        />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </CardContent>
                <CardFooter className="justify-center">
                    <Button variant="secondary" className="rounded-full">
                        Load more
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}
