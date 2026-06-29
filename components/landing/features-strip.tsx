import { ArrowRight, BarChart3, Globe, Shield, User } from "lucide-react";

import {
  Container,
  Eyebrow,
  Highlight,
  SectionTitle,
} from "@/components/landing/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: User,
    title: "Accompagnement personnalisé",
    description: "Un suivi dédié à chaque projet.",
    iconClass: "bg-primary/10 text-primary group-hover:bg-primary/15",
    accentClass: "bg-primary",
  },
  {
    icon: Shield,
    title: "Professionnalisme et transparence",
    description: "Des conseils clairs et honnêtes.",
    iconClass: "bg-accent/10 text-accent group-hover:bg-accent/15",
    accentClass: "bg-accent",
  },
  {
    icon: BarChart3,
    title: "Taux de réussite optimisé",
    description: "Des stratégies efficaces et éprouvées.",
    iconClass: "bg-primary/10 text-primary group-hover:bg-primary/15",
    accentClass: "bg-primary",
  },
  {
    icon: Globe,
    title: "Réseau international",
    description: "Des partenaires fiables dans le monde entier.",
    iconClass: "bg-accent/10 text-accent group-hover:bg-accent/15",
    accentClass: "bg-accent",
  },
];

export function FeaturesStrip() {
  return (
    <section className="bg-background py-24 lg:py-[120px]">
      <Container className="flex w-full flex-col items-center gap-10 lg:gap-12">
        <div className="max-w-2xl text-center">
          <Eyebrow>Pourquoi nous choisir</Eyebrow>
          <SectionTitle>
            L&apos;expertise qui fait la <Highlight>différence</Highlight>.
          </SectionTitle>
          <p className="mt-4 text-sm leading-relaxed text-secondary-foreground lg:text-base">
            De la première consultation à l&apos;obtention de votre visa, nous
            mettons notre savoir-faire au service de votre réussite.
          </p>
          <Button
            className="mt-6"
            nativeButton={false}
            render={<a href="#contact" />}
          >
            Prendre rendez-vous
            <ArrowRight />
          </Button>
        </div>

        <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative flex h-full flex-col justify-center overflow-hidden rounded-[22px] border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/15 lg:p-7"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute top-4 right-5 font-heading text-5xl leading-none font-medium text-primary/5 select-none"
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <div
                className={cn(
                  "relative mb-5 inline-flex size-12 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-105",
                  feature.iconClass,
                )}
              >
                <feature.icon className="size-5" strokeWidth={1.75} />
              </div>

              <h3 className="relative mb-2 text-[0.9375rem] font-semibold leading-snug text-primary">
                {feature.title}
              </h3>
              <p className="relative text-sm leading-relaxed text-secondary-foreground">
                {feature.description}
              </p>

              <div
                className={cn(
                  "absolute bottom-0 left-6 h-0.5 w-0 rounded-full transition-all duration-300 group-hover:w-10",
                  feature.accentClass,
                )}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
