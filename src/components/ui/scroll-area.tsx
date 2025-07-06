import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

import { cn } from "@/lib/utils";

function ScrollArea({
    className,
    children,
    ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.Root>) {
    return (
        <ScrollAreaPrimitive.Root
            data-slot="scroll-area"
            className={cn("relative overflow-hidden", className)}
            {...props}
        >
            <ScrollAreaPrimitive.Viewport
                data-slot="scroll-area-viewport"
                className="size-full rounded-[inherit] transition-all focus-visible:outline-none"
            >
                {children}
            </ScrollAreaPrimitive.Viewport>
            <ScrollBar />
            <ScrollAreaPrimitive.Corner />
        </ScrollAreaPrimitive.Root>
    );
}

function ScrollBar({
    className,
    orientation = "vertical",
    ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>) {
    return (
        <ScrollAreaPrimitive.ScrollAreaScrollbar
            data-slot="scroll-area-scrollbar"
            orientation={orientation}
            className={cn(
                "flex touch-none p-px transition-colors select-none",
                orientation === "vertical" && "h-full w-2.5 pr-[2px]",
                orientation === "horizontal" && "h-1.5 flex-col pb-[2px]",
                className
            )}
            {...props}
        >
            <ScrollAreaPrimitive.ScrollAreaThumb
                data-slot="scroll-area-thumb"
                className={cn(
                    "relative flex-1 rounded-full bg-muted-foreground/30 hover:bg-muted-foreground/50 transition-colors"
                )}
            />
        </ScrollAreaPrimitive.ScrollAreaScrollbar>
    );
}

export { ScrollArea, ScrollBar };
