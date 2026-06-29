import { ArrowRight, CheckCircle2, GraduationCap, Luggage } from "lucide-react";
import Image from "next/image";

import {
  Container,
  Eyebrow,
  Highlight,
  Section,
  SectionTitle,
} from "@/components/landing/container";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

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
    image: {
      src: "https://images.unsplash.com/photo-1627556704353-016baeb12c79?q=80&w=1170&auto=format&fit=crop",
      alt: "Étudiants sur un campus universitaire",
    },
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
    image: {
      src: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80",
      alt: "Voyageur avec carte et bagages",
    },
  },
];

export function ServicesSection() {
  return (
    <Section id="services" className="bg-section-alt pt-0">
      <Container className="flex flex-col items-center gap-10 text-center lg:gap-12">
        <div className="max-w-2xl">
          <Eyebrow>Nos services</Eyebrow>
          <SectionTitle>
            Des solutions adaptées à vos <Highlight>ambitions</Highlight>.
          </SectionTitle>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative flex flex-col overflow-hidden rounded-[28px] border border-border bg-white md:min-h-[320px] md:flex-row"
            >
              <div className="relative flex flex-1 flex-col p-8 text-left lg:p-10">
                <div
                  className={cn(
                    "pointer-events-none absolute top-0 left-0 h-40 w-40 rounded-full bg-gradient-to-br opacity-60 blur-2xl",
                    service.gradient,
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
                <Button
                  // href="#contact"
                  variant={"outline"}

                  // className="relative mt-auto inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-accent"
                >
                  En savoir plus
                  <ArrowRight className="size-4" />
                </Button>
              </div>

              <div className="relative h-52 w-full shrink-0 overflow-hidden md:h-auto md:w-[42%] lg:w-[38%]">
                <div
                  className="absolute inset-0 overflow-hidden md:[clip-path:polygon(14%_0,100%_0,100%_100%,0_100%)] [clip-path:polygon(0_12%,100%_0,100%_100%,0_100%)]"
                  aria-hidden
                >
                  <Image
                    src={service.image.src}
                    alt={service.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
