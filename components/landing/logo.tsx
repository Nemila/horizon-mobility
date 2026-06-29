import Image from "next/image"

import { cn } from "@/lib/utils"

export function Logo({
  className,
  showCaption = true,
  priority = false,
}: {
  className?: string
  showCaption?: boolean
  priority?: boolean
}) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <Image
        src="/horizon-logo.png"
        alt=""
        width={120}
        height={48}
        priority={priority}
        aria-hidden
        className="h-11 w-auto shrink-0 object-contain"
      />
      <div>
        <p className="text-lg font-semibold tracking-tight text-primary">
          Horizon Mobility
        </p>
        {showCaption && (
          <p className="text-[10px] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
            Études • Tourisme • Immigration
          </p>
        )}
      </div>
    </div>
  )
}
