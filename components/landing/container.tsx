import { cn } from "@/lib/utils"

export function Container({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1600px] px-6 lg:px-12", className)}
      {...props}
    >
      {children}
    </div>
  )
}

export function Section({
  className,
  children,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section
      className={cn("py-24 lg:py-[120px]", className)}
      {...props}
    >
      {children}
    </section>
  )
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
      {children}
    </p>
  )
}

export function SectionTitle({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <h2
      className={cn(
        "font-heading text-3xl leading-tight text-primary md:text-4xl lg:text-[2.75rem]",
        className
      )}
    >
      {children}
    </h2>
  )
}

export function Highlight({ children }: { children: React.ReactNode }) {
  return <span className="text-accent">{children}</span>
}
