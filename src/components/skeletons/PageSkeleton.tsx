import { Skeleton } from "@/components/ui/skeleton"

export default function PageSkeleton() {
    return (
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                <Skeleton className="aspect-video rounded-xl" />
                <Skeleton className="aspect-video rounded-xl" />
                <Skeleton className="aspect-video rounded-xl" />
            </div>
            <Skeleton className="flex-1 rounded-xl md:min-h-min" />
        </div>
    )
}
