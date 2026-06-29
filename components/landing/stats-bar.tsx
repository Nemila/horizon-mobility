import { Award, Globe2, Smile, Target } from "lucide-react"

import { Container } from "@/components/landing/container"

const stats = [
  {
    icon: Target,
    value: "+2500",
    label: "Projets réalisés avec succès",
  },
  {
    icon: Globe2,
    value: "+15",
    label: "Pays de destination dans le monde",
  },
  {
    icon: Smile,
    value: "98%",
    label: "Taux de satisfaction de nos clients",
  },
  {
    icon: Award,
    value: "7+",
    label: "Années d'expérience à vos côtés",
  },
]

export function StatsBar() {
  return (
    <section className="bg-background pb-24 lg:pb-[120px]">
      <Container>
        <div className="grid gap-8 rounded-[28px] border border-border bg-white px-6 py-10 shadow-card sm:grid-cols-2 lg:grid-cols-4 lg:px-10 lg:py-12">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-4 text-center"
            >
              <div className="flex size-14 items-center justify-center rounded-full border border-border text-primary">
                <stat.icon className="size-6" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">{stat.value}</p>
                <p className="mt-1 text-sm text-secondary-foreground">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
