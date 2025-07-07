import React from "react"
import PageSkeleton from "@/components/skeletons/PageSkeleton"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function wrapWithSkeleton(Component: React.LazyExoticComponent<any>) {
    return (
        <React.Suspense fallback={<PageSkeleton />}>
            <Component />
        </React.Suspense>
    )
}
