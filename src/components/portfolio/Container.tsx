import * as React from 'react'

import { cn } from "@/lib/utils";
interface Props {
    size?: "sm" | "md" | "lg";
    children: React.ReactNode
}

const Container = ({ size, children }: Props) => {
    return (


        <div
            className={cn(
                "container px-8 lg:px-20 2xl:px-24 relative",
                size === "sm" && "max-w-4xl",
                size === "lg" && "max-w-[2200px]",
            )}
        >
            {children}
        </div>

    )
}

export default Container