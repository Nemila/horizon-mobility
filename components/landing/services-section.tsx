import { ArrowRight, CheckCircle2, GraduationCap, Luggage } from "lucide-react"

import {
  Container,
  Eyebrow,
  Highlight,
  Section,
  SectionTitle,
} from "@/components/landing/container"
import { cn } from "@/lib/utils"

const services = [
  {
    icon: GraduationCap,
    title: "Visa Études",
    items: [
      "Conseils personnalisés",
      "Assistance dans le choix des établissements",
      "Préparation et soumission de dossiers",
      "Suivi jusqu'à l'obtention du visa",
    ],
    gradient: "from-blue-50/80 to-primary/5",
  },
  {
    icon: Luggage,
    title: "Visa Tourisme",
    items: [
      "Conseils adaptés à votre projet",
      "Préparation complète du dossier",
      "Prise de rendez-vous",
      "Suivi et accompagnement jusqu'à l'obtention du visa",
    ],
    gradient: "from-orange-50/80 to-accent/5",
  },
]

export function ServicesSection() {
  return (
    <Section id="services" className="pt-0">
      <Container className="flex flex-col items-center gap-10 text-center lg:gap-12">
        <div className="max-w-2xl">
          <Eyebrow>Nos services</Eyebrow>
          <SectionTitle>
            Des solutions adaptées à vos <Highlight>ambitions</Highlight>.
          </SectionTitle>
        </div>

        <div className="grid w-full gap-6 md:grid-cols-2 lg:gap-8">
          {services.map((service) => (
            <article
              key={service.title}
              className="relative overflow-hidden rounded-[28px] border border-border bg-white p-8 text-left shadow-card lg:p-10"
            >
              <div
                className={cn(
                  "pointer-events-none absolute top-0 right-0 h-40 w-40 rounded-full bg-gradient-to-br opacity-60 blur-2xl",
                  service.gradient
                )}
              />
              <div className="relative mb-6 flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <service.icon className="size-6" strokeWidth={1.5} />
              </div>
              <h3 className="relative mb-6 text-sm font-bold tracking-[0.15em] text-primary uppercase">
                {service.title}
              </h3>
              <ul className="relative mb-8 space-y-3">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-secondary-foreground"
                  >
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="relative inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-accent"
              >
                En savoir plus
                <ArrowRight className="size-4" />
              </a>
              <div className="absolute right-0 bottom-0 h-32 w-32 rounded-tl-[28px] bg-gradient-to-br from-border/40 to-transparent" />
            </article>
          ))}
        </div>
      </Container>
    </Section>
  )
}
