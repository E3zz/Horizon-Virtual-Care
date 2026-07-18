import * as React from "react"
import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      className={cn(
        "flex h-11 w-full rounded-xl border border-charcoal/10 bg-cream/30 px-4 py-2 text-base text-charcoal placeholder:text-charcoal/40 transition-all duration-200 outline-none focus:outline-none focus-visible:outline-none focus:bg-white focus:border-accent focus:ring-2 focus:ring-accent/20 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Input }
