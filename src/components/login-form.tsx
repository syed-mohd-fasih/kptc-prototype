"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Shield, Badge, MoreHorizontal } from "lucide-react"
import type { LucideIcon } from "lucide-react"

type Project = {
    name: string
    logo: LucideIcon
    plan: string
}

const projects: Project[] = [
    {
        name: "KPTC | MOI",
        logo: Shield,
        plan: "Garage Management System",
    },
    {
        name: "Other",
        logo: Badge,
        plan: "~",
    },
]

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface LoginFormProps extends React.ComponentProps<"form"> {}

export function LoginForm({ className, ...props }: LoginFormProps) {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)

    return (
        <form className={cn("flex flex-col gap-6", className)} {...props}>
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Login</h1>
                {selectedProject ? (
                    <div className="text-sm text-muted-foreground">
                        Project: {selectedProject.name}
                    </div>
                ) : (
                    <div className="text-sm text-muted-foreground">Select a project</div>
                )}
            </div>

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="w-full justify-between">
                        {selectedProject ? (
                            <>
                                <selectedProject.logo className="mr-2 h-4 w-4" />
                                {selectedProject.name}
                            </>
                        ) : (
                            <>Choose Project</>
                        )}
                        <MoreHorizontal className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full">
                    {projects.map((project) => (
                        <DropdownMenuItem
                            key={project.name}
                            onClick={() => setSelectedProject(project)}
                        >
                            <project.logo className="mr-2 h-4 w-4 text-muted-foreground" />
                            {project.name}
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>

            <div className="grid gap-3">
                <Label htmlFor="username">Username</Label>
                <Input id="username" type="text" placeholder="Username" required />
            </div>

            <div className="grid gap-3">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="••••••" required />
            </div>

            <Button type="submit" className="w-full">
                Login
            </Button>
        </form>
    )
}
