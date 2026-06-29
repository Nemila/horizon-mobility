import { BarChart3, Globe, Shield, User } from "lucide-react"

import { Container } from "@/components/landing/container"

const features = [
  {
    icon: User,
    title: "Accompagnement personnalisé",
    description: "Un suivi dédié à chaque projet.",
  },
  {
    icon: Shield,
    title: "Professionnalisme et transparence",
    description: "Des conseils clairs et honnêtes.",
  },
  {
    icon: BarChart3,
    title: "Taux de réussite optimisé",
    description: "Des stratégies efficaces et éprouvées.",
  },
  {
    icon: Globe,
    title: "Réseau international",
    description: "Des partenaires fiables dans le monde entier.",
  },
]

export function FeaturesStrip() {
  return (
    <section className="pb-24 lg:pb-[120px]">
      <Container>
        <div className="grid gap-8 rounded-[28px] border border-border bg-white px-6 py-10 shadow-card sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 lg:px-10 lg:py-12">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center gap-4 text-center">
              <div className="flex size-14 items-center justify-center rounded-full border border-border text-primary">
                <feature.icon className="size-6" strokeWidth={1.5} />
              </div>
              <p className="text-sm leading-relaxed text-secondary-foreground">
                <span className="font-semibold text-primary">{feature.title}</span>
                {" – "}
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
