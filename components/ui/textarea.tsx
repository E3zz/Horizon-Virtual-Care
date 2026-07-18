import * as React from "react"
import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "flex min-h-28 w-full rounded-xl border border-charcoal/10 bg-cream/30 px-4 py-3 text-base text-charcoal placeholder:text-charcoal/40 transition-all duration-200 outline-none focus:outline-none focus-visible:outline-none focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm resize-none",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
