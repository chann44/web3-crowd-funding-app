"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SidebarData, SiteRoute } from "@/config/site";
import { TooltipProvider } from "@radix-ui/react-tooltip";

export function Sidebar() {
  return (
    <TooltipProvider>
      <div className="group  border flex flex-col gap-4 py-2 h-full">
        <nav className="flex flex-col gap-1 px-2 ">
          {SidebarData.map((link, index) => (
            <Tooltip key={index} delayDuration={0}>
              <TooltipTrigger asChild>
                <Link
                  href={link.href}
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "justify-start gap-2 "
                  )}
                >
                  <link.icon className="h-4 w-4" />
                  <span className="text-right">{link.label}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="flex items-center gap-4">
                {link.label}
              </TooltipContent>
            </Tooltip>
          ))}
        </nav>
      </div>
    </TooltipProvider>
  );
}
